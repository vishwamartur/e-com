"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Classic Black Tee",
    price: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "mens"
  },
  {
    id: 2,
    name: "White Essential",
    price: 499,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
    category: "mens"
  },
  {
    id: 3,
    name: "Graphic Print Tee",
    price: 799,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01",
    category: "unisex"
  },
  {
    id: 4,
    name: "Summer Collection",
    price: 699,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    category: "womens"
  },
]

export function ProductGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card 
          key={product.id}
          className="group relative overflow-hidden"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <CardContent className="p-0">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 p-4">
            <div className="flex justify-between items-center w-full">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm">₹{product.price}</p>
            </div>
            <Button 
              className={`w-full transition-opacity duration-300 ${
                hoveredId === product.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}