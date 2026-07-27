import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function RootLayout() {
    return (
        <>
            <Header />
            <main className="pt-16 lg:pt-20">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

