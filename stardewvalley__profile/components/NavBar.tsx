import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <img
          src="https://stardewvalley.net/wp-content/uploads/2017/12/med_logo.png"
          alt="logo"
        />
      </Link>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/detail">
          <a>Detail</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="https://www.stardewvalley.net/blog/">
          <a>
            <img
              src="https://secure.gravatar.com/avatar/f7ef77bb41d38cd162fceb30625d6289?s=75&d=http%3A%2F%2Fwww.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D75&r=G"
              alt="homepage"
            />
          </a>
        </Link>
      </div>
    </nav>
  );
}
