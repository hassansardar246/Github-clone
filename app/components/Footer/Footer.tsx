"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
type Props = {};

const Footer = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="footer relative pt-14 break-words ">
        <div className="max-w-[1280px] mx-auto relative z-[2] overflow-hidden">
          <div className="flex flex-col lg:flex-row py-10 mb-8 space-x-6 px-4">
            <div className="mb-12 px-2">
              <a
                href="/"
                data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
                className="color-fg-default d-inline-block"
                aria-label="Go to GitHub homepage"
              >
                <svg
                  height="30"
                  aria-hidden="true"
                  viewBox="0 0 45 16"
                  fill="currentColor"
                  version="1.1"
                  width="84"
                  data-view-component="true"
                  className="text-white"
                >
                  <path d="M8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17Zm35.85 2.33c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88ZM27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.177.177 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16-.1.05-.74.22-1.27.22-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83.247 0 .481-.049.574-.05ZM12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25ZM11.19 2.68c.75 0 1.36.61 1.36 1.38 0 .77-.61 1.38-1.36 1.38-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38Zm7.34 9.35v.001l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z"></path>
                </svg>
              </a>
              <div className="text-white">
                <h2 className="mt-6 font-semibold">
                  Subscribe to our newsletter
                </h2>
                <p className="text-[14px] text-[#7d8590] mb-6 ">
                  Get product updates, company news, and more.
                </p>
                <a
                  href=""
                  className="mb-6 px-6 py-3 text-[17px] font-semibold border-[0.5px] border-gray-400 rounded-lg"
                >
                  Subscribe
                </a>
              </div>
            </div>
            <div className="lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-6">
              <div className="text-[#7d8590]">
                <h2 className="font-medium mb-4 font-mono">Product</h2>
                <ul className="text-[14px]">
                  <li className="mb-4">
                    <a href="">Features</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Security</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Team</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Enterprise</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Custom Stories</a>
                  </li>
                  <li className="mb-4">
                    <a href="">The ReadME Project</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Pricing</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Resources</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Roadmap</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Compare GitHub</a>
                  </li>
                </ul>
              </div>
              <div className="text-[#7d8590]">
                <h2 className="font-medium mb-4 font-mono">Platform</h2>
                <ul className="text-[14px]">
                  <li className="mb-4">
                    <a href="">Developer API</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Partners</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Electron</a>
                  </li>
                  <li className="mb-4">
                    <a href="">GitHub Desktop</a>
                  </li>
                </ul>
              </div>
              <div className="text-[#7d8590]">
                <h2 className="font-medium mb-4 font-mono">Product</h2>
                <ul className="text-[14px]">
                  <li className="mb-4">
                    <a href="">Docs</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Community Forum</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Professional Services</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Premium Support</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Skill</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Status</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Contact GitHub</a>
                  </li>
                </ul>
              </div>
              <div className="text-[#7d8590]">
                <h2 className="font-medium mb-4 font-mono">Company</h2>
                <ul className="text-[14px]">
                  <li className="mb-4">
                    <a href="">About</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Blog</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Careers</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Press</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Inclusion</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Social Impact</a>
                  </li>
                  <li className="mb-4">
                    <a href="">Shop</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#161b22]">
          <div className="max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4">
            <ul className="flex items-center max-md:mb-4  ">
              <li className="mr-4">
                <a href="">
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg"
                    height="18"
                    width="22"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                  />
                </a>
              </li>
              <li className="mr-4">
                <a href="">
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"
                    height="18"
                    width="22"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                  />
                </a>
              </li>
              <li className="mr-4">
                <a href="">
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"
                    height="18"
                    width="22"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                  />
                </a>
              </li>
              <li className="mr-4">
                <a href="">
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg"
                    height="18"
                    width="22"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                  />
                </a>
              </li>
              <li className="mr-4">
                <a href="">
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/twitch.svg"
                    height="18"
                    width="22"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                  />
                </a>
              </li>
              <li className="mr-4">
                <a href="">
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/tiktok.svg"
                    height="18"
                    width="22"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                    height="18"
                    width="22"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                  />
                </a>
              </li>
            </ul>
            <ul className="flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap">
              <li className="mr-3 ">© 2023 GitHub, Inc.</li>
              <li className="mr-3 ">
                <a href="">Terms</a>
              </li>
              <li className="mr-3 ">
                <a href="">Privacy (Updated 08/2022)</a>
              </li>
              <li className="mr-3 ">
                <a href="">Sitemap</a>
              </li>
              <li className="mr-3 ">
                <a href="">What is Git?</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="fixed bottom-0 z-20 right-0 right-5 flex items-center justify-center gap-3">
          <a
            href="/chat"
            className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                   rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
          >
            <div className="p-3 flex items-center gap-4 justify-center rounded-full border-4 border-white bg-green-600">
              Chat with AI
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://g.dev/Luis-Ai-Engineer"
            className=" text-white flex flex-col shrink-0 grow-0 justify-around 
                   rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
          >
            <div className="">
              <Image
                src="/simple-bottom-logo.png"
                width={40}
                height={40}
                alt="chat"
              />
            </div>
          </a>
          <span
            onClick={() => setOpen(true)}
            className="cursor-pointer text-white flex flex-col shrink-0 grow-0 justify-around 
                   rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
          >
            <div className="">
              <Image src="/qr-code1.png" width={40} height={40} alt="chat" />
            </div>
          </span>
        </div>
      </div>
      <Transition show={open}>
        <Dialog className="relative z-10" onClose={setOpen}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <Image
                        className="mx-auto h-auto w-full"
                        src={"/qr-code.png"}
                        width={200}
                        height={200}
                        alt="chat"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      data-autofocus
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Footer;
