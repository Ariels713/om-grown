/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "What is Biophilic Design?",
    answer:
      "Biophilic design is a concept used within the building industry to increase occupant connectivity to the natural environment through the use of direct nature, indirect nature, and space and place conditions. Om Grown Moss walls brighten any room or space and create a positive environment. While plants are also known to have the same effect, we are unique in that all of our pieces are maintenance-free, no green thumb needed!",
  },
  {
    id: 2,
    question:
      "What is the difference between a living wall and a preserved moss wall?",
    answer:
      "Living walls are made up of plants that require irrigation and proper light requirements to thrive. These walls can be expensive and require ongoing maintenance. Preserved moss walls are cost effective and low maintenance (although some will need to be misted in dry climates) and do not require special lighting. No green thumb necessary!",
  },
  {
    id: 3,
    question: "Is It Read Moss",
    answer:
      "Yes! The moss is real and has undergone a delicate process to be preserved.",
  },
  {
    id: 4,
    question: "How long does it last?",
    answer:
      "The pieces will last anywhere between 5-10 years depending on the humidity levels and lighting within the space. We guarantee our pieces, and will send replacement moss or (if you're in the Colorado area) we will come to you for a free touch up!",
  },
  {
    id: 5,
    question: "Does it need water or sunlight?",
    answer:
      "No! All of our pieces are to be kept out of direct sunlight and require no watering. A normal light dusting every now and again will do! Our pieces are for indoor use only, but we have amazing referrals for you if you're interested in an outdoor living wall!",
  },
  {
    id: 6,
    question: "Are there different color options?",
    answer:
      "Of course! Our color options range from natural colors of lush shades of greens to all the colors of the rainbow! We recently did an 8.5 ft. tall piece with ocean blues that we are obsessed with!",
  },
  {
    id: 7,
    question: "Will you install the piece?",
    answer:
      "We sure will! We will gladly install your mossterpiece depending on the size of the project and where you're located. If we are shipping a piece, hardware will be included to install.",
  },
  // More questions...
]

export default function faq() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt className="text-base font-medium text-gray-900 md:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
