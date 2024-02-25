import Link from 'next/link';
import IconPDF from '../Icon/IconPDF';
import IconMeet from '../Icon/IconMeet';
import Carousel from './Carousel';
import IconGithub from '../Icon/IconGithub';

const items = [
  {
    title: 'Dev Team',
    feedback: '"Hello Ikhsan! Thanks for your contribution. It`s a pleasure to work with you."',
    client: 'Development Team',
    clientTitle: 'IT Center Telkom University',
    url: 'https://igracias.telkomuniversity.ac.id/',
  },
  {
    title: 'Trigan.org',
    feedback: '"Ikhsan is a talented frontend developer with a great grasp of React. I would be happy to work with him again!"',
    client: 'Aaron S.',
    clientTitle: 'Founder & CEO Trigan',
    url: 'https://trigan.org/',
  },
  {
    title: 'Locom Artificial Intelligence',
    feedback: '"Excellent, and technical developer. Thanks will continue to work with."',
    client: 'Tom Curry',
    clientTitle: 'Manager Locom AI',
    url: '',
  },
];

const LeftComponent = () => {

  return (
    <>
      {/*===== START =====*/}
      <div className=''>
        <div className='static xl:fixed xl:ml-[2rem] mt-[2rem] xl:mt-[26rem]'>

          {/* <img alt="Ikhsan N. Huda" src="/ns.png" priority className="mt-8 rounded-full w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] object-cover" /> */}

          {/*==1==*/}
          <div>
            <h1 className='text-9xl font-lato italic text-[#bababa] text-center '>Ikhsan.</h1>
          </div>
          {/*==1==*/}

          {/*==2==*/}
          <div className='flex justify-center xl:justify-start mt-[0.5rem]'>
            <div className='flex gap-2 text-[#bababa]'>
              <h2 className='text-2xl foont-thin font-catamaran text-[#bababa]'>
                A
              </h2>
              <span className="h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] animate-delayed-slideUp overflow-hidden">
                <ul className='block animate-slideUp pb-2 [&_li]:block'>
                  <li className='mb-[0.4rem] text-2xl foont-thin text-center rounded'>
                    JavaScript
                  </li>
                  <li className='mb-[0.4rem] text-2xl foont-thin text-center rounded'>
                    Linux
                  </li>
                  <li className='mb-[0.4rem] text-2xl foont-thin text-center rounded'>
                    Cloud
                  </li>
                  <li aria-hidden="true" className='text-2xl foont-thin text-center rounded'>JavaScript</li>
                </ul>
              </span>
              <h2 className='text-2xl foont-thin font-catamaran text-[#bababa]'>
                user
              </h2>
              <IconGithub />
            </div>
          </div>
          {/*==2==*/}

          <div className="flex justify-center xl:justify-start mt-4">
            <hr className="w-[17rem] xl:w-[10rem] h-[0.5rem] bg-[#bababa] rounded-full" />
          </div>

          {/*===3==*/}
          <div className='flex justify-center xl:justify-start mt-4 font-catamaran text-white'>
            <div className='flex gap-6'>
              <div className='flex items-center gap-1'>
                <Link href='/'>Resume</Link> <IconPDF />
              </div>
              <div className='flex items-center gap-1'>
                <Link href='/'>Schedule e-Meet</Link> <IconMeet />
              </div>
            </div>
          </div>
          {/*==3==*/}
        </div>
      </div>
      {/*===== END =====*/}
      <div className='mr-6 xl:mt-10'>
        {/* want to display Items number 2 */}
        <Carousel items={items} />
      </div>
    </>
  )
}

export default LeftComponent;
