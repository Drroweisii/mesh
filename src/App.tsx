import React from 'react';
import { Layout } from './components/Layout';
import { MobileHeader } from './components/navigation/MobileHeader';
import { GameContainer } from './components/Game/GameContainer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <Layout isSidebarOpen={isSidebarOpen} onCloseSidebar={() => setIsSidebarOpen(false)}>
        <main className="p-4 lg:p-8 mt-16 lg:mt-0">
          <div className="max-w-7xl mx-auto">
            <GameContainer />
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default App;