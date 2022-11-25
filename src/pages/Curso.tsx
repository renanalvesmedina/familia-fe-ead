import React from 'react'
import { Header } from '../components/Header'
import { Ui, Player, Video, DefaultControls, ClickToPlay } from '@vime/react'
import '@vime/core/themes/default.css';
import { Books } from "phosphor-react";
import { Lesson } from '../components/Lesson';

const listAulas = [
  {
    id: 1,
    title: '1 - Comprometidos com a Membresia',
    isPending: false,
    videoUri: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/GrupoWhatsApp_1.mp4',
    thumb: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/thumb_aula01.png',
    videoType: 'video/mp4'
  },
  {
    id: 2,
    title: '2 - Comprometidos com a Membresia',
    isPending: false,
    videoUri: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/GrupoWhatsApp_1.mp4',
    thumb: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA01.png',
    videoType: 'video/mp4'
  },
  {
    id: 3,
    title: '3 - Comprometidos com a Membresia',
    isPending: true,
    videoUri: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/GrupoWhatsApp_1.mp4',
    thumb: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA02.png',
    videoType: 'video/mp4'
  },
  {
    id: 4,
    title: '4 - Comprometidos com a Membresia',
    isPending: false,
    videoUri: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/GrupoWhatsApp_1.mp4',
    thumb: 'https://redeinspire.com/img/thumb2022.jpg',
    videoType: 'video/mp4'
  },
  {
    id: 5,
    title: '5 - Comprometidos com a Membresia',
    isPending: true,
    videoUri: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/GrupoWhatsApp_1.mp4',
    thumb: 'https://i.ytimg.com/vi/jnWSSjUQXU8/maxresdefault.jpg',
    videoType: 'video/mp4'
  },
  {
    id: 6,
    title: '4 - Comprometidos com a Membresia',
    isPending: false,
    videoUri: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/GrupoWhatsApp_1.mp4',
    thumb: 'https://i.ytimg.com/vi/5doA18s_2f0/maxresdefault.jpg',
    videoType: 'video/mp4'
  },
  {
    id: 7,
    title: '5 - Comprometidos com a Membresia',
    isPending: true,
    videoUri: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/GrupoWhatsApp_1.mp4',
    thumb: 'https://i.pinimg.com/originals/f9/27/a8/f927a8d6d6017c44e1d2ef8f3d604b51.jpg',
    videoType: 'video/mp4'
  },
]

export function Curso() {
  return (
    <main className="w-full h-full">
      <div className="flex items-center flex-col">
        <Header />
        <div className="flex flex-col gap-10 pb-20 w-full max-w-[1180px] h-full mt-8">
          <div className="flex w-full h-[439px] gap-5">
            <div className="flex w-full h-full relative">
              <Player style={{ width: '100%', height: '100%'  }} >
                <Video poster={listAulas[0].thumb}>
                  <source
                    data-src={listAulas[0].videoUri}
                    type={listAulas[0].videoType}
                  />
                </Video>
                <Ui>
                  <ClickToPlay />
                  <DefaultControls activeDuration={2000} />
                </Ui>
              </Player>
            </div>

            <div className="flex flex-col rounded-md items-stretch gap-3 h-full max-h-[780px] w-full max-w-[380px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-brand-700 scrollbar-track-zinc-900 overflow-y-auto relative">
              <div className="flex flex-col">
                <div className="flex bg-aux-500 fixed w-full max-w-[370px] h-12 grow gap-2 items-center drop-shadow-xl">
                  <Books size={24} />
                  <span className="font-semibold text-2xl">Aulas</span>
                </div>

                <div className="flex flex-col mt-14 max-w-full">
                  {listAulas.map(aula => (
                    <Lesson
                      key={aula.id}
                      title={aula.title}
                      isPending={aula.isPending}
                      thumb={aula.thumb}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-xl">1.0 - Comprometidos com a Membresia</h1>
        </div>
      </div>
    </main>
  )
}
