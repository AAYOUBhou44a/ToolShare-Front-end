
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function MainLayout({ children, user, links, onLogout }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        user={user}
        onLogout={onLogout}
      />

      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar links={links} />

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout
