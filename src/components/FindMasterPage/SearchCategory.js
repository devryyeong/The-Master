import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import SearchDialog from './SearchDialog';

const useStyles = makeStyles((theme)=>({
    main: { 
        padding: '50px 50px',
    },
    title: {
        fontWeight: "bold",
        padding: '15px 0',
    },
    btnBox: {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px 0',
    },
    btn: {
        background: 'gray',
        marginRight: '15px',
        padding: '7px 60px',
        textAlign: 'left',
    },
    indexBox: {
        margin: '30px 0',
    },
}));


export default function SearchCategory(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleClickOpen = () => {
        setOpen(false);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div className={classes.main}>
            <Typography variant="h4" className={classes.title}>고수 찾기</Typography>
            <Typography variant="body2">마스터 - 지역, 카테고리</Typography>

            <Box className={classes.btnBox}>
                <Button variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                    <Typography variant="subtitle1">지역 {selectedValue}</Typography>
                </Button>
                <Button variant="outlined" className={classes.btn}>카테고리</Button>
            </Box>

            <Box className={classes.indexBox}>
                <Typography>nn명의 고수</Typography>
            </Box>

            <SearchDialog selectedValue={selectedValue} open={open} onClose={handleClose} />

        </div>
    );
}

