import { ProductGrid } from "@/components/products/ProductGrid"
import { Hero } from "@/components/home/Hero"
import { FeaturedCategories } from "@/components/home/FeaturedCategories"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <ProductGrid />
      </section>
    </div>
  )
}