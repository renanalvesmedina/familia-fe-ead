import { withProtectedRoute } from '../../../hocs/withProtectedRoute.hoc'
import { MenuProfile } from '../../../components/MenuProfile'
import { useNavigate } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'
import { TableUsers } from './TableUsers'
import { Sidebar } from '../../../components/Sidebar'

const Users: React.FC = () => {
  const _navigate = useNavigate()

  return (
    <div className="flex w-full bg-zinc-100">
      <Sidebar menuActived="Usuários" />

      <div className="w-full">
        <div className="flex px-8 h-20 w-full items-center justify-between shadow bg-white">
          <span className="text-2xl font-bold">Gestão de Usuários</span>
          <MenuProfile />
        </div>

        <div className="flex flex-col p-4 mt-4 gap-4 w-full h-[83vh]">
          <button
            onClick={() => _navigate('/admin/user/create')}
            className="flex justify-center gap-1 w-44 text-white bg-brand-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow hover:bg-gradient-to-bl from-brand-500 active:opacity-90"
          >
            <PlusCircle size={20} /> Novo Usuário
          </button>

          <div className="flex bg-white h-full w-full p-4 rounded-2xl">
            <TableUsers />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withProtectedRoute(Users)
