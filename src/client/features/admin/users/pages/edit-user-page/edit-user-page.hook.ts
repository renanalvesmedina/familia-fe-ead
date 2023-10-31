import toast from 'react-hot-toast'

import { useQuery, useQueryClient } from 'react-query'
import { useRouter } from 'next/router'

import { EditUserModel } from '@models/EditUserModel'
import { numonly } from '@utils'
import { api } from '@services/api'

import * as yup from 'yup'

const putUser = async (userId?: string) =>
  api
    .get<EditUserModel>(`/v1/User/details?UserId=${userId}`)
    .then((res) => res.data)

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
  profiles: yup
    .mixed()
    .typeError('Perfil inválido')
    .required('O perfil é obrigatório'),
})

export const useEditUserPage = (userId: string) => {
  const queryClient = useQueryClient()

  const { push } = useRouter()

  const { data: user } = useQuery(['user', userId], () => putUser(userId), {
    staleTime: 1000 * 60 * 1, // 1 minutes
    onError: (err: any) => {
      toast.error(err.response.data.errors[0].message)
    },
  })

  async function onSubmit(values: any) {
    const toastId = toast.loading('Carregando...')

    const body = {
      fullName: values.fullName,
      phone: numonly(values.phone),
      gender: values?.gender.value,
      profiles: values.profiles,
    }

    await api
      .put(`/v1/User?UserId=${userId}`, body)
      .then(() => {
        toast.dismiss(toastId)
        toast.success('Usuário atualizado com sucesso :)')
        queryClient.invalidateQueries(['user', userId])
        queryClient.invalidateQueries(['users'])
        push('/admin/users')
      })
      .catch((err) => {
        toast.dismiss(toastId)
        toast.error(err.response.data.errors[0].message)
      })
  }

  return { user, onSubmit, validateSchema }
}
