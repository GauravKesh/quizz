'use client';

import { motion } from 'framer-motion';
import QuizCard from './QuizCard';

export default function QuizList({ quizzes }) {
    if (!quizzes || quizzes.length === 0) {
        return (
            <motion.p
                className="text-center text-lg text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                No quizzes available in this category.
            </motion.p>
        );
    }

    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.1 },
                },
            }}
        >
            {quizzes.map((quiz) => (
                <motion.div
                    key={quiz.id}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <QuizCard quiz={quiz} />
                </motion.div>
            ))}
        </motion.div>
    );
}
