import './globals.css';

export const metadata = {
  title: 'Shivansh Soni | Personal Website',
  description: 'Welcome to Shivansh’s personal website built with Next.js!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
