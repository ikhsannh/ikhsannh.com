import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Button from '@/components/Button';

const components = { Navigation, Button, SyntaxHighlighter };

interface FrontMatter {
  title: string;
  date: string;
}

interface PostPageProps {
  frontMatter: FrontMatter;
  mdxSource: any;
}

const PostPage: React.FC<PostPageProps> = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <div className="container mx-auto xl:px-[20rem] md:px-[0rem] sm:px-[1rem] px-[1rem]">
      <Navigation />
      <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b-2 border-gray-200 border-opacity-60">
        <div className="flex flex-col md:flex-row items-center mx-auto">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
          <Image src="/react.png" className="w-full h-full object-cover" alt={'reactLogo'} width={100} height={100} />
          </div>
          <div className="flex flex-col ml-4">
            <h3 className="text-lg font-semibold text-white leading-3">{title}</h3>
            <p className="text-gray-400 text-center sm:text-left text-sm">{date}</p>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center px-8">
        <div className="text-left">
          <div className="inline-block">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts/ap'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts/ap', slug + '.mdx'), 'utf-8');

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
