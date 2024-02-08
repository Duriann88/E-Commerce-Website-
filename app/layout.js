<<<<<<< HEAD
import Navbar from "@/app/navbar/navBar";
=======
import Navbar from "@/app/NavBar/Navbar";
import './globals.css';
>>>>>>> 38e552ccf3cce138a35393c77b0ef021bedad0bf

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
