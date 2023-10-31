import React from 'react'

import { Form } from 'react-final-form'

import { AdminLayout } from '@layouts/admin-layout'
import { validate } from '@validators/validateForm'

import { useCreateUserPage } from './create-user-page.hook'

import * as Input from '@components/input'

const CreateUserPage: React.FC = () => {
  const { push, onSubmit, validateSchema } = useCreateUserPage()

  return (
    <AdminLayout>
      <p className="text-2xl font-medium text-zinc-800 dark:text-white sticky top-0 pt-10 pb-6 bg-white dark:bg-zinc-900 z-40">
        Criar Usuário
      </p>

      <div className="flex w-full rounded-lg mb-20">
        <Form
          onSubmit={(values) => onSubmit(values as never)}
          validate={(values) => validate(values, validateSchema)}
          render={({ handleSubmit }) => (
            <form
              className="flex flex-col w-full gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input.Form.Field name="fullName" label="Nome:" />

                <Input.Form.Field type="email" name="email" label="E-mail:" />

                <Input.Form.Field type="cel" name="phone" label="Telefone:" />

                <Input.Form.Select
                  name="gender"
                  label="Sexo:"
                  options={[
                    { value: 'F', label: 'Feminino' },
                    { value: 'M', label: 'Masculino' },
                  ]}
                />

                <Input.Form.Password name="password" label="Senha:" />

                <Input.Form.Password
                  name="confirmPassword"
                  label="Confirme a nova senha:"
                />

                <div className="flex flex-col col-start-1 md:col-end-3 gap-4">
                  <p className="text-sm text-zinc-800 dark:text-white">
                    Perfil:
                  </p>

                  <div className="w-full flex max-md:flex-col gap-6">
                    <Input.Form.Radio
                      name="profile"
                      label="Aluno"
                      radioValue="Student"
                      containerClassName="w-full"
                    />

                    <Input.Form.Radio
                      name="profile"
                      label="Administrador"
                      radioValue="Admin"
                      containerClassName="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-end gap-2">
                <button
                  type="button"
                  onClick={() => push('/admin/users')}
                  className="h-fit flex justify-center gap-1 text-white bg-zinc-700 font-medium rounded-lg text-sm p-4 text-center shadow hover:bg-zinc-700/90 active:bg-zinc-700/90 transition"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="h-fit flex justify-center gap-1 text-zinc-800 bg-brand-700 font-medium rounded-lg text-sm p-4 text-center shadow hover:bg-brand-700/90 active:bg-brand-700/90 transition"
                >
                  Salvar
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </AdminLayout>
  )
}

export default CreateUserPage
