import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <main className={`main-content ${className}`}>
      {children}
    </main>
  );
};

export default Layout;
