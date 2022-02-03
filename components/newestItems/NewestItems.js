const collections = [
  {
    name: "Cactus Terrarium",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/4507718/pexels-photo-4507718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "image of a terrarium",
    price: "$96",
  },
  {
    name: "Rose Terrarium",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/1400375/pexels-photo-1400375.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "image of a terrarium",
    price: "$120",
  },
  {
    name: "Drift Wood Terrarium",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/1466434/pexels-photo-1466434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "image of a terrarium",
    price: "$70",
  },
]
function NewestItems() {
  return (
    <div className="bg-pink">
      <section
        aria-labelledby="collection-heading"
        className="max-w-xl mx-auto pb-8 pt-24 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2
          id="collection-heading"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          Shop our latest pieces
        </h2>
        <p className="mt-4 text-base text-gray-500">
          It&apos;s easy to bring the beauty and tranquility of nature into your
          space with a custom moss wall from our family-owned business.
        </p>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {collections.map((collection) => (
            <a
              key={collection.name}
              href={collection.href}
              className="group block"
            >
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <img
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {collection.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {collection.description} {collection.price}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default NewestItems
