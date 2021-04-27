import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
// Icons
import ShopIcon from '@material-ui/icons/Shop';


const expeditionData = [
    {
        'productName': 'Mount Everest',
        'description': 'Mount Everest is Earths highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.',
        'location': 'Nepal',
        'people': '2',
        'days': '3'
    },
    {
        'productName': 'Mount K2',
        'description': 'K2, at 8,611 metres above sea level, is the second-highest mountain on Earth, after Mount Everest.',
        'location': 'Pakistan',
        'people': '4',
        'days': '4'
    },
    {
        'productName': 'Mayon Volcano',
        'description': 'Mayon, also known as Mount Mayon, is an active stratovolcano in the province of Albay in Bicol Region',
        'location': 'Philippines',
        'people': '5',
        'days': '8'
    },
]


const useStyles = makeStyles({

    container:
    {
        width: '100vw',
        padding: ' 5em 0',
        //backgroundColor: 'grey',
        //backgroundImage: 'url(http://bit.ly/2gPLxZ4)',
        backgroundSize: 'cover',

        '@media (max-width: 600px)':{
            padding: '0',
        },

        "@media (min-width: 650px) and (max-width: 900px)":{
            padding: '1em',
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
        '@media (max-width: 600px)':{
            marginBottom: '5em',
        }
    },

    gridItem:{
        backgroundColor: '#fcfcfc',
        borderRadius: '1em',
        boxShadow: '6px 6px 12px #cacaca, -6px -6px 12px #f6f6f6',

        '&:hover':{
            transform: 'scale(1.1)',
            transition: '0.6s ease all',
        },

        '@media (max-width: 600px)':{
            margin: '2em',
        },

        "@media (min-width: 650px) and (max-width: 900px)":{
            margin: '1em',
        },
    },

    headingDiv:{
        textAlign: 'center',
        padding: '1em 0 6em 0',

        '@media(max-width: 600px)':{
            padding: '1em 0',
        },

        "@media (min-width: 650px) and (max-width: 900px)":{
            padding: '3em 0',
        },
    },

    productHeading:{
        fontFamily: 'Mont-Bold',

        "@media (min-width: 650px) and (max-width: 900px)":{
            fontSize: '1.5em',
        },
    },

    productWrapper:{
        fontFamily: 'Mont-Regular',
        padding: '1em ',
    },

    productHeaderDiv:{
        textAlign: 'center',
        padding: '1em 0 2em 0',

        "@media (min-width: 650px) and (max-width: 900px)":{
            padding: '0',
        },
    },

    productHeader:{
        fontFamily: 'SansitaSwashed',

        "@media (min-width: 650px) and (max-width: 900px)":{
            fontSize: '1.2em',
        },
    },
    productLocation:{
           "@media (min-width: 650px) and (max-width: 900px)":{
            fontSize: '.8em',
        },
    },
    productPeople:{
        "@media (min-width: 650px) and (max-width: 900px)":{
            fontSize: '.8em',
        },
    },
    productDay:{
        "@media (min-width: 650px) and (max-width: 900px)":{
            fontSize: '.8em',
        },
    },
    productDescriptionDiv:{
        padding: '1em 0 2em 0',
    },

    buyButtonDiv:{
        textAlign: 'center',
        padding: '2em 0 1em 0',

        "@media (min-width: 650px) and (max-width: 900px)":{
            padding: '0',
        },
    },

    smallDataDiv:{
        marginTop: '1em'
    },

    buyButton:{   
    color: 'white',
    borderRadius: '0.5em',
    backgroundColor: '#FF2C70',
    fontFamily: 'Mont-Bold', 
    alignItems: 'center',

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

                <div className={classes.headingDiv}>
                    <Typography variant='h4' className={classes.productHeading}>
                        Our Packages
                    </Typography>
                </div>

                <Grid
                    container
                    className={classes.gridContainer}
                    justify= 'space-evenly'
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
                                        <Typography variant='h5' className={classes.productHeader}>
                                            {product.productName}
                                        </Typography>
                                    </div>
        
                                    <div className={classes.productDescriptionDiv}>
                                        <Typography variant='body1' className={classes.productLocation} gutterBottom>
                                            <strong>Description: </strong><br/>{product.description}      
                                        </Typography>

                                        <div className={classes.smallDataDiv}>
                                            <Typography variant='body1' className={classes.productLocation} gutterBottom>
                                            <strong>Location: </strong>{product.location}
                                            </Typography>
            
                                            <Typography variant='body1' className={classes.productPeople} gutterBottom>
                                            <strong>People: </strong>{product.people}
                                            </Typography>
            
                                            <Typography variant='body1' className={classes.productDay} gutterBottom>
                                            <strong>Days: </strong>{product.days}
                                            </Typography>
                                        </div>
                                        
                                    </div>
        
                                    <div className={classes.buyButtonDiv}>
                                        <Button className={classes.buyButton} variant='contained'>
                                            
                                            <Typography variant='body2'>
                                                Buy Now
                                            </Typography>
                                
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
