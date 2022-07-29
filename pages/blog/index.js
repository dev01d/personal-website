import PostCard from '../../src/components/PostCard'
import getPosts from '../../src/utils/getPosts'

export default function Blog({ posts }) {
  const layout = posts.length % 2 && posts.length < 4 ? true : false
  let postItems = posts.map((post) => (
    <PostCard
      key={post.slug}
      image={post.data.cover_image}
      title={post.data.title}
      date={post.data.date}
      description={post.data.description}
      slug={post.slug}
    />
  ))
  return (
    <div className="mt-24 pb-4 grid mx-auto max-w-sm md:max-w-2xl lg:max-w-2xl">
      <h1 className="pb-12 font-bold text-5xl dark:text-white underline min-w-fit ml-2">
        Latest Posts
      </h1>
      {layout ? (
        <div className="grid grid-flow-row grid-cols-0 gap-4">{postItems}</div>
      ) : (
        <div className="grid grid-flow-row grid-cols-0 md:grid-cols-2 gap-4">
          {postItems}
        </div>
      )}
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
