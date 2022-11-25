import React from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BookOpen, SignOut, UserGear } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';


export function Header() {

  const _navigate = useNavigate();

  return (
    <header className='flex justify-center items-center w-full bg-aux-500/95 backdrop-blur-sm sticky z-10 h-[72px] mb-5 top-0 p-4 '>
      <div className="flex items-center max-w-[1180px] w-full h-full gap-10">
        <a href="/">
          <div className="min-h-[64px] min-w-[164px]">
            <img className="h-16" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/7ba73aaa-3da9-4cf1-abf2-ccc85dea5875/uid_4688718/WHITE%20YELLOW%20HORIZONTAL.png" alt="Igreja Familia" />
          </div>
        </a>
        <div className="flex items-center pt-4 pr-2 gap-5 w-full h-full">
          <a href="/" className="rounded-full p-2 hover:bg-brand-500 hover:text-aux-500 transition">Painel do Aluno</a>
          <Menu placement="bottom-start">
            <MenuHandler>
              <a className="cursor-pointer rounded-full p-2 hover:bg-brand-500 hover:text-aux-500 transition">Cursos</a>
            </MenuHandler>
            <MenuList className="bg-aux-500 border-none text-zinc-100">
              <MenuItem onClick={() => _navigate('/perfil')} className='flex items-center gap-2 rounded-full hover:bg-brand-500 hover:text-aux-500 transition'><BookOpen size={20} /> Comprometidos com a Membresia</MenuItem>
              <MenuItem onClick={() => _navigate('/login')} className='flex items-center gap-2 rounded-full hover:bg-brand-500 hover:text-aux-500 transition'><BookOpen size={20} /> Comprometidos com a Maturidade</MenuItem>
              <MenuItem onClick={() => _navigate('/login')} className='flex items-center gap-2 rounded-full hover:bg-brand-500 hover:text-aux-500 transition'><BookOpen size={20} /> Comprometidos com a Adoração</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="flex justify-end items-center gap-5 min-w-[380px]">
          <Menu placement="bottom-end">
            <MenuHandler>
              <img className='w-[48px] rounded-full cursor-pointer hover:opacity-80 hover:outline outline-offset-2 outline-2 outline-brand-700 transition' src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" />
            </MenuHandler>
            <MenuList>
              <MenuItem onClick={() => _navigate('/perfil')} className='flex items-center gap-2'><UserGear size={20} /> Editar Perfil</MenuItem>
              <MenuItem onClick={() => _navigate('/login')} className='flex items-center gap-2'><SignOut size={20} /> Sair</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
  )
}
