import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'

const useStyles = makeStyles({

    container:{
        width:'100vw',
        height: 64,
        backgroundColor: '#312E2D',
    },

    wrapper:{
        width:'70%',
        margin: 'auto',
        color: '#FFF',
    },

    nameContainer:{
        flexGrow: 1,
    },

    nameText:{
        color: 'white',
        border: 'none',
    },

    tabContainer:{
        display: 'flex',
    },
    
    tabText:{
        color: 'white',
        border: 'none',

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

            <AppBar position='sticky' color='transparent' elevation='0' className={classes.wrapper}>

                <Toolbar>

                    <div className={classes.nameContainer}>
                        <Button variant='outlined' className={classes.nameText}>
                            Mountainers
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
