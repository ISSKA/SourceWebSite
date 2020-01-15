# RandoSources

Website for the sources book.

## Installation

``` bash
$ git clone git@github.com:ISSKA/SourceWebSite.git
$ cd SourceWebSite
$ npm install
```

## Development

Some website configuration are available [here](doc/website_configuration.md).

``` bash
# serve with hot reload at localhost:3000
$ npm run dev
```

``` bash
# build for production and launch server at localhost:3000
$ npm run build
$ npm run start
```

## Deployment in production

Before first deployment, [some configurations](doc/server_configuration.md) are required.

```bash
# build static website
$ npm run generate

# deploy static website to the server
$ npm run deploy
```
