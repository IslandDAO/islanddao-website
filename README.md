# IslandDAO Website

The official IslandDAO website.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Project Structure

```
src/
├── app/           # Pages and routes
├── components/    # React components
└── lib/           # Utilities
```

## Contributing

Before pushing, ensure your code passes CI checks:

```bash
pnpm lint           # Run ESLint
pnpm format:check   # Check formatting
pnpm format:write   # Fix formatting
pnpm build          # Verify build
```
