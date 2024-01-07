import { Redirect } from '../../components/redirect'

export const runtime = 'edge'

export default function UsernamePage(props: { params: { username: string } }) {
  return (
    <div>
      <h2>{props.params.username}</h2> 
      <Redirect path="/phil/ps2" />
      <Redirect path="/phil/ps3" />
    </div>
  )
}
