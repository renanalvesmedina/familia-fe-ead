import { useEffect, useState } from 'react'
import { api } from '../../../services/api';
import { UsersModel } from './UsersModel';
import toast from 'react-hot-toast';
import { NotePencil } from 'phosphor-react'
import avatar from '../../../assets/avatarDefault.png'
import { Loading } from '../../../components/Loading';
import { useNavigate } from 'react-router-dom';

export function TableUsers() {
  const [inLoading, setInLoading] = useState(true);
  const [users, setUsers] = useState<UsersModel[]>();

  const _navigate = useNavigate();

  useEffect(() => {
    api.get('/v1/User')
    .then(response => {
      setUsers(response.data);
      setInLoading(false);
    })
    .catch ((err) => {
      setInLoading(false);
      toast.error(err.response.data.errors[0].message);
    });
  }, []);

  return (
    <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-brand-700 w-full">
      {
        users == null || users == undefined ?
          <>
            <table className="table table-zebra overflow-scroll mb-32 w-full">
              {/* HEAD => */}
              <thead className="border-b">
                <tr>
                  <th className="bg-white text-sm">Nome</th>
                  <th className="bg-white text-sm">Email</th>
                  <th className="bg-white text-sm">Perfil</th>
                  <th className="bg-white text-sm"></th>
                </tr>
              </thead>
              {/* <= HEAD */}

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th></th>
                </tr>
              </tbody>
            </table>

            <p className="flex justify-center text-lg font-semibold">Nenhum usuário cadastrado!</p> 
          </>
          :
          <table className="table table-zebra w-full">
            {/* HEAD => */}
            <thead className="border-b w-full">
              <tr className="w-full">
                <th className="rounded-none shadow sticky top-0 after:absolute bg-white text-sm">Nome</th>
                <th className="shadow sticky top-0 after:absolute bg-white text-sm">Email</th>
                <th className="shadow sticky top-0 after:absolute bg-white text-sm">Perfil</th>
                <th className="rounded-none shadow sticky top-0 after:absolute bg-white text-sm"></th>
              </tr>
            </thead>
            {/* <= HEAD */}

            {/* LINES => */}
            <tbody>
              { users?.map((user) => (
                  <tr key={user.userId}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-8 h-8">
                            <img src={user.photoUri == undefined ? avatar : user?.photoUri} alt={user.fullName} />
                          </div>
                        </div>
                        <div>
                          <div className="font-light text-sm">{user.fullName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-light text-sm">{user.email}</td>
                    <td className="font-light text-sm">{user.profile}</td>
                    <th>
                      <button onClick={() => _navigate(`/admin/user/edit/${user.userId}`)} className="bg-zinc-900 px-2 py-[2px] rounded-lg text-sm text-white flex gap-1 items-center hover:bg-gradient-to-r from-zinc-700 active:bg-zinc-700"><NotePencil size={16} />Editar</button>
                    </th>
                  </tr>
                ))
              }
            </tbody>
            {/* <= LINES */}
          </table>
      }

      { inLoading && <div className="flex items-center justify-center"><Loading /></div> }
    </div>
  )
}
