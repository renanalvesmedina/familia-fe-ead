import React from 'react'
import toast from 'react-hot-toast'

import { useRouter } from 'next/router'

import { AdminLayout } from '@layouts/admin-layout'
import { UserModel } from '@models/UserModel'
import { api } from '@services/api'

const CreateUserPage: React.FC = () => {
  const { push } = useRouter()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [gender, setGender] = React.useState('M')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [profiles, setProfiles] = React.useState<string[]>([])

  function handleGenderChange(e: any) {
    setGender(e.target.value)
  }

  function addProfileChange(profile: string) {
    console.log(profile)
    if (profiles.includes(profile)) {
      return
    }

    profiles.push(profile)
    setProfiles(profiles)
    console.log(profiles)
  }

  async function handleCreateUser(e: React.FormEvent) {
    const toastId = toast.loading('Carregando...')
    e.preventDefault()

    if (name.trim() == '' || name.trim().length <= 3) {
      toast.error('Preencha um nome válido!')
      return
    }

    if (email.trim() == '') {
      toast.error('Preencha um email válido!')
      return
    }

    if (password.trim() == '') {
      toast.error('Preencha uma senha válida!')
      return
    }

    if (password.trim() != confirmPassword.trim()) {
      toast.error('As senhas precisam ser iguais!')
      return
    }

    const userModel = new UserModel(
      name,
      email,
      password,
      phone,
      gender,
      profiles
    )

    await api
      .post('/api/Authentication/Register', userModel)
      .then((res) => {
        console.log(res)
        toast.dismiss(toastId)
        push('/admin/users')
        toast.success('Usuário criado com sucesso :)')
      })
      .catch((err) => {
        toast.dismiss(toastId)
        toast.error(err.response.data.errors[0].message)
      })
  }

  return (
    <AdminLayout>
      <p className="text-2xl font-medium text-white sticky top-0 pt-10 pb-6 bg-zinc-900 z-40">
        Criar Usuário
      </p>

      <div className="flex w-full rounded-lg bg-zinc-800 px-6 py-8">
        <form
          className="w-full grid grid-cols-2 gap-6"
          onSubmit={handleCreateUser}
        >
          <fieldset className="flex flex-col space-y-4">
            <label htmlFor="name" className="block text-sm text-gray-400">
              Nome:
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="João Batista"
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-4">
            <label htmlFor="email" className="block text-sm text-gray-400">
              Email:
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="joao@exemplo.com.br"
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-4">
            <label htmlFor="phone" className="block text-sm text-gray-400">
              Telefone:
            </label>
            <input
              type="tel"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="27999999999"
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-4">
            <label htmlFor="sexo" className="block text-sm text-gray-400">
              Sexo:
            </label>
            <select
              onChange={handleGenderChange}
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </fieldset>

          <fieldset className="flex flex-col space-y-4">
            <label htmlFor="password" className="block text-sm text-gray-400">
              Senha:
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••"
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-400"
            >
              Confirme a Senha:
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="••••••"
              className="bg-zinc-700/30 border border-zinc-700/50 text-white text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-4"
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-4">
            <label htmlFor="profile" className="block text-sm text-gray-400">
              Perfil:
            </label>
            <div className="flex gap-6">
              <label
                htmlFor="checkbox-student"
                className="text-white flex items-center gap-2"
              >
                <input
                  id="checkbox-student"
                  type="checkbox"
                  name="student"
                  onChange={() => addProfileChange('Student')}
                  className="checkbox bg-zinc-700"
                />

                <span>Aluno</span>
              </label>
              <label
                htmlFor="checkbox-admin"
                className="text-white flex items-center gap-2"
              >
                <input
                  id="checkbox-admin"
                  type="checkbox"
                  name="admin"
                  onChange={() => addProfileChange('Admin')}
                  className="checkbox bg-zinc-700"
                />
                <span>Administrador</span>
              </label>
            </div>
          </fieldset>

          <div className="flex justify-end items-end gap-2">
            <button
              onClick={() => push('/admin/users')}
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

export default CreateUserPage
