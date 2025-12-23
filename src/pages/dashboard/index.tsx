const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Welcome back!</h2>
        <p className="text-muted-foreground">
          This is a protected route. Only authenticated users can see this page.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
