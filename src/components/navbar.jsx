import React from 'react'

function navbar({data}) {
 
  return (
    <>
     <div className='flex justify-between p-4'>
      <div className='bg-orange-500 px-3 py-1 rounded-md text-xl text-amber-50'>Musify</div>  
      <div className='bg-orange-500 px-3  flex gap-2 rounded-md text-xl text-amber-50 whitespace-wrap'>Favorito <h2>{data.filter(item =>item.added).length}</h2> </div>
     </div>
    </>
  )
}

export default navbar