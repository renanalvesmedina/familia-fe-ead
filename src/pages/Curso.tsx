import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Ui, Player, DefaultControls, ClickToPlay, Youtube } from '@vime/react'
import '@vime/core/themes/default.css';
import { Books } from "phosphor-react";
import { Lesson } from '../components/Lesson';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';
import { useParams } from 'react-router-dom';
import { ActiveClassModel } from '../models/ActiveClassModel';
import { api } from '../services/api';
import { ClassModel } from '../models/ClassModel';

export function Curso() {
  let { courseId, aulaId } = useParams();

  const [aulas, setAulas] = useState<ClassModel[]>([]);
  const [activeClass, setActiveClass] = useState<ActiveClassModel>(new ActiveClassModel());

  useEffect(() => {
    var _aula = new ActiveClassModel()

    // Get all classes of course
    api.get(`/v1/Me/classes?courseId=${courseId}`).then((response) => {
      setAulas(response.data);
    });

    _aula.aulaId = '08de4df2-96cf-4e4d-9d43-66e7f5b6a4bb';
    _aula.titulo = '1.0 - Como ser uma membro da familia',
    _aula.descricao = 'Descrição sobre a aula: Lorem Ipsum et lorem Ipsum et orem Ipsum et'
    _aula.thumb = 'https://i.pinimg.com/originals/f9/27/a8/f927a8d6d6017c44e1d2ef8f3d604b51.jpg';
    _aula.video = '3vHuKVcBMYM';
    _aula.videoType = 'video/mp4';

    setActiveClass(_aula);
  }, []);

  async function handleActiveClass(aulaId: string) {
    
  }

  return (
    <main className="w-full h-full">
      <div className="flex items-center flex-col">
        <Header />
        <div className="flex flex-col gap-10 w-full md:max-w-[1180px] h-full mt-8">
          <div className="flex w-full flex-wrap md:h-[439px] md:flex-nowrap gap-5">
            <div className="flex flex-col w-full h-full relative">
              <h1 className="text-xl mb-6">{activeClass.titulo}</h1>
              <Player>
                <Youtube videoId={activeClass.video} />
                <Ui>
                  <ClickToPlay />
                  <DefaultControls activeDuration={2000} />
                </Ui>
              </Player>

              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full h-fit mt-6 gap-4">
                  <p className="text-sm font-light">{activeClass.descricao}</p>

                  <Separator.Root className="w-full h-[1px] bg-[#2E3A42]"/>

                  <p className="text-sm font-thin">
                    Se tiver qualquer dúvida, lembre-se que a estamos aqui para ajudar! Ou entre em contato com o nosso suporte pelo email <a href='mailto:suporte@igrejafamilia.net' className="text-brand-500">suporte@igrejafamilia.net ✉️</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md items-stretch gap-3 h-full max-h-[780px] w-full max-w-[380px] relative">
              <div className="flex">
                <div className="flex grow items-center gap-2 ">
                  <Books size={24} />
                  <span className="font-medium text-2xl text-white">Aulas</span>
                </div>
              </div>
              <ScrollArea.Root className="w-full h-full overflow-hidden">
                <ScrollArea.Viewport className="w-full h-full overflow-scroll">
                  {aulas.map(aula => (
                    <Lesson
                      key={aula.classId}
                      title={aula.className}
                      isPending={aula.isPending}
                      thumb={aula.thumb}
                    />
                  ))}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="flex w-[6px] select-none rounded-full p-[2px] bg-zinc-900/30" orientation='vertical'>
                  <ScrollArea.Thumb className="flex flex-1 bg-brand-500 rounded-full before:absolute min-w-[2px] min-h-[2px]" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </div>
          </div>
        </div>

        <div className="flex h-full p-2 w-full max-w-[1180px]">
          <div className="flex justify-center md:justify-end flex-wrap md:flex-nowrap w-full h-full gap-5">
            <div className="w-full max-w-[380px] h-full mt-10 rounded bg-zinc-800">
              <div className="w-full h-full p-5">
                <div className="flex w-full items-center gap-4">
                  <img src="https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA01.png" width={55} className="rounded-full aspect-square" alt="" />
                  <div className="flex flex-col gap-1">
                    <a href="" className="text-sm font-medium">Comprometidos com a Membresia</a>
                    <span className="text-xs font-thin text-zinc-400">4 de 10 aulas concluídas</span>
                  </div>
                </div>
                
                <Separator.Root className="my-7 w-full h-[1px] bg-[#2E3A42]"/>
                
                <div className="flex items-center w-full">
                  <button className="bg-brand-500 p-2 rounded w-full text-zinc-900">Baixar Materiais</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
