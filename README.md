# Abdo Hamdy - Portfolio

Personal portfolio website for Abdo Hamdy (Abdelrahman Hamdi Roubi) - IT student and Frontend/Full-Stack developer. Built with plain HTML, CSS, and JavaScript - no build step, no dependencies.

## Project structure

```
index.html            Page markup
stylesheet.css         All styles
script.js              All interactivity (nav, scroll reveal, skill bars, 3D hero,
                       stats counters, contact form, scroll progress)
assets/
  images/              Profile photos, hero background, favicons
  images/certs-thumbs/ Certificate preview thumbnails
  certificates/        Certificate PDFs
  resume/              Downloadable CV
```

## Run locally

Open `index.html` directly in a browser, or serve it properly:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repo.
2. **Settings -> Pages -> Source -> Deploy from branch -> `main` / root**.
3. The site goes live at `https://<username>.github.io/<repo-name>/`.

## Contact form (EmailJS)

The form uses [EmailJS](https://www.emailjs.com) - free for up to 200 emails a month.

1. Sign up at emailjs.com.
2. **Email Services -> Add New Service** -> copy the **Service ID**.
3. **Email Templates -> Create New Template** with `{{name}}`, `{{email}}`, `{{message}}` variables -> copy the **Template ID**.
4. **Account -> General** -> copy your **Public Key**.
5. In `index.html`, replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` with the real values.

## Customizing

- **Colors**: the whole palette runs off one accent variable in `stylesheet.css` - search for `#6f34fe`.
- **Certificates**: add a PDF to `assets/certificates/`, then add a matching `<a class="cert-card">` entry in the Skills section.
- **Projects**: each project is one `.project-card` block - copy an existing one and edit the text/links.
- **3D hero**: node count, rotation speed, and colors are set near the top of `initHero3D` in `script.js`.
