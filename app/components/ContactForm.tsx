"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    // Add Web3Forms access key - PLACEHOLDER, update with real key
    formData.append("access_key", "55f6ef52-a73c-43c3-8b5f-cb3cfae5a375");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
          Message envoyé !
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Je vous répondrai sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium mb-2">
          Nom *
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="entreprise" className="block text-sm font-medium mb-2">
          Entreprise *
        </label>
        <input
          type="text"
          id="entreprise"
          name="entreprise"
          required
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="besoin" className="block text-sm font-medium mb-2">
          Ton besoin *
        </label>
        <textarea
          id="besoin"
          name="besoin"
          required
          rows={5}
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </Button>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
        Pas de spam. Juste une réponse claire.
      </p>
    </form>
  );
}
