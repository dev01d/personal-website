import PostCard from '../../src/components/PostCard'
import getPosts from '../../src/utils/getPosts'

export default function Blog({ posts }) {
  return (
    <div className="mt-24 pb-4 grid">
      <h1 className="pb-12 font-bold text-5xl dark:text-white underline">
        Latest Posts
      </h1>
      <div className="grid grid-flow-row grid-cols-2 m:grid-cols-0 gap-4 ml-4">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            image={post.data.cover_image}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}
