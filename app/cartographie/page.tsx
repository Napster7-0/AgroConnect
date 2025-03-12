import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Layers,
  Plus,
  DrillIcon as Drone,
  Droplets,
  Thermometer,
  Upload,
  Camera,
  AlertTriangle,
  Clock,
  BarChart2,
  Zap,
  CloudSun,
  Wind,
  Sprout,
  Search,
  Filter,
  Download,
  Settings,
  ChevronRight,
  Smartphone,
} from "lucide-react"

export default function CartographiePage() {
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
                  <Badge className="bg-green-600 hover:bg-green-700">Cartographie</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter">Cartographie Intelligente</h1>
                </div>
                <p className="text-gray-500 dark:text-gray-400 max-w-[700px]">
                  Visualisez, analysez et optimisez vos cultures grâce à notre technologie de cartographie avancée.
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
                        <Wind className="h-3 w-3 mr-1 text-gray-500" />
                        <span>Vent: 12 km/h</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-6">
              <Select defaultValue="satellite">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type de vue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="satellite">Vue satellite</SelectItem>
                  <SelectItem value="thermal">Vue thermique</SelectItem>
                  <SelectItem value="topographic">Vue topographique</SelectItem>
                  <SelectItem value="hybrid">Vue hybride</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter un champ
              </Button>
              <Button variant="outline">
                <Drone className="h-4 w-4 mr-2" />
                Commander une analyse par drone
              </Button>
              <Button variant="outline">
                <Droplets className="h-4 w-4 mr-2" />
                Configurer l'arrosage intelligent
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
              {/* Main Map Area */}
              <div className="space-y-6">
                {/* Filters and Search */}
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Rechercher un champ..." className="pl-8 w-[200px]" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrer
                    </Button>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Tous les champs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les champs</SelectItem>
                      <SelectItem value="field1">Champ Nord</SelectItem>
                      <SelectItem value="field2">Champ Sud</SelectItem>
                      <SelectItem value="field3">Champ Est</SelectItem>
                      <SelectItem value="field4">Champ Ouest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interactive Map */}
                <Card className="overflow-hidden">
                  <div className="relative h-[500px] bg-gray-100 dark:bg-gray-800">
                    {/* Simulated Map */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1200&h=800&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70">
                      {/* Map Overlay Elements */}
                      <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md">
                        <div className="flex items-center space-x-2">
                          <Layers className="h-5 w-5 text-gray-500" />
                          <span className="text-sm font-medium">Couches</span>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <span className="text-sm">-</span>
                          </Button>
                        </div>
                      </div>

                      {/* Field Markers */}
                      <div className="absolute top-1/4 left-1/3 bg-green-500 bg-opacity-50 w-32 h-24 rounded-md border-2 border-green-600">
                        <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                          <span className="text-xs font-medium">Champ Nord - Tomates</span>
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 bg-amber-500 bg-opacity-50 w-40 h-32 rounded-md border-2 border-amber-600">
                        <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                          <span className="text-xs font-medium">Champ Sud - Maïs</span>
                        </div>
                      </div>

                      <div className="absolute bottom-1/4 right-1/4 bg-blue-500 bg-opacity-50 w-36 h-28 rounded-md border-2 border-blue-600">
                        <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                          <span className="text-xs font-medium">Champ Est - Haricots</span>
                        </div>
                      </div>

                      {/* Irrigation System */}
                      <div className="absolute top-1/3 right-1/3 bg-blue-600 rounded-full h-4 w-4">
                        <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                          <span className="text-xs font-medium">Système d'arrosage #1</span>
                        </div>
                        <div className="absolute top-0 left-0 bg-blue-400 bg-opacity-30 rounded-full h-12 w-12 -m-4 animate-pulse"></div>
                      </div>

                      <div className="absolute bottom-1/3 left-1/4 bg-blue-600 rounded-full h-4 w-4">
                        <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                          <span className="text-xs font-medium">Système d'arrosage #2</span>
                        </div>
                        <div className="absolute top-0 left-0 bg-blue-400 bg-opacity-30 rounded-full h-12 w-12 -m-4 animate-pulse"></div>
                      </div>

                      {/* Soil Sensors */}
                      <div className="absolute top-2/5 left-2/5 bg-purple-600 rounded-full h-3 w-3">
                        <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                          <span className="text-xs font-medium">Capteur d'humidité #1</span>
                        </div>
                      </div>

                      <div className="absolute bottom-2/5 right-2/5 bg-purple-600 rounded-full h-3 w-3">
                        <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                          <span className="text-xs font-medium">Capteur d'humidité #2</span>
                        </div>
                      </div>

                      {/* Disease Alert */}
                      <div className="absolute top-2/3 left-1/5 bg-red-600 rounded-full h-5 w-5 animate-pulse">
                        <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md">
                          <span className="text-xs font-medium text-red-600">Alerte maladie détectée</span>
                        </div>
                      </div>
                    </div>

                    {/* Map Legend */}
                    <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md">
                      <div className="text-xs font-medium mb-1">Légende</div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                          <span className="text-xs">Cultures en bonne santé</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                          <span className="text-xs">Cultures nécessitant attention</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                          <span className="text-xs">Alerte maladie</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span className="text-xs">Système d'arrosage</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                          <span className="text-xs">Capteur d'humidité</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Field Analysis Tabs */}
                <Tabs defaultValue="soil">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="soil">Analyse des sols</TabsTrigger>
                    <TabsTrigger value="disease">Détection de maladies</TabsTrigger>
                    <TabsTrigger value="irrigation">Arrosage intelligent</TabsTrigger>
                  </TabsList>

                  {/* Soil Analysis Tab */}
                  <TabsContent value="soil" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Analyse des sols par drone et capteurs</CardTitle>
                        <CardDescription>
                          Obtenez des données précises sur la qualité de vos sols pour optimiser vos cultures
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Soil Analysis Overview */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card>
                              <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                  <CardTitle className="text-sm font-medium">pH du sol</CardTitle>
                                  <Thermometer className="h-4 w-4 text-amber-500" />
                                </div>
                              </CardHeader>
                              <CardContent>
                                <div className="text-2xl font-bold">6.8</div>
                                <p className="text-xs text-muted-foreground">Légèrement acide</p>
                                <Progress value={68} className="h-2 mt-2" />
                                <p className="text-xs text-green-600 mt-1">Optimal pour la plupart des cultures</p>
                              </CardContent>
                            </Card>

                            <Card>
                              <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                  <CardTitle className="text-sm font-medium">Humidité</CardTitle>
                                  <Droplets className="h-4 w-4 text-blue-500" />
                                </div>
                              </CardHeader>
                              <CardContent>
                                <div className="text-2xl font-bold">42%</div>
                                <p className="text-xs text-muted-foreground">Niveau d'humidité</p>
                                <Progress value={42} className="h-2 mt-2" />
                                <p className="text-xs text-amber-600 mt-1">Légèrement sec, arrosage recommandé</p>
                              </CardContent>
                            </Card>

                            <Card>
                              <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                  <CardTitle className="text-sm font-medium">Fertilité</CardTitle>
                                  <Sprout className="h-4 w-4 text-green-500" />
                                </div>
                              </CardHeader>
                              <CardContent>
                                <div className="text-2xl font-bold">75%</div>
                                <p className="text-xs text-muted-foreground">Niveau de fertilité</p>
                                <Progress value={75} className="h-2 mt-2" />
                                <p className="text-xs text-green-600 mt-1">Bon niveau de nutriments</p>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Soil Composition */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Composition du sol</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span>Azote (N)</span>
                                    <span className="font-medium">Moyen</span>
                                  </div>
                                  <Progress value={50} className="h-2" />
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span>Phosphore (P)</span>
                                    <span className="font-medium">Bon</span>
                                  </div>
                                  <Progress value={75} className="h-2" />
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span>Potassium (K)</span>
                                    <span className="font-medium">Excellent</span>
                                  </div>
                                  <Progress value={90} className="h-2" />
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span>Matière organique</span>
                                    <span className="font-medium">Faible</span>
                                  </div>
                                  <Progress value={30} className="h-2" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Recommendations */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium">Recommandations</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                  <ChevronRight className="h-4 w-4 text-green-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Ajouter de la matière organique</p>
                                    <p className="text-xs text-muted-foreground">
                                      Incorporez du compost ou du fumier pour améliorer la structure du sol et augmenter
                                      la teneur en matière organique.
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <ChevronRight className="h-4 w-4 text-green-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Fertilisation azotée légère</p>
                                    <p className="text-xs text-muted-foreground">
                                      Appliquez un engrais riche en azote pour soutenir la croissance des plantes.
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <ChevronRight className="h-4 w-4 text-green-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Maintenir l'humidité</p>
                                    <p className="text-xs text-muted-foreground">
                                      Augmentez légèrement l'arrosage pour maintenir un niveau d'humidité optimal.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Drone Analysis */}
                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle>Analyse par drone</CardTitle>
                                <Badge>Dernière analyse: il y a 5 jours</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <img
                                    src="https://images.unsplash.com/photo-1586683086816-c3b0e9a0c1b4?w=500&h=300&auto=format&fit=crop&q=80"
                                    alt="Drone Analysis"
                                    className="w-full h-40 object-cover rounded-md"
                                  />
                                  <p className="text-xs text-center text-muted-foreground">
                                    Vue thermique du champ Nord
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  <img
                                    src="https://images.unsplash.com/photo-1586683087066-4b1c69eaf9e4?w=500&h=300&auto=format&fit=crop&q=80"
                                    alt="Drone Analysis"
                                    className="w-full h-40 object-cover rounded-md"
                                  />
                                  <p className="text-xs text-center text-muted-foreground">
                                    Vue de la santé des plantes
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between mt-4">
                                <Button variant="outline" size="sm">
                                  <Download className="h-4 w-4 mr-2" />
                                  Télécharger le rapport complet
                                </Button>
                                <Button className="bg-green-600 hover:bg-green-700" size="sm">
                                  <Drone className="h-4 w-4 mr-2" />
                                  Commander une nouvelle analyse
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Disease Detection Tab */}
                  <TabsContent value="disease" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Détection de maladies par images & IA</CardTitle>
                        <CardDescription>
                          Identifiez rapidement les maladies de vos cultures grâce à notre intelligence artificielle
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Upload Section */}
                          <Card className="border-dashed border-2">
                            <CardContent className="p-6">
                              <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="rounded-full bg-green-100 dark:bg-green-900 p-2">
                                  <Upload className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="text-lg font-medium">Téléchargez une image pour analyse</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                  Prenez une photo de vos plantes ou téléchargez une image existante pour détecter
                                  d'éventuelles maladies
                                </p>
                                <div className="flex gap-2 mt-2">
                                  <Button className="bg-green-600 hover:bg-green-700">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Télécharger une image
                                  </Button>
                                  <Button variant="outline">
                                    <Camera className="h-4 w-4 mr-2" />
                                    Prendre une photo
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Recent Detections */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle>Détections récentes</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1562517634-baa2da3acfbf?w=150&h=150&auto=format&fit=crop&q=80"
                                    alt="Plant Disease"
                                    className="w-24 h-24 object-cover rounded-md"
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center">
                                      <Badge className="bg-red-600 hover:bg-red-700">Maladie détectée</Badge>
                                      <span className="text-xs text-muted-foreground ml-2">Il y a 2 jours</span>
                                    </div>
                                    <h4 className="font-medium mt-1">Mildiou sur tomates</h4>
                                    <p className="text-sm text-muted-foreground">
                                      Maladie fongique affectant les feuilles et les fruits des plants de tomates.
                                    </p>
                                    <div className="flex items-center mt-2">
                                      <Badge variant="outline" className="mr-2">
                                        Champ Nord
                                      </Badge>
                                      <Badge
                                        variant="outline"
                                        className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                                      >
                                        Sévérité: Moyenne
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                <Separator />

                                <div className="flex items-start space-x-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?w=150&h=150&auto=format&fit=crop&q=80"
                                    alt="Plant Disease"
                                    className="w-24 h-24 object-cover rounded-md"
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center">
                                      <Badge className="bg-amber-600 hover:bg-amber-700">Risque détecté</Badge>
                                      <span className="text-xs text-muted-foreground ml-2">Il y a 5 jours</span>
                                    </div>
                                    <h4 className="font-medium mt-1">Carence en magnésium</h4>
                                    <p className="text-sm text-muted-foreground">
                                      Jaunissement entre les nervures des feuilles plus anciennes.
                                    </p>
                                    <div className="flex items-center mt-2">
                                      <Badge variant="outline" className="mr-2">
                                        Champ Est
                                      </Badge>
                                      <Badge
                                        variant="outline"
                                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                      >
                                        Sévérité: Faible
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Treatment Recommendations */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle>Recommandations de traitement</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex items-start space-x-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Traitement du mildiou</p>
                                    <p className="text-xs text-muted-foreground">
                                      Appliquez un fongicide à base de cuivre sur les plants de tomates. Retirez et
                                      détruisez les feuilles infectées.
                                    </p>
                                    <Button variant="outline" size="sm" className="mt-2">
                                      Voir les produits recommandés
                                    </Button>
                                  </div>
                                </div>

                                <div className="flex items-start space-x-2">
                                  <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Correction de la carence en magnésium</p>
                                    <p className="text-xs text-muted-foreground">
                                      Appliquez un engrais riche en magnésium ou pulvérisez une solution de sulfate de
                                      magnésium sur le feuillage.
                                    </p>
                                    <Button variant="outline" size="sm" className="mt-2">
                                      Voir les produits recommandés
                                    </Button>
                                  </div>
                                </div>

                                <div className="flex items-start space-x-2">
                                  <ChevronRight className="h-4 w-4 text-green-600 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Prévention</p>
                                    <p className="text-xs text-muted-foreground">
                                      Améliorez la circulation d'air entre les plants, évitez d'arroser le feuillage et
                                      maintenez une rotation des cultures.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* AI Analysis */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle>Analyse par intelligence artificielle</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <Zap className="h-5 w-5 text-purple-600" />
                                    <span className="font-medium">Précision de détection</span>
                                  </div>
                                  <span>94%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <BarChart2 className="h-5 w-5 text-blue-600" />
                                    <span className="font-medium">Maladies dans la base de données</span>
                                  </div>
                                  <span>250+</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <Clock className="h-5 w-5 text-green-600" />
                                    <span className="font-medium">Temps moyen d'analyse</span>
                                  </div>
                                  <span>3 secondes</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                  Notre IA est constamment entraînée sur de nouvelles données pour améliorer sa
                                  précision et reconnaître davantage de maladies et de carences.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Irrigation Tab */}
                  <TabsContent value="irrigation" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Arrosage intelligent à la demande</CardTitle>
                        <CardDescription>
                          Contrôlez votre système d'irrigation en fonction des besoins réels de vos cultures
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Irrigation Systems Overview */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle>Systèmes d'arrosage</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <Droplets className="h-5 w-5 text-blue-600" />
                                    <div>
                                      <p className="font-medium">Système d'arrosage #1</p>
                                      <p className="text-xs text-muted-foreground">Champ Nord - Tomates</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                      <Label htmlFor="irrigation1" className="text-sm">
                                        Actif
                                      </Label>
                                      <Switch id="irrigation1" defaultChecked />
                                    </div>
                                    <Badge className="bg-green-600">En fonction</Badge>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span>Intensité d'arrosage</span>
                                    <span>65%</span>
                                  </div>
                                  <Slider defaultValue={[65]} max={100} step={1} className="w-full" />
                                  <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Faible</span>
                                    <span>Moyen</span>
                                    <span>Élevé</span>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Dernier arrosage</p>
                                    <p className="font-medium">Aujourd'hui, 06:30</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Prochain arrosage</p>
                                    <p className="font-medium">Demain, 06:30</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Consommation d'eau</p>
                                    <p className="font-medium">120 L/jour</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Mode</p>
                                    <p className="font-medium">Automatique</p>
                                  </div>
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <Droplets className="h-5 w-5 text-blue-600" />
                                    <div>
                                      <p className="font-medium">Système d'arrosage #2</p>
                                      <p className="text-xs text-muted-foreground">Champ Est - Haricots</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                      <Label htmlFor="irrigation2" className="text-sm">
                                        Actif
                                      </Label>
                                      <Switch id="irrigation2" />
                                    </div>
                                    <Badge variant="outline">Inactif</Badge>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span>Intensité d'arrosage</span>
                                    <span>40%</span>
                                  </div>
                                  <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
                                  <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Faible</span>
                                    <span>Moyen</span>
                                    <span>Élevé</span>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Dernier arrosage</p>
                                    <p className="font-medium">Hier, 07:15</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Prochain arrosage</p>
                                    <p className="font-medium">Demain, 07:15</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Consommation d'eau</p>
                                    <p className="font-medium">85 L/jour</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Mode</p>
                                    <p className="font-medium">Manuel</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Irrigation Schedule */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle>Planification d'arrosage</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">Arrosage automatique</p>
                                    <p className="text-xs text-muted-foreground">
                                      Basé sur les données des capteurs et la météo
                                    </p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Label htmlFor="auto-irrigation" className="text-sm">
                                      Activer
                                    </Label>
                                    <Switch id="auto-irrigation" defaultChecked />
                                  </div>
                                </div>

                                <div className="grid grid-cols-7 gap-2">
                                  {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
                                    <div key={day} className="flex flex-col items-center">
                                      <div className="text-sm font-medium">{day}</div>
                                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1">
                                        <Droplets className="h-4 w-4 text-green-600" />
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">Heure d'arrosage</p>
                                    <p className="text-xs text-muted-foreground">
                                      Définir l'heure d'arrosage quotidien
                                    </p>
                                  </div>
                                  <Select defaultValue="morning">
                                    <SelectTrigger className="w-[180px]">
                                      <SelectValue placeholder="Sélectionner l'heure" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="early-morning">Tôt le matin (5h-7h)</SelectItem>
                                      <SelectItem value="morning">Matin (7h-9h)</SelectItem>
                                      <SelectItem value="evening">Soir (18h-20h)</SelectItem>
                                      <SelectItem value="night">Nuit (21h-23h)</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">Ajustement météo</p>
                                    <p className="text-xs text-muted-foreground">Réduire l'arrosage en cas de pluie</p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Label htmlFor="weather-adjust" className="text-sm">
                                      Activer
                                    </Label>
                                    <Switch id="weather-adjust" defaultChecked />
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Water Consumption */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle>Consommation d'eau</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="h-40 w-full bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                                  <BarChart2 className="h-10 w-10 text-gray-400" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="flex flex-col items-center">
                                        <p className="text-sm text-muted-foreground">Consommation totale</p>
                                        <p className="text-2xl font-bold">2 450 L</p>
                                        <p className="text-xs text-muted-foreground">Ce mois-ci</p>
                                      </div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="flex flex-col items-center">
                                        <p className="text-sm text-muted-foreground">Économie d'eau</p>
                                        <p className="text-2xl font-bold text-green-600">32%</p>
                                        <p className="text-xs text-muted-foreground">vs. arrosage traditionnel</p>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Mobile Control */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle>Contrôle mobile</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="flex items-center space-x-4">
                                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
                                  <Smartphone className="h-6 w-6 text-green-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">Application mobile AgroConnect</p>
                                  <p className="text-sm text-muted-foreground">
                                    Contrôlez votre système d'arrosage à distance depuis votre smartphone
                                  </p>
                                </div>
                                <Button className="bg-green-600 hover:bg-green-700">Télécharger</Button>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Setup New System */}
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle>Installer un nouveau système</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                  Équipez vos champs d'un système d'arrosage intelligent pour optimiser votre
                                  consommation d'eau et améliorer la santé de vos cultures.
                                </p>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">Kit d'arrosage intelligent</p>
                                    <p className="text-sm text-muted-foreground">
                                      Inclut capteurs, vannes et contrôleur
                                    </p>
                                  </div>
                                  <Badge>À partir de 150 000 FCFA</Badge>
                                </div>
                                <div className="flex justify-end">
                                  <Button className="bg-green-600 hover:bg-green-700">Demander un devis</Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Field Information */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Informations sur le champ</CardTitle>
                    <CardDescription>Champ Nord - Tomates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Superficie</p>
                          <p className="font-medium">2.5 hectares</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Culture</p>
                          <p className="font-medium">Tomates Roma</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Date de plantation</p>
                          <p className="font-medium">15/03/2023</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Récolte prévue</p>
                          <p className="font-medium">10/06/2023</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Santé globale</span>
                          <span className="font-medium">85%</span>
                        </div>
                        <Progress value={85} className="h-2 bg-green-600" />
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline">Biologique</Badge>
                        <Badge variant="outline">Irrigation goutte-à-goutte</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Weather Forecast */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Prévisions à 5 jours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 text-center">Lun</div>
                          <CloudSun className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="text-sm">28° / 22°</div>
                        <div className="text-xs text-muted-foreground">10% 💧</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 text-center">Mar</div>
                          <CloudSun className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="text-sm">30° / 23°</div>
                        <div className="text-xs text-muted-foreground">5% 💧</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 text-center">Mer</div>
                          <Droplets className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="text-sm">26° / 21°</div>
                        <div className="text-xs text-muted-foreground">60% 💧</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 text-center">Jeu</div>
                          <Droplets className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="text-sm">25° / 20°</div>
                        <div className="text-xs text-muted-foreground">70% 💧</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 text-center">Ven</div>
                          <CloudSun className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="text-sm">27° / 21°</div>
                        <div className="text-xs text-muted-foreground">20% 💧</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts */}
                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <CardTitle>Alertes</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="bg-red-500 w-1 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-medium">Mildiou détecté</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Maladie fongique détectée sur les plants de tomates du Champ Nord.
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline">Champ Nord</Badge>
                            <span className="text-xs text-muted-foreground">Il y a 2 jours</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-amber-500 w-1 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-medium">Niveau d'humidité bas</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Le capteur #2 indique un niveau d'humidité faible dans le Champ Est.
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline">Champ Est</Badge>
                            <span className="text-xs text-muted-foreground">Il y a 5 heures</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Voir toutes les alertes
                    </Button>
                  </CardFooter>
                </Card>

                {/* Drone Services */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Services de drone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Analyse standard</p>
                          <p className="text-xs text-muted-foreground">Cartographie et analyse de base</p>
                        </div>
                        <Badge>25 000 FCFA</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Analyse avancée</p>
                          <p className="text-xs text-muted-foreground">Détection de maladies et analyse du sol</p>
                        </div>
                        <Badge>45 000 FCFA</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Forfait mensuel</p>
                          <p className="text-xs text-muted-foreground">4 analyses par mois</p>
                        </div>
                        <Badge>150 000 FCFA</Badge>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Réserver un service</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Equipment Status */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>État des équipements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Droplets className="h-4 w-4 text-blue-600" />
                          <span>Système d'arrosage #1</span>
                        </div>
                        <Badge className="bg-green-600">Opérationnel</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Droplets className="h-4 w-4 text-blue-600" />
                          <span>Système d'arrosage #2</span>
                        </div>
                        <Badge className="bg-green-600">Opérationnel</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Thermometer className="h-4 w-4 text-purple-600" />
                          <span>Capteur d'humidité #1</span>
                        </div>
                        <Badge className="bg-green-600">Opérationnel</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Thermometer className="h-4 w-4 text-purple-600" />
                          <span>Capteur d'humidité #2</span>
                        </div>
                        <Badge className="bg-amber-600">Batterie faible</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Settings className="h-4 w-4 text-gray-600" />
                          <span>Station météo</span>
                        </div>
                        <Badge className="bg-green-600">Opérationnel</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Gérer les équipements
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-green-600 dark:bg-green-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Optimisez votre agriculture avec la technologie
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Passez à la version premium pour accéder à toutes les fonctionnalités de cartographie avancée et
                  d'arrosage intelligent.
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

