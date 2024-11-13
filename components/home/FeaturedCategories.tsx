export function FeaturedCategories() {
  const categories = [
    {
      name: "Men's Collection",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c",
      href: "/collections/mens"
    },
    {
      name: "Women's Collection",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      href: "/collections/womens"
    },
    {
      name: "Graphic Tees",
      image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01",
      href: "/collections/graphic-tees"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.href}
            className="relative group overflow-hidden rounded-lg"
          >
            <div className="aspect-w-3 aspect-h-2">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}