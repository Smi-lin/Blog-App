import React from 'react'
import {Box, TextField, Button} from "@mui/material"

const Login = () => {

    const imageUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png"

  return (
    <Box>
        <img src={imageUrl} alt='Login'/>
        <TextField variant="standard" />
        <TextField variant="standard" />
        <Button variant='contained'>Login</Button>
        
    </Box>
  )
}

export default Login