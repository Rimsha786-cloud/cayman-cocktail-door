<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Verified business facts (hours, phones, address, awards, events, menus) live only in `src/lib/site.ts`, `src/lib/events.ts` and `src/lib/menus.ts`; never invent business info — the brand requires everything to come from the original doorno4.com.
- Photos are optimised WebP pairs (sm 800w / lg 1800w) hosted as Lovable assets, listed in `src/assets/photos.json` and rendered through `SmartImage`; menu PDFs/brochure pointers live in `src/assets/documents.json` — keeps images fast and links independent of the old site.
- Enquiry forms post to the `submitEnquiry` server function, which validates with the shared zod schema and inserts into the insert-only `enquiries` table via the publishable key — visitors can submit but never read submissions.
- Reservations are phone-based (no booking system); "Reserve a table" CTAs link to `/contact#reserve` — the business takes bookings by phone.
- Colours are semantic tokens in `src/styles.css` (emerald/ivory/gold/charcoal/beige); use `gold-ink` for gold text on light backgrounds for contrast.
