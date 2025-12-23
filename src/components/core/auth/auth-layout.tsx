import Logo from "@/assets/images/svgs/askmi-logo.svg"
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="max-w-[474px] w-full min-h-screen bg-primary hidden lg:flex  text-white flex-col justify-between p-12 xl:p-16">
                <div className="">
                    <img src={Logo} />
                </div>

                {/* Main Content */}
                <div className="space-y-6 max-w-lg">
                    <h2 className="text-5xl font-bold leading-tight text-balance">Start collecting insights today</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Create surveys, launch campaigns, and get real-time data from Instagram influencers and their audiences.
                    </p>
                </div>

                {/* Features */}
                <div className="flex gap-8">
                    <div className="relative pl-4">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                        <div className="text-3xl font-bold mb-1">24/7</div>
                        <div className="text-sm text-gray-400">Customer support</div>
                    </div>
                    <div className="relative pl-4">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                        <div className="text-3xl font-bold mb-1">Free trial</div>
                        <div className="text-sm text-gray-400">7 days free trial</div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
