import React from "react";
import { Box, TextField, Button, styled } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
  
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div, & > button {
    
  }

`

const Login = () => {
  const imageUrl =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  return (
    <Component>
      <Box>
        <Image src={imageUrl} alt="Login" />
        <Wrapper>
          <TextField variant="standard" />
          <TextField variant="standard" />
          <Button variant="contained">Login</Button>
          <Button>Create an Account</Button>
        </Wrapper>
      </Box>
    </Component>
  );
};

export default Login;
