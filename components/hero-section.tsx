"use client"

import { Button } from "@/components/ui/button"

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
  </svg>
)

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/5549988072151?text=Olá%20gostaria%20de%20uma%20consulta", "_blank")
  }

  return (
    <section id="inicio" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#059669" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-teal-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-25"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img src="/logo-sc-advocacia.png" alt="SC Advocacia Logo" className="h-24 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 font-serif">
            Sc Advocacia: Assessoria jurídica clara e personalizada
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Atuação em Família, Trabalhista, Civil e Empresarial. Atendimento humano, prazos e transparência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("contato")}
            >
              Agendar consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              onClick={openWhatsApp}
            >
              Falar no WhatsApp
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 font-serif">Excelência</h3>
                <p className="text-slate-600 leading-relaxed">
                  Padrão superior de qualidade em todos os serviços jurídicos, com atenção meticulosa aos detalhes e
                  busca constante pela perfeição.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-teal-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 font-serif">Resultados</h3>
                <p className="text-slate-600 leading-relaxed">
                  Foco em soluções eficazes e resultados concretos, com estratégias jurídicas personalizadas para cada
                  situação específica.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 font-serif">Humanização</h3>
                <p className="text-slate-600 leading-relaxed">
                  Atendimento próximo e empático, compreendendo as necessidades individuais de cada cliente com
                  dedicação e cuidado pessoal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
