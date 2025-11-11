import { NextResponse } from 'next/server';

export async function GET(request) {
  console.log("--- TEST ROUTE WAS HIT ---");
  return NextResponse.json({ message: "Hello from the test route!" });
}