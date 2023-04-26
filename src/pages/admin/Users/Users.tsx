import { GraduationCap, PlusCircle, Student, UsersThree } from 'phosphor-react'
import React, { Fragment, useState } from 'react'
import { MenuProfile } from '../../../components/MenuProfile'
import { Separator } from '@radix-ui/react-separator'
import { TableUsuario } from '../../../components/TableUsuario'
import { Modal } from '../../../components/Modal'
import logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export function Users() {
  const [showModel, setShowModal] = useState(false);
  const _navigate = useNavigate();

  return (
      <Fragment>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#f7fafc]">
          {/* <!-- Page content here --> */}
          <div className="flex bg-white justify-between pr-8 h-[100px] border-b-[1px] shadow shadow-zinc-300">
            <span className="text-xl font-semibold text-zinc-900 self-start pl-8 flex items-center h-full gap-2">
              <UsersThree size={32} /> Usuários
            </span>

            <MenuProfile />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-8 px-3">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <div className="w-full">
              <button
                onClick={() => _navigate('/admin/user/:123')}
                className="flex justify-center gap-1 md:w-[23%] text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center active:opacity-90">
                  <PlusCircle size={20} /> Novo Usuário
              </button>
            </div>

            <TableUsuario />
          </div>
        
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay">
          </label> 
          <ul className="menu pt-4 w-64 text-base-content bg-white z-50">
            <div className="w-full flex items-center justify-center">
              <img src={logo} className="w-40" />
            </div>

            <Separator className="my-7 w-full h-[1px] bg-zinc-200"/>

            {/* <!-- Sidebar content here --> */}
            <li>
              <a className="text-zinc-900 active:bg-brand-700"><Student size={28} weight="light" /> Alunos</a>
            </li>
            <li>
              <a className="text-zinc-900"><GraduationCap size={28} weight="light" /> Cursos</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <Modal isVisible={showModel} onClose={() => setShowModal(false) }>
        <div className="w-full p-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Nome:
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="João Batista"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4"
          />

          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="joao@exemplo.com.br"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4"
          />

          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
            Telefone:
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="27999999999"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4"
          />

          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Senha:
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4"
          />

          <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900">
            Sexo:
          </label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4">
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>

          <label htmlFor="radio-1" className="block mb-2 text-sm font-medium text-gray-900">
            Perfil:
          </label>
          <div className="flex gap-2">
            <input type="radio" name="radio-1" className="radio border-1" checked /> <span className="text-zinc-900">Aluno</span>
            <input type="radio" name="radio-1" className="radio border-1" /> <span className="text-zinc-900">Administrador</span>
          </div>

          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="md:w-[20%] text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 active:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Salvar
            </button>
          </div>
        </div>
      </Modal> */}
    </Fragment>
  )
}
