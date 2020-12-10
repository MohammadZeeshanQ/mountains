import React from 'react'
import {Typography, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import AppLogo from '../assets/Icons/AppStore.png';

const useStyles = makeStyles({
    container:{
        width: '100vw',
        backgroundColor: '#312E2D',
        padding: '2em 0'
    },

    wrapper:{
        width: '100%',
    },

    gridContainer:{

    },

    gridItem:{
        color: '#FFF',
    },

    appLogoImage:{
        height: '7em',
    },

});


export default function NavigationBar() {

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
                        sm={4}
                        md={2}
                    >
                        <div className={classes.headerDiv}>
                            <Typography variant='h6' className={classes.header}>
                                Expedition
                            </Typography>
                        </div>

                        <div className={classes.subHeaderDiv}>
                            <Typography variant='body1' className={classes.subHeader}>
                                Package 1
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Package 2
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Package 3
                            </Typography>

                        </div>

                    </Grid>


                    <Grid 
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={4}
                        md={2}
                    >
                        <div className={classes.headerDiv}>
                            <Typography variant='h6' className={classes.header}>
                                Information
                            </Typography>
                        </div>

                        <div className={classes.subHeaderDiv}>
                            <Typography variant='body1' className={classes.subHeader}>
                                Expedition
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                About 
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                               Contact
                            </Typography>

                        </div>

                    </Grid>


                    <Grid 
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={4}
                        md={2}
                    >
                        <div className={classes.headerDiv}>
                            <Typography variant='h6' className={classes.header}>
                                Information
                            </Typography>
                        </div>

                        <div className={classes.subHeaderDiv}>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mount Everest   
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mount K2
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mount Mayon
                            </Typography>

                        </div>

                    </Grid>



                    <Grid 
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={4}
                        md={2}
                    >
                        <div className={classes.headerDiv}>
                            <Typography variant='h6' className={classes.header}>
                                Blog
                            </Typography>
                        </div>

                        <div className={classes.subHeaderDiv}>
                            <Typography variant='body1' className={classes.subHeader}>
                                Blog
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Content
                            </Typography>
                        </div>

                    </Grid>


                    <Grid 
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={4}
                        md={2}
                    >
                        <div className={classes.headerDiv}>
                            <img src={AppLogo} className={classes.appLogoImage} alt='App Logo' />
                        </div>

                    </Grid>




                </Grid>



            </div>
            
        </div>
    )
}
