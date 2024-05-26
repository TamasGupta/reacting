import React from 'react'

function card({values,click,idx}) {
  const{name,artist,image,added}=values;

  return (
    <>
    <div className='w-60 m-5  bg-zinc-100 p-4 mt-10 gap-2 pb-10  flex rounded-md relative'>
     <div className='bg-orange-400 w-20 h-20 mb-2 overflow-hidden rounded-md'>
      <img className='w-full h-full object-cover position-center' src={image} alt="" />
     </div>
     <div className='text-sm mt-4'>{name}<h2 className='text-xs'>{artist}</h2> </div>
     <button onClick={()=>click(idx)} className={`px-3 py-1  text-xs rounded-full ${added===false?"bg-red-400":"bg-sky-300"} absolute bottom-0 left-1/2  -translate-x-[50%] -translate-y-[50%]`}>{added === false ? "Add to fav":"Added"}</button>
    </div>
      
      </>
  )
}

export default card