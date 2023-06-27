import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  type: "document",
  title: "Comments",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comments won't show on the site without approval",
    }),
    defineField({
      title: "Email",
      name: "email",
      type: "string",
    }),
    defineField({
      title: "Title",
      name: "comment",
      type: "text",
    }),
    defineField({
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    }),
  ],
  preview: {
    select: {
      name: "name",
      comment: "comment",
      post: "post.title",
    },
    prepare({ name, comment, post }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      };
    },
  },
});
