import React from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const Feedback = (props) => {
  return (
    <ul>
      {props.feedbackItems.map((feedback) => (
        <li key={feedback.id}>{feedback.text}</li>
      ))}
    </ul>
  );
};

export default Feedback;

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}
