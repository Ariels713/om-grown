import Head from "next/head"
import Link from "next/link"
import { Fragment, useState } from "react"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import MenuIcon from "./MenuIcon"
import ShoppingBag from "./ShoppingBag"
import ExitIcon from "./ExitIcon"
import OmLogo from "./OMLogo"
import OmGrownFont from "./OmGrownFont"
import MainHero from "../mainHero/MainHero"

const navigation = {
  categories: [
    {
      id: "services",
      name: "Services",
      featured: [
        {
          name: "The Galleria",
          href: "#",
          imageSrc:
            "https://om-grown.com/files/2021/09/bigstock-Stabilized-Green-Moss-On-The-W-320416615.jpg?w=1440&h=1440&a=t",
          imageAlt: "Sample Image from Om-Grown Website",
        },
        {
          name: "Google Wall Installation",
          href: "#",
          imageSrc:
            "https://om-grown.com/files/2021/09/bigstock-Generic-Concept-Image-Of-Decor-265146862.jpg?w=1440&h=1440&a=t",
          imageAlt: "Sample Image from Om-Grown Website",
        },
      ],
      sections: [
        {
          id: "commercial",
          name: "Commercial Projects",
          items: [
            { name: "Tesla", href: "#" },
            { name: "Nasa", href: "#" },
            { name: "Google", href: "#" },
            { name: "Levis", href: "#" },
            { name: "Pintrest", href: "#" },
            { name: "Ebay", href: "#" },
            { name: "GM", href: "#" },
          ],
        },
        {
          id: "residential",
          name: "Residential Projects",
          items: [
            { name: "The Bellvue", href: "#" },
            { name: "The Views", href: "#" },
            { name: "Envy Homes", href: "#" },
            { name: "Park View", href: "#" },
            { name: "River View", href: "#" },
            { name: "Mavericks", href: "#" },
          ],
        },
        {
          id: "weddings",
          name: "Weddings",
          items: [
            { name: "The Mayfairs", href: "#" },
            { name: "The Smiths", href: "#" },
            { name: "The Riveras", href: "#" },
            { name: "The Shrutes", href: "#" },
            { name: "The Scotts", href: "#" },
          ],
        },
        // {
        //   id: "custom",
        //   name: "Custom Pojects",
        //   items: [
        //     { name: "The Navy Yard", href: "#" },
        //     { name: "The Gallaria", href: "#" },
        //     { name: "La Sennica", href: "#" },
        //   ],
        // },
      ],
    },
    {
      id: "shop",
      name: "Shop Now",
      featured: [
        {
          name: "Shop Vases",
          href: "#",
          imageSrc:
            "https://images.pexels.com/photos/7354797/pexels-photo-7354797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          imageAlt: "Sample Image from Om-Grown Website",
        },
        {
          name: "Shop Arial Plants",
          href: "#",
          imageSrc:
            "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          imageAlt: "Sample Image from Om-Grown Website",
        },
      ],
      sections: [
        {
          id: "moss",
          name: "Desk Items",
          items: [
            { name: "Mini Mosss", href: "#" },
            { name: "Tranquility Items", href: "#" },
            { name: "Pen Holders", href: "#" },
            { name: "Scents", href: "#" },
          ],
        },
        {
          id: "walls",
          name: "Wall Art",
          items: [
            { name: "The Classic", href: "#" },
            { name: "Standing Moss Wall", href: "#" },
            { name: "Haning Moss", href: "#" },
            { name: "Multi Colored Pieces ", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Moss Kits", href: "#" },
            { name: "Trimming Kits", href: "#" },
            { name: "Spray Bottles", href: "#" },
            { name: "Vases", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "About Us", href: "aboutUs" },
    { name: "Gallery", href: "#" },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                  <ExitIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <div className="border-t border-lightgreen py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 p-2 block font-medium text-darkgreen"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-lightgreen">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-indigo-600 border-indigo-600"
                              : "text-darkgreen border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block font-medium text-darkgreen"
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-darkgreen"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-2 p-2 block text-gray-500"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-lightgreen py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 p-2 block font-medium text-darkgreen"
                  >
                    FAQ
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 p-2 block font-medium text-darkgreen"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="bg-lightgreen h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 "
        >
          <div className="border-b border-lightgreen">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 items-center">
                <Link href="/">
                  <a>
                    <span className="sr-only">OM-Grown Logo</span>
                    <OmLogo />
                  </a>
                  {/* <p className="text-darkgreen text-4xl ml-4">OM-GROWN</p> */}
                </Link>
                <Link href="/">
                  <a>
                    <OmGrownFont />
                  </a>
                </Link>
              </div>

              {/* Flyout menus */}

              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch ">
                <div className="h-full flex space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex ">
                      {({ open }) => (
                        <>
                          <div className="relative flex ">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-darkgreen"
                                          >
                                            <span
                                              className="absolute z-10 inset-0"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-darkgreen"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    FAQ
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a className="group -m-2 p-2 flex items-center">
                    <ShoppingBag />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
