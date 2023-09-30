export const clickByKey = (
  event: React.KeyboardEvent<HTMLDivElement>,
  onClick: (event: React.KeyboardEvent<HTMLDivElement>) => void,
  keysForClick = [' ', 'Enter']
) => {
  const keyName = event.key
  if (onClick && keysForClick.indexOf(keyName) >= 0) {
    onClick(event)
  }
}

export const calculateProgressPercentage = (completed: number, total: number) =>
  Math.ceil((completed / total) * 100)
