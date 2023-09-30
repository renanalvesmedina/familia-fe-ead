import React from 'react'
import toast from 'react-hot-toast'

import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { EditUserModel } from '@models/EditUserModel'
import { AdminLayout } from '@layouts/admin-layout'
import { api } from '@services/api'

const putUser = async (userId?: string) =>
  api
    .get<EditUserModel>(`/v1/User/details?UserId=${userId}`)
    .then((res) => res.data)

const EditUserPage: React.FC = () => {
  const { userId } = useParams()
  const _navigate = useNavigate()

  const [fullName, setFullName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [userGender, setUserGender] = React.useState<string>('M')
  const [profiles, setProfiles] = React.useState('Student')

  const { data: user } = useQuery(['user', userId], () => putUser(userId), {
    onSuccess: (res) => res.gender && setUserGender(res.gender),
    staleTime: 1000 * 60 * 1, // 1 minutes
    onError: (err: any) => {
      toast.error(err.response.data.errors[0].message)
    },
  })

  function handleGenderChange(e: any) {
    setUserGender(e.target.value)
  }

  function handleProfileChange(e: any) {
    setProfiles(e.target.value)
  }

  async function handleEditUser(e: React.FormEvent) {
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
    <AdminLayout>
      <p className="text-2xl font-medium text-white sticky top-0 pt-10 pb-6 bg-zinc-900 z-40">
        Editar Usuário
      </p>

      <div className="flex w-full rounded-lg px-6 py-8 bg-zinc-800">
        <form
          className="w-full grid grid-cols-2 gap-6"
          onSubmit={handleEditUser}
        >
          <label
            htmlFor="name"
            className="flex flex-col space-y-4 text-sm text-gray-400"
          >
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              defaultValue={user?.fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="João Batista"
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            />
          </label>

          <label
            htmlFor="email"
            className="flex flex-col space-y-4 text-sm text-gray-400"
          >
            <span>Email:</span>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="joao@exemplo.com.br"
              className="disabled:opacity-50 disabled:cursor-not-allowed bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            />
          </label>

          <label
            htmlFor="phone"
            className="flex flex-col space-y-4 text-sm text-gray-400"
          >
            <span>Telefone:</span>
            <input
              type="tel"
              name="phone"
              defaultValue={user?.phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="27999999999"
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            />
          </label>

          <label
            htmlFor="sexo"
            className="flex flex-col space-y-4 text-sm text-gray-400"
          >
            <span>Sexo:</span>
            <select
              onChange={handleGenderChange}
              value={userGender}
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </label>

          <div className="flex flex-col space-y-4">
            <label className="flex flex-col space-y-4 text-sm text-gray-400">
              Perfil:
            </label>

            <div className="flex gap-6">
              <label
                htmlFor="radio-student"
                className="text-white flex items-center gap-2"
              >
                <input
                  id="radio-student"
                  type="radio"
                  name="gender"
                  value="Student"
                  className="radio border-1 bg-zinc-700"
                  checked={profiles === 'Student'}
                  onChange={handleProfileChange}
                />

                <span>Aluno</span>
              </label>
              <label
                htmlFor="radio-admin"
                className="text-white flex items-center gap-2"
              >
                <input
                  id="radio-admin"
                  type="radio"
                  name="gender"
                  value="Admin"
                  className="radio border-1 bg-zinc-700"
                  checked={profiles === 'Admin'}
                  onChange={handleProfileChange}
                />
                <span>Administrador</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end items-end gap-2">
            <button
              type="button"
              onClick={() => _navigate('/admin/users')}
              className="h-fit flex justify-center gap-1 text-white bg-zinc-700/50 font-medium rounded-lg text-sm px-4 py-2 text-center shadow hover:bg-zinc-700 active:bg-zinc-700 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="h-fit flex justify-center gap-1 text-white bg-indigo-700/60 font-medium rounded-lg text-sm px-4 py-2 text-center shadow hover:bg-indigo-700 active:bg-indigo-700 transition"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}

export default EditUserPage
