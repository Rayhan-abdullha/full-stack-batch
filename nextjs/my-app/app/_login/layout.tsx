import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          >
              <nav>
                  <ul>
                      <li><Link href={'/'}>Register</Link></li>
                  </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
