import NavbarBawah from "@/src/component/element/navbar/navbar-bawah";
import NavbarAtas from "@/src/component/element/navbar/navbar-atas";
import {} from 'react-icons/fi';

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarAtas/>
      <NavbarBawah/>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>
    </div>
  );
}