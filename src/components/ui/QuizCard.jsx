'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function QuizCard({ quiz }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <Link
                href={`/quiz/${quiz.id}`}
                className="block p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
                <h2 className="text-lg font-semibold text-gray-800">{quiz.title}</h2>
                {quiz.description && (
                    <p className="text-sm text-gray-500 mt-1">{quiz.description}</p>
                )}
            </Link>
        </motion.div>
    );
}
