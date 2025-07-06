import QuizList from '../../../components/ui/QuizList';
// import QuizList from '../../../';

export async function generateMetadata({ params }) {
    return {
        title: `${params.category} Quizzes | Micro-Quiz Platform`,
        description: `Test your knowledge in ${params.category}. Take quick quizzes.`,
    };
}

export default async function QuizCategoryPage({ params }) {
    const { category } = params;

    const res = await fetch(
        `$/api/quizzes?category=${category}`,
        { cache: 'no-store' }
    );

    if (!res.ok) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold text-red-600">❌ Category Not Found</h1>
                <p className="text-gray-500 mt-2">Please check the category name.</p>
            </div>
        );
    }

    const quizzes = await res.json();

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-12 px-6 ">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-extrabold capitalize text-gray-900 mb-8 text-center">
                    {category} Quizzes
                </h1>

                <QuizList quizzes={quizzes} />
            </div>
        </main>
    );
}
