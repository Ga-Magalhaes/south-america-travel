# South America Travel Portfolio — Clean v2

Interactive React + Vite site for the English travel project with Peru, Chile and Argentina under a strategic US$8,000 budget.

This version keeps the original premium/dark visual identity, but reduces visual pollution:

- Top navigation instead of a heavy side rail.
- Cleaner route dashboard.
- Softer cards, smaller shadows and calmer spacing.
- Less duplicated glassmorphism.
- Better hierarchy between route, timeline, attractions and budget.
- Same keyboard navigation and same travel-plan content.

## Requirements

- Node.js 18 or newer.
- npm 9 or newer.

Check your versions:

```bash
node -v
npm -v
```

On your PowerShell, if `npm -v` is blocked by execution policy, use `npm.cmd`:

```powershell
npm.cmd -v
```

## How to run

Open the project folder in the terminal and run:

```bash
npm install
npm run dev
```

If you are using PowerShell with npm blocked, run:

```powershell
npm.cmd install
npm.cmd run dev
```

Then open the local address shown by Vite, usually:

```text
http://localhost:5173
```

## Windows PowerShell example

```powershell
cd "$env:USERPROFILE\Downloads\south-america-travel-site-clean-v2"
npm.cmd install
npm.cmd run dev
```

## Keyboard controls

- `ArrowRight`: next country / slide
- `ArrowLeft`: previous country / slide
- `Home`: cover slide
- `End`: final budget slide

## Where to edit images

Open:

```text
src/data/trips.js
```

Every attraction has an `imageUrl` field and a nearby TODO comment. Replace it with a direct image URL if needed:

```js
imageUrl: "https://your-image-link-here.jpg"
```

## Project structure

```text
src/
  components/
  data/trips.js
  App.jsx
  main.jsx
  styles.css
public/
index.html
package.json
```

## Source note

The content was organized from the three travel PDFs:

- Peru: 1 traveler, 7 days.
- Chile: 2 adults, premium 3-day Santiago itinerary.
- Argentina: 3-day Buenos Aires itinerary.

The final dashboard keeps these assumptions visible instead of pretending all plans use the same traveler base.
