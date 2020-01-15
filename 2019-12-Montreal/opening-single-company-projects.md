#  Making Single-company Projects More Open Session

### From [GH issue #218](https://github.com/openjs-foundation/summit/issues/218)

## Topics
* How can the open-source community be encouraged to take more ownership of a project like AMP that was started by a company like Google? What mechanisms are needed?
* Is there a way to help open-source contributors feel more free to contribute? How must AMP change to make this possible?
* How can the community contribute more meaningfully to the direction of a project like AMP?

## Notes:
* Node’s Code and Learn events have been good ways to source contributors. Could other projects have these too? Essentially, mentors attend and help people move toward making their first contribution.
* Someone suggests: if people have a request, tell them to do it themselves. If someone needs a feature, they’re more liable to contribute.
* If people think someone else will do the work, they won’t contribute. For individuals, tell them to open a PR. For companies, ignore the request and let them do it themselves. (We can't actually be so aggressive with AMP, but this was someone's idea based on how someone else had used tough love to encourage/compel others to contribute to his project.
* Single-company projects are often bound to that company’s roadmap. Then contributors feel like they can’t contribute anyway, since their contribution might not be part of the roadmap. With node, the solution is, there is no roadmap.
* New contributors to node have just as much say as old contributors. 
* How do new contributors get past the roadblocks and obstacles?
* AMP wants to maintain performance guarantees, so we want humans to review any proposed changes or new components. But a couple of people suggested that such performance guarantees could be automated those with CI etc. It should never be a person who says “no” to a contribution. That way, it doesn't feel like an in-group keeping others out.
* Someone pointed out that when he started contributing to node.js in 2015, they didn't allow a lot of contributions. People were just told “no”. This is bad. Default instead to “yes”!
* Daniel pointed out that not everyone reads the contributors.md file, so some contributions just do everything wrong. Gabriel said that you have to support that contributor and walk them through the process, even if they’re doing everything wrong. So in that case it just takes a lot of patience. James points out that people just don’t read the contributing guidelines for node. So the person who lands a PR can help out. Be positive. Guide them through items that need to be fixed. If something’s a nit, say it’s a nit.
* People suggested we set up a clear communications channel for contributors. We pointed out that we actually already have one - the Slack channel.
* People think that if our contribution guide is too long, create an index and a guide to that.
* Someone else thinks we should provide our contribution guide in video form, to make it easier to digest. Another Googler points out that videos are hard to update and patch, whereas docs aren’t.
* Node also has an onboarding document, not just a contributing document. And a paired approach to onboarding. New contributors can sign up for a pairing session. If we have a handholding approach, then if contributors come from a company, they may get more funding to contribute further.
* Raghu points out that we need to get more contributors to the party before guiding them in how to contribute. He assumes that node contributors are people who use node a lot and therefore feel inspired to contribute. For AMP, it’s not for people who love open-source, but companies who use AMP.
* Darcy read through the documentation, and he noticed it's full of "legacy references" to Google. The website has a Google privacy policy. The videos are full of Paul Bakaus and other Googlers. People need to feel shared ownership, and so the Google branding is a problem. He praises the open roadmap though. We just need to break the association with Google. In contrast, someone else mentions that the Google name has some value, because when people see that, they know AMP is supported by a large company.
* It's interesting to contrast Google/AMP's situation with Facebook/React.
* It’s hard to get approval sometimes at a company to contribute to an open-source project. Especially if you’re working for a competitor. Which is a reason to further break the Google association.
* Make sure also that new features aren’t just good for a certain company, but good for everyone. (We're already doing that)
* Make sure that everyone who comes to the table is treated as an equal.

At the end, people discovered that they can't create AMP components for their own personal use. That there are no plugins. That the AMP library is a monolith, for everyone. This is an obstacle. Tobie says that this won't be a problem once Bento AMP launches. But that world is not here yet. And I wonder if we could create a way that people could make their own components that would pass validation if they didn’t break AMP’s performance guarantees. I imagine we've never considered this, but it would make developers super happy.

**Takeaway for Ben and the AMP team:** if AMP really wants to get more contributions, we need AMP users to feel true shared ownership, an equal place at the table with the Googlers. We need to kickstart a culture where people contribute instead of making feature requests and waiting for Google to take care of it. We need AMP to feel like it's not something Google owns, but a resource for the community. We'd need to give up some control. More radically, we could automate some of the process of checking new contributions… defaulting to "yes" more than "no". And even allow people to use their own homemade components as long those didn't break AMP's performance guarantees.
