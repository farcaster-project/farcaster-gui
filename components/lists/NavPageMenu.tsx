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
    <div className="flex space-x-4 items-center">
      <div>Pages</div>
      <ul className="flex space-x-2 items-center block">
        {Array.from(Array(pages).keys()).map((_, page) => (
          <li key={page}>
            <Button active={current === page} onClick={() => pageSet(page)}>
              {page + 1}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
