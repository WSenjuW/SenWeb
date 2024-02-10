const erroresText = {
  name: [
    "Fill in this field, please",
    "This field must be longer than 3 characters.",
    "Does your name have numbers?, we don't do that here, only letters and dots are allowed.",
    "Does your name have special characters?, we don't do that here, only letters and dots are allowed.",
  ],
  email: [
    "Fill in this field, please",
    "The email entered does not meet the requirements of an e-mail, an example: example@gmail.com.",
  ],
  subject: [
    "Fill in this field, please",
    "This field must be at least 3 characters long.",
  ],
  message: [
    "Fill in this field, please",
    "The message must be longer than 20 characters.",
  ],
};

type OBJ_RETURN_TYPE = {
  isValid: undefined | boolean;
  errorText: undefined | string;
};

function checkFunction_Name(NAME: string) {
  let OBJ_TO_RETURN: OBJ_RETURN_TYPE = {
    isValid: undefined,
    errorText: undefined,
  };

  const REGEX_NAME = /^[A-Za-z .]{3,100}$/g;
  if (NAME.length === 0) {
    OBJ_TO_RETURN = {
      isValid: false,
      errorText: erroresText.name[0],
    };
  } else {
    if (REGEX_NAME.test(NAME) === false) {
      const REGEX_NUMBER = /\d/g;
      if (NAME.length < 3 || NAME.length > 100) {
        OBJ_TO_RETURN = {
          isValid: false,
          errorText: erroresText.name[1],
        };
      }
      if (REGEX_NUMBER.test(NAME)) {
        OBJ_TO_RETURN = {
          isValid: false,
          errorText: erroresText.name[2],
        };
      }
      const REGEX_SPECIAL_CHARTERS = /[^A-Za-z .0-9]/g;
      if (REGEX_SPECIAL_CHARTERS.test(NAME)) {
        OBJ_TO_RETURN = {
          isValid: false,
          errorText: erroresText.name[3],
        };
      }
    } else {
      OBJ_TO_RETURN = {
        isValid: true,
        errorText: undefined,
      };
    }
  }

  return OBJ_TO_RETURN;
}

function checkFunction_Email(EMAIL: string) {
  let OBJ_TO_RETURN: OBJ_RETURN_TYPE = {
    isValid: undefined,
    errorText: undefined,
  };

  if (EMAIL.length === 0) {
    OBJ_TO_RETURN = {
      isValid: false,
      errorText: erroresText.email[0],
    };
  } else {
    const REGEX_EMAIL = /^[\w._]{6,30}@[\w_]{3,30}.[\w]{2,10}$/g;
    if (REGEX_EMAIL.test(EMAIL) === false) {
      OBJ_TO_RETURN = {
        isValid: false,
        errorText: erroresText.email[1],
      };
    } else {
      OBJ_TO_RETURN = {
        isValid: true,
        errorText: undefined,
      };
    }
  }

  return OBJ_TO_RETURN;
}

function checkFunction_Subject(SUBJECT: string) {
  let OBJ_TO_RETURN: OBJ_RETURN_TYPE = {
    isValid: undefined,
    errorText: undefined,
  };

  if (SUBJECT.length === 0) {
    OBJ_TO_RETURN = {
      isValid: false,
      errorText: erroresText.subject[0],
    };
  } else {
    if (SUBJECT.length < 3 || SUBJECT.length > 50) {
      OBJ_TO_RETURN = {
        isValid: false,
        errorText: erroresText.subject[1],
      };
    } else {
      OBJ_TO_RETURN = {
        isValid: true,
        errorText: undefined,
      };
    }
  }

  return OBJ_TO_RETURN;
}

function checkFunction_Message(MESSAGE: string) {
  let OBJ_TO_RETURN: OBJ_RETURN_TYPE = {
    isValid: undefined,
    errorText: undefined,
  };

  if (MESSAGE.length === 0) {
    OBJ_TO_RETURN = {
      isValid: false,
      errorText: erroresText.message[0],
    };
  } else {
    if (MESSAGE.length < 20 || MESSAGE.length > 1100) {
      OBJ_TO_RETURN = {
        isValid: false,
        errorText: erroresText.message[1],
      };
    } else {
      OBJ_TO_RETURN = {
        isValid: true,
        errorText: undefined,
      };
    }
  }

  return OBJ_TO_RETURN;
}

export {
  checkFunction_Name,
  checkFunction_Email,
  checkFunction_Subject,
  checkFunction_Message,
};
