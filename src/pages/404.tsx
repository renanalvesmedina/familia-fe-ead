import React from 'react'
import illustration from '@assets/illustrations/404Error.svg'

import { NextSeo } from 'next-seo'
import { Header } from '@components/header'

const NotFoundPage: React.FC = () => {
  return (
    <React.Fragment>
      <NextSeo title="Página não encontrada" />

      <main className="w-full h-screen bg-zinc-900">
        <div className="flex h-full items-center flex-col">
          <Header />

          <div className="w-full h-full flex flex-col justify-center items-center gap-6">
            <img src={illustration} className="w-96" alt="" />
            <h1 className="text-xl text-white">Página em Desenvolvimento!</h1>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default NotFoundPage
