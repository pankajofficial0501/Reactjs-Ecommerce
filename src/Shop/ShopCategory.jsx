import React from 'react'
import Data from '../products.json'

// eslint-disable-next-line no-unused-vars
const ShopCategory = ({filterItem , setItem , menuItems , setProducts , selectedCategory}) => {
  return (
    <>
    <div className='widget-header'>
        <h5 className=''> 
                 All Categories
        </h5>

    </div>
    <div>
        <button onClick={() => setProducts(Data)} className={`m-2 id={selectedCategory ==="All" ? "bg-warning ": "" }`}></button>
        {
             menuItems.map((val,id)=> {
                return (
                    <button className = {`m-2 id={selectedCategory ===val ? "bg-warning ": "" }`}
                    key={id}
                    onClick={()=> filterItem(val)}
                    >{val}</button>
                )
             })
        }
    </div>
    </>
    
  )
}

export default ShopCategory
