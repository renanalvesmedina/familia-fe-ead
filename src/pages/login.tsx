/* eslint-disable @next/next/no-img-element */
import React from 'react'

import illustration from '@assets/illustrations/webnar-illustration.svg'

import { NextSeo } from 'next-seo'
import { LogIn } from 'lucide-react'
import { Form } from 'react-final-form'

import { Credentials, useAuthContext } from '@contexts/auth.context'
import { whatsappSuportLink } from '@config'
import { validateLogin } from '@validators/yup'
import { withSSRGuest } from '@hocs/with-ssr-guest'
import { validate } from '@validators/validateForm'
import { Loader } from '@core/loader'

import * as Input from '@components/input'

const LoginPage: React.FC = () => {
  const { login, isLoginLoading } = useAuthContext()

  const onSubmit = React.useCallback(
    async (values: Credentials) => login({ ...values }),
    [login]
  )

  return (
    <React.Fragment>
      <NextSeo title="Login" />

      <main className="min-h-screen flex max-md:flex-col justify-center bg-zinc-800">
        <section className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-lg w-full px-8 flex flex-col justify-between min-h-[80vh]">
            <img
              src="/images/logo_white.png"
              alt=""
              className="max-w-[200px]"
            />

            <Form
              onSubmit={onSubmit}
              validate={(values) => validate(values, validateLogin)}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="space-y-10">
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
                    <Input.Form.Field
                      type="email"
                      name="email"
                      variant="filled_dark"
                    />
                    <Input.Form.Password
                      name="password"
                      variant="filled_dark"
                    />

                    <button
                      type="submit"
                      disabled={isLoginLoading}
                      className="
                      bg-brand-700 
                        rounded-md 
                        font-medium 
                        text-zinc-800
                        py-5
                        flex 
                        justify-center 
                        items-center 
                        cursor-pointer 
                        border-0
                        w-full
                        gap-2
                        hover:brightness-110
                        transition-colors
                        disabled:bg-opacity-10
                        disabled:cursor-not-allowed
                        "
                    >
                      {isLoginLoading ? (
                        <Loader />
                      ) : (
                        <React.Fragment>
                          Entrar
                          <LogIn size={20} />
                        </React.Fragment>
                      )}
                    </button>

                    <div className="mt-2">
                      <a href="" className="text-gray-400 hover:text-white">
                        Esqueceu sua senha ?
                      </a>
                    </div>
                  </div>
                </form>
              )}
            />

            <a
              href={whatsappSuportLink}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400"
            >
              Dúvidas sobre o acesso?{' '}
              <strong className="text-white">Fale Conosco</strong>
            </a>
          </div>
        </section>

        <section className="bg-white flex-1 flex items-center justify-center max-md:hidden">
          <img src={illustration} alt="" className="md:h-96" />
        </section>
      </main>
    </React.Fragment>
  )
}

export default LoginPage

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  }
})
