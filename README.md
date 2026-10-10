# Northlight Dental Studio

can u make me a website for a dental clinic check some already ones i wnna rraly one one go  find some random name n fill some ramdom ifnrimation all ks can be fake nothing needs to work on teh backend js only the froentnt needs to looks o good teh profejnsal look n the home overvuew fifrst lanching oage i wnana vedio playign in the backround realted to our  denatl thing okay build it n also add a fevcicomn n tah sit try to finish it withing the credit u have \

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3d3a4518-130b-4cd6-8338-2f2fc33380d5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Portable photos and videos

Run `bun run prepare:media` before local development or moving to another host. It prepares eight separate files in `public/media`: six licensed photographs plus MP4 and WebM background videos. The production build runs this step automatically. Keep this folder when transferring the project. Complete existing files are reused without downloading again.

The running site uses only `/media/...` paths, not Lovable media endpoints. Initial preparation needs internet access to the source assets. Deploy the complete production output including media, not just HTML. This TanStack Start app needs compatible hosting, not an HTML-only upload. Source pointers and licenses remain in `src/assets/photo-credits.json` and the adjacent asset pointers. The logo and favicon are separate local images. Appointments are frontend-only demonstrations.
