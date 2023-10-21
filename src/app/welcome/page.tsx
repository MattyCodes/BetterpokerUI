import Card from '@/components/card.jsx';

export default function Welcome() {
  return (
    <main className="text-center p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">
        🃏 Welcome to Betterpoker 🃏
      </h1>

      <Card className="mt-3 w-11/12 max-w-3xl p-8 text-lg">
        <p className="mb-4">
          This here's a no-nonsense solution for all your story-pointing needs.
          Well, maybe not <i>all</i> your story-pointing needs, but it'll do.
        </p>

        <p>
          No need to sign up, ya screw-heads - just jump in a room to get started!
        </p>

        <button className="transform block bg-primary font-semibold rounded w-8/12 mx-auto mt-6 p-3.5 transition duration-500 hover:bg-secondary">
          Start Room
        </button>
      </Card>
    </main>
  )
}
