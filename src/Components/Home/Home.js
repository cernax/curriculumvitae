import { useState, useRef, useEffect } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fab from '@mui/material/Fab';
import { Container } from '@mui/material';
import Perfiles from '../Home/Perfiles';
import mifoto from '../Image/mifoto.jpg';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Homecss/Home.css';
import AOS from 'aos';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
    boxShadow: 'none',
  }));

export default function Home() {
    const scrollHandle = (e, idname) => {
        debugger;
        e.preventDefault();
        let position = document.getElementById(idname); //removing extra last - (dash)
        position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
    }
    const openlinkedin = () => {
        window.open('https://www.linkedin.com/in/andres-corro-escobar-869590123/', '_blank', 'noopener,noreferrer');
    };
    const opengithub = () => {
        window.open('https://github.com/cernax', '_blank', 'noopener,noreferrer');
    };
    const downloadcvpdf = () => {
        window.open('https://github.com/cernax', '_blank', 'noopener,noreferrer');
    };

    useEffect( () =>{
        AOS.init();
        AOS.refresh();
    },[] )
    return (
        <>
                <div id="header"  style={{ width:'100%', textAlign:'center', paddingTop:'5%' }}>
                    <Grid spacing={2}>       
                        <Grid xs={12} md={5} lg={4} display="flex" justifyContent="center" alignItems="center">
                            <Item>             
                                <div className="content">
                                    <h1>Hi, I'm Andres, Web Developer.</h1>
                                    <LinkedInIcon onClick={openlinkedin} sx={{ cursor:'pointer' }} />
                                    <GitHubIcon onClick={opengithub} sx={{ cursor:'pointer' }} />
                                    <PictureAsPdfIcon onClick={downloadcvpdf} sx={{ cursor:'pointer' }} />
                                </div>
                            </Item>          
                        </Grid>                      
                        <Grid xs={6} lg={3} display="flex" justifyContent="center" alignItems="center">              
                            <Item>
                                <Box id="category-a" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                                    <img src={mifoto} alt="undraw-Developer-re-7yhp" border="0" style={{ width:'50%', minWidth:'25rem', borderRadius:'26px',boxShadow: '2px 2px 8px 4px rgba(0, 0, 0, 0.1)' }} /> 
                                </Box>
                            </Item>
                        </Grid>         
                    </Grid>                 
                    <div data-aos="flip-up" >                                          
                        <Grid xs={6} lg={3} display="flex" justifyContent="center" alignItems="center">              
                            <Item>
                                <Fab color="primary" aria-label="add" style={{ top:'91%', left:'48.5%', position:'absolute', transform: 'translate('-90%', '-48.5%')' }}
                                    href="#personalinfo" onClick={ (e) => scrollHandle(e, "personalinfo")}>
                                    <KeyboardArrowDownIcon />
                                </Fab>
                            </Item>
                        </Grid> 
                    </div>
                </div>
                <div>
                    <div id='personalinfo' style={{ height:'1400px' }}>
                        <Perfiles />
                    </div>
                </div>
        </>
    )
}