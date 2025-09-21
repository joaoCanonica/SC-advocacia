"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

const Briefcase = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h4a2 2 0 00-2 2v16" />
  </svg>
)

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
)

const Building2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18Z" />
    <path d="M6 12H4a2 2 0 00-2 2v8h20v-8a2 2 0 00-2-2h-2" />
  </svg>
)

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
)

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const practiceAreas = [
  {
    icon: Heart,
    title: "Direito de Família",
    items: ["Divórcio", "Pensão Alimentícia", "Guarda de Filhos"],
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    items: ["Reclamatórias Trabalhistas", "Acordos", "Assédio Moral"],
  },
  {
    icon: FileText,
    title: "Direito Civil",
    items: ["Contratos", "Responsabilidade Civil", "Indenizações"],
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    items: ["Direito Societário", "Contratos Comerciais", "Recuperação Judicial"],
  },
  {
    icon: ShoppingCart,
    title: "Direito do Consumidor",
    items: ["Cobranças Indevidas", "Garantias", "Compras Online"],
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    items: ["Aposentadoria", "Benefícios", "Revisão de Benefícios"],
  },
]

export function PracticeAreasSection() {
  return (
    <section id="areas-atuacao" className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Áreas de Atuação</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos assessoria jurídica especializada em diversas áreas do direito, sempre com excelência e dedicação
            aos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-emerald-100 hover:border-emerald-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 mb-6">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors bg-transparent"
                    onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
