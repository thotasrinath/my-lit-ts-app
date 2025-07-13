# My Lit TS App

A simple web app built with [Lit](https://lit.dev/) and [TypeScript](https://www.typescriptlang.org/) using [Vite](https://vitejs.dev/) as the build tool.

## Features

- Student form submission ([src/my-form.ts](src/my-form.ts))
- Student list display ([src/my-list.ts](src/my-list.ts))
- Modular Lit components ([src/my-app.ts](src/my-app.ts))

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
npm run build
```

### Preview

```sh
npm run preview
```

## API Endpoints

- `POST http://localhost:8080/student` — Add a student (see [`MyForm`](src/my-form.ts))
- `GET http://localhost:8080/getAllStudents` — Get all students (see [`MyList`](src/my-list.ts))

## Project Structure

```
├── index.html
├── package.json
├── tsconfig.json
├── public/
│   └── vite.svg
└── src/
    ├── my-app.ts
    ├── my-form.ts
    └── my-list.ts
```

##