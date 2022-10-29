import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import PropTypes from 'prop-types';
import {Link, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import {useEffect} from "react";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

const ScrollTop = (props) => {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: false,
        threshold: 50,
    });

    const handleClick = (event) => {

        const anchor = (event.target.ownerDocument || document).querySelector('#navmenu',);
    
        if (anchor) {
          anchor.scrollIntoView({
            behavior: "smooth",
          });
        }
    };
    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

const ElevationScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Nav(props) {
    
    const [namebook, setnamebook] = useState('');
    const [search, setsearch] = useState(false);
    const [texturl, settexturl] = useState('');
    const [tituloNav, settituloNav] = useState(props.nameNav);
    const [state, setState] = useState({
      left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

    const ruta = (text) => {
      debugger;
      if(text === 'Home'){
        return '/'
      }
      else if(text === 'libro'){
        return '/libro'
      }
      else if(text === 'Peliculas'){
        return '/Peliculas'
      }
    };

    const list = (anchor) => (
      <Box
        sx={{ width:250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem key='Home'disablePadding>            
            <Link to="/" style={{textDecoration:"none", color:"black"}}>                
            <ListItemButton>
                  <ListItemIcon>
                    <AccountBoxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary='Curriculum Vitae' />
                </ListItemButton>
            </Link>
          </ListItem>
          <ListItem key='Libreria'disablePadding>
            <Link to="/libro" style={{textDecoration:"none", color:"black"}}>              
            <ListItemButton>
                  <ListItemIcon>
                        <LibraryBooksIcon /> 
                  </ListItemIcon>
                  <ListItemText primary='Libreria' />
                </ListItemButton>  
            </Link>
          </ListItem>
          <ListItem key='Peliculas'disablePadding>              
            <Link to="/Pelicula" style={{textDecoration:"none", color:"black"}}>    
                <ListItemButton>
                  <ListItemIcon>
                        <LocalMoviesIcon /> 
                  </ListItemIcon>
                  <ListItemText primary='Peliculas' />
                </ListItemButton>
              </Link>
          </ListItem>
        </List>
        <Divider />
      </Box>
    );

    function pulsar(e) {
        if (e.key === 'Enter') {
          props.setPage(1)
          props.getLibros();
          setsearch(props.setSearchStatus);
        }
    }
        
    useEffect( ()=>{
      if(tituloNav == "Curriculum Vitae")
      {
        setsearch(true);
      }
  },[] )

	return (
    <>
        <React.Fragment>
        <Box sx={{ flexGrow: 1 }} id="navmenu">
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer('left', true)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    >
                    {list('left')}
                    </Drawer>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        {tituloNav}
                    </Typography>
                    {search ? (
                    <></>
                    )
                    :
                    (
                    <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => {setnamebook(e.target.value); props.getNameLibros(e.target.value)}}
                        onKeyPress={(e) => pulsar(e)}
                    />
                    </Search>
                    )}
                </Toolbar>
                </AppBar>
            </ElevationScroll>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Box>
        </React.Fragment>        
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="curriculumvitae" element={<Home />} />
                {/* <Route path="libro" element={<Perfil title={nombreuser} name={user} />} /> curriculumvitae
                <Route path="Pelicula" element={<Configuracion />} /> */}
            </Routes>
        </div>
    </>
	);
}
