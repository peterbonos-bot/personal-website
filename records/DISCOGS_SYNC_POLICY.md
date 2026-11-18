# Discogs sync ownership rule

The moments_last shop mixes Keith Terry items with Peter Bonos's personal records, CDs, and tapes.

Peter authorizes assuming records matching his Keith Terry collection sheet are Keith's and for sale. The existing records.js catalog is the current site representation of the sheet.

- Automatically link and update unique exact Discogs release-ID matches to existing Keith sheet/catalog items.
- Never import unmatched shop inventory. Ask Peter whether each unfamiliar item belonged to Keith before adding it, and wait for confirmation.
- Ask about unclear pressing matches or multiple matching sale copies; do not guess.
- Preserve catalog estimates and grading/notes; seller price uses separate sale fields.
- Read complete inventory before removing absent sale links; absence does not prove sold.
- Test draft changes and verify live behavior.

- Entries marked `excluded: true` are retained only to preserve stable record IDs. They are not active catalog/ownership allowlist entries: skip them during matching and never reactivate them without Peter’s instruction.

## Sheet and sale availability sync (authorized 2026-11-18)

Peter requests keeping https://peterbonos.com/records/ updated when the collection sheet changes or a previously linked Discogs copy is removed following a sale. Include the website update whenever making relevant sheet edits together, and check both sources during the recurring sync.

- Read the current Keith Terry Record Collection v2 spreadsheet (ID `1mIgTxsHxZxZ1d0gICm1KpMHvHDEg3g6JWehUHcEW2T4`), including `Catalog` and `Sold & Removed`. Treat explicit sale/removal statuses, sale notes, and grey no-longer-for-sale rows as unavailable; review actual cell formatting rather than inferring it from text alone. Sync unambiguous public catalog changes. Reconcile missing rows against the archive and stable identifiers before changing availability; report ambiguous matches.
- Keep confirmed sold, removed, donated, or retained/not-for-sale records out of public browsing and requests. Preserve array positions/stable record IDs using `excluded: true`; use `status: "sold"` only for a confirmed sale. Do not reactivate an excluded item merely because a shop listing exists.
- A previously linked exact sale copy absent after a complete successful seller inventory read may have its sale link removed and website availability suspended pending confirmation. Absence alone does not prove a sale: record the reason as availability unconfirmed, not sold. A partial or blocked read must never trigger removal or baseline replacement.
- Match catalog/sheet records by exact numeric release ID, or exact listing ID when the sheet reference is a sale-item URL. Never substitute a different pressing or guess between multiple copies. New sheet entries are ownership-authorized; unfamiliar shop-only items still require Peter's confirmation.
- The column headed `Listed on Discogs` (currently F; locate it by header), indicates a verified current public listing, not historical listing or sale status. Refresh it only from a complete inventory read; retain explanatory notes for ambiguity.
- Preserve separate catalog value estimates and Discogs sale prices. Apply explicit sheet grading/notes changes to the catalog, but report differing seller grades/comments without silently replacing sheet data.
- Do not publish buyer identities, sale proceeds, commission shares, or private accounting from the archive. Never modify Discogs inventory, purchases, messages, or access.
- Read fresh site files and preserve concurrent changes. Test public catalog edits on a noindex draft, verify published behavior and request/buy buttons, and bump all affected records.js cache versions. Replace the Discogs comparison baseline only after a complete successful inventory read.
- Notify Peter of meaningful site updates, source ambiguities, or blockers; remain silent when nothing meaningful changed.

## Sale-item URLs in the sheet (authorized 2026-11-18)

- Resolve columns by current header names before every read/write. As of this update, Catalog F is `Listed on Discogs` and G is `URL`; columns may move again.
- For each uniquely verified current moments_last sale copy matching the sheet, replace its release/search URL in the URL column with the canonical `https://www.discogs.com/sell/item/LISTING_ID` URL. Preserve the previous URL and verified release ID in a cell note for future matching. Existing sale URLs should use this canonical form, without tracking parameters.
- Exact release IDs or existing sale listing IDs authorize automatic replacement. A search URL/title match alone does not establish the pressing; request confirmation when uncertain, and retain the current URL with a note describing the candidate.
- Keep sale URLs synchronized with current inventory and the website's separate Buy-this-copy link. Preserve concurrent sheet changes and never overwrite unrelated cells.
