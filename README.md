This is a take home project for Formal's Frontend Engineer Position based on their given Figma document. Outside of the specs of the document, the application is also mobile-responsive. The application was built on Next.js as the framework, [shadcn/ui](https://ui.shadcn.com/) for the primary UI library, and Vercel for deployment.

## Getting Started

A live demo of the site can be viewed here on Vercel: https://formal-dashboard-project.vercel.app/

To run application locally, you can run the following commands:

```bash
# 1. Clone this repo
git clone git@github.com:raywhui/formal-dashboard-project.git

# 2. Install packages
npm i

# 3. Run on development
npm run dev
```

## Notes

Here are some notes about the application and how it was built:

- The animation for the search bar transition was especially interesting. Due to how shadcn uses dialog, the search bar on the dashboard lives outside of the dialog content. My solution was to fake the transition but fading and moving the searchbar to where the dialog command bar would appear, and fade in the actual dialog. Animation for dialog exit is the same but backwards.
- Primarily uses the shadcn library. I first thought about leaving those components alone, but documentation mentions that the components are meant to be customizable, so I decided against it. There are also a few times I needed to access shadcn components to make edits.
- The barchart and heatmap values are randomly generated at built time using `heatMapDataGenerator()` and `barGraphDataGenerator()`. In reality, all the data would be provided via an API and can be generated client-side using `"use client"` for those components

## Fixes/Improvements Needed on the App

Given the time constraints of this assignment, there were a good amount of quality of life improvements I would've loved to have tackled. Here is a list of the following fixes/improvements I think can be made:

- Charts are currently custom built with SVG's. Given the requirements that all the cards on the dashboard were the same size, these charts could have been better built to fully support mobile-responsiveness.
- Many of the values are currently hard-coded or use fake data due to time constraints. These components can be easily converted to use real data.
- Command Tabs are purely cosmetic at the moment. Functionality can be easily built.
- Command list does not filter non-'/' commands on mobile, but works on desktop/mac.
- There is an animation missing between switching between categories and commands. This could be done with some CSS animations and opacity changes, but would need a deeper dive into the `cmdk` library.
- No unit tests currently exist.
- Only tested on Chrome/Macbook. Futher testing needed for other platforms and browsers to ensure x-browser compatibility.
- Cannot navigate the commands list with arrow keys.
- The addition of animations is fun, but can be an issue for lower-spec devices. I would either remove them entirely or create a conditional to only run animations of more powerful hardware.
- The colors in Figma were a little unorganized. I wasn't sure if the color values in the document corresponded with the ones provided in TailwindCSS. I ended up manually importing the colors. In a real working environment, I would seek clarity on this to avoid confusion.
- Icons in Figma use the Iconoir icons, but were not apparent during development. In a real working environment, I would ask where these icons were sourced to avoid confusion.
