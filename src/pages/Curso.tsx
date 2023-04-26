import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import ReactPlayer from 'react-player/youtube'
import { Books } from "phosphor-react";
import { Lesson } from '../components/Lesson';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';
import { useParams } from 'react-router-dom';
import { ActiveClassModel } from '../models/ActiveClassModel';
import { api } from '../services/api';
import { ClassModel } from '../models/ClassModel';
import { CourseModel } from '../models/CourseModel';
import { Loading } from '../components/Loading';

export function Curso() {
  let { courseId, aulaId } = useParams();

  const [inLoading, setInLoading] = useState(true);
  const [aulas, setAulas] = useState<ClassModel[]>([]);
  const [curso, setCurso] = useState<CourseModel>();
  const [activeClass, setActiveClass] = useState<ActiveClassModel>();

  useEffect(() => {
    // Get all classes of course
    api.get(`/v1/Me/classes?courseId=${courseId}`).then((response) => {
      setAulas(response.data);
    });

    // Get course details
    api.get(`/v1/Course/details?courseId=${courseId}`).then((response) => {
      setCurso(response.data);
    });

    handleActiveClass(aulaId);
  }, []);

  async function handleActiveClass(classId?: string) {
    
    api.get(`/v1/Class/details?classId=${classId}`).then((res) => {
      
      var activeClass = { 
        classId: classId, 
        className: res.data.className, 
        orderId: res.data.orderId, 
        description: res.data.description, 
        video: res.data.video 
      };

      setActiveClass(activeClass);
      setInLoading(false);
    });
  }

  async function handleRegisterHistory(classId?: string, courseId?: string) {
    await api.post(`v1/Me/history/register`, {classId, courseId});
  }

  return (
    <main className="w-full h-full bg-zinc-900">
      <div className="flex items-center flex-col">
        <Header />
        { activeClass && (
          <>
            <div className="flex flex-col gap-10 px-4 w-full md:max-w-[1180px] h-full mt-8">
              <div className="flex w-full h-full flex-wrap md:h-[439px] md:flex-nowrap gap-5">
                <div className="flex flex-col w-full h-full relative">
                  <h1 className="text-xl text-white mb-6">{activeClass.orderId + ' - ' + activeClass.className}</h1>
                  <div className="player-wrapper">
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${activeClass.video}`}
                      className="react-player"
                      playing={false}
                      width="100%"
                      height="100%"
                      controls={true}
                      onEnded={() => handleRegisterHistory(activeClass.classId, courseId)}
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full h-fit mt-6 gap-4">
                      <p className="text-sm text-white font-light">{activeClass.description}</p>

                      <Separator.Root className="w-full h-[1px] bg-[#2E3A42]"/>

                      <p className="text-sm text-gray-200 font-thin">
                        Se tiver qualquer dúvida, lembre-se que a estamos aqui para ajudar! Ou entre em contato com o nosso suporte pelo email <a href='mailto:suporte@igrejafamilia.net' className="text-brand-500">suporte@igrejafamilia.net ✉️</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col rounded-md items-stretch gap-3 h-full max-h-[780px] w-full max-w-[380px] relative">
                  <div className="flex">
                    <div className="flex grow items-center gap-2 ">
                      <Books size={24} className="text-white" />
                      <span className="font-medium text-2xl text-white">Aulas</span>
                    </div>
                  </div>
                  <ScrollArea.Root className="w-full h-full overflow-hidden">
                    <ScrollArea.Viewport className="w-full h-full overflow-scroll">
                      {aulas.map(aula => (
                        <Lesson
                          key={aula.classId}
                          title={aula.orderId + ' - ' + aula.className}
                          isPending={aula.isPending}
                          thumb={aula.thumb}
                          handleClick={() => handleActiveClass(aula.classId)}
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
                      <img src={curso?.courseCardUri} width={60} className="rounded-full aspect-square" alt="" />
                      <div className="flex flex-col gap-1">
                        <h1 className="text-sm text-white font-medium">{curso?.courseName}</h1>
                        <span className="text-xs font-thin text-zinc-400">Carga Horária: {curso?.workload} Aulas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        { inLoading && <div className="flex items-center justify-center"><Loading /></div> }  

      </div>
    </main>
  )
}
