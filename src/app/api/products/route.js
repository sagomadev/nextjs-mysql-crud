import { db } from "@/libs/mysql";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("listando produtos");
}

export async function POST(request) {
  const { name, description, price } = await request.json();
  const result = await db.query("INSERT INTO product SET ?", {
    name,
    description,
    price,
  });
  console.log(result);
  return NextResponse.json("creando un produto");
}
