import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const { email, text } = req.body;
    const feedbackText = {
      id: new Date().toISOString(),
      email,
      text,
    };
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(feedbackText);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: "Success",
      feedback: feedbackText,
    });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({
      feedback: data,
    });
  }
}

export default handler;
