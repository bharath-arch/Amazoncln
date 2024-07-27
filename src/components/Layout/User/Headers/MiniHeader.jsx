import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function MiniHeader() {
  return (
    <div className='w-svw h-auto px-2 py-1 bg-gray-700'>
      <div className="flex justify-between items-center">
        <div className="">
          <ul className='text-white flex gap-10 '>
            <span className='flex  items-center gap-2'>
              <RxHamburgerMenu />
              <li>All</li>
            </span>
            <li>Fresh</li>
            <li>Sell</li>
            <li>Best Seller</li>
            <li>Todays Deal</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div className="">
          <img alt="" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheMinistryofUngentlemanlyWarfare/400x39-SWM_NP._CB567284565_.jpg" />
        </div>
      </div>

    </div>
  )
}

export default MiniHeader
