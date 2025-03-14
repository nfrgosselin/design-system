import * as React from 'react';
import { Button as ShadcnButton } from '../shadcn/button';
import { type ButtonProps } from '../shadcn/button';
import { Icons } from '../../../components/icons';

export interface ExtendedButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export function Button({ isLoading, children, ...props }: ExtendedButtonProps) {
  return (
    <ShadcnButton {...props}>
      {isLoading ? (
        <>
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </ShadcnButton>
  );
}
