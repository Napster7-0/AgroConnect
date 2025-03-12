"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-600">AgroConnect</span>
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Fonctionnalités</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <ListItem href="/suivi-cultures" title="Suivi des cultures">
                        Suivez l&apos;évolution de vos plantations et détectez les maladies
                      </ListItem>
                      <ListItem href="/cartographie" title="Cartographie">
                        Analysez la qualité de vos sols avec des données géospatiales
                      </ListItem>
                      <ListItem href="/agrotrade" title="AgroTrade">
                        Optimisez la commercialisation de vos produits agricoles
                      </ListItem>
                      <ListItem href="/agrolink" title="AgroLink">
                        Connectez-vous avec d&apos;autres agriculteurs et des sponsors
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Tarifs</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>À propos</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex md:items-center md:gap-2">
            <ModeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link href="#">Se connecter</Link>
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="#">S&apos;inscrire</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  <Link href="#" className="text-lg font-medium">
                    Fonctionnalités
                  </Link>
                  <Link href="#" className="text-lg font-medium">
                    Tarifs
                  </Link>
                  <Link href="#" className="text-lg font-medium">
                    À propos
                  </Link>
                  <Link href="#" className="text-lg font-medium">
                    Contact
                  </Link>
                  <Link href="/agrolink" className="text-lg font-medium">
                    AgroLink
                  </Link>
                  <Link href="/suivi-cultures" className="text-lg font-medium">
                    Suivi des cultures
                  </Link>
                  <Link href="/cartographie" className="text-lg font-medium">
                    Cartographie
                  </Link>
                  <Link href="/agrotrade" className="text-lg font-medium">
                    AgroTrade
                  </Link>
                  <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="#">Se connecter</Link>
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700" asChild>
                      <Link href="#">S&apos;inscrire</Link>
                    </Button>
                    <div className="mt-2">
                      <ModeToggle />
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

