import Link from "next/link";

export default function NotFound() {
  return <section className="section cream text-center"><div className="container"><h1>Lapa nav atrasta</h1><p>Iespējams, saite ir mainījusies.</p><Link className="button" href="/">Atgriezties sākumā</Link></div></section>;
}
