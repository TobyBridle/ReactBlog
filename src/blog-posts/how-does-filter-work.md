---
title: "How does the Filtering Work?"
author: "Toby Bridle"
articleThumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Filter_font_awesome.svg/512px-Filter_font_awesome.svg.png"
authorPicture: "https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?cs=srgb&dl=pexels-jacob-pilatoe-4655426.jpg&fm=jpg"
description: "An Article explaining how the filter system would be used."
slug: "/blog/how-the-filter-works"
date: "2021-12-27"
tags: ["Projects", "Programming"]
---

# How the Filter System currently works
At the moment, since this is just a static page, GraphQL retrieves a list of articles & their metadata.
This metadata contains lots of useful information, but what we use for the filtering is `rank` & `following`. The `rank` property shows how high on the **Popular** filter the article should be, and `following` just indicates that the article should be on the **Following** filter.

# How this could be done using a Server
We could use a similar concept as already shown; however, rather than manually needing to update the frontmatter of each blog page - we could use GraphQL [__mutations__](https://graphql.org/learn/queries/). Mutations are used to update the value of a field on the server. We could combine a `useEffect` and a mutation regarding the change of a field named `hits`.
Then, when we are rendering the articles, we can sort by `hits` in descending order for the **Popular** filter.
