import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import LegalNotice from './pages/LegalNotice'
import TermsConditions from './pages/TermsConditions'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}
