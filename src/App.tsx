import { Toaster } from 'react-hot-toast';
import { HashRouter, Route, Routes } from 'react-router-dom';
import View from './Pages/View';
import Welcome from './Pages/Welcome';

const App = () => {
    return (
        <>
            <Toaster position='bottom-right' />
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Welcome />} />

                    <Route path='/view' element={<View />} />

                    {/* <Route path='*' element={<NotFound />} /> */}
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
