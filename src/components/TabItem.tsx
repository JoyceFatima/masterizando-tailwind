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
      className={`relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-500 data-[state=active]:text-violet-700`}
    >
      <span>{name}</span>

      {active && (
        <motion.div
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
          layoutId="underline"
        />
      )}
    </Tabs.Trigger>
  )
}
