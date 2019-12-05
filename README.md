# Typograf-WebCLI
CLI for [Artlebedev's Typograf web service](https://www.artlebedev.ru/typograf/).

Not to be confused with [typograf](https://www.npmjs.com/package/typograf) nor [typograf-cli](https://www.npmjs.com/package/typograf-cli).

## Usage
```
npx typograf-webcli "- Это \"Типограф\"?."
```

## Options

#### `-p` or `--useP`
Use html paragraphs

Default: `false`

  
#### `-br` or `--useBr`
Use br elements

Default: `false`


#### `-e` or `--entity`
Set input type

Accepts one of these strings: `html`, `xml`, `mixed`, `none`

Default: `html`


#### `-n`, `--noBr`
Set max br elements

Default: `0`
