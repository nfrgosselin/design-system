import { Sidebar } from '../components/navigation/Sidebar';
import { TopNav } from '../components/navigation/TopNav';
import { useState } from 'react';
import { WorkTable } from '../components/ui/WorkTable';
import { TopNavSideBarLayout } from '../components/layout/pages/TopNavSideBarLayout';
import { WorkTopNavContent } from '../components/navigation/content/WorkTopNavContent';
import { WorkTableItem } from '../components/ui/WorkTable';

const workItems: WorkTableItem[] = [
  {
    projectName: 'MAVERICK PROTOCOL',
    description:
      'A decentralized trading protocol built on the Ethereum blockchain, featuring an innovative automated market maker design.',
    imageUrl:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3',
    primaryService: 'Projects',
    pillColor: 'coral' as const,
    year: '2024',
    featured: true,
    featuredText: 'Featured',
  },
  {
    projectName: 'DESIGN SYSTEM',
    description:
      'A comprehensive design system and component library built for scale, featuring accessible and performant React components.',
    imageUrl:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Writing',
    pillColor: 'navy' as const,
    year: '2024',
    featured: true,
    featuredText: 'Latest',
  },
  {
    projectName: 'CURSOR AI',
    description:
      'An AI-powered development environment that helps developers write, understand, and debug code faster.',
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Jobs',
    pillColor: 'seafoam' as const,
    year: '2021-2023',
  },
  {
    projectName: 'QUANTUM LABS',
    description:
      'A research laboratory website showcasing breakthrough discoveries in quantum computing and machine learning.',
    imageUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Projects',
    pillColor: 'coral' as const,
    year: '2023',
  },
  {
    projectName: 'ATLAS PLATFORM',
    description:
      'Enterprise data visualization platform providing real-time insights through interactive dashboards and reports.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Jobs',
    pillColor: 'seafoam' as const,
    year: '2023',
  },
  {
    projectName: 'HORIZON VENTURES',
    description:
      'Brand identity and website for a venture capital firm focused on early-stage technology startups.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Writing',
    pillColor: 'navy' as const,
    year: '2023',
  },
  {
    projectName: 'STELLAR DYNAMICS',
    description:
      'Interactive 3D visualization platform for astronomical data, featuring WebGL-powered models and animations.',
    imageUrl:
      'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Projects',
    pillColor: 'coral' as const,
    year: '2022',
  },
  {
    projectName: 'NOVA INTERFACE',
    description:
      'Modern component library and design system built for React, featuring a dark mode and customizable themes.',
    imageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Jobs',
    pillColor: 'seafoam' as const,
    year: '2022',
  },
  {
    projectName: 'PULSE ANALYTICS',
    description:
      'Real-time analytics dashboard for monitoring system performance and user behavior metrics.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Writing',
    pillColor: 'navy' as const,
    year: '2022',
  },
  {
    projectName: 'ECHO NETWORK',
    description:
      'Social platform connecting musicians and producers, featuring collaborative tools and project management.',
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    primaryService: 'Projects',
    pillColor: 'coral' as const,
    year: '2022',
  },
];

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

  const [sortBy, setSortBy] = useState<'year' | 'projectName'>('year');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filterValue, setFilterValue] = useState<string>();

  const brandProps = {
    brandName: 'Nate Gosselin',
    navItems,
    stackSpacing: 'space-y-1' as const,
  };

  const handleSortChange = (label: string) => {
    if (label === 'Newest') {
      setSortBy('year');
      setSortDirection('desc');
    } else if (label === 'Oldest') {
      setSortBy('year');
      setSortDirection('asc');
    } else if (label === 'AtoZ') {
      setSortBy('projectName');
      setSortDirection('asc');
    }
  };

  const handleFilterChange = (label: string) => {
    setFilterValue(label === 'All' ? undefined : label);
  };

  const topNavContent = (
    <TopNav
      brand={brandProps}
      content={
        <WorkTopNavContent
          sortControls={{
            title: 'Sort',
            navItems: sortItems,
            onChange: handleSortChange,
          }}
          filterControls={{
            title: 'Filter',
            navItems: filterItems,
            onChange: handleFilterChange,
          }}
        />
      }
      className="col-span-4"
    />
  );

  const sidebarContent = (
    <Sidebar footer={<div className="space-y-4" />}>
      <div className="py-2">
        <p className="text-xl tracking-wider text-stone-600 leading-relaxed">
          Brooklyn-based product builder and strategist.
        </p>
      </div>
    </Sidebar>
  );

  const mainContent = (
    <div className="py-4">
      <WorkTable
        items={workItems}
        sortBy={sortBy}
        sortDirection={sortDirection}
        filterValue={filterValue}
      />
    </div>
  );

  return (
    <TopNavSideBarLayout topNavContent={topNavContent} sidebarContent={sidebarContent}>
      {mainContent}
    </TopNavSideBarLayout>
  );
}
