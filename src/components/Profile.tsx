import { LogOut } from 'lucide-react'
import Image from 'next/image'

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
        <span className="text-sm font-semibold text-zinc-700">
          Joyce de Fátima
        </span>
        <span className="truncate text-sm text-zinc-500">
          joycefatima999@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
