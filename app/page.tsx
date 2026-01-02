'use client';

import { useState } from 'react';
import { Clock, Shield, TrendingUp, Database, Workflow, Cloud, Code } from 'lucide-react';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { Card } from './components/Card';
import { Accordion } from './components/Accordion';
import { ContactForm } from './components/ContactForm';

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-zinc-50 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900">
            CloudFaktory — j'automatise tes process et je rends tes données actionnables.
          </h1>

          <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto">
            Tu es une TPE/PME et tu perds du temps sur des tâches répétitives, des fichiers dispersés, ou des relances manuelles ?
            <br />
            Je transforme ça en <strong className="text-zinc-900">workflows automatiques</strong> + <strong className="text-zinc-900">tableaux de bord clairs</strong>, <strong className="text-zinc-900">100% remote</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button onClick={() => setIsCalendlyOpen(true)}>
              👉 Planifier un appel de 15 min
            </Button>
            <Button variant="secondary" onClick={() => setIsContactOpen(true)}>
              ✉️ Décrire ton besoin
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Ce que tu gagnes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="benefit">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-zinc-900">Du temps</h3>
              <p className="text-zinc-700">
                Moins de copier-coller, moins de tâches manuelles
              </p>
            </Card>

            <Card variant="benefit">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-zinc-900">De la fiabilité</h3>
              <p className="text-zinc-700">
                Moins d'erreurs, des process reproductibles
              </p>
            </Card>

            <Card variant="benefit">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-zinc-900">De la visibilité</h3>
              <p className="text-zinc-700">
                Des KPI simples pour piloter sans prise de tête
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="service" className="relative">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900">Automatisation de process</h3>
              <p className="text-zinc-700 mb-4">
                Relances, synchronisation d'outils, génération automatique de documents, alertes, onboarding, reporting…
              </p>
              <p className="text-sm italic text-blue-700 font-medium">
                👉 Objectif : que ça tourne tout seul.
              </p>
            </Card>

            <Card variant="service" className="relative">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900">Données & pilotage (KPI)</h3>
              <p className="text-zinc-700 mb-4">
                Nettoyage, consolidation, KPI, dashboards, reporting automatique.
              </p>
              <p className="text-sm italic text-blue-700 font-medium">
                👉 Objectif : des chiffres fiables pour décider vite.
              </p>
            </Card>

            <Card variant="service" className="relative">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900">Solutions techniques sur mesure</h3>
              <p className="text-zinc-700 mb-4">
                Intégrations API, scripts, connecteurs, cloud, petites apps internes.
              </p>
              <p className="text-sm italic text-blue-700 font-medium">
                👉 Objectif : une solution simple, maintenable et documentée.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Comment on bosse
          </h2>

          <div className="grid md:grid-cols-5 gap-4 md:gap-2">
            {[
              { num: 1, title: 'Appel découverte (15 min)', desc: 'On clarifie le besoin et le "pourquoi"' },
              { num: 2, title: 'Mini audit', desc: 'Je repère les quick wins et les contraintes' },
              { num: 3, title: 'Prototype', desc: 'Une première version rapide et testable' },
              { num: 4, title: 'Déploiement', desc: 'Sécurisation, tests, documentation' },
              { num: 5, title: 'Transfert', desc: 'Tu gardes la main (et je peux assurer le suivi si tu veux)' },
            ].map((step, index) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4 relative z-10">
                  {step.num}
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-zinc-300" />
                )}
                <h3 className="font-bold mb-2 text-sm md:text-base text-zinc-900">{step.title}</h3>
                <p className="text-sm text-zinc-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Exemples de cas d'usage (TPE/PME)
          </h2>

          <div className="space-y-4">
            {[
              'Leads → qualification → création automatique dans Notion/CRM → relance',
              'Devis / factures → génération + envoi + suivi + alertes de retard',
              'Reporting hebdo → collecte des données → mise en forme → envoi automatique',
              'Synchronisation entre outils (Notion, Google Workspace, Slack/Teams, etc.)',
              'Automatisation d\'onboarding : checklists, accès, documents, notifications',
            ].map((useCase, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-100'}`}
              >
                <p className="text-lg text-zinc-800">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-zinc-900">
            Stack & compatibilité
          </h2>

          <p className="text-center text-lg text-zinc-700 mb-8">
            Je m'adapte à ton existant et je privilégie les solutions simples :
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Database, label: 'Notion' },
              { icon: Workflow, label: 'Make / Zapier / n8n' },
              { icon: Cloud, label: 'Solutions cloud' },
              { icon: Code, label: 'Programmation' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 border border-zinc-300 rounded-full bg-white"
                >
                  <Icon className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-zinc-900">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            FAQ
          </h2>

          <Accordion
            items={[
              {
                question: 'Tu travailles uniquement en remote ?',
                answer: 'Oui, 100% à distance.'
              },
              {
                question: 'Tu peux reprendre une automatisation existante ?',
                answer: 'Oui : audit, correction, optimisation, documentation.'
              },
              {
                question: 'Tu fais "no-code" ou "code" ?',
                answer: 'Les deux. Je choisis l\'approche la plus simple et robuste pour ton cas.'
              },
              {
                question: 'Tu livres de la doc ?',
                answer: 'Oui. Objectif : que tu sois autonome et que ce soit maintenable.'
              }
            ]}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tu veux automatiser un truc qui te fait perdre du temps chaque semaine ?
          </h2>

          <p className="text-xl opacity-90">
            Planifie un appel de 15 min ou envoie ton besoin
            <br />
            <span className="text-sm">(réponse sous 24h ouvrées)</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-base font-medium bg-white text-blue-600 hover:bg-zinc-100 transition-colors md:w-auto md:min-w-[158px]"
            >
              👉 Planifier un appel de 15 min
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-base font-medium border-2 border-white text-white hover:bg-white/10 transition-colors md:w-auto md:min-w-[158px]"
            >
              ✉️ Décrire ton besoin
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-900 text-zinc-400">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="text-xl font-bold text-white mb-4">CloudFaktory</div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>

          <p className="text-sm pt-4">
            © 2026 CloudFaktory
          </p>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)}>
        <iframe
          src="https://calendly.com/zerzourishem/rdv-de-15-minutes"
          width="100%"
          height="700"
          frameBorder="0"
          title="Planifier un appel de 15 minutes"
        ></iframe>
      </Modal>

      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Décrire ton besoin">
        <ContactForm />
      </Modal>
    </div>
  );
}
