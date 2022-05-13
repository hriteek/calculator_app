import React from 'react';


interface IBaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = (props: IBaseLayoutProps) => {
  return <>{props.children}</>;
};

export default BaseLayout;
