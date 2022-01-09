import React from 'react'

export const CitySearchedItem = ({element,handleClickCitySearch}) => {
    return (
        <div key={element.woeid} className='box-container mt-5 pointer' onClick={handleClickCitySearch}>
        <button className='fs-2'>{element.title} </button>
        <span className="material-icons">
            keyboard_arrow_right
        </span>
    </div>
    )
}
