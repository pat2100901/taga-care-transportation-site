import "./globals.css";

export const metadata = {
  title: "[Business Name] | Care Support and Transportation",
  description:
    "Non-medical personal care support and dependable transportation services for daily assistance, community access, and connection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
