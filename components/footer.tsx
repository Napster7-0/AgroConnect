import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">AgroConnect</h3>
            <p className="text-green-100">
              La plateforme numérique qui révolutionne l&apos;agriculture au Cameroun en connectant agriculteurs,
              experts et entreprises agroalimentaires.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-100 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 text-sm font-semibold">Inscrivez-vous à notre newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full rounded-l-md border-0 bg-white/10 px-3 py-2 text-white placeholder:text-green-200"
                />
                <button className="rounded-r-md bg-green-600 px-3 py-2 font-medium hover:bg-green-700">
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-green-800 pt-8 text-center text-sm text-green-100">
          <p>© {new Date().getFullYear()} AgroConnect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

