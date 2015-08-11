# Session 2

Automation and CI

## Goals
 * Create a list of all current automation and the working groups that manage them.
  * Mikeal ­ what are all of the automations we have? Can we define automation? What are all of the machines we have, what do they do?
  * Can we define automation for clarity?
  * Mikeal ­ initially just “cloud” but is now interested in the broader definition
  * Exceptions:
    * Docker ­ submit to registry and wait for approval
  * Do we include process automation? (Voted: yes)
 * Map automation to processes from various working groups (what is tied to build? what is tied to PR? what is tied to a website commit?)
 * Create a list of future automation.
  * What triggers those automations
  * Automating the things that aren’t automated now (machine + process)
  * What do we want to automate?
  * Idea collection, wish list
 * Create a prioritized list of current and future automation and assign/plan each high value item.
  * Would be nice to see which would have the most impact, and existing ones (improvements)
  * Low hanging fruit? Gauge complexity/development cost.
  * Feeling of avoiding 100% dependency on automation

## Anti-goals

 * Avoid dumping more work on the build WG
 * Implementation
  * avoid making early commitments
  * Holding off too much discussion of future collaboration WG
  * too much implantation talk
 * Jenkins

## Create a list of all current automation and the working groups that manage them.

### Existing Automations

 * Issue notification
 * Jenkins testing each PR, commit
  * individuals
  * GitHub trigger
  * build
  * manually triggered
  * core projects
    * iojs, nodejs, forks
  * currently triggered by an individual
    * partially automated
  * make test ­ci
 * Landing PR build manually triggered
 * Making releases build WHAT?
 * Nightly builds
 * Building website
  * Includes docs builds
  * CHANGELOG generation (manual process via command) (manual) build (has its own repo: rvagg/changelog­maker)
  * manual (~4 people can trigger)
  * build
  * fully automated
  * build (publishes) / website (builds it own published content)
  * iojs.org commits to master, releases automatically publish the site nodejs.org Makefile triggered manually
 * TC agenda meeting tags to make agenda
 * Smoke testing ­ npm (partial) smoke pseudo­WG / build
 * GitHub notification bot (IRC) for some repos
 * IRC logging
  * TSC
  * tool that is triggered manually
  * tool that is triggered manually
  * whenever somebody chooses to run it (for releases a good idea)
  * configured from GitHub / hook, from repo ­> channel
  * owned by each WG
  * commits and PRs
  * individuals (bert), collaboration
  * IRC activity “logs” automatically, manually started server process

## Wishlist - [vote count]

 * “I’m leaving Node” Blog ­> Bot ­> IRC auto­subscribed (ghosts) ­ 1
  * When they leave a community it is a history of what they said
  * A ghost reminder that they were there
 * API AUTOMATION
  * API: what modules are affected by a PR ­ 10
  * Automating detection of API changes ­ 6
   * Steps
    * PR goes up, changing some misc. method.
    * Usage data database: “what uses this method?”
    * Automated test. Bot comments that “these 10 modules are affected”
   * Module === package
   * Not a smoke test, smoke tests === preselecting
   * An actual verbal report of what other projects might be affected
   * GOAL:
    * API stability (proves minor/not)
    * Who to talk to, what to smoke test
   * “On PR, check overall impact from API”
    * Bot that sees that the API is doing something new or different
    * Informational
 * [#2] code coverage ­ 15 @isntitvacant
  * coverage for ‘make test­ci’, both JS and C++
 * [#4] auto benchmark (on some interval ­ expensive to run) ­ 12 @jasnell
  * run benchmark working group’s suite
  * interval minimum, each release
 * integration testing (CI)
  * [#3] V8 ­ 30 @jasnell
  * [#5] libuv ­ 11 @orangemocha
  * NPM ­ 15
  * OpenSSL ­ 5
  * ICU ­ 3
  * Other integration tests?
 * Issue sync between joyent/node and nodejs/node ­ 6
  * Really old issues, 2012!, but for valid ones good to still track OR close
  * But for new issues, transfer them over
  * Automatic replies (bot)
 * Automatic release / versioning to take care of manual steps (semantic­release) ­ 5
  * Determines semver based on parsing changes
  * Automated versioning steps
    * (push ­> travis/jenkins ­> succeeds ­> tags and releases)
  * Requires tags on commits
 * Website ­ 18n ­ publishing flows ­ 6
  * Automated weekly update generation (Medium)
  * currently iojs weekly updates are posted to Medium, would like them to be automated and ideally posted to the website
  * Tweeting, etc. magic button
  * When changes are posted to a i18n GitHub Repo, automatic merge to website
 * automatic Issue/PR linting / quality control (hygiene) / for issues ­ bot based ­  8
  * running lint and checking whether tests are included as part of PR
 * detect if a new issues is a duplicate or related to another issue ­ 4
  * bot
 * auto­create issue in related WG repo ­ 6
  * create once, makes multiple
  * use cases: i18n notified of content changes, build notified of new requirement
 * [#1] build/infrastructure monitoring ­ 20 @starefossen (sp?)
  * Jenkins
    * detecting when machines crash (run out of disk space)
  * Website up/down
  * Other tooling crash notifications
 * documentation QA ­ 8
  * Broken links, linting, etc.
 * meeting button ­ 9
  * automate steps required to “call” a meeting
  * create issue
  * create agenda
  * create hangout, timezone linking
  * calendar entry
  * meeting reminders WITH link to where to go (spoon feeding)
 * automatic backporting of PRs  ­ 9
  * cherry­pick PRs for LTS versions
  * will it magically “just work”
  * could it land PRs?
 * community outreach
  * tweets ­ 2
  * minutes extraction / publishing ­ 10
 * weekly digest of issues ­ 4
  * == rollup
 * stalled/stale PR/issue detection ­ 10
  * report (summary, weekly?)
  * health metrics
 * release notifications ­ 8
  * before releases (planned)
  * when a new version lands
