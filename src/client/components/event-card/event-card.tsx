import React from 'react'

import { CalendarCheck, Link, MapPin } from 'lucide-react'
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
  const onClick = React.useCallback(
    () =>
      window.open(`https://tiketo.com.br/evento/${id}`, '_blank', 'noreferrer'),
    [id]
  )

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => clickByKey(e, onClick)}
      tabIndex={0}
      className="select-none cursor-pointer grid max-md:grid-rows-2 md:grid-cols-2 bg-white dark:bg-zinc-800 border border-zinc-700/20 dark:border-zinc-700 hover:border-zinc-700/30 dark:hover:border-zinc-500 transition rounded-lg"
    >
      <div className="bg-zinc-700/25 max-md:rounded-t-lg md:rounded-l-lg w-full overflow-hidden">
        <img
          className="object-cover object-center max-md:rounded-t-lg md:rounded-l-lg pointer-events-auto h-full w-full"
          decoding="async"
          src={imagem}
          alt=""
        />
      </div>

      <div className="p-6 md:col-start-2 md:col-end-5 flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <p className="text-zinc-800 dark:text-white bg-brand-700/30 text-xs border border-brand-700 border-opacity-60 w-fit px-3 py-1 rounded-full">
            {categoria_principal_nome}
          </p>

          <h4 className="text-zinc-800 dark:text-white text-xl font-medium">
            {nome}
          </h4>

          <div className="flex flex-col gap-2">
            <p className="text-gray-400 inline-flex items-center gap-2">
              <CalendarCheck size={20} />
              {format(new Date(data_hora_inicio), 'dd/MM/yyyy')}
            </p>

            <p className="text-gray-400 inline-flex items-center gap-2">
              <MapPin size={20} />
              {local_evento_nome}
            </p>
          </div>
        </div>

        <div className="text-brand-700 font-medium flex items-center gap-2">
          Saiba mais
          <Link size={18} />
        </div>
      </div>
    </div>
  )
}

export default EventCard
