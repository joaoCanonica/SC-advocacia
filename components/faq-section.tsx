import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Qual o prazo para resolução do meu caso?",
      answer:
        "Os prazos variam conforme a complexidade e natureza de cada caso. Processos administrativos podem levar de 30 a 90 dias, enquanto ações judiciais podem durar meses ou anos. Fornecemos estimativas realistas durante a consulta inicial.",
    },
    {
      question: "Quais documentos preciso levar na primeira consulta?",
      answer:
        "Traga documentos pessoais (RG, CPF), comprovantes relacionados ao caso (contratos, correspondências, laudos) e qualquer documentação que considere relevante. Nossa equipe orientará sobre documentos específicos após análise inicial.",
    },
    {
      question: "Como são calculados os honorários advocatícios?",
      answer:
        "Os honorários são definidos conforme a complexidade do caso, tempo estimado e modalidade de cobrança (fixo, por hora ou êxito). Apresentamos proposta transparente com todas as condições antes do início dos trabalhos.",
    },
    {
      question: "A primeira consulta é gratuita?",
      answer:
        "Oferecemos uma avaliação inicial gratuita de 30 minutos para entender seu caso e verificar se podemos ajudá-lo. Consultas mais detalhadas e elaboração de pareceres têm custo específico.",
    },
    {
      question: "Como posso acompanhar o andamento do meu processo?",
      answer:
        "Mantemos contato regular por telefone, e-mail e WhatsApp. Você receberá relatórios periódicos sobre o andamento e será informado sobre todas as movimentações importantes do seu caso.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Aceitamos pagamento à vista (dinheiro, PIX, cartão) com desconto, ou parcelamento via cartão de crédito e boleto bancário. Para casos de êxito, oferecemos modalidade de cobrança apenas em caso de resultado positivo.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços jurídicos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
