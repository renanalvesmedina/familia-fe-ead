import React from 'react'

import { ArrowRight } from 'lucide-react'
import { useQuery } from 'react-query'

import { CourseModel } from '@models/CourseModel'
import { ClassModel } from '@models/ClassModel'
import { LessonCard } from '@features/course'
import { Modal } from '@components/modal'
import { api } from '@services/api'

export const getClasses = async (courseId?: string) =>
  api
    .get<ClassModel[]>(`/v1/Me/classes?courseId=${courseId}`)
    .then((response) => response.data)

export const commonQueriesOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (error: unknown) => console.error(error),
}

interface LessonsCardModalProps {
  courseId?: string
  course?: CourseModel
}

const LessonsCardModal: React.FC<LessonsCardModalProps> = ({
  courseId,
  course,
}) => {
  const [lessonsModal, setLessonsModal] = React.useState(false)

  const { data: aulas } = useQuery(
    ['classes', 'admin-list', courseId],
    () => getClasses(courseId),
    commonQueriesOptions
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setLessonsModal(true)}
        className="bg-white dark:bg-zinc-700/20 shadow-lg rounded-lg p-6 gap-4 flex items-center justify-between"
      >
        <div className="flex flex-col items-start space-y-2">
          <p className="text-zinc-500 text-sm">Total de aulas</p>
          <p className="text-4xl text-white font-semibold">
            {course?.workload}
          </p>
        </div>

        <div className="text-zinc-700">
          <ArrowRight />
        </div>
      </button>

      <Modal isVisible={lessonsModal} onClose={() => setLessonsModal(false)}>
        <div className="p-6 space-y-6 pb-24">
          <p className="font-semibold text-xl text-white">Aulas</p>
          <div className="grid grid-cols-1 gap-6 max-h-[50vh] overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-700/50 scrollbar-track-rounded-lg scrollbar-track-zinc-700/30">
            {aulas?.map((aula) => (
              <LessonCard
                key={aula.classId}
                title={aula.orderId + ' - ' + aula.className}
                isPending={aula.isPending}
                thumb={aula.thumb}
                classId={aula.classId}
                href={`/course/${courseId}/class/${aula.classId}`}
              />
            ))}
          </div>
        </div>

        <div className="flex px-10 py-6 gap-4 absolute bottom-0 left-0 right-0 bg-zinc-800 rounded-lg">
          <button className="bg-red-700 p-4 rounded-lg w-full text-white font-medium">
            Editar aulas
          </button>
        </div>
      </Modal>
    </>
  )
}

export default LessonsCardModal
