import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

class ProductDashboard extends Component {

    render () {
        const data = this.props.selectedProduct;
        console.log("User selected data: ", data);
        const classes = makeStyles(theme => ({
            root: {
              flexGrow: 1,
            },
            paper: {
              padding: theme.spacing(2),
              margin: 'auto',
              maxWidth: 500,
            },
            image: {
              width: 128,
              height: 128,
            },
            img: {
              margin: 'auto',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
            },
          }));

        return (
            <div className={classes.root} style={{marginTop: '10px'}}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} 
                            alt="complex" 
                            style={{maxHeight: '100%', maxWidth: '100%'}}
                            src={data.image_url} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                { data.name }
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                { data.tagline }
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                { data.abv }
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                { data.description }
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/*<Typography variant="body2" style={{ cursor: 'pointer' }}>
                                Remove from favourites
                            </Typography>*/}
                        </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">first brewed : {data.first_brewed}</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedProduct: state.appState.selectedProduct
})

export default connect(
    mapStateToProps
)(ProductDashboard);