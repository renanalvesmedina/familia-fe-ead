import React from 'react'
import Link from 'next/link'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { NextSeo } from 'next-seo'

import { whatsappSuportLink } from '@config'
import { withSSRGuest } from '@hocs/with-ssr-guest'

import * as Input from '@components/input'

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('')

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

            <div className="space-y-10">
              <Link href="/login">
                <ArrowLeft />
              </Link>
              <div className="space-y-4">
                <h1 className="text-white text-3xl font-semibold">
                  Esqueceu sua senha? Não se preocupe, nós vamos te
                  <span className="text-brand-700"> ajudar!</span>
                </h1>

                <p className="text-gray-400">
                  Para continuar digite o seu e-mail abaixo:
                </p>
              </div>

              <div className="space-y-4">
                <Input.Field
                  type="email"
                  name="email"
                  variant="filled_dark"
                  onChange={(e) => setEmail(e as never as string)}
                />

                <a
                  target="_blank"
                  rel="norreferer"
                  href={
                    whatsappSuportLink +
                    `&text=${encodeURI(
                      `Olá, preciso de ajuda para recuperar minha senha no portal de ensino. Este é o meu e-mail: ${email}`
                    )}`
                  }
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
                  Solicitar nova senha
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
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
          </div>
        </section>

        <section className="bg-white flex-1 flex items-center justify-center max-md:hidden">
          <img
            src="/images/webinar-illustration.svg"
            alt=""
            className="md:h-96"
          />
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
