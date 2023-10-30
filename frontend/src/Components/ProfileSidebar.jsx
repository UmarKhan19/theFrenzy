import React from 'react'

const ProfileSidebar = () => {

    const list = [
      {
          link: "Change Password"
      },
        {
            link: "Profile"
        },
    ];

    const listItems = list.map((item, index) => (
        <div key={index} className='border-2 px-5 py-3 cursor-pointer hover:bg-slate-500'>
          {item.link}
        </div>
      ));
    
  return (
    <div>
      
      <div className='border-2 bg-gray-400  px-5 py-3 mb-4'>
        <h3 className='font-bold'>Sakshat Kumar</h3>
        <p className='text-sm mb-2 mt-2'>sakshat1234@gmail.com</p>
      </div>

      <hr />

      <div className='flex justify-between border-2 px-5 py-3 mb-4 cursor-pointer hover:bg-gray-500'>
        <h3>Orders</h3>
        <p>(Track Your Order here)</p>
      </div>

      {listItems}

      <div>

      </div>

      <div>
        <button className='border-2 px-5 py-2 text-red-500 border-red-600 mt-5 w-full'>Logout</button>
      </div>

      

    </div>
  )
}

export default ProfileSidebar
