⚡️ General (Compare & Contrast)
What is the difference between SSR, SSG, ISR, and CSR in React?

How do you decide which rendering strategy to use for a particular page or component?

Can you mix different rendering strategies in a single application? If yes, how?

How do these rendering strategies impact performance, SEO, and user experience?

Which rendering method is better for dynamic data that changes frequently? Why?

🔁 CSR (Client-Side Rendering)
🔹 Basic
What is CSR and how does it work in a React app?

How does React hydrate CSR-rendered apps?

What are the drawbacks of CSR in terms of SEO?

🔹 Advanced
How do you improve performance in CSR-heavy apps (e.g., lazy loading, code splitting)?

How do you handle SEO in a CSR-only React app (e.g., React Helmet, prerendering)?

Have you ever implemented a fallback strategy in CSR to handle slow data fetching or offline mode?

🌐 SSR (Server-Side Rendering)
🔹 Basic
What is SSR and how is it implemented in React (e.g., with Next.js)?

What are the key benefits of SSR over CSR?

🔹 Advanced
How do you manage server-side data fetching in Next.js (getServerSideProps)?

How do you handle caching for SSR pages to reduce server load?

How do you implement authentication and session handling in SSR?

What are some caveats with using third-party libraries that depend on the window object in SSR?

📄 SSG (Static Site Generation)
🔹 Basic
What is SSG and when should it be used?

How does getStaticProps work in Next.js?

🔹 Advanced
How do you handle dynamic routes with SSG (getStaticPaths)?

How can you protect SSG content that needs authentication?

How do you handle large volumes of data in SSG without blocking the build process?

♻️ ISR (Incremental Static Regeneration)
🔹 Basic
What is ISR and how does it differ from SSR and SSG?

How is ISR implemented in Next.js?

🔹 Advanced
What are the parameters of ISR in getStaticProps (e.g., revalidate) and how do they affect page regeneration?

How does ISR handle requests during the revalidation window?

How would you debug issues with ISR (e.g., stale content, failed regeneration)?

⚙️ Code and Architectural Questions
Code: Can you show a code snippet where a single Next.js app uses SSR, SSG, ISR, and CSR across different routes?

Architecture: How would you architect a blog-like platform using a mix of SSG for public posts and SSR for admin views?

Scalability: How would you scale SSR in production under heavy traffic? What are the server requirements?

Performance: How do you measure and optimize TTFB (Time to First Byte) in SSR and ISR?

Caching: How do you integrate CDNs or edge functions with SSG and ISR for improved performance?

🧠 Scenario-Based Questions
If your marketing team wants a page updated every 5 minutes, which strategy would you use?

You’re building a financial dashboard with real-time data—what rendering strategy makes the most sense and why?

Your homepage changes infrequently but must load fast worldwide—what rendering strategy fits best?

How would you handle SEO for a site that uses both SSG and CSR?

🌐 Client-Side Rendering (CSR) – 10 Advanced Interview Questions
🔹 Conceptual & Technical
What is Client-Side Rendering and how does it work in a React SPA?

What happens during the hydration phase of CSR?

How does CSR impact the initial load time and SEO? How do you overcome those limitations?

How would you implement lazy loading of components in a CSR-heavy React app?

What strategies do you use to manage performance in large CSR apps (e.g., virtual scrolling, suspense, dynamic imports)?

How does service worker integration help CSR applications?

🔹 Scenario-Based
You’re building a trading dashboard that requires frequent real-time updates. Would you choose CSR over SSR or SSG? Why?

How would you improve Time-to-Interactive (TTI) for a CSR-heavy landing page?

A user complains about a blank screen on first load for your CSR app. How would you debug and fix this?

You need to implement a product detail page that’s SEO-optimized but also needs rich client interactivity. Can CSR handle it alone? If not, what would you combine?

⚙️ Server-Side Rendering (SSR) – 10 Advanced Interview Questions
🔹 Conceptual & Technical
What is SSR in React? How does it differ from CSR and SSG?

Explain how getServerSideProps works in Next.js and when you'd use it.

How would you implement server-side caching for SSR pages?

How do you handle third-party libraries in SSR that rely on browser APIs like window or document?

How do you protect SSR pages that require user authentication?

Explain the role of CDN and edge rendering in scaling SSR.

🔹 Scenario-Based
You have a page with user-specific data (like portfolio or bank dashboard). Would SSR or CSR be ideal?

You’re experiencing high TTFB in an SSR page under load. How would you diagnose and optimize it?

How would you implement session-based logic (like JWT token validation) during SSR?

Your marketing site uses SSR for SEO. What are the steps you'd take to integrate structured metadata like Open Graph and Twitter cards?

📄 Static Site Generation (SSG) – 10 Advanced Interview Questions
🔹 Conceptual & Technical
What is SSG and how is it implemented using getStaticProps and getStaticPaths in Next.js?

When should you prefer SSG over SSR?

How do you handle internationalization (i18n) in SSG sites?

How do you manage very large datasets (e.g., thousands of pages) during static generation?

What are the benefits and limitations of SSG for SEO?

🔹 Scenario-Based
You’re building a blog where articles are rarely updated. How would you structure it using SSG?

A stakeholder wants real-time updates on a landing page. How do you justify or refactor from SSG to another method?

How do you handle search functionality in SSG where search is dynamic but content is static?

How would you secure an SSG site with gated content or paywalled articles?

You added a new product to the database, but it’s not showing on your site. The site uses SSG. What went wrong and how would you fix it?

♻️ Incremental Static Regeneration (ISR) – 10 Advanced Interview Questions
🔹 Conceptual & Technical
What is ISR and how is it different from SSG and SSR?

How does the revalidate property in getStaticProps work under the hood?

What happens if multiple users hit an outdated page before regeneration is complete?

How do you handle errors during revalidation? Can you retry or log them?

How does ISR help with performance and scalability?

🔹 Scenario-Based
You have a real estate site where property listings change daily. Would you use ISR? What revalidation strategy would you apply?

A user reports that a newly added blog post isn't visible on the site. You use ISR with revalidate: 60. How do you explain this behavior?

How would you cache or persist the newly regenerated page on the CDN after ISR?

Your ISR revalidations are failing due to API issues. How would you isolate and handle this issue in production?

How do you implement a hybrid strategy where some pages use SSG and others ISR?

✅ Bonus: Cross-Cutting Interview Questions
In what scenarios would you combine SSR and CSR in the same app?

Can a single Next.js app use SSR, SSG, ISR, and CSR together? Give a real-world architecture example.

How do rendering strategies impact Core Web Vitals like LCP, FID, and CLS?

How does Next.js handle fallback rendering in getStaticPaths for ISR?

How do you implement page analytics in a mixed-rendering React app?

🌐 Client-Side Rendering (CSR) — Questions & Answers

1. What is CSR and how does it work in a React SPA?
   Answer: CSR means the server delivers a minimal HTML page with JavaScript bundles. Once the JS loads, React takes over to render the content in the browser (hydration). All routing and data fetching happen on the client side.

2. What happens during the hydration phase of CSR?
   Answer: Hydration is when the server-sent HTML is “wired up” with React's event listeners and reactivity. It's necessary for making the initial HTML interactive. Improper hydration can cause React warnings or duplicate DOM mismatches.

3. How does CSR impact SEO, and how do you handle it?
   Answer: CSR delays content rendering until JS loads, so crawlers might see a blank page. You can mitigate this with prerendering, serverless rendering, or using SSR for critical routes. Meta tags using react-helmet can help with indexing.

4. How would you implement lazy loading in CSR?
   Answer: Use React’s lazy() and Suspense for components. For routes, use React.lazy + Suspense or dynamic imports with next/dynamic in Next.js. Also consider loading skeleton UIs or shimmer effects.

5. What performance strategies are essential in CSR-heavy apps?
   Answer:

Code splitting with dynamic imports.

Tree shaking unused dependencies.

Using React.memo, useMemo, useCallback.

Optimizing bundle size and reducing re-renders.

Virtualization (e.g., react-window for long lists).

6. How do service workers help in CSR?
   Answer: They cache assets and API responses, enabling faster reloads and offline functionality. Tools like Workbox or next-pwa can help implement them.

7. Scenario: Real-time trading dashboard — CSR or SSR?
   Answer: CSR is better here. SSR isn’t useful for rapidly updating data. CSR allows use of WebSockets, polling, or GraphQL subscriptions for real-time updates without full page reloads.

8. Scenario: CSR homepage is slow — how do you optimize TTI?
   Answer:

Lazy load below-the-fold components.

Minimize blocking JS.

Compress images.

Use font preloading.

Code split non-critical libraries (e.g., charts).

9. Scenario: User sees a blank screen on CSR load — steps to debug?
   Answer:

Check JavaScript errors in DevTools.

Confirm hydration mismatch warnings.

Ensure API data is fetched correctly.

Verify correct build artifacts (e.g., Webpack chunk issues).

Check environment-specific config issues.

10. Scenario: SEO-optimized product page — is CSR enough?
    Answer: No. SEO bots may not execute JS. Prefer SSR or SSG for this route, and hydrate it for interactivity using client-side JS (hybrid strategy).

⚙️ Server-Side Rendering (SSR) — Questions & Answers

1. What is SSR in React? How does it differ from CSR and SSG?
   Answer: SSR renders the page HTML on the server at request time using data and sends the full HTML to the browser. Unlike CSR (where rendering happens entirely in the browser) or SSG (where HTML is prebuilt at build time), SSR ensures that the user gets content immediately, benefiting SEO and initial load speed.

2. Explain how getServerSideProps works in Next.js and when to use it.
   Answer: getServerSideProps runs on every request before rendering the page. It allows dynamic data fetching at request time, useful for:

Personalization (e.g., dashboards)

Real-time data (e.g., stock prices)

Authentication-required pages

3. How would you implement server-side caching for SSR pages?
   Answer:

Use HTTP headers: Cache-Control, ETag, etc.

Reverse proxies like Varnish or NGINX.

CDN-level caching (e.g., Cloudflare or Akamai) with rules to cache based on headers or routes.

In Next.js: combine SSR with middleware to serve from cache when available.

4. How do you handle third-party libraries in SSR that rely on window or document?
   Answer: Use dynamic import with ssr: false to ensure it's only imported on the client:

js
Copy
Edit
const Chart = dynamic(() => import('react-chartjs-2'), { ssr: false });
Alternatively, wrap code inside useEffect to defer execution until the client.

5. How do you protect SSR pages that require authentication?
   Answer:

Read cookies or headers in getServerSideProps.

Validate JWTs or session tokens.

Redirect unauthenticated users:

js
Copy
Edit
if (!session) {
return {
redirect: { destination: '/login', permanent: false }
};
} 6. Explain the role of CDN and edge rendering in scaling SSR.
Answer: Traditional SSR scales poorly under high load. CDNs + edge functions (like Vercel Edge or Netlify Edge) bring SSR closer to the user, reducing latency. You can cache HTML at the edge and revalidate intelligently using techniques like ISR or stale-while-revalidate.

7. Scenario: User-specific dashboard – SSR or CSR?
   Answer: SSR is preferred for first render (especially if SEO matters), ensuring fresh data and SEO-friendliness. If real-time data is needed post-load, hydrate with CSR (WebSockets or polling). A hybrid approach often works best.

8. Scenario: High TTFB on an SSR page — how do you debug and optimize?
   Answer:

Profile getServerSideProps (check slow APIs or DB calls).

Use Promise.all for parallel async operations.

Enable server logs and APM tools like New Relic or Datadog.

Add caching (e.g., Redis) for expensive computations.

9. Scenario: How do you implement session-based logic (e.g., JWT) in SSR?
   Answer:

Parse token from cookies in getServerSideProps.

Verify JWT using a backend utility.

Attach decoded token to props for rendering or access control.

Example:

js
Copy
Edit
const token = parseCookies(context).authToken;
const user = jwt.verify(token, process.env.JWT_SECRET); 10. Scenario: SSR for marketing site — how to manage SEO with meta tags and Open Graph?
Answer:

Use next/head to inject dynamic meta tags inside SSR-rendered components.

Ensure critical tags like title, description, og:image, and og:url are set based on props from getServerSideProps.

Ensure tags are not duplicated or overridden on hydration.

📄 Static Site Generation (SSG) — Questions & Answers

1. What is SSG and how is it implemented using getStaticProps and getStaticPaths in Next.js?
   Answer:
   SSG builds the HTML at build time, and that HTML is reused for every request.

getStaticProps fetches data during the build and injects it into the page.

getStaticPaths is used for dynamic routes to define which paths should be pre-rendered at build time.

2. When should you prefer SSG over SSR or CSR?
   Answer:
   Use SSG when:

Content changes rarely (e.g., blog posts, documentation).

SEO is important.

You want maximum performance (static HTML served from CDN).

No personalization is needed on the first load.

3. How do you handle internationalization (i18n) in SSG?
   Answer:
   You can:

Use Next.js built-in i18n routing (locales in next.config.js).

In getStaticPaths, generate paths for each locale and slug.

Load translations during getStaticProps using i18n libraries (e.g., i18next or next-intl).

4. How do you manage large datasets (e.g., 100,000 pages) in SSG?
   Answer:

Avoid building all at once. Use fallback: true in getStaticPaths to pre-render only popular pages.

Pair SSG with ISR to handle remaining routes dynamically after build.

Use pagination or on-demand builders for non-critical content.

5. What are the benefits and limitations of SSG for SEO?
   Answer:
   Benefits:

Instant load times (great for Core Web Vitals).

Fully rendered HTML for crawlers.

Limitations:

SEO issues if the content is stale.

Difficult to manage personalized SEO (meta tags based on user behavior).

Requires re-deploying to reflect content updates (unless ISR is used).

6. Scenario: Blog where articles are rarely updated — how would you structure this using SSG?
   Answer:

Use getStaticProps for each blog post to fetch content at build time.

Use getStaticPaths to define which slugs to prebuild.

Optionally use fallback: true to load older posts on demand with ISR.

Use markdown/MDX, CMS (e.g., Contentful), or filesystem as data sources.

7. Scenario: Stakeholder wants near real-time updates on a static homepage — what’s your strategy?
   Answer:

SSG alone won’t work. Combine SSG with ISR.

Use revalidate in getStaticProps to regenerate the page periodically (e.g., every 60 seconds).

Use a CMS that supports webhooks to trigger re-builds (optional).

8. Scenario: How do you handle search functionality in SSG where search is dynamic?
   Answer:

Offload search to the client using:

JavaScript filter (small datasets).

Full-text search libraries (e.g., Fuse.js).

External APIs (e.g., Algolia, Meilisearch).

Load results dynamically using useEffect or SWR.

9. Scenario: Can you protect a statically generated (SSG) page behind authentication?
   Answer:
   Not directly. HTML is public by nature. Solutions include:

Move to SSR for protected pages.

Use static + client auth: hide sensitive content behind a login wall using useEffect.

Use edge middleware to restrict access before serving.

10. Scenario: You added a new product, but it’s not showing on the site. The site uses SSG. What went wrong?
    Answer:
    Likely reasons:

Site wasn’t re-built after the new product was added.

The route wasn’t included in getStaticPaths.

Fix: Trigger a rebuild or use ISR to support on-demand updates.

♻️ Incremental Static Regeneration (ISR) — Questions & Answers

1. What is ISR and how is it different from SSG and SSR?
   Answer:
   ISR allows static pages to be updated after the site is built, without requiring a full rebuild.

Like SSG, it uses getStaticProps.

Unlike traditional SSG, it supports periodic regeneration using the revalidate key.

It's a hybrid: build-time + runtime regeneration = best of both static and dynamic worlds.

2. How does the revalidate property in getStaticProps work under the hood?
   Answer:
   When a user visits a page and the revalidate time has passed, Next.js regenerates the page in the background.

The old page is still served until regeneration completes.

Once updated, the new version is served for subsequent requests.

3. What happens if multiple users hit an outdated ISR page before regeneration completes?
   Answer:
   They all receive the existing (cached) version. Only one regeneration request is triggered. Once it finishes, future requests will get the updated page. This is known as the stale-while-revalidate model.

4. How do you handle errors during ISR regeneration? Can it retry or log failures?
   Answer:
   ISR regeneration errors:

Are silently logged by Next.js (usually in logs/observability tools).

The last valid page remains served (fallback safe).

You can wrap your getStaticProps logic with error handling and fallback data.

For detailed observability, integrate tools like Sentry, Datadog, or LogRocket.

5. How does ISR improve scalability and performance?
   Answer:

Pages are served from CDN/static cache by default — fast, cheap, and global.

Dynamic content is updated on demand without rebuilding everything.

It allows you to scale to millions of pages without hurting performance or developer workflows.

6. Scenario: Real estate listings change daily — how would you use ISR?
   Answer:

Use getStaticProps to fetch property data.

Set revalidate: 86400 (once a day) or lower if needed.

Use getStaticPaths with fallback: 'blocking' or 'true' to generate popular listings during build and others on-demand.

7. Scenario: A new blog post isn't visible — you use revalidate: 60. Why?
   Answer:

If the post was added after the build, and the route wasn’t included in getStaticPaths, ISR won't generate it unless fallback is enabled.

Solutions:

Use fallback: 'blocking' in getStaticPaths.

Add the new slug to getStaticPaths via CMS webhook or rebuild.

8. How would you cache/persist newly regenerated ISR pages on a CDN?
   Answer:

ISR pages are automatically cached at the CDN level by Vercel (or similar platforms).

After regeneration, the CDN edge nodes are invalidated, and new HTML is pushed.

You don’t manage this manually, but you can control cache headers using Cache-Control for APIs.

9. Scenario: ISR regeneration is failing due to API errors — how do you isolate and fix it?
   Answer:

Wrap getStaticProps logic with a try-catch to log failures.

Use observability tools (e.g., Sentry).

Add fallback data or notFound: true for critical failures.

Test API availability and credentials used in the build environment.

10. Scenario: You want some pages with SSG, some with ISR — how do you design this hybrid setup?
    Answer:

Use getStaticProps for both.

Set revalidate: false for permanent static pages (SSG).

Set revalidate: 60 or dynamic values for ISR pages.

In getStaticPaths, use fallback: 'false' for strict static, or 'blocking'/'true' for ISR-capable pages.
