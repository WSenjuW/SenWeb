import { useState, useEffect } from "react";
import "./formComponent.css";
import {
  checkFunction_Email,
  checkFunction_Message,
  checkFunction_Name,
  checkFunction_Subject,
} from "./ValidationsInputs";

function COLOR_LABEL(e: undefined | boolean) {
  let color;
  if (e == false) color = "#ff0000";
  if (e == true) color = "#15ff00";
  if (e == undefined) color = "#f1f1f1";
  return color;
}
type formStructure = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type validationType = {
  nameAlert?: undefined | string;
  emailAlert?: undefined | string;
  subjectAlert?: undefined | string;
  messageAlert?: undefined | string;
};

// IV = Is Valid

export default function FormComponent() {
  const [FormData, setFormData] = useState<formStructure>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [IVName, setIVName] = useState<undefined | boolean>(undefined);
  const [IVEmail, setIVEmail] = useState<undefined | boolean>(undefined);
  const [IVSubject, setIVSubject] = useState<undefined | boolean>(undefined);
  const [IVMessage, setIVMessage] = useState<undefined | boolean>(undefined);
  const [errorTexts, setErrorTexts] = useState<validationType>({});
  const [FormSending, setFormSending] = useState<boolean>(false);
  const [infoStatusMessage, setInfoStatusMessage] = useState<string>("");

  useEffect(() => {
    const alertMessage = document.getElementsByClassName("inputAlert");
    for (let i = 0; i < alertMessage.length; i++) {
      const element: any = alertMessage[i];
      element.style.bottom = `${-element.clientHeight - 10}px`;
    }
  }, [errorTexts]);

  function validationForm(e: any) {
    e.preventDefault();
    let nameChecked = checkFunction_Name(FormData.name.trim());
    let emailChecked = checkFunction_Email(FormData.email.trim());
    let subjectChecked = checkFunction_Subject(FormData.subject.trim());
    let messageChecked = checkFunction_Message(FormData.message.trim());

    setIVName(nameChecked.isValid);
    setIVEmail(emailChecked.isValid);
    setIVSubject(subjectChecked.isValid);
    setIVMessage(messageChecked.isValid);

    if (nameChecked.isValid === false) {
      setErrorTexts({
        nameAlert: nameChecked.errorText,
        emailAlert: undefined,
        subjectAlert: undefined,
        messageAlert: undefined,
      });
    }

    if (nameChecked.isValid === true) {
      setErrorTexts({
        nameAlert: undefined,
        emailAlert: emailChecked.errorText,
        subjectAlert: undefined,
        messageAlert: undefined,
      });
    }
    if (emailChecked.isValid === true && nameChecked.isValid === true) {
      setErrorTexts({
        nameAlert: undefined,
        emailAlert: undefined,
        subjectAlert: subjectChecked.errorText,
        messageAlert: undefined,
      });
    }
    if (
      subjectChecked.isValid === true &&
      emailChecked.isValid === true &&
      nameChecked.isValid === true
    ) {
      setErrorTexts({
        nameAlert: undefined,
        emailAlert: undefined,
        subjectAlert: undefined,
        messageAlert: messageChecked.errorText,
      });
    }

    if (IVName && IVEmail && IVSubject && IVMessage) {
      setFormSending(true);
      const SendInfo = async (url: string) => {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: FormData.name,
            email: FormData.email,
            subject: FormData.subject,
            message: FormData.message,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setInfoStatusMessage(
              "The message was sent successfully, we will contact."
            );
          })
          .catch((error) => {
            console.log(error);
            setInfoStatusMessage(
              "oh, an error occurred, please. communicate to the e-mail wsenjuw@gmail.com."
            );
          });
      };
      SendInfo("https://formsubmit.co/ajax/470a6ebabe48dd3add82e73685700cc7");
      console.log("Todo correcto");
    }
  }

  return (
    <form id="form-box">
      {FormSending === true ? (
        <div id="loaderContent">
          {infoStatusMessage === "" ? (
            <>
              <h1>Please, wait a moment ...</h1>
              <div className="loader">
                <div className="justify-content-center jimu-primary-loading"></div>
              </div>
            </>
          ) : (
            <h2 id="messageStatusInfo">{infoStatusMessage}</h2>
          )}
        </div>
      ) : (
        <div id="formContentInputs">
          <h1 id="title-form">Contact me</h1>
          <input type="hidden" name="_template" value="basic"></input>
          <div id="name-email-box">
            <div id="name-input-box">
              
              <input
                type="text"
                placeholder="Name"
                required
                maxLength={100}
                onChange={({ target }) => {
                  setFormData({ ...FormData, name: target.value });
                  setIVName(undefined);
                }}
                onFocus={() => {
                  setIVName(undefined);
                  setErrorTexts({});
                }}
              />
              <label
                style={{
                  color: COLOR_LABEL(IVName),
                  top: FormData.name !== "" ? "-1.4em" : "",
                }}
              >
                Name
              </label>
              {errorTexts.nameAlert != undefined && (
                <p className="inputAlert">{errorTexts.nameAlert}</p>
              )}
            </div>
            <div id="email-input-box">
              <input
                onChange={({ target }) => {
                  setFormData({ ...FormData, email: target.value });
                  setIVEmail(undefined);
                }}
                onFocus={() => {
                  setIVEmail(undefined);
                  setErrorTexts({});
                }}
                required
                type="email"
                maxLength={50}
                placeholder="Email"
              />
              <label
                style={{
                  color: COLOR_LABEL(IVEmail),
                  top: FormData.email != "" ? "-1.4rem" : "10px",
                }}
              >
                Email
              </label>
              {errorTexts.emailAlert != undefined && (
                <p className="inputAlert">{errorTexts.emailAlert}</p>
              )}
            </div>
          </div>
          <div id="subject-input-box">
            <input
              maxLength={50}
              onChange={({ target }) => {
                setFormData({ ...FormData, subject: target.value });
                setIVSubject(undefined);
              }}
              onFocus={() => {
                setIVSubject(undefined);
                setErrorTexts({});
              }}
              type="text"
              placeholder="Subject"
              required
            />
            <label
              style={{
                color: COLOR_LABEL(IVSubject),
                top: FormData.subject !== "" ? "-1.4em" : "",
              }}
            >
              Subject
            </label>
            {errorTexts.subjectAlert != undefined && (
              <p className="inputAlert">{errorTexts.subjectAlert}</p>
            )}
          </div>
          <div id="message-input-box">
            <textarea
              maxLength={1100}
              minLength={20}
              onChange={({ target }) => {
                setFormData({ ...FormData, message: target.value });
                setIVMessage(undefined);
              }}
              onFocus={() => {
                setIVMessage(undefined);
                setErrorTexts({});
              }}
              required
              placeholder="Message"
            />
            <label
              style={{
                color: COLOR_LABEL(IVMessage),
                top: FormData.message !== "" ? "-1.4em" : "",
              }}
            >
              Message
            </label>
            <p id="messageLength">{FormData.message.length} / 1100</p>
            {errorTexts.messageAlert !== undefined && (
              <p className="inputAlert">{errorTexts.messageAlert}</p>
            )}
          </div>
          <button id="btn-send-form" onClick={validationForm}>
            SEND
          </button>
        </div>
      )}
    </form>
  );
}
