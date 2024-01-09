import React from 'react'

import { useMutation } from 'react-query'
import { Form } from 'react-final-form'
import { Edit } from 'lucide-react'

import { CourseModel, EditCourseModel } from '@models/CourseModel'
import { Modal } from '@components/modal'
import { api } from '@services/api'

import * as Input from '@components/input'

export const putTiketoApiKey = async (payload?: Partial<EditCourseModel>) =>
  api
    .put<EditCourseModel>('/v1/Course', { ...payload })
    .then((response) => response.data)

interface TicketoApiKeyModalProps {
  courseId?: string
  course?: CourseModel
}

const TicketoApiKeyModal: React.FC<TicketoApiKeyModalProps> = ({
  courseId,
  course,
}) => {
  const [tiketoApiKey, setTiketoApiKey] = React.useState(false)

  const editTiketoApiKeyMutation = useMutation(
    (integrationKey: string) =>
      putTiketoApiKey({
        courseId,
        courseName: course?.courseName,
        cardUri: course?.courseCardUri,
        description: course?.description,
        integrationKey,
        workload: course?.workload,
      }),
    { onError: (error) => console.error(error) }
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setTiketoApiKey(true)}
        className="bg-white dark:bg-zinc-700/20 shadow-lg rounded-lg p-6 gap-4 flex items-center justify-between"
      >
        <div className="flex flex-col items-start space-y-2">
          <p className="text-zinc-500 text-sm">Tiketo API KEY</p>
          <p className="text-xl text-zinc-300">
            {/* {course?.integrationKey} */}
            1a6125ce97c537f26d6447a43e23163d
          </p>
        </div>

        <div className="text-zinc-700">
          <Edit />
        </div>
      </button>

      <Modal isVisible={tiketoApiKey} onClose={() => setTiketoApiKey(false)}>
        <Form
          onSubmit={(values) =>
            editTiketoApiKeyMutation.mutateAsync(values.integrationKey)
          }
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-6 pb-24">
                <p className="font-semibold text-xl text-white">
                  Editar chave de integração com o tiketo
                </p>
                <div className="grid grid-cols-1 gap-6 max-h-[50vh] overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-700/50 scrollbar-track-rounded-lg scrollbar-track-zinc-700/30">
                  <Input.Form.Field
                    name="integrationKey"
                    placeholder="******"
                  />
                </div>
              </div>

              <div className="flex px-10 py-6 gap-4 absolute bottom-0 left-0 right-0 bg-zinc-800 rounded-lg">
                <button
                  type="submit"
                  className="bg-brand-700 p-4 rounded-lg w-full text-zinc-800 font-medium"
                >
                  Salvar chave
                </button>
              </div>
            </form>
          )}
        />
      </Modal>
    </>
  )
}

export default TicketoApiKeyModal
