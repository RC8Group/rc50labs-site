# Image Assets

Put public image assets for the site in this folder.

Files here are served from `/images/...` in the Vite app. For example:

```tsx
<img src="/images/example.png" alt="Description" />
```

Current convention:

- Use this folder for hero images, product placeholders, category visuals, and other static images that should be referenced by URL.
- Use lowercase, descriptive filenames with hyphens, such as `product-vial-placeholder.webp`.
- Prefer `.webp` for new photographic assets when possible, and `.png` for transparent or generated assets that need lossless detail.
