import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const Feedback = (props) => {
  const [feedbackDetails, setFeedbackDetails] = useState();
  const showFeedbackDetails = (id) => {
    fetch(`/api/${id}`)
      .then((data) => data.json())
      .then((data) => setFeedbackDetails(data.feedback));
  };
  return (
    <>
      <ul>
        {props.feedbackItems.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text}

            <button onClick={showFeedbackDetails.bind(null, feedback.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
      {feedbackDetails && <p>{feedbackDetails.email}</p>}
    </>
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
