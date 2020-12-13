import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button} from '@material-ui/core'

import Background from '../assets/Background/background.jpg'


const useStyles = makeStyles({

    container:{
        width: '100vw',
        position: 'relative',
    },

    wrapper:{
        padding: '12em 0'
    },  

    BackgroundImage:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-2',
    },

    greyOverlay:{
        position: 'absolute',
        backgroundColor: '#312E2D',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        opacity: '45%',
    },

    infoContainer:{
        color: '#FFF',
        textAlign: 'center',
    },

    header:{
        fontFamily: 'Mont-Bold', 
    },

    subHeader:{
        fontFamily: 'Mont-SemiBold', 
    },

    btnContainer:{
        marginTop: '2em',
    },

    btnLearn:{
        color: 'white',
        border: '1px white solid',
        borderRadius: '0.5em',
        margin: '0 1em',
        fontFamily: 'Mont-Bold', 
        
        '&:hover':{
            backgroundColor: '#FFF',
            color: '#000',
            transform: 'scale(1.15)',
            transition: '0.3s',
        },
    },  

    btnBuy:{
        color: 'white',
        borderRadius: '0.5em',
        backgroundColor: '#FF2C70',
        margin: '0 1em',
        fontFamily: 'Mont-Bold', 

        '&:hover':{
            backgroundColor: '#FF2C70',
            transform: 'scale(1.15)',
            transition: '0.3s',
        },
    },

});

export default function Landing() {

    const classes = useStyles();

    return (
        <div className={classes.container}>

            <img src={Background} className={classes.BackgroundImage} alt='Background Image' />
            
            <div className={classes.greyOverlay}></div>

            <div className={classes.wrapper}>
                
                <div className={classes.infoContainer}>
                    <div className={classes.textContainer}>
                        <Typography variant='h1' className={classes.header}>
                            BE A MOUNTAINER
                        </Typography>
                        <Typography variant='h6' className={classes.subHeader}>
                            To be a climber one has to accept that gratification is rarely immediate.  
                        </Typography>
                    </div>
                    
                    <div className={classes.btnContainer}>

                        <Button variant='outlined' className={classes.btnLearn}>
                            Learn More
                        </Button>

                        <Button variant='contained' className={classes.btnBuy}>
                            Buy Now
                        </Button>

                    </div>
                </div>
            </div>
            
        </div>
    )
}
