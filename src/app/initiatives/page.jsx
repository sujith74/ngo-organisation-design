import { InitiativesSection } from '../components/InitiativesSection';
import { PaletteProvider } from '../context/PaletteContext.jsx';


export default function InitiativesPage() {
  return (
    <div>
      <PaletteProvider>
      <InitiativesSection />
      </PaletteProvider>
    </div>
  );
}