# Farcaster GUI

This is the Farcaster Node web application GUI. It allows to interact with your Farcaster Node through the gRPC daemon service.

Make sure you have the gRPC service enabled in your `farcasterd.toml` config file

```toml
[farcasterd.grpc]
use_grpc = true
port = 50051
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
