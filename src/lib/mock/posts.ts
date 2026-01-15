export type PostListItem = {
  id: string;
  title: string;
  excerpt: string;
  category: "qna" | "bug" | "talk";
  author: { id: string; nickname: string; avatarUrl: string | null };
  createdAt: string;
  commentCount: number;
  likeCount: number;
  viewCount: number;
  tags: string[];
};

export type PostDetail = PostListItem & {
  content: string;
};

export const posts: PostDetail[] = [
  {
    id: "1",
    title: "fetch first 에러 해결 질문",
    excerpt: "git push 할 때 fetch first가 뜹니다.",
    content: "원격에 커밋이 있어서 push가 거절됩니다. pull/rebase 또는 force push가 필요합니다.",
    category: "qna",
    author: { id: "u1", nickname: "Kang", avatarUrl: null },
    createdAt: new Date().toISOString(),
    commentCount: 3,
    likeCount: 10,
    viewCount: 120,
    tags: ["git", "github"],
  },
  {
    id: "2",
    title: "Next App Router에서 useParams 주의점",
    excerpt: "Server Component에서 useParams를 쓰면 에러가 납니다.",
    content: "useParams는 client component에서만 동작합니다. page.tsx는 params로 받는 방식도 가능합니다.",
    category: "talk",
    author: { id: "u2", nickname: "dev2", avatarUrl: null },
    createdAt: new Date(Date.now() - 3600_000).toISOString(),
    commentCount: 1,
    likeCount: 2,
    viewCount: 44,
    tags: ["nextjs"],
  },
];
