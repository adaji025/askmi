import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-lg text-muted-foreground">
          This is a public page accessible to everyone
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home

