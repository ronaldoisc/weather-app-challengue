import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { cleanLocationSearched, setDeactivateSearch, startLoadLocationSearch} from '../../actions/weather';



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
       dispatch(cleanLocationSearched());
   }
    return (
        <div>
            <div className='d-flex justify-content-end p-3 '>
                <button onClick={handleClose}
                 className='material-icons bg-transparent text-light  border-0'>close</button>
            </div>
            <div className='searcher'>
                <div className='searcher__item'>
                    <span className='material-icons'>search</span>
                 
                    <input
                     type="text" 
                     className='searcher__input'
                     placeholder='search location' 
                     name='city'
                     value={city}
                     onChange={handleInputChange}
                     
                      />
                </div>
               
                  <button onClick={handleSearchCity} className='searcher__button p-3 mx-2'>Search</button>
            </div>
          


        </div>
    )
}
