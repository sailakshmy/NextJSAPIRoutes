import fs from "fs";
import path from "path";
function handler(req, res) {
  if (req.method === "POST") {
    const { email, text } = req.body;
    const feedbackText = {
      id: new Date().toISOString(),
      email,
      text,
    };
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(feedbackText);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: "Success",
      feedback: feedbackText,
    });
  } else {
    res.status(200).json({
      message: "This works!",
    });
  }
}

export default handler;
