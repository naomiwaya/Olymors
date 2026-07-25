# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| `main` (latest) | ✅ Active |
| All older branches | ❌ Not supported |

We only actively maintain the latest version deployed on `main`.

---

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in this project, please report it
responsibly by emailing:

**✉️ Info@Olymors.com**

Include the subject line: `[SECURITY] Vulnerability Report`

### What to include in your report

- A clear description of the vulnerability
- Steps to reproduce or a proof-of-concept
- The potential impact (data exposure, XSS, CSRF, etc.)
- Any suggested remediation if known

---

## Response Timeline

| Step | Target timeframe |
|------|-----------------|
| Acknowledgement of receipt | Within 48 hours |
| Initial assessment | Within 5 business days |
| Fix or mitigation shipped | Within 30 days (critical issues within 7 days) |
| Public disclosure (if applicable) | After fix is deployed |

We will keep you informed throughout the process and credit you in the fix
notes if you wish.

---

## Scope

This policy covers:

- The Next.js website codebase (`olymors.com`)
- Any APIs or server actions within this repository
- Dependencies included in `package.json`

**Out of scope:**

- Third-party services (Vercel, EmailJS, Unsplash CDN)
- Denial-of-service attacks
- Social engineering

---

## Our Commitment

- We will not take legal action against researchers who report vulnerabilities in good faith
- We will handle all reports confidentially
- We will notify you when the vulnerability is fixed

---

## Security Best Practices in This Project

This project follows these security practices:

- No secrets or API keys committed to the repository (use `.env.local`)
- All user input validated with **Zod** before processing
- `Content-Security-Policy` and security headers recommended via Vercel
- Dependencies kept up to date; run `npm audit` regularly
- No dynamic `dangerouslySetInnerHTML` with user-supplied data
