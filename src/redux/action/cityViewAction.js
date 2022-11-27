import axios from "axios";
import {UNSPLASH_KEY, WEATHER_API_KEY, WEATHER_API_URL} from "../../consts/consts";


export const updateBG = (img) => {
    return {
        type: 'UPDATE_BG',
        payload: img
    }
}


export const fetchCityView = (newCity, page) => {

    return async (dispatch) => {

        const [firstResponse, secondResponse] = await axios.all(
            [
                axios.get(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_KEY}&query=${newCity}&orientation=landscape&page=${page}`),
                axios.get(`${WEATHER_API_URL}/weather?q=${newCity}&units=metric&appid=${WEATHER_API_KEY}`)
            ]
        ).catch(err => {
            console.log("ERROR: ", err)
        })
        //console.log("city:", firstResponse, "weather:", secondResponse)

        let imageList = (firstResponse.data.results).map(item => ({
            des: item.alt_description,
            regular: item.urls.regular,
            thumb: item.urls.thumb
        }))

        dispatch({type:'FETCH_CITY', payload:imageList})
        dispatch({type:'GET_WEATHER', payload:secondResponse.data})
    }

}

