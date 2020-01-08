## Diagnostics WG: status, challenges and opportunities

Gireesh (@gireeshpunathil) provided a brief history
of the diagnostic working group [ 2015 - 2019 ]

Gireesh talked through the top 10 initiatives that the 
work group is focussing on, with current status / capability,
challenges and call for action for each initiatives being called out.
The crux of the discussion is condensced into one line focus area.

### async_hooks:
James Snell (JS): this is used a lot in production.
focus areas: improve performance, reduce footprint, decouple async_hook from promises
- Call for volunteers
new champion: Stephen Belanger (@Qaurd)

### v8 tracing:
JS: need more collaboration on covering additional components and trace points
focus areas: more trace points, support for libuv and worker, better documentation
- Call for volunteers
champion: James Snell (@jasnell)

--profiler:
No action items

v8 CPU profiler:
No action items

### memory debugging: heapdump
focus areas: scalability and footprint issues
- Call for volunteers
champion: Matheus Marchini (@mmarchini)

### memory debugging: llnode
focus areas: Javascript API, Unified Object formatting, Node v12 compatibility
- Call for volunteers
champion: @mmarchini

### Postmortem debugging: llnode
focus areas: better abstractions, better documentation
- Call for volunteers
champion: @mmarchini, @gireeshpunathil

### report:
Anna Henningsen (AH): internal GPF handling is not necessarily
a pre-requisite for exit experimental
focus areas: worker support
champion: @gireeshpunathil, Michael Dawson (@mhdawson)

### best practices doc:
focus areas: comprehensive coverage
- Call for volunteers
champion: @gireeshpunathil, Peter Marton (@hekike), @mhdawson

### user journey based projects:
focus areas: Align everything we do through user journeys,
Define supported workloads and tools, and tool LTS strategy
- Call for volunteers
champion: @hekike, @mhdawson, @gireeshpunathil
