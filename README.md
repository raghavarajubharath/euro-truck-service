# Euro Truck Service — Landing Page

A React rebuild of the "Truck Service Landing Page" design (from the Figma
file / screen recording), built with Vite + plain CSS. No UI library, no
CSS framework — every style is hand-written so it's easy to read and change.

## How to run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build a production version:

```bash
npm run build
```

The finished files land in `dist/`, ready to upload to any static host.

## How the code is organized

```
src/
  main.jsx          
  App.jsx           
  index.css         
  assets/           
  components/
    Header.jsx / .css    
    Hero.jsx   / .css        
     Services.jsx / .css   
    Brands.jsx / .css     
    MapSection.jsx / .css 
    Gallery.jsx / .css    
    CTAForm.jsx / .css   
    Footer.jsx / .css    
```