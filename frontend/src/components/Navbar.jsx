import { Link } from "react-router-dom";
import { PlusIcon, UserCircleIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const firstName = user?.name?.split(" ")[0] || "User";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-base-300 border-b border-base-content/10 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
            Thinkboard
          </h1>

          <div className="flex items-center gap-4 relative">

            {/* New Note Button */}
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>

            {/* User Section */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <UserCircleIcon className="size-8 text-primary" />
                <span className="font-medium">{firstName}</span>
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 z-50 w-56 bg-base-100 shadow-lg rounded-xl p-4 border border-base-content/10">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm opacity-70">{user?.email}</p>

                  <div className="mt-3 border-t pt-2">
                    <button
                      onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        window.location.href = "/login";
                      }}
                      className="w-full text-left text-red-500 hover:underline">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;