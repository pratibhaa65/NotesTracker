import { Link } from "react-router-dom";
import { PenLine, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="h-screen overflow-hidden bg-base-100 flex flex-col selection:bg-success/30">

            {/* 1. Minimal Navbar */}
            <nav className="flex justify-between items-center px-8 py-6">
                <div className="flex items-center gap-2">
                    <div className="bg-success p-1.5 rounded-lg">
                        <PenLine size={20} className="text-black" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Thinkboard</span>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/login" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">Login</Link>
                    <Link to="/register" className="btn btn-success btn-sm px-5 rounded-full text-black">Get Started</Link>
                </div>
            </nav>

            {/* 2. Main Content (Single Screen) */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative">

                {/* Subtle Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-success rounded-full blur-[120px]"></div>
                </div>

                {/* Hero Title */}
                <div className="max-w-2xl">
                    <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
                        Your safe space!
                    </h1>
                    <p className="text-lg opacity-60 mb-10 leading-relaxed max-w-md mx-auto">
                        The minimal space to capture ideas, manage tasks, and stay productive without the noise.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link to="/register" className="btn btn-success btn-lg px-8 rounded-2xl text-black shadow-xl shadow-success/20 group">
                            Start Writing <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* 3. Compact Features Row (No scrolling needed) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/50 border border-base-200/50 backdrop-blur-sm">
                        <Zap size={20} className="text-success" />
                        <span className="font-medium text-sm">Lightning Fast</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/50 border border-base-200/50 backdrop-blur-sm">
                        <PenLine size={20} className="text-success" />
                        <span className="font-medium text-sm">Distraction Free</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/50 border border-base-200/50 backdrop-blur-sm">
                        <ShieldCheck size={20} className="text-success" />
                        <span className="font-medium text-sm">Fully Secure</span>
                    </div>
                </div>
            </main>

            {/* 4. Minimal Footer */}
            <footer className="p-6 text-center">
                <p className="text-xs opacity-40 uppercase tracking-widest font-bold">
                    © {new Date().getFullYear()} Thinkboard Inc.
                </p>
            </footer>

        </div>
    );
}