const collections = [
  {
    name: "Cactus Terrarium",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/4507718/pexels-photo-4507718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "image of a terrarium",
    price: "$96",
  },
]
function NewestItems() {
  return (
    <div className="bg-beige">
      <section
        aria-labelledby="collection-heading"
        className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2
          id="collection-heading"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          Shop by Collection
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
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
