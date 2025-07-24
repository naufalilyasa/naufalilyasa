import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/projects/$id/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/projects/$id/edit"!</div>
}
