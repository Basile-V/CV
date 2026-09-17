# CV interactif — Basile

Site vitrine one-page présentant le parcours de Basile (Software Engineer
Java / Spring / Kafka / Angular) : hero animé, timeline d'expériences avec
détails au clic, compétences, missions phares et contact. Disponible en
français (`/`) et en anglais (`/en/`).

## Stack

- **[Astro](https://astro.build)** — SSG, zéro JS par défaut
- **[GSAP](https://gsap.com) + ScrollTrigger** — animations et reveals au scroll
- **[Lenis](https://lenis.darkroom.engineering)** — smooth scroll, synchronisé avec ScrollTrigger
- Déploiement visé : **Cloudflare Pages**

Voir [CLAUDE.md](./CLAUDE.md) pour le détail des choix techniques.

## Structure du projet

```text
/
├── public/                  # assets statiques (favicon...)
├── src/
│   ├── data/
│   │   ├── types.ts           # interfaces partagées (Profile, Experience, UiStrings, Locale...)
│   │   ├── fr.ts               # contenu + textes d'interface en français (locale par défaut)
│   │   └── en.ts               # contenu + textes d'interface en anglais
│   ├── layouts/
│   │   └── Layout.astro       # squelette HTML, meta, lang, bouton scroll-to-top, script global
│   ├── scripts/
│   │   └── main.ts            # init Lenis + GSAP/ScrollTrigger, reveals, expand/collapse, scroll-to-top
│   ├── styles/
│   │   └── global.css         # design tokens (couleurs, typo, spacing)
│   ├── components/
│   │   ├── Header.astro       # nav sticky avec ancres + bouton FR/EN
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro   # timeline animée, cartes expand/collapse
│   │   ├── Skills.astro
│   │   ├── Projects.astro     # missions phares
│   │   ├── Contact.astro      # liens simples (mailto...)
│   │   ├── Footer.astro
│   │   └── ScrollToTop.astro  # bouton flottant de retour en haut de page
│   └── pages/
│       ├── index.astro        # page française, route "/"
│       └── en/
│           └── index.astro    # page anglaise, route "/en/"
└── package.json
```

Tout le contenu (profil, compétences, expériences, projets, contact) et
tous les textes d'interface (nav, boutons, titres de section) sont
centralisés dans `src/data/fr.ts` et `src/data/en.ts`, qui implémentent
tous deux le type `Locale` défini dans `src/data/types.ts`. Les composants
ne lisent jamais de texte en dur : ils reçoivent l'objet `locale` complet
en prop depuis la page (`index.astro` ou `en/index.astro`) et piochent
dedans (`locale.profile`, `locale.ui.hero`, etc.). Pour mettre à jour le
CV, il suffit de modifier `fr.ts` (et `en.ts` pour la traduction
correspondante) — aucun composant n'a besoin d'être touché.

## Commandes

| Commande           | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`        | Installe les dépendances                          |
| `npm run dev`         | Lance le serveur de dev sur `localhost:4321`      |
| `npm run build`       | Build de production dans `./dist/`                |
| `npm run preview`     | Prévisualise le build en local avant déploiement  |

## À faire avant mise en ligne

- [ ] Ajouter une photo de profil (`src/assets/`) et l'intégrer dans `Hero.astro` / `About.astro`
- [ ] Compléter `contactLinks` dans `src/data/fr.ts` et `src/data/en.ts` avec LinkedIn / GitHub si souhaité
- [ ] Connecter le repo à Cloudflare Pages (build command `npm run build`, dossier de sortie `dist/`)
- [ ] Configurer un nom de domaine personnalisé depuis le dashboard Cloudflare

## Déploiement — Cloudflare Pages

1. Pousser le repo sur Git (GitHub/GitLab)
2. Dans Cloudflare Pages : connecter le repo
3. Build command : `npm run build`
4. Output directory : `dist`
5. Chaque push sur la branche principale redéploie automatiquement
