import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const eneteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
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
    </div>
  );
}

export default HomePage;
