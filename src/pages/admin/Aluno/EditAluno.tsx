import React from 'react'

export function EditAluno() {
  return (
    <div className="w-full p-4">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
        Nome:
      </label>
      <input
        type="text"
        name="name"
        required
        placeholder="João Batista"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4"
      />

      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
        Email:
      </label>
      <input
        type="email"
        name="email"
        required
        placeholder="joao@exemplo.com.br"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4"
      />

      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
        Telefone:
      </label>
      <input
        type="tel"
        name="phone"
        required
        placeholder="27999999999"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4"
      />

      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
        Senha:
      </label>
      <input
        type="password"
        name="password"
        required
        placeholder="••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4"
      />

      <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900">
        Sexo:
      </label>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none block w-full p-2.5 mb-4">
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
      </select>

      <label htmlFor="radio-1" className="block mb-2 text-sm font-medium text-gray-900">
        Perfil:
      </label>
      <div className="flex gap-2">
        <input type="radio" name="radio-1" className="radio border-1" checked /> <span className="text-zinc-900">Aluno</span>
        <input type="radio" name="radio-1" className="radio border-1" /> <span className="text-zinc-900">Administrador</span>
      </div>

      <div className="flex justify-end w-full">
        <button
          type="submit"
          className="md:w-[20%] text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 active:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Salvar
        </button>
      </div>
    </div>
  )
}
