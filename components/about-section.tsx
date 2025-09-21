import { Card, CardContent } from "@/components/ui/card"

const AwardIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const TargetIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const HeartIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Sobre a SC Advocacia</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fundada com o propósito de oferecer serviços jurídicos de excelência, a SC Advocacia se consolidou como
            referência em advocacia e consultoria jurídica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Nossa História</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A SC Advocacia nasceu da visão de criar um escritório que combinasse tradição jurídica com inovação e
              atendimento humanizado. Ao longo dos anos, construímos uma reputação sólida baseada na confiança,
              competência técnica e resultados efetivos.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados, com vasta experiência em diversas áreas
              do direito, sempre comprometidos em oferecer soluções jurídicas personalizadas e estratégicas para cada
              cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acreditamos que o sucesso de nossos clientes é o nosso sucesso, por isso trabalhamos incansavelmente para
              superar expectativas e construir relacionamentos duradouros baseados na confiança mútua e na excelência
              profissional.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <AwardIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Excelência</h4>
                    <p className="text-muted-foreground text-sm">
                      Compromisso com a qualidade técnica e atualização constante das melhores práticas jurídicas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <TargetIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Resultados</h4>
                    <p className="text-muted-foreground text-sm">
                      Foco em estratégias eficazes que geram resultados concretos e satisfatórios para nossos clientes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <HeartIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Humanização</h4>
                    <p className="text-muted-foreground text-sm">
                      Atendimento próximo e personalizado, entendendo as necessidades específicas de cada cliente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutSection }
