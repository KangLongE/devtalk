import { NextResponse } from "next/server";
import { posts } from "@/lib/mock/posts";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
