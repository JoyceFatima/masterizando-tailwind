'use client'

import { Logo } from '../assets/svg/Logo'
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
  Menu,
} from 'lucide-react'

import NavLink from './NavLink'
import UsedSpaceWidget from './UsedSpaceWidget'
import Profile from './Profile'
import * as Input from './Input'
import * as Collpasible from '@radix-ui/react-collapsible'
import { Button } from './Button'

export default function SideBar() {
  return (
    <Collpasible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80  lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />

        <Collpasible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collpasible.Trigger>
      </div>

      <Collpasible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavLink title="Home" icon={Home} />
          <NavLink title="Dashboard" icon={BarChart} />
          <NavLink title="Projects" icon={SquareStack} />
          <NavLink title="Tasks" icon={CheckSquare} />
          <NavLink title="Reporting" icon={Flag} />
          <NavLink title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavLink title="Support" icon={LifeBuoy} />
            <NavLink title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collpasible.Content>
    </Collpasible.Root>
  )
}
