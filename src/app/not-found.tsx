import Link from "next/link";
export default function NotFound() { return <div className="container section narrow"><h1>Page not found</h1><p>The page may have moved or is not yet available.</p><Link className="button" href="/schemes">Browse schemes</Link></div>; }
