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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { MapPin, User, TractorIcon as Farm, Tractor, Leaf } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    region: "",

    // Informations sur l'exploitation
    farmName: "",
    farmSize: "",
    farmType: "",
    farmLocation: "",
    farmExperience: "",

    // Types de cultures
    crops: [] as string[],
    livestock: [] as string[],

    // Équipements
    equipment: [] as string[],
    irrigationSystem: "",

    // Informations supplémentaires
    soilType: "",
    certifications: [] as string[],
    challenges: "",
    goals: "",

    // Préférences
    marketingChannels: [] as string[],
    techLevel: "",
    trainingInterest: [] as string[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      if (checked) {
        return { ...prev, [name]: [...(prev[name as keyof typeof prev] as string[]), value] }
      } else {
        return {
          ...prev,
          [name]: (prev[name as keyof typeof prev] as string[]).filter((item) => item !== value),
        }
      }
    })
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    register(formData)
    router.push("/")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-2 bg-green-600">Inscription</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Rejoignez la communauté AgroConnect
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                Créez votre compte pour accéder à toutes les fonctionnalités et optimiser votre exploitation agricole.
              </p>
            </div>

            <div className="w-full mb-8">
              <div className="flex justify-between items-center">
                <div className={`flex flex-col items-center ${step >= 1 ? "text-green-600" : "text-gray-400"}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-green-600 bg-green-50" : "border-gray-300"}`}
                  >
                    <User className="h-5 w-5" />
                  </div>
                  <span className="text-sm mt-1">Profil</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-green-600" : "bg-gray-300"}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? "text-green-600" : "text-gray-400"}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-green-600 bg-green-50" : "border-gray-300"}`}
                  >
                    <Farm className="h-5 w-5" />
                  </div>
                  <span className="text-sm mt-1">Exploitation</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-green-600" : "bg-gray-300"}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? "text-green-600" : "text-gray-400"}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-green-600 bg-green-50" : "border-gray-300"}`}
                  >
                    <Leaf className="h-5 w-5" />
                  </div>
                  <span className="text-sm mt-1">Cultures</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 4 ? "bg-green-600" : "bg-gray-300"}`}></div>
                <div className={`flex flex-col items-center ${step >= 4 ? "text-green-600" : "text-gray-400"}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 4 ? "border-green-600 bg-green-50" : "border-gray-300"}`}
                  >
                    <Tractor className="h-5 w-5" />
                  </div>
                  <span className="text-sm mt-1">Équipement</span>
                </div>
              </div>
            </div>

            <Card className="w-full">
              <form onSubmit={handleSubmit}>
                {/* Étape 1: Informations personnelles */}
                {step === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle>Informations personnelles</CardTitle>
                      <CardDescription>Parlez-nous de vous pour personnaliser votre expérience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
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
                        <Label htmlFor="password">Mot de passe *</Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Numéro de téléphone</Label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Input id="address" name="address" value={formData.address} onChange={handleChange} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">Ville</Label>
                          <Input id="city" name="city" value={formData.city} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="region">Région</Label>
                          <Select
                            value={formData.region}
                            onValueChange={(value) => handleSelectChange("region", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez votre région" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="centre">Centre</SelectItem>
                              <SelectItem value="littoral">Littoral</SelectItem>
                              <SelectItem value="ouest">Ouest</SelectItem>
                              <SelectItem value="nord">Nord</SelectItem>
                              <SelectItem value="sud">Sud</SelectItem>
                              <SelectItem value="est">Est</SelectItem>
                              <SelectItem value="nord-ouest">Nord-Ouest</SelectItem>
                              <SelectItem value="sud-ouest">Sud-Ouest</SelectItem>
                              <SelectItem value="adamaoua">Adamaoua</SelectItem>
                              <SelectItem value="extreme-nord">Extrême-Nord</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" type="button" asChild>
                        <Link href="/login">J'ai déjà un compte</Link>
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                        Suivant
                      </Button>
                    </CardFooter>
                  </>
                )}

                {/* Étape 2: Informations sur l'exploitation */}
                {step === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle>Informations sur votre exploitation</CardTitle>
                      <CardDescription>Parlez-nous de votre exploitation agricole</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="farmName">Nom de l'exploitation *</Label>
                        <Input
                          id="farmName"
                          name="farmName"
                          value={formData.farmName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="farmSize">Taille de l'exploitation (hectares) *</Label>
                          <Input
                            id="farmSize"
                            name="farmSize"
                            type="number"
                            value={formData.farmSize}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="farmType">Type d'exploitation *</Label>
                          <Select
                            value={formData.farmType}
                            onValueChange={(value) => handleSelectChange("farmType", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez le type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="familiale">Exploitation familiale</SelectItem>
                              <SelectItem value="commerciale">Exploitation commerciale</SelectItem>
                              <SelectItem value="cooperative">Coopérative</SelectItem>
                              <SelectItem value="entreprise">Entreprise agricole</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="farmLocation">Localisation précise de l'exploitation</Label>
                        <div className="flex gap-2">
                          <Input
                            id="farmLocation"
                            name="farmLocation"
                            value={formData.farmLocation}
                            onChange={handleChange}
                            placeholder="Coordonnées GPS ou description précise"
                          />
                          <Button type="button" variant="outline" className="flex-shrink-0">
                            <MapPin className="h-4 w-4 mr-2" />
                            Localiser
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="farmExperience">Expérience en agriculture (années)</Label>
                        <Select
                          value={formData.farmExperience}
                          onValueChange={(value) => handleSelectChange("farmExperience", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre expérience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="debutant">Débutant (&lt; 2 ans)</SelectItem>
                            <SelectItem value="intermediaire">Intermédiaire (2-5 ans)</SelectItem>
                            <SelectItem value="experimente">Expérimenté (5-10 ans)</SelectItem>
                            <SelectItem value="expert">Expert (&gt; 10 ans)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="soilType">Type de sol principal</Label>
                        <Select
                          value={formData.soilType}
                          onValueChange={(value) => handleSelectChange("soilType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type de sol" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="argileux">Argileux</SelectItem>
                            <SelectItem value="limoneux">Limoneux</SelectItem>
                            <SelectItem value="sableux">Sableux</SelectItem>
                            <SelectItem value="argilo-limoneux">Argilo-limoneux</SelectItem>
                            <SelectItem value="limono-sableux">Limono-sableux</SelectItem>
                            <SelectItem value="autre">Autre / Je ne sais pas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Précédent
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                        Suivant
                      </Button>
                    </CardFooter>
                  </>
                )}

                {/* Étape 3: Types de cultures */}
                {step === 3 && (
                  <>
                    <CardHeader>
                      <CardTitle>Vos cultures et productions</CardTitle>
                      <CardDescription>Indiquez les types de cultures et d'élevage que vous pratiquez</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <Label>Types de cultures</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "Maïs",
                            "Manioc",
                            "Tomates",
                            "Haricots",
                            "Arachides",
                            "Bananes plantains",
                            "Cacao",
                            "Café",
                            "Ananas",
                            "Poivrons",
                            "Ignames",
                            "Patates douces",
                            "Légumes verts",
                            "Riz",
                            "Sorgho",
                          ].map((crop) => (
                            <div key={crop} className="flex items-center space-x-2">
                              <Checkbox
                                id={`crop-${crop}`}
                                checked={formData.crops.includes(crop)}
                                onCheckedChange={(checked) => handleCheckboxChange("crops", crop, checked as boolean)}
                              />
                              <label
                                htmlFor={`crop-${crop}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {crop}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <Label>Élevage (si applicable)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "Poulets",
                            "Chèvres",
                            "Moutons",
                            "Bovins",
                            "Porcs",
                            "Lapins",
                            "Poissons",
                            "Abeilles",
                            "Aucun",
                          ].map((animal) => (
                            <div key={animal} className="flex items-center space-x-2">
                              <Checkbox
                                id={`livestock-${animal}`}
                                checked={formData.livestock.includes(animal)}
                                onCheckedChange={(checked) =>
                                  handleCheckboxChange("livestock", animal, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={`livestock-${animal}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {animal}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <Label>Certifications (si applicable)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "Agriculture biologique",
                            "Commerce équitable",
                            "GlobalG.A.P.",
                            "Rainforest Alliance",
                            "Aucune certification",
                          ].map((cert) => (
                            <div key={cert} className="flex items-center space-x-2">
                              <Checkbox
                                id={`cert-${cert}`}
                                checked={formData.certifications.includes(cert)}
                                onCheckedChange={(checked) =>
                                  handleCheckboxChange("certifications", cert, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={`cert-${cert}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {cert}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="challenges">Principaux défis rencontrés</Label>
                        <Textarea
                          id="challenges"
                          name="challenges"
                          value={formData.challenges}
                          onChange={handleChange}
                          placeholder="Décrivez les principaux défis que vous rencontrez dans votre exploitation"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="goals">Objectifs pour votre exploitation</Label>
                        <Textarea
                          id="goals"
                          name="goals"
                          value={formData.goals}
                          onChange={handleChange}
                          placeholder="Quels sont vos objectifs à court et moyen terme pour votre exploitation?"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Précédent
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                        Suivant
                      </Button>
                    </CardFooter>
                  </>
                )}

                {/* Étape 4: Équipements et finalisation */}
                {step === 4 && (
                  <>
                    <CardHeader>
                      <CardTitle>Équipements et préférences</CardTitle>
                      <CardDescription>Dernières informations pour personnaliser votre expérience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <Label>Équipements agricoles disponibles</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "Tracteur",
                            "Motoculteur",
                            "Système d'irrigation",
                            "Serre",
                            "Outils manuels",
                            "Pulvérisateur",
                            "Moissonneuse",
                            "Semoir",
                            "Équipement de stockage",
                            "Véhicule de transport",
                          ].map((equip) => (
                            <div key={equip} className="flex items-center space-x-2">
                              <Checkbox
                                id={`equip-${equip}`}
                                checked={formData.equipment.includes(equip)}
                                onCheckedChange={(checked) =>
                                  handleCheckboxChange("equipment", equip, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={`equip-${equip}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {equip}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="irrigationSystem">Système d'irrigation</Label>
                        <Select
                          value={formData.irrigationSystem}
                          onValueChange={(value) => handleSelectChange("irrigationSystem", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre système d'irrigation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aucun">Aucun système d'irrigation</SelectItem>
                            <SelectItem value="manuel">Arrosage manuel</SelectItem>
                            <SelectItem value="aspersion">Système d'aspersion</SelectItem>
                            <SelectItem value="goutte-a-goutte">Système goutte-à-goutte</SelectItem>
                            <SelectItem value="micro-irrigation">Micro-irrigation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <Label>Canaux de commercialisation utilisés</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "Marchés locaux",
                            "Vente directe à la ferme",
                            "Grossistes",
                            "Coopératives",
                            "Exportation",
                            "Vente en ligne",
                            "Restaurants/Hôtels",
                            "Transformateurs",
                          ].map((channel) => (
                            <div key={channel} className="flex items-center space-x-2">
                              <Checkbox
                                id={`channel-${channel}`}
                                checked={formData.marketingChannels.includes(channel)}
                                onCheckedChange={(checked) =>
                                  handleCheckboxChange("marketingChannels", channel, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={`channel-${channel}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {channel}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="techLevel">Niveau de maîtrise technologique</Label>
                        <Select
                          value={formData.techLevel}
                          onValueChange={(value) => handleSelectChange("techLevel", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre niveau" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="debutant">Débutant - Peu familier avec la technologie</SelectItem>
                            <SelectItem value="intermediaire">
                              Intermédiaire - Utilise smartphone et applications basiques
                            </SelectItem>
                            <SelectItem value="avance">
                              Avancé - Utilise régulièrement des applications et outils numériques
                            </SelectItem>
                            <SelectItem value="expert">
                              Expert - Très à l'aise avec les technologies avancées
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-4">
                        <Label>Intérêt pour des formations</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "Techniques agricoles",
                            "Gestion d'exploitation",
                            "Marketing et vente",
                            "Technologies agricoles",
                            "Certification biologique",
                            "Irrigation efficace",
                            "Gestion des maladies",
                            "Finance agricole",
                          ].map((training) => (
                            <div key={training} className="flex items-center space-x-2">
                              <Checkbox
                                id={`training-${training}`}
                                checked={formData.trainingInterest.includes(training)}
                                onCheckedChange={(checked) =>
                                  handleCheckboxChange("trainingInterest", training, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={`training-${training}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {training}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          J'accepte les conditions d'utilisation et la politique de confidentialité
                        </label>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Précédent
                      </Button>
                      <Button type="submit" className="bg-green-600 hover:bg-green-700">
                        Créer mon compte
                      </Button>
                    </CardFooter>
                  </>
                )}
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

