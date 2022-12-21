import { Button } from '../inputs/Button'

export function NavPageMenu({
  pages,
  current,
  pageSet,
}: {
  pages: number
  current: number
  pageSet: (page: number) => void
}) {
  return (
    <ul className="flex space-x-2 items-center">
      {Array.from(Array(pages).keys()).map((_, page) => (
        <li key={page}>
          <Button active={current === page} onClick={() => pageSet(page)}>
            {page + 1}
          </Button>
        </li>
      ))}
    </ul>
  )
}
