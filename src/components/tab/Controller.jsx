import React, { useState, useEffect } from "react";

function set_current_tab_view(active_id) {
  const all_tabs = document.querySelectorAll(`.tab-view`);
  const target_tab = document.querySelector(`.tab-view#${active_id}`);

  for (const tab of all_tabs) {
    if (tab != target_tab) {
      tab.classList.add("hide");
      tab.classList.remove("show");
    }
  }

  target_tab.classList.add("show");
  target_tab.classList.remove("hide");
}

export default function Controller({ items, active_tab }) {
  const [__active_tab, set_active_tab] = useState(active_tab);

  useEffect(() => {
    set_current_tab_view(active_tab);
  });

  return (
    <div className="tab-controller">
      {__active_tab}
      <div className={`tab-controller-items`}>
        {items.map((item, index) => (
          <button
            className={`tab-controller-btn ${
              __active_tab == item.name ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              set_active_tab(item.name);
              set_current_tab_view(item.name);
            }}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
}
