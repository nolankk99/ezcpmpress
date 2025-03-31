import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCompressor from "./components/ImageCompressor";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <main className="flex-grow container mx-auto px-4 pt-4 pb-12">
        <Header />
        <div className="mt-4">
          <ImageCompressor />
        </div>
      </main>
      <Footer />
    </div>
  );
}
