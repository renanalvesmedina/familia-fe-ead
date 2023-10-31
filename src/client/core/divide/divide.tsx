import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface DivideProps {
  id?: string
  as?: React.FC<any>
  className?: string
  dividerClassName?: string
  skipIndexes?: number[]
  children?: React.ReactNode
}

export const DivideY: React.FC<DivideProps> = ({
  as,
  children,
  className,
  dividerClassName,
  skipIndexes = [],
}) => {
  const kids = React.useMemo(
    () =>
      (Array.isArray(children) ? children : [children]).filter(Boolean).flat(),
    [children]
  )

  const Wrapper = React.useMemo(
    () =>
      as
        ? as
        : ({ children }: any) => <div className={className}>{children}</div>,
    [as, className]
  )

  return (
    <Wrapper>
      {kids.map((node, index) => (
        <React.Fragment key={index}>
          {index > 0 && !skipIndexes.includes(index) && (
            <hr
              className={twMerge(
                'border-light-gray-200 my-10',
                dividerClassName
              )}
            />
          )}
          {skipIndexes.includes(index) && <div className="mb-4" />}
          {node}
        </React.Fragment>
      ))}
    </Wrapper>
  )
}

export const Divide: React.FC<DivideProps> = ({
  as,
  children,
  className,
  dividerClassName,
  skipIndexes = [],
}) => {
  const kids = React.useMemo(
    () =>
      (Array.isArray(children) ? children : [children]).filter(Boolean).flat(),
    [children]
  )

  const Wrapper = React.useMemo(
    () =>
      as
        ? as
        : ({ children }: any) => <div className={className}>{children}</div>,
    [as, className]
  )

  return (
    <Wrapper>
      {kids.map((node, index) => (
        <React.Fragment key={index}>
          {index > 0 && !skipIndexes.includes(index) && (
            <div
              className={twMerge(
                'my-2 ml-3.5 h-28 w-[1px] bg-gray-800',
                dividerClassName
              )}
            />
          )}
          {skipIndexes.includes(index) && <div className="mb-4" />}
          {node}
        </React.Fragment>
      ))}
    </Wrapper>
  )
}

export const DivideLine: React.FC<DivideProps> = ({ dividerClassName, id }) => {
  return (
    <hr
      id={id}
      className={twMerge('border-growup-border my-10', dividerClassName)}
    />
  )
}
