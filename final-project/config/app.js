(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1641612998177
//APP_KEY=17wCqRD6IOfjAamTD9pwUw_pmCn8ReZEi2mAiMY31tRdJEm5uJgE_UO4U77mo859oGxzfFprmJD8i84MNs9r2A
//UNIX=1641664695423
//APP_KEY=HK1yKsYA0H3t1qB0U-2jESS2UfAwiTyNIWyWMr1_svKwOYMFd_4xQQE8vtc0Ss0BZhBkl_QKrXxRVligmyvc0g