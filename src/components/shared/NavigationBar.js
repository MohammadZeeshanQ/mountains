import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'

const useStyles = makeStyles({

    container:{
        width:'100vw',   
    },

    wrapper:{
        width:'100%',
        backgroundColor: '#312E2D',
        color: '#FFF',
        height: 64,
    },

    centerDiv:{
        width:'70%',
        margin: 'auto',

        '@media (max-width: 600px)':{
            width: '100%',
        }
    },

    nameContainer:{
        flexGrow: 1,
    },

    nameTextBtn:{
        border: 'none',
    },

    nameText:{
        color: 'white',
        fontFamily: 'Sans-Bold', 
    },

    tabContainer:{
        display: 'flex',
    },
    
    tabText:{
        color: 'white',
        border: 'none',
        fontFamily: 'Mont-SemiBold', 

        '&:hover':{
            transform: 'scale(1.1)',
            transition: '0.3s',
            backgroundColor: '#FF2C70',
        },
    },


});

export default function NavigationBar() {

    const classes = useStyles();

    return (
        <div className={classes.container}>

            <AppBar position='fixed' color='transparent' elevation='0' className={classes.wrapper}>

                <Toolbar className={classes.centerDiv}>

                    <div className={classes.nameContainer}>
                        <Button variant='outlined' className={classes.nameTextBtn}>
                            <Typography variant='h6' className={classes.nameText}>
                                Mountainers
                            </Typography>
                        </Button>
                    </div>

                    <div className={classes.tabContainer}>

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

                </Toolbar>

            </AppBar>
            
        </div>
    )
}
