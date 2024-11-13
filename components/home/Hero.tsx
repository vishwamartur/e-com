import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
          alt="T-shirt collection"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Premium T-Shirts for Every Style
          </h1>
          <p className="text-lg mb-6">
            Discover our collection of comfortable and stylish t-shirts made in India
          </p>
          <Link href="/collections/new-arrivals">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}