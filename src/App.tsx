import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import logoText from "./assets/logo-text.png"
import bannerStack from "./assets/banner-stack.png"
import technologiesData from "./data/technologies.json"

function App() {
  const [technologies, setTechnologies] = useState<typeof technologiesData>([])
  const [stack, setStack] = useState<typeof technologiesData>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  // Load technologies
  useEffect(() => {
    const loadTechnologies = async () => {
      setLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 700))

      setTechnologies(technologiesData)
      setLoading(false)
    }

    loadTechnologies()
  }, [])

  // Add technology
  const handleAddToStack = (
    technology: (typeof technologiesData)[number]
  ) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ])

    toast.success(`${technology.name} added to your stack.`)
  }

  // Remove technology
  const handleRemove = (id: number) => {
    const removed = stack.find(
      (item) => item.id === id
    )

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    )

    if (removed) {
      toast.info(`${removed.name} removed from your stack.`)
    }
  }

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) return

    setStack([])
    toast.info("All technologies removed from your stack.")
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#"
              className="text-sm font-normal text-gray-900 transition hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-normal text-gray-600 transition hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm font-normal text-gray-600 transition hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-normal text-gray-600 transition hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-normal text-gray-600 transition hover:text-pink-500"
            >
              Contact
            </a>

          </nav>

          {/* Authentication */}
          <div className="hidden items-center gap-3 sm:flex">

            <button
              type="button"
              className="px-4 py-2 text-sm font-normal text-gray-700 transition hover:text-pink-500"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-[#DB1677] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#C41269]"
            >
              Sign Up
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">

            <nav className="flex flex-col gap-4">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-700"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-700"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-700"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-700"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-700"
              >
                Contact
              </a>

            </nav>

          </div>
        )}

      </header>


      {/* ================= MAIN ================= */}

      <main>

        {/* ================= HERO ================= */}

        <section className="px-6 py-16 lg:py-20">

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            {/* Hero Content */}
            <div>

              <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.045em] text-[#111827] sm:text-6xl lg:text-7xl">

                Build Your

                <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                  Perfect Dev Stack
                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg font-normal leading-7 text-[#52627a] sm:text-xl">
                Explore popular web technologies, discover powerful tools,
                and create your own personalized developer stack in one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("technologies")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Explore Technologies
                </button>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("technologies")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="rounded-lg border border-gray-200 px-8 py-3 text-sm font-normal text-gray-700 transition hover:border-gray-300"
                >
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


        {/* ================= TECHNOLOGIES ================= */}

        <section
          id="technologies"
          className="px-6 py-16"
        >

          <div className="mx-auto max-w-7xl">

            {/* Section Heading */}

            <h2 className="text-3xl font-black tracking-tight text-[#111827] sm:text-4xl">
              Explore the{" "}
              <span className="text-pink-500">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-sm font-normal text-[#718096]">
              Pick one technology per category to build your ideal stack.
            </p>


            {/* Loading State */}

            {loading ? (

              <div className="flex min-h-[400px] items-center justify-center">

                <div className="flex flex-col items-center">

                  <span className="loading loading-spinner loading-lg text-pink-500"></span>

                  <p className="mt-4 text-sm font-medium text-gray-500">
                    Loading technologies...
                  </p>

                </div>

              </div>

            ) : (

              /* Cards + Stack */

              <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_280px]">


                {/* ================= TECHNOLOGY CARDS ================= */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {technologies.map((technology) => {

                    const isAdded = stack.some(
                      (item) => item.id === technology.id
                    )

                    return (

                      <div
                        key={technology.id}
                        className="flex min-h-[145px] flex-col rounded-xl border border-gray-100 bg-white p-3"
                      >

                        {/* Icon + Badge */}

                        <div className="flex items-start justify-between">

                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-7 w-7 object-contain"
                          />

                          <span className="rounded-full bg-blue-50 px-2 py-1 text-[8px] font-medium text-blue-500">
                            {technology.badge}
                          </span>

                        </div>


                        {/* Name */}

                        <h3 className="mt-3 text-sm font-semibold text-[#111827]">
                          {technology.name}
                        </h3>


                        {/* Description */}

                        <p className="mt-1 min-h-[32px] text-[8px] leading-3 text-[#718096]">
                          {technology.description}
                        </p>


                        {/* Details */}

                        <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[7px] text-[#718096]">

                          <span className="rounded bg-gray-50 px-2 py-1">
                            {technology.category}
                          </span>

                          <span>
                            {technology.difficulty}
                          </span>

                          <span>
                            ★ {technology.rating}
                          </span>

                        </div>


                        {/* Add Button */}

                        <button
                          type="button"
                          disabled={isAdded}
                          onClick={() =>
                            handleAddToStack(technology)
                          }
                          className={`mt-2 w-full rounded-md py-2 text-[8px] font-medium text-white transition ${
                            isAdded
                              ? "cursor-not-allowed bg-gray-400"
                              : "bg-[#111827] hover:bg-pink-600"
                          }`}
                        >
                          {isAdded
                            ? "Added to Stack"
                            : "Add to Stack"}
                        </button>

                      </div>

                    )
                  })}

                </div>


                {/* ================= YOUR STACK ================= */}

                <aside className="h-fit rounded-xl border border-gray-100 bg-white p-4 lg:sticky lg:top-24">

                  <h3 className="text-sm font-semibold text-[#111827]">
                    Your Stack
                  </h3>

                  <p className="mt-1 text-[8px] text-[#94a3b8]">
                    {stack.length}{" "}
                    {stack.length === 1
                      ? "Technology"
                      : "Technologies"}{" "}
                    selected
                  </p>


                  {/* Empty State */}

                  {stack.length === 0 ? (

                    <div className="mt-4 flex h-16 items-center justify-center rounded-md border border-dashed border-gray-200">

                      <p className="text-[8px] text-[#94a3b8]">
                        Your stack is empty
                      </p>

                    </div>

                  ) : (

                    <div className="mt-4 space-y-2">

                      {stack.map((technology) => (

                        <div
                          key={technology.id}
                          className="flex items-center gap-2 rounded-md border border-gray-100 p-2"
                        >

                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-5 w-5 object-contain"
                          />

                          <div className="min-w-0 flex-1">

                            <p className="truncate text-[9px] font-semibold text-[#111827]">
                              {technology.name}
                            </p>

                            <p className="text-[7px] text-[#94a3b8]">
                              {technology.category}
                            </p>

                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              handleRemove(technology.id)
                            }
                            className="text-xs text-[#94a3b8] transition hover:text-red-500"
                          >
                            ×
                          </button>

                        </div>

                      ))}

                    </div>

                  )}


                  {/* Remove All */}

                  <button
                    type="button"
                    onClick={handleRemoveAll}
                    disabled={stack.length === 0}
                    className="mt-4 w-full rounded-md border border-red-200 py-1.5 text-[8px] font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Remove All
                  </button>

                </aside>

              </div>

            )}

          </div>

        </section>


        {/* ================= HIDDEN SECTIONS ================= */}

        <section id="projects" className="hidden">
          Projects
        </section>

        <section id="about" className="hidden">
          About
        </section>

        <section id="contact" className="hidden">
          Contact
        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-gray-100 bg-white">

        <div className="mx-auto max-w-[1340px] px-6 pt-16 pb-12">

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">


            {/* Brand */}

            <div>

              <a
                href="#"
                className="inline-flex items-center"
              >

                <img
                  src={logoText}
                  alt="Dev Stack"
                  className="h-9 w-auto object-contain"
                />

              </a>

              <p className="mt-5 max-w-[440px] text-sm leading-5 text-[#718096]">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              <div className="mt-6 flex gap-5">

                <a
                  href="#"
                  className="text-sm text-[#475569] hover:text-pink-600"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="text-sm text-[#475569] hover:text-pink-600"
                >
                  Twitter
                </a>

                <a
                  href="#"
                  className="text-sm text-[#475569] hover:text-pink-600"
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
                  className="block text-sm text-[#718096] hover:text-pink-600"
                >
                  Home
                </a>

                <a
                  href="#technologies"
                  className="block text-sm text-[#718096] hover:text-pink-600"
                >
                  Technologies
                </a>

                <a
                  href="#projects"
                  className="block text-sm text-[#718096] hover:text-pink-600"
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
                  className="block text-sm text-[#718096] hover:text-pink-600"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="block text-sm text-[#718096] hover:text-pink-600"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="block text-sm text-[#718096] hover:text-pink-600"
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
                  className="block text-sm text-[#718096] hover:text-pink-600"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="block text-sm text-[#718096] hover:text-pink-600"
                >
                  Terms of Service
                </a>

              </div>

            </div>

          </div>


          {/* Footer Bottom */}

          <div className="mt-14 border-t border-gray-100 pt-7">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-sm text-[#94a3b8]">
                © 2026 Dev Stack. All rights reserved.
              </p>

              <div className="flex gap-7">

                <a
                  href="#"
                  className="text-sm text-[#94a3b8] hover:text-pink-600"
                >
                  Privacy
                </a>

                <a
                  href="#"
                  className="text-sm text-[#94a3b8] hover:text-pink-600"
                >
                  Terms
                </a>

              </div>

            </div>

          </div>

        </div>

      </footer>


      {/* ================= TOAST ================= */}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
      />

    </div>
  )
}

export default App