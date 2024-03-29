import { useNavigate } from 'react-router-dom';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Info, SignOut, UserCircleGear } from 'phosphor-react';

import { useAuthContext } from '../../contexts';
import { getAvatarLetters } from '../../services/utils';

export function MenuProfile() {
  const _navigate = useNavigate();
  const { logout, profilePicture, userName } = useAuthContext();

  async function handleLogout() {
    _navigate('/');
    logout();
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <a className="rounded-full shadow hover:outline hover:outline-offset-2 hover:outline-2 outline-brand-700 transition" aria-label="Profile Options">
          <Avatar.Root className="flex items-center justify-center overflow-hidden w-14 h-14 rounded-full">
            <Avatar.Image className="w-full h-full object-cover"
              src={profilePicture} />
            <Avatar.Fallback className="flex items-center justify-center w-full h-full bg-gray-900 text-brand-700 font-medium text-base" delayMs={600}>
              {getAvatarLetters(userName == null ? '' : userName)}
            </Avatar.Fallback>
          </Avatar.Root>
        </a>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item onClick={() => _navigate('/perfil')} className="DropdownMenuItem">
            Editar Perfil <div className="RightSlot"><UserCircleGear size={24} /></div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => _navigate('/info')} className="DropdownMenuItem">
            Informações <div className="RightSlot"><Info size={24} /></div>
          </DropdownMenu.Item>

          { userName === "Administrador" && 
            <DropdownMenu.Item onClick={() => _navigate('/admin/dashboard')} className="DropdownMenuItem">
              Administrativo <div className="RightSlot"><Info size={24} /></div>
            </DropdownMenu.Item>
          }

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Item onClick={() => handleLogout()} className="DropdownMenuItem Sair">
            Sair <div className="RightSlot"><SignOut size={24} /></div>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
