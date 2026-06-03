import "./globals.css";
import { Footer, Header } from "./_components/site";

export const metadata = {
  title: "TAGA’S COMPASSIONATE CARE LLC | Indiana Medicaid Waiver Provider",
  description:
    "Attendant care, home and community assistance, and nonmedical transportation for eligible Indiana waiver participants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
