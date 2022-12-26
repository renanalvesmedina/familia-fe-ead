import { ListCards } from '../components/ListCards'
import { Header } from '../components/Header'

const Cursos = [
  {
    id: 1,
    title: 'Seus Cursos',
    Cards: [
      {
        id: 1,
        route: '/curso',
        image: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA01.png',
      },
      {
        id: 2,
        route: '/curso',
        image: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA02.png',
      },
      {
        id: 3,
        route: '/curso',
        image: 'https://luminifirekeeper01.blob.core.windows.net/familiaead/CAPA03.png',
      }
    ]
  },
  {
    id: 2,
    title: 'Lançamentos',
    Cards: [
      {
        id: 4,
        route: '/curso',
        image: 'https://redeinspire.com/img/thumb2022.jpg',
      },
      {
        id: 5,
        route: '/curso',
        image: 'https://i.ytimg.com/vi/jnWSSjUQXU8/maxresdefault.jpg',
      },
      {
        id: 6,
        route: '/curso',
        image: 'https://img.freepik.com/psd-gratuitas/modelo-de-logotipo-3d-da-copa-do-mundo-do-brasil_220664-3637.jpg?w=2000',
      }
    ]
  },
  {
    id: 3,
    title: 'Recomendados',
    Cards: [
      {
        id: 7,
        route: '/curso',
        image: 'https://i.ytimg.com/vi/5doA18s_2f0/maxresdefault.jpg',
      },
      {
        id: 8,
        route: '/curso',
        image: 'https://i.pinimg.com/originals/f9/27/a8/f927a8d6d6017c44e1d2ef8f3d604b51.jpg',
      },
      {
        id: 9,
        route: '/curso',
        image: 'https://i.ytimg.com/vi/HXmTSJjD7LA/maxresdefault.jpg',
      }
    ]
  }
]

export function PainelAluno() {
  return (
    <main className="w-full h-full">
      <div className="flex items-center flex-col">
        <Header />
        <div className="flex flex-col justify-center items-center gap-20 pb-60 w-full md:max-w-[1180px] mt-8">
          {Cursos.map(item => (
            <ListCards key={item.id} cardData={item.Cards} title={item.title} />
          ))}
        </div>
      </div>
    </main>
  )
}
