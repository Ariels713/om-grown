import Link from "next/link"
const products = [
  {
    id: 1,
    name: "Potted Plants",
    color: "Natural",
    price: "$25",
    href: "/shopnow",
    imageSrc:
      "https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Cactus",
    color: "Natural",
    price: "$25",
    href: "/shopnow",
    imageSrc:
      "https://images.pexels.com/photos/595103/pexels-photo-595103.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 3,
    name: "Vases",
    color: "Natural",
    price: "$15",
    href: "/shopnow",
    imageSrc:
      "https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 4,
    name: "Moss Plants",
    color: "Natural",
    price: "$35",
    href: "/shopnow",
    imageSrc:
      "https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-beige">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Trending products
          </h2>
          <Link href="/shopnow">
            <a className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
              Shop the collection<span aria-hidden="true"> &rarr;</span>
            </a>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <Link href={`/${product.href}`}>
                  <a>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
