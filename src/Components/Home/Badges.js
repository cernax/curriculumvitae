import Typography from '@mui/material/Typography';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

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

export default function Badges() {

    const lazyLoadFromCDN = () => {
        const mathJax = document.createElement('script');
        mathJax.setAttribute('src', 'https://cdn.credly.com/assets/utilities/embed.js');   
        document.head.appendChild(mathJax);
    }

    React.useEffect(() => {
        lazyLoadFromCDN();
    }, [])
    return(
        <div>    
            <Grid xs={6} lg={3} display="flex" justifyContent="center" alignItems="center" container >              
                <Item>
                    <Box id="category-a" sx={{ fontSize: '12px',flexGrow: 1  }} >                               
                            <Typography sx={{ display: 'flex', width:'50%' }} component="span" variant="h4" color="text.primary">                    
                                Badges
                            </Typography>
                            <br/>    
                            <Grid container spacing={2}  lg={3}>
                                <Grid item xs={6} >
                                    <Box
                                        sx={{
                                            p: 2,
                                            bgcolor: 'background.default',
                                            display: 'grid',
                                            gridTemplateColumns: { md: '1fr 1fr 1fr' },
                                            gap: 2,
                                        }}
                                        >
                                        <Item>                                            
                                            <div 
                                                data-iframe-width="200" 
                                                data-iframe-height="270" 
                                                data-share-badge-id="bbfdbd5b-120a-42e8-ad28-c1c14af31643" 
                                                data-share-badge-host="https://www.credly.com">
                                            </div>
                                        </Item>
                                        <Item>                                            
                                            <div 
                                                data-iframe-width="200" 
                                                data-iframe-height="270" 
                                                data-share-badge-id="17e5773c-eff3-4db7-b3fc-d576e29ff7f2" 
                                                data-share-badge-host="https://www.credly.com">
                                            </div>
                                        </Item>
                                        <Item>                                            
                                            <div 
                                                data-iframe-width="200" 
                                                data-iframe-height="270" 
                                                data-share-badge-id="51ae87bc-f46b-438c-aafc-46d16ec5cb0b" 
                                                data-share-badge-host="https://www.credly.com">
                                            </div>
                                        </Item>
                                    </Box>
                                </Grid>
                            </Grid>                        
                            <Grid item xs={6}>
                            </Grid>
                    </Box>
                </Item>
            </Grid>  
        </div>
    )
}