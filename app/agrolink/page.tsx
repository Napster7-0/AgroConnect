import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  ImageIcon,
  Video,
  BarChart2,
  Calendar,
  HelpCircle,
  Search,
  MessageSquare,
  Home,
  Users,
  ShoppingBag,
  DollarSign,
  Settings,
  User,
  MapPin,
  Filter,
  Send,
  Plus,
  CloudLightning,
  TrendingUp,
  AlertTriangle,
  Map,
} from "lucide-react";

export default function AgroLinkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Badge className="bg-green-600 hover:bg-green-700">
                Réseau Social Agricole
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                AgroLink
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Connectez-vous avec d&apos;autres agriculteurs, experts et
                investisseurs pour partager, apprendre et développer votre
                activité agricole.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="bg-green-600 hover:bg-green-700">
                  Rejoindre la communauté
                </Button>
                <Button variant="outline">Explorer les groupes</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Sidebar - Navigation */}
              <div className="hidden lg:block lg:col-span-3">
                <Card>
                  <CardContent className="p-4">
                    <nav className="space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="/">
                          <Home className="mr-2 h-4 w-4" />
                          Accueil
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="#profile">
                          <User className="mr-2 h-4 w-4" />
                          Mon profil
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="#groups">
                          <Users className="mr-2 h-4 w-4" />
                          Groupes
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="#marketplace">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Marketplace
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="#funding">
                          <DollarSign className="mr-2 h-4 w-4" />
                          Financement
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="#messages">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Messages
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <a href="#tools">
                          <Settings className="mr-2 h-4 w-4" />
                          Outils agricoles
                        </a>
                      </Button>
                      <Separator className="my-2" />
                      <div className="px-3 py-2">
                        <h3 className="text-sm font-medium">Mes groupes</h3>
                      </div>
                      <Button variant="ghost" className="w-full justify-start">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Maraîchers du Centre
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        Éleveurs innovants
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-green-600"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Découvrir plus de groupes
                      </Button>
                    </nav>
                  </CardContent>
                </Card>

                {/* Weather Widget */}
                <Card className="mt-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Météo agricole
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">28°C</p>
                        <p className="text-xs text-muted-foreground">
                          Yaoundé, Cameroun
                        </p>
                      </div>
                      <CloudLightning className="h-8 w-8 text-amber-500" />
                    </div>
                    <div className="mt-2 text-xs">
                      <p className="text-green-600">
                        Idéal pour l&apos;arrosage aujourd&apos;hui
                      </p>
                      <p className="text-muted-foreground mt-1">
                        Précipitations prévues: 60%
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Market Trends */}
                <Card className="mt-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Tendances du marché
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tomates</span>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span className="text-xs">+12%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Maïs</span>
                      <div className="flex items-center text-red-600">
                        <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                        <span className="text-xs">-5%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Poulet</span>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span className="text-xs">+8%</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full text-xs mt-2">
                      Voir toutes les tendances
                    </Button>
                  </CardContent>
                </Card>

                {/* Alerts */}
                <Card className="mt-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Alertes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium">
                          Alerte maladie: Mildiou
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Détecté dans votre région
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full text-xs mt-2">
                      Voir toutes les alertes
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content - Feed */}
              <div className="lg:col-span-6" id="feed">
                {/* Create Post */}
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?w=400&h=400&auto=format&fit=crop&q=80"
                          alt="User"
                        />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Input
                          placeholder="Partagez vos actualités agricoles..."
                          className="mb-2"
                        />
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            <ImageIcon className="h-4 w-4 mr-2" />
                            Photo
                          </Button>
                          <Button variant="outline" size="sm">
                            <Video className="h-4 w-4 mr-2" />
                            Vidéo
                          </Button>
                          <Button variant="outline" size="sm">
                            <BarChart2 className="h-4 w-4 mr-2" />
                            Sondage
                          </Button>
                          <Button variant="outline" size="sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            Événement
                          </Button>
                          <Button variant="outline" size="sm">
                            <HelpCircle className="h-4 w-4 mr-2" />
                            Question
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Feed Filters */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Fil d&apos;actualité</h2>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrer
                    </Button>
                    <Tabs defaultValue="popular">
                      <TabsList className="h-8">
                        <TabsTrigger value="popular" className="text-xs h-8">
                          Populaire
                        </TabsTrigger>
                        <TabsTrigger value="recent" className="text-xs h-8">
                          Récent
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>

                {/* Posts */}
                <div className="space-y-6">
                  {/* Post 1 - Regular Post with Image */}
                  <PostCard
                    user={{
                      name: "Marie Ekambi",
                      avatar:
                        "https://images.unsplash.com/photo-1525356906726-175fe87a8c39?w=150&h=150&auto=format&fit=crop&q=80",
                      badge: "Expert",
                      location: "Douala, Cameroun",
                    }}
                    content={{
                      text: "Voici ma récolte de tomates de cette semaine ! Grâce aux conseils sur la gestion de l'eau que j'ai reçus dans le groupe Maraîchers du Centre, j'ai pu augmenter mon rendement de 30% 🍅",
                      image:
                        "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&h=300&auto=format&fit=crop&q=80",
                      time: "Il y a 2 heures",
                    }}
                    engagement={{
                      likes: 45,
                      comments: 12,
                      shares: 5,
                    }}
                    type="regular"
                  />

                  {/* Post 2 - Question */}
                  <PostCard
                    user={{
                      name: "Jean Mbarga",
                      avatar:
                        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=150&h=150&auto=format&fit=crop&q=80",
                      badge: "Débutant",
                      location: "Yaoundé, Cameroun",
                    }}
                    content={{
                      text: "Mes plants de maïs présentent des taches jaunes sur les feuilles. Quelqu'un sait-il de quelle maladie il pourrait s'agir et comment la traiter ?",
                      time: "Il y a 5 heures",
                    }}
                    engagement={{
                      likes: 8,
                      comments: 23,
                      shares: 2,
                    }}
                    type="question"
                  />

                  {/* Post 3 - Event */}
                  <PostCard
                    user={{
                      name: "Association des Agriculteurs",
                      avatar:
                        "https://images.unsplash.com/photo-1562159278-1253a58da141?w=150&h=150&auto=format&fit=crop&q=80",
                      badge: "Organisation",
                      location: "Kribi, Cameroun",
                    }}
                    content={{
                      text: "Nous organisons un salon agricole le 15 juin à Kribi. Venez découvrir les dernières innovations en matière d'agriculture durable et rencontrer des experts du secteur !",
                      time: "Il y a 1 jour",
                      eventDate: "15 juin 2023",
                      eventLocation: "Centre des congrès de Kribi",
                    }}
                    engagement={{
                      likes: 87,
                      comments: 34,
                      shares: 56,
                    }}
                    type="event"
                  />

                  {/* Post 4 - Poll */}
                  <PostCard
                    user={{
                      name: "Paul Nkodo",
                      avatar:
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&auto=format&fit=crop&q=80",
                      badge: "Intermédiaire",
                      location: "Bafoussam, Cameroun",
                    }}
                    content={{
                      text: "Quelle méthode d'irrigation utilisez-vous principalement ?",
                      time: "Il y a 2 jours",
                      pollOptions: [
                        { text: "Irrigation goutte à goutte", votes: 65 },
                        { text: "Aspersion", votes: 23 },
                        { text: "Irrigation de surface", votes: 12 },
                        { text: "Aucune, je dépends de la pluie", votes: 45 },
                      ],
                    }}
                    engagement={{
                      likes: 32,
                      comments: 18,
                      shares: 7,
                    }}
                    type="poll"
                  />

                  {/* Post 5 - Video */}
                  <PostCard
                    user={{
                      name: "Sophie Atangana",
                      avatar:
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&q=80",
                      badge: "Expert",
                      location: "Douala, Cameroun",
                    }}
                    content={{
                      text: "J'ai réalisé cette vidéo pour montrer comment je prépare mon compost naturel. Une méthode simple et efficace pour enrichir vos sols !",
                      video:
                        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=300&auto=format&fit=crop&q=80",
                      time: "Il y a 3 jours",
                    }}
                    engagement={{
                      likes: 124,
                      comments: 45,
                      shares: 67,
                    }}
                    type="video"
                  />

                  {/* Load More Button */}
                  <div className="flex justify-center mt-8">
                    <Button variant="outline">Voir plus de publications</Button>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Trending & Suggestions */}
              <div className="hidden lg:block lg:col-span-3">
                {/* Search */}
                <Card className="mb-4">
                  <CardContent className="p-4">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Rechercher..." className="pl-8" />
                    </div>
                  </CardContent>
                </Card>

                {/* Trending Topics */}
                <Card className="mb-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Sujets tendance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          #AgricultureDurable
                        </span>
                        <span className="text-xs text-muted-foreground">
                          2.5k posts
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          #InnovationAgricole
                        </span>
                        <span className="text-xs text-muted-foreground">
                          1.8k posts
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          #SécuritéAlimentaire
                        </span>
                        <span className="text-xs text-muted-foreground">
                          1.2k posts
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">#AgriTech</span>
                        <span className="text-xs text-muted-foreground">
                          950 posts
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          #SalonAgricole2023
                        </span>
                        <span className="text-xs text-muted-foreground">
                          820 posts
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Suggested Groups */}
                <Card className="mb-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Groupes suggérés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?w=150&h=150&auto=format&fit=crop&q=80"
                              alt="Group"
                            />
                            <AvatarFallback>AC</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              Agriculteurs Bio
                            </p>
                            <p className="text-xs text-muted-foreground">
                              3.2k membres
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Rejoindre
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=150&h=150&auto=format&fit=crop&q=80"
                              alt="Group"
                            />
                            <AvatarFallback>JA</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              Jeunes Agriculteurs
                            </p>
                            <p className="text-xs text-muted-foreground">
                              2.8k membres
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Rejoindre
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="https://images.unsplash.com/photo-1592857080923-a7289a057587?w=150&h=150&auto=format&fit=crop&q=80"
                              alt="Group"
                            />
                            <AvatarFallback>TA</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Tech Agricole</p>
                            <p className="text-xs text-muted-foreground">
                              1.5k membres
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Rejoindre
                        </Button>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-2 text-xs">
                      Voir plus de groupes
                    </Button>
                  </CardContent>
                </Card>

                {/* Suggested Connections */}
                <Card className="mb-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Suggestions de connexion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&auto=format&fit=crop&q=80"
                              alt="User"
                            />
                            <AvatarFallback>CE</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Claire Essono</p>
                            <p className="text-xs text-muted-foreground">
                              Éleveuse de volailles
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Suivre
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&auto=format&fit=crop&q=80"
                              alt="User"
                            />
                            <AvatarFallback>PM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Pierre Meka</p>
                            <p className="text-xs text-muted-foreground">
                              Investisseur agricole
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Suivre
                        </Button>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-2 text-xs">
                      Voir plus de suggestions
                    </Button>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Événements à venir
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <div className="bg-green-100 dark:bg-green-900 p-2 rounded text-center min-w-[40px]">
                          <p className="text-xs font-bold">15</p>
                          <p className="text-xs">Juin</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            Salon Agricole de Kribi
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Centre des congrès, Kribi
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="bg-green-100 dark:bg-green-900 p-2 rounded text-center min-w-[40px]">
                          <p className="text-xs font-bold">22</p>
                          <p className="text-xs">Juin</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            Webinaire: Agriculture durable
                          </p>
                          <p className="text-xs text-muted-foreground">
                            En ligne, 14h00
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="bg-green-100 dark:bg-green-900 p-2 rounded text-center min-w-[40px]">
                          <p className="text-xs font-bold">30</p>
                          <p className="text-xs">Juin</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            Formation: Techniques d&apos;irrigation
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Centre agricole, Yaoundé
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-2 text-xs">
                      Voir tous les événements
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Groups Section */}
        <section
          className="w-full py-8 md:py-12 lg:py-16 bg-green-50 dark:bg-green-950"
          id="groups"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">
                Groupes et Communautés
              </h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Rejoignez des groupes thématiques pour échanger avec
                d&apos;autres agriculteurs partageant vos intérêts.
              </p>
            </div>

            <Tabs defaultValue="popular" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="popular">Populaires</TabsTrigger>
                  <TabsTrigger value="sector">Par secteur</TabsTrigger>
                  <TabsTrigger value="region">Par région</TabsTrigger>
                  <TabsTrigger value="training">Formation</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Créer un groupe
                </Button>
              </div>

              <TabsContent value="popular" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <GroupCard
                    name="Maraîchers du Centre"
                    members={1250}
                    description="Groupe dédié aux maraîchers de la région du Centre pour échanger des conseils et bonnes pratiques."
                    image="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=200&h=100&auto=format&fit=crop&q=80"
                    color="green"
                  />
                  <GroupCard
                    name="Éleveurs innovants"
                    members={980}
                    description="Innovations et nouvelles techniques dans l'élevage de bétail et de volailles."
                    image="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=100&auto=format&fit=crop&q=80"
                    color="blue"
                  />
                  <GroupCard
                    name="Jeunes Agriculteurs"
                    members={1820}
                    description="Réseau de jeunes entrepreneurs agricoles partageant leurs expériences et défis."
                    image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=200&h=100&auto=format&fit=crop&q=80"
                    color="purple"
                  />
                  <GroupCard
                    name="Agriculture Bio"
                    members={1540}
                    description="Tout sur l'agriculture biologique, la certification et les techniques naturelles."
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUAdSFH3qhSOpDw-Xd__8kxyZAaTKFgy_sw&s"
                    color="emerald"
                  />
                  <GroupCard
                    name="Tech Agricole"
                    members={1120}
                    description="Découvrez les dernières technologies et innovations pour moderniser votre exploitation agricole."
                    image="https://images.unsplash.com/photo-1584132905271-512c958d674a?w=200&h=100&auto=format&fit=crop&q=80"
                    color="indigo"
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="outline">Découvrir plus de groupes</Button>
                </div>
              </TabsContent>

              <TabsContent value="sector" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <GroupCard
                    name="Céréaliculture"
                    members={950}
                    description="Groupe spécialisé dans la culture des céréales: maïs, mil, sorgho, riz."
                    image="https://images.unsplash.com/photo-1602986039095-98ea073d37c2?w=200&h=100&auto=format&fit=crop&q=80"
                    color="yellow"
                  />
                  <GroupCard
                    name="Élevage bovin"
                    members={780}
                    description="Échange d'expériences sur l'élevage de bovins et la production laitière."
                    image="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=200&h=100&auto=format&fit=crop&q=80"
                    color="red"
                  />
                  <GroupCard
                    name="Aviculture"
                    members={1050}
                    description="Tout sur l'élevage de volailles: poulets, canards, dindes et production d'œufs."
                    image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=100&auto=format&fit=crop&q=80"
                    color="orange"
                  />
                </div>
              </TabsContent>

              <TabsContent value="region" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <GroupCard
                    name="Agriculteurs du Littoral"
                    members={1320}
                    description="Groupe régional pour les agriculteurs de la région du Littoral au Cameroun."
                    image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=200&h=100&auto=format&fit=crop&q=80"
                    color="blue"
                  />
                  <GroupCard
                    name="Producteurs de l'Ouest"
                    members={980}
                    description="Réseau d'agriculteurs de la région Ouest partageant leurs expériences locales."
                    image="https://images.unsplash.com/photo-1551651065-0d2994841b9f?w=200&h=100&auto=format&fit=crop&q=80"
                    color="green"
                  />
                  <GroupCard
                    name="Agriculture du Nord"
                    members={750}
                    description="Adaptation aux conditions climatiques spécifiques du Nord Cameroun."
                    image="https://images.unsplash.com/photo-1594761051656-e128a8fbba9c?w=200&h=100&auto=format&fit=crop&q=80"
                    color="amber"
                  />
                </div>
              </TabsContent>

              <TabsContent value="training" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <GroupCard
                    name="Formation agricole"
                    members={2150}
                    description="Ressources de formation et partage de connaissances pour tous les agriculteurs."
                    image="https://images.unsplash.com/photo-1591628001212-900cc1500d59?w=200&h=100&auto=format&fit=crop&q=80"
                    color="purple"
                  />
                  <GroupCard
                    name="Mentorat agricole"
                    members={1280}
                    description="Programme de mentorat entre agriculteurs expérimentés et débutants."
                    image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=100&auto=format&fit=crop&q=80"
                    color="cyan"
                  />
                  <GroupCard
                    name="Webinaires agricoles"
                    members={950}
                    description="Annonces et discussions autour des webinaires sur l'agriculture."
                    image="https://images.unsplash.com/photo-1530819568329-97653eafbbfa?w=200&h=100&auto=format&fit=crop&q=80"
                    color="pink"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Marketplace Section */}
        <section className="w-full py-8 md:py-12 lg:py-16" id="marketplace">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">
                Marketplace Agricole
              </h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Achetez et vendez des produits agricoles, du matériel et des
                services directement auprès d&apos;autres membres.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Publier une annonce
              </Button>
            </div>

            <Tabs defaultValue="products" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="products">Produits agricoles</TabsTrigger>
                <TabsTrigger value="equipment">
                  Matériel & Équipements
                </TabsTrigger>
                <TabsTrigger value="seeds">Semences & Intrants</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <MarketplaceCard
                    title="Tomates fraîches"
                    price="1 500"
                    unit="FCFA/kg"
                    location="Yaoundé"
                    seller="Marie Ekambi"
                    image="https://images.unsplash.com/photo-1576856497337-4f2be24683da?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Maïs en grains"
                    price="800"
                    unit="FCFA/kg"
                    location="Bafoussam"
                    seller="Paul Nkodo"
                    image="https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Poulets de chair"
                    price="3 500"
                    unit="FCFA/unité"
                    location="Douala"
                    seller="Jean Mbarga"
                    image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Miel naturel"
                    price="5 000"
                    unit="FCFA/litre"
                    location="Kribi"
                    seller="Sophie Atangana"
                    image="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Ananas frais"
                    price="1 200"
                    unit="FCFA/unité"
                    location="Limbé"
                    seller="Robert Ndongo"
                    image="https://images.unsplash.com/photo-1580636521086-7b5e154f9533?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Cacao en fèves"
                    price="2 800"
                    unit="FCFA/kg"
                    location="Ebolowa"
                    seller="Claire Essono"
                    image="https://images.unsplash.com/photo-1589218436045-ee320053f716?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Plantains"
                    price="2 500"
                    unit="FCFA/régime"
                    location="Edéa"
                    seller="Pierre Meka"
                    image="https://images.unsplash.com/photo-1603052875302-d376b7c0638a?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Œufs frais"
                    price="2 200"
                    unit="FCFA/plateau"
                    location="Ngaoundéré"
                    seller="Jeanne Fouda"
                    image="https://images.unsplash.com/photo-1598965675045-45c7c640ef25?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="outline">Voir plus de produits</Button>
                </div>
              </TabsContent>

              <TabsContent value="equipment" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <MarketplaceCard
                    title="Motoculteur"
                    price="450 000"
                    unit="FCFA"
                    location="Douala"
                    seller="Équipements Agricoles Pro"
                    image="https://images.unsplash.com/photo-1558396938-05e91935eb41?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Système d'irrigation"
                    price="120 000"
                    unit="FCFA"
                    location="Yaoundé"
                    seller="AgroTech Solutions"
                    image="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Pulvérisateur"
                    price="35 000"
                    unit="FCFA"
                    location="Bafoussam"
                    seller="Paul Nkodo"
                    image="https://images.unsplash.com/photo-1622382262588-b241e6159f65?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Incubateur à œufs"
                    price="180 000"
                    unit="FCFA"
                    location="Kribi"
                    seller="Élevage Moderne"
                    image="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                </div>
              </TabsContent>

              <TabsContent value="seeds" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <MarketplaceCard
                    title="Semences de tomates"
                    price="5 000"
                    unit="FCFA/sachet"
                    location="Yaoundé"
                    seller="SemencesPlus"
                    image="https://images.unsplash.com/photo-1582515073490-39981397c445?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Engrais bio"
                    price="15 000"
                    unit="FCFA/sac"
                    location="Douala"
                    seller="AgriNature"
                    image="https://images.unsplash.com/photo-1615915588152-3ae667439326?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Semences de maïs"
                    price="3 500"
                    unit="FCFA/kg"
                    location="Bafoussam"
                    seller="Coopérative Agricole"
                    image="https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Biopesticide naturel"
                    price="8 000"
                    unit="FCFA/litre"
                    location="Limbé"
                    seller="BioProtect"
                    image="https://images.unsplash.com/photo-1618083840674-a2597f3a354b?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                </div>
              </TabsContent>

              <TabsContent value="services" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <MarketplaceCard
                    title="Conseil en agriculture"
                    price="25 000"
                    unit="FCFA/session"
                    location="En ligne"
                    seller="Robert Ndongo"
                    image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Formation élevage"
                    price="50 000"
                    unit="FCFA/module"
                    location="Yaoundé"
                    seller="Centre de Formation Agricole"
                    image="https://images.unsplash.com/photo-1591628001212-900cc1500d59?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Analyse de sol"
                    price="15 000"
                    unit="FCFA"
                    location="Douala"
                    seller="AgroLab"
                    image="https://images.unsplash.com/photo-1582999222129-1e825ced0115?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                  <MarketplaceCard
                    title="Transport agricole"
                    price="Sur devis"
                    unit=""
                    location="Tout le Cameroun"
                    seller="TransAgri"
                    image="https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?w=200&h=150&auto=format&fit=crop&q=80"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Funding Section */}
        <section
          className="w-full py-8 md:py-12 lg:py-16 bg-green-50 dark:bg-green-950"
          id="funding"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">
                Financement Participatif & Investissements
              </h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Présentez vos projets agricoles pour obtenir du soutien ou
                investissez dans des projets prometteurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="bg-green-600 hover:bg-green-700">
                  Proposer un projet
                </Button>
                <Button variant="outline">Explorer les projets</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <FundingProjectCard
                title="Ferme avicole moderne"
                goal="5 000 000"
                raised="3 250 000"
                creator="Jean Mbarga"
                location="Yaoundé"
                daysLeft={15}
                backers={42}
                image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=300&h=200&auto=format&fit=crop&q=80"
              />
              <FundingProjectCard
                title="Plantation de cacao bio"
                goal="8 000 000"
                raised="2 800 000"
                creator="Marie Ekambi"
                location="Kribi"
                daysLeft={23}
                backers={35}
                image="https://images.unsplash.com/photo-1622979135664-231f87c87510?w=300&h=200&auto=format&fit=crop&q=80"
              />
              <FundingProjectCard
                title="Système d'irrigation innovant"
                goal="3 500 000"
                raised="2 900 000"
                creator="Paul Nkodo"
                location="Bafoussam"
                daysLeft={8}
                backers={67}
                image="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=300&h=200&auto=format&fit=crop&q=80"
              />
            </div>

            <div className="mt-12 max-w-6xl mx-auto">
              <h3 className="text-xl font-bold mb-6">
                Opportunités d&apos;investissement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Coopérative agricole du Centre</CardTitle>
                    <CardDescription>
                      Investissement dans une coopérative de producteurs de
                      fruits et légumes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Rendement estimé:</span>
                        <span className="text-sm font-medium">
                          12-15% par an
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Investissement minimum:</span>
                        <span className="text-sm font-medium">
                          500 000 FCFA
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Durée:</span>
                        <span className="text-sm font-medium">3 ans</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Niveau de risque:</span>
                        <span className="text-sm font-medium">Modéré</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">En savoir plus</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Expansion ferme laitière</CardTitle>
                    <CardDescription>
                      Financement de l&apos;expansion d&apos;une ferme laitière
                      établie
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Rendement estimé:</span>
                        <span className="text-sm font-medium">
                          10-12% par an
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Investissement minimum:</span>
                        <span className="text-sm font-medium">
                          1 000 000 FCFA
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Durée:</span>
                        <span className="text-sm font-medium">5 ans</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Niveau de risque:</span>
                        <span className="text-sm font-medium">Faible</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">En savoir plus</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="w-full py-8 md:py-12 lg:py-16" id="chatbot">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">
                Assistant IA Agricole
              </h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Notre assistant IA vous aide à résoudre vos problèmes agricoles,
                identifier les maladies des plantes et optimiser vos cultures.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader className="bg-green-50 dark:bg-green-900">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1679922691265-cea1336d1f65?w=150&h=150&auto=format&fit=crop&q=80"
                        alt="AI"
                      />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">AgroBot</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 max-h-[400px] overflow-y-auto">
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
                          Bonjour ! Je suis AgroBot, votre assistant agricole.
                          Comment puis-je vous aider aujourd&apos;hui ?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start justify-end">
                      <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                        <p className="text-sm">
                          Mes plants de tomates ont des taches jaunes sur les
                          feuilles. Que dois-je faire ?
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
                          D&apos;après votre description, il pourrait
                          s&apos;agir d&apos;une carence en magnésium ou
                          d&apos;un début de mildiou. Pouvez-vous m&apos;envoyer
                          une photo des feuilles affectées pour un diagnostic
                          plus précis ?
                        </p>
                        <p className="text-sm mt-2">
                          En attendant, je vous recommande de :
                        </p>
                        <ul className="list-disc list-inside text-sm mt-1">
                          <li>Isoler les plants affectés</li>
                          <li>Éviter d&apos;arroser les feuilles</li>
                          <li>Vérifier le pH de votre sol</li>
                        </ul>
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
                          Merci pour la photo. Il s&apos;agit bien d&apos;un
                          début de mildiou, une maladie fongique courante chez
                          les tomates. Voici ce que je vous recommande :
                        </p>
                        <ul className="list-disc list-inside text-sm mt-1">
                          <li>Retirez immédiatement les feuilles infectées</li>
                          <li>Appliquez un fongicide à base de cuivre</li>
                          <li>
                            Améliorez la circulation d&apos;air entre les plants
                          </li>
                          <li>
                            Arrosez à la base des plants, jamais les feuilles
                          </li>
                        </ul>
                        <p className="text-sm mt-2">
                          Souhaitez-vous des informations plus détaillées sur
                          les traitements biologiques contre le mildiou ?
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
                    <Input
                      placeholder="Posez votre question agricole..."
                      className="flex-1"
                    />
                    <Button
                      size="icon"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Envoyer</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Notre IA peut vous aider avec :
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  <Badge variant="outline">Diagnostic de maladies</Badge>
                  <Badge variant="outline">Conseils de culture</Badge>
                  <Badge variant="outline">Analyse de marché</Badge>
                  <Badge variant="outline">Planification des récoltes</Badge>
                  <Badge variant="outline">
                    Recommandations d&apos;engrais
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section
          className="w-full py-8 md:py-12 lg:py-16 bg-green-50 dark:bg-green-950"
          id="tools"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">
                Outils & Services Agricoles
              </h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Accédez à des outils avancés pour optimiser votre exploitation
                agricole.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CloudLightning className="h-5 w-5 text-amber-500" />
                    <CardTitle className="text-lg">Météo agricole</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Prévisions météorologiques précises pour votre exploitation
                    avec alertes personnalisées.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Accéder
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-lg">Analyse de marché</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Suivez les tendances des prix agricoles et optimisez vos
                    ventes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Accéder
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-lg">Alertes maladies</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Recevez des alertes en temps réel sur les maladies et
                    ravageurs dans votre région.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Accéder
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Map className="h-5 w-5 text-blue-500" />
                    <CardTitle className="text-lg">
                      Carte des ressources
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Localisez les marchés, coopératives et centres de formation
                    agricoles près de chez vous.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Accéder
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 dark:bg-green-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Rejoignez la communauté AgroLink
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connectez-vous avec plus de 10 000 agriculteurs, experts et
                  investisseurs pour développer votre activité agricole.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  S&apos;inscrire gratuitement
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-green-700"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

function PostCard({ user, content, engagement, type }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{user.name}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Badge variant="outline" className="mr-2 text-xs">
                    {user.badge}
                  </Badge>
                  {user.location && (
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  <span className="mx-1">•</span>
                  <span>{content.time}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-2">
              <p className="text-sm">{content.text}</p>

              {type === "regular" && content.image && (
                <div className="mt-3 rounded-md overflow-hidden">
                  <img
                    src={content.image || "/placeholder.svg"}
                    alt="Post"
                    className="w-full"
                  />
                </div>
              )}

              {type === "video" && content.video && (
                <div className="mt-3 rounded-md overflow-hidden relative">
                  <img
                    src={content.video || "/placeholder.svg"}
                    alt="Video thumbnail"
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <Video className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {type === "question" && (
                <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950 rounded-md">
                  <div className="flex items-center text-amber-600 dark:text-amber-400">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    <span className="font-medium">Question</span>
                  </div>
                  <p className="text-sm mt-1 text-amber-800 dark:text-amber-200">
                    {content.text}
                  </p>
                </div>
              )}

              {type === "event" && (
                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-md">
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">Événement</span>
                  </div>
                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{content.eventDate}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{content.eventLocation}</span>
                    </div>
                  </div>
                </div>
              )}

              {type === "poll" && content.pollOptions && (
                <div className="mt-3 space-y-2">
                  {content.pollOptions.map((option, index) => {
                    const totalVotes = content.pollOptions.reduce(
                      (sum, opt) => sum + opt.votes,
                      0
                    );
                    const percentage = Math.round(
                      (option.votes / totalVotes) * 100
                    );

                    return (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{option.text}</span>
                          <span>{percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {option.votes} votes
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 text-muted-foreground"
                >
                  <Heart className="h-4 w-4" />
                  <span>{engagement.likes}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 text-muted-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{engagement.comments}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 text-muted-foreground"
                >
                  <Share2 className="h-4 w-4" />
                  <span>{engagement.shares}</span>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function GroupCard({ name, members, description, image, color }) {
  const colorClasses = {
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    amber: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    purple:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    emerald:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    indigo:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    yellow:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    orange:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-32">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={colorClasses[color] || colorClasses.green}>
            {members} membres
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Rejoindre le groupe</Button>
      </CardFooter>
    </Card>
  );
}

function MarketplaceCard({ title, price, unit, location, seller, image }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-600 hover:bg-green-700">
            {price} {unit}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="flex items-center">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm">Vendeur: {seller}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <MessageSquare className="h-4 w-4 mr-2" />
          Contacter
        </Button>
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          <ShoppingBag className="h-4 w-4 mr-2" />
          Acheter
        </Button>
      </CardFooter>
    </Card>
  );
}

function FundingProjectCard({
  title,
  goal,
  raised,
  creator,
  location,
  daysLeft,
  backers,
  image,
}) {
  const progress = Math.min(
    Math.round(
      (Number.parseInt(raised.replace(/\s/g, "")) /
        Number.parseInt(goal.replace(/\s/g, ""))) *
        100
    ),
    100
  );

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-600 hover:bg-green-700">
            {daysLeft} jours restants
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center">
          <MapPin className="h-3 w-3 mr-1" />
          {location} • Par {creator}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{raised} FCFA</span>
            <span className="text-sm text-muted-foreground">
              sur {goal} FCFA
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{progress}% financé</span>
            <span>{backers} contributeurs</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700">
          Soutenir ce projet
        </Button>
      </CardFooter>
    </Card>
  );
}
