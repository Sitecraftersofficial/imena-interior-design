# Migration Plan: TanStack Start SSR → Standard React SPA

## ✅ Completed Steps

### Step 1: Core Infrastructure

- [x] Create `index.html` entry point
- [x] Create `src/main.tsx` React entry
- [x] Create `src/App.tsx` with React Router setup
- [x] Update `vite.config.ts` (remove Lovable/TanStack config)
- [x] Update `package.json` dependencies

### Step 2: Route Conversion (12 route files)

- [x] Convert `__root.tsx` → `RootLayout.tsx` component + `App.tsx` routes
- [x] Convert `index.tsx` → Home route
- [x] Convert `about.tsx` → About route
- [x] Convert `contact.tsx` → Contact route
- [x] Convert `products.tsx` → Catalog route
- [x] Convert `products.$slug.tsx` → Product detail route
- [x] Convert `categories.$slug.tsx` → Category detail route
- [x] Convert `inspiration.tsx` → Inspiration route
- [x] Convert `projects.tsx` → Projects route
- [x] Convert `project-builder.tsx` → Project builder route
- [x] Convert `services.tsx` → Services route
- [x] Convert `wishlist.tsx` → Wishlist route
- [x] Convert `sitemap[.]xml.ts` → static `public/sitemap.xml`

### Step 3: Component Updates

- [x] Update `Header.tsx` (TanStack → React Router)
- [x] Update `Footer.tsx`
- [x] Update `ProductCard.tsx`
- [x] Update `CategoryCard.tsx`

### Step 4: Cleanup

- [x] Remove SSR/Lovable files (server.ts, start.ts, router.tsx, routeTree.gen.ts, error-capture.ts, error-page.ts, lovable-error-reporting.ts, bunfig.toml, __root.tsx)
- [x] Add Netlify deployment config (`public/_redirects`)
- [x] Create static sitemap (`public/sitemap.xml`)
- [x] Install new dependencies (react-router-dom, react-helmet-async)
- [x] Build succeeds ✅
