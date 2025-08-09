import { Layout } from '@/components/Layout';
import About from '@/pages/About';
import Home from '@/pages/Home';
import { ThemeProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import './i18n';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        storageKey='vite-ui-theme'
      >
        <BrowserRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Routes>
            <Route
              element={
                <Layout>
                  <Outlet />
                </Layout>
              }
            >
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
