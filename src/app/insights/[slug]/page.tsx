import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import PostClient from "./post-client";
import { getPostBySlug, getRelatedPosts, posts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Modern Strategy",
    };
  }

  return {
    title: `${post.title} | Modern Strategy`,
    description: post.snippet,
    openGraph: {
      title: `${post.title} | Modern Strategy`,
      description: post.snippet,
      type: "article",
      publishedTime: post.date,
      authors: ["Modern Strategy"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.snippet,
    },
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id, 3);

  return <PostClient post={post} relatedPosts={relatedPosts} />;
}
