import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CloudSun,
  Droplets,
  ThermometerSun,
  Wind,
  Plus,
  MapPin,
  Calendar,
  Send,
  ImageIcon,
  LineChart,
  AlertTriangle,
  Leaf,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  ChevronRight,
  Camera,
  Zap,
  Sprout,
  Thermometer,
} from "lucide-react"

export default function SuiviCulturesPage() {
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
                  <Badge className="bg-green-600 hover:bg-green-700">Tableau de bord</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter">Suivi des Cultures</h1>
                </div>
                <p className="text-gray-500 dark:text-gray-400 max-w-[700px]">
                  Gérez, surveillez et optimisez vos plantations en temps réel grâce à notre système intelligent.
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

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-6">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter une plantation
              </Button>
              <Button variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                Localiser les cultures
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Planifier des interventions
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
              {/* Main Dashboard */}
              <div className="space-y-6">
                {/* Filters and Search */}
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Rechercher une culture..." className="pl-8 w-[200px]" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrer
                    </Button>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Toutes les cultures" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les cultures</SelectItem>
                      <SelectItem value="vegetables">Légumes</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="cereals">Céréales</SelectItem>
                      <SelectItem value="tubers">Tubercules</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard
                    title="Cultures actives"
                    value="12"
                    change="+2"
                    trend="up"
                    icon={<Leaf className="h-4 w-4 text-green-600" />}
                  />
                  <StatCard
                    title="Santé moyenne"
                    value="87%"
                    change="+5%"
                    trend="up"
                    icon={<Sprout className="h-4 w-4 text-green-600" />}
                  />
                  <StatCard
                    title="Alertes actives"
                    value="3"
                    change="-2"
                    trend="down"
                    icon={<AlertTriangle className="h-4 w-4 text-amber-500" />}
                  />
                  <StatCard
                    title="Récoltes prévues"
                    value="4"
                    change="+1"
                    trend="up"
                    icon={<Calendar className="h-4 w-4 text-blue-500" />}
                  />
                </div>

                {/* Cultures List */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Mes cultures</CardTitle>
                    <CardDescription>Vue d'ensemble de toutes vos plantations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <CultureItem
                        name="Tomates Roma"
                        type="Légume"
                        area="2.5 hectares"
                        health={92}
                        stage="Croissance"
                        daysLeft={18}
                        alerts={0}
                      />
                      <Separator />
                      <CultureItem
                        name="Maïs"
                        type="Céréale"
                        area="5 hectares"
                        health={78}
                        stage="Maturation"
                        daysLeft={35}
                        alerts={1}
                      />
                      <Separator />
                      <CultureItem
                        name="Manioc"
                        type="Tubercule"
                        area="3 hectares"
                        health={85}
                        stage="Croissance"
                        daysLeft={60}
                        alerts={0}
                      />
                      <Separator />
                      <CultureItem
                        name="Haricots verts"
                        type="Légume"
                        area="1 hectare"
                        health={65}
                        stage="Floraison"
                        daysLeft={25}
                        alerts={2}
                      />
                      <Separator />
                      <CultureItem
                        name="Ananas"
                        type="Fruit"
                        area="1.5 hectares"
                        health={90}
                        stage="Croissance"
                        daysLeft={45}
                        alerts={0}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Voir toutes les cultures
                    </Button>
                  </CardFooter>
                </Card>

                {/* Growth Charts */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Évolution des cultures</CardTitle>
                      <Select defaultValue="month">
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Période" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="week">Semaine</SelectItem>
                          <SelectItem value="month">Mois</SelectItem>
                          <SelectItem value="quarter">Trimestre</SelectItem>
                          <SelectItem value="year">Année</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full flex items-center justify-center">
                      <div className="text-center">
                        <LineChart className="h-16 w-16 text-green-600 mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground">
                          Graphique de croissance des cultures sur la période sélectionnée
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts Section */}
                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <CardTitle>Alertes et notifications</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <AlertItem
                        title="Risque de mildiou détecté"
                        description="Des conditions favorables au développement du mildiou ont été détectées sur vos plants de tomates."
                        culture="Tomates Roma"
                        severity="high"
                        time="Il y a 2 heures"
                      />
                      <AlertItem
                        title="Stress hydrique"
                        description="Vos plants de haricots montrent des signes de stress hydrique. Un arrosage est recommandé dans les 24h."
                        culture="Haricots verts"
                        severity="medium"
                        time="Il y a 5 heures"
                      />
                      <AlertItem
                        title="Carence en azote"
                        description="Une carence en azote a été détectée sur votre parcelle de maïs. Une fertilisation est recommandée."
                        culture="Maïs"
                        severity="medium"
                        time="Il y a 1 jour"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Voir toutes les alertes
                    </Button>
                  </CardFooter>
                </Card>

                {/* Upcoming Tasks */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Interventions planifiées</CardTitle>
                    <CardDescription>Tâches à venir pour vos cultures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <TaskItem
                        title="Arrosage"
                        description="Arrosage des plants de tomates"
                        date="Aujourd'hui"
                        culture="Tomates Roma"
                        priority="high"
                      />
                      <TaskItem
                        title="Fertilisation"
                        description="Application d'engrais azoté"
                        date="Demain"
                        culture="Maïs"
                        priority="medium"
                      />
                      <TaskItem
                        title="Traitement préventif"
                        description="Application de fongicide contre le mildiou"
                        date="Dans 2 jours"
                        culture="Tomates Roma"
                        priority="medium"
                      />
                      <TaskItem
                        title="Désherbage"
                        description="Désherbage manuel des parcelles"
                        date="Dans 3 jours"
                        culture="Haricots verts"
                        priority="low"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Voir toutes les tâches
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Sidebar - Chatbot & Recommendations */}
              <div className="space-y-6">
                {/* Chatbot */}
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader className="pb-2 bg-green-50 dark:bg-green-900">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1679922691265-cea1336d1f65?w=150&h=150&auto=format&fit=crop&q=80"
                          alt="AI"
                        />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-lg">Assistant IA Agricole</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 max-h-[500px] overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1679922691265-cea1336d1f65?w=150&h=150&auto=format&fit=crop&q=80"
                            alt="AI"
                          />
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted p-3 rounded-lg">
                          <p className="text-sm">
                            Bonjour ! Je suis votre assistant agricole. Comment puis-je vous aider aujourd'hui ?
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start justify-end">
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                          <p className="text-sm">
                            J'ai remarqué des taches jaunes sur mes plants de tomates. Est-ce grave ?
                          </p>
                        </div>
                        <Avatar className="h-8 w-8 ml-2">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?w=150&h=150&auto=format&fit=crop&q=80"
                            alt="User"
                          />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex items-start">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1679922691265-cea1336d1f65?w=150&h=150&auto=format&fit=crop&q=80"
                            alt="AI"
                          />
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted p-3 rounded-lg">
                          <p className="text-sm">
                            Les taches jaunes sur les plants de tomates peuvent indiquer plusieurs problèmes :
                          </p>
                          <ul className="list-disc list-inside text-sm mt-1">
                            <li>Carence en magnésium ou en azote</li>
                            <li>Début de mildiou</li>
                            <li>Attaque de ravageurs</li>
                          </ul>
                          <p className="text-sm mt-2">
                            Pourriez-vous m'envoyer une photo pour un diagnostic plus précis ?
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start justify-end">
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                          <p className="text-sm">Voici une photo des feuilles.</p>
                          <div className="mt-2 rounded overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1562517634-baa2da3acfbf?w=150&h=100&auto=format&fit=crop&q=80"
                              alt="Plant disease"
                              className="w-full"
                            />
                          </div>
                        </div>
                        <Avatar className="h-8 w-8 ml-2">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?w=150&h=150&auto=format&fit=crop&q=80"
                            alt="User"
                          />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex items-start">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1679922691265-cea1336d1f65?w=150&h=150&auto=format&fit=crop&q=80"
                            alt="AI"
                          />
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted p-3 rounded-lg">
                          <p className="text-sm">
                            D'après l'image, il s'agit d'un début de mildiou, une maladie fongique courante chez les
                            tomates. Voici mes recommandations :
                          </p>
                          <ul className="list-disc list-inside text-sm mt-1">
                            <li>Retirez immédiatement les feuilles infectées</li>
                            <li>Appliquez un fongicide à base de cuivre</li>
                            <li>Améliorez la circulation d'air entre les plants</li>
                            <li>Arrosez à la base des plants, jamais les feuilles</li>
                          </ul>
                          <p className="text-sm mt-2">
                            J'ai ajouté une tâche de traitement préventif à votre calendrier pour dans 2 jours.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 border-t">
                    <div className="flex w-full items-center space-x-2">
                      <Button variant="outline" size="icon">
                        <ImageIcon className="h-4 w-4" />
                        <span className="sr-only">Ajouter une image</span>
                      </Button>
                      <Input placeholder="Posez votre question agricole..." className="flex-1" />
                      <Button size="icon" className="bg-green-600 hover:bg-green-700">
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Envoyer</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                {/* Suggestions */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Questions fréquentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2">
                        Comment identifier une carence en azote ?
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2">
                        Quand est le meilleur moment pour récolter le maïs ?
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2">
                        Comment lutter contre les pucerons naturellement ?
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2">
                        Quelle rotation de cultures recommandez-vous ?
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Soil Analysis */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Analyse du sol</CardTitle>
                    <CardDescription>Dernière analyse: il y a 15 jours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>pH</span>
                          <span className="font-medium">6.8</span>
                        </div>
                        <Progress value={68} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          Légèrement acide (optimal pour la plupart des cultures)
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Azote (N)</span>
                          <span className="font-medium">Moyen</span>
                        </div>
                        <Progress value={50} className="h-2" />
                        <p className="text-xs text-muted-foreground">Une fertilisation légère est recommandée</p>
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
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Voir l'analyse complète
                    </Button>
                  </CardFooter>
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
              </div>
            </div>
          </div>
        </section>

        {/* IoT Integration Section */}
        <section className="w-full py-8 md:py-12 bg-green-50 dark:bg-green-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter">Intégration IoT & Technologies Avancées</h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Connectez vos capteurs et drones pour une surveillance en temps réel de vos cultures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-lg">Capteurs IoT</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Installez des capteurs dans vos champs pour mesurer en temps réel l'humidité, la température et le
                    pH du sol.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Capteurs connectés</span>
                      <Badge>8 actifs</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dernière synchronisation</span>
                      <span className="text-xs">Il y a 15 minutes</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Configurer les capteurs
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-purple-500" />
                    <CardTitle className="text-lg">Surveillance par drone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Utilisez des drones pour surveiller vos parcelles, détecter les anomalies et cartographier vos
                    cultures.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dernier survol</span>
                      <span className="text-xs">Il y a 2 jours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Surface couverte</span>
                      <span className="text-xs">12 hectares</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Anomalies détectées</span>
                      <Badge variant="outline" className="text-amber-500">
                        3
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Planifier un survol
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <CardTitle className="text-lg">IA & Analyse prédictive</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Notre intelligence artificielle analyse vos données pour prédire les rendements, anticiper les
                    maladies et optimiser vos interventions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Prédiction de rendement</span>
                      <Badge className="bg-green-600">+15% vs 2022</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Risques identifiés</span>
                      <span className="text-xs">2 cette semaine</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Précision des prédictions</span>
                      <span className="text-xs">92%</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Voir les prédictions
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-green-600 dark:bg-green-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Optimisez la gestion de vos cultures
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Passez à la version premium pour accéder à toutes les fonctionnalités avancées et maximiser vos
                  rendements.
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

// Composant pour les cartes de statistiques
function StatCard({ title, value, change, trend, icon }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">{icon}</div>
        </div>
        <div className="mt-2 flex items-center">
          {trend === "up" ? (
            <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-600 mr-1" />
          )}
          <span className={`text-xs ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
            {change} {trend === "up" ? "augmentation" : "diminution"}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

// Composant pour les éléments de culture
function CultureItem({ name, type, area, health, stage, daysLeft, alerts }) {
  let healthColor = "bg-green-600"
  if (health < 70) healthColor = "bg-amber-500"
  if (health < 50) healthColor = "bg-red-500"

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="font-medium">{name}</h3>
          {alerts > 0 && (
            <Badge variant="outline" className="ml-2 text-amber-500">
              {alerts} alerte{alerts > 1 ? "s" : ""}
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground mt-1">
          <span>{type}</span>
          <span>{area}</span>
          <span>{stage}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="space-y-1 w-24">
          <div className="flex justify-between text-xs">
            <span>Santé</span>
            <span>{health}%</span>
          </div>
          <Progress value={health} className={`h-2 ${healthColor}`} />
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>{daysLeft} jours</span>
        </div>
        <Button variant="ghost" size="sm">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

// Composant pour les alertes
function AlertItem({ title, description, culture, severity, time }) {
  let severityColor = "bg-red-500"
  if (severity === "medium") severityColor = "bg-amber-500"
  if (severity === "low") severityColor = "bg-blue-500"

  return (
    <div className="flex gap-3">
      <div className={`${severityColor} w-1 rounded-full flex-shrink-0`}></div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline">{culture}</Badge>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
      </div>
    </div>
  )
}

// Composant pour les tâches
function TaskItem({ title, description, date, culture, priority }) {
  let priorityColor = "bg-red-500"
  if (priority === "medium") priorityColor = "bg-amber-500"
  if (priority === "low") priorityColor = "bg-blue-500"

  return (
    <div className="flex gap-3">
      <div className={`${priorityColor} w-1 rounded-full flex-shrink-0`}></div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline">{culture}</Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
      </div>
    </div>
  )
}

