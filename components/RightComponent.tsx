import Link from 'next/link';
import Image from 'next/image';

const RightComponent = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='pl-[0.2rem] mt-[3rem] sm:mt-[3rem] xl:mt-[4rem] xl:pl-[60rem]'>
                <div className='bg-white w-[22rem] sm:w-[25rem] lg:w-[40rem] h-[21.5rem] sm:h-[21.2rem] md:h-[21.2rem] lg:h-[19.2rem]  rounded-md mb-20'>
                    <hr className='w-[10rem] h-[0.5rem] bg-[#bababa]' />
                    <div className="">
                        <Image className="px-2 h-[8.5rem] w-[40rem] object-contain" src="/task-tracker.png" alt="ticket" width={500} height={500} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-2">Board Task Tracker</div>
                            <p className="text-gray-700 text-sm">
                                A board web application that allows to Create, Assign and Manage tasks.
                            </p>
                        </div>
                        <hr className='w-full h-[0.2rem] bg-[#bababa]' />
                        <div className="px-6 pt-2">

                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#React</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#JWT</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#Mongodb</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#Tailwind</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2 mt-2">#Vercel</span>
                            <div className='flex float-right items-center mr-[-1rem]'>
                                <Link
                                    href='https://nspace.gitbook.io/react-ticketing/'
                                    target='_blank'
                                    className='mr-[0.9rem] mt-[0.8rem]'
                                    aria-label='visit documentation react ticketing'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                </Link>

                                <Link
                                    href='https://ticketclient.vercel.app/'
                                    target='_blank'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-right mt-2 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white w-[22rem] sm:w-[25rem] lg:w-[40rem] h-[22.5rem] sm:h-[21.5rem] md:h-[21.5rem] lg:h-[19.2rem]  rounded-md mb-20'>
                    <hr className='w-[10rem] h-[0.5rem]  bg-[#bababa] float-right' />
                    <div className="">
                        <Image className="px-2 h-[8.5rem] w-[40rem] rounded-md" src="/pl.png" alt="Ecommerce" width={500} height={500} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-2">Product as a Service</div>
                            <p className="text-gray-700 text-sm">
                                Can post product, set service, price and manage orders as a Maintainer.
                            </p>
                        </div>
                        <hr className='w-full h-[0.2rem] bg-[#bababa]' />
                        <div className="px-6 pt-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#Nextjs</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#GoogleAuth</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#Express</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#Mongodb</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2 mt-2">#Styled-Components</span>

                            <div className='flex float-right items-center mr-[-2rem]'>
                                <Link
                                    href='https://nspace.gitbook.io/next-ecommerce/'
                                    target='_blank'
                                    className='mr-[0.9rem] mt-[0.9rem]'
                                    aria-label='visit documentation next-ecommerce'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                </Link>
                                <Link
                                    href='https://emarket-client.vercel.app/'
                                    target='_blank'
                                    className='mr-[1rem] mt-[0.5rem]'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-right mt-2 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white w-[22rem] sm:w-[25rem] lg:w-[40rem] h-[17.5rem] sm:h-[18.5rem] rounded-md mb-20'>
                    <hr className='w-[10rem] h-[0.5rem] bg-[#bababa] float-left' />
                    <div className="">
                        <Image className="px-2 h-[8.5rem] w-[40rem] object-contain" src="/wip.png" alt="work-in-progress" width={500} height={500} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-2">Web-RTC </div>
                            <p className="text-gray-700 text-sm">
                                work-in-progress.
                            </p>
                        </div>
                        <hr className='w-full h-[0.2rem] bg-[#bababa]' />
                        <div className="px-6 pt-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#React.js</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2">#Jitsi</span>

                            {/* <div className='flex float-right items-center mr-[-2rem]'>
                            <Link
                                href='https://nspace.gitbook.io/next-ecommerce/'
                                target='_blank'
                                className='mr-[0.2rem] mt-[0.9rem]'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </Link>
                            <Link
                                href='https://emarket-client.vercel.app/'
                                target='_blank'
                                className='mr-[1rem] mt-[0.5rem]'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-right mt-2 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </Link>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightComponent;