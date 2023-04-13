import React, { FormEvent } from 'react'

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ 
  isVisible,
  onClose,
  children 
} : ModalProps) {

  if(!isVisible)
    return null;

  function handleClose(event: any) {
    if(event.target.id === 'wrapper')
      onClose();
  }

  return (
    <div id="wrapper" onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col md:w-[600px] w-[90%] md:mx-auto">
        <button onClick={() => onClose()} className="text-white text-sm bg-brand-700 rounded-full w-5 mb-1 place-self-end">X</button>
        <div className="bg-white p-2 rounded">
          {children}
        </div>
      </div>
    </div>
  )
}
