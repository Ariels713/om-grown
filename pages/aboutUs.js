const people = [
  {
    name: "Colleen Kennedy",
    role: "CEO",
    imageUrl: "https://om-grown.com/files/2021/09/Image.jpg?w=316&h=316&a=t",
    bio: "Colleen Kennedy, founder and CEO of Om Grown, grew up with a passion for plants and exploring the outdoors. She always had a goal of connecting people back to nature. A proud Veteran of the United States Navy, Colleen now shares her excitement for nature by providing the beauty of the outdoors, indoors. Colleen is a recent graduate of Colorado State University and was voted &quot;Entrepreneur&quot; in NOCO Style Magazines, Top 30 Under 30 category. She also enjoys yoga, Crossfit, hiking, and a good taco Tuesday.",
  },
  {
    name: "Ryan Castro",
    role: "COO",
    imageUrl:
      "https://om-grown.com/files/2021/09/1631128943814_fullsizerender_jpg.jpg?w=316&h=316&a=t",
    bio: "Ryan Castro, Chief Operations Officer, has a background in Art and Conceptual Design. Ryan grew up drawing, painting, and creating. His passion and creativity help bring any vision to life! He enjoys working out, anything outdoors, Dwight Schrute from The Office, and a good cup of coffee.",
  },
  {
    name: "Watson",
    role: "Chief Morale Officer ",
    imageUrl:
      "https://om-grown.com/files/2021/09/1631128958234_img_8918_edited.jpg?w=316&h=316&a=t",
    bio: "Om Grown is a Veteran owned and female founded business, that provides biophilic design and conceptual art options that seamlessly bring nature into indoor spaces. We use naturally-sourced, preserved materials that are harvested by small farms in the United States. Our passion as a business sprouts from biophilic design. By using preserved materials such as varying types of moss, ferns, and flowers we create beautiful interior landscapes for commercial and residential spaces.",
  },
  // More people...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About Us
            </h2>
            <p className="text-xl text-gray-500">
              Om Grown is a Veteran owned and female founded business, that
              provides biophilic design and conceptual art options that
              seamlessly bring nature into indoor spaces. We use
              naturally-sourced, preserved materials that are harvested by small
              farms in the United States. Our passion as a business sprouts from
              biophilic design. By using preserved materials such as varying
              types of moss, ferns, and flowers we create beautiful interior
              landscapes for commercial and residential spaces.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
