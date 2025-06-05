# 13. Domain Mapping Completion

Date: 2025-01-06

## Status

Accepted

## Context

The Summer Brain Rot platform consists of two applications that need to be accessible via professional custom domains:
- Marketing site: summerbrainrot.com
- Portal application: summerbrainrot.camp

These domains were previously pointing to Firebase Hosting URLs:
- summerbrainrot-com.web.app
- summerbrainrot-camp.web.app

Custom domain mapping provides:
- Professional appearance for users
- Better brand recognition
- Improved SEO for the marketing site
- Simplified URLs for sharing and marketing
- SSL certificates automatically managed by Firebase

## Decision

Successfully configured domain mapping in Firebase Hosting to connect:
- **summerbrainrot.com** → summerbrainrot-com.web.app (marketing site)
- **summerbrainrot.camp** → summerbrainrot-camp.web.app (portal app)

Note: The portal app also has a Firebase Web App Hosting deployment at summerbrainrot--summerbrainrot.us-central1.hosted.app, but the primary production URL is now summerbrainrot.camp through Firebase Hosting.

## Consequences

### Positive

- **Professional URLs**: Users access the platform via memorable, branded domains
- **SSL/TLS Security**: Firebase automatically provisions and renews SSL certificates
- **Performance**: Firebase's global CDN serves content from edge locations
- **SEO Benefits**: Custom domains improve search engine rankings
- **Brand Consistency**: URLs match the program's identity
- **User Trust**: Professional domains increase credibility

### Negative

- **DNS Propagation**: Changes may take up to 48 hours to propagate globally
- **Configuration Complexity**: Requires DNS record management
- **Domain Costs**: Annual domain registration fees

### Neutral

- **Firebase Dependency**: Domain mapping tied to Firebase infrastructure
- **DNS Management**: Requires access to domain registrar
- **Multiple Deployments**: Portal has both Hosting and Web App Hosting options

## Implementation Details

### DNS Configuration

For each domain, the following DNS records were configured:
1. A records pointing to Firebase's IP addresses
2. TXT record for domain verification
3. CNAME records for www subdomain (if applicable)

### Firebase Hosting Configuration

The domains were added through Firebase Console:
1. Navigate to Hosting section
2. Add custom domain
3. Verify domain ownership
4. Update DNS records
5. Wait for SSL provisioning

### URL Updates

Documentation and configuration files were updated to reflect the live domains:
- TODO.md: Updated deployment URLs
- Marketing README: Updated live site link
- Other documentation already used correct custom domains

## Verification

Both domains are now live and accessible:
- ✅ https://summerbrainrot.com - Marketing site with citrus theme
- ✅ https://summerbrainrot.camp - Portal with authentication

SSL certificates are active and auto-renewing through Firebase.

## Educational Considerations

This implementation teaches participants about:
- **Domain Management**: How DNS and domain mapping work
- **SSL/TLS**: Importance of secure connections
- **Production Deployment**: Real-world hosting configurations
- **Brand Strategy**: Choosing appropriate domain names
- **Infrastructure**: Understanding CDN and edge networks

## Related Decisions

- [ADR-0003: Firebase Platform](0003-firebase-platform.md) - Firebase Hosting as deployment platform
- [ADR-0010: Firebase Web App Hosting Deployment](0010-firebase-web-app-hosting-deployment.md) - Alternative portal deployment
- [ADR-0006: Vercel Deployment](0006-vercel-deployment.md) - Superseded deployment approach
- [ADR-0014: Portal Redirect Strategy](0014-portal-redirect-strategy.md) - Interim solution for portal access

## References

- [Firebase Hosting Custom Domains](https://firebase.google.com/docs/hosting/custom-domain)
- [DNS Record Types](https://www.cloudflare.com/learning/dns/dns-records/)
- [SSL/TLS Best Practices](https://www.ssllabs.com/projects/best-practices/)