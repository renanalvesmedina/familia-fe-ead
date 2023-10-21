import React from 'react'

import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface ModalProps {
  isVisible: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => e.key === 'Escape' && onClose && onClose(),
    [onClose]
  )

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  if (!isVisible) return null

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:w-[600px] w-full md:mx-auto relative max-md:fixed max-md:bottom-0"
      >
        <button
          onClick={() => onClose()}
          className="text-gray-400 dark:text-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700/40 rounded-full p-2 absolute right-2 top-2 transition"
        >
          <X size={24} />
        </button>

        <div className="bg-white dark:bg-zinc-800 p-2 max-md:rounded-t-xl md:rounded-lg">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
