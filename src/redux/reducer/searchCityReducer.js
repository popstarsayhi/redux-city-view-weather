
const initialState = {
    cityView:{},
    weather:{},
}

export const searchCityReducer = (state=initialState, {type,payload})=>{
    console.log("city view:" , type, payload)
    switch (type){
        case 'FETCH_CITY':
            return {...state, cityView: payload }
        case 'GET_WEATHER':
            return{...state, weather: payload}
        default:
            return state
    }
}

export const updateBGReducer = (state= {},{type,payload})=>{
    switch (type){
        case 'UPDATE_BG':
            return {payload }
        default:
            return state
    }
}

