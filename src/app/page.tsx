import { db } from '@/lib/db';
import React from 'react';

export default async function Home() {
  await db.set('hello', 'hello');
  return (
    <main className="text-red-500">
      <h1>
        Hello World !
      </h1>
    </main>
  )
}
