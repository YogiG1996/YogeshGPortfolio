# Yogesh Ghogare — Personal Portfolio

A production-grade personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 18 + Vite 5                   |
| Styling     | Tailwind CSS 3 (JIT)                |
| Animations  | Framer Motion 11                    |
| Routing     | React Router DOM v6                 |
| Fonts       | Google Fonts (Syne + DM Sans)       |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

---

## How to Swap the Resume PDF

1. Place your resume PDF at **`/public/resume.pdf`**
2. The "Download Resume" button in the Hero section will automatically serve it.

No code changes needed — it uses `<a href="/resume.pdf" download>`.

---

## How to Add a New Blog Post

1. Open **`src/data/blogPosts.js`**
2. Add a new object to the `blogPosts` array:

```js
{
  id:         4,                          // increment
  slug:       'my-new-post',             // URL: /blog/my-new-post
  title:      'My New Post Title',
  date:       '2025-01-15',              // YYYY-MM-DD
  readTime:   '5 min read',
  tags:       ['Tag1', 'Tag2'],
  excerpt:    'Short description shown on the blog listing page.',
  coverGradient: 'from-green-500 to-emerald-700',  // Tailwind gradient classes
  content: `
    <h2>Section Heading</h2>
    <p>Your paragraph content here...</p>
    <pre><code>// Code block example
const hello = "world"</code></pre>
  `,
}
```

3. Save the file — the blog listing and individual post routes update automatically.

---

## How to Update Testimonials / Recommendations

1. Open **`src/data/testimonials.js`**
2. Add or edit entries in the `testimonials` array:

```js
{
  id:       5,
  quote:    "The full recommendation text goes here...",
  name:     'Recommender Name',
  title:    'Their Job Title',
  company:  'Their Company',
  linkedin: 'https://www.linkedin.com/in/their-profile',
  initials: 'RN',             // 2-letter initials for avatar
  color:    'teal',           // teal | purple | pink | amber
}
```

Available colors: `teal`, `purple`, `pink`, `amber`

---

## How to Update Personal Info / Experience / Skills

All portfolio content lives in **`src/data/portfolio.js`**:

| Export          | What it controls                                  |
|-----------------|---------------------------------------------------|
| `personal`      | Name, titles, tagline, contact info, social links |
| `stats`         | Animated counter values in About section          |
| `experience`    | Work timeline entries                             |
| `skills`        | Skill categories and individual skill tags        |
| `projects`      | Project cards with descriptions and links         |
| `certifications`| Certification list                                |
| `education`     | Education entries                                 |

---

## Project Structure

```
src/
  components/
    Navbar.jsx          # Sticky navbar with mobile hamburger
    Hero.jsx            # Full-screen hero with particle canvas + typewriter
    About.jsx           # Bio + animated counters
    Experience.jsx      # Alternating timeline layout
    Skills.jsx          # Color-coded skill category cards
    Projects.jsx        # Responsive project cards
    Certifications.jsx  # Certs + Education side by side
    Testimonials.jsx    # Auto-sliding carousel (pause on hover)
    Contact.jsx         # Social links + validated contact form
    Footer.jsx          # Copyright + social + back-to-top
    Blog.jsx            # Blog listing page (/blog)
    BlogPost.jsx        # Individual post page (/blog/:slug)
    ThemeToggle.jsx     # Animated sun/moon toggle button
  context/
    ThemeContext.jsx     # Dark/light theme provider + localStorage
  data/
    portfolio.js        # All main portfolio content
    blogPosts.js        # Blog post data
    testimonials.js     # Testimonial / recommendation data
  App.jsx               # Route definitions
  main.jsx              # React root + BrowserRouter + ThemeProvider
  index.css             # Google Fonts + Tailwind directives + custom utilities
```

---

## Routes

| Path            | Component   | Description              |
|-----------------|-------------|--------------------------|
| `/`             | Portfolio   | Full single-page portfolio |
| `/blog`         | Blog        | Blog post listing         |
| `/blog/:slug`   | BlogPost    | Individual blog post      |

---

## Theme

- **Dark mode** is default (`localStorage` key: `yg-theme`)
- Toggle via the sun/moon icon in the navbar
- All colors defined in `tailwind.config.js` under `theme.extend.colors`
  - `accent.dark` = `#00f5d4` (electric teal)
  - `accent.light` = `#0052cc` (royal blue)
  - `primary.dark` = `#060d1f` (deep navy)
  - `primary.light` = `#f0f4ff` (soft lavender)
  - `surface.dark` = `#1a2540` (card dark)

---

## Deploy on Vercel — yogeshghogareai.in

This project is set up for **Vercel** (`vercel.json` handles the Vite build + React Router SPA).

### 1. Import the repo

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import **YogiG1996/YogeshGPortfolio**
3. Framework Preset: **Vite** (auto-detected)
4. Build Command: `npm run build` · Output: `dist`
5. Click **Deploy**

You’ll get a URL like `https://yogesh-g-portfolio.vercel.app`.

### 2. Add custom domain

1. Open the project in Vercel → **Settings → Domains**
2. Add `yogeshghogareai.in` and `www.yogeshghogareai.in`
3. Follow Vercel’s DNS instructions (shown in the UI)

Typical records:

| Type | Name | Value |
|------|------|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

(Use the exact values Vercel shows for your project if they differ.)

### 3. After DNS

Wait for DNS propagation, then enable HTTPS in Vercel (usually automatic).  
Every push to `main` will redeploy automatically.

### Local production build

```bash
npm run build
# Output in /dist
```
