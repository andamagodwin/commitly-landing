const features = [
  { title: 'Daily Commit Reminders', desc: 'Never miss a day — get scheduled prompts to commit.' },
  { title: 'Streak Tracker', desc: 'Build and maintain streaks with visual progress.' },
  { title: 'Progress Analytics', desc: 'See your weekly and monthly contribution trends.' },
  { title: 'GitHub Integration', desc: 'Connect securely with GitHub to import commits.' },
]

export default function Features() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Features</h2>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white">{f.title}</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
