import { buildFeedbackPath, extractFeedback } from "../feedback";

export default function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  const feedback = data?.find((item) => item?.id === feedbackId);
  res.status(200).json({
    feedback,
  });
}
