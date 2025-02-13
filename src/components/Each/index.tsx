type EachProps<T> = {
  array: T[]
  itemRenderer: (item: T, index?: number) => React.ReactNode
}

export default function Each<T>({ array, itemRenderer }: EachProps<T>) {
  return array.forEach((item, index) => {
    return <>{itemRenderer(item, index)}</>
  })
}
