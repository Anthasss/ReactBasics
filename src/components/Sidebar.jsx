import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [page, setPage] = useState("Home");

  return (
    <div className="flex-grow bg-base-300 lg:min-h-screen">
      {/* visible on smaller screen */}
      <div className="block lg:hidden">
        <div className="navbar">
          <div className="navbar-start">
            <Link to="/" onClick={() => setPage("Home")} className="btn btn-ghost text-xl font-bold">
              AnthasProg
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 font-bold bg-neutral hover:bg-primary hover:text-base-300"
              >
                {page}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-300 rounded-box z-[1] w-24 p-2 shadow font-bold"
              >
                <li>
                  <Link to="/day-one" onClick={() => setPage("Day 1")}>
                    Day 1
                  </Link>
                </li>
                <li>
                  <Link to="/day-two" onClick={() => setPage("Day 2")}>
                    Day 2
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* visible on large screen */}
      <div className="hidden lg:block bg-base-300 lg:h-full">
        <div className="p-4">
          <Link to="/" onClick={() => setPage("Home")} className="btn btn-ghost hover:none text-xl font-bold">
            Anthas Prog
          </Link>
        </div>
        <ul className="menu rounded-box w-56 font-bold text-md gap-1">
          <li>
            <Link to="/day-one" onClick={() => setPage("Day 1")}>
              Day 1
            </Link>
          </li>
          <li>
            <Link to="/day-two" onClick={() => setPage("Day 2")}>
              Day 2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
