[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Farcaster GUI

This is the Farcaster Node web application GUI. It allows to interact with your Farcaster Node through the gRPC daemon service.

You can install the node with

```
cargo install farcaster_node
```

Make sure you have the gRPC service enabled in your `.farcaster/farcasterd.toml` config file

```toml
[grpc]
enable = true
bind_port = 50051
bind_ip = "127.0.0.1"
```

## Getting Started

First install the deps with `npm install` and generate gRPC client files with `npm run gen` (see instructions below), and then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is tested with node.js version `16`, libprotoc `3.21`, and the code generator plugin [`protoc-gen-grpc-web`](https://github.com/grpc/grpc-web#code-generator-plugin).

Generated files related to `proto/farcaster.proto` aren't committed, you need to run `npm run gen` to generate them. (You need `protoc` and the code generator plugin [`protoc-gen-grpc-web`](https://github.com/grpc/grpc-web#code-generator-plugin))

## Build and Run the production App

You can build and run a production version of the app either with a Docker image or on your host.

To build and run the Docker image:

```bash
docker build -t farcaster-gui .
docker run -p 3000:3000 farcaster-gui
```

:whale2: The Docker image runs the production application in an Alpine Node v16 environement.

To build the production app and run it on your host:

```bash
npm run build && npm run start
# or
yarn build && yarn start
```
