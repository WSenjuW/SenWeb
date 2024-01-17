import { useState, useEffect } from "react";
import "./formComponent.css";

export default function FormComponent() {
  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Subject, setSubject] = useState<string>("");
  const [Message, setMessage] = useState<string>("");

  useEffect(() => {
    console.log({
      name: Name,
      email: Email,
      subject: Subject,
      message: Message,
    });
  }, [Name, Email, Subject, Message]);

  function handleOnChangeName(e: any) {
    setName((e.target as HTMLInputElement).value);
  }

  function handleOnChangeEmail(e: any) {
    setEmail((e.target as HTMLInputElement).value);
  }
  function handleOnChangeSubject(e: any) {
    setSubject((e.target as HTMLInputElement).value);
  }
  function handleOnChangeMessage(e: any) {
    setMessage((e.target as HTMLInputElement).value);
  }

  return (
    <form id="form-box">
      <h1 id="title-form">Contact me</h1>
      <div id="name-email-box">
        <div id="name-input-box">
          <input
            type="text"
            placeholder="Name"
            required
            maxLength={24}
            pattern="[a-z]{3,20}"
            onChange={(e) => handleOnChangeName(e)}
          />
          <label style={{ top: Name != "" ? "-1.4rem" : "" }}>Name</label>
        </div>
        <div id="email-input-box">
          <input
            onChange={handleOnChangeEmail}
            required
            type="email"
            maxLength={50}
            placeholder="Email"
          />
          <label style={{ top: Email != "" ? "-1.4rem" : "" }}>Email</label>
        </div>
      </div>
      <div id="subject-input-box">
        <input
          maxLength={25}
          onChange={handleOnChangeSubject}
          type="text"
          placeholder="Subject"
          required
        />
        <label style={{ top: Subject != "" ? "-1.4rem" : "" }}>Subject</label>
      </div>
      <div id="message-input-box">
        <textarea
          maxLength={1100}
          onChange={handleOnChangeMessage}
          required
          placeholder="Message"
        />
        <label style={{ top: Message != "" ? "-1.4rem" : "" }}>Message</label>
      </div>
      <button id="btn-send-form">SEND</button>
    </form>
  );
}
