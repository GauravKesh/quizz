'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CategoryCard({ category }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <Link
                href={`/quizzes/${category.id}`}
                className="block p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all bg-white"
            >
                <div className="flex items-center gap-4">
                    <Image
                        src={category.icon}
                        alt={category.name}
                        width={48}
                        height={48}
                        className="rounded-md"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                        {category.description && (
                            <p className="text-sm text-gray-500">{category.description}</p>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
