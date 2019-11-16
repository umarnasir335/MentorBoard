import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import ListSubheader from '@material-ui/core/ListSubheader';
import Courses from './Courses';

const CourseItem = props => {
      const {key, image_url,class_name,class_type,class_time} = props.course;
      const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: '#282c34',
        },
        gridList: {
          width: 300,
          height: 450,
         overflowY: 'auto',
        },
        icon: {
          color: 'white',
        },
      }));
      const style = useStyles();

        return (
           //<div className = 'card text-center' style = {useStyles}>
           //    <h3>{class_name}</h3>
           //    <h4>{class_time}</h4>
           //    <h4>{class_type}</h4>
           //</div>

        <GridList cellHeight={180} className={style.root}>
          <GridListTile key={key} className={style.gridList}>
            <img src={image_url} alt={'alt'} />
            <GridListTileBar
              title={class_name}
              subtitle={<span>{class_type}</span>} 
              actionIcon={
                <IconButton aria-label={`info about ${class_time}`}className={style.icon}>
                  <InfoRoundedIcon />
                </IconButton>}
            />
          </GridListTile>
        )}
      </GridList>
        )
    }



export default CourseItem
