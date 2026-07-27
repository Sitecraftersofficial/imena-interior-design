import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page not found — Dimena</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="flex min-h-screen items-center justify-center bg-void px-6">
                <div className="max-w-md text-center">
                    <p className="eyebrow">Error 404</p>
                    <h1 className="mt-6 font-display text-6xl text-ivory">Not Found</h1>
                    <p className="mt-4 text-sm text-ivory/50">
                        The page you're looking for has been moved, renamed, or never existed.
                    </p>
                    <Link
                        to="/"
                        className="mt-10 inline-block border border-gold px-8 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gold transition-colors hover:bg-gold hover:text-void"
                    >
                        Return home
                    </Link>
                </div>
            </div>
        </>
    );
}

