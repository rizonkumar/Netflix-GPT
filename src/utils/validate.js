export const checkValidData = (email, password) => {
    const validationRules = [
      {
        isValid: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email),
        errorMessage: "Email Id is not valid",
      },
      {
        isValid: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password),
        errorMessage: "Password is not valid",
      },
    ];
  
    const invalidRule = validationRules.find(rule => !rule.isValid);
  
    return invalidRule ? invalidRule.errorMessage : null;
  };
  