import React, { Component } from 'react';
import ListItem from './listItem';

class ListContainer extends Component {  
constructor(props) { 
    super(props);  
};

render() { 
    const { data } = this.props; 
    return(
        <div>
            {/*data.map(e=> <ul> <li>{e.trackName}</li><li>{e.collectionName}</li></ul>)*/} 
            {data.map(e => <ListItem Itemdata={e} key={e.trackId}/>)} 
        </div>
    )
}

};

export default ListContainer; 