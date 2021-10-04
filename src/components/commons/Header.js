import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme)=>({
    appbar:{
        background: 'none',
    },
    masterbtn: {
        background: 'linear-gradient(45deg, #F79489 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
        padding: '0 20px',
        margin: '0 10px',
        fontWeight: "bold",
    },
    link:{
        color: 'inherit',
        textDecoration: 'inherit',
    },
    btnBox: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    }
}));

export default function Header(){
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <Link to="/" className={classes.link}>
                        <Avatar 
                        variant="square"
                        alt="Main Logo"
                        src="https://cdn.discordapp.com/attachments/856160141858570271/883905017780793345/image0.png"
                        sx={{ width: 100, height: 100 }}
                        />
                    </Link>

                    <Box className={classes.btnBox}>
                        <Button className={classes.masterbtn}>고수가입</Button>
                        <Button>회원가입</Button>
                        <Link to="/findmaster" className={classes.link}>
                            <Button>고수 찾기</Button>
                        </Link>
                        <Button>로그인</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}