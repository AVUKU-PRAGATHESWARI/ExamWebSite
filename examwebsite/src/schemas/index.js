import * as yup from "yup";

export const userSchema = yup.object().shape({
  rollno: yup.number().positive().integer().required("Required"),
  dob: yup.date().required("Date is required").nullable()
});
