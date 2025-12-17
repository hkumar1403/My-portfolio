export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 px-8 md:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Hemant Kumar
        </p>

        {/* Right */}
        <p className="text-sm">
          Built with <span className="text-gray-400">Next.js</span> &{" "}
          <span className="text-gray-400">Tailwind CSS</span>
        </p>

      </div>
    </footer>
  );
}
