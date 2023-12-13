import React, { useContext, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import './SearchBar.css';

function SearchBar() {
    const [searchValue, setSearchValue] = useState ('')

    const {setProducts, setLoading} = useContext(AppContext)

    const handleSearch= async(event) => {
      event.preventDefault()
      setLoading(true)

      const products = await fetchProducts(searchValue)
      setProducts(products)
      setLoading(false)
      setSearchValue('')
    }

  return (
   
    <form className='search_bar' onSubmit={handleSearch}>
        <input type="search" 
        value={searchValue}
        placeholder='Buscar Produtos' 
        className='search_input' 
        onChange={({target}) => setSearchValue(target.value)} 
        required/>
        <button type='submit' className='search_button'><CiSearch /></button>
    </form>

  )
}

export default SearchBar