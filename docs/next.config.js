module.exports = {
    async redirects() {
      return [
        {
          source: '/token',
          destination: 'https://www.solana-program.com/docs/token',
          permanent: true,
        },
      ]
    },
  }