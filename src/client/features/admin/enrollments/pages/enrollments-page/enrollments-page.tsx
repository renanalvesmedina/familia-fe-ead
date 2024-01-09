import React from 'react'

import { Plus, RefreshCw } from 'lucide-react'
import { useQuery } from 'react-query'

import { TIKETO_BASE_URL } from '@config'
import { AdminLayout } from '@layouts/admin-layout'
import { Enrollment } from '@models/enrollment.model'
import { Accordion } from '@core/accordion'

import { EnrollmentCard } from '../../components/enrollment-card'
import { Loader } from '@core/loader'

export type EnrollmentResponse = {
  current_page: number
  data: Enrollment[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: {
    url: string
    label: string
    active: boolean
  }[]
  next_page_url: string
  path: string
  per_page: string
  prev_page_url: string
  to: number
  total: number
}

const EnrollmentsPage: React.FC = () => {
  const [selectedRows, setSelectedRows] = React.useState<Enrollment[]>([])
  // const { push } = useRouter()

  const {
    data: enrollments,
    isRefetching,
    isFetching,
    isLoading,
    refetch,
  } = useQuery<EnrollmentResponse>(
    ['enrollments'],
    () =>
      fetch(
        `${TIKETO_BASE_URL}/integracao/participantes?per_page=20&page_now=1&situacao=confirmado`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer 1a6125ce97c537f26d6447a43e23163d',
            // Authorization: `Bearer 7f5d002428a6751bab1597d58eb783ed`,
          },
        }
      ).then((response) => response.json()),
    {
      staleTime: 1000 * 60 * 1, // 1 minutes
      onError: (error) => console.log(error),
      // toast.error(error.response.data.errors[0].message),
    }
  )

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

  return (
    <AdminLayout>
      <div className="flex flex-col justify-between sticky top-0 pt-10 pb-6 bg-white dark:bg-zinc-900 z-40 gap-4">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex gap-2">
            <div>
              <p className="text-2xl font-medium text-zinc-800 dark:text-white">
                Comprometidos com a membresia
              </p>
              <p>Novas matrículas</p>
            </div>

            {isLoading || isRefetching || isFetching ? (
              <Loader className="text-brand-600" />
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label
              htmlFor="checkbox-select-all-enrollments"
              className="flex justify-center gap-4 cursor-pointer text-white bg-zinc-700/40 font-medium rounded-lg text-sm w-fit px-6 py-4 text-center hover:bg-zinc-700/90 active:bg-zinc-700/90 transition"
            >
              <input
                id="checkbox-select-all-enrollments"
                ref={selectAllRef}
                type="checkbox"
                checked={selectedRows.length === enrollments?.data.length}
                onClick={() =>
                  selectAllRef.current?.checked
                    ? setSelectedRows(enrollments?.data!)
                    : setSelectedRows([])
                }
                className="p-2.5 relative appearance-none border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700/50 rounded checked:bg-gradient-to-tr checked:from-blue-500 checked:to-blue-700 checked:before:content-['\2713'] checked:before:absolute checked:before:top-[50%] checked:before:-translate-y-[50%] checked:before:left-[50%] checked:before:-translate-x-[50%] checked:before:text-white checked:before:text-lg cursor-pointer"
              />
              Selecionar tudo
            </label>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => refetch()}
              className="flex justify-center gap-1 text-white bg-zinc-700 font-medium rounded-lg text-sm p-4 text-center hover:bg-zinc-700/90 active:bg-zinc-700/90 transition"
            >
              <RefreshCw size={20} />
              <span className="max-lg:hidden">Refresh</span>
            </button>

            <button
              // onClick={() => push('/admin/users/create')}
              disabled={!selectedRows.length}
              className="flex justify-center gap-1 text-zinc-800 bg-brand-700 font-medium rounded-lg text-sm p-4 text-center hover:bg-brand-700/90 active:bg-brand-700/90 transition disabled:bg-zinc-800 disabled:text-gray-400/40 disabled:cursor-not-allowed disabled:hover:bg-zinc-700/30"
            >
              <Plus size={20} />
              <span className="max-lg:hidden">
                {selectedRows.length > 1
                  ? 'Matricular alunos'
                  : 'Matricular aluno'}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full h-[60vh] overflow-y-auto scrollbar-none">
        {enrollments?.data ? (
          <Accordion
            items={enrollments?.data.map((enrollment) => ({
              trigger: (
                <EnrollmentCard.Trigger
                  {...enrollment}
                  selectedRows={selectedRows}
                  onRowClick={onRowClick}
                />
              ),
              content: <EnrollmentCard.Content {...enrollment} />,
            }))}
          />
        ) : null}
      </div>
    </AdminLayout>
  )
}

export default EnrollmentsPage
