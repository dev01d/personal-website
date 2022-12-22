import Link from 'next/link'

function PostCard({ title, date, description, slug, image }) {
  return (
    <div className="my-4 py-4 pl-4 border-0 border-t border-t-zinc-200 shadow-purple-500 dark:shadow-zinc-500 dark:border-t-zinc-600 shadow-2xl rounded-xl">
      <h2 className="font-bold text-2xl my-4 dark:text-white underline">
        {title}
      </h2>
      <time className="mt-2 text-gray-400">{date}</time>
      <p className="mt-4 italic dark:text-white">{description}</p>
      <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 mb-4">
        <Link href="blog/[slug]" as={`blog/${slug}`}>
          Read more
        </Link>
      </button>
    </div>
  )
}

export default PostCard
