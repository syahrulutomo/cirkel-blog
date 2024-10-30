import { HelmetProvider } from 'react-helmet-async';
import { PropsWithChildren } from 'react';

const HelmetWrapper = ({ children }: PropsWithChildren) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export default HelmetWrapper;