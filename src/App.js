import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Favorite } from './pages/Favorite';
function App() {
    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route index path='/' element={<HomePage />}></Route>
                    <Route path='/fav' element={<Favorite />}></Route>
                </Routes>
            </Main>
        </>
    );
}

export default App;
