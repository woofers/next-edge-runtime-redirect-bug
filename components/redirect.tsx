import { redirect } from 'next/navigation'

export const Redirect: React.FC<{ path: string }> = ({ path }) => {
  async function action() {
    'use server'
    // Some server action
    // that mutates data

    // Now we need to redirect to a new path
    redirect(path)
  }
  return (
    <form action={action}>
      <button type="submit">{path}</button>
    </form>
  )
}
