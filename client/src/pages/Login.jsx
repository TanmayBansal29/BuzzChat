import { Container, Paper } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [isLogin, setOsLogin] = useState(false)
  return (
    <Container component={"main"} maxWidth="sx">
        <Paper
        elevation={3}
        sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            {isLogin ? <span>Login</span> : <span>Not Login</span>}
        </Paper>
    </Container>
  )
}

export default Login