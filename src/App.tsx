import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "@/lib/store";

// Layout
import { RootLayout } from "@/components/site/RootLayout";

// Route pages
import { Home } from "@/routes/index";
import { About } from "@/routes/about";
import { Contact } from "@/routes/contact";
import { Catalog } from "@/routes/products";
import { ProductDetail } from "@/routes/products.$slug";
import { CategoryPage } from "@/routes/categories.$slug";
import { Inspiration } from "@/routes/inspiration";
import { Projects } from "@/routes/projects";
import { ProjectBuilder } from "@/routes/project-builder";
import { Services } from "@/routes/services";
import { WishlistPage } from "@/routes/wishlist";
import { NotFound } from "@/routes/not-found";

const queryClient = new QueryClient();

export function App() {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <StoreProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<RootLayout />}>
                                <Route index element={<Home />} />
                                <Route path="products" element={<Catalog />} />
                                <Route path="products/:slug" element={<ProductDetail />} />
                                <Route path="categories/:slug" element={<CategoryPage />} />
                                <Route path="inspiration" element={<Inspiration />} />
                                <Route path="projects" element={<Projects />} />
                                <Route path="project-builder" element={<ProjectBuilder />} />
                                <Route path="services" element={<Services />} />
                                <Route path="about" element={<About />} />
                                <Route path="contact" element={<Contact />} />
                                <Route path="wishlist" element={<WishlistPage />} />
                                <Route path="*" element={<NotFound />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </StoreProvider>
            </QueryClientProvider>
        </HelmetProvider>
    );
}

