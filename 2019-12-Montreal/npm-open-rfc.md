# npm Open RFC Meeting

## Atendees

- Darcy Clarke (@darcyclarke) (Twitter: @darcy)
- Ruy Adorno (@ruyadorno)
- Michael Perrotte (@mikemimik)
- Ahmad Nassri (@ahmadnassri)
- Stephen Belanger (qard)
- Lucas Holmquist(@lholmquist)
- Eemeli Aro (@eemeli)
- Tobias Nießen (@tniessen)
- Jason Miller (@developit)
- Erick Wendel (@erickwendel | @erickwendel_)
- Wes Todd (@wesleytodd)
- Matan Kushner (@matchai)
- Geoff Goodman (@ggoodman)
- Jory Burson (@jorydotcom)
- Ethan Arrowood (@ethan-arrowood)
- Michael Dawson (@mhdawson)
- Em Lazer-Walker (@lazerwalker)
- Jessica Janiuk (@janiukjf)
- Rachel Romoff (@rromoff)
- Glenn Hinks (@ghinks)
- Gireesh Punathil (@gireeshpunathil)
- Anna Henningsen (@addaleax)
- Sakhi Mansoor(@sakhisheikh)
- Ryan Day (@soldair)
- Geoffrey Booth (@GeoffreyBooth)
- Robin Ginn (@rginn)
- Alex Bushnev (@alex_bushnev)
- Akshay Sawant  (@IamAkshaySawant)
- Jim Schlight (@jschlight)
- James M Snell (@jasnell)
- Matteo Collina (@matteocollina)
- Jason Etcovitch (@JasonEtco)
- Trivikram Kamat (@trivikr)
- Nicola Del Gobbo (@NickNaso)
- Alejandro Oviedo (@a0viedo)
- Marcos Frony (@mfrony)
- Hugo Ortiz (@hortizr)
- Jose L Bucio (@jbucio2)
- Owen Buckley (@thescientist13)

## Agenda

- Housekeeping (introductions, outlining intentions & desired outcomes)
- Overview of Why/What/How
  - https://github.com/npm/rfcs
    - Template, process etc documentation
  - Calls available on Youtube
    - npm channel https://www.youtube.com/channel/UCK71Wk0I45SLTSXQA23GdIw
    - Open RFCs meetings playlist https://www.youtube.com/playlist?list=PLQso55XhxkgBKhtFahRx20wyWE488kKJJ
  - https://npm.community
  - https://github.com/npm/statusboard - must have zenhub ext to see the board stuff
  - Link to the slides: bit.ly/beyond-install
  - Helpful community tools
    - https://github.com/npm/open-source-project-boilerplate
    - https://github.com/pkgjs (basis of status board for npm & express)
  - Npm project statusboard https://npm.github.io/statusboard/
- Crowd Source Topics/Questions; Retro

## Notes

- Darcy went quickly over the summary of his "npm: Beyond Install" talk which details a lot of the recent work the npm team has been up to
- Idea for npm process: make goals/priorities more clear for the community vis-a-vis what will be likely to be updated/addressed etc. “If I submit this RFC, what’s likely to happen to it? Should I open the issue at all?”
  - Eg: being clear that support for A is out of scope; X new feature is something we are prioritizing; Y new feature would be a welcome contribution, etc
- You don’t need to write a “full RFC” to contribute, you can start a discussion / question in the issues
- Question: What is most helpful to the npm team right now wrt the rfc process? What do you need? Help on outstanding issues, new rfcs, ??

## Retro

The npm team ran a community retrospective with the people present in the session that contributed with ideas on what can be improved within npm.

Bellow is a summary of these items:

### Start

#### website improvements

- Start letting me sort and filter the package list on npmjs.com
- improve management of teams on npmjs website
- Start letting me view a consolidated list of top-level and org packages on npmjs.com
- Fix the profile or account landing page after logging in so that it shows the packages I'm interested in.

#### workspaces

- I think that as mono repos that use lerna have become more popular the developers have found some issues with npm link. To the extent that they find using verdaccio more reliable and consistent to linking. I often hear "i'm not too keen on links". So I think that a little work in this area make help. this is kinda like the workspaces request.

#### Misc.

- Provide an option to get digest email when large number of packages are published
- Showcases about internal tools - Make videos to expose amazing tools that you've been creating and how was the process to make it
- Open Source the registry code
- Start thinking more about how npm inc can work with companies without forcing specific technology choices they may not be ready for. I don't have a specific solution to propose, but there is so much more than just the registry/npm enterprise product which could be a revenue stream.
- npm-cli: start forcussing more on stability as opposed to performance
- Start producing package / security events on something like EventBridge to allow for an ecosystem of integrations.
- Figure out how to make the organization project status board a maintainable project so other orgs can make use of it
- Package.json /Package-lock.json Interactive ( UI Interface )
- Start the initiative for defining and then operating on immutable bundle artifacts so that we don't have to rely in faith that npm ci is totally reproducible.

### Stop

- Creating open source projects with no licenses
- Disallow ads on install
- Better communication for security releases for the npm package

### Continue

- npm-cli: perfer serviceability / debuggability over fancy / colorful verbose messages / progress bars etc.
- Maintain the policy on adopting abandoned packages.
- Working on ways to support sustainable open source
- improving the docs
- Having transparency with all work the OSS team is doing!
- Collaborate along with the community on OSS
- growing/rolling out this rfc process to the community
- Being open, transparent, and communicative about upcoming/potential features (RFCs)
- Having dope swag
- Working on methods of providing funding/support for maintainers
- Working on tooling for automating releases
- Growing links and communication with the Node.js project
- The fantastic incremental rollout of features and your plans for workspaces are eagerly anticipated.
