import "./globals.css";
import Menu from "@/app/components/Menu";
import CustomerInformation from "./components/CustomerInformation";

export const metadata = {
  title: "LochmannWeb",
  description: "Enhance Your Website's Performance & Impact",
}; 

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <body>
        {/* <Menu /> */}
          <main>
          {children}
          </main>
        {/* <CustomerInformation /> */}
      </body>
    </html>
  );
}
