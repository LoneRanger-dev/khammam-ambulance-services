import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-navy-950 text-white relative">
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer />
      <StickyCallButton />
      <FloatingWhatsApp />
    </div>
  );
}
