import WelcomePageContent from '@/components/WelcomePageContent.tsx';

export default function Welcome() {
  return (
    <main className="text-center p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10 pt-10">
        🃏 Welcome to Betterpoker 🃏
      </h1>

      <WelcomePageContent />
    </main>
  )
}
