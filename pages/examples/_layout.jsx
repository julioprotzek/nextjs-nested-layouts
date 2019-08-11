import MainLayout from './../_layout'
import Link from 'next/link'

export default ({ children }) => (
  <MainLayout>
    <div className="flex-grow flex overflow-hidden">
      <div className="px-8 py-8 bg-gray-200 w-64 overflow-y-auto">
        <div className="font-bold mb-4">Examples</div>
        {[...Array(100)].map((x, index) => (
          <React.Fragment key={index}>
            <Link href="/examples/page-1">
              <a className="block mb-4">Examples Page 1</a>
            </Link>
            <Link href="/examples/page-2">
              <a className="block mb-4">Examples Page 2</a>
            </Link>
          </React.Fragment>
          )
        )}
      </div>
      <div>
        {children}
      </div>
    </div>
  </MainLayout>
)
