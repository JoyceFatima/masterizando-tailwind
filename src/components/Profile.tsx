import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from './Button'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/JoyceFSantoAntonio.png"
        className="h-10 w-10 rounded-full"
        alt="Joyce F. Santo Antônio"
        width={40}
        height={40}
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Joyce de Fátima
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          joycefatima999@gmail.com
        </span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
