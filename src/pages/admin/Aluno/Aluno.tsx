import { Fragment } from 'react'
import { Header } from '../../../components/Header'
import { TableStudents } from '../../../components/TableStudents'
import { Separator } from '@radix-ui/react-separator'
import { GraduationCap, Student } from 'phosphor-react'
import { MenuProfile } from '../../../components/MenuProfile'

export function Aluno() {
  return (
    <Fragment>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-zinc-900">
          {/* <!-- Page content here --> */}

          <div className="flex justify-between pr-8 h-[111px]">
            <span className="text-3xl font-light text-white self-start pl-3 flex items-center h-full gap-2">
              <Student size={32} /> Dados dos Alunos:
            </span>

            <MenuProfile />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-8 px-3">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <div className="w-full">
              <button
                type="submit"
                className="btn btn-primary md:w-[20%] text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Redefinir
              </button>
            </div>
            <TableStudents />
          </div>
        
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay">
          </label> 
          <ul className="menu p-4 w-80 text-base-content shadow-md bg-zinc-800">
            <div className="w-full flex items-center justify-center">
              <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/7ba73aaa-3da9-4cf1-abf2-ccc85dea5875/uid_4688718/WHITE%20YELLOW%20HORIZONTAL.png" className="w-44"  alt="" />
            </div>
            <Separator className="my-7 w-full h-[1px] bg-[#2E3A42]"/>
            {/* <!-- Sidebar content here --> */}
            <li><a className="text-white  active:bg-brand-700"><Student size={28} weight="light" /> Alunos</a></li>
            <li><a className="text-white"><GraduationCap size={28} weight="light" /> Cursos</a></li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}
