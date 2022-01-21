---
rank: 2
following: "Admin"
title: "How does the Filtering Work?"
author: "Not Toby Bridle"
articleThumbnail: "https://img.icons8.com/color/344/filter-and-sort.png"
squishThumbnail: false
authorPicture: "https://cdn.ebaumsworld.com/2020/01/13/021054/86172703/lego-star-wars-profile-4.jpg"
description: "An Article explaining how the filter system would be used."
slug: "/blog/how-the-filter-works"
date: "2021-12-27"
tags: ["Projects", "Programming"]
---

# How the Filter System currently works

At the moment, since this is just a static page, GraphQL retrieves a list of articles & their metadata.
This metadata contains lots of useful information, but what we use for the filtering is `rank` & `following`. The `rank` property shows how high on the **Popular** filter the article should be, and `following` just indicates that the article should be on the **Following** filter.

# How this could be done using a Server

We could use a similar concept as already shown; however, rather than manually needing to update the frontmatter of each blog page - we could use GraphQL [**mutations**](https://graphql.org/learn/queries/). Mutations are used to update the value of a field on the server. We could combine a `useEffect` and a mutation regarding the change of a field named `hits`.
Then, when we are rendering the articles, we can sort by `hits` in descending order for the **Popular** filter.
