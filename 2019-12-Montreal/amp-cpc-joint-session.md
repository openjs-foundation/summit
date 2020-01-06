# AMP Infra-WG / CPC joint session

### Attendees:

* Joe Sepi
* Eemeli Aro
* Tobie Langel
* Ben Morss
* Ryan Cebulko
* Esther Kim
* Daniel Rozenberg
* Raghu Simha
* Tierney Cyren
* Jory Burson
* Naina Raisinghani
* Greg Grothaus
* David Sedano

### Motivation:

Get AMP's wg-infra and wg-caching on the same page as Open JS Foundation's CPC about AMP's infrastructure.

### Related issues:

* [openjs-foundation/summit#226](https://github.com/openjs-foundation/summit/issues/226)
* [ampproject/wg-caching#13](https://github.com/ampproject/wg-caching/issues/13)
* [ampproject/wg-infra#19](https://github.com/ampproject/wg-infra/issues/19)

## Item 1: Document AMP's infrastructure

**Raghu:**
  - Infra means different things to different people. (Dev, test, release, serve, cache, etc.)

**Jory:**
  - Interested in project moving to open governance and delivery processes. 

**Tobie:**
  - First step is a high level description of existing infrastructure.
  - Interested in services, cost, already deployed projects (bots), custom infra (if any? open-sourced? other stuff?), clarify what part of infra is under Open JS  working group's purview and what google will continue to maintain.

**Raghu:**
  - Where would we like this documentation made available?

**Daniel:**
  - Some services are rolled in to larger pieces of Google infrastructure, and it's not possible to tease out AMP's portion.

**Joe:**
  - It's unlikely that OpenJS foundation will ever try to replace the Google AMP cache.

**Tobie:**
  - Do we know how many AMP requests are served for self-hosted runtime?

**Naina:**
  - We can get you the number from Malte's recent public talk.


### Action items:
- wg-infra writes documents all these aspects of AMP infrastructure.
- Costs can be approximate and high-level.



## Item 2: Disentangling the AMP runtime from the Google AMP cache

**Tierney:**
- Would like foundation to have some level of access / control over things that are fundamental to AMP, like the cache (for example, if the cache goes away, will AMP still work? No.)

**Tobie:**
- Not suggesting that the AMP cache should move to the foundation, because that makes no sense. However, there's no way the folks on the CPC can understand how AMP works without knowledge of things like the cache.

**Greg:**
- A way of understanding this: Existing documents that are self-hosted should continue to work if google were to stop hosting the runtime at some point.
- This could be done by transferring the domain ownership to the foundation, but have google infrastructure continue to serve the runtime.
- If we want to go further, identify a serving solution that the foundation maintains.
- Would like to know what it means for the foundation to own the domain.
- It's possible to change the domain from which JS files are served.

### Action items:
- Open JS CPC would like to read a document written by wg-caching about this and come back with questions.

