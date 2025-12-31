import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { SettingsScreen } from './pages/Settings';
import { GalleryScreen } from './pages/Gallery';
import { MandalaScreen } from './pages/Mandala';
import { ToolsScreen } from './pages/Tools';
import { Tab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.GALLERY);

  const renderScreen = () => {
    switch (activeTab) {
      case Tab.SETTINGS:
        return <SettingsScreen />;
      case Tab.GALLERY:
        return <GalleryScreen />;
      case Tab.MANDALA:
        return <MandalaScreen />;
      case Tab.TOOLS:
        return <ToolsScreen />;
      default:
        return <GalleryScreen />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderScreen()}
    </Layout>
  );
}
