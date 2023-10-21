import { usePasswordInput } from './password.hook'
import { Eye, EyeOff } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import FieldInput, { FieldInputProps } from '../field'
import React from 'react'

const eye = {
  true: <Eye className="h-6 w-6 text-gray-400" />,
  false: <EyeOff className="h-6 w-6 text-gray-400" />,
}

const PasswordInput: React.FC<FieldInputProps<'input'>> = ({
  inputWrapperClassName,
  className,
  disabled,
  value,
  label,
  name,
  ...props
}) => {
  const { hidden, toggleHidden } = usePasswordInput()

  return (
    <FieldInput
      type={hidden ? 'password' : 'text'}
      name={name}
      value={value}
      label={label}
      placeholder="••••••••••"
      className={twMerge('pr-12', className)}
      inputWrapperClassName={twMerge('relative', inputWrapperClassName)}
      {...props}
    >
      <span
        slot="after"
        className={twMerge('absolute top-[50%] -translate-y-[50%] right-2')}
      >
        <button
          type="button"
          disabled={disabled}
          onClick={toggleHidden}
          className={twMerge(
            'text-light-gray-400 rounded-full p-3 disabled:text-gray-300'
          )}
        >
          {eye[hidden ? 'true' : 'false']}
        </button>
      </span>
    </FieldInput>
  )
}

export default PasswordInput
