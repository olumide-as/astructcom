/** @type {import('next-sitemap').IConfig} */module.exports = {
  siteUrl: 'https://astructcom.com', // your site URL
  generateRobotsTxt: true, // generate robots.txt
  sitemapSize: 5000, // number of URLs per sitemap file
  changefreq: 'weekly', // optional
  priority: 0.8, // optional
  exclude: ['/privacy', '/terms', '/thank-you' ], // exclude privacy and terms pages
};