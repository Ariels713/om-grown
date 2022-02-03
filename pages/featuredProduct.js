import PlusIcon from "../components/newestItems/PlusIcon"
import MinusIcon from "../components/newestItems/MinusIcon"
import { useState } from "react"
import { Disclosure, RadioGroup, Tab } from "@headlessui/react"
// import { StarIcon } from "@heroicons/react/solid"
// import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline"

const product = {
  name: "Terrarium",
  price: "$90",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Side View",
      src: "https://images.pexels.com/photos/1400375/pexels-photo-1400375.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      alt: "Image of Terrarium",
    },
    {
      id: 2,
      name: "Upper View",
      src: "https://images.pexels.com/photos/1466434/pexels-photo-1466434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Image of Terrarium",
    },
    {
      id: 1,
      name: "Side View",
      src: "https://images.pexels.com/photos/4650144/pexels-photo-4650144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Image of Terrarium",
    },
    {
      id: 2,
      name: "Upper View",
      src: "https://images.pexels.com/photos/4650143/pexels-photo-4650143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Image of Terrarium",
    },
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Living Plants and Moss",
        "Assembled by hand",
        "Light Care",
        "Minimal Sun exposure",
      ],
    },
    {
      name: "Care",
      items: ["Water Once Weekly", "Spray with water", "Do Not Eat"],
    },
    {
      name: "Shipping",
      items: [
        "Shipped in a cloud container",
        "Shipped Via FedEX",
        "Overnight Shipping Available",
      ],
    },
    {
      name: "Returns",
      items: ["Beets, Bears, Battlestar Galactica "],
    },
    // More sections...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img
                            src={image.src}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-indigo-500" : "ring-transparent",
                            "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {product.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>

            {/* Reviews */}
            {/* <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-indigo-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div> */}

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-darkgreen border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                >
                  Add to bag
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                            <span
                              className={classNames(
                                open ? "text-indigo-600" : "text-gray-900",
                                "text-sm font-medium"
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? <MinusIcon /> : <PlusIcon />}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="pb-6 prose prose-sm"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  style={{ display: "inline-block" }}
                                  className="mr-4"
                                >
                                  <title>check</title>
                                  <g fill="#000000">
                                    <path
                                      d="M10.293,1.293,4,7.586,1.707,5.293A1,1,0,0,0,.293,6.707l3,3a1,1,0,0,0,1.414,0l7-7a1,1,0,0,0-1.414-1.414Z"
                                      fill="#000000"
                                    ></path>
                                  </g>
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
