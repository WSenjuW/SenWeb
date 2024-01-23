import { useReducer } from "react";
import "./formComponent.css";

// const erroresText = {
//   name: [
//     "Tu nombre tiene números?, aquí no hacemos eso",
//     "Tu nombre tiene caracteres especiales?, aquí no hacemos eso",
//   ],
//   email: [
//     "El correo ingresado no cumple con los requisitos de un email, un ejemplo: example@gmail.com",
//   ],
// };

// Estructura de FormList estructure........................................................

type initialStateFormListType = {
  [index: string]: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

type actionTypeFormList = {
  propToUpdate: string;
  item: string;
};
const I_S_FormItems = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
function redFormItems(
  state: initialStateFormListType,
  action: actionTypeFormList
) {
  state[action.propToUpdate] = action.item;

  return state;
}

// ..........................................................................................
// ..........................................
// Validations estructure.......................................................................

type I_S_Validations = {
  [index: string]: boolean | undefined | initialStateFormListType;
  name: undefined | boolean;
  email: undefined | boolean;
  subject: undefined | boolean;
  message: undefined | boolean;
};

type actionValidationType = {
  type: string;
  item: undefined | boolean | initialStateFormListType;
};

const I_S_validations: I_S_Validations = {
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
};

function redValidations(
  state: I_S_Validations,
  { item, type }: actionValidationType
) {
  // const REGEX_NAME = /^[ a-zA-Z.]{3,40}$/g;
  // const REGEX_EMAIL = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,100}$/g;

  switch (type) {
    case "CHECKED_FORM_GRAL":
      {
      }
      break;
    case "UPDATE_ELEMENT":
      {
        state[type] = item;
      }
      break;
    default:
      return state;
      break;
  }
  return state;
}
// ..........................................................................................

function COLOR_LABEL(e: undefined | boolean) {
  let colorSelected;
  if (e === undefined) colorSelected = "#fff";
  if (e === false) colorSelected = "#ff0000";
  if (e === true) colorSelected = "#15ff00";

  return colorSelected;
}

// ===============================================================    START COMPONENT   =========================================================================================================

export default function FormComponent() {
  const [FormItems, dispatchList] = useReducer(redFormItems, I_S_FormItems);
  const [Validations, dispValidations] = useReducer(
    redValidations,
    I_S_validations
  );

  function validationForm(e: HTMLFormElement) {
    e.preventDefault();
    dispValidations({ type: "CHECKED_FORM_GRAL", item: FormItems });
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
            maxLength={40}
            onChange={(e) =>
              dispatchList({ propToUpdate: "name", item: e.target.value })
            }
          />
          <label
            style={{
              color: COLOR_LABEL(Validations.name),
              top: FormItems.name !== "" ? "-1.4em" : "",
            }}
          >
            Name
          </label>
          <p id="inputAlert"></p>
        </div>
        <div id="email-input-box">
          <input
            onChange={(e) =>
              dispatchList({ propToUpdate: "email", item: e.target.value })
            }
            required
            type="email"
            maxLength={50}
            placeholder="Email"
          />
          <label
            style={{
              color: COLOR_LABEL(Validations.email),
              top: FormItems.email != "" ? "-1.4rem" : "10px",
            }}
          >
            Email
          </label>
        </div>
      </div>
      <div id="subject-input-box">
        <input
          maxLength={25}
          onChange={({ target }) =>
            dispatchList({ propToUpdate: "subject", item: target.value })
          }
          type="text"
          placeholder="Subject"
          required
        />
        <label
          style={{
            color: COLOR_LABEL(Validations.subject),
            top: FormItems.subject !== "" ? "-1.4em" : "",
          }}
        >
          Subject
        </label>
      </div>
      <div id="message-input-box">
        <textarea
          maxLength={1100}
          minLength={20}
          onChange={({ target }) =>
            dispatchList({ propToUpdate: "message", item: target.value })
          }
          required
          placeholder="Message"
        />
        <label
          style={{
            color: COLOR_LABEL(Validations.message),
            top: FormItems.message !== "" ? "-1.4em" : "",
          }}
        >
          Message
        </label>
        <p id="messageLength">{FormItems.message.length} / 1100</p>
      </div>
      <button id="btn-send-form" onClick={validationForm}>
        SEND
      </button>
    </form>
  );
}
