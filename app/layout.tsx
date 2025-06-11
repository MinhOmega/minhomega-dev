import "@/styles/global.css";
import { poppins } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "MinhVo - Software Engineer",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScroll />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
