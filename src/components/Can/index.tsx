import { ChildrenProps } from '@/types'

type CanProps = {
  condition: boolean
  onTrue: ChildrenProps['children']
  onFalse: ChildrenProps['children']
}
export default function Can({ condition, onFalse = <></>, onTrue }: CanProps) {
  return condition ? onTrue : onFalse
}
