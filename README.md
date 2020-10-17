# 👷 Cloudflare General Engineering Assignment - Tarik Eshaq

This is Tarik's solution to the Cloudflare General Engineering Assignment

## Check it out:
You can find the deployed site at [https://tarikeshaq.tarikesh.workers.dev](https://tarikeshaq.tarikesh.workers.dev)

You can also request https://tarikeshaq.tarikesh.workers.dev/links to see small list of links


## Development
- [`index.js`](./index.js) contains the entry point and the main logic supporting the worker to respond to requests
- [`transformer.js`](./transformer.js) contains all the HTMLRewriter transformer logic

To run the worker locally:
- make sure you have [`wrangler`](https://github.com/cloudflare/wrangler)
- Run `wrangler login`, which will allow you to login to your cloudlfare account
- Run `wrangler dev`, which uses webpack to run the worker on `localhost` check the message for the accurate port

## LICENSE
This was built for the challenge, and thus is licensed under the original license that the challenge came with,
an MIT license, check [`LICENSE`](./LICENSE)
