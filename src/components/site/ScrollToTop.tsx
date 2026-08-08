import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets the scroll position to the top of the page whenever the route
 * changes. When a hash is present (e.g. navigating to /#departments on the
 * home page), it defers to the target page's own scroll-to-section logic.
 */
export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) return; // let the home page handle hash-based section scrolling
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname, hash]);

    return null;
}
