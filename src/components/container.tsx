export default function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-[1440px] mx-auto px-6 md:px-12 w-full ${className}`}>
      {children}
    </div>
  );
}
