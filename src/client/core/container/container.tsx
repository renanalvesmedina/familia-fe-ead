import { twMerge } from 'tailwind-merge'

const Container: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...props
}) => (
  <div className={twMerge('max-w-6xl w-full mx-auto', className)} {...props} />
)

export default Container
