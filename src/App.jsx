import './App.css'
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { ShowProvider } from './contexts/ShowProvider';

function App() {
  return (
    <ShowProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.HomePage />}/>
          <Route path="/shows" element={<Pages.ShowsPage />}/>
          <Route path="/shows/:id" element={<Pages.ShowPage />}/>
          <Route path="/search" element={<Pages.SearchPage />}/>
          <Route path="*" element={<Pages.NotFoundPage />}/>
        </Route>
      </Routes>
    </ShowProvider>
  )
}

export default App