import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import About from '@/pages/About';
import Home from '@/pages/Home';
import './i18n'; // Import i18n configuration to initialize it
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@/components/theme-provider';
import { Layout } from '@/components/Layout';
import i18n from './i18n'; // Import the configured instance

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
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
