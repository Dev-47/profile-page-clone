import React from "react";
import "../assets/scss/nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <div className="nav-brand mr-10">
            <a href="#" className="text-2xl">
              bizy
            </a>
          </div>

          <div className="nav-links p-4">
            <a href="#" className="px-4">
              Threads
            </a>
            <a href="#" className="px-4">
              Starred
            </a>
            <a href="#" className="px-4">
              Results
            </a>
            <a href="#" className="px-4">
              Search
            </a>
          </div>
        </div>

        <div>
          <div className="auth-content">
            <div className="user">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt=""
                className="h-6 w-6 rounded-3xl"
              />
              <label>
                <span className="text-gray-600 font-bold">James</span>
                <a href="#" className="inline">
                  <i className="icon dropdown text-blue-300"></i>
                </a>
              </label>

              <button className="btn-blue shadow-md">
                <i className="icon plus"></i>
                <span>New Thread</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
