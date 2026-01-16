export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground text-sm text-center">
          © {currentYear} Vinodhan V A. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
