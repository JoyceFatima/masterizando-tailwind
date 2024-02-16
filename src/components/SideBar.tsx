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
} from 'lucide-react'

import NavLink from './NavLink'
import UsedSpaceWidget from './UsedSpaceWidget'
import Profile from './Profile'
import * as Input from './Input'

export default function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

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

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
