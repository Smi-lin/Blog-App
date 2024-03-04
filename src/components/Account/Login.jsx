import React from 'react'
import {Box, TextField, Button, styled} from "@mui/material"

const component = styled(Box)`width: 400px`;

const Login = () => {

    const imageUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png"

  return (
    <Box>
        <img src={imageUrl} alt='Login'/>
        <TextField variant="standard" />
        <TextField variant="standard" />
        <Button variant='contained'>Login</Button>
        <Button>Create an Account</Button>
    </Box>
  )
}

export default Login