# Nriwings AdSpark — Live Karne Ki Poori Guide

Yeh project ek "Google Ads AI Agent" hai. Ise live karne ke liye neeche
diye gaye 6 steps follow karein. Total ~15 minute lagega.

Is folder mein 4 cheezein hain:
- index.html      → aapka app (frontend)
- api/chat.js     → backend (API key chhupata hai)
- vercel.json     → setting file
- README.md       → yeh guide

========================================================
STEP 1 — GEMINI API KEY BANAO (free, no card)
========================================================
1. Browser mein kholein:  https://aistudio.google.com/apikey
2. Google account se login karein
3. "Create API key" button dabayein
4. Ek key milegi jaise:  AIzaSyXXXXXXXXXXXXXXXXXXXX
5. Use COPY karke kahin safe (Notepad) mein paste kar lein

   👉 Yeh free hai. Card nahi maangega. Din ke 1500 sawaal tak free.

========================================================
STEP 2 — GITHUB PAR PROJECT DAALO
========================================================
(Vercel ko project GitHub se chahiye — yeh bhi free hai)

1. https://github.com  par account banayein (free)
2. Upar right "+" → "New repository"
3. Naam dein: adspark  → "Create repository"
4. "uploading an existing file" link par click karein
5. Is folder ki SAARI files (index.html, api folder, vercel.json)
   drag-drop karke daal dein
6. "Commit changes" dabayein

========================================================
STEP 3 — VERCEL ACCOUNT BANAO (free)
========================================================
1. https://vercel.com  kholein
2. "Sign Up" → "Continue with GitHub" (ek click)

========================================================
STEP 4 — PROJECT IMPORT KARO
========================================================
1. Vercel dashboard par "Add New..." → "Project"
2. Apni GitHub "adspark" repository ke aage "Import" dabayein
3. Abhi "Deploy" mat dabana — pehle STEP 5 karein!

========================================================
STEP 5 — API KEY DAALO (sabse zaroori)
========================================================
Import screen par hi "Environment Variables" section milega:
1. Name (key) field mein likhein:   GEMINI_API_KEY
2. Value field mein:  apni Gemini key paste karein (STEP 1 wali)
3. "Add" dabayein

========================================================
STEP 6 — DEPLOY!
========================================================
1. Ab "Deploy" button dabayein
2. 1-2 minute wait karein
3. "Congratulations" ke saath ek link milega jaise:
   https://adspark.vercel.app
4. Link kholo — aapka AI agent LIVE hai! 🎉

   Chat tab mein sawaal poochein — ab asli AI jawab dega.

========================================================
AGAR AI JAWAB NA DE TO:
========================================================
- Vercel → project → Settings → Environment Variables
  mein check karein GEMINI_API_KEY sahi daali hai
- Key daalne ke baad "Redeploy" karna zaroori hai
  (Deployments → ... → Redeploy)

========================================================
SITE KA NAAM BADALNE KE LIYE:
========================================================
Vercel → project → Settings → Domains mein naam change kar sakte hain,
jaise: nriwings-adspark.vercel.app
