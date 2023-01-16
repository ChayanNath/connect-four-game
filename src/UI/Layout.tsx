import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="bg-purple h-full align-middle justify-center">
      {props.children}
    </div>
  );
};

export default Layout;
