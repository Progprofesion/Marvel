import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';


const App = () => {



    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />

                        <Route path="/comics" element={<ComicsPage />} />

                        <Route path='*' element={<Page404 />} />

                        <Route path='/comics/:comicId' element={<SingleComicPage />} />
                    </Routes>

                </main>
            </div>
        </BrowserRouter>

    )
}



export default App;