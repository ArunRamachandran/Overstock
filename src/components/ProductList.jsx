import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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
            <div className="overstock-product-list">
                <div className={classes.root}>
                    <GridList cellHeight={180} className={classes.gridList} cols={6} spacing={10}>
                        {this.props.data && this.props.data.map((item) => (
                            <GridListTile key={item.id} onClick={() => this.props.onClickHandler(item)}>
                                <img src={item.image_url} alt={item.name}/>
                                <GridListTileBar
                                    title={item.name}
                                    subtitle={<span>{item.tagline}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`keep ${item.name} as your favourite`} className={classes.icon}>
                                            <StarBorderIcon style={{color: 'white'}}/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                {/*this.props.data && this.createProductFragment(this.props.data)*/}
            </div>
        )
    }
}