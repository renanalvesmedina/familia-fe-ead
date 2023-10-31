import React from 'react'

import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import * as AccordionRadix from '@radix-ui/react-accordion'

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionRadix.AccordionItemProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionRadix.Item
    className={twMerge(
      'bg-white dark:bg-zinc-800 border border-gray-200 dark:border-transparent overflow-hidden first:mt-0 rounded-lg',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </AccordionRadix.Item>
))

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionRadix.AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionRadix.Header className="flex">
    <AccordionRadix.Trigger
      className={twMerge(
        'text-zinc-800 dark:text-white bg-white hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700/20 group flex flex-1 cursor-pointer items-center justify-between px-6 py-6 gap-4 leading-none outline-none transition-colors',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}

      <ChevronDown
        className="text-gray-600 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
        size={24}
      />
    </AccordionRadix.Trigger>
  </AccordionRadix.Header>
))

AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionRadix.AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionRadix.Content
    className={twMerge(
      'text-gray-400 bg-gray-50 dark:bg-zinc-700/20 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-6 py-6">{children}</div>
  </AccordionRadix.Content>
))

AccordionContent.displayName = 'AccordionContent'

interface AccordionProps {
  defaultValue?: string
  items: { trigger: React.ReactNode; content: React.ReactNode }[]
}

const Accordion: React.FC<AccordionProps> = ({ defaultValue, items }) => (
  <AccordionRadix.Root
    className="h-fit w-full rounded-lg space-y-4"
    defaultValue={defaultValue}
    collapsible
    type="single"
  >
    {items.map((item, index) => (
      <AccordionItem key={index} value={`item-${index}`}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>

        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </AccordionRadix.Root>
)

export default Accordion
