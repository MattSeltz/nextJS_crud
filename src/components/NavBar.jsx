import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="flex justify-between p-3 shadow-sm shadow-white fixed w-full">
      <Link href={"/"}>
        <h1>CRUD</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href={"/add"}>Add</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
