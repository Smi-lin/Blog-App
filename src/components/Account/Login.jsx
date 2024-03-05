import React from "react";
import { Box, TextField, Button, styled } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0 0 0/ 0.6);
`;

const Image = styled('Box') ({
  width: 100
})

const Login = () => {
  const imageUrl =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  return (
    <Component>
      <img src={imageUrl} alt="Login" />
      <TextField variant="standard" />
      <TextField variant="standard" />
      <Button variant="contained">Login</Button>
      <Button>Create an Account</Button>
    </Component>
  );
};

export default Login;
