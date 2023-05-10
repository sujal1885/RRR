import React from 'react'
import { Box , Grid, Typography } from '@mui/material'
import logo from '../../Assets/logo.png'
import data from './data'

const Navbar = () => {
  return (
    <Box
        sx={{
            backgroundColor:'transparent',
            height:'15vh',
            paddingLeft:'5%',
            paddingright:'5%',
            paddingTop:'2%',
        }}
    >
        <Grid container spacing={1}  height="100%">
            <Grid item sm={6} height="100%">
                <img src={logo} alt="logo" 
                    style={{
                        maxHeight: '100%',
                        maxWidth:'100%',
                        objectFit: 'contain',
                    }}
                />
            </Grid>
            <Grid item sm={6} >
                <Grid container
                    sx={{
                        paddingTop:'6%',
                        alignContent:'center',
                    }}
                >
                    {data.map(data  => {
                        return (
                        <Grid item md={2}>
                            <Typography
                                sx={{
                                    color:'white',
                                    fontSize:'20px',
                                    fontWeight:'500',
                                    fontFamily:'Kokoro',
                                }}
                            >
                                {data.text}
                            </Typography>
                        </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Navbar