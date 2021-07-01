import Meta from "../components/Meta";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <Meta title="About" />
      <h1>About</h1>
      <p>The about page</p>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default about;
