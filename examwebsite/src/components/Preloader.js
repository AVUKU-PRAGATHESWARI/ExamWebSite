import { Stack, Skeleton } from "@mui/material";
const Preloader = () => {
  return (
    <center>
      <Stack spacing={10} width="250px">
        <center>
          <Skeleton variant="text" height={50} width={250} animation="wave" />
          <Skeleton
            variant="circular"
            width={100}
            height={100}
            animation="wave"
          />
          <Skeleton variant="text" height={30} width={250} animation="wave" />
          <Skeleton
            varient="rectangular"
            width={250}
            height={60}
            animation="wave"
          />
          <Skeleton variant="text" height={30} width={250} animation="wave" />
          <Skeleton
            varient="rectangular"
            width={250}
            height={60}
            animation="wave"
          />
        </center>
      </Stack>
    </center>
  );
};
export default Preloader;
