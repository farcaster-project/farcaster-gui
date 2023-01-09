import { Doing } from './Doing'
import { Done } from './Done'
import { Todo } from './Todo'

export type Status = 'todo' | 'doing' | boolean

export function StatusBadge({ status = 'todo' }: { status?: Status }) {
  if (status === 'todo') return <Todo />
  if (status === 'doing') return <Doing />
  return <Done success={status} />
}
