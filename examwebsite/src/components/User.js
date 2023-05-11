import { Formik, Form } from "formik";
import CustomInput from "./CustomInputs";
import { userSchema } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const User = () => {
  const successToast = () => {
    toast.success("Login Success!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const errorToast = () => {
    toast.error("Please Enter valid Details", {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const onSubmit = async (values, actions) => {
    try {
      axios
        .post(
          "https://svu-users-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
          { values }
        )
        .then((res) => {
          successToast();
          console.log(res, res.data);
        });
    } catch (error) {
      errorToast();
      console.log(error.message);
    } finally {
      actions.resetForm();
      actions.setSubmitting(false);
    }
  };
  return (
    <center>
      <div className="auth-form-container">
        <h2 className="for-color">Sri Venkateswara University</h2>
        <img
          alt="logo_of_sv"
          className="for-animagelogo"
          src="https://res.cloudinary.com/dwiwsq9a2/image/upload/v1683100617/im-removebg-preview_ailx2j.png"
        />
        <div className="for-loginname">
          <div className="border">
            <h2 className="underlinepro ">Student Login</h2>

            <center>
              <img
                alt="SVStudent"
                width="200px"
                src="https://res.cloudinary.com/dwiwsq9a2/image/upload/v1683715719/student_jazofz.jpg"
              />
            </center>
          </div>
          <Formik
            initialValues={{ rollno: "", dob: "" }}
            validationSchema={userSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="for-loginname">
                <CustomInput
                  label="Roll Number"
                  name="rollno"
                  type="number"
                  placeholder="Enter your Roll Number"
                />
                <CustomInput
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  placeholder="Enter your DateOfBirth"
                />
                <button disabled={isSubmitting} type="submit">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <ToastContainer />
      </div>
    </center>
  );
};
export default User;
