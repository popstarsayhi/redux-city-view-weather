import './ImageList.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchCityView, searchCity, updateBG} from "../../redux/action/cityViewAction";
import React, {useState} from "react"


const ImageList = () => {

    const [page, setPage] = useState(1)

    //get dat saved in reducer via useSelector hook
    const imageList = useSelector(state => state.searchCity)
    //console.log(imageList.cityView.length)

    const city = imageList.weather.name

    const dispatch = useDispatch()

    const updateBackground = (img) => {
        //console.log(img)
        dispatch(updateBG(img))
    }

    const renderList = (imageList.cityView).length > 0 ? ((imageList.cityView).map((img, index) => {
        return (
            <div key={index}
                 onClick={() => updateBackground(img)}
                 style={{background: `url('${img.thumb}') no-repeat center center/cover fixed`}}>
            </div>
        )
    })) : ("")

    const nextPage = () => {
        console.log(page)
        setPage(page + 1)
        dispatch(fetchCityView(city, page))
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
        dispatch(fetchCityView(city, page))
    }


    return (
        <>
            <div className='carousel'>
                <button className="btnNav prev"
                        onClick={prevPage}
                >&#x2190;</button>
                {renderList}
                <button className="btnNav next"
                        onClick={nextPage}
                >&#x2192;</button>
            </div>
        </>
    )
}

export default ImageList