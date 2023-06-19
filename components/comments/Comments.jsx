"use client";
import { useState } from "react";
import Styles from "./Comments.module.scss";
import pfp from "../../assets/pfp.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { set } from "sanity";

const Comments = ({ postId, comments }) => {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    setFormData(data);
    try {
      await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };
  return (
    <div className={Styles.container}>
      <p className={Styles.heading}>comments</p>
      <div className={Styles.rule} />
      {(isSubmitting == false) & (hasSubmitted == false) ? (
        <p className={Styles.heading}>Add a comment...</p>
      ) : (
        ""
      )}
      {isSubmitting && <h3>Submitting comment…</h3>}
      {hasSubmitted && (
        <>
          {<h3>Thanks {formData.name} for the comment.</h3>}
          <br />
          <p>Your comment has been submitted for review.</p>
          <br />
          <p>
            Email: {formData.email} <br />
            Comment: {formData.comment}
          </p>
        </>
      )}
      {(isSubmitting == false) & (hasSubmitted == false) ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("_id")} type="hidden" name="_id" value={postId} />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Display Name"
            {...register("name")}
            required
          />
          <input
            required
            type="email"
            name="email"
            {...register("email")}
            id="email"
            placeholder="Enter Email"
          />
          <textarea
            name="comment"
            id="comment"
            {...register("comment")}
            placeholder="Write a comment..."
            required
          ></textarea>
          <button>Publish</button>
        </form>
      ) : (
        <p> </p>
      )}
      {comments && (
        <div className={Styles.comments}>
          {comments
            .filter((comment) => comment.post._ref == postId)
            .map((comment, i) => (
              <div key={i} className={Styles.commentContainer}>
                <div className={Styles.namecontainer}>
                  <Image src={pfp} alt="img" />
                  <span>
                    <p className={Styles.name}>{comment.name}</p>
                    <p className={Styles.date}>
                      {new Date(comment._createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </span>
                </div>
                <p className={Styles.comment}>{comment.comment}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
