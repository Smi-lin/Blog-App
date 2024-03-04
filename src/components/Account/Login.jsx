import React from 'react'
import {Box, TextField} from "@mui/material"

const Login = () => {

    const imageUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png"

  return (
    <Box>
        <img src={imageUrl} alt='Login'/>
        <TextField/>
        <TextField/>
    </Box>
  )
}

export default Login