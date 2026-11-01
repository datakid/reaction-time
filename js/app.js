'use strict';
const $=s=>document.querySelector(s),A=$('#app');
const AR={
"Cue":"المؤشر","Key":"المفتاح","Choice":"الاختيار","Go/no-go":"انطلاق / امتناع","Buffer":"الإدخال المسبق",
"Press when the field changes.":"اضغط عند تغيّر المساحة.","Press the key shown.":"اضغط المفتاح الظاهر.","Press the number of the lit area.":"اضغط رقم المنطقة المضاءة.","Press when the field fills. Hold when it is an outline.":"اضغط عندما تمتلئ المساحة، وامتنع إذا ظهر إطار فقط.","Press in the last segment. It fires at release.":"اضغط في الجزء الأخير من القوس، ويُنفَّذ عند الإطلاق.","Press the marked key when the field changes.":"اضغط المفتاح المحدد عند تغيّر المساحة.",
"Watch.":"شاهد.","Demonstration":"عرض توضيحي","Reference":"المرجع","History":"السجل","Settings":"الإعدادات","About":"حول","Back":"رجوع","Continue":"متابعة",
"Visual":"بصري","Sound":"صوتي","Both":"الاثنان","Signal":"الإشارة","Type":"النوع","Dynamic":"متغيّر","Fixed":"ثابت","Standard":"قياسي","Chain":"السلسلة","Chain {a}":"سلسلة {a}","Areas":"المناطق","{a} areas":"{a} مناطق","Keys":"المفاتيح","{a} keys":"{a} مفاتيح","Strength":"الشدة","Full":"كاملة","Soft":"ناعمة","Faint":"خافتة","Space":"مسافة",
"Theme":"المظهر","Auto":"تلقائي","Dark":"داكن","Light":"فاتح","Language":"اللغة","Trials per block":"محاولات في الجولة","Volume":"مستوى الصوت","Low":"منخفض","Medium":"متوسط","High":"مرتفع",
"Keyboard":"لوحة المفاتيح","Mouse":"الفأرة","Touch":"اللمس",
"Sound cues":"إشارات صوتية","Adds a sound signal option to Cue, Choice, Buffer and fixed Key.":"يضيف خيار إشارة صوتية إلى المؤشر والاختيار والإدخال المسبق والمفتاح الثابت.","Reduced motion":"تقليل الحركة","Removes fades and pulses.":"يزيل التلاشي والنبضات.","Practice only":"تدريب فقط","Numbers are hidden and nothing is recorded.":"تُخفى الأرقام ولا يُسجَّل شيء.","Hold difficulty":"تثبيت الصعوبة","The response window stops adapting.":"تتوقف نافذة الاستجابة عن التكيّف.","Haptics":"اهتزاز","A short vibration on each press.":"اهتزاز قصير عند كل ضغطة.",
"Data":"البيانات","{a} sessions stored on this device.":"{a} جلسة محفوظة على هذا الجهاز.","Data cannot be saved in this browser.":"لا يمكن حفظ البيانات في هذا المتصفح.","Copy":"نسخ","Load":"تحميل","Save file":"حفظ ملف","Open file":"فتح ملف","Copy CSV":"نسخ CSV","Reset difficulty":"إعادة ضبط الصعوبة","Erase":"مسح","Confirm":"تأكيد","Copied":"تم النسخ","Unavailable":"غير متاح","Unreadable":"غير مقروء","Done":"تم","Press a key":"اضغط مفتاحًا","Display":"الشاشة","jitter":"التذبذب","Audio":"الصوت",
"No response":"بلا استجابة","Other area":"منطقة أخرى","Outline":"إطار",
"Median":"الوسيط","Median offset":"وسيط الإزاحة","Middle half":"النصف الأوسط","Spread":"التشتت","Fastest 10%":"أسرع 10%","Slowest 10%":"أبطأ 10%","Valid trials":"محاولات صالحة","Anticipations":"استباقات","Early presses":"ضغطات مبكرة","Wrong responses":"استجابات خاطئة","Outline presses":"ضغطات على الإطار","First → second half":"النصف الأول ← الثاني","Input":"الإدخال","Setting":"الإعداد","In window":"داخل النافذة","Early":"مبكر","Late":"متأخر","Mean distance":"متوسط المسافة",
"Previous {a}: {b} · difference {c}":"السابقة {a}: {b} · الفرق {c}","Distribution":"التوزيع","Bars: responses by time. Line: median. Shaded: reference middle range.":"الأعمدة: الاستجابات حسب الزمن. الخط: الوسيط. المظلل: النطاق الأوسط المرجعي.","Bars: responses by time. Line: median.":"الأعمدة: الاستجابات حسب الزمن. الخط: الوسيط.",
"Simple, visual":"بسيط، بصري","Simple, sound":"بسيط، صوتي","Choice of 2":"اختيار من 2","Choice of 3":"اختيار من 3","Choice of 4":"اختيار من 4","Key, fixed":"مفتاح ثابت","Key, 2 keys":"مفتاحان","Key, 4 keys":"4 مفاتيح","Key, 8 keys":"8 مفاتيح","Latest":"الأحدث",
"Approximate adult values from published simple and choice tasks. Key and Go/no-go rows are extended estimates. The dot is your latest median. Every device adds its own delay.":"قيم تقريبية للبالغين من دراسات منشورة للمهام البسيطة والاختيارية. صفوف المفتاح وانطلاق / امتناع تقديرات ممتدة. النقطة هي أحدث وسيط لك. كل جهاز يضيف تأخيره الخاص.",
"Morning":"الصباح","Afternoon":"بعد الظهر","Evening":"المساء","Night":"الليل","Time of day":"وقت اليوم","Period":"الفترة",
"Session medians over time":"وسيط الجلسات عبر الزمن","Line: session median. Band: middle half. Dashed: median of the last 5 sessions.":"الخط: وسيط الجلسة. الشريط: النصف الأوسط. المتقطع: وسيط آخر 5 جلسات.","Line: session median. Band: middle half.":"الخط: وسيط الجلسة. الشريط: النصف الأوسط.",
"Observations":"ملاحظات","Last 5 sessions: {a}. The 5 before: {b}.":"آخر 5 جلسات: {a}. الخمس السابقة: {b}.","Middle half width, last 5 sessions: {a}. Earlier sessions: {b}.":"عرض النصف الأوسط في آخر 5 جلسات: {a}. الجلسات السابقة: {b}.","Lowest median by time of day: {p}, {a} across {n} sessions.":"أدنى وسيط حسب وقت اليوم: {p}، {a} عبر {n} جلسات.","Closest median by time of day: {p}, {a} across {n} sessions.":"أقرب وسيط حسب وقت اليوم: {p}، {a} عبر {n} جلسات.","Second half of a block compared with the first: {a} on average across {n} sessions.":"النصف الثاني من الجولة مقارنة بالأول: {a} في المتوسط عبر {n} جلسات.","Anticipations: {a} of responses.":"الاستباقات: {a} من الاستجابات.","Early presses: {a} per trial.":"الضغطات المبكرة: {a} لكل محاولة.","Wrong responses: {a} of trials.":"الاستجابات الخاطئة: {a} من المحاولات.","Outline presses: {a} of outline trials.":"الضغط على الإطار: {a} من محاولات الإطار.","In window: {a} of presses.":"داخل النافذة: {a} من الضغطات.","By input, same setting:":"حسب الإدخال، بالإعداد نفسه:",
"Numbers are hidden while Practice only is on.":"الأرقام مخفية أثناء تفعيل التدريب فقط.","No sessions yet.":"لا توجد جلسات بعد.","Median, all sessions":"الوسيط، كل الجلسات","Median offset, all sessions":"وسيط الإزاحة، كل الجلسات","Sessions":"الجلسات","Trials":"المحاولات","Last 7 days":"آخر 7 أيام","Previous 7 days":"الأيام السبعة السابقة","Lowest session":"أدنى جلسة","Closest session":"أقرب جلسة","Typical spread":"التشتت المعتاد","Trend per 10 sessions":"الاتجاه لكل 10 جلسات","Recent sessions":"الجلسات الأخيرة","All exercises":"كل التمارين","Exercise":"التمرين","Last 10":"آخر 10",
"Lull is a practice tool for reaction time and input timing. It is not a test.":"Lull أداة تدريب على زمن الاستجابة وتوقيت الإدخال. ليست اختبارًا.","Every exercise starts with a short demonstration. Difficulty adapts quietly in the background by shortening or lengthening how long the cue stays visible.":"يبدأ كل تمرين بعرض توضيحي قصير. تتكيّف الصعوبة بهدوء في الخلفية بتقصير أو إطالة مدة ظهور المؤشر.","Numbers show where a response landed relative to the cue or release, in milliseconds.":"تُظهر الأرقام موضع الاستجابة بالنسبة إلى المؤشر أو لحظة الإطلاق، بالملّي ثانية.","Everything stays on this device. Nothing is sent anywhere.":"كل شيء يبقى على هذا الجهاز. لا يُرسل شيء إلى أي مكان.","Lull is not a medical or diagnostic tool.":"Lull ليست أداة طبية أو تشخيصية.",
"Reading the numbers":"قراءة الأرقام","The middle response of a block. Single very fast or slow trials barely move it.":"الاستجابة الوسطى في الجولة. المحاولات المنفردة السريعة جدًا أو البطيئة جدًا بالكاد تحرّكه.","The range holding the central 50% of valid responses. Its width is the spread. A narrower spread means more even timing.":"النطاق الذي يضم 50% الوسطى من الاستجابات الصالحة. عرضه هو التشتت. التشتت الأضيق يعني توقيتًا أكثر انتظامًا.","Fastest and slowest 10%":"أسرع وأبطأ 10%","The edges of the distribution, without the extremes.":"أطراف التوزيع، دون القيم المتطرفة.","Responses under 100 ms. Too fast to follow the cue, so they are left out of the median.":"استجابات أقل من 100 ملّي ثانية. أسرع من أن تتبع المؤشر، لذا تُستبعد من الوسيط.","Presses made before the cue appeared.":"ضغطات قبل ظهور المؤشر.","Cues with no press within 3 seconds.":"مؤشرات لم يُضغط بعدها خلال 3 ثوانٍ.","Change in median between the two halves of a block. Shows warm-up or fatigue within a block.":"تغيّر الوسيط بين نصفي الجولة. يُظهر الإحماء أو التعب داخل الجولة.","Offset":"الإزاحة","Buffer only. Where the input landed relative to release. Minus is before, plus is after.":"للإدخال المسبق فقط. موضع الإدخال بالنسبة إلى لحظة الإطلاق. السالب قبلها والموجب بعدها.","Device delay":"تأخير الجهاز","Display refresh, input hardware and audio output each add delay. Compare sessions on the same device and input.":"تحديث الشاشة وعتاد الإدخال ومخرج الصوت كلها تضيف تأخيرًا. قارن الجلسات على الجهاز والإدخال نفسيهما.",
"Too soon":"مبكر جدًا","Anticipation":"استباق","Several presses":"ضغطات متعددة","Too soon. Wait for the change.":"مبكر جدًا. انتظر تغيّر المساحة.","Too fast to follow the cue. Wait for it.":"أسرع من أن تتبع المؤشر. انتظره.","Several presses. Press once.":"ضغطات متعددة. اضغط مرة واحدة.","Hands off. It restarts when you stop pressing.":"ارفع يدك. يُستأنف عندما تتوقف عن الضغط.","This block was not recorded.":"لم تُسجَّل هذه الجولة.","Too many presses came before the change. Wait for the change, then press once.":"جاءت ضغطات كثيرة قبل التغيّر. انتظر التغيّر ثم اضغط مرة واحدة.","Presses made before the cue. The trial restarts after a quiet moment and is not counted.":"ضغطات قبل ظهور المؤشر. تُعاد المحاولة بعد لحظة هدوء ولا تُحتسب.","Responses under 100 ms. Too fast to follow the cue, so the trial is repeated and left out of the median.":"استجابات أقل من 100 ملّي ثانية. أسرع من أن تتبع المؤشر، لذا تُعاد المحاولة وتُستبعد من الوسيط.","Pressing early or repeatedly never brings the cue sooner. Each early press restarts the wait, and a block with too many is not recorded.":"الضغط المبكر أو المتكرر لا يُظهر المؤشر أسرع. كل ضغطة مبكرة تعيد الانتظار، والجولة التي تكثر فيها لا تُسجَّل.",
"Source for simple reaction time: Woods et al., 2015, Frontiers in Human Neuroscience, 9:131. Choice, key and go/no-go ranges are extended estimates.":"مصدر زمن الاستجابة البسيط: Woods وآخرون، 2015، Frontiers in Human Neuroscience، 9:131. نطاقات الاختيار والمفتاح والانطلاق / الامتناع تقديرات ممتدة.","Version":"الإصدار"
};
const X=['c','k','h','g','b'];
const N={c:'Cue',k:'Key',h:'Choice',g:'Go/no-go',b:'Buffer'};
const E={c:'Press when the field changes.',k:'Press the key shown.',h:'Press the number of the lit area.',g:'Press when the field fills. Hold when it is an outline.',b:'Press in the last segment. It fires at release.'};
const IN={k:'Keyboard',m:'Mouse',t:'Touch'},SG={v:'Visual',a:'Sound',x:'Both'};
const DS={snd:0,prac:0,rm:0,frz:0,hp:0,n:2,kn:4,km:'d',kc:' ',cl:1,cs:1,bl:30,th:'auto',lg:'en',vol:2};
const KP=n=>({2:'fj',4:'dfjk',8:'asdfjkl;'})[n]||'dfjk';
const RF={cv:['Simple, visual',[205,230,255,290]],ca:['Simple, sound',[170,195,220,250]],h2:['Choice of 2',[290,320,350,395]],h3:['Choice of 3',[335,375,415,470]],h4:['Choice of 4',[380,425,470,530]],kf:['Key, fixed',[205,230,255,290]],k2:['Key, 2 keys',[330,365,400,450]],k4:['Key, 4 keys',[400,445,490,560]],k8:['Key, 8 keys',[470,520,575,650]],g:['Go/no-go',[250,280,310,350]]};
const nn=v=>Number.isFinite(v)?v:null;

const clean=j=>{const o={v:3,p:{},h:[],s:{...DS}};if(!j||typeof j!='object')return o;
const s=j.s&&typeof j.s=='object'?j.s:{},num=(v,a,b,d)=>Number.isFinite(+v)&&+v>=a&&+v<=b?Math.round(+v):d,en=(v,l,d)=>l.includes(v)?v:d,bo=v=>v?1:0;
o.s={snd:bo(s.snd),prac:bo(s.prac),rm:bo(s.rm),frz:bo(s.frz),hp:bo(s.hp),n:num(s.n,2,4,2),kn:en(+s.kn,[2,4,8],4),km:en(s.km,['d','f'],'d'),kc:typeof s.kc=='string'&&(s.kc.length==1||s.kc=='enter')?s.kc.toLowerCase():' ',cl:num(s.cl,1,3,1),cs:num(s.cs,1,3,1),bl:en(+s.bl,[15,30,60],30),th:en(s.th,['auto','dark','light'],'auto'),lg:en(s.lg,['en','ar'],'en'),vol:num(s.vol,1,3,2)};
if(s.mo&&typeof s.mo=='object')for(const k of ['c','h','b','k'])if(['v','a','x'].includes(s.mo[k]))(o.s.mo=o.s.mo||{})[k]=s.mo[k];
if(j.p&&typeof j.p=='object')for(const [k,v] of Object.entries(j.p))if(/^[a-z0-9]{1,8}$/.test(k)&&v&&Number.isFinite(v.w)&&Number.isFinite(v.r)&&Number.isFinite(v.s))o.p[k]={w:Math.min(1500,Math.max(2,v.w)),r:Math.max(0,v.r|0),s:Math.min(.5,Math.max(.04,v.s))};
if(Array.isArray(j.h))o.h=j.h.filter(r=>r&&X.includes(r.e)&&['k','m','t'].includes(r.m)&&[r.md,r.a,r.b,r.n,r.t].every(Number.isFinite)&&r.t>0&&r.t<4e12).slice(-400).map(r=>({t:r.t,e:r.e,m:r.m,md:r.md,a:r.a,b:r.b,n:r.n,v:['v','a','x'].includes(r.v)?r.v:'v',q:Number.isFinite(r.q)?r.q:0,p1:nn(r.p1),p9:nn(r.p9),h1:nn(r.h1),h2:nn(r.h2),an:r.an|0,ms:r.ms|0,er:r.er|0,fs:r.fs|0,ng:r.ng|0,iw:r.iw|0,tn:r.tn|0,o:Array.isArray(r.o)?r.o.filter(Number.isFinite).slice(0,120).map(Math.round):[]}));
if(j.dev&&typeof j.dev=='object')o.dev={f:+Math.min(100,Math.max(0,+j.dev.f||0)),j:+Math.min(100,Math.max(0,+j.dev.j||0)),a:num(j.dev.a,0,2000,0)};return o};

let S=clean(null),M=matchMedia('(pointer:coarse)').matches?'t':'k',F=1000/60,T={},AC=null,er=0;
try{const raw=localStorage.getItem('lull1');if(raw){try{S=clean(JSON.parse(raw))}catch(e){localStorage.setItem('lull1_bak_'+Date.now(),raw)}}}catch(e){}
const SOK=(()=>{try{localStorage.setItem('lull_t','1');localStorage.removeItem('lull_t');return 1}catch(e){return 0}})();
const save=f=>{if(S.s.prac&&!f)return;try{localStorage.setItem('lull1',JSON.stringify(S))}catch(e){}};

const tr=t=>S.s.lg=='ar'&&AR[t]||t;
const tf=(t,o)=>tr(t).replace(/\{(\w)\}/g,(m,k)=>o[k]);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const R=Math.round,LT=s=>'\u2066'+s+'\u2069';
const srt=a=>[...a].sort((x,y)=>x-y);
const md=a=>{if(!a.length)return 0;const s=srt(a),m=s.length>>1;return s.length%2?s[m]:(s[m-1]+s[m])/2};
const qt=(a,f)=>{if(!a.length)return 0;const s=srt(a),i=f*(s.length-1),l=Math.floor(i),h=Math.ceil(i);return s[l]+(s[h]-s[l])*(i-l)};
const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
const fm=v=>LT((R(v)<0?'−':'+')+Math.abs(R(v))+' ms');
const fa=v=>LT(Math.abs(R(v))+' ms');
const fd=v=>LT((R(v)==0?'±':v<0?'−':'+')+Math.abs(R(v))+' ms');
const fv=(e,v)=>e=='b'?fm(v):fa(v);
const pc=(a,b)=>b?LT(R(a/b*100)+'%'):'—';
const fr=(a,b)=>LT(a+' / '+b);
const dt=t=>new Date(t).toLocaleString(S.s.lg=='ar'?'ar-u-nu-latn':'en',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
const dd=t=>new Date(t).toLocaleDateString(S.s.lg=='ar'?'ar-u-nu-latn':'en',{month:'short',day:'numeric'});

const LM=matchMedia('(prefers-color-scheme: light)');
const eth=()=>S.s.th=='auto'?(LM.matches?'light':'dark'):S.s.th;
const V=d=>`<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const SUN=V('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/>'),MOON=V('<path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2z"/>');
const ti=()=>eth()=='dark'?SUN:MOON;
const BK='<svg class="bk" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',CH='<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
const GL={c:V('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.8" style="fill:var(--c);stroke:none"/>'),k:V('<rect x="4" y="5" width="16" height="14" rx="4"/><path d="M9 15.5h6"/><circle cx="12" cy="10.5" r="1.6" style="fill:var(--c);stroke:none"/>'),h:V('<circle cx="7.5" cy="7.5" r="3"/><circle cx="16.5" cy="7.5" r="3" style="fill:var(--c);stroke:none"/><circle cx="7.5" cy="16.5" r="3"/><circle cx="16.5" cy="16.5" r="3"/>'),g:V('<circle cx="7.5" cy="12" r="4.5" style="fill:var(--c);stroke:none"/><circle cx="16.5" cy="12" r="4.5"/>'),b:V('<path d="M12 3.5A8.5 8.5 0 1 1 3.5 12"/><path d="M6 18A8.5 8.5 0 0 1 3.5 12" style="stroke:var(--p);stroke-width:2.6"/><circle cx="7.6" cy="7.6" r="2.2" style="fill:var(--c);stroke:none"/>')};
const DK={ref:V('<rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 8v3M11 8v4M15 8v3M19 8v2"/>'),hist:V('<path d="M4 19V5M4 19h16M8 15l3-4 3 2 4-6"/>'),set:V('<path d="M4 8h9M17 8h3M4 16h3M11 16h9"/><circle cx="15" cy="8" r="2"/><circle cx="9" cy="16" r="2"/>'),ab:V('<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>')};

const applyUI=()=>{const r=document.documentElement,th=eth();r.lang=S.s.lg;r.dir=S.s.lg=='ar'?'rtl':'ltr';r.dataset.theme=th;const tc=$('#tc');if(tc)tc.content=th=='light'?'#E9EBE0':'#151813';const fi=$('#fi');if(fi)fi.href='icon-'+th+'.svg';document.querySelectorAll('[data-a=tt]').forEach(b=>{b.innerHTML=ti();b.setAttribute('aria-label',tr(th=='dark'?'Light':'Dark'))});r.classList.toggle('rm',!!S.s.rm)};
LM.addEventListener('change',()=>{if(S.s.th=='auto')applyUI()});

(()=>{let n=0,l=0;const d=[],f=t=>{if(l)d.push(t-l);l=t;if(++n<130)requestAnimationFrame(f);else{const v=d.slice(5).filter(x=>x>3&&x<80);if(v.length>40){const m=md(v),g=v.filter(x=>x>m*.5&&x<m*1.6),sd=Math.sqrt(g.reduce((a,x)=>a+(x-m)*(x-m),0)/g.length);F=Math.min(Math.max(m,4),34);S.dev={...S.dev,f:+m.toFixed(1),j:+sd.toFixed(1)}}}};requestAnimationFrame(f)})();

const gm=k=>(S.s.mo||{})[k]||'v';
const hasMode=k=>S.s.snd&&(k=='c'||k=='h'||k=='b'||(k=='k'&&S.s.km=='f'));
const MD=()=>hasMode(T.k)?gm(T.k):'v';
const QV=k=>k=='h'?S.s.n:k=='k'?(S.s.km=='f'?0:S.s.kn):k=='b'?S.s.cl:k=='c'?S.s.cs:0;
const ck=r=>r.e+(r.e=='c'?(r.q||1):r.e=='b'?(r.q||1):r.q)+(r.v||'v');
const cfl=r=>{const e=r.e,q=r.q;let t=e=='c'?tr(['Full','Soft','Faint'][(q||1)-1]):e=='h'?tf('{a} areas',{a:q}):e=='k'?(q?tf('{a} keys',{a:q}):tr('Fixed')):e=='b'?tf('Chain {a}',{a:q||1}):tr('Standard');if(r.v&&r.v!='v')t+=' · '+tr(SG[r.v]);return t};
const cf=(e,v,q)=>e=='c'?(v=='a'?'ca':'cv'):e=='h'?'h'+q:e=='k'?(q?'k'+q:v=='a'?'ca':'kf'):e=='g'?'g':'';
const kl=c=>c==' '?tr('Space'):c=='enter'?'Enter':esc(c.toUpperCase());
const KPL=()=>S.s.km=='f'?[S.s.kc]:[...KP(S.s.kn)];
const inst=()=>T.k=='k'&&S.s.km=='f'?'Press the marked key when the field changes.':E[T.k];
const P=e=>{const id=(e=='h'?'h'+S.s.n:e=='k'?(S.s.km=='f'?'kf':'k'+S.s.kn):e=='b'&&S.s.cl>1?'b'+S.s.cl:e=='c'&&S.s.cs>1?'c'+S.s.cs:e)+(hasMode(e)&&gm(e)=='a'?'a':'')+M;return S.p[id]||(S.p[id]={w:e=='b'?280:900,r:0,s:.2})};
const qz=x=>Math.max(2*F,Math.round(x/F)*F);
const later=(f,ms)=>{const i=setTimeout(f,ms);(T.q=T.q||[]).push(i)};
const clr=()=>{(T.q||[]).forEach(clearTimeout);T.q=[];clearTimeout(T.qt);cancelAnimationFrame(T.f)};
function stop(){clr();T.live=0;T.hold=0}
const say=t=>{const m=$('#ms');if(m)m.textContent=tr(t)};
const ac=()=>{if(!AC){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;AC=new C();S.dev={...S.dev,a:Math.round(((AC.baseLatency||0)+(AC.outputLatency||0))*1000)}}if(AC.state=='suspended')AC.resume();return AC};
function tone(z,n){const c=ac();if(!c)return performance.now();const o=c.createOscillator(),g=c.createGain(),at=c.currentTime+.03;o.frequency.value=n>1?360+z*140:520;g.gain.setValueAtTime(0,at);g.gain.linearRampToValueAtTime([.04,.12,.3][S.s.vol-1],at+.006);g.gain.linearRampToValueAtTime(0,at+.2);o.connect(g);let out=g;if(n>1&&c.createStereoPanner){const pn=c.createStereoPanner();pn.pan.value=z/(n-1)*2-1;g.connect(pn);out=pn}out.connect(c.destination);o.start(at);o.stop(at+.25);const ot=c.getOutputTimestamp?c.getOutputTimestamp():0;const r=ot&&ot.performanceTime?ot.performanceTime+(at-ot.contextTime)*1000:0;return r&&Math.abs(r-performance.now())<300?r:performance.now()+30}

const themeBtn=()=>`<button class="ic" data-a="tt" aria-label="${tr(eth()=='dark'?'Light':'Dark')}">${ti()}</button>`;
const topbar=t=>`<div class="top"><button data-a="back">${BK}${tr('Back')}</button><span class="hd" role="heading" aria-level="1">${tr(t)}</span>${themeBtn()}</div>`;
const seg=(a,v,l,ex='')=>`<div class="seg">${l.map(([x,t,more])=>`<button data-a="${a}" data-k="${x}"${more||ex} aria-pressed="${v==x}">${t}</button>`).join('')}</div>`;
const tabs=(a,v,l,lab)=>`<div class="tabs" role="group" aria-label="${tr(lab)}"><span>${tr(lab)}</span>${seg(a,v,l.map(([x,t])=>[x,tr(String(t))]))}</div>`;
const tile=(l,v)=>`<div class="tl"><span>${tr(l)}</span><b>${v}</b></div>`;
const last=k=>{for(let i=S.h.length-1;i>=0;i--)if(S.h[i].e==k&&S.h[i].m==M)return S.h[i];for(let i=S.h.length-1;i>=0;i--)if(S.h[i].e==k)return S.h[i]};
new MutationObserver(()=>{const e=$('h1,.hd');if(e){e.tabIndex=-1;e.focus({preventScroll:true})}}).observe(A,{childList:true});

function home(){stop();T={};A.innerHTML=`<div class="wrap"><div class="hdr"><svg class="lg" aria-hidden="true"><use href="#m"/></svg><h1>Lull</h1>${themeBtn()}</div>${X.map(k=>{const l=last(k);return`<button class="item" data-a="go" data-k="${k}"><i class="gl">${GL[k]}</i><span class="tx"><b>${tr(N[k])}</b><span>${tr(E[k])}</span></span>${l&&!S.s.prac?`<span class="lv">${fv(k,l.md)}</span>`:''}${CH}</button>`}).join('')}<div class="sp"></div><nav class="dock">${[['ref','Reference'],['hist','History'],['set','Settings'],['ab','About']].map(([a,t])=>`<button data-a="${a}">${DK[a]}${tr(t)}</button>`).join('')}</nav></div>`}

const ctl=k=>{const s=S.s;let h='';if(k=='c')h+=tabs('cs',s.cs,[[1,'Full'],[2,'Soft'],[3,'Faint']],'Strength');if(k=='h')h+=tabs('n',s.n,[2,3,4].map(n=>[n,n]),'Areas');if(k=='k'){h+=tabs('km',s.km,[['d','Dynamic'],['f','Fixed']],'Type');h+=s.km=='f'?`<div class="tabs" role="group"><span>${tr('Key')}</span><div class="seg"><button data-a="kset">${kl(s.kc)}</button></div></div>`:tabs('kn',s.kn,[2,4,8].map(n=>[n,n]),'Keys')}if(k=='b')h+=tabs('cl',s.cl,[1,2,3].map(n=>[n,n]),'Chain');if(hasMode(k))h+=tabs('md',gm(k),[['v','Visual'],['a','Sound'],['x','Both']],'Signal');return h};

function ex(k,nd){stop();if(k=='k'&&!matchMedia('(pointer:coarse)').matches)M='k';T={k,n:0,r:[],d:0,live:1,g:null,cl:k=='b'?S.s.cl||1:1,li:0,ms:0,er:0,fs:0,ng:0,an:0,fx:0,sp:0,hold:0,wait:nd?1:0};if(S.s.snd)ac();
const zs=k=='b'?`<div class="z"><svg class="rg" viewBox="0 0 100 100" aria-hidden="true"><circle class="tk" cx="50" cy="50" r="40"/><circle id="pg" cx="50" cy="50" r="40"/><circle id="pl" cx="50" cy="50" r="40"/><circle id="dk" cx="50" cy="50" r="30"/></svg><i id="pp"></i></div>`:Array.from({length:k=='h'?S.s.n:1},(_,i)=>`<div class="z">${k=='h'?`<i>${i+1}</i>`:k=='k'?'<s class="kc"></s>'+(S.s.km=='f'?`<i>${kl(S.s.kc)}</i>`:''):''}</div>`).join('');
const kpad=k=='k'&&S.s.km!='f'&&matchMedia('(pointer:coarse)').matches?`<div class="kb">${KPL().map((c,i)=>`<button data-i="${i}">${kl(c)}</button>`).join('')}</div>`:'';
A.innerHTML=`<div class="wrap">${topbar(N[k])}<div class="sw"><div id="st" class="st" role="group" aria-label="${tr(N[k])}">${zs}</div><p id="ms" class="ms" role="status"></p></div>${kpad}<div class="rdo"><span id="ro" class="ro" aria-live="polite"></span><span class="chips"><span class="chip">${S.s.prac?tr('Practice only'):''}</span><span class="chip">${S.s.frz?tr('Hold difficulty'):''}</span></span></div><div id="tr"></div><div class="opts">${ctl(k)}</div><div id="en"></div></div>`;
const st=$('#st');st.addEventListener('pointerdown',pd);st.addEventListener('contextmenu',e=>e.preventDefault());if(k=='c')st.style.setProperty('--q',[1,.55,.3][(S.s.cs||1)-1]);const kb=$('.kb');if(kb)kb.addEventListener('pointerdown',e=>{const b=e.target.closest('button');if(b){M='t';press(e.timeStamp,+b.dataset.i)}});
if(nd)later(()=>trial(0),900);else{say('Watch.');later(()=>trial(1),1100)}}

function pd(e){M=e.pointerType=='touch'?'t':e.pointerType=='mouse'?'m':'k';if(T.k=='k'&&S.s.km!='f')return;const z=e.target.closest('.z');press(e.timeStamp,z?[...$('#st').children].indexOf(z):0)}

addEventListener('keydown',e=>{if(e.repeat)return;if(T.cap){e.preventDefault();const c=e.key.toLowerCase();T.cap=0;if(c!='escape'&&(c.length==1||c=='enter')){S.s.kc=c;save(1)}ex('k');return}
if(e.key=='Escape'){const bk=$('[data-a=back]');if(bk){bk.click();return}}
if(!T.live||!$('#st')||(e.target.closest&&e.target.closest('button,textarea,input')))return;
if(T.k=='h'){const n=+e.key;if(n>=1&&n<=S.s.n){e.preventDefault();M='k';press(e.timeStamp,n-1)}}
else if(T.k=='k'){const i=KPL().indexOf(e.key.toLowerCase());if(i>=0){e.preventDefault();M='k';press(e.timeStamp,i)}}
else if(e.code=='Space'||e.code=='Enter'){e.preventDefault();M='k';press(e.timeStamp,0)}});

function trial(d){if(!T.live)return;T.d=d;T.arm=0;T.id=(T.id||0)+1;if(T.k=='b')return lock0(d);T.wait=!d;const fore=d?700:800+Math.min(-Math.log(1-Math.random())*900,3200);if(!d&&T.k!='g'&&Math.random()<.1){later(()=>{T.wait=0;nxt()},fore);return}later(()=>cue(d),fore)}
function cue(d){const id=T.id,p=d?0:P(T.k),kk=T.k=='k',kp=KPL(),n=T.k=='h'?S.s.n:kk?kp.length:1,z=Math.random()*n|0,m=MD(),el=$('#st').children[kk?0:z],w=d?700:qz(p.w),ng=T.k=='g'&&!d&&Math.random()<.25;T.z=z;if(ng)T.ng++;T.isng=ng?1:0;if(kk&&S.s.km!='f')el.firstChild.innerHTML=kl(kp[z]);el.classList.toggle('ng',ng);let at=0;if(m!='v')at=tone(z,n);
requestAnimationFrame(ts=>{if(!T.live||T.id!=id||T.hold)return;T.wait=0;T.t0=m=='a'?at:ts;if(m!='a')el.classList.add('on');T.arm=1;later(()=>el.classList.remove('on'),w);later(()=>{if(T.arm&&T.id==id){T.arm=0;if(!d&&!ng){T.ms++;showT('No response')}nxt()}},ng?1400:3000);if(d)later(()=>press(T.t0+320,z),320)})}
function lock0(d){T.li=0;lock(d)}
function lock(d){const p=d?0:P('b'),L=d?1800:(T.li?650:1200)+Math.random()*(T.li?500:900),w=d?300:qz(Math.min(p.w,L-300)),pg=$('#pg'),pl=$('#pl'),C=251.3,f=w/L;
pl.style.strokeDasharray=`${f*C} ${C}`;pl.style.strokeDashoffset=-(1-f)*C;pg.style.transition='none';pg.style.strokeDashoffset=C;$('#st').firstElementChild.classList.remove('rl');pg.getBoundingClientRect();T.rl=0;T.skip=0;T.held=null;T.multi=0;T.lead=d?0:1;T.lk=(T.lk||0)+1;const lk=T.lk;const pp=$('#pp');if(pp)pp.textContent=!d&&T.cl>1?`${T.li+1} / ${T.cl}`:'';
later(()=>requestAnimationFrame(ts=>{if(!T.live||T.lk!=lk||T.hold)return;T.lead=0;T.t0=ts;T.L=L;T.w=w;T.arm=1;pg.style.transition=`stroke-dashoffset ${L}ms linear`;pg.style.strokeDashoffset=0;
const lp=t=>{if(!T.live)return;if(t>=T.t0+L)rel(t);else T.f=requestAnimationFrame(lp)};T.f=requestAnimationFrame(lp);if(d)later(()=>press(T.t0+L-w/2,0),L-w/2)}),T.li?250:d?700:600+Math.random()*700)}
function rel(t){const m=MD();T.rl=1;T.rt=m=='a'?tone(0,1):t;if(m=='x')tone(0,1);if(m!='a')$('#st').firstElementChild.classList.add('rl');if(T.held!=null){if(T.multi&&!T.d){T.held=null;return fstart('Several presses. Press once.','Several presses')}pulse(0);const o=T.held-t;T.held=null;rec(o,{inw:1,iw:1})}else if(T.skip){if(T.multi&&!T.d)return fstart('Several presses. Press once.','Several presses');rec(T.eo,{})}else{const lk=T.lk,d=T.d;later(()=>{if(T.arm&&T.lk==lk){T.arm=0;if(!d){T.ms++;showT('No response')}fin()}},1200)}}
function pulse(z){if(S.s.hp&&navigator.vibrate)navigator.vibrate(12);const e=document.createElement('div');e.className='pu';const st=$('#st');if(!st)return;(T.k=='h'?st.children[z]||st:st).appendChild(e);setTimeout(()=>e.remove(),800)}
const lim=()=>Math.max(8,Math.ceil(BLK()*.4));
function fstart(msg,lab,an){clr();T.id=(T.id||0)+1;T.lk=(T.lk||0)+1;T.arm=0;T.wait=0;T.lead=0;T.held=null;T.multi=0;if(!an)T.fs++;T.fx++;
const st=$('#st');if(st){[...st.children].forEach(c=>c.classList.remove('on','rl'));st.classList.add('bad')}const pg=$('#pg');if(pg){pg.style.transition='none';pg.style.strokeDashoffset=251.3}showT(lab);draw();
if(T.fs+T.an+T.er>lim())return voidb();T.hold=1;say(T.fx>=3?'Hands off. It restarts when you stop pressing.':msg);quiet()}
function quiet(){clearTimeout(T.qt);T.qt=setTimeout(()=>{if(!T.live)return;T.hold=0;const st=$('#st');if(st)st.classList.remove('bad');say('');if(T.k=='b')lock(0);else trial(0)},700+Math.min(T.fx,5)*400)}
function press(ts,z){if(!T.live)return;
if(T.hold){if(++T.sp>lim()*5)return voidb();return quiet()}
if(!T.arm){if(T.d)return;if(T.wait||T.lead)return fstart('Too soon. Wait for the change.','Too soon');if(T.k=='b'&&(T.held!=null||T.skip)&&!T.rl)T.multi=1;return}
if(T.k=='b')return bpress(ts);
const o=ts-T.t0;
if(!T.d&&o<100){T.an++;T.r.push({o,a:1});return fstart('Too fast to follow the cue. Wait for it.','Anticipation',1)}if((T.k=='h'||T.k=='k')&&z!==T.z){if(T.d)return;T.arm=0;pulse(T.k=='k'?0:z);T.er++;T.r.push({o,w:1});showT('Other area');draw();if(T.fs+T.an+T.er>lim())return voidb();const id=T.id;later(()=>{if(T.id==id)T.wait=1},250);later(nxt,700);return}
T.arm=0;pulse(T.k=='k'?0:z);if(T.isng&&!T.d){T.er++;T.r.push({o,f:1});showT('Outline');draw();if(T.fs+T.an+T.er>lim())return voidb();const id=T.id;later(()=>{if(T.id==id)T.wait=1},250);later(nxt,700);return}T.fx=0;rec(o,{inw:o<=qz(P(T.k).w)})}
function bpress(ts){T.arm=0;T.fx=0;if(T.rl){pulse(0);return rec(ts-T.rt,{})}const o=ts-(T.t0+T.L);if(o>=-T.w){T.held=ts;return}T.skip=1;T.eo=o}
function adapt(p,i){if(i){if(++p.r>=3){p.r=0;p.w*=1-p.s}}else{p.r=0;p.w*=1+p.s}p.s=Math.max(.05,p.s*.94);p.w=Math.min(T.k=='b'?600:1500,Math.max(T.k=='b'?2*F:140,p.w))}
function rec(o,f){const d=T.d;if(d)T.g=o;else{const a=T.k!='b'&&o<100;T.r.push({o,a,iw:f.iw?1:0});if(!a&&!S.s.frz)adapt(P(T.k),!!f.inw)}
show(o);if(!d&&T.k!='b'){const id=T.id;later(()=>{if(T.id==id&&!T.arm)T.wait=1},250)}later(T.k=='b'?fin:nxt,d?1000:T.k=='b'?500:700)}
const prog=()=>T.d?tr('Demonstration'):LT(Math.min(T.n+1,BLK())+' / '+BLK());
function show(o){const ro=$('#ro');if(!ro)return;ro.innerHTML=S.s.prac?`<small>${prog()}</small>`:`${fv(T.k,o)}<small>${prog()}</small>`;draw()}
function showT(t){const ro=$('#ro');if(ro)ro.innerHTML=`<small>${tr(t)} · ${prog()}</small>`}
function draw(){const el=$('#tr');if(!el)return;if(S.s.prac){el.innerHTML='';return}const b=T.k=='b',lo=b?-500:0,hi=b?500:(T.k=='c'||T.k=='g'?800:1200),x=v=>(Math.min(hi,Math.max(lo,v))-lo)/(hi-lo)*100;
el.innerHTML=`<div class="tr" aria-hidden="true"><b style="left:${x(0)}%"></b>${T.r.map(r=>`<i class="${r.a||r.w||r.f?'x':''}" style="left:${x(r.o)}%"></i>`).join('')}${T.g!=null?`<i class="g" style="left:${x(T.g)}%"></i>`:''}</div>`}
function nxt(){if(!T.live)return;const ro=$('#ro');if(T.d){T.d=0;T.g=null;T.r=[];T.ms=T.er=T.fs=T.ng=T.an=T.fx=T.sp=0;if(ro)ro.textContent='';draw();say(inst());if(T.k!='b')T.wait=1;else T.lead=1;later(()=>{say('');trial(0)},2400);return}
if(++T.n>=BLK())return end();trial(0)}
const BLK=()=>Math.max(5,Math.round((S.s.bl||30)/(T.k=='b'?T.cl:1)));
function fin(){if(!T.d&&T.li<T.cl-1){T.li++;lock(0)}else nxt()}

function summ(){const k=T.k,b=k=='b',rs=T.r.filter(r=>!r.w&&!r.f),v=(b?rs:rs.filter(r=>!r.a)).map(r=>r.o);if(!v.length)return null;const hf=v.length>>1;
return{t:Date.now(),e:k,m:M,v:MD(),q:QV(k),md:md(v),a:qt(v,.25),b:qt(v,.75),n:v.length,p1:qt(v,.1),p9:qt(v,.9),h1:v.length>=8?md(v.slice(0,hf)):null,h2:v.length>=8?md(v.slice(hf)):null,an:rs.filter(r=>r.a).length,ms:T.ms,er:T.er,fs:T.fs,ng:T.ng,iw:rs.filter(r=>r.iw).length,tn:T.r.length+T.ms,o:v.slice(0,120).map(R)}}
function end(){stop();const r=summ();if(!S.s.prac&&r){S.h.push(r);if(S.h.length>400)S.h.shift()}save();const ro=$('#ro');if(ro)ro.textContent='';
const out=S.s.prac||!r?'':results(r);$('#en').innerHTML=out+btns();lockBtns();const en=$('#en');if(en&&out)en.scrollIntoView({behavior:S.s.rm?'auto':'smooth',block:'start'})}
const btns=()=>`<div class="bt"><button class="pb" data-a="again">${tr('Continue')}</button><button class="gb" data-a="back">${tr('Back')}</button></div>`;
function lockBtns(){const bs=[...document.querySelectorAll('#en .bt button')];bs.forEach(b=>b.disabled=true);setTimeout(()=>{bs.forEach(b=>b.disabled=false);const pb=$('#en .pb');if(pb&&pb.isConnected)pb.focus({preventScroll:true})},900)}
function voidb(){stop();const st=$('#st');if(st){st.classList.remove('bad');[...st.children].forEach(c=>c.classList.remove('on','rl'))}say('');const ro=$('#ro');if(ro)ro.textContent='';
$('#en').innerHTML=`<div class="card"><p class="vt">${tr('This block was not recorded.')}</p><p class="mt">${tr('Too many presses came before the change. Wait for the change, then press once.')}</p></div>`+btns();lockBtns()}

function results(r){const b=r.e=='b',pr=S.h.filter(x=>x!==r&&x.t<r.t&&ck(x)==ck(r)&&x.m==r.m).slice(-5),pm=md(pr.map(x=>x.md));let g='';
if(b){const ea=r.o.filter(x=>x<0).length-r.iw,la=r.o.filter(x=>x>=0).length;g=tile('In window',`${fr(r.iw,r.n)} · ${pc(r.iw,r.n)}`)+tile('Early',ea)+tile('Late',la)+tile('Mean distance',fa(mean(r.o.map(Math.abs))))+tile('Middle half',`${fm(r.a)} – ${fm(r.b)}`)+tile('Spread',fa(r.b-r.a))+(r.ms?tile('No response',r.ms):'')}
else{g=tile('Middle half',`${fa(r.a)} – ${fa(r.b)}`)+tile('Spread',fa(r.b-r.a))+tile('Fastest 10%',fa(r.p1))+tile('Slowest 10%',fa(r.p9))+tile('Valid trials',fr(r.n,r.tn))+tile('Anticipations',r.an)+tile('Early presses',r.fs)+tile('No response',r.ms)+(r.e=='h'||r.e=='k'?tile('Wrong responses',r.er):'')+(r.e=='g'?tile('Outline presses',fr(r.er,r.ng)):'')+(r.h1!=null?tile('First → second half',fd(r.h2-r.h1)):'')}
g+=tile('Input',tr(IN[r.m]))+tile('Setting',cfl(r));const rk=cf(r.e,r.v,r.q);
return`<div class="card"><div class="big"><span>${tr(b?'Median offset':'Median')}</span><b>${fv(r.e,r.md)}</b></div>${pr.length?`<p class="sub">${tf('Previous {a}: {b} · difference {c}',{a:pr.length,b:fv(r.e,pm),c:fd(r.md-pm)})}</p>`:''}<div class="grid">${g}</div>${dist(r.o,r.e,RF[rk]&&RF[rk][1],r.md)}${RF[rk]?`<div class="hd2"><p class="mt">${tr('Reference')} · ${tr(RF[rk][0])}</p></div>${ruler(RF[rk][1],r.md)}`:''}</div>`}

function dist(o,e,rf,m){if(o.length<5)return'';const b=e=='b',W=300,H=84,pb=14;let lo=qt(o,0),hi=qt(o,1);if(b){lo=Math.min(lo,0);hi=Math.max(hi,0)}if(rf){lo=Math.min(lo,rf[0]);hi=Math.max(hi,rf[3])}
const bw=[5,10,20,25,50,100,200].find(s=>(hi-lo)/s<=28)||200;lo=Math.floor(lo/bw)*bw;hi=Math.ceil((hi+.01)/bw)*bw;const nb=Math.max(1,R((hi-lo)/bw)),c=Array(nb).fill(0);o.forEach(v=>c[Math.max(0,Math.min(nb-1,Math.floor((v-lo)/bw)))]++);const mx=Math.max(...c),x=v=>(v-lo)/(hi-lo)*W,bh=H-pb-6,bwp=W/nb;
return`<svg class="ch" viewBox="0 0 ${W} ${H}" role="img" aria-label="${tr('Distribution')}">${rf?`<rect class="hz" x="${x(rf[1])}" y="0" width="${x(rf[2])-x(rf[1])}" height="${H-pb}"/>`:''}${c.map((n,i)=>n?`<rect class="hb" x="${i*bwp+.5}" y="${H-pb-n/mx*bh}" width="${Math.max(1,bwp-1)}" height="${n/mx*bh}" rx="1"/>`:'').join('')}<line class="gd" x1="0" x2="${W}" y1="${H-pb}" y2="${H-pb}"/>${b?`<line class="gd" x1="${x(0)}" x2="${x(0)}" y1="0" y2="${H-pb}"/>`:''}<line class="mk" x1="${x(m)}" x2="${x(m)}" y1="0" y2="${H-pb}"/><text class="ax" x="0" y="${H-2}">${R(lo)}</text><text class="ax" x="${x(m)}" y="${H-2}" text-anchor="middle">${R(m)}</text><text class="ax" x="${W}" y="${H-2}" text-anchor="end">${R(hi)} ms</text></svg><p class="cl">${tr(rf?'Bars: responses by time. Line: median. Shaded: reference middle range.':'Bars: responses by time. Line: median.')}</p>`}

const ruler=(b,u)=>{const d=b[3]-b[0],lo=Math.max(0,Math.round((b[0]-d*.9)/10)*10),hi=Math.round((b[3]+d*1.3)/10)*10,e=[lo,...b,hi],x=v=>(Math.min(hi,Math.max(lo,v))-lo)/(hi-lo)*100;return`<div class="rf" aria-hidden="true">${e.slice(0,-1).map((v,i)=>`<s style="left:${x(v)}%;width:${x(e[i+1])-x(v)}%"></s>`).join('')}${b.map(v=>`<em style="left:${x(v)}%">${v}</em>`).join('')}${u&&!S.s.prac?`<i style="left:${x(u)}%"></i>`:''}</div>`};

function ref(){stop();const u=k=>{const h=[...S.h].reverse().filter(r=>r.e!='b'&&cf(r.e,r.v,r.q)==k);const q=h.find(r=>r.m==M)||h[0];return q};
A.innerHTML=`<div class="wrap">${topbar('Reference')}${Object.keys(RF).map(k=>{const q=u(k);return`<div class="card rr"><div class="hd2"><p class="mt">${tr(RF[k][0])}</p>${q&&!S.s.prac?`<span>${tr('Latest')} ${fa(q.md)} · ${tr(IN[q.m])}</span>`:''}</div>${ruler(RF[k][1],q&&q.md)}</div>`}).join('')}<p class="mt dev">${tr('Approximate adult values from published simple and choice tasks. Key and Go/no-go rows are extended estimates. The dot is your latest median. Every device adds its own delay.')}</p></div>`}

const tp=t=>{const h=new Date(t).getHours();return h<5?'Night':h<12?'Morning':h<17?'Afternoon':h<22?'Evening':'Night'};
const slope=a=>{const n=a.length;if(n<6)return null;const mx=(n-1)/2,my=mean(a);let u=0,v=0;a.forEach((y,i)=>{u+=(i-mx)*(y-my);v+=(i-mx)*(i-mx)});return v?u/v:0};
const nice=r=>[1,2,5,10,20,25,50,100,200,250,500].find(s=>r/s<=4)||1000;

function chart(a,e){const n=a.length,b=e=='b',W=300,H=150,pl=26,pr=8,pt=10,pbm=22;let lo=Math.min(...a.map(r=>r.a)),hi=Math.max(...a.map(r=>r.b));if(b){lo=Math.min(lo,0);hi=Math.max(hi,0)}const pad=(hi-lo)*.08||10;lo-=pad;hi+=pad;
const x=i=>n<2?(pl+W-pr)/2:pl+i*(W-pl-pr)/(n-1),y=v=>H-pbm-(v-lo)/(hi-lo)*(H-pt-pbm),st=nice(hi-lo),tk=[];for(let v=Math.ceil(lo/st)*st;v<=hi;v+=st)tk.push(v);
const rm=a.map((r,i)=>md(a.slice(Math.max(0,i-4),i+1).map(q=>q.md))),up=a.map((r,i)=>`${x(i)},${y(r.b)}`),dn=a.map((r,i)=>`${x(i)},${y(r.a)}`).reverse();
return`<svg viewBox="0 0 ${W} ${H}" class="ch" role="img" aria-label="${tr('Session medians over time')}">${tk.map(v=>`<line class="gd" x1="${pl}" x2="${W-pr}" y1="${y(v)}" y2="${y(v)}"/><text class="ax" x="${pl-4}" y="${y(v)+3}" text-anchor="end">${v}</text>`).join('')}${n>1?`<polygon class="bd" points="${up.concat(dn).join(' ')}"/><polyline class="ln" points="${a.map((r,i)=>`${x(i)},${y(r.md)}`).join(' ')}"/>${n>=5?`<polyline class="ln2" points="${rm.map((v,i)=>`${x(i)},${y(v)}`).join(' ')}"/>`:''}`:`<line class="ln" x1="${x(0)}" x2="${x(0)}" y1="${y(a[0].a)}" y2="${y(a[0].b)}"/>`}${a.map((r,i)=>`<circle class="dt" cx="${x(i)}" cy="${y(r.md)}" r="${n>40?1.4:2}"/>`).join('')}<text class="ax" x="${pl}" y="${H-6}">${dd(a[0].t)}</text>${n>1?`<text class="ax" x="${W-pr}" y="${H-6}" text-anchor="end">${dd(a[n-1].t)}</text>`:''}</svg><p class="cl">${tr(n>=5?'Line: session median. Band: middle half. Dashed: median of the last 5 sessions.':'Line: session median. Band: middle half.')}</p>`}

function obs(a,all,e){const o=[],b=e=='b',key=v=>b?Math.abs(v):v,n=a.length;
if(n>=10){const l=a.slice(-5).map(r=>r.md),p=a.slice(-10,-5).map(r=>r.md);o.push(tf('Last 5 sessions: {a}. The 5 before: {b}.',{a:fv(e,md(l)),b:fv(e,md(p))}))}
if(n>=10){const l=md(a.slice(-5).map(r=>r.b-r.a)),p=md(a.slice(0,-5).map(r=>r.b-r.a));o.push(tf('Middle half width, last 5 sessions: {a}. Earlier sessions: {b}.',{a:fa(l),b:fa(p)}))}
const per={};a.forEach(r=>{(per[tp(r.t)]=per[tp(r.t)]||[]).push(r.md)});const pk=Object.entries(per).filter(([,v])=>v.length>=3);if(pk.length>=2){pk.sort((x,y)=>key(md(x[1]))-key(md(y[1])));o.push(tf(b?'Closest median by time of day: {p}, {a} across {n} sessions.':'Lowest median by time of day: {p}, {a} across {n} sessions.',{p:tr(pk[0][0]),a:fv(e,md(pk[0][1])),n:pk[0][1].length}))}
const hh=a.filter(r=>r.h1!=null&&r.h2!=null);if(hh.length>=5&&!b)o.push(tf('Second half of a block compared with the first: {a} on average across {n} sessions.',{a:fd(mean(hh.map(r=>r.h2-r.h1))),n:hh.length}));
if(!b){const an=a.reduce((s,r)=>s+r.an,0),tot=a.reduce((s,r)=>s+r.n+r.an,0);if(an)o.push(tf('Anticipations: {a} of responses.',{a:pc(an,tot)}))
const fs=a.reduce((s,r)=>s+r.fs,0),tn=a.reduce((s,r)=>s+(r.tn||r.n),0);if(fs)o.push(tf('Early presses: {a} per trial.',{a:LT((fs/Math.max(1,tn)).toFixed(2))}))}
if(e=='h'||e=='k'){const w=a.reduce((s,r)=>s+r.er,0),tn=a.reduce((s,r)=>s+(r.tn||r.n),0);if(w)o.push(tf('Wrong responses: {a} of trials.',{a:pc(w,tn)}))}
if(e=='g'){const w=a.reduce((s,r)=>s+r.er,0),ng=a.reduce((s,r)=>s+r.ng,0);if(ng)o.push(tf('Outline presses: {a} of outline trials.',{a:pc(w,ng)}))}
if(b){const iw=a.reduce((s,r)=>s+r.iw,0),t=a.reduce((s,r)=>s+r.n,0);o.push(tf('In window: {a} of presses.',{a:pc(iw,t)}))}
const byI={};all.forEach(r=>{(byI[r.m]=byI[r.m]||[]).push(r.md)});const ik=Object.entries(byI).filter(([,v])=>v.length>=3);if(ik.length>1)o.push(tr('By input, same setting:')+' '+ik.map(([m,v])=>`${tr(IN[m])} ${fv(e,md(v))}`).join(' · '));
return o.length?`<p class="sec">${tr('Observations')}</p><div class="card"><ul class="obs">${o.map(t=>`<li>${t}</li>`).join('')}</ul></div>`:''}

function hist(k,mm,cc){stop();const lr=S.h[S.h.length-1];k=k||(lr&&lr.e)||'c';const all=S.h.filter(r=>r.e==k),ms=[...new Set(all.map(r=>r.m))],m=ms.includes(mm)?mm:all.length?all[all.length-1].m:null,a1=all.filter(r=>r.m==m),cs=[...new Set(a1.map(ck))],c=cs.includes(cc)?cc:a1.length?ck(a1[a1.length-1]):null,a=a1.filter(r=>ck(r)==c),b=k=='b';
let h=`<div class="wrap">${topbar('History')}<div class="hl"><div class="tabs">${seg('hist',k,X.map(x=>[x,tr(N[x])]))}</div>${ms.length>1?`<div class="tabs">${seg('hist',m,ms.map(x=>[x,tr(IN[x]),` data-e="${k}"`]))}</div>`:''}${cs.length>1?`<div class="tabs">${seg('hist',c,cs.map(x=>[x,cfl(a1.find(r=>ck(r)==x)),` data-e="${k}" data-m="${m}"`]))}</div>`:''}</div>`;
if(S.s.prac)h+=`<div class="card"><p class="mt">${tr('Numbers are hidden while Practice only is on.')}</p></div>`;
else if(!a.length)h+=`<div class="card"><p class="mt">${tr('No sessions yet.')}</p></div>`;
else{const now=Date.now(),D7=7*864e5,w1=a.filter(r=>now-r.t<D7).map(r=>r.md),w2=a.filter(r=>now-r.t>=D7&&now-r.t<2*D7).map(r=>r.md),best=a.reduce((x,r)=>(b?Math.abs(r.md)<Math.abs(x.md):r.md<x.md)?r:x),sl=slope(a.slice(-20).map(r=>r.md)),lst=a[a.length-1];
h+=`<div class="card"><div class="big"><span>${tr(b?'Median offset, all sessions':'Median, all sessions')}</span><b>${fv(k,md(a.map(r=>r.md)))}</b></div><p class="sub">${tr(N[k])} · ${tr(IN[m])} · ${cfl(lst)}</p>${chart(a.slice(-60),k)}<div class="grid">${tile('Sessions',a.length)}${tile('Trials',a.reduce((s,r)=>s+r.n,0))}${tile('Last 7 days',w1.length?fv(k,md(w1)):'—')}${tile('Previous 7 days',w2.length?fv(k,md(w2)):'—')}${tile(b?'Closest session':'Lowest session',`${fv(k,best.md)}`)}${tile('Typical spread',fa(md(a.map(r=>r.b-r.a))))}${sl!=null?tile('Trend per 10 sessions',fd(sl*10)):''}</div></div>`;
h+=obs(a,all.filter(r=>ck(r)==c),k);
const per={};a.forEach(r=>{const p=tp(r.t);(per[p]=per[p]||[]).push(r.md)});const po=['Morning','Afternoon','Evening','Night'].filter(p=>per[p]);
if(po.length)h+=`<p class="sec">${tr('Time of day')}</p><div class="card"><table class="tt"><tr><th>${tr('Period')}</th><th>${tr('Sessions')}</th><th>${tr('Median')}</th></tr>${po.map(p=>`<tr><td>${tr(p)}</td><td>${per[p].length}</td><td>${fv(k,md(per[p]))}</td></tr>`).join('')}</table></div>`;
h+=`<p class="sec">${tr('Recent sessions')}</p><div class="card"><ul class="sl">${a.slice(-8).reverse().map(r=>`<li><span>${dt(r.t)}</span><b>${fv(k,r.md)}</b><span>${LT('n '+r.n)}</span></li>`).join('')}</ul></div>`}
const ov=X.map(x=>{const r=S.h.filter(q=>q.e==x);return r.length?`<tr><td>${tr(N[x])}</td><td>${r.length}</td><td>${fv(x,r[r.length-1].md)}</td><td>${fv(x,md(r.slice(-10).map(q=>q.md)))}</td></tr>`:''}).join('');
if(ov&&!S.s.prac)h+=`<p class="sec">${tr('All exercises')}</p><div class="card"><table class="tt"><tr><th>${tr('Exercise')}</th><th>${tr('Sessions')}</th><th>${tr('Latest')}</th><th>${tr('Last 10')}</th></tr>${ov}</table></div>`;
A.innerHTML=h+'</div>'}

const devline=()=>{const d=S.dev||{};return[d.f?`${tr('Display')} ${LT(Math.round(1000/d.f)+' Hz')} · ${tr('jitter')} ${LT(d.j+' ms')}`:'',d.a?`${tr('Audio')} ${LT(d.a+' ms')}`:''].filter(Boolean).join(' · ')};
function set(){stop();const s=S.s,sw=[['snd','Sound cues','Adds a sound signal option to Cue, Choice, Buffer and fixed Key.'],['rm','Reduced motion','Removes fades and pulses.'],['prac','Practice only','Numbers are hidden and nothing is recorded.'],['frz','Hold difficulty','The response window stops adapting.'],...(navigator.vibrate?[['hp','Haptics','A short vibration on each press.']]:[])];
A.innerHTML=`<div class="wrap">${topbar('Settings')}<div class="card">${sw.map(([k,l,d])=>`<button class="row" role="switch" aria-checked="${!!s[k]}" data-a="tg" data-k="${k}"><span>${tr(l)}<small>${tr(d)}</small></span><i class="swt"></i></button>`).join('')}</div><div class="opts">${tabs('lg',s.lg,[['en','English'],['ar','العربية']],'Language')}${tabs('th',s.th,[['auto','Auto'],['dark','Dark'],['light','Light']],'Theme')}${tabs('bl',s.bl,[15,30,60].map(n=>[n,n]),'Trials per block')}${s.snd?tabs('vol',s.vol,[[1,'Low'],[2,'Medium'],[3,'High']],'Volume'):''}</div><p class="mt dev">${devline()}</p>${SOK?'':`<p class="mt dev">${tr('Data cannot be saved in this browser.')}</p>`}<p class="sec">${tr('Data')}</p><div class="card"><p class="mt">${tf('{a} sessions stored on this device.',{a:S.h.length})}</p><textarea id="db" spellcheck="false" aria-label="${tr('Data')}"></textarea><div class="bt"><button class="sm" data-a="cp">${tr('Copy')}</button><button class="sm" data-a="ld">${tr('Load')}</button><button class="sm" data-a="sv">${tr('Save file')}</button><button class="sm" data-a="of">${tr('Open file')}</button><input type="file" id="fl" accept="application/json,.json" hidden></div><div class="bt"><button class="sm" data-a="csv">${tr('Copy CSV')}</button><button class="sm" data-a="rd">${tr('Reset difficulty')}</button><button class="sm" data-a="er">${tr('Erase')}</button></div></div></div>`;
$('#db').value=JSON.stringify(S);$('#fl').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;f.text().then(t=>{$('#db').value=t;H.ld($('[data-a=ld]'))})})}

const AB=['Lull is a practice tool for reaction time and input timing. It is not a test.','Every exercise starts with a short demonstration. Difficulty adapts quietly in the background by shortening or lengthening how long the cue stays visible.','Numbers show where a response landed relative to the cue or release, in milliseconds.','Pressing early or repeatedly never brings the cue sooner. Each early press restarts the wait, and a block with too many is not recorded.','Everything stays on this device. Nothing is sent anywhere.','Lull is not a medical or diagnostic tool.'];
const GLS=[['Median','The middle response of a block. Single very fast or slow trials barely move it.'],['Middle half','The range holding the central 50% of valid responses. Its width is the spread. A narrower spread means more even timing.'],['Fastest and slowest 10%','The edges of the distribution, without the extremes.'],['Anticipations','Responses under 100 ms. Too fast to follow the cue, so the trial is repeated and left out of the median.'],['Early presses','Presses made before the cue. The trial restarts after a quiet moment and is not counted.'],['No response','Cues with no press within 3 seconds.'],['First → second half','Change in median between the two halves of a block. Shows warm-up or fatigue within a block.'],['Offset','Buffer only. Where the input landed relative to release. Minus is before, plus is after.'],['Device delay','Display refresh, input hardware and audio output each add delay. Compare sessions on the same device and input.']];
function about(){stop();A.innerHTML=`<div class="wrap">${topbar('About')}<p class="lead">${tr(AB[0])}</p>${AB.slice(1).map(t=>`<p class="ab">${tr(t)}</p>`).join('')}<p class="sec">${tr('Reading the numbers')}</p><div class="card"><ul class="fl">${GLS.map(([a,b])=>`<li><b>${tr(a)}</b><span>${tr(b)}</span></li>`).join('')}</ul></div><p class="mt dev">${tr('Source for simple reaction time: Woods et al., 2015, Frontiers in Human Neuroscience, 9:131. Choice, key and go/no-go ranges are extended estimates.')}</p><p class="mt dev">${tr('Version')} 3.1</p></div>`}

const flash=(b,t)=>{if(!b)return;const o=b.textContent;b.textContent=tr(t);setTimeout(()=>{if(b.isConnected)b.textContent=o},1500)};
const copy=t=>{try{return navigator.clipboard.writeText(t)}catch(e){return Promise.reject(e)}};
const H={go:b=>ex(b.dataset.k),back:home,again:()=>ex(T.k,1),hist:b=>{const d=b.dataset;if(d.m)hist(d.e,d.m,d.k);else if(d.e)hist(d.e,d.k);else hist(d.k)},set,ref,ab:about,
kn:b=>{S.s.kn=+b.dataset.k;save(1);ex('k')},km:b=>{S.s.km=b.dataset.k;save(1);ex('k')},cs:b=>{S.s.cs=+b.dataset.k;save(1);ex('c')},cl:b=>{S.s.cl=+b.dataset.k;save(1);ex('b')},n:b=>{S.s.n=+b.dataset.k;save(1);ex('h')},md:b=>{(S.s.mo=S.s.mo||{})[T.k]=b.dataset.k;save(1);ex(T.k)},
kset:b=>{stop();T.cap=1;b.textContent=tr('Press a key')},
tt:b=>{S.s.th=eth()=='dark'?'light':'dark';save(1);applyUI();if($('[data-a=th]'))set()},
lg:b=>{S.s.lg=b.dataset.k;save(1);applyUI();set()},th:b=>{S.s.th=b.dataset.k;save(1);applyUI();set()},bl:b=>{S.s.bl=+b.dataset.k;save(1);set()},vol:b=>{S.s.vol=+b.dataset.k;save(1);set()},
tg:b=>{const k=b.dataset.k;S.s[k]=S.s[k]?0:1;save(1);applyUI();set()},
rd:b=>{S.p={};save(1);flash(b,'Done')},
csv:b=>{const r=[['date','exercise','input','signal','setting','median_ms','q1_ms','q3_ms','p10_ms','p90_ms','valid','anticipations','early_presses','no_response','errors','outline_trials','in_window'],...S.h.map(r=>[new Date(r.t).toISOString(),N[r.e],IN[r.m],SG[r.v],'"'+cfl({...r,v:'v'})+'"',R(r.md),R(r.a),R(r.b),r.p1==null?'':R(r.p1),r.p9==null?'':R(r.p9),r.n,r.an,r.fs,r.ms,r.er,r.ng,r.e=='b'?r.iw:''])].map(r=>r.join(',')).join('\n');copy(r).then(()=>flash(b,'Copied'),()=>flash(b,'Unavailable'))},
cp:b=>{const t=$('#db');t.select();copy(t.value).then(()=>flash(b,'Copied'),()=>{try{document.execCommand('copy');flash(b,'Copied')}catch(e){flash(b,'Unavailable')}})},
sv:()=>{const u=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'})),a=document.createElement('a');a.href=u;a.download='lull-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),2000)},
of:()=>$('#fl').click(),
ld:b=>{try{const j=JSON.parse($('#db').value);if(!j||typeof j!='object'||!(j.s||j.h||j.p))throw 0;const dv=S.dev;try{localStorage.setItem('lull1_bak_'+Date.now(),JSON.stringify(S))}catch(e){}S=clean(j);S.dev=S.dev||dv;applyUI();save(1);set()}catch(e){flash(b,'Unreadable')}},
er:b=>{if(er){er=0;try{localStorage.setItem('lull1_bak_'+Date.now(),JSON.stringify(S))}catch(e){}S.p={};S.h=[];save(1);set()}else{er=1;b.textContent=tr('Confirm');setTimeout(()=>{er=0;if(b.isConnected)b.textContent=tr('Erase')},3000)}}};
A.addEventListener('pointerdown',e=>{M=e.pointerType=='touch'?'t':e.pointerType=='mouse'?'m':'k'});
A.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(b&&H[b.dataset.a])H[b.dataset.a](b)});
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(T.live){T.paused=1;stop()}save()}else if(T.paused){T.paused=0;T.live=1;T.d=0;T.arm=0;T.hold=0;const st=$('#st');if(st)st.classList.remove('bad');say('');later(()=>trial(0),900)}});
addEventListener('pagehide',()=>save());
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
applyUI();home();
