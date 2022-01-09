import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { cleanDataCitySearched, setDeactivateSearch, startLoadLocationSearch} from '../../actions/weather';



export const AppBarSearchCity = () => {
    const dispatch = useDispatch();

    const [formValues, setformValues] = useState({
        city:''
    })
   const {city}=formValues;

   const handleInputChange=(e)=>{
      setformValues({
       [e.target.name]:e.target.value
      });

   };
   const handleSearchCity=()=>{
      dispatch(startLoadLocationSearch(city));
   }
    
   const handleClose=()=>{
       dispatch(setDeactivateSearch());
       dispatch(cleanDataCitySearched());
   }
    return (
        <div>
            <div className='d-flex justify-content-end p-3 '>
                <button onClick={handleClose}
                 className='material-icons bg-transparent text-light  border-0'>close</button>
            </div>
            <div className='d-flex flex-row justify-content-evenly'>
                <div className='input-search d-flex align-items-center'>
                    <span className='material-icons'>search</span>
                    <input
                     type="text" 
                     className=''
                     placeholder='search location' 
                     name='city'
                     value={city}
                     onChange={handleInputChange}
                     
                      />
                </div>
                <div>
                  <button onClick={handleSearchCity} className='btn btn-primary p-3 mx-2'>Search</button>
                </div>

            </div>


        </div>
    )
}
