import * as React from 'react';
import Box from '@mui/material/Box';
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';

const ChatPage  = ()  =>{
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: 680 },
                position:"fixed",
                bottom: "2%",
                right: "2%",
                display: 'flex',
            }}
            noValidate
            autoComplete="off"
        >
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    variant="standard"
                />
        <Button>Send</Button>
        </Box>
    );
}

export default  ChatPage;