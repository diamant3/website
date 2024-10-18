import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Introduction } from './components/Introduction.jsx';

import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
      <Analytics />
      <Header />
      <Introduction />
      <Footer />
    </>
  );
}
