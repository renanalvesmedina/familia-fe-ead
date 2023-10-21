import React from 'react'

import { EditUserModel } from '@models/EditUserModel'
import { useRouter } from 'next/router'
import { useForm } from 'react-final-form'

import * as Input from '@components/input'

const EditUserForm: React.FC<{
  user?: EditUserModel
}> = ({ user }) => {
  const { push } = useRouter()
  const { batch, change } = useForm()

  React.useEffect(() => {
    batch(() => {
      change('fullName', user?.fullName)
      change('email', user?.email)
      change('phone', user?.phone)
      change('profiles', user?.profiles)
      change('gender', {
        value: user?.gender,
        label: user?.gender === 'M' ? 'Masculino' : 'Feminino',
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <React.Fragment>
      <Input.Form.Field name="fullName" label="Name:" />

      <Input.Form.Field type="email" name="email" label="E-mail:" disabled />

      <Input.Form.Field
        type="cel"
        name="phone"
        label="Telefone:"
        defaultValue={user?.phone}
      />

      <Input.Form.Select
        name="gender"
        label="Sexo:"
        options={[
          { value: 'F', label: 'Feminino' },
          { value: 'M', label: 'Masculino' },
        ]}
      />

      <div className="flex flex-col col-start-1 col-end-3 gap-4">
        <p className="text-sm text-zinc-800 dark:text-white">Perfil:</p>

        <div className="w-full flex max-md:flex-col gap-6">
          <Input.Form.Checkbox
            name="profiles"
            label="Aluno"
            radioValue="Student"
            containerClassName="w-full"
          />

          <Input.Form.Checkbox
            name="profiles"
            label="Administrador"
            radioValue="Admin"
            containerClassName="w-full"
          />
        </div>
      </div>

      <div className="flex justify-end items-end gap-2 col-start-1 col-end-3">
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
    </React.Fragment>
  )
}

export default EditUserForm
