# Package Migration Example

This is an example of migrating a Node.js package that’s currently using Babel to be a dual CommonJS and ES module package. This example was created as part of a live demo in the December 2019 Node+JS Interactive Summit in Montreal.

## Quickstart

Run ES module version (requires Node 13.7+):

```shell
node index.js
```

Run CommonJS version:

```shell
node index.cjs
```

You should see various emoji printed. See the dual package itself in `./node_modules/baby`.
