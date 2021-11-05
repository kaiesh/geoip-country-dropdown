# GeoIP Auto Country Detect with Flags in Dropdown

[Check out the demo page](https://vohra.sg/demo/geoip)

## Why?

While there are numerous brilliant IP to Geo resolution services, I found that my primary requirement was to simply perform country detection so that I could pre-select a country drop-down list for my web visitors.

## How?

[CloudFlare](https://www.cloudflare.com) provides a great free DNS service, which also happens to include a [country detection](https://support.cloudflare.com/hc/en-us/articles/200168236-Configuring-Cloudflare-IP-Geolocation) service. This medly of scripts simply uses that information.

So, it expects that the website you are accessing this on, is hosted with CloudFlare as your DNS provider.

## What?

One JS file, and one PHP file. That's really all you need here.

## License

LGPL. Go nuts.
