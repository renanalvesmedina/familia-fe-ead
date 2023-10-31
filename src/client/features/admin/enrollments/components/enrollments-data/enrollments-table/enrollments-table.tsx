import React from 'react'

import { Enrollment } from '@models/enrollment.model'
import { parseDate } from '@utils'

import { EnrollmentsDataProps } from '../enrollments-data'

const EnrollmentsTable: React.FC<EnrollmentsDataProps> = ({
  isLoading,
  enrollments,
  selectedRows,
  setSelectedRows,
}) => {
  const selectAllRef: React.LegacyRef<HTMLInputElement> = React.useRef(null)

  const onRowClick = React.useCallback(
    (row: Enrollment) =>
      selectedRows.some((selectedRow) => selectedRow.id === row.id)
        ? setSelectedRows((old) =>
            old.filter((selectedRow) => selectedRow.id !== row.id)
          )
        : setSelectedRows((old) => [...old, row]),
    [selectedRows, setSelectedRows]
  )

  if (isLoading)
    return (
      <div className="bg-zinc-700/30 animate-pulse h-[60vh] w-full rounded-lg" />
    )

  return (
    <div className="w-full relative overflow-y-auto border h-[60vh] rounded-lg scrollbar-none">
      <table className="table table-auto w-full">
        <thead className="border-b border-zinc-700/10 dark:border-zinc-700/40 border-opacity-50 w-full">
          <tr className="w-full">
            <th className="bg-gray-50 dark:bg-zinc-800 text-gray-500 text-xs tracking-wider sticky top-0 py-6 px-8">
              <input
                ref={selectAllRef}
                type="checkbox"
                checked={selectedRows.length === enrollments?.length}
                onClick={() =>
                  selectAllRef.current?.checked
                    ? setSelectedRows(enrollments!)
                    : setSelectedRows([])
                }
                className="p-2.5 relative appearance-none border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/50 rounded checked:bg-gradient-to-tr checked:from-blue-500 checked:to-blue-700 checked:before:content-['\2713'] checked:before:absolute checked:before:top-[50%] checked:before:-translate-y-[50%] checked:before:left-[50%] checked:before:-translate-x-[50%] checked:before:text-white checked:before:text-lg cursor-pointer"
              />
            </th>
            <th className="bg-gray-50 dark:bg-zinc-800 text-gray-500 text-xs tracking-wider sticky top-0 py-6 px-8">
              Nome
            </th>
            <th className="bg-gray-50 dark:bg-zinc-800 text-gray-500 text-xs tracking-wider sticky top-0 py-6 px-8">
              Curso
            </th>
            <th className="bg-gray-50 dark:bg-zinc-800 text-gray-500 text-xs tracking-wider sticky top-0 py-6 px-8">
              Inscrição
            </th>
            <th className="bg-gray-50 dark:bg-zinc-800 text-sm sticky top-0 py-6 px-8"></th>
          </tr>
        </thead>

        <tbody>
          {enrollments?.map((enrollment) => (
            <tr
              key={enrollment.id}
              className="select-none bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700/20 data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-zinc-700/20 transition-colors cursor-pointer outline-none focus-within:bg-gray-100 dark:focus-within:bg-zinc-700/30"
              data-active={selectedRows.some(
                (selectedRow) => selectedRow.id === enrollment.id
              )}
            >
              <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 font-light text-sm text-gray-500 py-6 px-8">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={() => onRowClick(enrollment)}
                  className="p-2.5 relative appearance-none border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/50 rounded checked:bg-gradient-to-tr checked:from-blue-500 checked:to-blue-700 checked:before:content-['\2713'] checked:before:absolute checked:before:top-[50%] checked:before:-translate-y-[50%] checked:before:left-[50%] checked:before:-translate-x-[50%] checked:before:text-white checked:before:text-lg cursor-pointer"
                  checked={selectedRows.some(
                    (selectedRow) => selectedRow.id === enrollment.id
                  )}
                />
              </td>
              <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 border-opacity-50 py-6 px-8">
                <div className="flex items-center space-x-3">
                  <span>
                    <p className="font-medium text-base text-zinc-800 dark:text-white">
                      {enrollment.fullName}
                    </p>
                    <p className="text-sm text-gray-500 font-light">
                      {enrollment?.email}
                    </p>
                  </span>
                </div>
              </td>
              <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 font-medium text-sm text-gray-500 py-6 px-8 uppercase">
                {enrollment?.courseName}
              </td>
              <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 font-medium text-sm text-gray-500 py-6 px-8">
                {parseDate(enrollment?.subscribeDate)}
              </td>
              <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 py-6 px-8 w-full"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EnrollmentsTable
