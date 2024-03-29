import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps {
  name: string
  value: string
  active?: boolean
}
export default function TabItem({ name, value, active = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-500 data-[state=active]:text-violet-700  dark:text-zinc-400 dark:data-[state=active]:text-violet-300"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {name}
      </span>

      {active && (
        <motion.div
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
          layoutId="underline"
        />
      )}
    </Tabs.Trigger>
  )
}
