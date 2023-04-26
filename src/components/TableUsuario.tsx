import React from 'react'

export function TableUsuario() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        {/* HEAD => */}
        <thead>
          <tr>
            <th className="bg-white text-sm">Nome</th>
            <th className="bg-white text-sm">Email</th>
            <th className="bg-white text-sm">Perfil</th>
            <th className="bg-white text-sm"></th>
          </tr>
        </thead>
        {/* <= HEAD */}

        <tbody>
          {/* LINE => */}
          <tr className="hover">
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/295215274_768159327767403_8393893918043356168_n.jpg?ccb=11-4&oh=01_AdTmvx1-bKEWAG2jdfyAJndNbITBSIYRopn-QIozzxIz5g&oe=644ABB97" alt="Avatar Tailwind CSS Component" />
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
              <button className="btn btn-primary text-white btn-xs">Detalhes</button>
            </th>
          </tr>

          <tr className="hover">
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/322257319_570007561654120_1069922484050545896_n.jpg?ccb=11-4&oh=01_AdRo8PkA416AJ6DJmn4hrH4PUcES9YFNikHJQh8RxmReIA&oe=644A9328" alt="Avatar Tailwind CSS Component" />
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
              <button className="btn btn-primary text-white btn-xs">Detalhes</button>
            </th>
          </tr>
          {/* <= LINE */}
        </tbody>
      </table>
    </div>
  )
}
