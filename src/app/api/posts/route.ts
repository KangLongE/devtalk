import { NextResponse } from "next/server";
import { posts } from "@/lib/mock/posts";

export function GET() {
  const items = posts.map(({ content, ...rest }) => rest);
  return NextResponse.json({ items, pageInfo: { nextCursor: null, hasNext: false } });
}
