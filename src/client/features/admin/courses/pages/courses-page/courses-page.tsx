import React from 'react'

import { useRouter } from 'next/router'
import { Plus } from 'lucide-react'

import { AdminLayout } from '@layouts/admin-layout'

import { CouseAdminCard } from '../../components'
import { Accordion } from '@core/accordion'

const courses = [
  {
    courseId: '729a3081-ad8c-4e5a-9cb0-4ca3a51a6efc',
    courseName: 'Comprometidos com a Membresia',
    cardUri:
      'https://luminifirekeeper01.blob.core.windows.net/familiaead/cardmembresia.png',
  },
  {
    courseId: '729a3081-ad8c-4e5a-9cb0-4ca3a51a6efd',
    courseName: 'Comprometidos com a maturidade',
    cardUri:
      'https://luminifirekeeper01.blob.core.windows.net/familiaead/cardmembresia.png',
  },
]

const CoursesPage: React.FC = () => {
  const { push } = useRouter()

  return (
    <AdminLayout>
      <span className="flex items-center justify-between">
        <p className="text-2xl font-medium text-zinc-800 dark:text-white sticky top-0 pt-10 pb-6 bg-white dark:bg-zinc-900 z-40">
          Gestão de cursos
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => push('/admin/users/create')}
            className="flex justify-center gap-1 text-zinc-800 bg-brand-700 font-medium rounded-lg text-sm p-4 text-center hover:bg-brand-700/90 active:bg-brand-700/90 transition"
          >
            <Plus size={20} />
            <span className="max-lg:hidden">Novo curso</span>
          </button>
        </div>
      </span>

      <div className="flex w-full h-[60vh]">
        <Accordion
          items={courses.map((course) => ({
            trigger: <CouseAdminCard.Trigger {...course} />,
            content: <CouseAdminCard.Content {...course} />,
          }))}
        />
      </div>
    </AdminLayout>
  )
}

export default CoursesPage
