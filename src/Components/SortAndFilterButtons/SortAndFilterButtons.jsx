import React from 'react'

const SortAndFilterButtons = ({handleSort}) => {
  return (
    <div className='sortButtons'>
        <button onClick={()=> {handleSort('asc', 'title')}}>Sort by title Asc</button>
        <button onClick={()=> {handleSort('desc', 'title')}}>Sort by title Desc</button>
        <button onClick={()=> {handleSort('asc', 'price')}}>cost for 2 Asc</button>
        <button onClick={()=> {handleSort('desc', 'price')}}>cost for 2 Desc</button>
        <button onClick={() =>{handleSort('asc','reviews')}}>1 STAR</button>
        <button>2 STAR</button>
        <button>3 STAR</button>
        <button>4 STAR</button>
    </div>
  )
}

export default SortAndFilterButtons