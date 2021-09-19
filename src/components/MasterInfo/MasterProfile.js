import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme)=>({
    main: { 
        padding: '50px 0',
    },
    flex: {
        display: 'flex',
        paddingBottom: '30px',
    },
    img: {
        paddingRight: '15px',
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

function TabPanel(props) {
    const { children, value, index, ...other }=props;

    return (
        <div
        role="tabpanel" hidden={value!==index}
        id={`simple-tabpannel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
            {value===index && (
                <Box sx={{p: 4}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes={
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpannel-${index}`,
    };
}

export default function MasterProfile(){
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange=(event, newValue)=>{
        setValue(newValue);
    };

    return (
        <div className={classes.main}>
            <Box className={classes.flex}>
                <Box className={classes.img}>
                    <Card>
                        <CardMedia
                        component="img"
                        height="100"
                        image="img.jpg"
                        alt="profile img"
                        />
                    </Card>
                </Box>
                <Box>
                    <Typography variant="h5" gutterBottom component="div">해방플러스 (해충으로부터 해방!)</Typography>
                    <Typography variant="caption" display="block" >바퀴벌레 퇴치</Typography>
                    <Typography variant="overline" display="block" >별점, 후기 어떻게하조</Typography>
                </Box>
            </Box>


            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="고수 정보" {...a11yProps(0)} />
                        <Tab label="사진/동영상" {...a11yProps(1)} />
                        <Tab label="리뷰" {...a11yProps(2)} />
                        <Tab label="질문답변" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                One
                </TabPanel>
                <TabPanel value={value} index={1}>
                Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                Four
                </TabPanel>
            </Box>
        </div>
    );
}