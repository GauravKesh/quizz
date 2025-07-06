'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function ScoreCard({ score, total, category }) {
    const router = useRouter();
    const percent = Math.round((score / total) * 100);

    const feedback =
        percent === 100
            ? '🎉 Perfect!'
            : percent >= 70
                ? '✅ Great job!'
                : percent >= 40
                    ? '👍 Not bad!'
                    : '📚 Keep practicing!';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white p-8 rounded-2xl text-center "
        >
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Quiz Completed</h2>

            <p className="text-xl text-gray-800 mb-2">
                You scored <span className="font-bold">{score}</span> out of {total}
            </p>

            <p className="text-lg text-gray-600">{feedback}</p>

            <div className="mt-6 mb-4">
                <span className="inline-block text-sm px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                    {percent}% Score
                </span>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
                <button
                    onClick={() => router.push('/')}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                >
                    🏠 Home
                </button>
               {/*  <button
                    onClick={() => router.push(`/quizzes/${category}`)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    🔁 Back to {category}
                </button> */}
            </div>
        </motion.div>
    );
}
