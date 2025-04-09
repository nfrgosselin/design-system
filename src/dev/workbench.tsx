import { Sidebar } from '../components/navigation/Sidebar';
import { TopNav } from '../components/navigation/TopNav';
import { NewsletterSignup } from '../components/forms/NewsletterSignup';
import { useState } from 'react';
import { WorkControls } from '../components/navigation/WorkControls';
import { WorkItem } from '../components/ui/WorkItem';
import { TopNavSideBarLayout } from '../components/layout/pages/TopNavSideBarLayout';
import { WorkTopNavContent } from '../components/navigation/content/WorkTopNavContent';

export function Workbench() {
  const navItems = [
    { label: 'Work', href: '#', isActive: true },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const sortItems = [
    { label: 'Newest', href: '#', isActive: true },
    { label: 'Oldest', href: '#' },
    { label: 'AtoZ', href: '#' },
  ];

  const filterItems = [
    { label: 'All', href: '#', isActive: true },
    { label: 'Writing', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Projects', href: '#' },
  ];

  const brandProps = {
    brandName: 'Nate Gosselin',
    navItems,
    stackSpacing: 'space-y-1' as const,
  };

  // Demo form state
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>();

  const handleSubmit = async (email: string) => {
    setStatus('loading');
    setError(undefined);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!email.includes('@')) {
      setStatus('error');
      setError('Please enter a valid email address');
      return;
    }
    setStatus('success');
  };

  const topNavContent = (
    <TopNav
      brand={brandProps}
      content={
        <WorkTopNavContent
          sortControls={{
            title: 'Sort',
            navItems: sortItems,
          }}
          filterControls={{
            title: 'Filter',
            navItems: filterItems,
          }}
        />
      }
      className="col-span-4"
    />
  );

  const sidebarContent = (
    <Sidebar
      footer={
        <div className="space-y-4">
          <NewsletterSignup
            status={status}
            error={error}
            onSubmit={handleSubmit}
            headingText="Sign up for my newsletter."
            placeholder="Enter your email"
          />
        </div>
      }
    >
      <div className="py-4">
        <p className="text-xl tracking-wider text-stone-600 leading-relaxed">
          Brooklyn-based product builder and strategist.
        </p>
      </div>
    </Sidebar>
  );

  const mainContent = (
    <div className="py-4">
      <div className="space-y-0">
        <WorkItem
          projectName="MAVERICK PROTOCOL"
          description="A decentralized trading protocol built on the Ethereum blockchain, featuring an innovative automated market maker design."
          imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3"
          primaryService="Projects"
          pillColor="coral"
          year="2024"
        />
        <WorkItem
          projectName="DESIGN SYSTEM"
          description="A comprehensive design system and component library built for scale, featuring accessible and performant React components."
          imageUrl="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Writing"
          pillColor="navy"
          year="2024"
        />
        <WorkItem
          projectName="CURSOR AI"
          description="An AI-powered development environment that helps developers write, understand, and debug code faster."
          imageUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Jobs"
          pillColor="seafoam"
          year="2023"
        />
        <WorkItem
          projectName="QUANTUM LABS"
          description="A research laboratory website showcasing breakthrough discoveries in quantum computing and machine learning."
          imageUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Projects"
          pillColor="coral"
          year="2023"
        />
        <WorkItem
          projectName="ATLAS PLATFORM"
          description="Enterprise data visualization platform providing real-time insights through interactive dashboards and reports."
          imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Jobs"
          pillColor="seafoam"
          year="2023"
        />
        <WorkItem
          projectName="HORIZON VENTURES"
          description="Brand identity and website for a venture capital firm focused on early-stage technology startups."
          imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Writing"
          pillColor="navy"
          year="2023"
        />
        <WorkItem
          projectName="STELLAR DYNAMICS"
          description="Interactive 3D visualization platform for astronomical data, featuring WebGL-powered models and animations."
          imageUrl="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Projects"
          pillColor="coral"
          year="2022"
        />
        <WorkItem
          projectName="NOVA INTERFACE"
          description="Modern component library and design system built for React, featuring a dark mode and customizable themes."
          imageUrl="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Jobs"
          pillColor="seafoam"
          year="2022"
        />
        <WorkItem
          projectName="PULSE ANALYTICS"
          description="Real-time analytics dashboard for monitoring system performance and user behavior metrics."
          imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Writing"
          pillColor="navy"
          year="2022"
        />
        <WorkItem
          projectName="ECHO NETWORK"
          description="Social platform connecting musicians and producers, featuring collaborative tools and project management."
          imageUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          primaryService="Projects"
          pillColor="coral"
          year="2022"
        />
      </div>
    </div>
  );

  return (
    <TopNavSideBarLayout topNavContent={topNavContent} sidebarContent={sidebarContent}>
      {mainContent}
    </TopNavSideBarLayout>
  );
}
