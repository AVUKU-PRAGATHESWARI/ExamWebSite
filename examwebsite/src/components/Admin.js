import { Formik, Form } from "formik";
import CustomInput from "./CustomInputs";
import { adminSchema } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Loginasuser = () => {
  const successToast = () => {
    toast.success("Your login was Successfull", {
      className: "custom-toast",
  position: "top-right",
  autoClose: 3000,
    });
  };

  const errorToast = () => {
    toast.error("Please Enter valid Details", {
      className: "custom-toast",
  position: "top-right",
  autoClose: 3000,
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
            <h2 className="underlinepro ">Admin Login</h2>

            <center>
              <img
                alt="SVStudent"
                width="200px"
                src="https://res.cloudinary.com/dwiwsq9a2/image/upload/v1683716787/teacher-removebg-preview_1_x7pdd4.png"
              />
            </center>
          </div>
          <Formik
            initialValues={{ idno: "", password: "" }}
            validationSchema={adminSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="for-loginname">
                <CustomInput
                  label="ID Number"
                  name="idno"
                  type="text"
                  placeholder="Enter your ID Number"
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter the correct Password"
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
export default Loginasuser;
