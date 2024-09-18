import './globals.css';

export const metadata = {
  title: 'Shivansh Soni | Personal Website',
  description: 'Welcome to Shivansh’s personal website built with Next.js!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto-mono">
        <main>{children}</main>
      </body>
    </html>
  );
}
