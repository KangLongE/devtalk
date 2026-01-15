import { NextResponse } from "next/server";
import { posts } from "@/lib/mock/posts";

export function GET(_req: Request, { params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
