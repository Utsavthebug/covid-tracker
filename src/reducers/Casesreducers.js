export const casesReducers = (state={},action)=> {
    switch(action.type){
        case "FETCHING_STARTED":
            return {
                isFetching:true,
                hasError:false
            }

        case "FETCHING_SUCCESS":
            console.log(action.payload)
            return {
                hasError : false,
                isFetching:false,
                data:action.payload
            }
        
        case "FETCHING_ERROR":
            return {
                hasError:true,
                isFetching:false,
            }

        default:
            return state
    }
}