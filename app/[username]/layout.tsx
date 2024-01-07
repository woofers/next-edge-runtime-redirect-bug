export default function GameLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <h1>Games</h1>
      {children}
    </main>
  )
}
