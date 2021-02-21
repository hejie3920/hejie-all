module.exports = {
  apps: [
    {
      name: 'API',
      script: 'app.js',
      args: 'one two',
      instances: 1,
      autorestart: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
