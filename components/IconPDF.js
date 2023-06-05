import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import IconTwo from './IconTwo'
import dynamic from 'next/dynamic'

const IconPDF = () => {
  const [isOpen, setIsOpen] = useState(false)
  const PDFViewer = dynamic(() => import("../components/PDFViewer"), {ssr: false})

  function closeModal() {setIsOpen(false)}
  function openModal() {setIsOpen(true)}

  return (
    <>
      <div onClick={openModal}>
        <IconTwo />
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
            <div className="fixed inset-0 bg-black bg-opacity-90" />
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
                <Dialog.Panel className="w-[40rem] transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <br />
                    <button
                      type="button"
                      className="absolute top-0 right-0 mt-4 mr-4"
                      onClick={closeModal}
                    > Close
                    </button>
                  </div>
                  <PDFViewer />

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default IconPDF;