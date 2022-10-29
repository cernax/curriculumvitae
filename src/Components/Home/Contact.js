import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Contact() {
    
    const [name, setname] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');
    
    const [opensucces, setopensucces] = useState(false);
    const [openerror, setopenerror] = useState(false);
    const [msnerror, setmsnerror] = useState('');

    const handleSubmit = (e) => {
        var templateParams = {
            name: name,
            subject: subject,
            message: message
        };
        if(name != '' && subject != '' && message != '')
        {
            emailjs.send("service_a92f4dm","template_llo37yf", templateParams, 'fMmZoCajspC_9qKjP')
            .then((result) => {            
                setopensucces(true);
                setname("");
                setsubject("");
                setmessage("");
                setTimeout(() => {
                    setopensucces(false);
                }, 1500);

            },
            (error) => {
                setmsnerror('we have an error please contact me by phone');
                setopenerror(true);
                setTimeout(() => {
                    setopenerror(false);
                }, 1500);
            });
        }
        else
        {
            setmsnerror('Please fill in all the fields');
            setopenerror(true);
            setTimeout(() => {
                setopenerror(false);
            }, 1500);
        }

        e.preventDefault(); // Prevents default refresh by the browser
    };

    return(
        <>
            <div style={{ display:'inherit', width:'100%' }} >
                <div style={{ paddingRight:'5%', textAlign:'initial' }} >
                    <Typography sx={{ display: 'inline'}} component="span" variant="h4" color="text.primary">                    
                        Contact
                    </Typography>
                    <br/>
                        <LocalPhoneIcon /> { '+56979090727' }
                    <br/>
                        <EmailIcon /> { 'corro.andres2@gmail.com' }
                    <br/>
                </div>
                <div>
                    <Typography sx={{ display: 'inline'}} component="div" color="text.primary">    
                        <div style={{ marginTop:'10px' }} >
                            <TextField id="outlined-basic" label="Name" variant="outlined"  style={{ width:'350px'}} onChange={ (e) => setname(e.target.value) } value={name}  />
                        </div>     
                        <div style={{ marginTop:'10px' }} >
                            <TextField id="outlined-basic" label="Subject" variant="outlined"  style={{ width:'350px'}} onChange={ (e) => setsubject(e.target.value) }  value={subject} />
                        </div>     
                        <div style={{ marginTop:'10px' }} >                
                            <TextField
                                id="outlined-multiline-static"
                                value={message}
                                label="Message"
                                multiline
                                rows={8}
                                defaultValue=""
                                style={{ width:'350px'}} 
                                onChange={ (e) => setmessage(e.target.value) }
                            />
                        </div>    
                        <div style={{ marginTop:'10px' }} >
                            <Button variant="contained" color='success' endIcon={<SendIcon />} onClick={ (e) => handleSubmit(e) } >
                            Send
                            </Button>
                        </div>     
                    </Typography>
                </div>
            </div>
            <Dialog
                open={opensucces}
                TransitionComponent={Transition}
                keepMounted
                onClose={ () => setopensucces(false) }
            >
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Your message was sent successfully
                </Alert>
            </Dialog>
            <Dialog
                open={openerror}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setopenerror(false)}
            >
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {msnerror}
                </Alert>
            </Dialog>
        </>    
    )
}