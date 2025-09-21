import "./globals.css";
import Banner from './components/Banner'

export const metadata = {
  title: "LOCHMANNWEB",
  description: "",
}; 

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <body>
        <Banner />
          <main>
          {children}
          </main>
      </body>
    </html>
  );
}
