import React from 'react'

import * as TooltipRadix from '@radix-ui/react-tooltip'

interface TooltipProps extends React.PropsWithChildren {
  value: string
  side?: 'left' | 'right' | 'top' | 'bottom'
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  side = 'bottom',
  value,
}) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            side={side}
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white dark:bg-aux-400 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50"
            sideOffset={10}
          >
            {value}
            <TooltipRadix.Arrow className="fill-white" />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

export default Tooltip
