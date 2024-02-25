import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Icon from './Icon'
import Link from 'next/link'
import Image from 'next/image'

const IconMeet = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div
        onClick={openModal}
      >
        <Icon />

      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[25rem] h-[8rem] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center fixed flex font-medium leading-6 text-gray-900"
                  >
                    Hey, we can set up on Upwork.
                    <div className="group flex">

                      <span className="text-white px-1 py-1">
                        <Image src="/upwork.svg" alt="upwork" className="w-3 h-3 rounded-full" width={20} height={20} />
                      </span>
                      <span
                        className="group-hover:opacity-100 transition-opacity bg-gray-800 text-xs text-gray-100 rounded-sm opacity-0 fixed left-1/2 translate-x-4/2 translate-y-1/2 mx-2 pt-1 h-[4rem]">
                        Upwork makes it simple to collaborate, also you can build your project with professional.
                      </span>
                    </div>

                  </Dialog.Title>
                  <div className="mt-12 text-left">
                    <Link href="https://www.upwork.com/freelancers/~01951719be596bc335/?ref=IkhsanNHuda" target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="inline-flex justify-center w-[7rem] px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                      >
                        Let`s dig in.
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default IconMeet;
