import { ComponentProps } from 'react'

export interface Textarea extends ComponentProps<'textarea'> {}

export function Textarea({ ...props }: Textarea) {
  return (
    <textarea
      id="bio"
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-2 py-2 shadow-sm"
      {...props}
    />
  )
}
