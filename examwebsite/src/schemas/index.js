import * as yup from "yup";

export const userSchema = yup.object().shape({
  rollno:yup.number().typeError("Roll number must be a valid number").positive("You must enter a positive number").integer("You must enter an integer"),
  dob: yup.date().required("Date is required").nullable()
});

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const adminSchema = yup.object().shape({
  idno: yup.string().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password must contains min 1 upper case letter, 1 lower case letter, 1 numeric digit"
    })
    .required("Required ")
});