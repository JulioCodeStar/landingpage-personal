"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Sin backend: abre el cliente de correo con el mensaje listo.
    const subject = encodeURIComponent(`Contacto desde tu portafolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Nombre</label>
        <Input
          id="name" required value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input
          id="email" type="email" required value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
        <Textarea
          id="message" required rows={5} value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Cuéntame sobre tu proyecto"
        />
      </div>
      <Button type="submit" size="lg" className="rounded-full">
        Enviar mensaje →
      </Button>
    </form>
  );
}