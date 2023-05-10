import React from 'react'
import { Box , Grid, Typography } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import Homepage1 from '../../Assets/1.png'
import Homepage2 from '../../Assets/2.png'
import backgroundImage from '../../Assets/main.jpg'


const Home = () => {
  return (
    <Box
        sx={{
            overflowY:{
                md:'hidden',
            },
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            height: {
                md:'100vh',
            },
        }}
    >
        <Navbar />
        <Grid container spacing={1}>
            <Grid item md={6}  >
                <Typography
                    sx={{
                        fontSize:'52px',
                        fontWeight:'700',
                        color:'white',
                        fontFamily:'Kavoon',
                        margin:'4%',
                        marginTop:'20%',
                    }}
                >
                    This is the site for RCOEM enthusiasts like you
                </Typography>
                <img src={Homepage2} alt="homepage1" 
                    style={{
                        maxHeight:'100%',
                        maxWidth:'100%',
                        height:'100px',
                        marginLeft:'20%',
                    }}
                />
            </Grid>
            <Grid item md={6}>
                    <img src={Homepage1} alt="homepage2" 
                        style={{
                            maxHeight:'100%',
                            maxWidth:'100%',
                            height:'580px',
                            marginLeft:'30%',
                        }}
                    />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Home