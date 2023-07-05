import fs from 'fs'
import path from 'path'
import matter, { GrayMatterFile } from 'gray-matter'
import Link from 'next/link'
// import Image from 'next/image'

interface masteringNextjsProps {
  posts: {
    frontMatter: {
      title: string;
      date: string;
    };
    slug: string;
  }[];
}

const MasteringNextjs: React.FC<masteringNextjsProps> = ({ posts }) => {
  return (
    <div className='container mx-auto xl:px-[2rem] md:px-[0rem] sm:px-[1rem] px-[1rem] text-gray'>
    {posts.map((post, index) => (
      <Link href={'/writing/ap/' + post.slug} passHref key={index}>
        <div className="flex flex-row items-center justify-between p-4 border-b-2 border-gray-200">

          <div className="flex flex-row items-center">
            {/* <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
              <Image src="/react.png" className="w-full h-full object-cover" alt={'reactLogo'} width={100} height={100} />
            </div> */}
            <div className="flex flex-col ml-4">
              <h3 className="text-lg font-semibold">{post.frontMatter.title}</h3>
              <p className="">{post.frontMatter.date}</p>
            </div>
          </div>
          {/* <div className="flex flex-row items-center mt-4 md:mt-0">
            <p className="">Read more</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" color='white'>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div> */}
        </div>
      </Link>
    ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts/ap')) // change here if you want to change the folder name / directory 

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts/ap', filename), 'utf-8')
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

export default MasteringNextjs;


















