import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/material';
import WorkReference from './WorkReference';
import Educations from './Education';
import Contact from './Contact';
import Skills from './Skills';
import Badges from './Badges';
import AOS from 'aos';
import {useEffect} from "react";
import "aos/dist/aos.css";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
    boxShadow: 'none',
    width:'100%',
  }));

export default function Perfiles() {
    
    useEffect( ()=>{
        AOS.init();
        AOS.refresh();
    },[] )

    return(
        <div style={{ overflow:'hidden', paddingTop: '3%' }}>
            <br></br>
            <div>
                <div data-aos="flip-down" >                                
                    <Grid xs={6} lg={3} display="flex" justifyContent="center" alignItems="center">              
                        <Item>
                            <Box id="category-a" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>                                
                                <Container maxWidth="lg" sx={{ display:'flex', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important' }} >
                                    <div style={{ width:'30%', display:'contents'  }}>
                                        <Avatar alt="Remy Sharp"
                                            src="https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg"
                                            sx={{ width: '150px', height: '150px', minWidth:'' }}
                                        />
                                    </div>
                                    <div style={{ width:'20%' }}></div>
                                    <div style={{ width:'60%', display:'contents' }}>
                                        <h3>{'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'}</h3>
                                    </div>
                                </Container>
                            </Box>
                        </Item>
                    </Grid>  
                </div>
                { /*
                <br/>
                <Container maxWidth="lg" sx={{ display:'content', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important'}} >
                <Skills/>
                </Container>
                */ }
                <br/>
                <div data-aos="fade-left" data-aos-delay="70">                    
                <Grid xs={6} lg={3} display="flex" justifyContent="center" alignItems="center">              
                    <Item>
                        <Box id="category-a" sx={{ fontSize: '12px' }}>       
                            <Container maxWidth="lg" sx={{ display:'content', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important'}} >
                                <WorkReference />
                            </Container>
                        </Box>
                    </Item>
                </Grid>  
                </div>
                <br/>
                <div data-aos="fade-right">                    
                    <Grid xs={6} lg={3} display="flex" justifyContent="center" alignItems="center">              
                        <Item>
                            <Box id="category-a" sx={{ fontSize: '12px' }}>      
                                <Container maxWidth="lg" sx={{ display:'content', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important'}} >
                                    <Educations />
                                </Container>
                            </Box>
                        </Item>
                    </Grid>  
                </div>
                <br/>
                <div data-aos="zoom-in" data-aos-duration="1000">                              
                    <Grid xs={6} lg={3} display="flex" justifyContent="center" alignItems="center">              
                        <Item>
                            <Box id="category-a" sx={{ fontSize: '12px' }}>    
                                <Container maxWidth="lg" sx={{ display:'flex', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important' }} >
                                    <Badges />
                                </Container>
                            </Box>
                        </Item>
                    </Grid>  
                </div>
                <br/>
                <div data-aos="fade-up">                                            
                    <Grid xs={6} lg={3} display="flex" justifyContent="left" alignItems="left">              
                        <Item>
                            <Box id="category-a" sx={{ fontSize: '12px' }}>    
                                <Container maxWidth="lg" sx={{ display:'flex', boxShadow:'0 2px 5px 0 rgba(0,0,0,.25),0 3px 10px 0 rgba(0,0,0,.2)!important', height:'420px' }} >
                                    <Contact />
                                </Container>
                            </Box>
                        </Item>
                    </Grid>  
                </div>
            </div>
        </div>
    )
}