import * as React from 'react';
import { WorkItem, WorkItemProps } from './WorkItem';

export type SortField = 'projectName' | 'year' | 'primaryService';
export type SortDirection = 'asc' | 'desc';

export interface WorkTableProps {
  /**
   * Array of work items to display
   */
  items: Omit<WorkItemProps, 'className'>[];

  /**
   * Field to sort by
   */
  sortBy?: SortField;

  /**
   * Sort direction
   */
  sortDirection?: SortDirection;

  /**
   * Filter string to match against project name and description,
   * or exact match against primaryService (tag)
   */
  filterValue?: string;

  /**
   * Optional className for custom styling
   */
  className?: string;
}

export function WorkTable({
  items,
  sortBy,
  sortDirection = 'desc',
  filterValue,
  className,
}: WorkTableProps) {
  // Filter items based on filterValue
  const filteredItems = React.useMemo(() => {
    if (!filterValue) return items;

    const searchValue = filterValue.toLowerCase();
    return items.filter(item => {
      // Exact match for primaryService (tag-based filtering)
      if (item.primaryService.toLowerCase() === searchValue) {
        return true;
      }

      // Partial match for text-based fields
      return (
        item.projectName.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue)
      );
    });
  }, [items, filterValue]);

  // Sort items based on sortBy and sortDirection
  const sortedItems = React.useMemo(() => {
    if (!sortBy) return filteredItems;

    return [...filteredItems].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredItems, sortBy, sortDirection]);

  return (
    <div className={className}>
      {sortedItems.map((item, index) => (
        <WorkItem
          key={`${item.projectName}-${index}`}
          {...item}
          className={index === 0 ? 'border-t-0' : undefined}
        />
      ))}
    </div>
  );
}
