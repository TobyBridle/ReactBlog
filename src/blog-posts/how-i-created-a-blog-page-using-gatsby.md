---
rank: 1
following: "none"
title: "How I created A Blog Page using Gatsby & React"
author: "Toby Bridle"
articleThumbnail: "https://codingthesmartway.com/wp-content/uploads/2019/02/gatsby-logo.png"
authorPicture: "https://cdn.ebaumsworld.com/2020/01/13/021356/86172725/lego-star-wars-profile-25.jpg"
description: "My (annoying) journey using Gatsby, React & Recoil"
slug: "/blog/how-i-created-a-blog-page-using-gatsby"
date: "2021-12-26"
tags: ["Projects", "Gatsby", "React"]
---

# The Initial Idea

I knew I needed some (more) projects to add to my portfolio, since the existing ones were not
showcasing my skills. I needed something that, though giving me more experience & confidence in React,
would not consume all of my freetime (it was the Christmas holidays - time for relaxing). I went through my Figma and found a design
for a college project (BHASVIC Magazine) that I hadn't ended up using. It matched my criteria, and was easy enough to code.

# A Timeline of Development

> Though this project was not **too** time consuming, I still had quite a few hiccups.
> For the first few hours, development was going swimmingly. The theme switching was working - and the components such as the `Navbar` and `PageMeta` were coming along nicely; however, I encountered a problem that I had overlooked: hosting. At the time, I was using `create-react-app` to bundle my code. It did not provide the features that I needed. This is when I looked to [Gatsby](https://www.gatsbyjs.com/). I ported all of my Components from my `create-react-app` project over to Gatsby - also switching from [Redux](https://redux.js.org/) to [Recoil](https://recoiljs.org/). I found Recoil much simpler to use, and it turns out it's also much faster (`O(1)` rather than O(n)`).
