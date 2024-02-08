import Link from 'next/link';

const Navigation = () => {
  return (
    <div>
      <div className='container mx-auto flex gap-5 font-semibold text-[#ffffff]'>
        <Link href="/">work</Link>
        {/* <Link href="/mastering">back to list</Link> */}
        <hr />
      </div>
    </div>
  )
}

export default Navigation;