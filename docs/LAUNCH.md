# Launch guide: GitHub, LinkedIn, Play Store

## 1. GitHub (free, 15 minutes)
1. Make an account at github.com. Click New repository. Name it `kotoba`, set Public, do not add a README (you already have one).
2. On your computer, unzip the project. In a terminal inside the folder run:
   ```
   git init
   git add .
   git commit -m "Kotoba: first public version"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/kotoba.git
   git push -u origin main
   ```
   No Git? On the repo page click "uploading an existing file" and drag the unzipped files in.
3. Settings, Pages, Source = "Deploy from a branch", Branch = main, folder = /docs. After a minute your app is live at `https://YOUR-USERNAME.github.io/kotoba/`.
4. Repo page, gear icon next to About: add the description and topics (jlpt, japanese, language-learning, education, pwa, javascript, open-source).
5. Issues tab: add a few "good first issue" tickets (review N4 grammar, add N3 words).
6. Put docs/screenshots/1-home.png near the top of README.md: `![Home](docs/screenshots/1-home.png)`.

After any change run `python3 build.py`, commit and push. Bump `CACHE` in docs/sw.js so phones refresh.

## 2. LinkedIn
- Profile, Add section, Projects: name Kotoba, link to the live page, and the repo link. Description: "Free, open-source JLPT study app (N5 to N1) with kana handwriting practice, spaced repetition, listening and mock exams. Built with JavaScript, no backend."
- Featured section: add the live app and the repo.
- Post once with 2 or 3 screenshots, say it is an early version and ask Japanese speakers for review. Do not claim user numbers or official JLPT approval.

## 3. Play Store
The web app can be wrapped as an Android app without rewriting it. Two routes:

**A. PWABuilder (easiest).** 
1. Finish steps 1 to 3 so the app is live on an https address.
2. Go to pwabuilder.com, paste your URL, and click Package for stores, then Android. It makes an app bundle (.aab) and a signing key. Keep the key file and passwords safe: you need them for every update.
3. Host the `assetlinks.json` file PWABuilder gives you at `/.well-known/assetlinks.json` on your site. GitHub Pages ignores folders that start with a dot unless you add an empty file named `.nojekyll` in docs/, so add `.nojekyll`.

**B. Capacitor.** More control and plugin access (for example, native text-to-speech). It needs Node and Android Studio on your computer.

Then:
1. Create a Google Play Console account at play.google.com/console. There is a one-time registration fee (about US$25 at the time of writing; check the current fee). Personal accounts created after November 2023 must run a closed test with at least 12 testers for 14 days before they can publish to production. Check the current rule in the console before you plan dates.
2. Create the app: name Kotoba JLPT, free, category Education.
3. Upload the .aab to a closed testing track and invite testers.
4. Fill in the store listing: short description (80 characters), full description, the 512x512 icon (docs/icon-512.png), the feature graphic (store/feature-graphic-1024x500.png) and at least 2 phone screenshots (docs/screenshots/).
5. Complete the required forms: privacy policy URL (see below), Data safety (the app stores progress only in the phone and sends nothing to a server, though it loads Google Fonts and kanjiapi.dev), content rating, target audience (13+ or all ages, do not target children unless you read the Families policy).
6. Wait for review, then promote to production.

### Privacy policy (host this text on a page, such as docs/privacy.html)
"Kotoba does not collect, share or sell personal data. Your progress and settings are stored only on your device. The app loads fonts from Google Fonts and kanji details from kanjiapi.dev, which may receive your IP address as part of normal web requests. Contact: your email."

### Be honest in the listing
Say it is an independent study app, not affiliated with the JLPT or Japan Foundation. Do not use "official JLPT" in the name or icon.
