import React from 'react'

import { Plus, RefreshCw } from 'lucide-react'

import { AdminLayout } from '@layouts/admin-layout'
import { Enrollment } from '@models/enrollment.model'

import { EnrollmentsData } from '../../components'
import { enrollments } from '../../components/enrollments-data/enrollments.mock'

const EnrollmentsPage: React.FC = () => {
  const [selectedRows, setSelectedRows] = React.useState<Enrollment[]>([])
  // const { push } = useRouter()

  // const {
  //   data: users,
  //   isRefetching,
  //   isFetching,
  //   isLoading,
  //   refetch,
  // } = useQuery(
  //   ['users'],
  //   () => api.get<UsersModel[]>('/v1/User').then((response) => response.data),
  //   {
  //     staleTime: 1000 * 60 * 1, // 1 minutes
  //     onError: (error: any) =>
  //       toast.error(error.response.data.errors[0].message),
  //   }
  // )

  return (
    <AdminLayout>
      <div className="flex items-center justify-between sticky top-0 pt-10 pb-6 bg-white dark:bg-zinc-900 z-40">
        <span className="flex items-center gap-2">
          <p className="text-2xl font-medium text-zinc-800 dark:text-white">
            Novas matrículas
          </p>
          {/* {isLoading || isRefetching || isFetching ? (
            <Loader className="text-brand-600" />
          ) : null} */}
        </span>

        <div className="flex items-center gap-2">
          <button
            // onClick={() => refetch()}
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

      <EnrollmentsData
        enrollments={enrollments}
        isLoading={false}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
    </AdminLayout>
  )
}

export default EnrollmentsPage
