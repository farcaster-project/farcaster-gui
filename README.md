[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Farcaster GUI

This is the Farcaster Node web application GUI. It allows to interact with your Farcaster Node through the gRPC daemon service.

Make sure you have the gRPC service enabled in your `farcasterd.toml` config file

```toml
[grpc]
enable = true
bind_port = 50051
bind_ip = "127.0.0.1"
```

## Getting Started

First install the deps with `npm install`, and then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is tested with node.js version `16`, libprotoc `3.21`, and the code generator plugin [`protoc-gen-grpc-web`](https://github.com/grpc/grpc-web#code-generator-plugin).

## gRPC Interface

Generated files related to `proto/farcaster.proto` are commited, if you want to change the service definition save your proto file and run `npm run gen`. (You need `protoc` and the code generator plugin)
