import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/SpinnerMain';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));


const App = () => {



    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />

                            <Route path="/comics" element={<ComicsPage />} />

                            <Route path='*' element={<Page404 />} />

                            <Route path='/comics/:comicId' element={<SingleComicPage />} />
                        </Routes>
                    </Suspense>

                </main>
            </div>
        </BrowserRouter>

    )
}



export default App;