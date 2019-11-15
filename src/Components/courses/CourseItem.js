import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//   }));

class CourseItem extends Component {
    render() {
      const {class_name,class_type,class_time} = this.props.course;

        return (
            <div className = 'card text-center' style={this.classStyle}>
                <h3>{class_name}</h3>
                <h4>{class_time}</h4>
                <h4>{class_type}</h4>
            </div>
            
    //         <div className= 'card text-center'>
    //   <GridList className={'gridList'} cols={2.5}>
    //     {tileData.map(tile => (
    //       <GridListTile key={tile.img}>
    //         <img src={tile.img} alt={tile.title} />
    //         <GridListTileBar
    //           title={tile.title}
    //           classes={{
    //             root: classes.titleBar,
    //             title: classes.title,
    //           }}
    //           }
    //         />
    //       </GridListTile>
    //     ))}
    //   </GridList>
    // </div>



        )
    }


}

export default CourseItem
