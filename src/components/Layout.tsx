import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-1 container mx-auto py-8'>{children}</main>
    </div>
  );
}
