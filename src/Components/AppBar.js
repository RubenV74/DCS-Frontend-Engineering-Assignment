import React, { useState} from 'react'
import {useAuth} from "../Auth/authProvider"
import userImg from "../images/login.png"
import {CircularProgress} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);





    const  auth = useAuth();
    return (
        auth.loadingUser ?
            <CircularProgress style={{
                width:'100px',
                height:'100px',
                position: "fixed",
                top: '50%',
                left: '47%'
            }}/>:
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{display:'flex', justifyContent: 'space-between'}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Chat
                    </Typography>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Box sx={{display:'flex',alignItems: 'center', flexGrow: 0 }}>
                                <Avatar/>
                        <Typography
                            variant="span"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {auth.user.username}
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default ResponsiveAppBar;