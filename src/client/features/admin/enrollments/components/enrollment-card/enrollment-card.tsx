/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { Enrollment } from '@models/enrollment.model'
import { DivideY } from '@core/divide'
import { TIKETO_BASE_URL } from '@config'
import { useQuery } from 'react-query'
import { twMerge } from 'tailwind-merge'
import { parseDate } from '@utils'

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
        <p className="text-sm text-gray-500">
          Data de inscrição: {parseDate(enrollment?.data_hora_criacao)}
        </p>
        <span
          className={twMerge(
            'px-4 py-2 rounded-full text-xs font-medium text-white uppercase',
            enrollment?.situacao === 'confirmado' && 'bg-green-600',
            enrollment?.situacao === 'cancelado' && 'bg-red-600'
          )}
        >
          {enrollment?.situacao}
        </span>
      </div>
    </div>
  </div>
)

const Content: React.FC<Enrollment> = ({ id, data_hora_criacao }) => {
  const { data: tiketoUser } = useQuery<TiketoUser>(
    ['tiketo-user', id],
    () =>
      fetch(`${TIKETO_BASE_URL}/integracao/participantes/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer 7f5d002428a6751bab1597d58eb783ed`,
        },
      }).then((response) => response.json()),
    {
      staleTime: 1000 * 60 * 1, // 1 minutes
      onError: (error) => console.log(error),
    }
  )

  return (
    <DivideY dividerClassName="my-6 border-gray-200 dark:border-zinc-700/40">
      <div className="flex items-center justify-between">
        <p>Email</p>

        <p>{tiketoUser?.respostas_formulario?.[1]?.resposta}</p>
      </div>

      <div className="flex items-center justify-between">
        <p>Telefone</p>

        <p>{tiketoUser?.respostas_formulario?.[0]?.resposta}</p>
      </div>

      <div className="flex items-center justify-between">
        <p>Data de inscrição:</p>

        <p>{parseDate(data_hora_criacao, "dd/MM/yyyy 'às' hh:mm a")}</p>
      </div>

      <div className="flex items-center justify-between">
        <p>ID da Venda</p>

        <p>#{tiketoUser?.venda_id}</p>
      </div>
    </DivideY>
  )
}

export default { Trigger, Content }
