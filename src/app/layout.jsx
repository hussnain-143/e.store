import "./globals.css";


export const metadata = {
  title: {
    template: '%s | E.Store',
    default: 'E.Store | Home',
  },
  description: "Discover and shop the best electronic gadgets, accessories, and more at E.Store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
