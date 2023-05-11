import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Svportal = () => {
    const navigate=useNavigate()
  return (
    <>
    <center>
      <Box
        className="auth-form-container "
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <center>
          <h2 className="for-color">Sri Venkateswara University</h2>

          <Box
            className="Boxproperty"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img
              alt="ExamWEbsite"
              className="For-an-image"
              src="https://res.cloudinary.com/dwiwsq9a2/image/upload/v1683428168/college-entrance-exam-concept-illustration_114360-10202_f7qmp2.jpg"
            />
          </Box>
          <Box
            className="Boxproperty"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <button onClick={()=>{navigate('/User')}}>UserLogin</button>
              <hr />
              <button onClick={()=>{navigate('/Admin')}}>AdminLogin</button>
            </div>
          </Box>
        </center>
      </Box>
    </center>
    </>
  );
};
export default Svportal;
