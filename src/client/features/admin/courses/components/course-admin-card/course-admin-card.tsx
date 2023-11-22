/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import Link from 'next/link'

import { DivideY } from '@core/divide'

interface CouseAdminCardProps {
  courseId: string
  courseName: string
  cardUri: string
}

const Trigger: React.FC<CouseAdminCardProps> = ({
  courseName,
  cardUri,
  courseId,
}) => (
  <div className="flex items-center justify-between gap-4 w-full">
    <div className="flex items-center gap-4">
      <img src={cardUri} alt={courseName} className="h-16 rounded-lg" />
      <div className="flex flex-col items-start space-y-2">
        <p className="text-lg font-semibold">{courseName}</p>
        <span className="text-gray-400">Carga horária: 8 aulas</span>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <Link
        href={`/admin/courses/${courseId}/enrollments`}
        onClick={(e) => e.stopPropagation()}
        className="flex justify-center gap-1 text-white bg-zinc-700 font-medium rounded-lg text-sm p-4 text-center hover:bg-zinc-700/90 active:bg-zinc-700/90 transition"
      >
        Ver novas matrículas
      </Link>

      <Link
        href={`/admin/courses/${courseId}`}
        onClick={(e) => e.stopPropagation()}
        className="flex justify-center gap-1 text-zinc-800 bg-brand-700 font-medium rounded-lg text-sm p-4 text-center hover:bg-brand-700/90 active:bg-brand-700/90 transition"
      >
        Editar curso
      </Link>
    </div>
  </div>
)

const Content: React.FC<CouseAdminCardProps> = () => (
  <DivideY dividerClassName="my-6 border-gray-200 dark:border-zinc-700/40">
    <div className="flex items-center justify-between">
      <p>Aulas</p>

      <p>08</p>
    </div>

    <div className="flex items-center justify-between">
      <p>Alunos matrículados</p>

      <p>29</p>
    </div>

    <div className="flex items-center justify-between">
      <p>Turmas</p>

      <p>02</p>
    </div>
  </DivideY>
)

export default { Trigger, Content }
