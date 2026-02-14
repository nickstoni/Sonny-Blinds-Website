'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white p-4">
            <div className="conatiner-section p-4">
                <Link href="/" className="text-2xl font-bold">
                Sonny Blinds
                </Link>
            </div>
        </nav>
    );
}