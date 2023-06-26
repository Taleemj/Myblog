import styles from "./Aboutme.module.scss";
import Image from "next/image";
import image from "../../../assets/img2.jpg";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutme}>
        <Image src={image} alt="me" />
        <div className={styles.txt}>
          <h1>Hey! How are you doing?</h1>
          <p>
            My name is Taleem Mankuer, the creator of the developer blog an
            aspiring developer and student specialing in frontend web
            development. I work with React and Next js and enjoy finding
            creative solutions to problems related to web development and spend
            my time experimenting with technologies and inhale a wide variety of
            potentially useful information through different platforms.
          </p>
          <p>
            I created the developer blog so that i can be able to share by
            knowledge, skills, also learn more and grow as a developer along the
            way and hopefully build a community of like minded people around the
            world.
          </p>
          <p>
            I enjoy making conections and trying out new things, i love to
            increase my skills and knowledge and would love to advance in my
            career as a developer. I am open for any opportunities and
            collaborations if you may be interested. I build websites that
            delight and inform and try give it my all.
          </p>
          <p>You can find more of my projects on my Portfolio.</p>
          <Link
            href={`https://taleem-mankuer.web.app/`}
            target="_blank"
            rel="noreferral"
          >
            <button>Portfolio</button>
          </Link>
          <p className={styles.bye}>Thanks for stopping by. &#128075;</p>
        </div>
      </div>
    </div>
  );
};

export default page;
