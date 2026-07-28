/**
 * Client-side wishlist + project builder state, persisted to localStorage.
 * Can be moved to a backend later by swapping the persistence layer;
 * component contracts don't change.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ProjectItem, WishlistItem } from "./types";

const WISH_KEY = "dimena.wishlist.v1";
const PROJ_KEY = "dimena.project.v1";

interface StoreCtx {
  wishlist: WishlistItem[];
  project: ProjectItem[];
  isWished: (id: string) => boolean;
  toggleWish: (id: string) => void;
  addToProject: (id: string, qty?: number) => void;
  removeFromProject: (id: string) => void;
  updateProjectQty: (id: string, qty: number) => void;
  updateProjectNote: (id: string, note: string) => void;
  clearProject: () => void;
  hydrated: boolean;
}

const Ctx = createContext<StoreCtx | null>(null);

function readLS<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [project, setProject] = useState<ProjectItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setWishlist(readLS<WishlistItem[]>(WISH_KEY, []));
    setProject(readLS<ProjectItem[]>(PROJ_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(PROJ_KEY, JSON.stringify(project));
  }, [project, hydrated]);

  const isWished = useCallback(
    (id: string) => wishlist.some((w) => w.productId === id),
    [wishlist],
  );

  const toggleWish = useCallback((id: string) => {
    setWishlist((prev) =>
      prev.some((w) => w.productId === id)
        ? prev.filter((w) => w.productId !== id)
        : [...prev, { productId: id, addedAt: Date.now() }],
    );
  }, []);

  const addToProject = useCallback((id: string, qty = 1) => {
    setProject((prev) => {
      const existing = prev.find((p) => p.productId === id);
      if (existing) {
        return prev.map((p) =>
          p.productId === id ? { ...p, quantity: p.quantity + qty } : p,
        );
      }
      return [...prev, { productId: id, quantity: qty, addedAt: Date.now() }];
    });
  }, []);

  const removeFromProject = useCallback((id: string) => {
    setProject((prev) => prev.filter((p) => p.productId !== id));
  }, []);

  const updateProjectQty = useCallback((id: string, qty: number) => {
    setProject((prev) =>
      prev.map((p) =>
        p.productId === id ? { ...p, quantity: Math.max(1, qty) } : p,
      ),
    );
  }, []);

  const updateProjectNote = useCallback((id: string, note: string) => {
    setProject((prev) =>
      prev.map((p) => (p.productId === id ? { ...p, note } : p)),
    );
  }, []);

  const clearProject = useCallback(() => setProject([]), []);

  const value = useMemo<StoreCtx>(
    () => ({
      wishlist,
      project,
      isWished,
      toggleWish,
      addToProject,
      removeFromProject,
      updateProjectQty,
      updateProjectNote,
      clearProject,
      hydrated,
    }),
    [
      wishlist,
      project,
      isWished,
      toggleWish,
      addToProject,
      removeFromProject,
      updateProjectQty,
      updateProjectNote,
      clearProject,
      hydrated,
    ],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore must be used inside <StoreProvider>");
  return v;
}
