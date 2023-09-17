import React from 'react'

const cartBill = () => {
  return (
    <div className='border-2 px-3 py-2 md:w-1/3 max-sm:mx-2'>
        <h1 className='font-bold text-3xl'>Summary</h1>
        <div className='mt-5 mb-6'>
        <p className=''>Enter A Promo Code</p>
            <input type="text" placeholder='Promo Code' className='border-2 p-2 w-60'/>
            <button className='bg-black text-white p-2  border-2 border-black w-32 hover:bg-slate-500'>Submit</button>
        </div>
        <div className='flex justify-between mt-4 gap-4'>
            <div>
                <p>SubTotal</p>
                <p>Shipping Cost</p>
                <p>Discount</p>
                <p>Tax</p>
                
            </div>
            <div>
                <p>500</p>
                <p>TBD</p>
                <p>TBD</p>
                <p>TBD</p>
            </div>
        </div>
        <hr className='mt-4'/>
        <div className='flex justify-between mt-4 mb-4'>
                <h2 className='font-bold '>Estimated Total</h2>
                <p className='font-bold'>$500</p>
        </div>
        <hr />
        <div className='mt-8 text-center'>
            <p>You Are <span className='text-red-600 font-semibold'>$1.05</span> Away from Free Shipping</p>
        </div>
        <div className='text-center mt-5 mb-4'>
            <button className='bg-black w-64 py-3 rounded-full text-white hover:bg-slate-500'>CheckOut</button>
        </div>
    </div>
  )
}

export default cartBill
