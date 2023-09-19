import React from 'react'
import { Sidebar } from '../../../components/Sidebar'
import { MenuProfile } from '../../../components/MenuProfile'

export function Courses() {
  return (
    <div className="flex bg-zinc-100">
      <Sidebar menuActived="Cursos" />

      <div className="w-full">
        <div className="flex px-8 h-20 w-full items-center justify-between shadow bg-white">
          <span className="text-2xl font-bold">Gestão de Cursos</span>
          <MenuProfile />
        </div>

        <div className="flex flex-col p-4 mt-4 gap-4">TABELA DE CURSOS</div>
      </div>
    </div>
  )
}
