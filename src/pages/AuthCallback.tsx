import { useEffect, useState } from 'react'

export default function AuthCallback() {
  const [deeplink, setDeeplink] = useState<string>('commitly://auth-callback')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const userId = params.get('userId') ?? ''
    const secret = params.get('secret') ?? ''

    const qp = new URLSearchParams()
    if (userId) qp.set('userId', userId)
    if (secret) qp.set('secret', secret)

    const target = `commitly://auth-callback${qp.toString() ? `?${qp.toString()}` : ''}`
    setDeeplink(target)

    // Redirect immediately to the Commitly app via deep link
    window.location.replace(target)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-commitly p-6">
      <div className="max-w-md w-full p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Opening Commitly…</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">If you’re not redirected automatically, tap the button below.</p>
        <a href={deeplink} className="inline-block mt-6 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Open Commitly</a>
      </div>
    </div>
  )
}
