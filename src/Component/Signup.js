import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center w-full h-[8rem] mt-5 mb-5'>
        <div className='text-2xl text-gray-500'><p>Sign up and get exclusive</p> <p>special deals</p>
        </div>
        <div className="flex justify-end p-4">
      <div className="flex items-center">
        <input
          type="email"
          className="border w-[17rem] ml-[13rem] p-2 rounded-l-md focus:outline-none border-solid hover:border-blue-500 hover:border-2"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-full">Sign Up</button>
      </div>
    </div>
    </div>
  )
}

export default Signup
