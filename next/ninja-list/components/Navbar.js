import Link from "next/link";
import Image from "next/image"
const Navbar = () => {
  return (
    <>
      <div className="logo">
        <Image src="/sky_logo.png" width={40} height={40} />
      </div>
      <h1>Ninja List</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninja Listing</a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
