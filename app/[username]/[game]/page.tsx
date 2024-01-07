import { Redirect } from '../../../components/redirect'

export const runtime = 'edge'

export default function GamePage({ params }: { params: { game: string } }) {
  return (
    <div>
      <h2>{params.game} Games</h2>
      {params.game === 'ps3' ? (
        <Redirect path="/phil/ps2" />
      ) : (
        <Redirect path="/phil/ps3" />
      )}
      <div>☝️ This button causes an mpaNavigation on Edge runetime when a server action calls <pre style={{ display: 'inline' }}>redirect()</pre></div>
      <div>Seems to only occur when redirecting up a level back to a dynamic route</div>
      <div style={{ margin: '0 20px' }}></div>
      <Redirect path="/phil" />
    </div>
  )
}
