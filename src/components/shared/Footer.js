import React from 'react'
import {Typography, Grid, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container:{
        width: '100vw',
        backgroundColor: '#312E2D',
    },

    wrapper:{
        width: '70%',
    },

    gridContainer:{

    },

    gridItem:{
        color: '#FFF',
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
                        md={4}
                    >
                        <div className={classes.headerDiv}>
                            <Typography variant='h6' className={classes.header}>
                                Information
                            </Typography>
                        </div>

                        <div className={classes.subHeaderDiv}>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 1
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 2
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 3
                            </Typography>

                        </div>

                    </Grid>


                    <Grid 
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={4}
                        md={4}
                    >
                        <div className={classes.headerDiv}>
                            <Typography variant='h6' className={classes.header}>
                                Information
                            </Typography>
                        </div>

                        <div className={classes.subHeaderDiv}>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 1
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 2
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 3
                            </Typography>

                        </div>

                    </Grid>


                    <Grid 
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={4}
                        md={4}
                    >
                        <div className={classes.headerDiv}>
                            <Typography variant='h6' className={classes.header}>
                                Information
                            </Typography>
                        </div>

                        <div className={classes.subHeaderDiv}>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 1
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 2
                            </Typography>
                            <Typography variant='body1' className={classes.subHeader}>
                                Mountain 3
                            </Typography>

                        </div>

                    </Grid>



                </Grid>



            </div>
            
        </div>
    )
}
