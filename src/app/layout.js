import './globals.css';

export const metadata = {
  title: 'Shivansh Soni | Personal Website',
  description: 'Welcome to Shivansh\'s personal website!',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto-mono">
        <main>{children}</main>
      </body>
    </html>
  );
}