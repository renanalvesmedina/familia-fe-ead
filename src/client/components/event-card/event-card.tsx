import React from 'react'

import { ArrowSquareOut, Calendar, MapPin } from 'phosphor-react'
import { format } from 'date-fns'

import { TiketoEventModel } from '@models/TiketoEventModel'
import { clickByKey } from '@utils'

const EventCard: React.FC<TiketoEventModel> = ({
  id,
  nome,
  imagem,
  data_hora_inicio,
  categoria_principal_nome,
  local_evento_nome,
}) => {
  const onClick = () =>
    window.open(`https://tiketo.com.br/evento/${id}`, '_blank', 'noreferrer')

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => clickByKey(e, onClick)}
      tabIndex={0}
      className="select-none cursor-pointer grid max-md:grid-rows-2 md:grid-cols-4 bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition rounded-lg outline-none focus-within:border-indigo-600"
    >
      <div className="bg-zinc-700 bg-opacity-25 max-md:rounded-t-lg md:rounded-l-lg max-md:w-full h-60 overflow-hidden">
        <img
          className="object-cover object-center max-md:rounded-t-lg md:rounded-l-lg pointer-events-auto h-full w-full"
          decoding="async"
          src={imagem}
          alt=""
        />
      </div>

      <div className="p-8 md:p-10 md:col-start-2 md:col-end-5 flex flex-col justify-between">
        <div className="space-y-3">
          <p className="text-white bg-brand-600 bg-opacity-30 text-xs border border-brand-700 border-opacity-60 w-fit px-3 py-1 rounded-full">
            {categoria_principal_nome}
          </p>

          <h4 className="text-white text-xl font-medium">{nome}</h4>

          <div className="flex items-center gap-3">
            <p className="text-gray-400 inline-flex items-center gap-2">
              <Calendar size={20} />
              {format(new Date(data_hora_inicio), 'dd/MM/yyyy')}
            </p>

            <p className="text-gray-400 inline-flex items-center gap-2">
              <MapPin size={20} />
              {local_evento_nome}
            </p>
          </div>
        </div>

        <span className="text-brand-600 font-medium flex items-center gap-2">
          Saiba mais
          <ArrowSquareOut size={20} />
        </span>
      </div>
    </div>
  )
}

export default EventCard
