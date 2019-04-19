module.exports = {
  apps: [{
    name: "next-blog",
    script: "./app.js",
    dev: {
      NODE_ENV: "development",
    },
    pro: {
      NODE_ENV: "production",
    }
  }]
}