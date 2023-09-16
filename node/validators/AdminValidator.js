export default class Validator {
    async validate(data){
        ValidationError.prototype = new Error()
        console.log(data)
        for (const [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`);
            switch (key) {
                case "username":
                    this.usernameValidator(value)
                    break;
                case "email":
                    this.emailValidator(value)
                    break;
                case "newPassword":
                    this.passwordValidator(value)
                    break;
                case "confirmPassword":
                    this.confirmPasswordValidator(value)
                    break;
                default:
                    throw Error('Could not find one or more expected fields for validation.')
            }
          }
    }
    async usernameValidator(data){
        if (data){
            switch (data) {
                case !(typeof data === 'string' || data instanceof String):
                    throw Error('Validation Error --- Field Username is not a string')
                    break;
                case data.length > 12:
                    throw Error('Validation Error --- Field Username is too long')
                    break;
                default:
                    break;
            }
        } else throw Error("Validation Error --- Field Username is empty")
    }
    async emailValidator(data){

    }
    async passwordValidator(data){
         
    }
}