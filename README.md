# Z&R — The Art Galleries

אתר סטטי לגלריית האמנות **Zielinski & Rozen** — שלוש גלריות בתל אביב.
האתר נבנה מתוך עיצוב פיגמה, ממוטב ל-GitHub Pages.

## מבנה

```
.
├── index.html              # דף הבית
├── css/main.css            # כל הסגנונות
├── js/main.js              # תפריט נייד + lazy load
├── assets/
│   ├── icons/logo.svg      # לוגו
│   └── img/                # כל התמונות (מיוצאות מפיגמה)
├── pages/
│   ├── about/              # ביוגרפיה ארז זילינסקי-רוזן
│   ├── artists/            # רשימת אמנים + דפי אמן בודד
│   ├── contact/            # יצירת קשר
│   ├── exhibitions/        # תערוכות (loneliness, how-many)
│   ├── galleries/          # שלוש הגלריות
│   ├── open-call/          # קולות קוראים (peeler, how-many)
│   ├── press/              # כתבות + אירועים
│   └── works/              # יצירות
├── .nojekyll               # מנטרל את Jekyll ב-GitHub Pages
└── README.md
```

## הפעלה מקומית

```bash
# הכי פשוט — Python:
python3 -m http.server 8000

# או:
npx serve .
```
פתח <http://localhost:8000> בדפדפן.

## פרסום ל-GitHub Pages

1. צור repo חדש בגיטהאב (לדוגמה `art-korin`).
2. בתיקיית הפרויקט הריצי:
   ```bash
   git init
   git add .
   git commit -m "initial site"
   git branch -M main
   git remote add origin https://github.com/USERNAME/art-korin.git
   git push -u origin main
   ```
3. ב-GitHub: **Settings → Pages → Source: Deploy from a branch → main / root → Save**.
4. תוך דקה האתר חי על `https://USERNAME.github.io/art-korin/`.

### דומיין משלך
- בתיקייה הראשית, צור קובץ `CNAME` עם שורה אחת — שם הדומיין (לדוגמה `gallery.zielinski-rozen.com`).
- אצל ספק הדומיין, צור CNAME record שמפנה ל-`USERNAME.github.io`.

## הערות עיצוב

- האתר RTL בעברית, עם פונטים: **Frank Ruhl Libre** (חלופה ל-Fb Ezmel) ו-**Cormorant Garamond** (חלופה ל-Copperplate).
- כדי להשתמש בפונטים המדויקים מהפיגמה תצטרכי רישיון מסחרי ל-**Copperplate** ו-**Fb Ezmel** (החלף ב-`css/main.css` במשתני `--font-en` ו-`--font-he`).
- טופס הניוזלטר משתמש ב-`alert` כ-placeholder. לחיבור אמיתי, החלפי את ה-`onsubmit` ל-`action="https://formspree.io/f/<id>"` או Mailchimp.
- כל קישור Instagram/Facebook בכותרת התחתונה צריך להיות מעודכן עם הכינוי האמיתי שלכם.
- האתר משתמש ב-`.nojekyll` כדי שגיטהאב לא יסנן קבצים בתיקיות שמתחילות ב-underscore.

## Roadmap (אופציונלי)

- [ ] תפריט המבורגר נייד (כבר ממומש ב-`js/main.js`)
- [ ] חיבור טופס יצירת קשר אמיתי (Formspree/Netlify Forms)
- [ ] הוספת דפי אמן נוספים (כרגע רק `alon`)
- [ ] קרוסלת תמונות בעמודי תערוכה (חלופה לרשת הסטטית)
- [ ] שליפת תמונות אמיתיות לכל אמן בשבילון Instagram
- [ ] הוספת sitemap.xml ו-robots.txt לקידום SEO
