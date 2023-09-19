import toast from 'react-hot-toast'

import { FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EditUserModel } from './EditUserModel'
import { MenuProfile } from '../../../components/MenuProfile'
import { Sidebar } from '../../../components/Sidebar'
import { api } from '../../../services/api'

export function EditUser() {
  const { userId } = useParams()
  const _navigate = useNavigate()

  const [user, setUser] = useState<EditUserModel>()

  // const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [userGender, setUserGender] = useState<string>('M')
  const [profiles, setProfiles] = useState('Student')

  useEffect(() => {
    const toastId = toast.loading('Carregando...')

    api
      .get(`/v1/User/details?UserId=${userId}`)
      .then((res) => {
        setUser(res.data)
        setUserGender(res.data.gender)
        toast.dismiss(toastId)
      })
      .catch((err) => {
        toast.dismiss(toastId)
        toast.error(err.response.data.errors[0].message)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleGenderChange(e: any) {
    setUserGender(e.target.value)
  }

  function handleProfileChange(e: any) {
    setProfiles(e.target.value)
  }

  async function handleEditUser(e: FormEvent) {
    const toastId = toast.loading('Carregando...')
    e.preventDefault()

    const prof = ['']

    const body = {
      fullName: fullName === '' ? user?.fullName : fullName.trim(),
      phone: phone === '' ? user?.phone : phone.trim(),
      gender: userGender === '' ? user?.gender : userGender.trim(),
      profiles: prof,
    }

    await api
      .put(`/v1/User?UserId=${userId}`, body)
      .then(() => {
        toast.dismiss(toastId)
        toast.success('Usuário atualizado com sucesso :)')
        _navigate('/admin/users')
      })
      .catch((err) => {
        toast.dismiss(toastId)
        toast.error(err.response.data.errors[0].message)
      })
  }

  return (
    <div className="flex bg-zinc-100">
      <Sidebar menuActived="Usuários" />

      <div className="w-full">
        <div className="flex px-8 h-20 w-full items-center justify-between shadow bg-white">
          <span className="text-2xl font-bold">Criar Usuário</span>
          <MenuProfile />
        </div>

        <div className="flex flex-col p-4 mt-4 gap-4">
          <div className="flex justify-center mt-10">
            {/* FORM => */}
            <form
              className="w-full lg:max-w-2xl p-6 lg:p-0"
              onSubmit={handleEditUser}
            >
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-gray-900"
              >
                Nome:
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="João Batista"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4"
              />

              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-900"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                placeholder="joao@exemplo.com.br"
                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-4 mb-4"
              />

              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-semibold text-gray-900"
              >
                Telefone:
              </label>
              <input
                type="tel"
                name="phone"
                defaultValue={user?.phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="27999999999"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4"
              />

              <label
                htmlFor="sexo"
                className="block mb-2 text-sm font-semibold text-gray-900"
              >
                Sexo:
              </label>
              <select
                onChange={handleGenderChange}
                value={userGender}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4 mb-4"
              >
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>

              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-semibold text-gray-900"
              >
                Perfil:
              </label>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Student"
                  className="radio border-1"
                  checked={profiles === 'Student'}
                  onChange={handleProfileChange}
                />{' '}
                <span className="text-zinc-900 mr-4">Aluno</span>
                <input
                  type="radio"
                  name="gender"
                  value="Admin"
                  className="radio border-1"
                  checked={profiles === 'Admin'}
                  onChange={handleProfileChange}
                />{' '}
                <span className="text-zinc-900">Administrador</span>
              </div>

              <div className="flex justify-end w-full gap-2">
                <button
                  onClick={() => _navigate('/admin/users')}
                  className="md:w-[20%] text-white bg-zinc-300 hover:bg-gradient-to-bl from-zinc-400 active:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="md:w-[20%] text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 active:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
                >
                  Salvar
                </button>
              </div>
            </form>
            {/* <= FORM */}
          </div>
        </div>
      </div>
    </div>
  )
}
