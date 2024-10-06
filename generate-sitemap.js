import SitemapGenerator from 'sitemap-generator';

// Create generator
const generator = SitemapGenerator('https://www.freebathroom.us', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',
});

// Start the generator
generator.start();
