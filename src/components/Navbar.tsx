"use client";
import { useState, useEffect, FunctionComponent } from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <span
        className="mx-2 cursor-pointer hover:border-b-4 hover:text-green"
        onClick={() => setActive(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const pathname = usePathname();
  // const { pathname } = useRouter();

  const [active, setActive] = useState("");

  //later
  useEffect(() => {
    if (pathname === "/portfolio") setActive("About");
    else if (pathname === "/portfolio/projects") setActive("Projects");
    else if (pathname === "/portfolio/resume") setActive("Resume");
  }, [pathname]);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-green">
        {active}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem
          active={active}
          setActive={setActive}
          name="About"
          route="/portfolio"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/portfolio/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/portfolio/projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
