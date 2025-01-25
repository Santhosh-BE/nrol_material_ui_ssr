module.exports = {
    apps: [
      {
        name: 'nroll',
        script: 'npm',
        args: 'run production',
        env: {
          PORT: 3000
        }
      }
    ]
  };