export default class Validator {
  constructor() {
    this.errors = new Array();
    this.validatedFields = new Object();
  }

  validate(data) {
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
      switch (key) {
        case "username":
          this.validateUsername(value);
          this.validatedFields.username = value
          break;
        case "email":
          this.validateEmail(value);
          this.validatedFields.email = value
          break;
        case "newPassword":
          this.validatePassword(value);
          this.validatedFields.newPassword = value
          break;
        case "confirmPassword":
          this.validateConfirmPassword(value, data.newPassword);
          break;
        default:
          throw Error(
            "Could not find one or more expected fields for validation."
          );
      }
    }
    return this.errors;
  }

  validateUsername(data) {
    console.log("username validator running");
    if (data) {
      switch (data) {
        case !(typeof data === "string" || data instanceof String):
          this.errors.push("Field Username is not a string");
          break;
        case data.length > 12:
          this.errors.push("Field Username is too long");
          break;
      }
    } else this.errors.push("Field Username is empty");
  }

  validateEmail(data) {
    console.log("email validator running");
    if (data) {
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      switch ((data, emailRegex)) {
        case !(typeof data === "string" || data instanceof String):
          this.errors.push('Field "Email" is not a string');
          break;
        case data.length > 20:
          this.errors.push("Email is too long");
          break;
        case !emailRegex.test(data):
          this.errors.push("Email is invalid");
      }
    } else this.errors.push('Field "Email" is empty');
  }
  validatePassword(data) {
    console.log("password validator running");
    if (data) {
      if (typeof data !== "string") {
        this.errors.push('Field "New Password" is not a string');
      }
      if (data.length < 5) {
        this.errors.push("Password is too short");
      }
    } else this.errors.push('Field "New Password" is empty');
  }
  validateConfirmPassword(data, password) {
    console.log("confirm password validator running");
    if (typeof data !== "string" || data !== password) {
      this.errors.push("Passwords do not match");
    }
  }
}
