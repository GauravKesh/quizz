'use client';

import { useState } from 'react';
import QuestionCard from './QuestionCard';
import ScoreCard from './ScoreCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuizRunner({ quiz }) {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [feedback, setFeedback] = useState('');

    const question = quiz.questions[current];

    const handleAnswer = (option) => {
        setSelected(option);

        if (option === question.answer) {
            setScore((prev) => prev + 1);
            setFeedback('✅ Correct!');
        } else {
            setFeedback(`❌ Wrong! Correct: ${question.answer}`);
        }

        setTimeout(() => {
            setSelected(null);
            setFeedback('');
            if (current + 1 < quiz.questions.length) {
                setCurrent(current + 1);
            } else {
                setCompleted(true);
            }
        }, 1200);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl   mt-8">
            <AnimatePresence mode="wait">
                {completed ? (
                    <motion.div
                        key="score"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ScoreCard score={score} total={quiz.questions.length} />
                    </motion.div>
                ) : (
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            Question {current + 1} of {quiz.questions.length}
                        </div>

                        <QuestionCard
                            question={question}
                            current={current}
                            total={quiz.questions.length}
                            selected={selected}
                            feedback={feedback}
                            onSelect={handleAnswer}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
