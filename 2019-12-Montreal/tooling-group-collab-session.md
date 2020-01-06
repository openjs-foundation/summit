# OpenJS Collab Summit 2019, Tooling Group Collab Session

Present: a lot of people

## Introduction

Ben Coe (BC): (introduces tooling group)

## Arg Parsing Enhancements

> Summary: arg parsing in Node.js sucks

- BC, discussing arg parsing in Node.js: google has many sample files
  - first thing they see is `process.argv.slice(2)`
  - maybe a minimist-type thing in node core?
  - not unheard of for a language to have these features ([for example Go](https://golang.org/pkg/flag/))
- Ruy Adorno (RA): no specs for this, no standards
- Wes Todd (WT): would need to be minimal, highly extensible
- Ian Sutherland (IS): we want to cover 80% use case
- BC: we should probably NOT try to create an RFC for standard arg parsing
- Michael Rawlings (MR): what features are we talking about? types, arrays, etc?
  - How full featured should this be?
- Christopher Hiller (CH): do we cater to library authors or people needing to hack out quick CLIs?
- BC: Should we serve 20% or 80%?  probably 80%
- Anna Henningsen (AH): pull in minimist as vendored?  would be maintained outside of core
- RA: Maybe go simple, something just string-based, maybe array handling and double dash, dash
- BC: to summarize we’re positive on the idea for a step towards it
- RA: solving the “intro to node.js” use case is probably most important
- Glenn Hinks (GH): many langauges don't have this, and they've been fine!

> Action item(s): Continue/resume discussion around scope of this project.  Sounds like general consensus is we should focus on the basic, user-focused use case instead of building something for library authors

## ES Module Reloading

> Summary: ES modules do not have a writable cache, unlike CJS. This is problematic for various tools

- Guy Bedford (GB): no way to do that currently w/o terrible hacks
  - we would look into building something but could use some help
- CH: node would need to lead the way
- GB: happy to help
- CH: (explanation of why this is needed; watch mode, module-level mocking)
- GB: loaders solve some of these issues, but not all
- GB: definitely missing primitives; but things need to be done

> Action item(s): Continue discussion in `nodejs/modules` repo; need to enumerate a list of needed features and/or propose an API

## Self-Contained Binaries

> Summary: Should be a "blessed" way to install & run a CLI tool written in Node.js without needing to install Node.js separately

- BC: basic idea: for command-line tools it’s nice to be able to distribute an executable tool that the consumer doesn’t need to know about Node.js, doesn’t need to install Node.js
- AH: you’d need to compile node but you can leave shit out
  - V8 snapshots; Joyee would need to comment
- IS?: `ncc` from Zeit may be doing a V8 snapshot?
- AH: it’s a v8 code cache in ncc
- WT/CH: netflix might need this, ibm might need it
- CH: lets reach out to zeit
- ?: github actions is also a use case
- CH: startup times! they suck
  - need an rfc, get in contact

> Action item(s): Reach out to someone at Zeit, as they are building similar tools in userland.  Ask them to participate, or at minimum, find out how Node.js can better serve their use case.  Determine our use cases, since Zeit's may differ from IBM's may differ from Netflix

## Source Maps

> Summary: Ben Coe added native sourcemap support to Node.js, but it needs further work

- BC: typescript on servers sacrifices good source maps
  - we’ve been building good source map support into node
  - you can compile first, or run `ts-node` on-the-fly
  - there’s an initial implementation behind a flag
  - if it sees the flag, it will pull sourcemaps on disk into a cache ,then will annotate exceptiosn as they occur, ,will change the stack trace
  - coverage tools can use this to compute coverage
  - we have some problems - we broke Express because express fiddles with `prepareStackTrace` - anyone who touches `prepareStackTrace` would be affected
- MR: source map comment can support a url?
- BC: we have left ourself open for it
- BC: callsite API
  - could we extend callsite API to have some of this information?
  - could we add `getOriginal*()` functions?
- (group likes callsite idea)
- BC: we can’t get this out of experimental until we can *not* break Express
- MR: what happens when the source map is invalid?
- BC: it is ignored. can be revealed by debug flag
  - performance seems ok , we’re just hitting the fs one more time
- GH: are they loaded lazily?
- BC: no b/c code coverage.

> Action Item(s): I think Ben has some ideas on how to proceed, but I don't know exactly what those are

## Q&A

- ?: how do we discover these API updates? how can I find out where my code should be updated to use new native features (using a tool)?
- CH: An ESLint plugin which detects usages of userland modules which can consume new Node.js APIs instead would be a good solution
- (more discussion I failed to capture)

> Action Items(s):
> - a little blog or wiki for tooling group (I forget why?)
> - open an issue on the tooling repo for a new meeting time, as this conflicts with npm employees (Darcy Clarke would like to attend; Ruy needs to get an exception to attend every time)
