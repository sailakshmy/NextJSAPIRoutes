import { useRef, useState } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedback, setFeedback] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    const eneteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {
      email: eneteredEmail,
      text: enteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function loadFeedback() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedback(data.feedback);
      });
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <input
            type="textarea"
            id="feedback"
            rows="5"
            ref={feedbackInputRef}
          />
        </div>
        <button type="Submit">Send Feedback</button>
      </form>
      <hr />
      <button type="button" onClick={loadFeedback}>
        Load feedback
      </button>
      <ul>
        {feedback?.map((f) => (
          <li key={f.id}>
            {f.text} by {f.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
