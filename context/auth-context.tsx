"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  farmName?: string
  profileImage?: string
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => void
  register: (userData: any) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté (localStorage)
    const storedUser = localStorage.getItem("agroconnect-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = (email: string, password: string) => {
    // Récupérer les utilisateurs enregistrés
    const users = JSON.parse(localStorage.getItem("agroconnect-users") || "[]")

    // Trouver l'utilisateur correspondant à l'email
    const foundUser = users.find((u: any) => u.email === email)

    if (foundUser) {
      // Dans une vraie application, on vérifierait le mot de passe ici
      // Mais comme demandé, on ne fait pas de vérification
      setUser({
        id: foundUser.id,
        name: foundUser.firstName + " " + foundUser.lastName,
        email: foundUser.email,
        farmName: foundUser.farmName,
        profileImage: foundUser.profileImage,
      })

      // Stocker l'utilisateur dans localStorage
      localStorage.setItem(
        "agroconnect-user",
        JSON.stringify({
          id: foundUser.id,
          name: foundUser.firstName + " " + foundUser.lastName,
          email: foundUser.email,
          farmName: foundUser.farmName,
          profileImage: foundUser.profileImage,
        }),
      )
    } else {
      // Si l'utilisateur n'existe pas, on le crée automatiquement (pour la démo)
      const newUser = {
        id: Date.now().toString(),
        firstName: "Utilisateur",
        lastName: "Test",
        email: email,
        farmName: "Ferme Test",
      }

      users.push(newUser)
      localStorage.setItem("agroconnect-users", JSON.stringify(users))

      setUser({
        id: newUser.id,
        name: newUser.firstName + " " + newUser.lastName,
        email: newUser.email,
        farmName: newUser.farmName,
      })

      localStorage.setItem(
        "agroconnect-user",
        JSON.stringify({
          id: newUser.id,
          name: newUser.firstName + " " + newUser.lastName,
          email: newUser.email,
          farmName: newUser.farmName,
        }),
      )
    }
  }

  const register = (userData: any) => {
    // Générer un ID unique
    const userId = Date.now().toString()

    // Créer l'objet utilisateur
    const newUser = {
      id: userId,
      ...userData,
    }

    // Récupérer les utilisateurs existants
    const users = JSON.parse(localStorage.getItem("agroconnect-users") || "[]")

    // Ajouter le nouvel utilisateur
    users.push(newUser)

    // Sauvegarder dans localStorage
    localStorage.setItem("agroconnect-users", JSON.stringify(users))

    // Connecter l'utilisateur
    setUser({
      id: userId,
      name: userData.firstName + " " + userData.lastName,
      email: userData.email,
      farmName: userData.farmName,
      profileImage: userData.profileImage,
    })

    localStorage.setItem(
      "agroconnect-user",
      JSON.stringify({
        id: userId,
        name: userData.firstName + " " + userData.lastName,
        email: userData.email,
        farmName: userData.farmName,
        profileImage: userData.profileImage,
      }),
    )
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("agroconnect-user")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

