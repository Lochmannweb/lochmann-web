import "./globals.css";
import Menu from "@/app/components/Menu";
import CustomerInformation from "./components/CustomerInformation";

export const metadata = {
  title: "LochmannWeb",
  description: "",
}; 

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Menu />
          <main>
          {children}
          </main>
        <CustomerInformation />
      </body>
    </html>
  );
}
