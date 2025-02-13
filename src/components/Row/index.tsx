import { ChildrenProps } from '@/types'

export default function Row({ children }: ChildrenProps) {
  return <div className="flex flex-row">{children}</div>
}
