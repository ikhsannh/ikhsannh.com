import BaseLayout from '../components/BaseLayout';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

const masteringTypescript = ({ posts }) => {
  return (
    <BaseLayout>
    <div className='px-[20rem]'>
      {posts.map((post, index) => (
        <Link href={'/writing/' + post.slug} passHref key={index}>
          <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b-2 border-gray-200">

            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
                <img src="/react.png" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col ml-4">
                <h3 className="text-lg font-semibold text-white">{post.frontMatter.title}</h3>
                <p className="text-gray-500">{post.frontMatter.date}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
              <p className="text-gray-300">Read more</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" color='white'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
      </div>
    </BaseLayout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default masteringTypescript;