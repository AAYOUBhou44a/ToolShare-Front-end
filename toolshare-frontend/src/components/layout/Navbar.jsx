
import Logo from '../common/Logo'

function Navbar({ user, onLogout }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <Logo />

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold text-slate-800">
            {user?.name || 'Utilisateur'}
          </p>

          <p className="text-xs text-slate-500">
            {user?.role || 'Client'}
          </p>
        </div>

        <button
          onClick={onLogout}
          className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
        >
          Déconnexion
        </button>
      </div>
    </header>
  )
}

export default Navbar
