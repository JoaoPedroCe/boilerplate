import { ChildrenProps } from '@/types'

export default function Col({ children }: ChildrenProps) {
  return <div className="flex flex-col">{children}</div>
}
