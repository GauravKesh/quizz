'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
                    MicroQuiz
                </Link>

                <div className="flex gap-6 text-sm font-medium text-gray-700">
                    <Link
                        href="/"
                        className={`hover:text-blue-600 transition ${
                            pathname === '/' ? 'text-blue-600' : ''
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`hover:text-blue-600 transition ${
                            pathname === '/about' ? 'text-blue-600' : ''
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={`hover:text-blue-600 transition ${
                            pathname === '/contact' ? 'text-blue-600' : ''
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}
