import Head from 'next/head'
import Link from 'next/link'

export default ({ children }) => (
  <>
    <Head>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>
    <div className="antialiased text-gray-900 h-screen flex flex-col">
      <div className="relative px-8 py-4 shadow flex items-center flex-shrink-0">
        <Link href="/">
          <a>
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10L20 0l18 10v20L20 40 2 30V10z" fill="#C3DAFE"/><path d="M38 30V10L20 20v20l18-10z" fill="#434190"/><path d="M2 10v20l18 10V20L2 10z" fill="#667EEA"/></svg>
          </a>
        </Link>
        <Link href="/docs/page-1">
          <a className="ml-16 text-lg font-semibold">Docs</a>
        </Link>
        <Link href="/examples/page-1">
          <a className="ml-12 text-lg font-semibold">Examples</a>
        </Link>
      </div>

      {children}
    </div>
  </>
)
