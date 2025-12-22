import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'

const Dashboard = () => {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-svh bg-background">
      <nav className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {user?.email}
            </span>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Welcome back!</h2>
          <p className="text-muted-foreground">
            This is a protected route. Only authenticated users can see this page.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

