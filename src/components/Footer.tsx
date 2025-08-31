export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-sm text-gray-600 dark:text-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Commitly — Built for developers.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">GitHub Repo</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
