// @ts-nocheck
import getPost from '../../src/utils/getPost'
import getPosts from '../../src/utils/getPosts'
import Link from 'next/link'
import Image from 'next/image'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

function Post({ data, content }) {
  return (
    <div>
      <div className="justify-center mx-auto max-w-xs sm:max-w-lg lg:max-w-2xl">
        <h1 className="font-bold text-4xl md:text-5xl mb-12 mt-24 dark:text-white">
          {data.title}
        </h1>
        <div className="mb-5">
          <Image
            src={data.cover_image}
            layout="responsive"
            height={637}
            width={1280}
            alt="cover photo"
            className="rounded-xl"
          />
        </div>
        <time className="pt-5 text-gray-500 italic dark:text-white">
          {data.date}
        </time>
        <div className="prose prose-code:before:content-none prose-code:after:content-none prose-code:rounded-xl dark:prose-invert prose-headings:underline prose-a:text-blue-600 prose-img:rounded-xl mt-12 mb-12 sm:prose-sm md:prose-m lg:prose-lg xl:prose-x">
          <MDXRemote {...content} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-10">
        <button className="items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-m font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4">
          <Link href={'/blog'}> Go Back </Link>
        </button>
      </div>
    </div>
  )
}

export default Post

export const getStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)

  const options = {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight, rehypeSlug],
    },
  }

  const mdxSource = await serialize(post.content, options)
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  }
}
