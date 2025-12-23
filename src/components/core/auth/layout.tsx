
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="max-w-[474px] w-full min-h-screen bg-primary"></div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
