const posts = [
  {
    name: "Colleen Kennedy ",
    href: "#",
    category: {
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Colleen Kennedy, founder and CEO of Om Grown, grew up with a passion for plants and exploring the outdoors. She always had a goal of connecting people back to nature. A proud Veteran of the United States Navy, Colleen now shares her excitement for nature by providing the beauty of the outdoors, indoors. Colleen is a recent graduate of Colorado State University and was voted &quot;Entrepreneur&quot; in NOCO Style Magazines, Top 30 Under 30 category. She also enjoys yoga, Crossfit, hiking, and a good taco Tuesday.",
    date: "Mar 16, 2020",
    title: "CEO",
    author: {
      name: "CEO",
      href: "#",
      imageUrl: "https://om-grown.com/files/2021/09/Image.jpg?w=316&h=316&a=t",
    },
  },
  {
    name: "Ryan Castro",
    href: "#",
    category: { href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Ryan Castro, Chief Operations Officer, has a background in Art and Conceptual Design. Ryan grew up drawing, painting, and creating. His passion and creativity help bring any vision to life! He enjoys working out, anything outdoors, Dwight Schrute from The Office, and a good cup of coffee.",
    date: "Mar 10, 2020",
    title: "COO",
    author: {
      name: "COO",
      href: "#",
      imageUrl:
        "https://om-grown.com/files/2021/09/1631128943814_fullsizerender_jpg.jpg?w=316&h=316&a=t",
    },
  },
  {
    name: "Watson",
    href: "#",
    category: {
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Watson, Chief Morale Officer, is a rescue pup from Texas. His background includes being a well-behaved boy, burying sticks, eating snow, and being extremely boopable. When asked to give a statement on his position here at Om Grown he replied, &quot; &quot;I&apos;d like to thank God (because it&apos;s just &apos;dog&apos; spelled backwards, duh) and my parents for the opportunity to keep morale high. Be sure to boop my nose and scratch right behind my ears when you see me.&quot; ",
    date: "Feb 12, 2020",
    title: "CMO",
    author: {
      name: "CMO",
      href: "#",
      imageUrl:
        "https://om-grown.com/files/2021/09/1631128958234_img_8918_edited.jpg?w=316&h=316&a=t",
    },
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <div className="bg-pink pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Om Grown is a Veteran owned and female founded business, that
            provides biophilic design and conceptual art options that seamlessly
            bring nature into indoor spaces.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.name}>
              <a href={post.href} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  {post.name}
                </p>
                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                  {post.description}
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img
                      className="h-28 w-28 rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.title}>{post.date}</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
