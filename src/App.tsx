import logoText from "./assets/logo-text.png"
import bannerStack from "./assets/banner-stack.png"

function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-gray-900 transition hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              Contact
            </a>
          </nav>

          {/* Authentication Buttons */}
          <div className="hidden items-center gap-3 sm:flex">
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 transition hover:text-pink-500">
              Sign In
            </button>

            <button className="rounded-full bg-[#DB1677] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#C41269]">
            Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 text-2xl text-gray-700 sm:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>
      </header>

            {/* Hero Section */}
      <main>
        <section className="px-6 py-16 sm:px-8 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            {/* Hero Content */}
            <div>
              <h1 className="text-6xl font-black leading-[0.98] tracking-[-0.045em] text-[#111827] lg:text-7xl">
                Build Your
                <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                  Perfect Dev Stack
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-xl font-normal leading-[1.6] text-[#52627a]">
                Explore popular web technologies, discover powerful tools, and
                create your own personalized developer stack in one place.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-base font-semibold text-white transition hover:opacity-90">
                  Explore Technologies
                </button>

                <button className="rounded-lg border border-gray-200 bg-white px-9 py-3 text-base font-normal text-gray-700 transition hover:border-gray-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={bannerStack}
                alt="Development Stack"
                className="w-full max-w-md object-contain"
              />
            </div>

          </div>
        </section>
      </main>
      {/* Footer */}
<footer className="border-t border-gray-100 bg-white">
  <div className="mx-auto max-w-[1340px] px-6 pt-16 pb-12">

    {/* Footer Content */}
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">

      {/* Brand */}
      <div>
        <a href="#" className="inline-flex items-center">
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-9 w-auto object-contain"
          />
        </a>

        <p className="mt-5 max-w-[440px] text-sm font-normal leading-5 text-[#718096]">
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>

        <div className="mt-6 flex items-center gap-5">
          <a
            href="#"
            className="text-sm font-medium text-[#475569] transition hover:text-pink-600"
          >
            GitHub
          </a>

          <a
            href="#"
            className="text-sm font-medium text-[#475569] transition hover:text-pink-600"
          >
            Twitter
          </a>

          <a
            href="#"
            className="text-sm font-medium text-[#475569] transition hover:text-pink-600"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Product */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#111827]">
          Product
        </h3>

        <div className="mt-5 space-y-3">
          <a
            href="#"
            className="block text-sm font-normal text-[#718096] transition hover:text-pink-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="block text-sm font-normal text-[#718096] transition hover:text-pink-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="block text-sm font-normal text-[#718096] transition hover:text-pink-600"
          >
            Projects
          </a>
        </div>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#111827]">
          Company
        </h3>

        <div className="mt-5 space-y-3">
          <a
            href="#about"
            className="block text-sm font-normal text-[#718096] transition hover:text-pink-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="block text-sm font-normal text-[#718096] transition hover:text-pink-600"
          >
            Contact
          </a>

          <a
            href="#"
            className="block text-sm font-normal text-[#718096] transition hover:text-pink-600"
          >
            Careers
          </a>
        </div>
      </div>

      {/* Legal */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#111827]">
          Legal
        </h3>

        <div className="mt-5 space-y-3">
          <a
            href="#"
            className="block text-sm font-normal text-[#718096] transition hover:text-pink-600"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="block text-sm font-normal text-[#718096] transition hover:text-pink-600"
          >
            Terms of Service
          </a>
        </div>
      </div>

    </div>

    {/* Bottom Divider */}
    <div className="mt-14 border-t border-gray-100 pt-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-sm font-normal text-[#94a3b8]">
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex items-center gap-7">
          <a
            href="#"
            className="text-sm font-normal text-[#94a3b8] transition hover:text-pink-600"
          >
            Privacy
          </a>

          <a
            href="#"
            className="text-sm font-normal text-[#94a3b8] transition hover:text-pink-600"
          >
            Terms
          </a>
        </div>

      </div>
    </div>

  </div>
</footer>



    </div>
  )
}

export default App