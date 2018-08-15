
import React,{ Component } from 'react'; 


class SearchBar extends Component {
        constructor(props)
        {
            super (props); 
            this.state = { searchbartxt : ''}; 
        }

        onInputChange(val) {

            this.setState({searchbartxt:val});    
            this.props.serachTextfunction(val); 
        }   

        render() { 
            return(
                
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                    </div>
                    <input 
                    value = {this.state.searchbartxt} 
                    onChange = {e => this.onInputChange(e.target.value)}
                    /> 
                </div>  
                
           
            ); 
        }
}

export default SearchBar;