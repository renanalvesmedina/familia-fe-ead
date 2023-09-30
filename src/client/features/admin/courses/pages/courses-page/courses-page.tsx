import React from 'react'

import { ArrowsClockwise, Plus } from 'phosphor-react'
import { useRouter } from 'next/router'
import { AdminLayout } from '@layouts/admin-layout'

const CoursesPage: React.FC = () => {
  const { push } = useRouter()

  return (
    <AdminLayout>
      <span className="flex items-center justify-between">
        <p className="text-2xl font-medium text-white sticky top-0 pt-10 pb-6 bg-zinc-900 z-40">
          Gestão de cursos
        </p>

        <div className="flex items-center gap-2">
          <button className="flex justify-center gap-1 text-white bg-zinc-700/50 font-medium rounded-lg text-sm px-4 py-2 text-center shadow hover:bg-zinc-700 active:bg-zinc-700 transition">
            <ArrowsClockwise size={20} />
            <span className="max-md:hidden">Refresh</span>
          </button>

          <button
            onClick={() => push('/admin/courses/create')}
            className="flex justify-center gap-1 text-white bg-indigo-700/60 font-medium rounded-lg text-sm px-4 py-2 text-center shadow hover:bg-indigo-700 active:bg-indigo-700 transition"
          >
            <Plus size={20} />
            <span className="max-md:hidden">Novo curso</span>
          </button>
        </div>
      </span>

      <div className="flex w-full h-[60vh] rounded-lg px-6 py-8 bg-zinc-800">
        {/* {children} */}
      </div>
    </AdminLayout>
  )
}

export default CoursesPage
