import React from 'react'

import { Form } from 'react-final-form'

import { AdminLayout } from '@layouts/admin-layout'
import { validate } from '@validators/validateForm'

import { useEditUserPage } from './edit-user-page.hook'
import { EditUserForm } from '../../components'

interface EditUserPageProps {
  userId: string
}

const EditUserPage: React.FC<EditUserPageProps> = ({ userId }) => {
  const { onSubmit, user, validateSchema } = useEditUserPage(userId)
  return (
    <AdminLayout>
      <p className="text-2xl font-medium text-zinc-800 dark:text-white sticky top-0 pt-10 pb-6 bg-white dark:bg-zinc-900 z-40">
        Editar Usuário
      </p>

      <div className="flex w-full">
        <Form
          onSubmit={onSubmit}
          validate={(values) => validate(values, validateSchema)}
          render={({ handleSubmit }) => (
            <form
              className="w-full grid grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >
              <EditUserForm user={user} />
            </form>
          )}
        />
      </div>
    </AdminLayout>
  )
}

export default EditUserPage
