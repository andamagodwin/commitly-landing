import { useEffect, useMemo, useState } from 'react'

export default function AuthCallback() {
  const [status, setStatus] = useState<'reading' | 'success' | 'error'>('reading')
  const [message, setMessage] = useState('Processing GitHub authentication...')

  const params = useMemo(() => new URLSearchParams(window.location.search), [])

  useEffect(() => {
  const code = params.get('code')
    const error = params.get('error')

    if (error) {
      setStatus('error')
      setMessage(`GitHub auth failed: ${error}`)
      return
    }

    if (!code) {
      setStatus('error')
      setMessage('Missing code parameter in callback URL.')
      return
    }

    // Normally, you would POST { code, state } to your backend to exchange for an access token.
    // Since this is a static front-end, we just show a friendly success message.
    setStatus('success')
    setMessage('GitHub code received. You can now close this window or return to the app.')
  }, [params])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-commitly p-6">
      <div className="max-w-md w-full p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Commitly Auth</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">{message}</p>
        {status === 'success' && (
          <a href="/" className="inline-block mt-6 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Return to Home</a>
        )}
      </div>
    </div>
  )
}
