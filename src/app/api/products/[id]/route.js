import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("obteniendo un produto");
}

export function DELETE() {
  return NextResponse.json("borrando un produto");
}

export function PUT() {
  return NextResponse.json("actualizando un produto");
}
