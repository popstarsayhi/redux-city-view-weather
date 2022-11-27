import React, {useEffect, useState, useRef} from "react"
import "./CityInput.scss"
import {DefaultCity} from "../../consts/consts";
import {useDispatch} from "react-redux";
import {fetchCityView} from "../../redux/action/cityViewAction";



//define a useDebounce function to prevent repeative click
const useDebounce = (callback, delay) => {
    const latestCallback = useRef();
    const latestTimeout = useRef();

    //update verytime callback is updated
    useEffect(() => {
        latestCallback.current = callback;
    }, [callback]);

    return () => {
        if (latestTimeout.current) {
            clearTimeout(latestTimeout.current);
        }
        latestTimeout.current = setTimeout(() => { latestCallback.current(); }, delay);
    };
};


const CityInput=()=>{

    const [city, setCity] = useState(DefaultCity)

    const dispatch = useDispatch()

    const cbInput = (e)=>{
        //get input value
        let newCity = e.target.value.trim().toLowerCase()
        //prevent same keyword to fetch same data
        if(newCity !== city && e.key === 'Enter'){
            setCity(newCity)
            //console.log('old city: ', city , 'new city: ', newCity)
        }
    }

    //passing function to action
    useEffect(()=>{
        dispatch(fetchCityView(city))
    },[city])


    const handleClick =
        useDebounce(()=>{
            dispatch(fetchCityView(city))
        },3000)


    return(
        <div className="inputCity">
            <input type="text"
                   placeholder="please enter here..."
                   onKeyDown={cbInput}
            />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}
export default CityInput