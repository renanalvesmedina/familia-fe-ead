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
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed md:w-[620px] w-full max-md:bottom-0 max-md:translate-y-0 max-md:top-[unset] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden"
      >
        <button
          onClick={() => onClose()}
          className="text-gray-400 dark:text-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700/40 rounded-full p-2 absolute right-4 top-4 transition"
        >
          <X size={24} />
        </button>

        <div className="bg-white dark:bg-zinc-800 p-4 max-md:rounded-t-xl md:rounded-lg">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
