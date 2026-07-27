import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StoreProvider } from "@/lib/store";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-6 font-display text-6xl text-ivory">Not Found</h1>
        <p className="mt-4 text-sm text-ivory/50">
          The page you're looking for has been moved, renamed, or never existed.
        </p>
        <a
          href="/"
          className="mt-10 inline-block border border-gold px-8 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gold transition-colors hover:bg-gold hover:text-void"
        >
          Return home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-void px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-6 font-display text-4xl text-ivory">
          This page didn't load.
        </h1>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-gold bg-gold px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-void hover:brightness-110"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-hairline px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0a" },
      {
        title: "Dimena — Architectural Interiors, Doors & Hardware",
      },
      {
        name: "description",
        content:
          "Dimena is a design, supply and installation atelier for architectural doors, hardware, kitchens, lighting, wardrobes and complete interior systems.",
      },
      { name: "author", content: "Dimena Studio" },
      {
        property: "og:title",
        content: "Dimena — Architectural Interiors, Doors & Hardware",
      },
      {
        property: "og:description",
        content:
          "A design, supply and installation atelier for the world's most considered interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Header />
        <main className="pt-16 lg:pt-20">
          <Outlet />
        </main>
        <Footer />
      </StoreProvider>
    </QueryClientProvider>
  );
}
