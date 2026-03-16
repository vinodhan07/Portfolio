export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground text-sm font-medium text-center tracking-wide">
          © {currentYear} <span className="text-primary hover:scale-110 transition-transform inline-block cursor-default">Vinodhan V A</span>. Crafted with passion & AI.
        </p>
      </div>
    </footer>
  );
}
