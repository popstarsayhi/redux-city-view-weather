import "./CurrentWeather.scss"
import {useSelector} from "react-redux";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const CurrentWeather = ()=>{

    const today = new Date().getDay()

    const cityInfo = useSelector(state => state.searchCity)

    return(
        <>
            { Object.values(cityInfo.weather).length > 0 ?
                (
                <div className="weather">
                    <div className="top">
                        <div>
                            <p className="city">{cityInfo.weather.name}</p>
                            <p className="today"> {WEEK_DAYS[today]}</p>
                            <p className="weather-description">{cityInfo.weather.description}</p>
                        </div>
                        <img src={`icons/${cityInfo.weather.weather[0].icon}.png`} alt="weather" className="weather-icon" />
                    </div>

                    <div className="bottom">
                        <p className="temperature">{Math.round(cityInfo.weather.main.temp)}°C</p>
                        <div className="details">
                            <div className="parameter-row">
                                {/* <span className="parameter-label">Details</span> */}
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Feels like</span>
                                <span className="parameter-value">{Math.round(cityInfo.weather.main.feels_like)}°C</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Wind</span>
                                <span className="parameter-value">{cityInfo.weather.wind.speed}</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Humidity</span>
                                <span className="parameter-value">{cityInfo.weather.main.humidity} %</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Pressure</span>
                                <span className="parameter-value">{cityInfo.weather.main.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                </div>
                ):("")
            }
        </>

    )
}

export default CurrentWeather