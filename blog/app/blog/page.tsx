import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Hells Kitchen Blog',
  description: 'Read my our blog and follow our journey to Montreal, 2025!',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
