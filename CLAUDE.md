# CV interactif — Fiche projet

## Objectif
Site CV/portfolio personnel avec effets "wouah" (site vitrine / expérience),
pensé par un développeur principalement backend. Priorité : impact visuel au
scroll, performance, déploiement simple.

## Stack technique

| Domaine       | Choix                          | Raison |
|----------------|--------------------------------|--------|
| Framework      | **Astro**                      | SSG par défaut (zéro JS envoyé sauf besoin), islands architecture pour isoler le JS interactif, multi-framework si besoin |
| Animations     | **GSAP + ScrollTrigger**       | Standard de l'industrie, agnostique de tout framework JS, gratuit (100% depuis 2024), doc abondante, idéal pour reveal/parallax/pin au scroll |
| Smooth scroll  | **Lenis**                      | Scroll fluide, s'intègre nativement avec GSAP ScrollTrigger |
| Hébergement    | **Cloudflare Pages**           | Déploiement auto depuis Git, CDN edge global gratuit, config minimale |
| Backend léger (si besoin) | **Cloudflare Pages Functions** (Workers) | Pour formulaire de contact / logique serveur ponctuelle, JS/TS — cohérent avec un profil backend |

## Architecture Astro
- `src/pages/` : une page = une route (`index.astro` pour la home one-page)
- `src/components/` : composants `.astro` statiques par défaut
- Les composants avec animation JS utilisent les directives `client:*` :
  - `client:load` → hydraté immédiatement (ex: init GSAP/Lenis global)
  - `client:visible` → hydraté à l'entrée dans le viewport (sections en bas de page)
- Le reste du contenu (texte, structure, mise en page) reste en HTML/CSS statique, sans JS inutile

## Approche animations
- GSAP + ScrollTrigger pour : reveal de sections au scroll, parallax, pin de sections,
  animation de texte (split/reveal), transitions entre blocs
- Lenis pour un scroll fluide global (indispensable pour l'effet "site vitrine" premium)
- Garder Three.js **hors scope initial** — à envisager plus tard uniquement pour un
  élément 3D ponctuel si le temps le permet (courbe d'apprentissage plus raide)

## Déploiement
- Repo Git → connecté à Cloudflare Pages (build auto à chaque push)
- Build command : `npm run build` (sortie Astro par défaut : `dist/`)
- Domaine personnalisé configurable directement dans Cloudflare

## Structure de contenu du CV (à adapter)
- Hero (nom, titre, accroche) — avec animation d'entrée marquante
- À propos
- Expériences professionnelles (timeline animée au scroll)
- Compétences techniques
- Projets phares (avec liens repo/démo)
- Contact (formulaire → Cloudflare Pages Function si besoin d'envoi d'email)

## Étapes de démarrage
1. `npm create astro@latest`
2. Ajouter GSAP + Lenis : `npm install gsap @studio-freight/lenis` (ou équivalent maintenu à vérifier)
3. Configurer déploiement Cloudflare Pages (connecter le repo)
4. Construire section par section, en ajoutant les animations une fois le contenu statique en place
