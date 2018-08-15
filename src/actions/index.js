
import axios from 'axios';
export const FetchData = "FetchData";

 export function actionFetchData(searchString) {
    const  rootUrl = `https://itunes.apple.com/search?term=${searchString}`;
    return (dispatch) => { 
        axios.get(rootUrl).then( res => dispatch({
            type: FetchData,
            payload: res.data.results
        })).catch(error => console.log('error', error) );
    }
}
   


