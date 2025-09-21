"use client"

import { Button } from "@/components/ui/button"

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

export function WhatsAppButton() {
  const whatsappLink = "https://wa.me/5549988072151?text=Olá%20gostaria%20de%20uma%20consulta"

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none bg-green-500 hover:bg-green-600 lg:hidden"
      aria-label="Entrar em contato via WhatsApp"
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </Button>
  )
}
