//1
// @param pass: String;

const passValidationIfElse = (pass) => {
    if (pass.length > 7) {
        return "Strong";
    } else {
        return "Weak";
    }
};

//Tests

passValidationIfElse("das12"); //Weak
passValidationIfElse("das12asdasda"); //Strong

//2

const passValidationTernary = (pass) => {
    const res = pass.length > 7 ? "Strong" : "Weak";
    return res;
};

//Tests
passValidationTernary("23af");
passValidationTernary("234dsxzaf");

//3
const passValidationLogical = (pass) => {
    return (pass.length > 7 && "Strong") || "Weak";
};

//Tests
passValidationLogical("das12"); //Weak
passValidationLogical("das12asdasda"); //Strong

//4
const advancedPassValidation = (pass) => {
    const regex = /[A-Z]/g;
    let checkLength = pass.length;
    let checkCapital = pass.match(regex);
    return checkLength > 7 && checkCapital
        ? "Very Strong"
        : checkLength > 7
        ? "Strong"
        : "Weak";
};

//Tests
advancedPassValidation("das12"); //Weak
advancedPassValidation("das12asdasda"); //Strong
advancedPassValidation("das12aSdasda"); // Very Strong
