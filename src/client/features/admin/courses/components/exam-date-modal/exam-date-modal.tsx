import React from 'react'

import { useMutation } from 'react-query'
import { Form } from 'react-final-form'
import { Edit } from 'lucide-react'

import { CourseModel, EditCourseModel } from '@models/CourseModel'
import { parseDate } from '@utils'
import { Modal } from '@components/modal'
import { api } from '@services/api'

import * as Input from '@components/input'

export const putExamDate = async (payload?: Partial<EditCourseModel>) =>
  api
    .put<EditCourseModel>('/v1/Course', { ...payload })
    .then((response) => response.data)

interface ExamDateModalProps {
  courseId?: string
  course?: CourseModel
}

const ExamDateModal: React.FC<ExamDateModalProps> = ({ courseId, course }) => {
  const [examDate, setExamDate] = React.useState(false)

  const editExamDateMutation = useMutation(
    (examDateString: string) =>
      putExamDate({
        courseId,
        courseName: course?.courseName,
        cardUri: course?.courseCardUri,
        description: course?.description,
        workload: course?.workload,
        // integrationKey: course?.integrationKey,
        integrationKey: '1a6125ce97c537f26d6447a43e23163d',
        examDate: examDateString,
      }),
    { onError: (error) => console.error(error) }
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setExamDate(true)}
        className="bg-white dark:bg-zinc-700/20 shadow-lg rounded-lg p-6 gap-4 flex items-center justify-between"
      >
        <div className="flex flex-col items-start space-y-2">
          <p className="text-zinc-500 text-sm">Data final da prova</p>
          <p className="text-xl text-zinc-300">{parseDate(course?.examDate)}</p>
        </div>

        <div className="text-zinc-700">
          <Edit />
        </div>
      </button>

      <Modal isVisible={examDate} onClose={() => setExamDate(false)}>
        <Form
          onSubmit={(values) =>
            editExamDateMutation.mutateAsync(values.examDateString)
          }
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-6 pb-24">
                <p className="font-semibold text-xl text-white">
                  Editar data final da prova
                </p>
                <div className="grid grid-cols-1 gap-6 max-h-[50vh] overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-700/50 scrollbar-track-rounded-lg scrollbar-track-zinc-700/30">
                  <Input.Form.Field name="examDateString" type="date" />
                </div>
              </div>

              <div className="flex px-10 py-6 gap-4 absolute bottom-0 left-0 right-0 bg-zinc-800 rounded-lg">
                <button
                  type="submit"
                  className="bg-brand-700 p-4 rounded-lg w-full text-zinc-800 font-medium"
                >
                  Salvar data
                </button>
              </div>
            </form>
          )}
        />
      </Modal>
    </>
  )
}

export default ExamDateModal
