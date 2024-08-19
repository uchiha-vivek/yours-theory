import { NextResponse, NextRequest } from "next/server";
import { db, collection, addDoc } from '@/config/firebase';

export async function POST(req: NextRequest) {
  const { title, content } = await req.json();

  if (!title || !content) {
    return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
  }

  try {
    const docRef = await addDoc(collection(db, 'chats'), {
      title,
      content,
      createdAt: new Date(),
    });
    return NextResponse.json({ id: docRef.id, title, content });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
