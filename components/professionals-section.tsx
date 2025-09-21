import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export function ProfessionalsSection() {
  const professionals = [
    {
      name: "Dra. Saiane Canonica",
      title: "Sócia Fundadora",
      specialties: ["Direito Civil", "Direito Empresarial", "Consultoria Jurídica"],
      bio: "Advogada com mais de 15 anos de experiência, especialista em direito civil e penal. Graduada pela OAB/SC 26.594",
      image: "/saiane.png",
      email: "saiane_canonica@hotmail.com",
    },
    {
      name: "Dra. Amanda Canonica",
      title: "Advogada",
      specialties: ["Direito Trabalhista", "Direito Previdenciário"],
      bio: "Especialista em direito trabalhista e previdenciário com vasta experiência em processos complexos. Mestre em Direito do Trabalho pela PUC-SP.",
      image: "/amanda.png",
      email: "amandacanonica@gmail.com",
    },
    {
      name: "Dra. Larissa Canonica",
      title: "Advogada Associada",
      specialties: ["Direito de Família", "Direito Ambiental"],
      bio: "Advogada especializada em direito de família e ambiental, com foco em mediação e resolução amigável de conflitos. Certificada em Mediação Familiar.",
      image: "/larissa.png",
      email: "larissacanonica@gmail.com",
    },
  ]

  return (
    <section id="profissionais" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Nossa Equipe</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Profissionais altamente qualificados e comprometidos com a excelência no atendimento jurídico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-muted bg-muted/20">
                    <img
                      src={professional.image || "/placeholder.svg"}
                      alt={professional.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{professional.name}</h3>
                  <p className="text-primary font-medium mb-3">{professional.title}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {professional.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{professional.bio}</p>
                <div className="flex justify-center">
                  <a
                    href={`mailto:${professional.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
