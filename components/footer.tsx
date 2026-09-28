import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Dr. Neretniece Facebook (jaunā cilnē)">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M21 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h9v-9H9v-4h3V8c0-3 2-5 5-5h3v4h-2c-1 0-2 0-2 2v2h4l-1 4h-3v9h5a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z" /></svg>
        </a>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Dr. Neretniece Instagram (jaunā cilnē)">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" /></svg>
        </a>
      </div>
      <p>Dr. Neretniece</p>
      <address>Vasaras iela 4, Salacgriva<br />Latvia</address>
    </footer>
  );
}
