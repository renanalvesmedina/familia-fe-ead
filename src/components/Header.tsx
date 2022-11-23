import React from 'react'

export function Header() {
  return (
    <header className='flex justify-center items-center w-full bg-[#1C2328] sticky z-10 h-[72px] mb-5 top-0 p-4 before:{absolute opacity-95 z-[-1]}'>
      <div className="flex items-center max-w-[1180px] w-full h-full z-10 gap-10">
        <a href="/">
          <div className="min-h-[64px] min-w-[164px]">
            <img className="h-16" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/7ba73aaa-3da9-4cf1-abf2-ccc85dea5875/uid_4688718/WHITE%20YELLOW%20HORIZONTAL.png" alt="Igreja Familia" />
          </div>
        </a>
        <div className="flex items-center pt-4 pr-2 z-10 gap-5 w-full h-full" />
        <div className="flex justify-end items-center gap-5 min-w-[380px]">
          <img className='w-[48px] rounded-full cursor-pointer hover:opacity-95 transition' src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" />
        </div>
      </div>
    </header>
  )
}
