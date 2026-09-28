# Two Trouble Tails / Dr. Neretniece

## Confirmed requirements — 2026-09-28

- Re-create https://annija-neretniece-v0halx.mailerpage.io/ as a Next.js site that can be hosted independently of MailerLite.
- Preserve the reference site's appearance, Latvian content, images, navigation, and user journeys. This is a replica, not a redesign.
- Optimize for marketing/conversion, SEO, and performance from the outset.
- The user has a MailerLite API key if integration requires it. Never put secrets in source control or browser code.
- Record requirements and decisions here so the user does not have to repeat them.
- Existing `meeting-notes.txt` contains the reference and dog nutrition research links; those links are not a request to build a nutrition calculator or add medical content.

## Source inspection

- Public HTML can be downloaded directly; an API key or MCP is unnecessary for extracting the public site.
- Public routes: `/`, `/pakalpojumi`, `/kontakti`.
- Homepage includes a portrait, nutrition introduction, four benefits, testimonial, video lecture promotion, newsletter signup, and social/contact footer.
- The reference uses Inter, burgundy (`#6f353d`) and warm cream (`#e7e1d8`).
- MailerLite has an official MCP (https://developers.mailerlite.com/mcp), but no additional connector is required for this migration.

## Delivery constraints

- Hosting provider and final production domain have not been chosen. Do not claim a deployment is live or switch the existing site without a deployment target.
- Keep existing service/contact URLs for continuity. Configure canonical URLs and sitemap using the final domain at launch. Plan redirects from the old host if the platform permits them.
- User authorized production build, TypeScript, and desktop/mobile browser verification for this initial implementation. Do not submit real subscription/contact forms during verification.
- Performance targets are goals, not measured results until verified.
