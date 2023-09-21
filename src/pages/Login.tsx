import illustration from '../assets/webnar-illustration.svg'
import React from 'react'
import toast from 'react-hot-toast'

import { withPublicRoute } from '../hocs/withPublicRoute.hoc'
import { useAuthContext } from '../contexts'
import { SignIn } from 'phosphor-react'

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { login } = useAuthContext()

  async function handleAuth(event: React.FormEvent) {
    event.preventDefault()

    if (email.trim() == '') {
      toast.error('Preencha um email válido!')
      return
    }

    if (password.trim() == '') {
      toast.error('Preencha uma senha válida!')
      return
    }

    login(email, password)
  }

  return (
    <main className="min-h-screen flex max-md:flex-col justify-center bg-zinc-800">
      <section className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-lg w-full px-8 flex flex-col justify-between min-h-[80vh]">
          <img
            src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/7ba73aaa-3da9-4cf1-abf2-ccc85dea5875/uid_4688718/WHITE%20YELLOW%20HORIZONTAL.png"
            className="max-w-[200px]"
          />

          <form onSubmit={handleAuth} className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-white text-3xl font-semibold">
                Seja bem-vindo(a) ao nosso portal de{' '}
                <span className="text-brand-700">ensino.</span>
              </h1>

              <p className="text-gray-400">
                Para começar digite o seu e-mail e senha abaixo:
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="
                rounded-lg 
                px-6
                py-6 
                text-white
                bg-zinc-900
                placeholder-zinc-200
                border-[1px] 
              border-zinc-700
                border-opacity-50
                hover:border-brand-700
                w-full 
                focus:border-brand-700 
                focus:ring-brand-700 
                focus:ring-1 
                focus:outline-none"
                placeholder="Email"
              />

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="
                rounded-lg 
                px-6
                py-6
                text-white
                bg-zinc-900
                placeholder-zinc-200
                border-[1px] 
                border-zinc-700
                border-opacity-50
                hover:border-brand-700 
                w-full 
                focus:border-brand-700 
                focus:ring-brand-700 
                focus:ring-1 
                focus:outline-none"
                placeholder="Senha"
              />

              <button
                type="submit"
                className="
                bg-brand-700 
                  rounded-md 
                  font-medium 
                  text-white
                  py-6
                  flex 
                  justify-center 
                  items-center 
                  cursor-pointer 
                  border-0
                  w-full
                  hover:brightness-110
                  transition-colors"
              >
                <SignIn className="mr-2" size={24} /> <span>Entrar</span>
              </button>

              <div className="mt-2">
                <a href="" className="text-gray-400 hover:text-white">
                  Esqueceu sua senha ?
                </a>
              </div>
            </div>
          </form>

          <a href="" className="text-gray-400">
            Dúvidas sobre o acesso?{' '}
            <strong className="text-white">Fale Conosco</strong>
          </a>
        </div>
      </section>

      <section className="bg-white flex-1 flex items-center justify-center max-md:hidden">
        <img src={illustration} className="md:h-96" />
      </section>
    </main>
  )
}

export default withPublicRoute(Login)
