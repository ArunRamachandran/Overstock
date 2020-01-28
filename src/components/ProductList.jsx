import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import './product-list.less';

export default class ProductList extends Component {

    createProductFragment = (data) => {
        let productFragment = data.map((item) => {
            return (
                <h2 key={item.id}>{item.name}</h2>
            )
        });
        
        return productFragment;
    }

    render () {
        const classes = makeStyles(theme => ({
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: theme.palette.background.paper,
            },
            gridList: {
              width: 500,
              height: 450,
            },
            icon: {
              color: 'rgba(255, 255, 255, 0.54)',
            },
        }));

        return (
            <div className="overstock-product-list" style={{marginTop: '10px'}}>
                <div className={classes.root}>
                    <GridList cellHeight={180} className={classes.gridList} cols={6} spacing={10}>
                        {this.props.data && this.props.data.map((item) => (
                            <GridListTile key={item.id}>
                                <img src={item.image_url} alt={item.name} onClick={() => this.props.onClickHandler(item)}/>
                                <GridListTileBar
                                    title={item.name}
                                    subtitle={<span>{item.tagline}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`keep ${item.name} as your favourite`} className={classes.icon}>
                                            {
                                                this.props.favourites.indexOf(item.id) > -1 ?
                                                    <StarIcon style={{color: 'white'}} onClick={() => this.props.handleUserFavouritesList(item.id)}/>
                                                    : <StarBorderIcon style={{color: 'white'}} onClick={() => this.props.handleUserFavouritesList(item.id)}/>
                                            }
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="additional-data-placeholder">
                    <a onClick={this.props.loadMoreproducts}>Load more products</a>
                </div>
            </div>
        )
    }
}