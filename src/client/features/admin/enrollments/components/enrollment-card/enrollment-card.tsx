/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { useQuery } from 'react-query'
import { twMerge } from 'tailwind-merge'

import { TIKETO_BASE_URL } from '@config'
import { Enrollment } from '@models/enrollment.model'
import { parseDate } from '@utils'
import { DivideY } from '@core/divide'
import { UsersModel } from '@models/UsersModel'
import toast from 'react-hot-toast'
import { api } from '@services/api'
import { getUser } from '@features/admin/users/components/user-details/user-details.hook'

interface TiketoUser {
  id: number
  valor: string
  nome_participante: string
  sobrenome_participante: string
  codigo: string
  venda_id: number
  evento_id: number
  opcao_ingresso_id: number
  situacao: string
  opcao_ingresso: {
    id: number
    nome: string
  }
  respostas_formulario: [
    {
      id: number
      resposta: string
      campo_formulario_id: number
      ingresso_id: number
      campo_formulario: {
        id: number
        titulo: string
        tipo: string
      }
    },
    {
      id: number
      resposta: string
      campo_formulario_id: number
      ingresso_id: number
      campo_formulario: {
        id: number
        titulo: string
        tipo: string
      }
    },
  ]
}

const Trigger: React.FC<
  Enrollment & {
    onRowClick: (row: Enrollment) => void
    selectedRows: Enrollment[]
  }
> = ({ selectedRows, onRowClick, ...enrollment }) => (
  <div className="flex items-center justify-between gap-4 w-full">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name=""
          id=""
          onClick={() => onRowClick(enrollment)}
          className="p-2.5 relative appearance-none border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/50 rounded checked:bg-gradient-to-tr checked:from-blue-500 checked:to-blue-700 checked:before:content-['\2713'] checked:before:absolute checked:before:top-[50%] checked:before:-translate-y-[50%] checked:before:left-[50%] checked:before:-translate-x-[50%] checked:before:text-white checked:before:text-lg cursor-pointer"
          checked={selectedRows.some(
            (selectedRow) => selectedRow.id === enrollment.id
          )}
        />

        <p>
          {enrollment?.nome_participante
            .trim()
            .concat(' ' + enrollment?.sobrenome_participante)}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span
          className={twMerge(
            'px-4 py-2 rounded-full text-xs font-medium text-white uppercase',
            enrollment?.situacao === 'confirmado' && 'bg-green-600',
            enrollment?.situacao === 'cancelado' && 'bg-red-600'
          )}
        >
          Pagamento {enrollment?.situacao}
        </span>

        <span
          className={twMerge(
            'px-4 py-2 rounded-full text-xs font-medium text-white bg-zinc-700/50'
          )}
        >
          Ver detalhes
        </span>
      </div>
    </div>
  </div>
)

const Content: React.FC<Enrollment> = ({
  data_hora_criacao: tiketoUserSubscriptionDate,
  id,
}) => {
  const { data: tiketoUser } = useQuery<TiketoUser>(
    ['tiketo-user', id],
    () =>
      fetch(`${TIKETO_BASE_URL}/integracao/participantes/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer 1a6125ce97c537f26d6447a43e23163d`,
        },
      }).then((response) => response.json()),
    {
      staleTime: 1000 * 60 * 1, // 1 minutes
      onError: (error) => console.log(error),
    }
  )

  const tiketoUserEmail = tiketoUser?.respostas_formulario?.[0]?.resposta
  const tiketoUserPhone = tiketoUser?.respostas_formulario?.[1]?.resposta
  const tiketoUserSaleId = tiketoUser?.venda_id

  const { data: users } = useQuery(
    ['users'],
    () =>
      api
        .get<UsersModel[]>('/v1/User?start=0&limit=9999')
        .then((response) => response.data),
    {
      staleTime: 1000 * 60 * 1, // 1 minutes
      onError: (error: any) =>
        toast.error(error.response.data.errors?.[0].message),
    }
  )

  const userRegistered = users?.find((user) => user.email === tiketoUserEmail)

  console.log(users)
  console.log(userRegistered)

  const { data: user } = useQuery(
    ['user', userRegistered?.userId],
    () => getUser(userRegistered?.userId),
    {
      staleTime: 1000 * 60 * 1, // 1 minutes
      onError: (err: any) => {
        toast.error(err.response.data.errors[0].message)
      },
    }
  )

  const isUserEnrolled = user?.courseEnrollments?.some(
    (courseEnrollment) =>
      courseEnrollment.courseName === 'Comprometidos com a Membresia'
  )

  return (
    <DivideY dividerClassName="my-6 border-gray-200 dark:border-zinc-700/40">
      <div className="flex items-center justify-between">
        <p>Email</p>

        <p>{tiketoUserEmail}</p>
      </div>

      <div className="flex items-center justify-between">
        <p>Telefone</p>

        <p>{tiketoUserPhone}</p>
      </div>

      <div className="flex items-center justify-between">
        <p>Data de inscrição:</p>

        <p>
          {parseDate(tiketoUserSubscriptionDate, "dd/MM/yyyy 'às' hh:mm a")}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p>ID da Venda</p>

        <p>#{tiketoUserSaleId}</p>
      </div>

      <div className="flex items-center justify-between">
        <p>Usuário cadastrado</p>

        <p>{!!userRegistered ? 'Sim' : 'Não'}</p>
      </div>

      <div className="flex items-center justify-between">
        <p>Aluno matriculado</p>

        <p>{isUserEnrolled ? 'Sim' : 'Não'}</p>
      </div>
    </DivideY>
  )
}

export default { Trigger, Content }
