import React from 'react'
import { useDispatch } from 'react-redux';
import { setActiveSearch } from '../../actions/weather';

export const AppBar = () => {
    const dispatch = useDispatch();
    
    const handleClickInput=()=>{
        dispatch(setActiveSearch());
       
    }
    return (
        <div className='d-flex justify-content-around mt-5'>
             <button onClick={handleClickInput} className='btn-search'>Search for places test corrección</button>
             <button className='material-icons md-light btn-gps'>gps_fixed</button>
        </div>
    )
}
