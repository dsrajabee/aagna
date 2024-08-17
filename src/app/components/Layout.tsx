import { ReactNode } from 'react';
// import Link from 'next/link';
// import Works from '../works/page';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
//   const Works = useWorks();
  const tabs = [
    { name: 'Website', path: '/' },
    { name: 'Logo', path: '/logo' },
    { name: 'Graphics Design', path: '/graphics' },
  
  ];

  return (
    <>
    {/* <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-2 text-xl font-bold">My Website</span>
        </div>
        <nav className="space-x-4">
          {tabs.map((tab) => (
            <Link key={tab.path} href={tab.path}>
              <a className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === tab.path ? 'text-yellow-400' : 'text-gray-300'}`}>
                {tab.name}
              </a>
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
     
    </div> */}
    
    
    </>
  );
};

export default Layout;
function useWorks() {
    throw new Error('Function not implemented.');
}

