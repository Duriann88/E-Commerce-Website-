import Navbar from "@/app/navbar/navBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {<Navbar />}
        {children}
      </body>
    </html>
  );
}

