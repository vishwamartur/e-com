"use client"

import { ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <MobileNav />
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="text-xl font-bold">
            TrendyTees
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/collections/new-arrivals" className="px-3 py-2">
                  New Arrivals
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/collections/mens" className="px-3 py-2">
                  Men
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/collections/womens" className="px-3 py-2">
                  Women
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Link href="/collections/new-arrivals" className="px-2 py-1">
        New Arrivals
      </Link>
      <Link href="/collections/mens" className="px-2 py-1">
        Men
      </Link>
      <Link href="/collections/womens" className="px-2 py-1">
        Women
      </Link>
    </div>
  )
}