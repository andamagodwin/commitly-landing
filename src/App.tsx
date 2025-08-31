
import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-commitly p-6 transition-colors">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-commitly-green rounded flex items-center justify-center text-white font-bold">C</div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Commitly</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Docs</button>
            <ThemeToggle />
            <button className="text-sm px-3 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Sign in</button>
          </div>
        </header>

        <main>
          <Hero />
          <Features />

          <section className="mt-16 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Roadmap — Coming Soon</h3>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Mobile app for on-the-go check-ins</li>
              <li>• Calendar integrations and advanced analytics</li>
              <li>• Team leaderboards and collaboration goals</li>
            </ul>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
