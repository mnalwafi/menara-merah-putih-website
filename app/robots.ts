import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // TODO: Change this to your actual domain
  const baseUrl = 'https://www.menaramerahputih.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block private routes if you have any later
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}