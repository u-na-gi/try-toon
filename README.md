# Try TOON

A TypeScript project to explore TOON (Token-Oriented Object Notation).

## What is TOON?

A data format designed to optimize LLM tokens, achieving 30-60% token reduction compared to standard JSON.

## Setup

```bash
npm install
```

## Usage

Basic comparison example:

```bash
npm run example
```

Visualization and chart generation:

```bash
npm run visualize
```

This generates `public/index.html`. Open it in your browser to see an interactive chart comparing JSON vs TOON, built with Chart.js and Tailwind CSS.

Build TypeScript:

```bash
npm run build
```

## Results

This sample compares product data in JSON and TOON formats:

- JSON: 306 characters
- TOON: 167 characters
- Token reduction: 45.4%

## TOON Format Features

- Indent-based structure (no braces needed)
- Field names declared only once
- Array data represented in table format
- Explicit length and field declarations for easy LLM output verification

## Tech Stack

- **Chart.js**: Chart library (npm-managed, no CDN)
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **esbuild**: Chart.js bundler
- **tsx**: TypeScript runtime

## Reference

- [TOON GitHub Repository](https://github.com/johannschopplich/toon)
