import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ name: "Adrian", lastName: "Tucci" });
}
