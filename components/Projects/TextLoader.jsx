import React from 'react'
import Link from 'next/link'


const TextLoader = () => {
  return (
    <div className="flex flex-col justify-between py-10 pb-20 animate-pulse w-[100%]">
        <div className={`expandWidthAnimation my-2 bg-black w-10 h-6`}></div>
        <div className="my-2">
            <div className={`expandWidthAnimation bg-black h-10 w-[100%] mb-2`}></div>
            <div className={`expandWidthAnimation bg-black h-40 w-[100%]`}></div>
        </div>
        <div className={`expandWidthAnimation my-2 bg-black w-20 h-10`}></div>
  </div>
  )
}

export default TextLoader