import React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PaginationItem } from './pagination-item'

export interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePageArray(from: number, to: number) {
  const newArray = [...new Array(to - from)]

  const indexNewArray = newArray.length

  return newArray.map(() => from + indexNewArray).filter((page) => page > 0)
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePageArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <div className="flex flex-row py-8 space-x-2 w-full justify-between items-center">
      <div className="flex flex-row space-x-2">
        <p className="font-bold text-white">
          {currentPage * registersPerPage - registersPerPage + 1}
        </p>
        <p> - </p>
        <p className="font-bold text-white">
          {currentPage === lastPage
            ? totalCountOfRegisters
            : registersPerPage * currentPage}
        </p>
        <p> de </p>
        <p className="font-bold text-white">{totalCountOfRegisters}</p>
      </div>

      <div className="flex flex-row space-x-2">
        {previousPages.length > 0 && (
          <button
            className="disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center rounded-md w-[32px] h-[32px] p-1 text-base font-semibold shadow-md text-slate-500 bg-slate-700 bg-opacity-60 hover:bg-opacity-100"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
        )}

        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />

            {currentPage > 2 + siblingsCount && (
              <p className="text-slate-700 text-3xl leading-4">...</p>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            )
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            )
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <p className="text-slate-700 text-3xl leading-4">...</p>
            )}

            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

        {currentPage !== lastPage && (
          <button
            className="disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center rounded-md w-[32px] h-[32px] p-1 text-base font-semibold shadow-md text-slate-500 bg-slate-700 bg-opacity-60 hover:bg-opacity-100"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === lastPage}
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  )
}
