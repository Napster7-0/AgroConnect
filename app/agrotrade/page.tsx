import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart,
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Store,
  Truck,
  Users,
  Package,
  Smartphone,
  BarChart2,
  LineChart,
  Calculator,
  Zap,
  CloudSun,
  Droplets,
  Wind,
  ThermometerSun,
  Download,
  Bell,
  Plus,
  Settings,
} from "lucide-react"

export default function AgroTradePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-12 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] items-start">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-600 hover:bg-green-700">AgroTrade</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter">Commercialisation & Optimisation</h1>
                </div>
                <p className="text-gray-500 dark:text-gray-400 max-w-[700px]">
                  Maximisez vos revenus grâce à nos recommandations intelligentes sur où, quand et quoi vendre, ainsi
                  qu'à quel prix.
                </p>
              </div>

              {/* Weather Card */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <CloudSun className="h-8 w-8 text-amber-500" />
                      <div>
                        <p className="text-2xl font-bold">28°C</p>
                        <p className="text-xs text-muted-foreground">Ferme Centrale, Yaoundé</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center">
                        <Droplets className="h-3 w-3 mr-1 text-blue-500" />
                        <span>Humidité: 65%</span>
                      </div>
                      <div className="flex items-center">
                        <ThermometerSun className="h-3 w-3 mr-1 text-orange-500" />
                        <span>Max: 32°C</span>
                      </div>
                      <div className="flex items-center">
                        <Wind className="h-3 w-3 mr-1 text-gray-500" />
                        <span>Vent: 12 km/h</span>
                      </div>
                      <div className="flex items-center">
                        <Droplets className="h-3 w-3 mr-1 text-blue-500" />
                        <span>Pluie: 20%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Farmer Info & Quick Stats */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?w=200&h=200&auto=format&fit=crop&q=80"
                        alt="Agriculteur"
                      />
                      <AvatarFallback>JM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-xl font-bold">Jean Mbarga</h2>
                      <p className="text-sm text-muted-foreground">Ferme Mbarga, Yaoundé</p>
                      <Badge variant="outline" className="mt-1">
                        Premium
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Ventes du mois</p>
                      <p className="text-2xl font-bold">1 250 000 FCFA</p>
                      <div className="flex items-center text-green-600">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span className="text-xs">+15% vs mois dernier</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Produits vendus</p>
                      <p className="text-2xl font-bold">5 tonnes</p>
                      <div className="flex items-center text-green-600">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span className="text-xs">+8% vs mois dernier</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Marge bénéficiaire</p>
                      <p className="text-2xl font-bold">32%</p>
                      <div className="flex items-center text-red-600">
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                        <span className="text-xs">-3% vs mois dernier</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-6">
              <Button className="bg-green-600 hover:bg-green-700">
                <BarChart className="h-4 w-4 mr-2" />
                Analyser un nouveau produit
              </Button>
              <Button variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                Consulter les tendances
              </Button>
              <Button variant="outline">
                <Calculator className="h-4 w-4 mr-2" />
                Simuler un prix optimal
              </Button>
              <Button variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                Trouver des points de vente
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="where" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="where">
                  <MapPin className="h-4 w-4 mr-2" />
                  Où Vendre
                </TabsTrigger>
                <TabsTrigger value="when">
                  <Calendar className="h-4 w-4 mr-2" />
                  Quand Vendre
                </TabsTrigger>
                <TabsTrigger value="what">
                  <Package className="h-4 w-4 mr-2" />
                  Quel Produit
                </TabsTrigger>
                <TabsTrigger value="price">
                  <DollarSign className="h-4 w-4 mr-2" />À Quel Prix
                </TabsTrigger>
              </TabsList>

              {/* Où Vendre Section */}
              <TabsContent value="where" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Où Vendre pour un Meilleur Gain</CardTitle>
                      <CardDescription>
                        Recommandations des marchés, plateformes ou circuits de distribution pour maximiser vos profits
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Canaux de vente */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Canaux de vente recommandés</h3>

                        <div className="grid gap-4 md:grid-cols-2">
                          <Card className="border-green-200 dark:border-green-800">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Store className="h-5 w-5 text-green-600" />
                                  <CardTitle className="text-base">Marchés locaux</CardTitle>
                                </div>
                                <Badge className="bg-green-600">Recommandé</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Marge potentielle</span>
                                  <span className="text-sm font-medium">35%</span>
                                </div>
                                <Progress value={35} className="h-2" />
                                <p className="text-xs text-muted-foreground">
                                  Marché de Mokolo (Yaoundé) - forte demande pour vos tomates
                                </p>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full">
                                <MapPin className="h-4 w-4 mr-2" />
                                Voir les marchés
                              </Button>
                            </CardFooter>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center space-x-2">
                                <Truck className="h-5 w-5 text-blue-600" />
                                <CardTitle className="text-base">Grossistes</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Marge potentielle</span>
                                  <span className="text-sm font-medium">28%</span>
                                </div>
                                <Progress value={28} className="h-2" />
                                <p className="text-xs text-muted-foreground">
                                  Centrale d'achat de Douala - contrats stables
                                </p>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full">
                                <Users className="h-4 w-4 mr-2" />
                                Contacter les grossistes
                              </Button>
                            </CardFooter>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center space-x-2">
                                <Smartphone className="h-5 w-5 text-purple-600" />
                                <CardTitle className="text-base">Plateformes en ligne</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Marge potentielle</span>
                                  <span className="text-sm font-medium">32%</span>
                                </div>
                                <Progress value={32} className="h-2" />
                                <p className="text-xs text-muted-foreground">
                                  AgroMarket - forte demande pour produits bio
                                </p>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full">
                                <Smartphone className="h-4 w-4 mr-2" />
                                Vendre en ligne
                              </Button>
                            </CardFooter>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center space-x-2">
                                <Users className="h-5 w-5 text-amber-600" />
                                <CardTitle className="text-base">Vente directe</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Marge potentielle</span>
                                  <span className="text-sm font-medium">40%</span>
                                </div>
                                <Progress value={40} className="h-2" />
                                <p className="text-xs text-muted-foreground">
                                  Vente à la ferme ou livraison directe aux consommateurs
                                </p>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full">
                                <Users className="h-4 w-4 mr-2" />
                                Configurer la vente directe
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </div>

                      {/* Comparaison des marges */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Comparaison des marges par canal</h3>
                        <div className="h-[300px] w-full bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                          <BarChart2 className="h-16 w-16 text-gray-400" />
                        </div>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Télécharger le rapport
                          </Button>
                        </div>
                      </div>

                      {/* Coûts logistiques */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Analyse des coûts logistiques</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <Store className="h-8 w-8 text-green-600 mb-2" />
                                <p className="font-medium">Marchés locaux</p>
                                <p className="text-2xl font-bold mt-1">15 000 FCFA</p>
                                <p className="text-xs text-muted-foreground">Coût de transport</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <Truck className="h-8 w-8 text-blue-600 mb-2" />
                                <p className="font-medium">Grossistes</p>
                                <p className="text-2xl font-bold mt-1">25 000 FCFA</p>
                                <p className="text-xs text-muted-foreground">Coût de transport</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <Users className="h-8 w-8 text-amber-600 mb-2" />
                                <p className="font-medium">Vente directe</p>
                                <p className="text-2xl font-bold mt-1">8 000 FCFA</p>
                                <p className="text-xs text-muted-foreground">Coût de livraison</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Carte interactive */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Carte des points de vente</CardTitle>
                        <CardDescription>Visualisez les marchés et points de vente à proximité</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[400px] bg-gray-100 dark:bg-gray-800 rounded-md relative">
                          {/* Simulated Map */}
                          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70">
                            {/* Map Markers */}
                            <div className="absolute top-1/4 left-1/3 bg-green-500 rounded-full h-4 w-4">
                              <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                                <span className="text-xs font-medium">Marché de Mokolo</span>
                              </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 bg-blue-500 rounded-full h-4 w-4">
                              <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                                <span className="text-xs font-medium">Grossiste Central</span>
                              </div>
                            </div>
                            <div className="absolute bottom-1/3 right-1/4 bg-amber-500 rounded-full h-4 w-4">
                              <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                                <span className="text-xs font-medium">Marché de Mfoundi</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Demande régionale</CardTitle>
                        <CardDescription>Zones à forte demande pour vos produits</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-sm">Yaoundé</span>
                            </div>
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                              <span className="text-sm font-medium">Forte demande</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-sm">Douala</span>
                            </div>
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                              <span className="text-sm font-medium">Forte demande</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                              <span className="text-sm">Bafoussam</span>
                            </div>
                            <div className="flex items-center">
                              <TrendingDown className="h-4 w-4 text-amber-600 mr-1" />
                              <span className="text-sm font-medium">Demande moyenne</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span className="text-sm">Kribi</span>
                            </div>
                            <div className="flex items-center">
                              <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                              <span className="text-sm font-medium">Faible demande</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Recommandation personnalisée</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-md">
                            <div className="flex items-start space-x-2">
                              <Zap className="h-5 w-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Stratégie recommandée</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Vendre 60% de votre production au marché de Mokolo et 40% via la plateforme AgroMarket
                                  pour maximiser vos revenus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700">Appliquer cette stratégie</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Quand Vendre Section */}
              <TabsContent value="when" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quand Vendre le Produit</CardTitle>
                      <CardDescription>Optimisez le moment de vente pour maximiser vos profits</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Analyse saisonnière des prix */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Analyse saisonnière des prix</h3>
                        <div className="h-[300px] w-full bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                          <LineChart className="h-16 w-16 text-gray-400" />
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                                <p className="font-medium">Prix le plus élevé</p>
                                <p className="text-2xl font-bold mt-1">Novembre</p>
                                <p className="text-xs text-muted-foreground">+35% vs prix moyen</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <TrendingDown className="h-8 w-8 text-red-600 mb-2" />
                                <p className="font-medium">Prix le plus bas</p>
                                <p className="text-2xl font-bold mt-1">Juillet</p>
                                <p className="text-xs text-muted-foreground">-25% vs prix moyen</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <AlertCircle className="h-8 w-8 text-amber-600 mb-2" />
                                <p className="font-medium">Alerte de vente</p>
                                <p className="text-2xl font-bold mt-1">15 jours</p>
                                <p className="text-xs text-muted-foreground">avant hausse des prix</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Prédictions basées sur la météo */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Prédictions basées sur la météo et la production</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">Impact météorologique</CardTitle>
                                <CloudSun className="h-5 w-5 text-amber-500" />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex items-start space-x-2">
                                  <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Alerte sécheresse</p>
                                    <p className="text-xs text-muted-foreground">
                                      Prévision de sécheresse dans 3 régions principales en Août, ce qui pourrait
                                      réduire l'offre et augmenter les prix.
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <AlertCircle className="h-4 w-4 text-green-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Opportunité</p>
                                    <p className="text-xs text-muted-foreground">
                                      Stockez votre production actuelle pour la vendre en Août-Septembre pour maximiser
                                      vos profits.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">Saisonnalité des cultures</CardTitle>
                                <Calendar className="h-5 w-5 text-blue-500" />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex items-start space-x-2">
                                  <Calendar className="h-4 w-4 text-blue-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Période de récolte</p>
                                    <p className="text-xs text-muted-foreground">
                                      La majorité des agriculteurs récoltent en même temps, créant une suroffre en
                                      Juin-Juillet.
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <TrendingUp className="h-4 w-4 text-green-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Tendance historique</p>
                                    <p className="text-xs text-muted-foreground">
                                      Les prix augmentent systématiquement de 25-30% entre Juillet et Novembre.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Planification des récoltes */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Planification des récoltes et ventes</h3>
                        <div className="overflow-x-auto">
                          <div className="min-w-[600px]">
                            <div className="grid grid-cols-12 gap-2">
                              {/* Months */}
                              {[
                                "Jan",
                                "Fév",
                                "Mar",
                                "Avr",
                                "Mai",
                                "Juin",
                                "Juil",
                                "Août",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Déc",
                              ].map((month) => (
                                <div key={month} className="text-center text-sm font-medium">
                                  {month}
                                </div>
                              ))}

                              {/* Planting */}
                              <div className="col-span-2 bg-green-100 dark:bg-green-900 rounded-md p-2 text-xs text-center">
                                Plantation
                              </div>
                              <div className="col-span-3 bg-transparent"></div>
                              <div className="col-span-2 bg-green-100 dark:bg-green-900 rounded-md p-2 text-xs text-center">
                                Plantation
                              </div>
                              <div className="col-span-5 bg-transparent"></div>

                              {/* Growing */}
                              <div className="col-span-3 bg-transparent"></div>
                              <div className="col-span-3 bg-blue-100 dark:bg-blue-900 rounded-md p-2 text-xs text-center">
                                Croissance
                              </div>
                              <div className="col-span-3 bg-transparent"></div>
                              <div className="col-span-3 bg-blue-100 dark:bg-blue-900 rounded-md p-2 text-xs text-center">
                                Croissance
                              </div>

                              {/* Harvest */}
                              <div className="col-span-4 bg-transparent"></div>
                              <div className="col-span-2 bg-amber-100 dark:bg-amber-900 rounded-md p-2 text-xs text-center">
                                Récolte
                              </div>
                              <div className="col-span-4 bg-transparent"></div>
                              <div className="col-span-2 bg-amber-100 dark:bg-amber-900 rounded-md p-2 text-xs text-center">
                                Récolte
                              </div>

                              {/* Selling */}
                              <div className="col-span-5 bg-transparent"></div>
                              <div className="col-span-1 bg-red-100 dark:bg-red-900 rounded-md p-2 text-xs text-center">
                                Vente
                              </div>
                              <div className="col-span-3 bg-transparent"></div>
                              <div className="col-span-3 bg-red-100 dark:bg-red-900 rounded-md p-2 text-xs text-center">
                                Vente optimale
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader className="bg-green-50 dark:bg-green-900">
                        <CardTitle>Recommandation de timing</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-md">
                            <div className="flex items-start space-x-2">
                              <Zap className="h-5 w-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Moment optimal de vente</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Vendez votre production actuelle entre le 5 et 15 Novembre pour maximiser vos revenus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">Prix actuel</p>
                              <p className="text-2xl font-bold">850 FCFA/kg</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Prix prévu (Nov)</p>
                              <p className="text-2xl font-bold text-green-600">1 200 FCFA/kg</p>
                            </div>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700">Planifier la vente</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Alertes de prix</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Bell className="h-4 w-4 text-amber-600" />
                              <span className="text-sm">Alerte de prix</span>
                            </div>
                            <Switch id="price-alert" defaultChecked />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="price-threshold">Seuil de prix (FCFA/kg)</Label>
                            <Input id="price-threshold" type="number" defaultValue="1000" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="notification-method">Méthode de notification</Label>
                            <Select defaultValue="sms">
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionner une méthode" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sms">SMS</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="app">Notification application</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button variant="outline" className="w-full">
                            Configurer les alertes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Comparaison avec années précédentes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="h-[200px] w-full bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                            <LineChart className="h-10 w-10 text-gray-400" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-sm">2023</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-sm">2022</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                              <span className="text-sm">2021</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Les tendances de prix suivent un schéma similaire chaque année, avec des pics en
                            Novembre-Décembre.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Quel Produit Vendre Section */}
              <TabsContent value="what" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quel Produit Vendre</CardTitle>
                      <CardDescription>
                        Recommandations de cultures et produits agricoles ayant une forte demande et un bon rendement
                        économique
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Analyse des tendances du marché */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Analyse des tendances du marché</h3>

                        <div className="grid gap-4 md:grid-cols-2">
                          <Card className="border-green-200 dark:border-green-800">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">Tomates</CardTitle>
                                <Badge className="bg-green-600">Très rentable</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Demande du marché</span>
                                  <span className="text-sm font-medium">Très élevée</span>
                                </div>
                                <Progress value={90} className="h-2" />
                                <div className="flex justify-between">
                                  <span className="text-sm">Rentabilité</span>
                                  <span className="text-sm font-medium">Élevée</span>
                                </div>
                                <Progress value={85} className="h-2" />
                                <div className="flex justify-between">
                                  <span className="text-sm">Compatibilité avec votre sol</span>
                                  <span className="text-sm font-medium">Excellente</span>
                                </div>
                                <Progress value={95} className="h-2" />
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full">
                                <Plus className="h-4 w-4 mr-2" />
                                Ajouter à mon plan
                              </Button>
                            </CardFooter>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">Poivrons</CardTitle>
                                <Badge>Rentable</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Demande du marché</span>
                                  <span className="text-sm font-medium">Élevée</span>
                                </div>
                                <Progress value={80} className="h-2" />
                                <div className="flex justify-between">
                                  <span className="text-sm">Rentabilité</span>
                                  <span className="text-sm font-medium">Moyenne</span>
                                </div>
                                <Progress value={70} className="h-2" />
                                <div className="flex justify-between">
                                  <span className="text-sm">Compatibilité avec votre sol</span>
                                  <span className="text-sm font-medium">Bonne</span>
                                </div>
                                <Progress value={75} className="h-2" />
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full">
                                <Plus className="h-4 w-4 mr-2" />
                                Ajouter à mon plan
                              </Button>
                            </CardFooter>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">Concombres</CardTitle>
                                <Badge>Rentable</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Demande du marché</span>
                                  <span className="text-sm font-medium">Moyenne</span>
                                </div>
                                <Progress value={65} className="h-2" />
                                <div className="flex justify-between">
                                  <span className="text-sm">Rentabilité</span>
                                  <span className="text-sm font-medium">Élevée</span>
                                </div>
                                <Progress value={80} className="h-2" />
                                <div className="flex justify-between">
                                  <span className="text-sm">Compatibilité avec votre sol</span>
                                  <span className="text-sm font-medium">Excellente</span>
                                </div>
                                <Progress value={90} className="h-2" />
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full">
                                <Plus className="h-4 w-4 mr-2" />
                                Ajouter à mon plan
                              </Button>
                            </CardFooter>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">Piments</CardTitle>
                                <Badge variant="outline">Potentiel</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Demande du marché</span>
                                  <span className="text-sm font-medium">En hausse</span>
                                </div>
                                <Progress value={75} className="h-2" />
                                <div className="flex justify-between">
                                  <span className="text-sm">Rentabilité</span>
                                  <span className="text-sm font-medium">Élevée</span>
                                </div>
                                <Progress value={85} className="h-2" />
                                <div className="flex justify-between">
                                  <span className="text-sm">Compatibilité avec votre sol</span>
                                  <span className="text-sm font-medium">Moyenne</span>
                                </div>
                                <Progress value={60} className="h-2" />
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="outline" size="sm" className="w-full">
                                <Plus className="h-4 w-4 mr-2" />
                                Ajouter à mon plan
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </div>

                      {/* Personnalisation selon l'exploitation */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Personnalisation selon votre exploitation</h3>
                        <Card>
                          <CardContent className="p-4">
                            <div className="space-y-4">
                              <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium">Type de sol</p>
                                  <p className="text-xs text-muted-foreground">
                                    Votre sol est de type argilo-limoneux, idéal pour les cultures maraîchères comme les
                                    tomates, poivrons et concombres.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CloudSun className="h-4 w-4 text-amber-600 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium">Climat local</p>
                                  <p className="text-xs text-muted-foreground">
                                    Votre région bénéficie d'un climat tropical avec une saison des pluies bien définie,
                                    favorable à la culture de légumes tropicaux.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Settings className="h-4 w-4 text-blue-600 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium">Équipements disponibles</p>
                                  <p className="text-xs text-muted-foreground">
                                    Vous disposez d'un système d'irrigation goutte-à-goutte et d'outils de travail du
                                    sol adaptés aux cultures recommandées.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Simulation de profitabilité */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Simulation de profitabilité</h3>
                        <div className="h-[300px] w-full bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                          <BarChart2 className="h-16 w-16 text-gray-400" />
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <p className="font-medium">Tomates</p>
                                <p className="text-2xl font-bold mt-1">3.5M FCFA</p>
                                <p className="text-xs text-muted-foreground">Revenu estimé / hectare</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <p className="font-medium">Poivrons</p>
                                <p className="text-2xl font-bold mt-1">2.8M FCFA</p>
                                <p className="text-xs text-muted-foreground">Revenu estimé / hectare</p>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <p className="font-medium">Concombres</p>
                                <p className="text-2xl font-bold mt-1">2.2M FCFA</p>
                                <p className="text-xs text-muted-foreground">Revenu estimé / hectare</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader className="bg-green-50 dark:bg-green-900">
                        <CardTitle>Recommandation personnalisée</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-md">
                            <div className="flex items-start space-x-2">
                              <Zap className="h-5 w-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Stratégie de diversification</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Pour maximiser vos revenus et minimiser les risques, nous vous recommandons de
                                  cultiver:
                                </p>
                                <ul className="text-sm mt-2 space-y-1">
                                  <li className="flex items-center">
                                    <ChevronRight className="h-3 w-3 text-green-600 mr-1" />
                                    <span>60% de tomates</span>
                                  </li>
                                  <li className="flex items-center">
                                    <ChevronRight className="h-3 w-3 text-green-600 mr-1" />
                                    <span>25% de poivrons</span>
                                  </li>
                                  <li className="flex items-center">
                                    <ChevronRight className="h-3 w-3 text-green-600 mr-1" />
                                    <span>15% de concombres</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700">Appliquer cette stratégie</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Tendances des consommateurs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-2">
                            <TrendingUp className="h-4 w-4 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Produits biologiques</p>
                              <p className="text-xs text-muted-foreground">
                                Demande en hausse de 35% pour les légumes cultivés sans pesticides.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <TrendingUp className="h-4 w-4 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Variétés locales</p>
                              <p className="text-xs text-muted-foreground">
                                Intérêt croissant pour les variétés traditionnelles camerounaises.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <TrendingDown className="h-4 w-4 text-red-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Légumes importés</p>
                              <p className="text-xs text-muted-foreground">
                                Baisse de la demande pour les produits importés au profit des productions locales.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Opportunités de marché</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-2">
                            <AlertCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Pénurie identifiée</p>
                              <p className="text-xs text-muted-foreground">
                                Manque de tomates cerises sur le marché de Yaoundé, opportunité de niche.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <AlertCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Demande hôtelière</p>
                              <p className="text-xs text-muted-foreground">
                                Les hôtels et restaurants recherchent des fournisseurs réguliers de légumes de qualité.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <AlertCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Exportation régionale</p>
                              <p className="text-xs text-muted-foreground">
                                Possibilité d'exporter vers les pays voisins avec des prix plus élevés.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Rotation des cultures</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Plan de rotation recommandé pour maintenir la fertilité du sol et réduire les maladies:
                          </p>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-md">
                              <p className="text-xs font-medium">Année 1</p>
                              <p className="text-sm">Tomates</p>
                            </div>
                            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
                              <p className="text-xs font-medium">Année 2</p>
                              <p className="text-sm">Légumineuses</p>
                            </div>
                            <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-md">
                              <p className="text-xs font-medium">Année 3</p>
                              <p className="text-sm">Cucurbitacées</p>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            Voir le plan détaillé
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* À Quel Prix Vendre Section */}
              <TabsContent value="price" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>À Quel Prix Vendre</CardTitle>
                      <CardDescription>Définissez le prix optimal pour maximiser vos profits</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Calcul automatique du prix */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Calcul automatique du prix de vente recommandé</h3>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Tomates (prix par kg)</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                  <Label>Coûts de production</Label>
                                  <div className="flex justify-between text-sm">
                                    <span>Semences</span>
                                    <span>50 FCFA</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Engrais</span>
                                    <span>120 FCFA</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Main d'œuvre</span>
                                    <span>200 FCFA</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Irrigation</span>
                                    <span>80 FCFA</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Transport</span>
                                    <span>100 FCFA</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-medium">
                                    <span>Coût total</span>
                                    <span>550 FCFA</span>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Prix de vente</Label>
                                  <div className="flex justify-between text-sm">
                                    <span>Prix moyen du marché</span>
                                    <span>850 FCFA</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Prix minimum rentable</span>
                                    <span>650 FCFA</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Prix maximum possible</span>
                                    <span>1 200 FCFA</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-medium text-green-600">
                                    <span>Prix recommandé</span>
                                    <span>950 FCFA</span>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label>Marge bénéficiaire</Label>
                                <div className="flex items-center gap-4">
                                  <div className="flex-1">
                                    <Progress value={42} className="h-2" />
                                  </div>
                                  <div className="font-medium">42%</div>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  Une marge de 42% est supérieure à la moyenne du secteur (35%) pour ce produit.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Affichage des prix moyens */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Prix moyens et tendances</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Prix par région</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">Yaoundé</span>
                                  </div>
                                  <span className="font-medium">950 FCFA</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm">Douala</span>
                                  </div>
                                  <span className="font-medium">1 050 FCFA</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4 text-amber-600" />
                                    <span className="text-sm">Bafoussam</span>
                                  </div>
                                  <span className="font-medium">850 FCFA</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4 text-purple-600" />
                                    <span className="text-sm">Kribi</span>
                                  </div>
                                  <span className="font-medium">1 100 FCFA</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Évolution des prix</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="h-[200px] w-full bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                                <LineChart className="h-10 w-10 text-gray-400" />
                              </div>
                              <div className="mt-2 text-xs text-muted-foreground">
                                Les prix ont augmenté de 15% au cours des 3 derniers mois.
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Simulation de scénarios */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Simulation de scénarios de vente</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5 text-amber-600" />
                                <CardTitle className="text-base">Vente immédiate</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Prix</span>
                                  <span>850 FCFA/kg</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Quantité</span>
                                  <span>1 000 kg</span>
                                </div>
                                <div className="flex justify-between text-sm font-medium">
                                  <span>Revenu total</span>
                                  <span>850 000 FCFA</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Marge</span>
                                  <span>35%</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border-green-200 dark:border-green-800">
                            <CardHeader className="pb-2 bg-green-50 dark:bg-green-900">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-5 w-5 text-green-600" />
                                <CardTitle className="text-base">Vente différée (3 mois)</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Prix estimé</span>
                                  <span>1 200 FCFA/kg</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Quantité</span>
                                  <span>950 kg</span>
                                </div>
                                <div className="flex justify-between text-sm font-medium">
                                  <span>Revenu total</span>
                                  <span>1 140 000 FCFA</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Marge</span>
                                  <span>54%</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center space-x-2">
                                <Users className="h-5 w-5 text-blue-600" />
                                <CardTitle className="text-base">Vente directe</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Prix</span>
                                  <span>1 100 FCFA/kg</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Quantité</span>
                                  <span>800 kg</span>
                                </div>
                                <div className="flex justify-between text-sm font-medium">
                                  <span>Revenu total</span>
                                  <span>880 000 FCFA</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Marge</span>
                                  <span>50%</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader className="bg-green-50 dark:bg-green-900">
                        <CardTitle>Stratégie de prix recommandée</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-md">
                            <div className="flex items-start space-x-2">
                              <Zap className="h-5 w-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Stratégie optimale</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Stockez 70% de votre production pour une vente différée dans 3 mois à 1 200 FCFA/kg,
                                  et vendez 30% immédiatement à 950 FCFA/kg pour couvrir vos coûts opérationnels.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">Revenu estimé</p>
                              <p className="text-2xl font-bold">1 083 500 FCFA</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Marge moyenne</p>
                              <p className="text-2xl font-bold text-green-600">49%</p>
                            </div>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700">Appliquer cette stratégie</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Calculateur de prix</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cost">Coût de production (FCFA/kg)</Label>
                            <Input id="cost" type="number" defaultValue="550" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="margin">Marge souhaitée (%)</Label>
                            <Input id="margin" type="number" defaultValue="40" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="market-price">Prix moyen du marché (FCFA/kg)</Label>
                            <Input id="market-price" type="number" defaultValue="850" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quantity">Quantité disponible (kg)</Label>
                            <Input id="quantity" type="number" defaultValue="1000" />
                          </div>
                          <Button variant="outline" className="w-full">
                            <Calculator className="h-4 w-4 mr-2" />
                            Calculer le prix optimal
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Comparaison gros vs détail</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <Card>
                              <CardContent className="p-4">
                                <div className="flex flex-col items-center text-center">
                                  <Truck className="h-8 w-8 text-blue-600 mb-2" />
                                  <p className="font-medium">Vente en gros</p>
                                  <p className="text-2xl font-bold mt-1">750 FCFA</p>
                                  <p className="text-xs text-muted-foreground">Prix par kg</p>
                                </div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4">
                                <div className="flex flex-col items-center text-center">
                                  <Users className="h-8 w-8 text-green-600 mb-2" />
                                  <p className="font-medium">Vente au détail</p>
                                  <p className="text-2xl font-bold mt-1">1 100 FCFA</p>
                                  <p className="text-xs text-muted-foreground">Prix par kg</p>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Effort logistique</span>
                              <div className="flex">
                                <span className="text-blue-600 mr-2">Faible</span>
                                <span className="text-green-600">Élevé</span>
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Temps nécessaire</span>
                              <div className="flex">
                                <span className="text-blue-600 mr-2">Faible</span>
                                <span className="text-green-600">Élevé</span>
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Marge bénéficiaire</span>
                              <div className="flex">
                                <span className="text-blue-600 mr-2">27%</span>
                                <span className="text-green-600">50%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-green-600 dark:bg-green-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Optimisez vos revenus agricoles</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Passez à la version premium pour accéder à toutes les fonctionnalités d'optimisation des ventes et
                  maximiser vos profits.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Essai gratuit de 30 jours
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

