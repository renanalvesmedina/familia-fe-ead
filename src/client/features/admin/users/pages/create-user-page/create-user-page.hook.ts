import toast from 'react-hot-toast'

import { useMutation } from 'react-query'
import { useRouter } from 'next/router'

import { validatePassword } from '@validators/yup'
import { Option } from '@utils'
import { api } from '@services/api'

import * as yup from 'yup'

export type CreateUserType = {
  fullName: string
  email: string
  password: string
  phone: string
  gender: Option<string>
  profile: string
}

export const validateSchema = yup.object().shape({
  fullName: yup
    .string()
    .typeError('Nome inválido')
    .required('O nome é obrigatório'),
  email: yup
    .string()
    .typeError('E-mail inválido')
    .required('O e-mail é obrigatório'),
  phone: yup
    .string()
    .matches(/^\(\d{2}\) 9/, 'Telefone deve começar com 9 após o DDD')
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido')
    .required('O telefone é obrigatório'),
  gender: yup
    .mixed()
    .typeError('Sexo inválido')
    .required('O sexo é obrigatório'),
  profile: yup
    .string()
    .typeError('Perfil inválido')
    .required('O perfil é obrigatório'),
  password: validatePassword(),
  confirmPassword: yup
    .string()
    .typeError('Confirmar senha inválido')
    .oneOf([yup.ref('password'), undefined], 'As senhas não coincidem')
    .required('Confirmar senha é obrigatório'),
})

export const useCreateUserPage = () => {
  const { push } = useRouter()

  const onSubmit = useMutation(
    async (values: CreateUserType) => {
      const toastId = toast.loading('Carregando...')

      return api
        .post('/api/Authentication/Register', {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          phone: values.phone,
          perfil: values.profile,
          sexo: values?.gender?.value,
        })
        .then(() => toast.dismiss(toastId))
    },
    {
      onError: (error: any, {}) => {
        toast.error(error?.response?.data?.errors?.[0].message)
        console.error(error)
      },
      onSuccess: () => {
        toast.success('Usuário criado com sucesso :)')
        push('/admin/users')
      },
    }
  )

  return { onSubmit: onSubmit.mutateAsync, push, validateSchema }
}
