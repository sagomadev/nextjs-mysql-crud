import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("listando produtos");
}

export function POST(request) {
  return NextResponse.json(request.body);
}
