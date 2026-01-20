# IslandDAO Main Website

The main IslandDAO website with Solana wallet authentication.

## Features

- 🔐 Solana wallet authentication with access tokens
- ⚡ Automatic token refresh
- 🎨 Tailwind CSS styling
- 📱 Responsive design
- 🔄 Next.js 15 with App Router

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0
- IslandDAO API running (for authentication)

### Installation

```bash
# From repository root
pnpm install

# Copy environment variables
cp apps/web/.env.example apps/web/.env.local
```

### Development

```bash
# From repository root
pnpm --filter @islanddao/web dev

# Or from this directory
pnpm dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

### Build

```bash
pnpm build
pnpm start
```

## Authentication

This website uses a proper wallet authentication system with access tokens. See [AUTHENTICATION.md](./AUTHENTICATION.md) for details.

### Quick Usage

```typescript
import { useAuth } from '@/components/providers/AuthProvider';

function MyComponent() {
  const { isAuthenticated, accessToken, login, logout } = useAuth();

  // Use isAuthenticated to show/hide content
  // Use accessToken for API requests
  // Call login() / logout() to manage auth state
}
```

## Environment Variables

Create `.env.local` file with:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
```

## Project Structure

```
apps/web/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── layout.tsx    # Root layout with providers
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── providers/    # Context providers
│   │   │   ├── WalletProvider.tsx
│   │   │   └── AuthProvider.tsx
│   │   └── WalletButton.tsx
│   └── lib/
│       └── auth/
│           └── authService.ts  # Authentication utilities
├── public/               # Static assets
├── .env.example         # Environment variables template
├── AUTHENTICATION.md    # Authentication documentation
└── README.md
```

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Wallet**: Solana Wallet Adapter
- **Authentication**: JWT access tokens

## Contributing

See the main repository README for contribution guidelines.

## License

Private - IslandDAO
