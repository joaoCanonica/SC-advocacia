"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

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

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

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

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
  })

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.subject.trim()) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    const message = `Olá! Meu nome é ${formData.name} e gostaria de agendar uma consulta sobre: ${formData.subject}`
    const whatsappUrl = `https://wa.me/5549988072151?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      name: "",
      subject: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDirectWhatsApp = () => {
    const whatsappUrl = `https://wa.me/5549988072151?text=${encodeURIComponent("Olá! Gostaria de falar com a SC Advocacia.")}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudá-lo com suas necessidades jurídicas. Entre em contato conosco para uma consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Agendar Consulta</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Assunto</Label>
                  <Textarea
                    id="subject"
                    name="subject"
                    rows={4}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Descreva brevemente o assunto da consulta"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar para WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                    onClick={handleDirectWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar Direto no WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Endereço</h4>
                    <p className="text-muted-foreground">
                      Ed. Rembrandt - R. Otacílio Viêira da Costa, n. 358 - 01
                      <br />
                      Centro, Lages - SC
                      <br />
                      CEP: 88501-050
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Telefone</h4>
                    <p className="text-muted-foreground">(49) 3225-1776</p>
                    <p className="text-muted-foreground">(49) 98807-2151</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">E-mail</h4>
                    <p className="text-muted-foreground">
                      saiane_canonica@hotmail.com
                      <br />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 08:30-12:00, 13:30-17:30
                      <br />
                      Sábado: Fechado
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.123456789!2d-50.3261!3d-27.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEd.+Rembrandt+-+R.+Otac%C3%ADlio+Vi%C3%AAira+da+Costa%2C+n.+358+-+01+-+Centro%2C+Lages+-+SC%2C+88501-050!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Localização SC Advocacia"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
