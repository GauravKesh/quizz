import { quizzes } from '../../../data/mockData';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (!category) {
        return NextResponse.json({ error: 'Missing category' }, { status: 400 });
    }

    const filtered = quizzes.filter(q => q.category === category);
    return NextResponse.json(filtered);
}
