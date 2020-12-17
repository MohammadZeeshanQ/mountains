import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'


const expeditionData = [
    {
        'productName': 'Expedition 1',
        'location': 'Everest',
        'people': '3',
        'days': '3'
    },
    {
        'productName': 'Expedition 2',
        'location': 'K2',
        'people': '4',
        'days': '6'
    },
    {
        'productName': 'Expedition 3',
        'location': 'Nelio',
        'people': '5',
        'days': '15'
    },
]


const useStyles = makeStyles({

    container:
    {
        width: '100vw',
        padding: ' 5em 0',
        backgroundColor: 'grey',
        backgroundImage: 'url(http://bit.ly/2gPLxZ4)',
        backgroundSize: 'cover',

        '@media (max-width: 600px)':{
            padding: '0',
        },
    },

    wrapper:{
        width: '80%',
        margin: '0 auto',

        '@media (max-width: 600px)':{
            width: '100%',
        }
    },

    gridContainer:{
        border: '1px green solid',
    },

    gridItem:{
        border: '1px red solid',
        borderRadius: '1em',
        position: 'relative',

        '&:hover':{
            transform: 'scale(1.1)',
            transition: '0.4s',
        },

    },

    blurDiv:{
            width: 'auto',
            height: 'auto',
            backgroundColor: 'blue', 
            position: 'absolute',
            filter: 'blur(10px)',

        '&::before':{
            content: '',
            width: 'auto',
            height: 'auto',
            backgroundColor: 'blue', 
            position: 'absolute',
            filter: 'blur(10px)',
        },

        '&::after':{
            content: '',
            width: 'auto',
            height: 'auto',
            backgroundColor: 'blue', 
            position: 'absolute',
            filter: 'blur(10px)',
        },
    },

    productWrapper:{
        fontFamily: 'Mont-Regular',
        padding: '1em ',
    },

    productHeaderDiv:{
        textAlign: 'center',
        padding: '1em 0 2em 0'
    },

    productDescriptionDiv:{
        padding: '1em 0 2em 0',
    },

    buyButtonDiv:{
        textAlign: 'center',
        padding: '1em 0',
    },

    buyButton:{   
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


export default function Product() {

    const classes = useStyles();

    return (
        <div className={classes.container}>

            <div className={classes.wrapper}>

                <Grid
                    container
                    className={classes.gridContainer}
                    justify= 'space-around'
                    xs={12}
                    sm={12}
                    md={12}
                >

                    {
                        expeditionData.map((product) => {
                            return(
                                <Grid
                                item
                                className={classes.gridItem}
                                xs={12}
                                sm={4}
                                md={3}
                                >
                                    
                                <div className={classes.blurDiv}></div>
        
                                <div className={classes.productWrapper}>
        
                                    <div className={classes.productHeaderDiv}>
                                        <Typography variant='h6' className={classes.productHeader}>
                                            {product.productName}
                                        </Typography>
                                    </div>
        
                                    <div className={classes.productDescriptionDiv}>
                                        <Typography variant='body1' className={classes.productLocation} gutterBottom>
                                            Location: {product.location}
                                        </Typography>
        
                                        <Typography variant='body1' className={classes.productPeople} gutterBottom>
                                            People: {product.people}
                                        </Typography>
        
                                        <Typography variant='body1' className={classes.productDay} gutterBottom>
                                            Days: {product.days}
                                        </Typography>
                                    </div>
        
                                    <div className={classes.buyButtonDiv}>
                                        <Button className={classes.buyButton} variant='contained'>
                                            Buy Now
                                        </Button>
                                    </div>
        
                                </div>
        
                                </Grid>
                            )
                        })
                    }

                </Grid>

            </div>

        </div>
    )
}
