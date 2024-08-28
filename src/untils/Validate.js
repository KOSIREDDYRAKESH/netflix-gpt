export const Validate = (email, Password) => {
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
    if (!isEmail)
        return "Email is not valid";
    if (!isPassword)
        return "Incorrect Password!";
    return null;
}