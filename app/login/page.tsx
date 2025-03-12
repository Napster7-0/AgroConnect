"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler un délai de chargement
    setTimeout(() => {
      login(formData.email, formData.password)
      setIsLoading(false)
      router.push("/")
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center max-w-md mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-2 bg-green-600">Connexion</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bienvenue sur AgroConnect</h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Connectez-vous pour accéder à votre tableau de bord et optimiser votre exploitation agricole.
              </p>
            </div>

            <Card className="w-full">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Connexion</CardTitle>
                  <CardDescription>Entrez vos identifiants pour vous connecter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Link href="#" className="text-sm text-green-600 hover:underline">
                        Mot de passe oublié?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                    {isLoading ? "Connexion en cours..." : "Se connecter"}
                  </Button>
                  <div className="text-center text-sm">
                    Vous n'avez pas de compte?{" "}
                    <Link href="/register" className="text-green-600 hover:underline">
                      Créer un compte
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

