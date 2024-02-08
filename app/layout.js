import Navbar from "@/app/navbar/navbar";
import './globals.css';

// Define the RootLayout component
export default function RootLayout({ children }) {
  return (
    // Root HTML structure for the layout
    <html lang="en">
      <body>
        {/* Include the Navbar component */}
        <Navbar />
        {/* Render the children components */}
        {children}
      </body>
    </html>
  );
}

