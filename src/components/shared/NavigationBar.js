import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({

    root:{
        
    },

    wrapper:{
        backgroundColor: '#312E2D',
        color: '#FFF',
        height: 64,
    },

    centerDiv:{


        '@media (max-width: 600px)':{

        }
    },

    nameContainer:{
        flexGrow: 1,
        textAlign: 'left',
        
    },

    nameTextBtn:{
        border: 'none',
    },

    nameText:{
        color: 'white',
        fontFamily: 'Sans-Bold', 
        fontSize: '1.8em',

        '@media (max-width: 600px)':{
            fontSize: '1em',
        }
    },

    
    desktopTabContainer:{
        display: 'block',
        '@media (max-width: 685px)':{
            display: 'none',   
        }
    },

    mobileTabContainer:{
        display: 'none',
        '@media (max-width: 680px)':{
            display: 'block',
        },
    },
    
    tabText:{
        color: 'white',
        border: 'none',
        fontFamily: 'Mont-SemiBold', 
        fontSize: '1.2em',
        margin: '0 0.6em',

        '&:hover':{
            transform: 'scale(1.1)',
            transition: '0.3s',
            backgroundColor: '#FF2C70',
        },

        '@media (max-width: 600px)':{
            
        }
    },


});

export default function NavigationBar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar position='fixed' className={classes.wrapper}>

                <Toolbar className={classes.centerDiv}>

                    <div className={classes.nameContainer}>
                        <Button variant='outlined' className={classes.nameTextBtn}>
                            <Typography variant='h6' className={classes.nameText}>
                                Mountainers
                            </Typography>
                        </Button>
                    </div>

                    <div className={classes.desktopTabContainer}>

                        <Button variant='outlined' className={classes.tabText}>
                            Prices
                        </Button>

                        <Button variant='outlined' className={classes.tabText}>
                            About
                        </Button>

                        <Button variant='outlined' className={classes.tabText}>
                            Contacts
                        </Button>

                    </div>

                    <div className={classes.mobileTabContainer}>
                        <IconButton>
                            <MenuIcon style={{fontSize: '2em', color: 'white'}} />
                        </IconButton>
                    </div>

                </Toolbar>

            </AppBar>
            
        </div>
    )
}
