import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useState, Fragment } from "react";

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} sx={{ width:'20rem', height:'15px', borderRadius:'5px' }} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

export default function Skills() {
    const [progress, setProgress] = useState(90);


    return(
        <>
            <Typography sx={{ display: 'inline' }} component="span" variant="h4" color="text.primary">                    
                Skills
            </Typography>
            
            <div style={{ width:'100%', display:'flex'}} >
                <div style={{ width:'40%' }} >      
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary="JavaScript"
                            secondary={
                                <Fragment>                        
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <LinearProgressWithLabel value={progress} />
                                    </Typography>
                                </Fragment>
                            }
                            />
                        </ListItem>
                    </ List>    
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary="React"
                            secondary={
                                <Fragment>                        
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <LinearProgressWithLabel value={progress} />
                                    </Typography>
                                </Fragment>
                            }
                            />
                        </ListItem>
                    </ List>    
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary="HTML"
                            secondary={
                                <Fragment>                        
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <LinearProgressWithLabel value={progress} />
                                    </Typography>
                                </Fragment>
                            }
                            />
                        </ListItem>
                    </ List>    
                </div>
                <div  style={{ width:'20%'}} ></div>
                <div style={{ width:'40%' }} >      
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary="JavaScript"
                            secondary={
                                <Fragment>                        
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <LinearProgressWithLabel value={progress} />
                                    </Typography>
                                </Fragment>
                            }
                            />
                        </ListItem>
                    </ List>    
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary="React"
                            secondary={
                                <Fragment>                        
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <LinearProgressWithLabel value={progress} />
                                    </Typography>
                                </Fragment>
                            }
                            />
                        </ListItem>
                    </ List>    
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary="HTML"
                            secondary={
                                <Fragment>                        
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <LinearProgressWithLabel value={progress} />
                                    </Typography>
                                </Fragment>
                            }
                            />
                        </ListItem>
                    </ List>    
                </div>
            </div>
        </>    
    )
}