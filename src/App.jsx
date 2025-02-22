import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Content } from './pages/Content.jsx';

import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
      <Analytics />
      <Content />
    </>
  );
}
