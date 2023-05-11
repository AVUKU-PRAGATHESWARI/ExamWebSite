import * as yup from "yup";

export const userSchema = yup.object().shape({
  rollno: yup.number().positive().integer().required("Required"),
  dob: yup.date().required("Date is required").nullable()
});

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const adminSchema = yup.object().shape({
  idno: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password must contains atleast one uppercase one lowercase one special character and one number"
    })
    .required("Required ")
});