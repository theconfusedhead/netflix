export const checkValidateData = (name, email, password) => {
  const isEmailVal = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  const isPasswordVal =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  console.log(name, "name");
  if (name === undefined) {
    console.log("Sign In State");
    if (!isEmailVal) {
      return "Email not Valid";
    }
    if (!isPasswordVal) {
      return "Password is not valid";
    }
  } else {
    console.log("Sign Up State");
    if (!name) {
      return "Name should be there";
    }
    if (!isEmailVal) {
      return "Email not Valid";
    }
    if (!isPasswordVal) {
      return "Password is not valid";
    }
  }

  return null;
};
