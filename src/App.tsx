function App() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 text-xl font-bold text-white">
              D
            </div>

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
              Dev Stack
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium text-gray-900 transition hover:text-pink-500">
              Home
            </a>

            <a href="#technologies" className="text-sm font-medium text-gray-600 transition hover:text-pink-500">
              Technologies
            </a>

            <a href="#projects" className="text-sm font-medium text-gray-600 transition hover:text-pink-500">
              Projects
            </a>

            <a href="#about" className="text-sm font-medium text-gray-600 transition hover:text-pink-500">
              About
            </a>

            <a href="#contact" className="text-sm font-medium text-gray-600 transition hover:text-pink-500">
              Contact
            </a>
          </nav>

          {/* Authentication Buttons */}
          <div className="hidden items-center gap-3 sm:flex">
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 transition hover:text-pink-500">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="rounded-lg p-2 text-gray-700 sm:hidden">
            ☰
          </button>

        </div>
      </header>

      {/* Temporary content */}
      <main className="flex min-h-[70vh] items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900">
          DevStack
        </h1>
      </main>

    </div>
  )
}

export default App