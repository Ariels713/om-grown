import Link from "next/link"
const products = [
  {
    id: 1,
    name: "Notebook and Pen",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$20",
    color: "Black",
  },
  {
    id: 2,
    name: "Pen and Pencil Holder",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/5797900/pexels-photo-5797900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$20",
    color: "White",
  },
  {
    id: 3,
    name: "Marker Set",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/5848541/pexels-photo-5848541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$8",
    color: "Assorted",
  },
  {
    id: 4,
    name: "Clipboard",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$15",
    color: "Wooden",
  },
]
const wallArt = [
  {
    id: 1,
    name: "Wall Pad",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imageAlt: "Image of notebook and pen",
    price: "$35",
    color: "Black and Wooden",
  },
  {
    id: 2,
    name: "Barbed Wire Love",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/2110937/pexels-photo-2110937.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$175",
    color: "Black and Gold",
  },
  {
    id: 3,
    name: "Mondraian Style Artwork",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/310446/pexels-photo-310446.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$800",
    color: "Red & White",
  },
  {
    id: 4,
    name: "Neon Sign",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/2613874/pexels-photo-2613874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$125",
    color: "Soft Pink Neon Light",
  },
]
const accessories = [
  {
    id: 1,
    name: "Vintage Glasses",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$25",
    color: "Gold",
  },
  {
    id: 2,
    name: "Alarm Clock",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/5412086/pexels-photo-5412086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$45",
    color: "Yellow and White",
  },
  {
    id: 3,
    name: "Linen Bag",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/880459/pexels-photo-880459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$16",
    color: "Linen",
  },
  {
    id: 4,
    name: "Guitar Pin",
    href: "/featuredProduct",
    imageSrc:
      "https://images.pexels.com/photos/7667657/pexels-photo-7667657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Image of notebook and pen",
    price: "$12",
    color: "Red",
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-darkgreen border-b">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Desk Items
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-darkgreen border-b">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Wall Art
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {wallArt.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Accessories
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {accessories.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
