'use client';

export default function QuestionCard({
    question,
    current,
    total,
    selected,
    feedback,
    onSelect,
}) {
    return (
        <div className=" rounded-2xl p-6  bg-white max-w-2xl mx-auto border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 ">
                {/* Question {current + 1} of {total} */}
            </h2>

            <p className="text-lg font-medium text-blue-600 mb-6 ">
                {question.question}
            </p>

            <ul className="space-y-3">
                {question.options.map((opt) => {
                    const isCorrect = opt === question.answer;
                    const isSelected = opt === selected;

                    let optionStyle =
                        'bg-gray-50 hover:bg-gray-100 text-gray-800';
                    if (selected) {
                        if (isCorrect) {
                            optionStyle =
                                'bg-green-100 border-green-600 text-green-800';
                        } else if (isSelected) {
                            optionStyle =
                                'bg-red-100 border-red-600 text-red-800';
                        } else {
                            optionStyle += ' opacity-70';
                        }
                    }

                    return (
                        <li key={opt}>
                            <button
                                onClick={() => onSelect(opt)}
                                disabled={!!selected}
                                className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 ${optionStyle}`}
                            >
                                {opt}
                            </button>
                        </li>
                    );
                })}
            </ul>

            {feedback && (
                <p className="mt-6 text-center text-lg font-semibold text-gray-800">
                    {feedback}
                </p>
            )}
        </div>
    );
}
