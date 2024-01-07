import { Redirect } from '../components/redirect'

export const runtime = 'edge'

export default function Home() {
  return (
    <section>
      <h2>Home</h2>
      <Redirect path="/phil/ps2" />
    </section>
  )
}
