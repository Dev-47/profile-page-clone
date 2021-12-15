import React from "react";

export default function TabView({ children, name }) {
  return (
    <div className="tab-view" id={name}>
      {children}
    </div>
  );
}
