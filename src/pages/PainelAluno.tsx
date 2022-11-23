import React, { useState } from 'react'
import { ListCards } from '../components/ListCards'
import { Header } from '../components/Header'

const SeusCursos = [
  {
    id: 1,
    route: '/',
    image: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA01.png',
  },
  {
    id: 2,
    route: '/',
    image: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA02.png',
  },
  {
    id: 3,
    route: '/',
    image: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA03.png',
  }
]

const Lancamentos = [
  {
    id: 1,
    route: '/',
    image: 'https://redeinspire.com/img/thumb2022.jpg',
  },
  {
    id: 2,
    route: '/',
    image: 'https://i.ytimg.com/vi/jnWSSjUQXU8/maxresdefault.jpg',
  },
  {
    id: 3,
    route: '/',
    image: 'https://i.ytimg.com/vi/jP2N8l31D-c/hqdefault.jpg',
  }
]

const Recomendados = [
  {
    id: 1,
    route: '/',
    image: 'https://i.ytimg.com/vi/5doA18s_2f0/maxresdefault.jpg',
  },
  {
    id: 2,
    route: '/',
    image: 'https://i.pinimg.com/originals/f9/27/a8/f927a8d6d6017c44e1d2ef8f3d604b51.jpg',
  },
  {
    id: 3,
    route: '/',
    image: 'https://i.ytimg.com/vi/HXmTSJjD7LA/maxresdefault.jpg',
  }
]

export function PainelAluno() {

  return (
    <main className="w-full h-full">
      <div className="flex items-center flex-col">
        <Header />

        <div className="flex flex-col gap-20 pb-60 w-full max-w-[1180px] mt-8">
          <ListCards cardData={SeusCursos} title='Seus Cursos' />
          <ListCards cardData={Lancamentos} title='Lançamentos' />
          <ListCards cardData={Recomendados} title='Lançamentos' />
        </div>
      </div>
    </main>
  )
}
