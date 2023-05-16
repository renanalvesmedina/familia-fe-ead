import React from 'react'

interface TableProps {
  columns: [
    {
      name: String;
    }
  ]
  lines: string[];
}

export function Table({
  columns,
  lines
 } : TableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        {/* HEAD => */}
        <thead>
          <tr>
            { columns.map((column, i) => (
              <th key={i} className="bg-white text-sm">column.name</th>
            )) }
            <th className="bg-white text-sm"></th>
          </tr>
        </thead>
        {/* <= HEAD */}

        <tbody>
          {/* LINE => */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/342300459_259618049855873_20616466600477812_n.jpg?ccb=11-4&oh=01_AdTTJBR7YEy-W_vN0JD1UYf7Gj8P3-0WUQF7KJCohyRY_A&oe=64689D41" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-light text-sm">Renan Alves Medina</div>
                </div>
              </div>
            </td>
            <td className="font-light text-sm">alvesrenansantos@hotmail.com</td>
            <td className="font-light text-sm">Aluno</td>
            <th>
              <button className="bg-zinc-900 px-2 py-[2px] rounded-lg text-sm text-white flex gap-1 items-center hover:bg-gradient-to-r from-zinc-700 active:bg-zinc-700"><NotePencil size={16} />Editar</button>
            </th>
          </tr>

          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/345010907_3623896424600772_9050977009527032944_n.jpg?ccb=11-4&oh=01_AdRhuC-hY0bhfRW_xxrTEpLbp3VcsktN0s12xeRrlwn5Mg&oe=6467CD37" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-light text-sm">Leticia Medina Alves</div>
                </div>
              </div>
            </td>
            <td className="font-light text-sm">
              medinaaicitel@gmail.com
            </td>
            <td className="font-light text-sm">Aluno</td>
            <th>
              <button className="bg-zinc-900 px-2 py-[2px] rounded-lg text-sm text-white flex gap-1 items-center hover:bg-gradient-to-r from-zinc-700 active:bg-zinc-700"><NotePencil size={16} />Editar</button>
            </th>
          </tr>
          {/* <= LINE */}
        </tbody>
      </table>
    </div>
  )
}
