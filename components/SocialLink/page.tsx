export default function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2
                 px-5 py-2 rounded-full
                 border border-white/10
                 text-sm text-gray-300
                 backdrop-blur
                 transition-all duration-300
                 hover:text-gray-700
                 hover:border-white/30
                 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
    >
      <span className="opacity-80 group-hover:opacity-100">{icon}</span>
      <span className="italic">{label}</span>
    </a>
  );
}
