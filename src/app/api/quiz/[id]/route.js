import { quizzes } from '../../../../data/mockData';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
    const quiz = quizzes.find(q => q.id === params.id);
    if (!quiz) {
        return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
    }
    return NextResponse.json(quiz);
}
