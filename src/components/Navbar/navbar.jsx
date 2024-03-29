import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import './navbar.css';
import SendIcon from '@mui/icons-material/Send';
import { useAuth0 } from '@auth0/auth0-react';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import {Link } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { auth } from '../login_signup/sign_in_and_sign_up';

const pages = [<Link to="/Rides">Rides</Link>, <Link to="/Spots">Trip Spots</Link>, <Link to="/Organize">Organize</Link>];

const theme= createTheme({
  typography:{
    htmlFontSize: 10,
  }
});


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  borderRadius:'45px',
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
        width: '45ch',
      
      },
    },
  },
}));

function ResponsiveAppBar(currantUser) {

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 
  const settings = [<Link to="/Profile">Profile</Link>, < p onClick={() => auth.signOut()}>Logout</p>];
  console.log("this is the currantuser in the nav bar",currantUser.currantUser)
  return (
    <>
    <ThemeProvider theme={theme}>
    <AppBar className='Navbar' position="static" color='transparent'>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <SportsMotorsportsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:'white' }} />
          <Typography
            
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.48rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            MotoVenter  
          </Typography>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{color:'white'}}/>
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
          
          <SportsMotorsportsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color:'white' }} />
          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            
              fontWeight: 100,
              letterSpacing: '.16rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            MotoVenter
          </Typography>
          

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>
          {currantUser.currantUser? (<>
          <Box sx={{ flexGrow: 0,display: { xs: 'none', md: 'flex' }}}>
          {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            
          </Box>
          </>
          ):(
            <></>
          )}

          {currantUser.currantUser  ? (
        <><Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip><Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu></>
) : (
  <>
   
    <Button  style={{color:'#FFCB74'}}  size="small" >
      <Link  to="/login" style={{color:'#FFCB74'}}>Join Us</Link><SendIcon style={{ marginLeft: ' 5px' ,color:'#FFCB74' }} />
    </Button>
  </>
)}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    </>
            );
            }
export default ResponsiveAppBar;