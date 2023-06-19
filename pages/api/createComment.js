import { createClient } from "next-sanity";
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: "http://localhost:3000" ? false : true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
};
const client = createClient(config);

export default async function createComment(req, res) {
  const { _id, name, email, comment } = req.body;
  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }
  return res.status(200).json({ message: "Comment submitted successfully" });
}
