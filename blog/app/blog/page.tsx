import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog of Hells Kitchen',
  description: 'Read our blog and follow our journey to Montreal, 2025!',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl text-center mb-8 tracking-tighter">Hell's T-Bog Blog</h1>
      <p className="font-semibold text-m text-center mb-8 tracking-tighter">Read our blog and follow our journey to Montreal, 2025!</p>
      <BlogPosts />
    </section>
  )
}
