import fetch from "node-fetch";

const API_END_POINT = process.env.API_END_POINT;
const USERNAME = process.env.USERNAME;

export default async function handler(req, res) {
  const { documentId } = req.query;

  let id = "";
  if (documentId) {
    id = `/${documentId}`;
  }

  const response = await fetch(`${API_END_POINT}${id}`, {
    headers: {
      "Content-Type": "application/json",
      "x-username": USERNAME,
    },
  });

  if (response.ok) {
    const data = await response.json();
    res.status(200).json(data);
  }
}
