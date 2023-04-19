import {useContext}from 'react'
import { ProductsContext } from '../../Contexts/Products'
import "./search.css";
const Search = () => {

  const {categories, setCategory, search, setSearch} = useContext(ProductsContext);

  return (
    <>
      <section id='search'>
        <input class="w3-input w3-border" name="first" type="text" value={search} onChange={({target}) => {setSearch(target.value)} } placeholder="Product"/>    
        <div class="w3-dropdown-hover">
          <button class="w3-button w3-black">Categories</button>
          <div class="w3-dropdown-content w3-bar-block w3-border">
            <button onClick={()=>setCategory(null)} className='w3-button w3-bar'>none</button>
              {
                categories && categories.map((c) => (
                  <button onClick={()=>setCategory(c)} className='w3-button w3-bar' >{c}</button>
                ))
              }
          </div>
        </div>
      </section>
    </>
  )
}

export default Search