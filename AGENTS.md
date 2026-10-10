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

- Retain photography source pointers and license credits in the asset manifest; serve separate public/media files for portable external hosting as explicitly requested by the user.
- Use the existing Button component for page actions and preserve the frontend-only appointment demonstration.
- Keep clinic navigation, footer, and the demo appointment section in shared components so all content pages stay consistent.
- Centralize media paths in src/lib/clinic-media.ts; the build-time preparation script validates sizes and reuses local copies to prevent incomplete deployments.
