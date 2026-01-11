# Team EPFL Pyronix 2025 Wiki

Images, photos, icons and fonts are stored on `static.igem.wiki` using
[tools.igem.org](https://tools.igem.org), and Videos **must** be embedded
from [iGEM Video Universe](https://video.igem.org).


## About This Template

### Files
Below is the structure of important files and directories in this project:

    ├── README.md            -> The file you are currently reading
    ├── index.html           -> Single HTML file for the wiki
    ├── package.json         -> Manages project metadata and dependencies
    ├── src/
    │   ├── components/      -> Pre-built components(like Navbar, Footer, etc.)
    │   ├── containers/
    │   │   └── App/         -> Main React application container
    │   ├── contents/
    │   │   └── *.tsx        -> Page components for the wiki
    │   ├── main.tsx         -> Entry point of the wiki application
    │   ├── pages.ts         -> Page definition and path mapping
    │   ├── utils/           -> Utility functions
    │   └── vite-env.d.ts    -> TypeScript definitions for Vite
    ├── tsconfig.json        -> Configures TypeScript options
    ├── tsconfig.node.json   -> TypeScript settings for Node.js
    ├── vite.config.ts       -> Configuration for the Vite tool
    └── yarn.lock            -> Yarn lock file for dependency management

### Technologies

- [React](https://reactjs.org): A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org): Extends JavaScript by adding types
- [Vite](https://vitejs.dev): Frontend tooling that provides faster and leaner development builds
- [Bootstrap](https://getbootstrap.com): Framework for building responsive, mobile-first sites
- [React Bootstrap](https://react-bootstrap.github.io): Bootstrap components built with React
- [React Router](https://reactrouter.com): Declarative routing for React applications
- (Optional) [Prettier](https://prettier.io): Code formatter
