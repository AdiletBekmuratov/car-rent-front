// @ts-ignore
import HoverEffect from 'hover-effect'
import React, { useEffect } from 'react'

export const SupportPanel = () => {
  useEffect(() => {
    let animation = new HoverEffect({
      parent: document.querySelector('#image_container'),
      intensity: 0.3,
      image1:
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      image2:
        'https://images.unsplash.com/photo-1522255272218-7ac5249be344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      displacementImage:
        'https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg',
    })
  }, [])
  return (
    <>
      <div>
        <title>Support | Qazaq Study</title>
      </div>
      <section className="relative flex min-h-screen">
        <div className="flex min-w-0 flex-auto flex-col items-center bg-white sm:flex-row sm:justify-center md:items-start md:justify-start">
          <div className="flex h-full w-full items-center justify-center rounded-none bg-white p-5 sm:w-auto sm:rounded-lg md:w-1/2 md:p-10 ">
            <div className="w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Contact Us!
                </h2>
              </div>
              <form className="mx-auto flex w-full max-w-lg flex-col space-y-4">
                <div className="relative">
                  <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                    Email
                  </label>
                  <input
                    name="email"
                    className="w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                    type="email"
                    placeholder="mail@example.com"
                  />
                </div>
                <div className="content-center">
                  <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                    Name
                  </label>
                  <input
                    name="name"
                    className="w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="content-center">
                  <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                    Phone
                  </label>
                  <input
                    className="focus:shadow"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="content-center">
                  <label className="ml-3 text-sm font-bold tracking-wide text-gray-700 ">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="name"
                    className="w-full resize-none rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="md:flex md:items-center">
                  <button className='w-full' type="button">Send</button>
                </div>
              </form>
            </div>
          </div>

          <div
            id="image_container"
            className="relative hidden h-full w-full flex-auto items-center justify-center overflow-hidden text-white md:flex md:w-1/2"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-blue to-light-blue opacity-70" />
            <div className="absolute z-10 w-full max-w-md">
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
