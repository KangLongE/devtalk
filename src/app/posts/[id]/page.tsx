'use client'
import { useParams } from "next/navigation";

export default function DetailPostsPage() {
  const params = useParams();
    
  return(
    <div>
        {params.id}
    </div>
  );
}