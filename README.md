# Haila.fi

[![Netlify Status](https://api.netlify.com/api/v1/badges/067a7963-2ed9-4218-9782-bebce700e33a/deploy-status)](https://app.netlify.com/sites/haila/deploys) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

2023 iteration of my personal website. Open sourced for science!

Pull requests are welcome, if unlikely :)

## Tech

* Scaffolding: [Vite](https://vitejs.dev/)
* JS framework: [Vue](https://vuejs.org/)
* Styling: [Tailwind](https://tailwindcss.com/)
* 3D shenanigans: [Babylon](https://www.babylonjs.com/)

## Instructions

To run the project you need [Node.js](https://github.com/creationix/nvm) and [PNPM](https://pnpm.io/) installed. After that...

### Develop

1. `pnpm install` to install dependencies
2. `pnpm dev` to start the dev server

### Build

1. `pnpm build` to build to /dist

### Work with DDS cubemaps on a Mac

1. Download [CMFT](https://github.com/dariomanesku/cmft)
2. Use it with `--output0params dds,rgba16f,cubemap`
3. Drop the result into [Babylon Sandbox](https://sandbox.babylonjs.com/) and export as .env from settings panel for additional significant compression

Example:

```bash
./cmft \
--input ~/Desktop/environment.dds \
--dstFaceSize 32 \
--output0params dds,rgba16f,cubemap \
--generateMipChain false \
--output0 ~/Desktop/environment_processed && \
stat -f%z ~/Desktop/environment.dds && \
stat -f%z ~/Desktop/environment_processed.dds
```

Note: stat -f%z is specific to the version that ships with MacOS as of 10.14.3

## License

MIT License for my original content.

Fira Code by Nikita Prokopov (http://tonsky.me)
SIL Open Font License

Jost* by Owen Earl (https://indestructibletype.com)
SIL Open Font License
