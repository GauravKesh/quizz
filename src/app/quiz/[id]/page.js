import QuizRunner from '../../../components/ui/QuizRunner';

export async function generateMetadata({ params }) {
    return {
        title: `Quiz | ${params.id}`,
        description: `Take this quiz and test your knowledge!`,
    };
}

export default async function QuizPage({ params }) {
    const { id } = params;

    const res = await fetch(`/api/quiz/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-red-600 mb-2">❌ Quiz Not Found</h1>
                    <p className="text-gray-600">The quiz you’re looking for doesn’t exist or has been removed.</p>
                </div>
            </div>
        );
    }

    const quiz = await res.json();

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                        {quiz.title}
                    </h1>
                    <QuizRunner quiz={quiz} />
                </div>
            </div>
        </main>
    );
}
