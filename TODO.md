# Task: Relocate to Kigali, Rwanda & Change Currency to RWF

## Steps
- [x] 1. **Create TODO.md** — Track progress
- [x] 2. **`src/lib/format.ts`** — Change default currency `EUR` → `RWF`, locale `en-GB` → `en-RW`
- [x] 3. **`src/data/products.ts`** — Change all `currency: "EUR"` → `currency: "RWF"` (6 products), fix indentation & Lighting section header
- [x] 4. **`src/components/site/Footer.tsx`** — Replace "Milan · London · Dubai" → "Kigali, Rwanda"
- [x] 5. **`src/routes/contact.tsx`** — Update address (Kacyiru), phone (+250), showrooms, meta descriptions
- [x] 6. **`src/routes/index.tsx`** — Update "Est. Kigali" and "atelier in Kigali" text
- [x] 7. **`src/routes/about.tsx`** — Update founding location (Kigali), regions (Rwanda & East Africa), stats, heading
- [x] 8. **`src/routes/inspiration.tsx`** — Update room locations to Kigali/Rwanda
- [x] 9. **`src/routes/services.tsx`** — Update meta description to reference Kigali

## Summary of Changes

### Currency
- **`src/lib/format.ts`**: Default `EUR` → `RWF`, locale `en-GB` → `en-RW`
- **`src/data/products.ts`**: 6 products updated from `currency: "EUR"` → `currency: "RWF"`

### Location
- **Footer**: "Milan · London · Dubai" → "Kigali, Rwanda"
- **Home page**: "Est. Milan" → "Est. Kigali", "atelier in Milan" → "atelier in Kigali"
- **Contact page**: Address → KG 7 Ave, Kacyiru, Kigali; Phone → +250 788 000 000; Showrooms → Kigali · Kacyiru
- **About page**: Founded in Kigali (removed 1984); serves Rwanda & East Africa; Stats: 2016, 8 countries, 200+ projects
- **Inspiration page**: All locations changed to "Kigali, Rwanda" or "Kigali Showroom"
- **Services page**: Meta description references Kigali, Rwanda
- **Products**: "Milan atelier" → "Kigali atelier" in accessory descriptions

