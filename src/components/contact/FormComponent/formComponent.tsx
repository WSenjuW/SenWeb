import "./formComponent.css";

export default function FormComponent() {
  return (
    <form id="form-box">
      <h1 id="title-form">Contact me</h1>
      <div id="name-email-box">
        <div id="name-input-box">
          <input type="text" placeholder="Name" required autoComplete="off" />
          <label> Name</label>
        </div>
        <div id="email-input-box">
          <input required type="email" placeholder="Email" />
          <label>Email</label>
        </div>
      </div>
      <div id="subject-input-box">
        <input type="text" placeholder="Subject" required />
        <label>Subject</label>
      </div>
      <div id="message-input-box">
        <textarea required placeholder="Message"/>
        <label>Message</label>
      </div>
      <button id="btn-send-form" >SEND</button>
    </form>
  );
}
