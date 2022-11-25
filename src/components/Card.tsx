import React from 'react'
import { useNavigate } from 'react-router-dom';

interface CardProps {
  image: string;
  route: string;
}

export function Card({
  image,
  route 
}: CardProps) {

  const _navigate = useNavigate();

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden w-full hover:scale-105 transition">
        <div className="flex gap-5 min-h-[212px] transform ">
          <div className="min-h-[212px] min-w-[380px] relative rounded overflow-hidden">
            <div aria-haspopup="dialog" aria-expanded="false" className='pointer-events-none'>
              <div onClick={() => _navigate(route)} className="cursor-pointer relative w-full h-full flex items-center justify-center pointer-events-auto hover:opacity-80 transition">
                <div className="relative pointer-events-auto w-full h-full">
                  <div className="aspect-video relative w-full pb-[56%]" >
                    <div className="absolute inset-0">
                      <span className="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 border-none m-0 p-0 absolute inset-0 pointer-events-auto">
                        <img className="absolute inset-0 box-border p-0 border-none m-0 block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover pointer-events-auto" decoding='async' sizes='100vw' src={image} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
