import CityInput from "./components/input-search/CityInput";
import "./App.scss"
import ImageList from "./components/image-list/ImageList";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import CurrentWeather from "./components/current-weather/CurrentWeather";

function App(){

    const bg = useSelector(state => state.updateBG)
    //console.log(bg)

    const imageList = useSelector(state => state.searchCity)
    //console.log(imageList.cityView)

    const [bgImage, setBgImage] = useState('')

    useEffect(()=>{
        (imageList.cityView).length > 0 && setBgImage(imageList.cityView[0].regular)
    },[imageList.cityView])


    return(
        <div className="App"
             style={{background: bg.payload!=='null' && typeof(bg.payload)!== "undefined"?
                     (`url('${bg.payload.regular}') no-repeat center center/cover fixed`)
                     :
                     `url('${bgImage}') no-repeat center center/cover fixed`}}>
            <CityInput />
            <CurrentWeather />
            <ImageList/>
        </div>
    )
}

export default App

