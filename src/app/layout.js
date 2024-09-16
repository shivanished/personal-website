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
        <footer className="text-center mt-10 text-gray-500">
          © 2024 Shivansh Soni. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
