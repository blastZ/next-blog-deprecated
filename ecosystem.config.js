module.exports = {
  apps: [
    {
      name: 'blog',
      script: 'app.js',
      instances: -1,
      exec_mode: 'cluster',
      max_memory_restart: '200M',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: ['104.248.210.212'],
      ssh_options: 'ProxyCommand=nc -X connect -x 127.0.0.1:41081 %h %p',
      ref: 'origin/master',
      repo: 'git@github.com:blastZ/next-blog.git',
      path: '/home/blog',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
