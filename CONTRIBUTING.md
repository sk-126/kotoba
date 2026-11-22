# Contributing to Kotoba

Thank you for helping. The most useful help right now:

1. **Review Japanese content (most wanted).** Check N4 to N1 files (`src/js/21` to `24`) for wrong readings, unnatural sentences, questions with two correct answers, and wrong English. Open an issue titled `Content: N3 grammar, lesson 2` with the line and your fix. Native speakers and teachers are especially welcome.
2. **Add content.** More words, kanji, grammar, reading and listening items for N4 to N1. Aim for realistic JLPT-style questions with 4 options, exactly one correct, and a short explanation.
3. **Fix bugs and improve accessibility, speed and design.**
4. **Ideas:** stroke-order data, recorded native audio (with a clear licence), a Capacitor wrapper for Android and iOS, translations of the interface.

## Rules for content
- Write original questions only. Never paste from JLPT workbooks, textbooks, apps or past papers.
- Words and kanji lists come from your own knowledge; JLPT publishes no official lists, so levels are approximate.
- Put the correct option first. The app shuffles options.
- Format examples are in README.md.

## Before a pull request
```
python3 build.py && node --check dist/.check.js
```
Open the app, play one lesson of what you changed, and check the browser console is clean. Keep pull requests small. By contributing you agree your work is released under the MIT licence.
