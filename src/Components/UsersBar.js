import React, {useState, useEffect} from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { CircularProgress } from '@mui/material';
import {getAllUsers} from "../Requests/userRequests";
import {useAuth} from "../Auth/authProvider";
const  UsersBar =  () =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading ] = useState(true)

    const getUsers = async () =>{
        const us =  await getAllUsers()
        setUsers(us);
    }

    useEffect(  () => {
        setLoading(true);
        getUsers()
        setLoading(false);
    }, []);

    const activeUser = useAuth();
    const drawer = (
        <div style={{width:200}}>
            <Toolbar/>
            {loading ?
                <CircularProgress style={{position: 'relative', top: '50%'}}
                /> :
            <List>
                {users.filter(user => user.username !== activeUser.user.username).map((user) => (
                    <ListItem key={user._id} >
                            <Avatar/>
                            <ListItemText primary={user.username} sx={{marginLeft:3}} />
                    </ListItem>
                ))}
            </List>
            }
        </div>
    );

    return (

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' }
                    }}
                    open
                >

                    {drawer}
                </Drawer>

    );
}

export default UsersBar;