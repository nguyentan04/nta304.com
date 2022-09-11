const HeaderMenu = () => {
  return (
    <div className="navbar bg-base-100 md:hidden">
      <div className="flex-none">
        <label htmlFor="application-drawer" className="btn btn-ghost btn-square drawer-button lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default HeaderMenu;
