import React from 'react'

export function Formulario() {
  return (
    <div className="py-6 px-6 lg:px-8 text-left w-full">
      <h3 className="mb-4 text-xl font-medium text-gray-900">Editar Perfil:</h3>
      <form className="space-y-6">
        <div className="">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="nome@exemplo.com.br"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5"
          />
        </div>

        <div className="">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Senha:
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-700 focus:border-brand-700 block w-full p-2.5"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="remember"
                value=""
                className="w-4 h-4 bg-gray-50 rounded-full border border-gray-300"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Lembrar-me
            </label>
          </div>
          <a href="#" className="text-xs text-brand-700 hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-brand-700 hover:bg-gradient-to-bl from-brand-600 focus:ring-4 focus:outline-none focus:ring-brand-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Acessar
        </button>
      </form>
    </div>
  )
}
