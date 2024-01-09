import React from 'react'

import { useQueryClient } from 'react-query'
import { ArrowRight } from 'lucide-react'
import { memoize } from 'lodash'

import { phoneMask, sanitizeSearchTerms } from '@utils'
import { CourseModel } from '@models/CourseModel'
import { Modal } from '@components/modal'
import { Field } from '@components/input'
import { api } from '@services/api'

const unenrollUser = async ({
  courseId,
  userId,
}: {
  userId: string
  courseId: string
}) =>
  api.put('/v1/Enrollment/Unenroll', {
    userId,
    courseId: courseId,
  })

type UserEnrolled = {
  studentId: string
  studentName: string
  phone: string
}

export const commonQueriesOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (error: unknown) => console.error(error),
}

interface StudentsEnrolledCardModalProps {
  courseId?: string
  course?: CourseModel
}

const StudentsEnrolledCardModal: React.FC<StudentsEnrolledCardModalProps> = ({
  courseId,
  course,
}) => {
  const [studentsEnrolledModal, setStudentsEnrolledModal] =
    React.useState(false)

  const queryClient = useQueryClient()

  const [filteredUsers, setFilteredUsers] = React.useState<
    UserEnrolled[] | null
  >(null)

  const [selectedRows, setSelectedRows] = React.useState<UserEnrolled[]>([])

  const selectAllRef: React.LegacyRef<HTMLInputElement> = React.useRef(null)

  const onRowClick = React.useCallback(
    (row: UserEnrolled) =>
      selectedRows.some(
        (selectedRow) => selectedRow.studentId === row.studentId
      )
        ? setSelectedRows((old) =>
            old.filter((selectedRow) => selectedRow.studentId !== row.studentId)
          )
        : setSelectedRows((old) => [...old, row]),
    [selectedRows, setSelectedRows]
  )

  const onUnenrollUser = async (students: { studentId: string }[]) => {
    try {
      for (const student of students) {
        await unenrollUser({ courseId: courseId!, userId: student.studentId })
      }
    } finally {
      queryClient.invalidateQueries(['course', 'admin', courseId])
    }
  }

  const filterUsers = memoize(
    (searchTerms: string, searchData: UserEnrolled[]) =>
      searchData.filter(({ studentName, phone }) =>
        sanitizeSearchTerms(`${studentName} ${phone}`).includes(searchTerms)
      )
  )

  const onFilterUsers = (term: string) => {
    const searchTerms = sanitizeSearchTerms(term)
    const filterUsersBySearch = filterUsers(
      searchTerms,
      course?.studentsCourse!
    )

    if (searchTerms) {
      setFilteredUsers(filterUsersBySearch)
    } else {
      setFilteredUsers(null)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setStudentsEnrolledModal(true)}
        className="bg-white dark:bg-zinc-700/20 shadow-lg rounded-lg p-6 gap-4 flex items-center justify-between"
      >
        <div className="flex flex-col items-start space-y-2">
          <p className="text-zinc-500 text-sm">Alunos matriculados</p>
          <p className="text-4xl text-white font-semibold">
            {course?.studentsCourse.length}
          </p>
        </div>

        <div className="text-zinc-700">
          <ArrowRight />
        </div>
      </button>

      <Modal
        isVisible={studentsEnrolledModal}
        onClose={() => {
          setStudentsEnrolledModal(false)
          setFilteredUsers(null)
        }}
      >
        <div className="p-6 space-y-6 pb-24">
          <p className="font-semibold text-xl text-white">
            Alunos matriculados
          </p>

          <div className="flex items-center justify-between mb-6 gap-4">
            <Field
              name="searchUsers"
              variant="filled"
              placeholder="Pesquisar..."
              className="py-4"
              containerClassName="w-full"
              onChange={(e) => onFilterUsers(e as never as string)}
            />
          </div>

          <div className="grid gap-6 pr-2 overflow-auto max-h-[50vh] scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-700/50 scrollbar-track-rounded-lg scrollbar-track-zinc-700/30">
            {(filteredUsers || course?.studentsCourse)
              ?.sort((a, b) =>
                a.studentName < b.studentName
                  ? -1
                  : a.studentName > b.studentName
                  ? 1
                  : 0
              )
              .map((student) => (
                <div
                  key={student.studentId}
                  className="bg-zinc-700/20 p-4 rounded-lg flex items-center gap-4"
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onClick={() => onRowClick(student)}
                    className="p-2.5 relative appearance-none border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/50 rounded checked:bg-gradient-to-tr checked:from-blue-500 checked:to-blue-700 checked:before:content-['\2713'] checked:before:absolute checked:before:top-[50%] checked:before:-translate-y-[50%] checked:before:left-[50%] checked:before:-translate-x-[50%] checked:before:text-white checked:before:text-lg cursor-pointer"
                    checked={selectedRows.some(
                      (selectedRow) =>
                        selectedRow.studentId === student.studentId
                    )}
                  />

                  <div>
                    <p className="font-medium">{student.studentName}</p>
                    <p className="text-sm text-zinc-500">
                      {phoneMask(student.phone)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex max-md:flex-col px-10 py-6 gap-4 absolute bottom-0 left-0 right-0 bg-zinc-800 rounded-lg">
          <label
            htmlFor="checkbox-select-all-enrollments"
            className="flex justify-center gap-4 w-full cursor-pointer text-white bg-zinc-700/40 font-medium rounded-lg text-sm px-6 py-4 text-center hover:bg-zinc-700/90 active:bg-zinc-700/90 transition whitespace-nowrap"
          >
            <input
              id="checkbox-select-all-enrollments"
              ref={selectAllRef}
              type="checkbox"
              checked={selectedRows.length === course?.studentsCourse?.length}
              onClick={() =>
                selectAllRef.current?.checked
                  ? setSelectedRows(course?.studentsCourse!)
                  : setSelectedRows([])
              }
              className="p-2.5 relative appearance-none border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/50 rounded checked:bg-gradient-to-tr checked:from-blue-500 checked:to-blue-700 checked:before:content-['\2713'] checked:before:absolute checked:before:top-[50%] checked:before:-translate-y-[50%] checked:before:left-[50%] checked:before:-translate-x-[50%] checked:before:text-white checked:before:text-lg cursor-pointer"
            />
            Selecionar tudo
          </label>

          <button
            type="button"
            onClick={() => onUnenrollUser(selectedRows)}
            disabled={!selectedRows.length}
            className="bg-red-700 disabled:bg-zinc-700/20 disabled:cursor-not-allowed disabled:text-zinc-700 p-4 rounded-lg w-full text-white font-medium"
          >
            {selectedRows.length === 0 || selectedRows.length > 1
              ? `Desmatricular ${selectedRows.length} alunos`
              : `Desmatricular ${selectedRows.length} aluno`}
          </button>
        </div>
        {/* <Link
            href={`/admin/courses/${courseId}/enrollments`}
            className="bg-indigo-700 p-4 rounded-lg w-full text-white font-medium flex items-center justify-center"
          >
            Nova matrícula
          </Link> */}
      </Modal>
    </>
  )
}

export default StudentsEnrolledCardModal
