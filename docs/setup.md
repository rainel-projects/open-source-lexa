# Development Setup Guide

## Prerequisites

- **Rust**: Install via [rustup.rs](https://rustup.rs/)
  ```bash
  rustup default stable
  ```
- **Node.js**: Install v18+ via [nodejs.org](https://nodejs.org/)
- **wasm-pack**: Required for building the core engine.
  ```bash
  cargo install wasm-pack
  ```

## Repository Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/rainel-projects/open-source-lexa.git
   cd open-source-lexa
   ```

2. **Install UI Dependencies**
   ```bash
   cd ui/web
   npm install
   ```

3. **Install CLI Dependencies**
   ```bash
   cd cli/lexacli
   npm install
   ```

## Building the Core

The core engine is written in Rust and compiled to WebAssembly.

```bash
cd core
# Check native code
cargo check

# Build WASM (for Web/CLI)
wasm-pack build --target web --out-dir ../ui/web/public/wasm
```

## Running the Playground

```bash
cd ui/web
npm run dev
# Open http://localhost:3000
```

## Running the CLI

```bash
cd cli/lexacli
npm link
lexa --help
```
