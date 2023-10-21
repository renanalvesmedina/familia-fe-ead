/* eslint-disable @next/next/no-img-element */
import React from 'react'
import toast from 'react-hot-toast'

import { KeyRound, UserCircle } from 'lucide-react'
import { useQueryClient } from 'react-query'
import { Form, useForm } from 'react-final-form'
import { NextSeo } from 'next-seo'

import { validateResetPassword } from '@validators/yup'
import { UserProfileModel } from '@models/UserProfileModel'
import { Option, numonly } from '@utils'
import { useAuthContext } from '@contexts/auth.context'
import { UserLayout } from '@layouts/user-layout'
import { validate } from '@validators/validateForm'
import { api } from '@services/api'

import * as Input from '@components/input'
import * as Tabs from '@radix-ui/react-tabs'

type EditProfileTypes = {
  fullName: string
  gender: Option<string>
  phone: string
}

type EditPasswordTypes = {
  currentPassword: string
  confirmPassword: string
  newPassword: string
}

const EditProfileForm: React.FC<{
  user?: UserProfileModel
}> = ({ user }) => {
  const { batch, change } = useForm()

  React.useEffect(() => {
    batch(() => {
      change('fullName', user?.fullName)
      change('email', user?.email)
      change('phone', user?.telefone)
      change('gender', {
        value: user?.sexo,
        label: user?.sexo === 'M' ? 'Masculino' : 'Feminino',
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input.Form.Field name="fullName" label="Nome:" />
        <Input.Form.Field type="email" name="email" label="E-mail:" disabled />
        <Input.Form.Select
          name="gender"
          label="Sexo:"
          options={[
            { value: 'F', label: 'Feminino' },
            { value: 'M', label: 'Masculino' },
          ]}
        />
        <Input.Form.Field type="cel" name="phone" label="WhatsApp:" />
      </div>

      <div className="flex justify-end w-full">
        <button
          type="submit"
          className="md:w-[20%] text-zinc-800 bg-brand-700 hover:bg-brand-700/90 active:opacity-90 font-medium rounded-lg text-sm p-4 text-center transition"
        >
          Salvar
        </button>
      </div>
    </React.Fragment>
  )
}

const EditPasswordForm: React.FC = () => (
  <React.Fragment>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input.Form.Password
        name="currentPassword"
        label="Senha atual:"
        containerClassName="col-start-1 md:col-end-3"
      />

      <Input.Form.Password name="newPassword" label="Nova senha:" />

      <Input.Form.Password
        name="confirmPassword"
        label="Confirme a nova senha:"
      />
    </div>

    <div className="flex justify-end w-full">
      <button
        type="submit"
        className="md:w-[20%] text-zinc-800 bg-brand-700 hover:bg-brand-700/90 active:opacity-90 font-medium rounded-lg text-sm p-4 text-center transition"
      >
        Redefinir
      </button>
    </div>
  </React.Fragment>
)

const UserProfilePage: React.FC = () => {
  const queryClient = useQueryClient()

  const { user } = useAuthContext()

  const handleEditProfile = React.useCallback(
    async (values: EditProfileTypes) => {
      const toastId = toast.loading('Carregando...')

      await api
        .put('/v1/Me/profile', {
          fullName: values.fullName,
          phoneNumber: numonly(values.phone),
          sexo: values.gender.value,
        })
        .then(() => {
          toast.dismiss(toastId)
          toast.success('Perfil atualizado com sucesso :)')
          queryClient.invalidateQueries(['me'])
        })
        .catch((err) => {
          toast.dismiss(toastId)
          toast.error(err.response.data.errors[0].message)
        })
    },
    [queryClient]
  )

  const handleResetPassword = React.useCallback(
    async (values: EditPasswordTypes) => {
      const request = api.post('/v1/Me/password/reset', values)

      toast.promise(request, {
        loading: 'Carregando...',
        success: 'Senha atualizada com sucesso :)',
        error: (err) => `${err.response.data.errors[0].message} :(`,
      })
    },
    []
  )

  return (
    <UserLayout>
      <NextSeo title="Meu perfil" />

      <div className="flex flex-col items-center justify-center w-full">
        <Tabs.Root
          className="flex flex-col shadow-sm w-full"
          defaultValue="tab1"
        >
          <Tabs.List className="flex flex-shrink-0 border-b border-gray-200 dark:border-transparent dark:bg-zinc-700/20 rounded-t-lg py-2">
            <Tabs.Trigger
              data-ui="active"
              className="flex flex-1 items-center justify-center rounded-tl-xl px-5 h-11 text-zinc-800 dark:text-gray-500 select-none gap-2 data-[state=active]:text-brand-700 dark:data-[state=active]:text-brand-700"
              value="tab1"
            >
              <UserCircle size={24} /> Editar perfil
            </Tabs.Trigger>

            <Tabs.Trigger
              className="flex flex-1 items-center justify-center rounded-tr-xl px-5 h-11 text-zinc-800 dark:text-gray-500 font-medium select-none gap-2 data-[state=active]:text-brand-700 dark:data-[state=active]:text-brand-700"
              value="tab2"
            >
              <KeyRound size={24} /> Alterar senha
            </Tabs.Trigger>
          </Tabs.List>

          <div className="p-10">
            <Tabs.Content className="flex-grow" value="tab1">
              <Form
                onSubmit={handleEditProfile}
                render={({ handleSubmit }) => (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <EditProfileForm user={user} />
                  </form>
                )}
              />
            </Tabs.Content>

            <Tabs.Content className="flex-grow" value="tab2">
              <Form
                onSubmit={handleResetPassword}
                validate={(values) => validate(values, validateResetPassword)}
                render={({ handleSubmit }) => (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <EditPasswordForm />
                  </form>
                )}
              />
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </UserLayout>
  )
}

export default UserProfilePage
