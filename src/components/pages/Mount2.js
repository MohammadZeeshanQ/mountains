import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Button, Grid} from '@material-ui/core'

//  importing picture from assets
import Mountain from '../assets/Mountains/Mountain4.jpg'

const useStyles = makeStyles({

    container:{
        width: '100vw',
        padding: '5em 0',

        '@media (max-width: 600px)':{
            padding: '0',
        }
    },

    wrapper:{
        width: '80%',
        margin: 'auto',

        '@media (max-width: 600px)':{
            width: '100%',
        }
    },

    gridContainer:{

    },

    gridItem:{

    },

    mountainImage:{
        width: '100%',
        height: '100%',
        objectFit:'cover',
        borderRadius: '.5em', 

        '@media (max-width: 600px)':{
            borderRadius: '0', 
        }
    },

    gridItemContent:{
        padding: '2em 3em',

        '@media (max-width: 600px)':{
            padding: '0'
        }
        
    },

    textDiv:{
        '@media (max-width: 600px)':{
            textAlign: 'center',
            padding: '0 1em',
        }
    },

    header:{
        fontFamily: 'Mont-Bold',
        '@media(max-width: 600px)':{
            fontSize: '1.8em',
        }
    },

    subHeader:{
        fontFamily: 'Mont-SemiBold',
        marginTop: '1em',
        color: '#FF2C70',
    },

    description:{
        fontFamily: 'Mont-Regular',
    },

    buttonDiv:{
        margin: '2em 0',

        '@media (max-width: 600px)':{
            textAlign: 'center',
        }
    },

    learnBtn:{
        color: 'white',
        borderRadius: '0.5em',
        backgroundColor: '#FF2C70',
        margin: '0',
        fontFamily: 'Mont-Bold', 

        '&:hover':{
            backgroundColor: '#FF2C70',
            transform: 'scale(1.15)',
            transition: '0.3s',
        },
    }

});

export default function Mount2() {

    const classes = useStyles();

    return (
        <div className={classes.container}>

            <div className={classes.wrapper}>

                <Grid
                    container
                    justify='center'
                    className={classes.gridContainer}
                    xs={12}
                    sm={12}
                    md={12}
                >

                    <Grid
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={6}
                        md={6} 
                    >
                        <div className={classes.gridItemContent}>

                        
                            <div className={classes.textDiv}>

                                <Typography variant='h4' className={classes.header} gutterBottom>
                                    MOUNT K2
                                </Typography>

                                <Typography variant='h6' className={classes.subHeader} gutterBottom>
                                    PAKISTAN – 8611M
                                </Typography>

                                <Typography variant='body1' className={classes.description} gutterBottom>
                                    The second highest mountain in the world is K2. The mountain took its name from the notation used by the Great Trigonometrical Survey of British India.
                                </Typography>

                            </div>

                            <div className={classes.buttonDiv}>
                                <Button className={classes.learnBtn}>
                                    Learn More
                                </Button>
                            </div>
                        </div>

                    </Grid>
                    

                    <Grid
                        item
                        className={classes.gridItemReverse}
                        xs={12}
                        sm={6}
                        md={6} 
                    >
                        <img src={Mountain} className={classes.mountainImage} alt='Mountain Image' />

                    </Grid>

                </Grid>

            </div>
            
        </div>
    )
}
