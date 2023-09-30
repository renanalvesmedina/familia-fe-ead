import React from 'react'

import { List, X } from 'phosphor-react'

import { FamiliaIcon } from '@assets/icons/familia-icon'

import { Backdrop, Container } from './siderbar.styles'
import { Navigation } from './navigation'

interface MenuProps {
  open: boolean
  onClose: () => void
}

const MenuContent: React.FC<MenuProps> = ({ open, onClose }) => {
  const menuRef: React.LegacyRef<HTMLDivElement> = React.useRef(null)

  const handleClose = React.useCallback(() => {
    menuRef.current?.classList.add('leaving')
    setTimeout(onClose, 200)
  }, [onClose])

  return (
    <Backdrop open={open} onClick={handleClose}>
      <Container onClick={(e) => e.stopPropagation()} ref={menuRef}>
        <div className="flex items-center justify-between">
          <FamiliaIcon fill="white" />

          <button
            type="button"
            className="p-1 rounded-full hover:bg-zinc-800 active:bg-zinc-800 transition-colors"
            onClick={handleClose}
          >
            <X size={24} className="text-gray-400" />
          </button>
        </div>

        <div className="py-20">
          <Navigation />
        </div>
      </Container>
    </Backdrop>
  )
}

const Siderbar: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false)

  const onClose = React.useCallback(() => setOpenMenu(false), [])

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={() => setOpenMenu((old) => !old)}
        className="text-white p-3 rounded-full hover:bg-zinc-800 active:bg-zinc-800 transition-colors"
      >
        <List size={24} />
      </button>

      {openMenu ? <MenuContent open={openMenu} onClose={onClose} /> : null}
    </React.Fragment>
  )
}

export default Siderbar
