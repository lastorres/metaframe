import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Items from 'warframe-items';

class Frames extends Component{
    constructor(props){
        super()
        this.state= {frames: []}
    
    }
    componentDidMount(){
        let newFrames = Array.from(new Items({category: ['Warframes']}))
        this.setState({frames: newFrames})
    }
    render(){
        let framesList= this.state.frames.map(row => (<GridListTile style= {{width: '120px', height: 'auto'}}>
            <img src ={`https://cdn.warframestat.us/img/${row.imageName}`} className= "framesGridItem"/>
                <GridListTileBar title= {row.name}>
                </GridListTileBar>
            </GridListTile>))
        return(
            <div> 
                <GridList style= {{margin: 'auto', width: '100%'}}>
                    {framesList}
                </GridList>
            </div>
        )
    }
}



export default Frames