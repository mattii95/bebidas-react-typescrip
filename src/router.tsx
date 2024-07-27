import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexView from "./views/IndexView"
import Layout from "./layouts/Layout"

const FavoritesView = lazy(() => import('./views/FavoritesView'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexView />} index />
                    <Route path="/favorites" element={
                        <Suspense fallback="Cargando...">
                            <FavoritesView />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
