import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Leaf, Map, MessageSquare, BarChart3, Users, Link2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="bg-green-600 hover:bg-green-700">Innovant</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">AgroConnect</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  La plateforme numérique qui révolutionne l&apos;agriculture au Cameroun en connectant agriculteurs,
                  experts et entreprises agroalimentaires.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Commencer gratuitement
                </Button>
                <Button size="lg" variant="outline">
                  En savoir plus
                </Button>
              </div>
            </div>
            <img
              alt="AgroConnect Platform"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg?height=310&width=550"
              width="550"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tableau de bord interactif
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Accédez rapidement à toutes les fonctionnalités d&apos;AgroConnect depuis votre tableau de bord
                personnalisé.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-start">
            <DashboardCard
              title="Suivi des cultures"
              description="Suivez l'évolution de vos plantations"
              icon={<Leaf className="h-6 w-6 text-green-600" />}
            />
            <DashboardCard
              title="Chatbot"
              description="Posez vos questions agricoles"
              icon={<MessageSquare className="h-6 w-6 text-blue-600" />}
            />
            <DashboardCard
              title="Cartographie"
              description="Analysez la qualité de vos sols"
              icon={<Map className="h-6 w-6 text-amber-600" />}
            />
            <DashboardCard
              title="AgroFlow"
              description="Optimisez vos ventes"
              icon={<BarChart3 className="h-6 w-6 text-purple-600" />}
            />
            <DashboardCard
              title="AgroPlayce"
              description="Connectez-vous avec d'autres agriculteurs"
              icon={<Users className="h-6 w-6 text-red-600" />}
            />
            <DashboardCard
              title="AgroLink"
              description="Échangez avec les acteurs du marché"
              icon={<Link2 className="h-6 w-6 text-indigo-600" />}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos fonctionnalités</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Découvrez comment AgroConnect transforme l&apos;agriculture camerounaise grâce à la technologie.
              </p>
            </div>
          </div>
          <Tabs defaultValue="cultures" className="mt-8">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="cultures">Cultures</TabsTrigger>
              <TabsTrigger value="sols">Sols</TabsTrigger>
              <TabsTrigger value="vente">Vente</TabsTrigger>
              <TabsTrigger value="agroplayce">AgroPlayce</TabsTrigger>
              <TabsTrigger value="agrolink">AgroLink</TabsTrigger>
              <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
            </TabsList>
            <TabsContent value="cultures" className="p-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <img
                  alt="Suivi des cultures"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Suivi des cultures</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Notre système de suivi des cultures vous permet de surveiller l&apos;évolution de vos plantations en
                    temps réel. Recevez des alertes en cas de détection de maladies et accédez à des statistiques
                    détaillées sur vos cultures.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Statistiques sur l&apos;évolution des plantations</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Alertes en cas de maladies détectées</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Recommandations personnalisées</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sols" className="p-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <img
                  alt="Cartographie et analyse des sols"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Cartographie et analyse des sols</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Notre cartographie interactive vous donne accès à des données géospatiales précises sur vos sols.
                    Analysez les niveaux de fertilité et détectez les maladies du sol pour optimiser vos cultures.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Cartographie interactive des sols</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Analyse des niveaux de fertilité</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Suggestions de meilleures pratiques agricoles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vente" className="p-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <img
                  alt="Commercialisation et optimisation"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Commercialisation et optimisation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Notre module AgroFlow vous aide à proposer les bons produits au bon moment et au bon endroit.
                    Accédez à des statistiques de marché et analysez la demande des consommateurs pour maximiser vos
                    ventes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Module AgroFlow pour l&apos;optimisation des ventes</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Statistiques de marché en temps réel</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Réseau d&apos;échange entre agriculteurs et acheteurs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="agroplayce" className="p-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <img
                  alt="AgroPlayce"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">AgroPlayce : Réseau social agricole</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    AgroPlayce est un espace de mise en relation entre agriculteurs et sponsors. Boostez la visibilité
                    de votre exploitation et bénéficiez du mentorat de professionnels expérimentés.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Mise en relation avec des sponsors</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Outils de visibilité pour votre exploitation</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Mentorat et partage de bonnes pratiques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="agrolink" className="p-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <img
                  alt="AgroLink"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">AgroLink : Connexion avec la chaîne de valeur</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    AgroLink facilite les échanges entre agriculteurs, distributeurs et clients. Accédez à des services
                    de conseil et de formation en ligne pour développer votre activité.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Plateforme d&apos;échange avec les acteurs du marché</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Services de conseil personnalisés</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Formation en ligne pour les agriculteurs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="chatbot" className="p-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <img
                  alt="Chatbot intelligent"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Chatbot intelligent</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Notre chatbot intelligent répond à toutes vos préoccupations agricoles en temps réel. Obtenez des
                    conseils personnalisés et des solutions à vos problèmes spécifiques.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Réponses instantanées à vos questions</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Conseils personnalisés pour vos cultures</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
                      <span>Assistance 24/7 pour vos problèmes agricoles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Témoignages</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Découvrez ce que nos utilisateurs disent d&apos;AgroConnect.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <TestimonialCard
              quote="Grâce à AgroConnect, j'ai pu augmenter ma production de 30% en identifiant les maladies de mes cultures à temps."
              author="Jean Mbarga"
              role="Agriculteur, Yaoundé"
            />
            <TestimonialCard
              quote="La cartographie des sols m'a permis de mieux comprendre mes terres et d'optimiser mes plantations. Un outil révolutionnaire !"
              author="Marie Ekambi"
              role="Agricultrice, Douala"
            />
            <TestimonialCard
              quote="Le module AgroFlow a transformé ma façon de vendre mes produits. Je trouve maintenant facilement des acheteurs au meilleur prix."
              author="Paul Nkodo"
              role="Producteur de cacao, Kribi"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos offres</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choisissez l&apos;offre qui correspond le mieux à vos besoins.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <PricingCard
              title="Gratuit"
              price="0"
              description="Idéal pour débuter avec AgroConnect"
              features={[
                "Suivi des cultures (fonctionnalités limitées)",
                "Accès au chatbot (5 questions/jour)",
                "Cartographie de base",
                "Accès à la communauté AgroPlayce",
              ]}
              buttonText="Commencer gratuitement"
              buttonVariant="outline"
            />
            <PricingCard
              title="Premium"
              price="5 000"
              description="Pour les agriculteurs qui veulent optimiser leur production"
              features={[
                "Suivi complet des cultures",
                "Détection avancée des maladies",
                "Cartographie détaillée des sols",
                "Accès illimité au chatbot",
                "Statistiques de marché en temps réel",
              ]}
              buttonText="Essai gratuit de 30 jours"
              buttonVariant="default"
              popular={true}
            />
            <PricingCard
              title="Entreprise"
              price="15 000"
              description="Pour les grandes exploitations agricoles"
              features={[
                "Toutes les fonctionnalités Premium",
                "Analyse avancée des sols",
                "Prévisions de rendement",
                "Services dédiés et personnalisés",
                "Formation et support prioritaires",
                "Intégration avec vos systèmes existants",
              ]}
              buttonText="Contacter l'équipe commerciale"
              buttonVariant="outline"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 dark:bg-green-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Prêt à révolutionner votre agriculture ?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rejoignez AgroConnect dès aujourd&apos;hui et transformez votre exploitation agricole grâce à la
                technologie.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Commencer gratuitement
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                Demander une démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function DashboardCard({ title, description, icon }) {
  return (
    <Card className="flex flex-col items-center text-center p-4 h-full">
      <div className="mb-4 rounded-full bg-green-100 p-2 dark:bg-green-900">{icon}</div>
      <CardHeader className="p-0 pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-sm text-gray-500 dark:text-gray-400">{description}</CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author, role }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-green-600">"</div>
          </div>
          <p className="text-gray-500 dark:text-gray-400">{quote}</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PricingCard({ title, price, description, features, buttonText, buttonVariant = "default", popular = false }) {
  return (
    <Card className={`flex flex-col ${popular ? "border-green-600 dark:border-green-400 shadow-lg" : ""}`}>
      <CardHeader>
        {popular && <Badge className="w-fit mb-2 bg-green-600 hover:bg-green-700">Populaire</Badge>}
        <CardTitle>{title}</CardTitle>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "0" && <span className="text-sm text-gray-500 dark:text-gray-400">FCFA/mois</span>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-green-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={buttonVariant}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}

