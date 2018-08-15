
const initState = {
    data: []
}

export default (state=initState, action) => {
    
    switch (action.type) {        
        //1. fetchdata 
        case 'FetchData':  
            console.log('Reducer payload data', action.payload); 
            console.log('typeof data', typeof action.payload);         
            return {...state, data: action.payload}; 
        default:          
            
            return state;  
 
    }

};
