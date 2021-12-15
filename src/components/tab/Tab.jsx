import React from "react";
import "../../assets/scss/tab.scss";

export default function Tab({ controller, content, active_page }) {
  return (
    <div className="tab">
      <>{controller}</>
      <div className="tab-content">{content}</div>
    </div>
  );
}
