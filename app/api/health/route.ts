import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "template-02-next-saas",
    timestamp: new Date().toISOString()
  });
}
