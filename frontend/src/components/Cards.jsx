import React from 'react'

function Cards({item}) {
  // console.log(item)
  return (
    <div className='p-3 my-4 mt-4'>
      <div className="shadow-xl card bg-base-100 w-92 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border-4">
  <figure>
    <img
      src={item.image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="justify-between card-actions">
      <div className="badge badge-outline">{item.price}</div>
      <div className="px-4 py-1 rounded-full cursor-pointer border-[2px] hover:bg-pink-500 hover:text-voilet-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards