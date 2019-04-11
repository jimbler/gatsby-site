https://www.gatsbyjs.org/docs/quick-start

https://app.netlify.com/teams/jimbler/sites

## Gatsby Quick Commands
```
gatsby new gatsby-site
gatsby develop (run dev server)
gatsby build (prod build)
gatsby serve (serve production build)
```

## Netlify Deploy & CI

Automates deploy process. Listens for updates to Git repo, builds production, and deploys.

https://app.netlify.com/sites/verdascape/overview

## GraphQL

Browse and test your GraphQL queries at:

http://localhost:8000/___graphql

## Gatsby Image

https://codebushi.com/using-gatsby-image/

React Component for blazing fast images, lazy-load with blur up, auto-resize.

Gatsby Image has two types of responsive images, fixed and fluid. This distinction will vary what your query looks like. A fixed query has a set width and height and is for supporting different screen resolutions. A fluid query has a max-width and sometimes a max-height, and will create multiple images for supporting different screen sizes. For the most part, I find myself using the fluid type since my images will vary depending on the size of the screen.