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
<<<<<<< HEAD
             <button onClick={handleClickInput} className='btn-search'>Search for places test corrección</button>
=======
             <button onClick={handleClickInput} className='btn-search'>Search for places test4</button>
>>>>>>> b3f755cbe8dd58299f9ba8022da8e05d6eac1077
             <button className='material-icons md-light btn-gps'>gps_fixed</button>
        </div>
    )
}
