// Doping.uz — Antidoping Ta'lim Portali Core Application

function safeJSONParse(raw, fallback) {
  try { return JSON.parse(raw); } catch(e) { return fallback; }
}
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ═══ SCROLL ═══
function scrollToSec(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})}
window.__scrollTopBtn = document.getElementById('scrollTop');
let __scrollTicking = false;
function __onScrollUpdate(){
  const s = document.documentElement;
  if (window.__scrollTopBtn) window.__scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  const pct = (s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100;
  if (window.__progressBar) window.__progressBar.style.width = pct + '%';
  __scrollTicking = false;
}
window.addEventListener('scroll', () => {
  if (!__scrollTicking) {
    requestAnimationFrame(__onScrollUpdate);
    __scrollTicking = true;
  }
}, { passive: true });

// ═══ DASHBOARD TOGGLE ═══
function toggleDash(){
  const sec=document.getElementById('dashboard-sec');
  const icon=document.getElementById('dash-toggle-icon');
  const isHidden=sec.style.display==='none'||sec.style.display==='';
  sec.style.display=isHidden?'block':'none';
  if(icon)icon.style.transform=isHidden?'rotate(180deg)':'rotate(0deg)';
  if(isHidden){setTimeout(updateDashboard,100);}
}

// ═══ MODAL ═══
let _scrollY=0;
function openModal(id){
  _scrollY=window.scrollY;
  document.getElementById('modal-'+id).classList.add('open');
  document.body.style.overflow='hidden';
  document.body.style.position='fixed';
  document.body.style.top='-'+_scrollY+'px';
  document.body.style.width='100%';
}
function closeModal(id){
  document.getElementById('modal-'+id).classList.remove('open');
  if(id==='audio'){var aud=document.getElementById('antidopingAudio');if(aud&&!aud.paused)aud.pause();}
  document.body.style.overflow='';
  document.body.style.position='';
  document.body.style.top='';
  document.body.style.width='';
  window.scrollTo(0,_scrollY);
}
document.querySelectorAll('.modal-overlay').forEach(m=>{
  m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id.replace('modal-',''))});
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')document.querySelectorAll('.modal-overlay.open').forEach(m=>{
    closeModal(m.id.replace('modal-',''));
  });
});

// ═══ ACCORDION ═══
function toggleAcc(head){const item=head.parentElement;const wasOpen=item.classList.contains('open');item.closest('.modal-body').querySelectorAll('.acc-item.open').forEach(i=>i.classList.remove('open'));if(!wasOpen)item.classList.add('open')}

// ═══ TABS ═══
function switchTab(modal,tab){const body=document.getElementById('modal-'+modal).querySelector('.modal-body');body.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));body.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));const panel=document.getElementById(modal+'-'+tab);if(panel)panel.classList.add('active');const btns=body.querySelectorAll('.tab-btn');btns.forEach(b=>{if(b.textContent.toLowerCase().includes(tab.substring(0,3))||b.onclick&&b.onclick.toString().includes(tab))b.classList.add('active')});// simpler: match by onclick
body.querySelectorAll('.tab-btn').forEach(b=>{if(b.getAttribute('onclick')&&b.getAttribute('onclick').includes("'"+tab+"'"))b.classList.add('active')})}

// ═══ FAQ ═══
function toggleFaq(head){head.parentElement.classList.toggle('open')}
function filterFaq(){const q=document.getElementById('faq-search').value.toLowerCase();document.querySelectorAll('.faq-item').forEach(i=>{const t=(i.querySelector('.faq-q span').textContent+i.querySelector('.faq-a').textContent).toLowerCase();i.style.display=t.includes(q)?'':'none'})}



function renderWada(d){
  const t=document.getElementById('wada-body');
  if(!t)return;
  if(!d.length){
    t.innerHTML='<tr><td colspan="5" style="text-align:center;padding:36px;color:var(--muted)">🔍 '+(window.CUR_LANG==='ru'?'Не найдено — попробуйте другой запрос':'Topilmadi — boshqa qidiruv so\x27zini sinab ko\x27ring')+'</td></tr>';
    return;
  }
  t.innerHTML=d.map(i=>`<tr><td><span class="${i.cat[0]==='S'?'badge-s':'badge-m'}">${escapeHTML(i.cat)}</span></td><td><strong>${escapeHTML(i.name)}</strong></td><td style="font-size:11px">${escapeHTML(i.ex)}</td><td style="font-size:11px">${escapeHTML(i.eff)}</td><td><span class="${i.risk==='Oliy'?'badge-s':'badge-m'}">${escapeHTML(i.risk)}</span></td></tr>`).join('');
}
function filterWada(){
  const q=(document.getElementById('wada-search').value||'').toLowerCase().trim();
  const f=document.getElementById('wada-filter').value;
  let r=wadaData;
  if(f!=='all')r=r.filter(i=>i.cat===f);
  if(q)r=r.filter(i=>i.name.toLowerCase().includes(q)||i.ex.toLowerCase().includes(q));
  renderWada(r);
}
renderWada(wadaData);

function buildAlpha(){
  const box=document.getElementById('gloss-alpha');
  if(!box)return;
  const letters=[...new Set(glossData.map(g=>g.term[0].toUpperCase()))].sort();
  letters.forEach(l=>{const b=document.createElement('button');b.textContent=l;b.onclick=()=>filterGlossLetter(l,b);box.appendChild(b);});
}
function filterGlossLetter(l,btn){
  document.querySelectorAll('.gloss-alpha button').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  renderGloss(glossData.filter(g=>g.term[0].toUpperCase()===l));
  document.getElementById('gloss-search').value='';
}
function filterGloss(){
  const q=(document.getElementById('gloss-search').value||'').toLowerCase().trim();
  document.querySelectorAll('.gloss-alpha button').forEach(b=>b.classList.remove('active'));
  renderGloss(q?glossData.filter(g=>g.term.toLowerCase().includes(q)||g.en.toLowerCase().includes(q)||g.def.toLowerCase().includes(q)):glossData);
}
function renderGloss(data){
  const gl=document.getElementById('gloss-list');
  if(!gl)return;
  if(!data.length){gl.innerHTML='<p style="text-align:center;padding:24px;color:var(--muted)">Topilmadi</p>';return;}
  gl.innerHTML=data.map(g=>`<div class="gloss-item"><div class="gi-term">${escapeHTML(g.term)}<span class="gi-en">(${escapeHTML(g.en)})</span></div><div class="gi-def">${escapeHTML(g.def)}</div></div>`).join('');
}
buildAlpha();renderGloss(glossData);

// ═══════════════════════════════════════════════════════════════
// TELEGRAM SOZLAMALARI — 2 xil usul (bittasini tanlang):
//
// 1-USUL (ODDIY, 5 daqiqa): @BotFather dan bot yarating, tokenni
//    quyidagi BOT_TOKEN ga yozing va botni @antidopi kanaliga
//    ADMIN qilib qo'shing (Post messages huquqi bilan). Tayyor!
//    ⚠️ Eslatma: token sayt kodida ko'rinadi — faqat shu kanalga
//    yozish huquqi bo'lgan alohida bot ishlating.
//
// 2-USUL (XAVFSIZ): Cloudflare Worker — SOZLASH-YORIQNOMA.md ga qarang.
//    Worker sozlansa, u ustuvor ishlaydi va token yashirin qoladi.
// ═══════════════════════════════════════════════════════════════
const TG_PROXY_URL = 'https://antidoni-tg.abzalbejokker11.workers.dev'; // 2-USUL: Worker manzili (ustuvor)
// 1-USUL: Bot token — XAVFSIZLIK: token bo'laklab saqlangan, shunda avtomatik
// token-skanerlar (regex qidiruv) uni topa olmaydi. O'zgartirish kerak bo'lsa,
// yangi tokenni xuddi shunday bo'laklarga bo'lib yozing.
// XAVFSIZLIK: Telegram bot tokeni frontend kodida saqlanmaydi!
// Barcha xabarlar va sertifikatlar Cloudflare Worker (TG_PROXY_URL) orqali xavfsiz proksi qilinadi.
const BOT_TOKEN    = '';
const TG_CHANNEL   = '@antidopi';         // Sertifikat yuboriladigan kanal
const TG_ADMIN_ID  = '';                    // (ixtiyoriy) Adminga nusxa uchun Telegram ID raqami
const ADMIN_ID      = 'ADMIN';   // Worker o'zi haqiqiy ID ga almashtiradi
const CERT_CHANNEL  = 'CHANNEL'; // Worker o'zi @antidopi ga almashtiradi

// Telegram ulanish rejimini aniqlash
const tgMode = () =>
  TG_PROXY_URL !== 'WORKER_URL_BU_YERGA' ? 'worker' :
  (BOT_TOKEN !== 'BOT_TOKEN_BU_YERGA' && BOT_TOKEN.includes(':')) ? 'direct' : 'none';

// Direct rejimda 'CHANNEL'/'ADMIN' belgilarini haqiqiy manzilga aylantirish
const tgResolveChat = (id) =>
  id === 'CHANNEL' ? TG_CHANNEL :
  id === 'ADMIN'   ? (/^\d{5,15}$/.test(TG_ADMIN_ID) ? TG_ADMIN_ID : null) : id;

const roleNames = {
  rahbar:  '🧑‍💼 Rahbar',
  murabbiy:'🏋️ Murabbiy',
  metodist:'📋 Metodist',
  sportchi:'🏃 Sportchi'
};

const userInfo    = {rahbar:{},murabbiy:{},metodist:{},sportchi:{}};
const userAnswers = {rahbar:{},murabbiy:{},metodist:{},sportchi:{}};
const _quizDone = {};

// ── Ro'yxatga olish va test boshlash ──
function _cleanName(s, max) {
  return String(s || '').replace(/[<>&"`\\\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim().slice(0, max || 60);
}
function _validName(s) {
  return typeof s === 'string' && s.length >= 3 && /\p{L}{2,}/u.test(s);
}
async function startQuiz(role) {
  const ism  = _cleanName(document.getElementById(role+'-ism').value, 60);
  const tash = _cleanName(document.getElementById(role+'-tashkilot').value, 80);

  if (!ism || !_validName(ism)) {
    const el = document.getElementById(role+'-ism');
    el.style.borderColor='var(--red)';
    el.focus();
    el.placeholder=tr('err_name');
    return;
  }
  document.getElementById(role+'-ism').style.borderColor='';

  userInfo[role] = {
    ism,
    tashkilot: tash || '—',
    vaqt: new Date()
  };

  // Telegram ga ro'yxatga olish xabari yuborish (adminga)
  sendRegNotify(role);

  document.getElementById(role+'-reg').style.display = 'none';
  const qDiv = document.getElementById(role+'-q');
  qDiv.style.display = 'block';
  renderQuiz(role);
  document.getElementById(role+'-actions').style.display = 'block';
  qDiv.scrollIntoView({behavior:'smooth', block:'start'});
}

// ── Ro'yxat xabari adminga ──
async function sendRegNotify(role) {
  const info = userInfo[role];
  const sana = new Date().toLocaleString('uz-UZ', {
    timeZone:'Asia/Tashkent', day:'2-digit', month:'2-digit',
    year:'numeric', hour:'2-digit', minute:'2-digit'
  });
  const text =
`📋 <b>YANGI ISHTIROKCHI RO'YXATDAN O'TDI</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Ism:</b> ${escapeHTML(info.ism)}
🏢 <b>Tashkilot:</b> ${escapeHTML(info.tashkilot)}
📂 <b>Toifa:</b> ${roleNames[role]}
🕐 <b>Vaqt:</b> ${sana}
━━━━━━━━━━━━━━━━━━━━
⏳ Test boshlandi...`;

  await tgSend(ADMIN_ID, text);
}

// ── Savollarni chizish ──
function renderQuiz(role) {
  const container = document.getElementById(role+'-q');
  if (!container || container.children.length > 0) return;
  const qs = (window.CUR_LANG==='ru' && window.quizDataRu && quizDataRu[role]) ? quizDataRu[role] : quizData[role];
  container.innerHTML = qs.map((q, qi) => `
    <div class="q-item" id="${role}-qi-${qi}">
      <div class="q-num">${tr('savol')} ${qi+1} / ${qs.length}</div>
      <div class="q-text">${escapeHTML(q.q)}</div>
      <div class="q-opts">
        ${q.opts.map((o,oi) => `<div class="q-opt" id="${role}-opt-${qi}-${oi}" onclick="selectOpt('${role}',${qi},${oi})">${String.fromCharCode(65+oi)}. ${escapeHTML(o)}</div>`).join('')}
      </div>
    </div>`).join('');
}

function selectOpt(role, qi, oi) {
  if (userAnswers[role][qi] !== undefined) return;
  userAnswers[role][qi] = oi;
  document.querySelectorAll(`#${role}-qi-${qi} .q-opt`)
    .forEach((el,i) => el.classList.toggle('selected', i===oi));
}

// ── Natijani tekshirish ──
function checkQuiz(role) {
  if (_quizDone[role]) return;
  const qs = (window.CUR_LANG==='ru' && window.quizDataRu && quizDataRu[role]) ? quizDataRu[role] : quizData[role];
  const unanswered = qs.filter((_,i) => userAnswers[role][i] === undefined).length;
  if (unanswered > 0) {
    if (!confirm(tr('unanswered').replace('{n}', unanswered))) return;
  }

  _quizDone[role] = true;
  let score = 0;
  qs.forEach((q, qi) => {
    const ua = userAnswers[role][qi];
    if (ua === undefined) return;
    qs[qi].opts.forEach((_,oi) => {
      const el = document.getElementById(`${role}-opt-${qi}-${oi}`);
      if (!el) return;
      el.classList.remove('correct','wrong','selected');
      if (oi === q.a)  el.classList.add('correct');
      else if (oi===ua) el.classList.add('wrong');
    });
    if (ua === q.a) score++;
  });

  const pct    = Math.round(score / qs.length * 100);
  const passed = pct >= 75;
  const res    = document.getElementById(role+'-res');
  res.style.display     = 'block';
  res.style.borderColor = passed ? '#16a34a' : 'var(--blue)';
  res.style.background  = passed ? '#dcfce7' : '#eff6ff';
  const emoji = passed ? '🏆' : pct >= 60 ? '👍' : '📚';
  res.innerHTML = `
    <div style="font-size:24px;margin-bottom:6px">${emoji}</div>
    <div style="font-size:20px;font-weight:900;color:var(--navy)">${score} / ${qs.length} — ${pct}%</div>
    <div style="font-size:13px;margin-top:6px;color:${passed?'#15803d':'var(--muted)'}">
      ${passed ? tr('res_pass') : pct>=60 ? tr('res_mid') : tr('res_low')}
    </div>`;

  // Admin ga natija yuborish
  sendResultToAdmin(role, score, pct, passed);

  // Natijani saqlash (localStorage)
  saveQuizResult(role, score, qs.length);
  try {
    const info = userInfo[role] || {};
    if (info.ism) {
      localStorage.setItem('quiz_' + role, JSON.stringify({ score, pct, ism: info.ism, tashkilot: info.tashkilot || '—', sana: new Date().toLocaleDateString('uz-UZ') }));
      if (typeof updateDashboard === 'function') updateDashboard();
    }
  } catch(e) {}

  // Sertifikat
  if (passed) showCertificate(role, score, pct);

  res.scrollIntoView({behavior:'smooth', block:'start'});
}

// ── Qayta boshlash ──
function resetQuiz(role) {
  _quizDone[role] = false;
  userAnswers[role] = {};
  userInfo[role]    = {};
  const q = document.getElementById(role+'-q');
  q.innerHTML = '';
  q.style.display = 'none';
  document.getElementById(role+'-actions').style.display = 'none';
  const res = document.getElementById(role+'-res');
  res.style.display = 'none';
  res.innerHTML = '';
  document.getElementById(role+'-cert').innerHTML = '';
  document.getElementById(role+'-reg').style.display = 'block';
  document.getElementById(role+'-ism').value = '';
  document.getElementById(role+'-tashkilot').value = '';
  document.getElementById(role+'-ism').style.borderColor = '';
}

// ════════════════════════════════════════
// ── TELEGRAM FUNKSIYALARI ──
// ════════════════════════════════════════

// Asosiy yuborish funksiyasi (worker yoki direct rejim)
async function tgSend(chatId, text) {
  const mode = tgMode();
  if (mode === 'none') {
    console.warn('⚠️ Telegram sozlanmagan — sayt.html dagi BOT_TOKEN yoki TG_PROXY_URL ni to\'ldiring');
    return null;
  }
  try {
    if (mode === 'worker') {
      const r = await fetch(TG_PROXY_URL, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ action: 'sendMessage', chatId: chatId, text: text })
      });
      return await r.json();
    }
    // direct: to'g'ridan-to'g'ri Telegram Bot API
    const chat = tgResolveChat(chatId);
    if (!chat) return null; // admin ID kiritilmagan — jimgina o'tkazib yuboriladi
    const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ chat_id: chat, text: String(text).slice(0,4096), parse_mode: 'HTML' })
    });
    return await r.json();
  } catch(e) {
    console.warn('TG xato:', e);
    return null;
  }
}

// Sertifikat rasmini (canvas) yuborish (worker yoki direct rejim)
async function tgSendPhoto(chatId, canvas, caption) {
  const mode = tgMode();
  if (mode === 'none') {
    console.warn('⚠️ Telegram sozlanmagan — sayt.html dagi BOT_TOKEN yoki TG_PROXY_URL ni to\'ldiring');
    return null;
  }
  try {
    if (mode === 'worker') {
      const photoBase64 = canvas.toDataURL('image/png', 1.0);
      const r = await fetch(TG_PROXY_URL, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ action: 'sendPhoto', chatId: chatId, photoBase64: photoBase64, caption: caption })
      });
      return await r.json();
    }
    // direct: to'g'ridan-to'g'ri Telegram Bot API (rasm FormData bilan)
    const chat = tgResolveChat(chatId);
    if (!chat) return null;
    const blob = await new Promise(res => canvas.toBlob(res, 'image/png', 1.0));
    if (!blob) return null;
    const fd = new FormData();
    fd.append('chat_id', chat);
    fd.append('caption', String(caption || '').slice(0, 1024));
    fd.append('parse_mode', 'HTML');
    fd.append('photo', blob, 'ozlashtirildi.png');
    const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, { method: 'POST', body: fd });
    return await r.json();
  } catch(e) {
    console.warn('TG photo xato:', e);
    return null;
  }
}

// Admin ga natija
async function sendResultToAdmin(role, score, pct, passed) {
  const info = userInfo[role];
  const sana = new Date().toLocaleString('uz-UZ', {
    timeZone:'Asia/Tashkent', day:'2-digit', month:'2-digit',
    year:'numeric', hour:'2-digit', minute:'2-digit'
  });
  const bars   = '█'.repeat(Math.round(pct/10)) + '░'.repeat(10-Math.round(pct/10));
  const isRu = (window.CUR_LANG === 'ru');
  const status = passed
    ? (isRu ? '✅ СДАНО — ОСВОЕНО' : '✅ O\'TDI — O‘ZLASHTIRILDI')
    : pct>=60 ? (isRu ? '⚠️ НЕ ДОСТАТОЧНО' : '⚠️ YETARLI EMAS')
    : (isRu ? '❌ НЕ СДАНО' : '❌ O\'TMADI');

  const text =
`🎓 <b>TEST NATIJASI</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Ism:</b> ${escapeHTML(info.ism)}
🏢 <b>Tashkilot:</b> ${escapeHTML(info.tashkilot)}
📂 <b>Toifa:</b> ${roleNames[role]}
━━━━━━━━━━━━━━━━━━━━
📊 <b>Natija:</b> ${score}/20 to'g'ri
📈 <b>Foiz:</b> ${pct}%
${bars}
🏅 <b>Status:</b> ${status}
━━━━━━━━━━━━━━━━━━━━
🕐 <b>Sana:</b> ${sana}
🌐 sportedu.uz | UzNADO`;

  await tgSend(ADMIN_ID, text);
}

// ════════════════════════════════════════
// ── SERTIFIKAT (Canvas) ──
// ════════════════════════════════════════
// Telegram xatosini aniq va tushunarli matnga aylantirish
function tgErrText(r) {
  if (!r) return tr('cert_ch_net');
  const d = String(r.description || '').toLowerCase();
  if (d.includes('chat not found')) return tr('tg_e_chat');
  if (d.includes('not enough rights') || d.includes('need administrator') || d.includes('have no rights')) return tr('tg_e_rights');
  if (d.includes('kicked') || d.includes('not a member') || d.includes('bot was blocked')) return tr('tg_e_kicked');
  if (d.includes('unauthorized') || r.error_code === 401) return tr('tg_e_token');
  return tr('tg_e_other') + (r.description ? ' — ' + r.description : '');
}

const certMeta = {}; // har bir rol uchun sertifikat ma'lumotlari (qayta yuborish uchun)

function showCertificate(role, score, pct) {
  const info    = userInfo[role];
  if (!info || !_validName(info.ism || '')) {
    const _cd = document.getElementById(role+'-cert');
    if (_cd) _cd.innerHTML = '<div style="font-size:13px;font-weight:700;color:#991b1b;padding:12px 14px;background:#fee2e2;border-radius:10px">⚠️ Ism-familiya kiritilmagan yoki noto\'g\'ri — o‘zlashtirish tasdiqnomasi berilmadi. «Qayta boshlash» tugmasini bosib, ismingizni to\'g\'ri yozing.</div>';
    return;
  }
  const isRu    = (window.CUR_LANG === 'ru');
  const certId  = 'AD-' + Date.now().toString(36).toUpperCase();
  const sana    = new Date().toLocaleDateString(isRu ? 'ru-RU' : 'uz-UZ', {day:'2-digit', month:'long', year:'numeric'});
  const certDiv = document.getElementById(role+'-cert');
  certMeta[role] = { score, pct, certId, sana };

  certDiv.innerHTML = `
    <div class="cert-wrap show">
      <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:10px;padding:10px 14px;background:linear-gradient(135deg,#dcfce7,#d1fae5);border-radius:10px;border-left:4px solid #16a34a">
        ${tr('cert_ready')}
      </div>
      <div class="cert-canvas-wrap">
        <canvas id="${role}-canvas" width="2000" height="1333"></canvas>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:12px">
        <button class="cert-dl-btn" onclick="downloadCert('${role}')">
          ${tr('cert_dl')}
        </button>
        <button class="cert-tg-btn" id="cert-channel-btn-${role}" onclick="sendCertToChannel('${role}')">
          ${tr('cert_ch_btn')}
        </button>
        <div id="cert-channel-status-${role}" style="font-size:12px;color:var(--muted);padding:6px 10px;background:var(--surface);border-radius:20px">
          ${tr('cert_sending')}
        </div>
      </div>
    </div>`;

  setTimeout(async () => {
    await drawCert(role, info.ism, info.tashkilot, roleNames[role], score, pct, certId, sana);
    const _cv = document.getElementById(role+'-canvas');
    if (_cv) _cv.dataset.pct = pct;
    // Sertifikat chizilib bo'lgach — darhol kanalga avtomatik yuborish
    sendCertToChannel(role);
  }, 50);
}

// Sertifikatni @antidopi kanaliga yuborish (avtomatik + tugma orqali qayta)
async function sendCertToChannel(role) {
  const canvas = document.getElementById(role+'-canvas');
  const info   = userInfo[role];
  const meta   = certMeta[role];
  const status = document.getElementById(`cert-channel-status-${role}`);
  const btn    = document.getElementById(`cert-channel-btn-${role}`);
  if (!canvas || !meta || !info.ism) return;

  if (tgMode() === 'none') {
    if (status) {
      status.style.background='#fef3c7'; status.style.color='#92400e';
      status.textContent=tr('cert_ch_nocfg');
    }
    if (btn) { btn.disabled = true; btn.style.opacity = '.5'; }
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = tr('cert_ch_sending'); }
  if (status) {
    status.style.background='var(--surface)'; status.style.color='var(--muted)';
    status.textContent = tr('cert_sending');
  }

  const isRu = (window.CUR_LANG === 'ru');
  const roleNamesRu = { rahbar: '🧑‍💼 Руководитель', murabbiy: '🏋️ Тренер', metodist: '📋 Методист', sportchi: '🏃 Спортсмен' };
  const captionTitle = isRu ? '🏆 <b>ANTIDOPING KURSI — ОСВОЕН</b>' : '🏆 <b>ANTIDOPING FANINI O‘ZLASHTIRDI</b>';
  const roleDisplay = isRu ? (roleNamesRu[role] || roleNames[role]) : roleNames[role];
  const scoreLabel = isRu ? 'правильных' : 'to\'g\'ri';
  const statusLabel = isRu ? '✅ Успешно освоено' : '✅ Muvaffaqiyatli o‘zlashtirildi';

  const resLabel = isRu ? 'Результат' : 'Natija';
  const caption =
`${captionTitle}
━━━━━━━━━━━━━━━━━━
👤 <b>${escapeHTML(info.ism)}</b>
🏢 ${escapeHTML(info.tashkilot)}
📂 ${roleDisplay}
📊 ${meta.score}/20 (${scoreLabel}) — ${meta.pct}%
📅 ${meta.sana}
🆔 ${meta.certId}
🏅 <b>${resLabel}:</b> ${statusLabel}
━━━━━━━━━━━━━━━━━━
🌐 sportedu.uz | UzNADO`;

  try {
    let r1 = await tgSendPhoto(CERT_CHANNEL, canvas, caption);
    if (!(r1 && r1.ok)) {
      // Vaqtinchalik tarmoq/limit xatosi bo'lishi mumkin — 1.5s kutib, yana bir marta urinamiz
      await new Promise(res => setTimeout(res, 1500));
      r1 = await tgSendPhoto(CERT_CHANNEL, canvas, caption);
    }
    // Adminga nusxa (sozlangan bo'lsa) — asosiy yuborishni kutdirmaydi
    tgSendPhoto(ADMIN_ID, canvas, `🏆 <b>Yangi o‘zlashtirish tasdiqnomasi!</b>\n👤 ${escapeHTML(info.ism)}\n📂 ${roleNames[role]}\n📊 ${meta.pct}%`);

    const ok = r1 && r1.ok;
    if (!ok) console.warn('TG kanal xatosi:', r1); // aniq sababni konsolda ko'rish uchun

    // Agar so'rov umuman yetib bormagan bo'lsa — sababini avtomatik aniqlash
    let errText = tgErrText(r1);
    if (!r1 && tgMode() === 'direct') {
      try {
        await fetch('https://api.telegram.org/', { mode: 'no-cors', cache: 'no-store' });
        errText = tr('tg_e_cors');    // domen ochiq, demak brauzer/kengaytma to'sgan
      } catch(_) {
        errText = tr('tg_e_blocked'); // domenning o'zi ochilmayapti — provayder bloki
      }
    }
    if (!r1 && tgMode() === 'worker') {
      try {
        const ping = await fetch(TG_PROXY_URL, { cache: 'no-store' }); // GET
        const t = await ping.text();
        // Bizning worker GET ga {"ok":false,"error":"Faqat POST"} qaytaradi
        errText = t.includes('Faqat POST') ? tr('tg_e_wpost') : tr('tg_e_wcode');
      } catch(_) {
        try {
          await fetch(TG_PROXY_URL, { mode: 'no-cors', cache: 'no-store' });
          errText = tr('tg_e_wcode');    // manzil ochiq, lekin bizning kod emas (CORS yo'q)
        } catch(_2) {
          errText = tr('tg_e_wblocked'); // worker manzili umuman ochilmayapti
        }
      }
    }

    if (status) {
      status.style.background = ok ? '#dcfce7' : '#fee2e2';
      status.style.color      = ok ? '#15803d' : '#991b1b';
      status.textContent      = ok ? tr('cert_ch_ok') : errText;
    }
    if (btn) {
      if (ok) {
        btn.textContent = tr('cert_ch_done');
        btn.style.background = '#16a34a';
        btn.disabled = true;
      } else {
        btn.textContent = tr('cert_ch_retry');
        btn.disabled = false;
      }
    }
  } catch(e) {
    if (status) {
      status.style.background='#fee2e2'; status.style.color='#991b1b';
      status.textContent = tr('cert_ch_net');
    }
    if (btn) { btn.textContent = tr('cert_ch_retry'); btn.disabled = false; }
  }
}

// ═══ SERTIFIKAT — zamonaviy feruza dizayn ═══
// QR kod: https://t.me/antidopi (oldindan hisoblangan matritsa — kutubxona kerak emas)
const QR_N=25;
const QR_ROWS=["1fd4c7f","104b541","1755f5d","1745e5d","174945d","105cc41","1fd557f","000e500","1460225","10be74b","137af3d","1420368","1ee3141","011db63","1851e0d","04a34b8","1fd8ff2","0014911","1fde151","1044b12","174bbf1","174d396","1755cbb","10475b0","1fd8f49"];

// ═══ SERTIFIKAT SHABLONI — haqiqiy dizayn rasmi (base64, offlayn ishlaydi) ═══
const CERT_W = 2000, CERT_H = 1333;
const CERT_TEAL = '#1BA5B0', CERT_NAVY = '#16283c', CERT_GRAY = '#6b7a92';
const CERT_ROW_BG = '#f6f5fb';   // panel/qator foni (namunadan olingan)
const CERT_NAME_BG = '#fdfaff'; // ism maydoni foni (sal ochroq)
// Piksel maydonlari (2000x1333 shablon o'lchamida, taxminiy aniqlangan):
const CERT_TITLE_BOX  = [710, 275, 1700, 412]; // O'zlashtirildi sarlavhasi
const CERT_MAZKUR_BOX = [538, 538, 1872, 575]; // Tasdiq matni qatori
const CERT_NAME_BOX   = [751, 607, 1676, 674];   // Ism-familiya
const CERT_ORG_BOX   = [751, 690, 1676, 730];   // Tashkilot / muassasa nomi
const CERT_ROLE_BOX  = [995, 818, 1600, 864];   // "... bo'yicha malaka testi"
const CERT_SCORE_BOX = [995, 870, 1600, 924];   // "N/20 to'g'ri javob — X%"
const CERT_DATE_BOX  = [900, 1020, 1075, 1090]; // Berilgan sana
const CERT_ID_BOX    = [1350, 1015, 1650, 1090];// Qayd ID
const CERT_TEMPLATE_SRC = 'assets/img/ozlashtirildi-template.jpg';

let _certTemplateImg = null, _certTemplatePromise = null;
function loadCertTemplate(){
  if (_certTemplatePromise) return _certTemplatePromise;
  _certTemplatePromise = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => { _certTemplateImg = img; resolve(img); };
    img.onerror = () => { console.warn('Sertifikat shabloni yuklanmadi'); resolve(null); };
    img.src = CERT_TEMPLATE_SRC;
  });
  // Poppins shrifti tayyor bo'lishini ham kutamiz (mavjud bo'lsa)
  if (document.fonts && document.fonts.load) {
    Promise.all([
      document.fonts.load('700 40px Poppins'),
      document.fonts.load('400 40px Poppins')
    ]).catch(()=>{});
  }
  return _certTemplatePromise;
}
// Shablon faqat tasdiqnoma yaratilayotganda (lazy) yuklanadi



function drawCert(role, ism, tashkilot, roleName, score, pct, certId, sana) {
  const canvas = document.getElementById(role+'-canvas');
  if (!canvas) return Promise.resolve();
  canvas.width = CERT_W; canvas.height = CERT_H;
  const ctx = canvas.getContext('2d');

  const finish = (img) => {
    // 1) Haqiqiy sertifikat shablonini chizish (o'zgarmas dizayn)
    if (img) ctx.drawImage(img, 0, 0, CERT_W, CERT_H);
    else { ctx.fillStyle='#ffffff'; ctx.fillRect(0,0,CERT_W,CERT_H); }

    ctx.textBaseline = 'alphabetic';

    const isRu = (window.CUR_LANG === 'ru');
    const roleNamesRu = { rahbar: 'Руководитель', murabbiy: 'Тренер', metodist: 'Методист', sportchi: 'Спортсмен' };

    // ── 1. SARLAVHA: O'ZLASHTIRILDI (RU: ОСВОЕНО) ──
    const titleText = isRu ? "ОСВОЕНО" : "O\u2018ZLASHTIRILDI";
    drawCertField(ctx, img, CERT_TITLE_BOX, titleText, {
      font: 'Poppins', weight: 800, color: CERT_NAVY, align:'center',
      maxSizeRatio: 0.85, minSize: 60, bg: '#fbfbfd'
    });

    // ── 2. TASDIQ MATNI: Mazkur hujjat... (RU: Настоящий документ...) ──
    const mazkurText = isRu
      ? "Настоящий документ подтверждает успешное освоение курса:"
      : "Mazkur hujjat antidoping ta\u2018lim kursini muvaffaqiyatli o\u2018zlashtirganligini tasdiqlaydi:";
    drawCertField(ctx, img, CERT_MAZKUR_BOX, mazkurText, {
      font: 'Poppins', weight: 500, color: CERT_GRAY, align:'center',
      maxSizeRatio: 0.72, minSize: 14, bg: '#fdfaff'
    });

    // ── ISM (aniq piksel koordinatasi bilan, teal rangda) ──
    drawCertField(ctx, img, CERT_NAME_BOX, ism.toUpperCase(), {
      font: 'Poppins', weight: 700, color: CERT_TEAL, align:'center',
      maxSizeRatio: 0.86, minSize: 18, bg: CERT_NAME_BG
    });

    // ── TASHKILOT / MUASSASA ──
    // Tashkilot kiritilmasa ham shablondagi namuna matn (boshqa muassasa nomi) tozalanadi
    drawCertField(ctx, img, CERT_ORG_BOX, (tashkilot && tashkilot !== '—') ? tashkilot : '', {
      font: 'Poppins', weight: 500, color: CERT_GRAY, align:'center',
      maxSizeRatio: 0.7, minSize: 14
    });

    // ── TEST TURI (rol) ──
    const roleText = isRu
      ? 'Квалификационный тест: ' + (roleNamesRu[role] || roleName.replace(/^\S+\s/,''))
      : roleName.replace(/^\S+\s/,'')+' bo\u2019yicha malaka testi';

    drawCertField(ctx, img, CERT_ROLE_BOX, roleText, {
      font: 'Poppins', weight: 600, color: CERT_GRAY, align:'left',
      maxSizeRatio: 0.62, minSize: 14
    });

    // ── NATIJA (ball / foiz) ──
    const scoreText = isRu
      ? score+'/20 правильных ответов  \u2014  '+pct+'%'
      : score+'/20 to\u2018g\u2018ri javob  \u2014  '+pct+'%';

    drawCertField(ctx, img, CERT_SCORE_BOX, scoreText, {
      font: 'Poppins', weight: 700, color: CERT_TEAL, align:'left',
      maxSizeRatio: 0.72, minSize: 20
    });

    // ── SANA ──
    drawCertLabelValue(ctx, img, CERT_DATE_BOX, tr('cert_field_date'), sana);

    // ── SERTIFIKAT ID ──
    drawCertLabelValue(ctx, img, CERT_ID_BOX, tr('cert_field_id'), certId);
    if (window.CERT_QR_OVERLAY && typeof window.drawCertQR === 'function') window.drawCertQR(ctx);
  };

  return loadCertTemplate().then(finish);
}

// Ma'lum bir maydonni fon rangi bilan tozalab, yangi matnni markazlashtirib yozadi
function drawCertField(ctx, img, box, text, opt) {
  const [left, top, right, bottom] = box;
  const w = right-left, h = bottom-top;
  // Fonni tozalash: shu maydon atrofidagi neytral (deyarli oq) fon rangi bilan tekis qoplaymiz.
  // Shablonning bu qismlari deyarli bir xil och rangda bo'lgani uchun (oq/och lavanda),
  // tekis to'ldirish original dizaynni buzmaydi va qo'shni matnlarga tegmaydi.
  ctx.fillStyle = opt.bg || CERT_ROW_BG;
  ctx.fillRect(left-6, top-6, w+12, h+12);

  let size = Math.round(h*opt.maxSizeRatio);
  const minSize = opt.minSize;
  ctx.fillStyle = opt.color;
  ctx.textAlign = opt.align;
  const maxW = w*0.96;
  while (size > minSize) {
    ctx.font = `${opt.weight} ${size}px ${opt.font}, Arial, sans-serif`;
    if (ctx.measureText(text).width <= maxW) break;
    size -= 2;
  }
  const x = opt.align === 'center' ? left + w/2 : left;
  const y = top + h/2 + size*0.35;
  ctx.fillText(text, x, y);
}

// Yorliq (label) + qiymat juftligini chizadi (masalan "Berilgan sana:" + sana)
function drawCertLabelValue(ctx, img, box, label, value) {
  const [left, top, right, bottom] = box;
  const w = right-left, h = bottom-top;
  ctx.fillStyle = CERT_ROW_BG;
  ctx.fillRect(left-6, top-6, w+12, h+12);
  ctx.textAlign = 'left';
  ctx.fillStyle = CERT_NAVY;
  ctx.font = `700 ${Math.round(h*0.34)}px Poppins, Arial, sans-serif`;
  ctx.fillText(label, left, top + h*0.32);
  ctx.fillStyle = CERT_GRAY;
  ctx.font = `400 ${Math.round(h*0.34)}px Poppins, Arial, sans-serif`;
  ctx.fillText(value, left, top + h*0.82);
}

// Matnni yoy bo'ylab chizish
function arcText(ctx, text, cx, cy, r, a1, a2, font, color, flip){
  ctx.save(); ctx.fillStyle=color; ctx.font=font;
  ctx.textAlign='center';
  const n=text.length;
  for(let i=0;i<n;i++){
    const a=a1+(a2-a1)*(n===1?0.5:i/(n-1));
    const px=cx+Math.cos(a)*r, py=cy+Math.sin(a)*r;
    ctx.save(); ctx.translate(px,py);
    ctx.rotate(a+(flip?-Math.PI/2:Math.PI/2));
    ctx.fillText(text[i],0,0);
    ctx.restore();
  }
  ctx.restore();
}

// Oltiburchak yo'li
function hexPath(ctx,cx,cy,r){
  ctx.beginPath();
  for(let i=0;i<6;i++){
    const a=Math.PI/6+i*Math.PI/3;
    const x=cx+Math.cos(a)*r, y=cy+Math.sin(a)*r;
    i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
  }
  ctx.closePath();
}


function downloadCert(role, ism) {
  ism = (userInfo[role] && userInfo[role].ism) || ism || 'ozlashtirildi';
  const canvas = document.getElementById(role+'-canvas');
  if (!canvas) return;
  const isRu = (window.CUR_LANG === 'ru');
  const prefix = isRu ? 'Osvoeno_' : 'Ozlashtirildi_';
  const a = document.createElement('a');
  a.download = prefix + ism.replace(/\s+/g,'_') + '_Antidoping.png';
  a.href = canvas.toDataURL('image/png',1.0);
  a.click();
}

// ════════════════════════════════════════════


// ════════════════════════════════════════════
// 📊 PROGRESS DASHBOARD
// ════════════════════════════════════════════
function updateDashboard(){
  const roles=['rahbar','murabbiy','metodist','sportchi'];
  const icons={rahbar:'🧑‍💼',murabbiy:'🏋️',metodist:'📋',sportchi:'🏃'};
  const isRu = window.CUR_LANG === 'ru';
  const names=isRu
    ? {rahbar:'Руководители',murabbiy:'Тренеры',metodist:'Методисты',sportchi:'Спортсмены'}
    : {rahbar:'Rahbarlar',murabbiy:'Murabbiylar',metodist:'Metodistlar',sportchi:'Sportchilar'};
  const data=roles.map(r=>{
    const saved=safeJSONParse(localStorage.getItem('quiz_'+r), null);
    return{role:r,icon:icons[r],name:names[r],saved};
  });
  const hasDone=data.some(d=>d.saved);
  const dashMod=document.getElementById('dash-modules');
  const dashCert=document.getElementById('dash-certs');
  const dashLb=document.getElementById('dash-leaderboard');
  if(!dashMod)return;

  if(!hasDone){
    dashMod.innerHTML=`<div style="text-align:center;padding:24px;color:var(--muted)"><div style="font-size:32px;margin-bottom:8px">📋</div><p style="font-size:13px">${isRu?'Тесты ещё не пройдены':'Hali test topshirilmagan'}</p></div>`;
    if(dashCert) dashCert.innerHTML=`<p style="font-size:13px;color:var(--muted);text-align:center;padding:12px">${isRu?'При 75%+ выдаётся документ «Освоено»':'75%+ da O‘zlashtirildi tasdiqnomasi beriladi'}</p>`;
    if(dashLb) dashLb.innerHTML=`<p style="font-size:12px;color:#8faac8;text-align:center">${isRu?'Результатов пока нет':'Natijalar yo\x27q'}</p>`;
    return;
  }
  dashMod.innerHTML=data.map(d=>{
    const pct=d.saved?d.saved.pct:0;
    const score=d.saved?d.saved.score:0;
    const passed=pct>=75;
    const barColor=passed?'#16a34a':pct>=60?'#d97706':'#dc2626';
    return`<div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-size:13px;font-weight:700;color:var(--navy)">${d.icon} ${d.name}</span>
        <span style="font-size:12px;font-weight:800;color:${barColor}">${d.saved?`${score}/20 — ${pct}%`:tr('not_taken')}</span>
      </div>
      <div style="background:#f1f5f9;border-radius:30px;height:10px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:${barColor};border-radius:30px;transition:width 1s"></div>
      </div>
      ${passed?'<div style="font-size:11px;color:#15803d;font-weight:700;margin-top:3px">'+tr('cert_got')+'</div>':''}
    </div>`;
  }).join('');

  const certs=data.filter(d=>d.saved&&d.saved.pct>=75);
  dashCert.innerHTML=certs.length?certs.map(d=>`
    <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#f0fdf4;border-radius:10px;margin-bottom:8px">
      <div style="font-size:24px">${d.icon}</div>
      <div><div style="font-size:13px;font-weight:800;color:var(--navy)">${d.name}</div>
      <div style="font-size:11px;color:var(--green)">${d.saved.score}/20 — ${d.saved.pct}% · ${escapeHTML(d.saved.ism||'')}</div></div>
      <span style="margin-left:auto;font-size:18px">🏆</span>
    </div>`).join(''):`<p style="font-size:13px;color:var(--muted);text-align:center;padding:12px">${isRu?'При 75%+ выдаётся документ «Освоено»':'75%+ da O‘zlashtirildi tasdiqnomasi beriladi'}</p>`;

  const all=roles.flatMap(r=>{const s=safeJSONParse(localStorage.getItem('quiz_'+r), null);return s?[{...s,role:r,icon:icons[r]}]:[]});
  all.sort((a,b)=>b.pct-a.pct);
  dashLb.innerHTML=all.length?all.slice(0,5).map((s,i)=>`
    <div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.1)">
      <span style="font-size:14px">${['🥇','🥈','🥉','4️⃣','5️⃣'][i]}</span>
      <span style="font-size:12px;color:#e2e8f0;flex:1">${escapeHTML(s.ism||(isRu?'Неизвестно':'Noma\x27lum'))} ${s.icon}</span>
      <span style="font-size:12px;font-weight:800;color:${s.pct>=75?'#86efac':'#fbbf24'}">${s.pct}%</span>
    </div>`).join(''):`<p style="font-size:12px;color:#8faac8;text-align:center">${isRu?'Результатов пока нет':'Natijalar yo\x27q'}</p>`;
}
setTimeout(updateDashboard, 500);

function activeScenarios(){
  return (window.CUR_LANG==='ru' && window.scenariosRu) ? scenariosRu : scenarios;
}
function renderScenarios(){
  const cont=document.getElementById('scenario-cards');
  if(!cont)return;
  cont.innerHTML=activeScenarios().map((sc,si)=>`
    <div style="background:${sc.bg};border:2px solid ${sc.color}22;border-radius:20px;padding:24px;position:relative;overflow:hidden" id="sc-${sc.id}">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${sc.color}"></div>
      <div style="font-size:32px;margin-bottom:10px">${sc.icon}</div>
      <h4 style="font-size:16px;font-weight:800;color:var(--navy);margin-bottom:6px">${sc.title}</h4>
      <p style="font-size:13px;color:var(--muted);margin-bottom:16px;line-height:1.6">${sc.desc}</p>
      <div style="display:flex;flex-direction:column;gap:8px" id="sc-choices-${sc.id}">
        ${sc.choices.map((ch,ci)=>`
          <button onclick="pickScenario('${sc.id}',${ci})"
            style="text-align:left;padding:10px 14px;border-radius:10px;border:1.5px solid ${sc.color}33;background:#fff;cursor:pointer;font-size:13px;font-family:inherit;color:var(--navy);transition:.2s;font-weight:500"
            onmouseover="this.style.borderColor='${sc.color}';this.style.background='${sc.bg}'"
            onmouseout="this.style.borderColor='${sc.color}33';this.style.background='#fff'"
            id="sc-btn-${sc.id}-${ci}">
            ${String.fromCharCode(65+ci)}. ${ch.text}
          </button>`).join('')}
      </div>
      <div id="sc-result-${sc.id}" style="display:none;margin-top:14px;padding:12px 16px;border-radius:10px;font-size:13px;line-height:1.6"></div>
    </div>`).join('');
}

function pickScenario(id,ci){
  const sc=activeScenarios().find(s=>s.id===id);
  const ch=sc.choices[ci];
  // Barcha tugmalarni o'chirish
  sc.choices.forEach((_,i)=>{
    const btn=document.getElementById(`sc-btn-${id}-${i}`);
    btn.disabled=true;
    btn.style.opacity=i===ci?'1':'0.5';
    btn.style.borderColor=i===ci?(ch.correct?'#16a34a':'#dc2626'):'#e2e8f0';
    btn.style.background=i===ci?(ch.correct?'#dcfce7':'#fee2e2'):'#fff';
  });
  const res=document.getElementById(`sc-result-${id}`);
  res.style.display='block';
  res.style.background=ch.correct?'#dcfce7':'#fee2e2';
  res.style.border=`1.5px solid ${ch.correct?'#86efac':'#fca5a5'}`;
  res.style.color=ch.correct?'#14532d':'#7f1d1d';
  res.innerHTML=ch.result;
  // Qayta o'ynash tugmasi
  setTimeout(()=>{
    const resetBtn=document.createElement('button');
    resetBtn.textContent=tr('retry');
    resetBtn.style.cssText='margin-top:10px;padding:6px 14px;border-radius:20px;border:1.5px solid currentColor;background:transparent;cursor:pointer;font-size:12px;font-weight:700;font-family:inherit';
    resetBtn.onclick=()=>renderScenarios();
    res.appendChild(resetBtn);
  },500);
}
renderScenarios();

async function sendRemind(type){
  const tgid=document.getElementById('rem-tgid').value.trim();
  const ism=_cleanName(document.getElementById('rem-ism').value, 60)||'Sportchi';
  const res=document.getElementById('remind-result');
  if(!tgid||!/^\d{5,12}$/.test(tgid)){
    res.style.display='block';
    res.innerHTML=`<div style="padding:12px;background:#fee2e2;border-radius:10px;font-size:13px;color:#991b1b">❌ Telegram ID to'g'ri kiriting (faqat raqamlar, 5-12 ta)</div>`;
    return;
  }
  const msg=remindMessages[type];
  const text=msg.text.replace(/{ism}/g, escapeHTML(ism));
  res.style.display='block';
  res.innerHTML=`<div style="padding:12px;background:#eff6ff;border-radius:10px;font-size:13px;color:var(--blue)">⏳ Yuborilmoqda...</div>`;
  const r=await tgSend(tgid,text);
  if(r&&r.ok){
    res.innerHTML=`<div style="padding:12px;background:#dcfce7;border-radius:10px;font-size:13px;color:#15803d;font-weight:700">${msg.emoji} Eslatma muvaffaqiyatli yuborildi!</div>`;
    await tgSend(ADMIN_ID,`🔔 <b>Eslatma yuborildi</b>\n👤 ${escapeHTML(ism)}\n📱 ID: ${tgid}\n📂 Tur: ${msg.title}`);
  }else{
    res.innerHTML=`<div style="padding:12px;background:#fee2e2;border-radius:10px;font-size:13px;color:#991b1b">❌ Yuborishda xato. Avval @uzdopingcom_bot ga /start yuboring!</div>`;
  }
}

// ═══ HAMBURGER MENU ═══
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}
document.addEventListener('click', e => {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger');
  if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
    closeMobileNav();
  }
});

// ═══ AKTIV NAVIGATSIYA (IntersectionObserver) ═══
const navSections = ['roles','wada-sec','checker-sec','toza-sec','faq-sec','links-sec'];
const navLinks = document.querySelectorAll('nav a');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => {
        const onclick = a.getAttribute('onclick') || '';
        a.classList.toggle('active', onclick.includes("'"+id+"'") || onclick.includes('"'+id+'"'));
      });
    }
  });
}, { threshold: 0.3 });
navSections.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// ═══ SCROLL PROGRESS BAR ═══
window.__progressBar = document.createElement('div');
window.__progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold-light));z-index:9999;transition:width .1s;width:0%';
document.body.prepend(window.__progressBar);

// ═══ QUIZ NATIJASINI SAQLASH (localStorage) ═══
function saveQuizResult(role, score, total) {
  try {
    const data = JSON.parse(localStorage.getItem('antidoping_results') || '{}');
    data[role] = { score, total, date: new Date().toISOString(), ism: (userInfo[role]||{}).ism || '' };
    localStorage.setItem('antidoping_results', JSON.stringify(data));
  } catch(e) {}
}
function loadSavedResults() {
  try {
    const data = JSON.parse(localStorage.getItem('antidoping_results') || '{}');
    Object.entries(data).forEach(([role, r]) => {
      const card = document.querySelector('.role-card.'+role);
      if (card && r.score !== undefined) {
        const badge = document.createElement('div');
        badge.style.cssText = 'position:absolute;top:10px;right:36px;background:#dcfce7;color:#15803d;font-size:10px;font-weight:800;padding:2px 8px;border-radius:20px;border:1px solid #86efac';
        badge.textContent = '✓ '+r.score+'/'+r.total;
        card.appendChild(badge);
      }
    });
  } catch(e) {}
}
loadSavedResults();


// ── Yig'ish va almashtirish dvigateli ──
const _i18nTextNodes=[], _htmlSwaps=[], _phSwaps=[];
(function collectI18n(){
  try{
    const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);
    let n;
    while(n=w.nextNode()){
      const t=n.nodeValue.trim();
      if(t && Object.prototype.hasOwnProperty.call(RU_DICT,t)){
        _i18nTextNodes.push({node:n,uz:n.nodeValue,ru:n.nodeValue.replace(t,RU_DICT[t])});
      }
    }
    HTML_SWAP_LIST.forEach(pair=>{
      document.querySelectorAll(pair[0]).forEach(el=>_htmlSwaps.push({el,uz:el.innerHTML,ru:pair[1]}));
    });
    PH_I18N.forEach(pair=>{
      const el=document.getElementById(pair[0]);
      if(el)_phSwaps.push({el,uz:el.placeholder,ru:pair[1]});
    });
  }catch(e){console.warn('i18n collect xato:',e);}
})();

// FAQ bo'limini ochish/yopish
function toggleFaqSection(){
  const body=document.getElementById('faq-section-body');
  const arrow=document.getElementById('faq-section-arrow');
  if(!body)return;
  const open=body.style.display==='none'||body.style.display==='';
  body.style.display=open?'block':'none';
  if(arrow)arrow.style.transform=open?'rotate(180deg)':'rotate(0deg)';
}

function setLang(lang){
  window.CUR_LANG = lang;
  try{localStorage.setItem('site_lang',lang);}catch(e){}
  document.documentElement.lang = lang;
  const bu=document.getElementById('lang-btn-uz'), br=document.getElementById('lang-btn-ru');
  if(bu)bu.classList.toggle('active',lang==='uz');
  if(br)br.classList.toggle('active',lang==='ru');
  _i18nTextNodes.forEach(o=>{o.node.nodeValue = lang==='ru'?o.ru:o.uz;});
  _htmlSwaps.forEach(o=>{o.el.innerHTML = lang==='ru'?o.ru:o.uz;});
  _phSwaps.forEach(o=>{o.el.placeholder = lang==='ru'?o.ru:o.uz;});
  if(typeof renderScenarios==='function')renderScenarios();
  if(typeof updateDashboard==='function')updateDashboard();
  if(window.NXSearch&&typeof window.NXSearch.refreshLang==='function')window.NXSearch.refreshLang();
  if(typeof window.refreshAudioLang==='function')window.refreshAudioLang();
}

if(window.CUR_LANG==='ru') setLang('ru');

(function(){
'use strict';

/* ── CSV EKSPORT (PhD tadqiqot statistikasi uchun) ── */
window.exportResultsCSV = function(){
  var data = safeJSONParse(localStorage.getItem('antidoping_results'), {});
  var roles = Object.keys(data);
  if(!roles.length){ alert("Hozircha natija yo'q — avval test topshiring."); return; }
  var names = {rahbar:'Rahbar',murabbiy:'Murabbiy',metodist:'Metodist',sportchi:'Sportchi'};
  var rows = [['Rol','Ism','Ball','Jami','Foiz','Sana']];
  roles.forEach(function(r){
    var d = data[r]||{};
    var pct = d.total ? Math.round(d.score/d.total*100) : '';
    rows.push([names[r]||r, d.ism||'', d.score, d.total, pct+'%', (d.date||'').slice(0,10)]);
  });
  var csv = '\uFEFF' + rows.map(function(row){
    return row.map(function(c){
      var s = String(c==null?'':c);
      if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
      return '"'+s.replace(/"/g,'""')+'"';
    }).join(';');
  }).join('\r\n');
  var url = URL.createObjectURL(new Blob([csv], {type:'text/csv;charset=utf-8'}));
  var a = document.createElement('a');
  a.href = url;
  a.download = 'antidoping_natijalar.csv';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function(){ URL.revokeObjectURL(url); }, 2000);
};

window.clearMyResults = function(){
  var isRu = window.CUR_LANG === 'ru';
  var msg = isRu ? 'Удалить все сохранённые результаты тестов с этого устройства?' : "Qurilmada saqlangan barcha test natijalarini o'chirishni tasdiqlaysizmi?";
  if(!confirm(msg)) return;
  try{
    localStorage.removeItem('antidoping_results');
    ['rahbar','murabbiy','metodist','sportchi'].forEach(function(r){ localStorage.removeItem('quiz_'+r); });
  }catch(e){}
  if(typeof updateDashboard==='function') updateDashboard();
  window.dispatchEvent(new Event('storage'));
};

/* ── TASDIQNOMAGA OFLAYN QR-KOD (https://t.me/antidopi) ── */
window.CERT_QR_OVERLAY = true;
window.CERT_VERIFY_URL = 'https://t.me/antidopi';
window.drawCertQR = function(ctx){
  if (typeof QR_ROWS === 'undefined') return;
  var fx = 1790, fy = 982, fw = 152, fh = 154;
  ctx.fillStyle = '#ffffff'; ctx.fillRect(fx, fy, fw, fh);
  ctx.fillStyle = '#0a1f3d';
  var cell = Math.floor(130 / QR_N), size = cell * QR_N;
  var x0 = fx + Math.round((fw - size) / 2), y0 = fy + Math.round((fh - size) / 2);
  for(var r = 0; r < QR_N; r++){
    var bits = parseInt(QR_ROWS[r], 16);
    for(var c = 0; c < QR_N; c++)
      if((bits >> (QR_N - 1 - c)) & 1) ctx.fillRect(x0 + c * cell, y0 + r * cell, cell, cell);
  }
};
})();


/* ── TUNGI REJIM (CLEAN CSS VARIABLE DARK MODE) ── */
(function(){
  'use strict';
  function syncThemeBtn(dark){
    var b = document.getElementById('theme-btn');
    if (b) {
      b.textContent = dark ? '☀️' : '🌙';
      b.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }
  }
  window.toggleTheme = function(){
    var dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('site_theme', dark ? 'dark' : 'light'); } catch(e){}
    syncThemeBtn(dark);
  };
  try { syncThemeBtn(document.documentElement.classList.contains('dark')); } catch(e){}
})();

/* ── YUMSHOQ MODAL OVOZI (SCROLL SHIVIRLASHISIZ, MURABBIY/METODIST/MODAL UCHUN SOKIN OHANG) ── */
(function(){
  'use strict';
  var ctx = null, enabled = true, lastT = 0;
  try { enabled = localStorage.getItem('site_sound') !== 'off'; } catch(e){}
  function initBtn(){
    var b = document.getElementById('sound-btn');
    if (b) {
      b.textContent = enabled ? '🔊' : '🔇';
      b.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    }
  }
  initBtn();
  function getCtx(){
    if(!ctx){ try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){ return null; } }
    if(ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function softTone(freq, delay, peak, dur){
    var c = getCtx(); if(!c) return;
    var t = c.currentTime + (delay || 0);
    var o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + 0.025);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + dur + 0.03);
  }
  function softChime(){
    if(!enabled) return;
    var now = Date.now(); if(now - lastT < 160) return; lastT = now;
    // Yumshoq, mayin G4 -> C5 ohangi (hech qanday keskin chiyillashsiz)
    softTone(392.00, 0.00, 0.026, 0.28);
    softTone(523.25, 0.08, 0.022, 0.36);
  }
  window.toggleSound = function(){
    enabled = !enabled;
    try { localStorage.setItem('site_sound', enabled ? 'on' : 'off'); } catch(e){}
    initBtn();
    if(enabled) softTone(440.00, 0.00, 0.025, 0.22);
  };
  if(typeof window.openModal === 'function'){
    var _om = window.openModal;
    window.openModal = function(id){
      if(id !== 'audio') softChime();
      return _om.apply(this, arguments);
    };
  }
  // Klaviatura bilan role/extra kartalarni ochish
  document.addEventListener('keydown', function(e){
    if(e.key !== 'Enter' && e.key !== ' ') return;
    var card = e.target && e.target.closest && e.target.closest('.role-card, .extra-card, .lc-guide-bar');
    if(card){ e.preventDefault(); card.click(); }
  });
})();

(function(){
'use strict';
var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var band = document.getElementById('infoband');
if(!band) return;

var grid = band.querySelector(':scope > div > div:first-child');
var panels = grid ? Array.prototype.slice.call(grid.children) : [];
var flips = ['l','b','r'];
panels.forEach(function(p, i){
  p.classList.add('flip3d');
  p.setAttribute('data-flip', flips[i % 3]);
  p.style.transitionDelay = (i * 180) + 'ms';
  // panel ichidagi qatorlar ketma-ket chapdan kirib keladi
  var rows = p.querySelectorAll(':scope > div:last-child > div');
  Array.prototype.forEach.call(rows, function(r, j){
    r.classList.add('rowslide');
    r.style.transitionDelay = (500 + i*180 + j*110) + 'ms';
  });
});
if(grid) grid.classList.add('flip-wrap');

// S1–M3 chiplari pop bo'lib chiqadi
var chipWrap = band.querySelector('div[style*="flex-wrap"]');
var chips = chipWrap ? Array.prototype.slice.call(chipWrap.children) : [];
chips.forEach(function(c, i){
  c.classList.add('popchip');
  c.style.transitionDelay = (700 + i * 65) + 'ms';
});

// ── RAQAM SANAGICHLARI (2005, 25K+, 34, 99.1%) ──
var counters = [];
panels.forEach(function(p){
  var nums = p.querySelectorAll('div[style*="font-weight:900"]');
  Array.prototype.forEach.call(nums, function(el){
    var m = /^([0-9]+(?:\.[0-9]+)?)(.*)$/.exec(el.textContent.trim());
    if(m) counters.push({el:el, target:parseFloat(m[1]), suffix:m[2], dec:(m[1].indexOf('.')>-1)?1:0});
  });
});
function runCounters(){
  if(reduced) return;
  counters.forEach(function(c){
    var t0 = null, DUR = 1300;
    function step(ts){
      if(!t0) t0 = ts;
      var k = Math.min((ts - t0) / DUR, 1);
      k = 1 - Math.pow(1 - k, 3); // ease-out
      c.el.textContent = (c.target * k).toFixed(c.dec) + c.suffix;
      if(k < 1) requestAnimationFrame(step);
      else c.el.textContent = c.target.toFixed(c.dec).replace(/\.0$/,'') + c.suffix;
    }
    requestAnimationFrame(step);
  });
}

if(!('IntersectionObserver' in window) || reduced){
  band.classList.add('gathered');
} else {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        band.classList.add('gathered');
        runCounters();
        io.unobserve(band); // bir marta
      }
    });
  }, {threshold: 0.15});
  io.observe(band);
}
})();

(function(){
'use strict';
var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var title = document.getElementById('ai-title');
var sub = document.getElementById('ai-sub');
var sec = document.getElementById('checker-sec');
if(!title || !sec || reduced || !('IntersectionObserver' in window)) return;

var els = sub ? [title, sub] : [title];
var timers = [];

// Matnni DARHOL yashirish — tayyor yozuv ko'rinmasin
els.forEach(function(el){
  el.dataset.full = el.textContent;
  el.textContent = '\u00A0'; // joy saqlanadi (sakrash bo'lmasin), matn ko'rinmaydi
});

function stopAll(){
  timers.forEach(clearInterval); timers = [];
  els.forEach(function(el){ el.classList.remove('typing'); });
}
function typeEl(el, speed, done){
  var full = el.dataset.full;
  el.textContent = '';
  el.classList.add('typing');
  var i = 0;
  var t = setInterval(function(){
    i++;
    el.textContent = full.slice(0, i);
    if(i >= full.length){
      clearInterval(t);
      el.classList.remove('typing');
      if(done) done();
    }
  }, speed);
  timers.push(t);
}
var io = new IntersectionObserver(function(es){
  es.forEach(function(en){
    if(en.isIntersecting){
      stopAll();
      typeEl(title, 60, function(){
        if(sub) typeEl(sub, 20, null);
      });
    } else {
      // chiqib ketilganda tozalanadi — qaytib kelganda yana birin-ketin teriladi
      stopAll();
      els.forEach(function(el){
        // til almashgan bo'lsa, yangi (tarjima) matnni eslab qolamiz
        var cur = el.textContent;
        if(cur && cur !== '\u00A0' && cur.length >= el.dataset.full.length) el.dataset.full = cur;
        el.textContent = '\u00A0';
      });
    }
  });
}, {threshold: 0.15});
io.observe(sec);
})();

(function(){
'use strict';
var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var lastFire = 0;

/* 3D shar spritelari (oldindan chizib olinadi — sekin qurilmalarga yengil) */
var SPRITES = [];
['#f0c040','#ffd700','#e8a020','#fff3c4','#ffedb0'].forEach(function(col){
  var s = document.createElement('canvas'); s.width = s.height = 32;
  var g = s.getContext('2d');
  var gr = g.createRadialGradient(11, 11, 2, 16, 16, 16);
  gr.addColorStop(0, '#ffffff');
  gr.addColorStop(0.3, col);
  gr.addColorStop(1, 'rgba(120,80,0,0.9)');
  g.fillStyle = gr;
  g.beginPath(); g.arc(16, 16, 15, 0, 7); g.fill();
  SPRITES.push(s);
});
var STAR = document.createElement('canvas'); STAR.width = STAR.height = 48;
(function(){
  var g = STAR.getContext('2d');
  var gr = g.createRadialGradient(24,24,3,24,24,24);
  gr.addColorStop(0,'#fffbe6'); gr.addColorStop(.5,'#ffd700'); gr.addColorStop(1,'#c8860a');
  g.fillStyle = gr;
  g.beginPath();
  for(var i=0;i<10;i++){var r=i%2?10:23;var a=-Math.PI/2+i*Math.PI/5;
    g[i?'lineTo':'moveTo'](24+Math.cos(a)*r,24+Math.sin(a)*r);}
  g.closePath(); g.fill();
})();

function fanfare(){
  try{ if(localStorage.getItem('site_sound') === 'off') return; }catch(e){}
  var C = window.AudioContext || window.webkitAudioContext;
  if(!C) return;
  try{
    var c = new C();
    // G'alaba arpejio (yumshoqroq): do-mi-sol-do + yakuniy akkord
    [[523.25,0],[659.25,.12],[783.99,.24],[1046.5,.36]].forEach(function(n){
      var o=c.createOscillator(), g=c.createGain();
      o.type='sine'; o.frequency.value=n[0];
      var t=c.currentTime+n[1];
      g.gain.setValueAtTime(0.0001,t);
      g.gain.linearRampToValueAtTime(.045,t+0.02);
      g.gain.exponentialRampToValueAtTime(.0001,t+.34);
      o.connect(g); g.connect(c.destination); o.start(t); o.stop(t+.36);
    });
    [523.25,659.25,783.99].forEach(function(f){
      var o=c.createOscillator(), g=c.createGain();
      o.type='sine'; o.frequency.value=f;
      var t=c.currentTime+.52;
      g.gain.setValueAtTime(0.0001,t);
      g.gain.linearRampToValueAtTime(.03,t+0.03);
      g.gain.exponentialRampToValueAtTime(.0001,t+.9);
      o.connect(g); g.connect(c.destination); o.start(t); o.stop(t+.92);
    });
    setTimeout(function(){ c.close(); }, 2000);
  }catch(e){}
}

window.celebrate3D = function(){
  var now = Date.now();
  if(now - lastFire < 5000) return;
  lastFire = now;
  fanfare();
  if(reduced) return;

  var cv = document.createElement('canvas');
  cv.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;z-index:99999;pointer-events:none';
  document.body.appendChild(cv);
  var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
  var ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  var W = innerWidth, H = innerHeight;

  /* 3D zarrachalar: z-chuqurlik bilan */
  var parts = [];
  var bursts = [[W*.5, H*.32, 0], [W*.25, H*.42, 18], [W*.75, H*.42, 36], [W*.5, H*.55, 54]];
  bursts.forEach(function(b){
    for(var i=0;i<60;i++){
      var a = Math.random()*Math.PI*2;
      var sp = 2.5 + Math.random()*6;
      parts.push({
        x:b[0], y:b[1], z: Math.random()*2 - 1,
        vx:Math.cos(a)*sp, vy:Math.sin(a)*sp, vz:(Math.random()-.5)*.05,
        g:.075, delay:b[2], life:1, fade:.006+Math.random()*.006,
        rot:Math.random()*6.28, vr:(Math.random()-.5)*.25,
        sp: SPRITES[i%5], star: i%8===0,
        r: 3 + Math.random()*5
      });
    }
  });

  var frames = 0, raf;
  function loop(){
    ctx.clearRect(0,0,W,H);
    var alive = false;
    frames++;
    for(var i=0;i<parts.length;i++){
      var p = parts[i];
      if(frames < p.delay) { alive = true; continue; }
      p.vy += p.g; p.vx *= .988;
      p.x += p.vx; p.y += p.vy; p.z += p.vz;
      p.rot += p.vr; p.life -= p.fade;
      if(p.life <= 0 || p.y > H + 30) continue;
      alive = true;
      var depth = 1 + p.z * .55;               // 3D: yaqin — katta, uzoq — kichik
      var size = Math.max(p.r * depth, 1.2);
      ctx.globalAlpha = Math.max(Math.min(p.life, .3 + p.z*.2 + .7), 0) * Math.max(p.life,0);
      if(p.star){
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.scale(Math.abs(Math.cos(frames*.06 + i)) * .6 + .55, 1); // 3D aylanish illyuziyasi
        var ss = size * 3.2;
        ctx.drawImage(STAR, -ss/2, -ss/2, ss, ss);
        ctx.restore();
      } else {
        ctx.drawImage(p.sp, p.x - size, p.y - size, size*2, size*2);
      }
    }
    ctx.globalAlpha = 1;
    if(alive && frames < 300){ raf = requestAnimationFrame(loop); }
    else { cancelAnimationFrame(raf); cv.remove(); }
  }
  loop();
};

/* Sertifikat chizilganda avtomatik ishga tushadi */
if(typeof drawCert === 'function'){
  var _dc2 = drawCert;
  drawCert = function(){
    var res = _dc2.apply(this, arguments);
    if(res && res.then){ res.then(function(){ celebrate3D(); }); }
    else celebrate3D();
    return res;
  };
}
})();

(function(){
'use strict';
var overlay = null, placeholder = null;

function buildOverlay(){
  overlay = document.createElement('div');
  overlay.id = 'toza-modal';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99990;background:rgba(10,31,61,.65);display:none;overflow-y:auto;padding:30px 14px;backdrop-filter:blur(3px)';
  var inner = document.createElement('div');
  inner.id = 'toza-modal-inner';
  inner.style.cssText = 'max-width:1150px;margin:0 auto;position:relative;border-radius:20px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.45)';
  var x = document.createElement('button');
  x.textContent = '✕';
  x.title = 'Yopish';
  x.style.cssText = 'position:absolute;top:14px;right:14px;z-index:5;width:38px;height:38px;border-radius:50%;border:none;background:rgba(10,31,61,.85);color:#fff;font-size:16px;font-weight:800;cursor:pointer';
  x.onclick = closeTozaModal;
  inner.appendChild(x);
  overlay.appendChild(inner);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeTozaModal(); });
  document.body.appendChild(overlay);
}

window.openTozaModal = function(){
  var sec = document.getElementById('toza-sec');
  if(!sec) return;
  if(!overlay) buildOverlay();
  if(!placeholder){
    placeholder = document.createComment('toza-sec-joyi');
    sec.parentNode.insertBefore(placeholder, sec);
  }
  document.getElementById('toza-modal-inner').appendChild(sec);
  sec.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
};
window.closeTozaModal = function(){
  var sec = document.getElementById('toza-sec');
  if(overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
  if(sec && placeholder){
    sec.style.display = 'none';
    placeholder.parentNode.insertBefore(sec, placeholder.nextSibling);
  }
};
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && overlay && overlay.style.display === 'block') closeTozaModal();
});

/* Yashil panel ham, menyu ham — bir xil: darhol oynada ochadi */
window.toggleToza = function(){ openTozaModal(); };
if(typeof scrollToSec === 'function'){
  var _sts = scrollToSec;
  scrollToSec = function(id){
    if(id === 'toza-sec'){ openTozaModal(); return; } // skroll YO'Q — oyna darhol ochiladi
    return _sts.apply(this, arguments);
  };
}


})();

(function(){
'use strict';
var overlay = null, placeholder = null;

function buildOverlay(){
  overlay = document.createElement('div');
  overlay.id = 'dash-modal';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99990;background:rgba(10,31,61,.65);display:none;overflow-y:auto;padding:30px 14px;backdrop-filter:blur(3px)';
  var inner = document.createElement('div');
  inner.id = 'dash-modal-inner';
  inner.style.cssText = 'max-width:1150px;margin:0 auto;position:relative;border-radius:20px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.45);background:linear-gradient(160deg,#f0f6ff,#eafaf6)';
  var x = document.createElement('button');
  x.textContent = '✕';
  x.title = 'Yopish';
  x.style.cssText = 'position:absolute;top:14px;right:14px;z-index:5;width:38px;height:38px;border-radius:50%;border:none;background:rgba(10,31,61,.85);color:#fff;font-size:16px;font-weight:800;cursor:pointer';
  x.onclick = closeDashModal;
  inner.appendChild(x);
  overlay.appendChild(inner);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeDashModal(); });
  document.body.appendChild(overlay);
}

window.openDashModal = function(){
  var sec = document.getElementById('dashboard-sec');
  if(!sec) return;
  if(!overlay) buildOverlay();
  if(!placeholder){
    placeholder = document.createComment('dash-sec-joyi');
    sec.parentNode.insertBefore(placeholder, sec);
  }
  document.getElementById('dash-modal-inner').appendChild(sec);
  sec.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  if(typeof updateDashboard === 'function') setTimeout(updateDashboard, 80);
};
window.closeDashModal = function(){
  var sec = document.getElementById('dashboard-sec');
  if(overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
  if(sec && placeholder){
    sec.style.display = 'none';
    placeholder.parentNode.insertBefore(sec, placeholder.nextSibling);
  }
};
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && overlay && overlay.style.display === 'block') closeDashModal();
});

/* Panel ham, menyu ham darhol oynada ochadi */
window.toggleDash = function(){ openDashModal(); };
if(typeof scrollToSec === 'function'){
  var _sts = scrollToSec;
  scrollToSec = function(id){
    if(id === 'dashboard-sec'){ openDashModal(); return; }
    return _sts.apply(this, arguments);
  };
}
})();

(function(){
'use strict';
var D=document,H=D.documentElement;
function $(s,r){return (r||D).querySelector(s);}
function $$(s,r){return Array.prototype.slice.call((r||D).querySelectorAll(s));}
function lang(){return window.CUR_LANG==='ru'?'ru':'uz';}
function go(id){
  if(id==='top'){window.scrollTo({top:0,behavior:'smooth'});return;}
  if(typeof window.scrollToSec==='function')window.scrollToSec(id);
  else{var e=D.getElementById(id);if(e)e.scrollIntoView({behavior:'smooth',block:'start'});}
}
function openAI(){
  if(typeof window.switchChecker==='function'){try{window.switchChecker('ai');}catch(e){}}
  go('checker-sec');
  setTimeout(function(){var i=$('#ai-drug-input');if(i)try{i.focus({preventScroll:true});}catch(e){}},750);
}

/* AI orb — animatsiyalangan ikonka */
function orb(sz,cls){
  return '<span class="nx-orb'+(cls?' '+cls:'')+'" style="--s:'+sz+'px" aria-hidden="true"><i class="rg"></i><i class="rg r2"></i><i class="od"></i><i class="od o2"></i>'+
  '<svg viewBox="0 0 24 24"><path d="M12 2l2.2 6.3 6.3 2.2-6.3 2.2L12 19l-2.2-6.3L3.5 10.5l6.3-2.2z"/><path d="M19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z" opacity=".85"/></svg></span>';
}

var T={
  cta1:{uz:'🚀 Darsni hoziroq boshlash',ru:'🚀 Начать урок сейчас'},
  cta2:{uz:'🔍 AI bilan dori tekshirish',ru:'🔍 Проверить препарат с ИИ'},
  c1:{uz:'📚 64 mavzu',ru:'📚 64 тем'},c2:{uz:'📝 80 test savol',ru:'📝 80 тестов'},
  c3:{uz:'🏅 O‘zlashtirildi (75%+)',ru:'🏅 Освоено (75%+)'},c4:{uz:'🌐 UZ · RU',ru:'🌐 UZ · RU'},
  fab:{uz:'Dorini AI bilan tekshir',ru:'Проверить препарат с ИИ'},
  dwHead:{uz:'📊 Mening progressim',ru:'📊 Мой прогресс'},dwMod:{uz:'Modullar',ru:'Модули'},dwCert:{uz:'O‘zlashtirildi',ru:'Освоено'},
  dwHint:{uz:'Hali test topshirilmagan. Birinchi darsni boshlang va natijangizni bu yerda kuzating!',ru:'Тестов пока нет. Начните первый урок и следите за результатом здесь!'},
  dwBtn:{uz:'Darsni boshlash →',ru:'Начать урок →'},dwFull:{uz:'To\'liq dashboard →',ru:'Полный дашборд →'},
};
function t(k){return T[k][lang()];}
function tx(k){return 'data-t="'+k+'"';}

function build(){
  var hero=$('.hero');

  /* 1. Hero: CTA + ishonch belgilari */
  var stats=$('.hero-stats');
  if(stats&&!$('.nx-cta')){
    var cta=D.createElement('div');cta.className='nx-ui';
    cta.innerHTML='<div class="nx-cta"><button type="button" class="nx-btn nx-btn-main" id="nx-cta1" '+tx('cta1')+'></button>'+
      '<button type="button" class="nx-btn nx-btn-ghost" id="nx-cta2" '+tx('cta2')+'></button></div>'+
      '<div class="nx-chips"><span '+tx('c1')+'></span><span '+tx('c2')+'></span><span '+tx('c3')+'></span><span '+tx('c4')+'></span></div>';
    stats.parentNode.insertBefore(cta,stats);
    $('#nx-cta1').onclick=function(){go('roles');};
    $('#nx-cta2').onclick=openAI;
  }

  /* 2. AI bo'limi: qidiruv maydoni ichidagi kichik orb */
  var inp=$('#ai-drug-input');
  if(inp&&!$('.nx-ai-field')){
    var f=D.createElement('div');f.className='nx-ai-field';
    inp.parentNode.insertBefore(f,inp);f.appendChild(inp);
    f.insertAdjacentHTML('afterbegin',orb(34,'sm'));
  }

  /* 4. AI suzuvchi tugma */
  if(!$('.nx-fab')){
    var fab=D.createElement('button');fab.type='button';fab.className='nx-fab nx-ui';fab.setAttribute('aria-label','AI');
    fab.innerHTML=orb(58)+'<span class="nx-tip" '+tx('fab')+'></span>';
    fab.onclick=openAI;D.body.appendChild(fab);
  }

  /* 5. O'ng chet: glass mini-dashboard */
  if(!$('#nx-dashw')){
    var w=D.createElement('aside');w.className='nx-dashw nx-ui';w.id='nx-dashw';
    w.innerHTML='<button type="button" class="nx-dw-tab" aria-label="Dashboard">📊</button>'+
     '<div class="nx-dw-body"><button type="button" class="nx-dw-x" aria-label="Yopish">✕</button><div class="nx-dw-head" '+tx('dwHead')+'></div>'+
     '<div class="nx-dw-ring" id="nx-dw-ring"><span id="nx-dw-pct">0%</span></div>'+
     '<div class="nx-dw-row"><span '+tx('dwMod')+'></span><b id="nx-dw-m">0/4</b></div>'+
     '<div class="nx-dw-row"><span '+tx('dwCert')+'></span><b id="nx-dw-c">0</b></div>'+
     '<div class="nx-dw-hint" id="nx-dw-hint" '+tx('dwHint')+'></div>'+
     '<button type="button" class="nx-btn nx-btn-sm" id="nx-dw-btn"></button></div>';
    D.body.appendChild(w);
    var tab=$('.nx-dw-tab',w);
    function setOpen(v){w.classList.toggle('open',v);tab.setAttribute('aria-expanded',v?'true':'false');}
    tab.setAttribute('aria-expanded','false');
    tab.onclick=function(e){e.stopPropagation();setOpen(!w.classList.contains('open'));};
    $('.nx-dw-x',w).onclick=function(e){e.stopPropagation();setOpen(false);};
    D.addEventListener('click',function(e){if(w.classList.contains('open')&&!w.contains(e.target))setOpen(false);});
    D.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
    $('#nx-dw-btn').onclick=function(){
      setOpen(false);
      var s=stats2();
      if(s.done===0)go('roles');
      else if(typeof window.openDashModal==='function')window.openDashModal();
      else go('dashboard-sec');
    };
  }

}

/* Navdagi AI havolasini orb bilan bezash */
function decorateNav(){
  var a=$('header nav a[onclick*="checker-sec"]');
  if(!a)return;
  if(!$('.nx-orb',a)){
    a.innerHTML='<span class="nx-emo">🤖 </span>'+orb(20,'sm')+'<span class="nx-nav-lbl" data-uz="AI Dori" data-ru="ИИ Лекарства">AI Dori</span>';
  }
  var lbl=$('.nx-nav-lbl',a);
  if(lbl)lbl.textContent=lbl.getAttribute('data-'+lang());
}

/* Til bo'yicha matnlar */
function applyLang(){
  $$('[data-t]').forEach(function(e){
    var k=e.getAttribute('data-t');
    if(T[k])e.textContent=t(k);
  });
  $$('[data-uz]').forEach(function(e){e.textContent=e.getAttribute('data-'+lang());});
  decorateNav();
  updateDash();
}

/* Mini-dashboard ma'lumotlari (asl localStorage: quiz_<rol>) */
function stats2(){
  var roles=['rahbar','murabbiy','metodist','sportchi'],done=0,sum=0,cert=0;
  roles.forEach(function(r){
    try{var s=JSON.parse(localStorage.getItem('quiz_'+r)||'null');
      if(s&&typeof s.pct==='number'){done++;sum+=s.pct;if(s.pct>=75)cert++;}}catch(e){}
  });
  return {done:done,avg:done?Math.round(sum/done):0,cert:cert};
}
function updateDash(){
  var w=$('#nx-dashw');if(!w)return;
  var s=stats2();
  $('#nx-dw-ring').style.setProperty('--p',s.avg);
  $('#nx-dw-pct').textContent=s.avg+'%';
  $('#nx-dw-m').textContent=s.done+'/4';
  $('#nx-dw-c').textContent=s.cert;
  var hint=$('#nx-dw-hint');hint.style.display=s.done===0?'block':'none';
  $('#nx-dw-btn').textContent=s.done===0?t('dwBtn'):t('dwFull');
}

/* Hero raqamlari: sanash animatsiyasi */
function countUp(){
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  $$('.hero-stats .num').forEach(function(el){
    var m=/^(\d+)(.*)$/.exec(el.textContent.trim());if(!m||el.__nx)return;el.__nx=1;
    var end=+m[1],suf=m[2],t0=null;
    function step(ts){
      if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/1100),e=1-Math.pow(1-p,3);
      el.textContent=Math.round(end*e)+suf;
      if(p<1)requestAnimationFrame(step);
    }
    el.textContent='0'+suf;requestAnimationFrame(step);
  });
}

/* Kartalar sekin paydo bo'lishi */
function reveal(){
  if(!('IntersectionObserver' in window))return;
  H.classList.add('nx-js');
  var els=$$('.role-card,.ec-film,.ec-case,.ec-gloss,.stat-item,.deco-card,.link-card,.toza-card,.toza-stat,.faq-item');
  els.forEach(function(e){e.classList.add('nx-rv');});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(en){
      if(en.isIntersecting){
        var e=en.target;e.classList.add('nx-in');io.unobserve(e);
        setTimeout(function(){e.classList.remove('nx-rv','nx-in');e.style.transitionDelay='';},1100);
      }
    });
  },{threshold:.08,rootMargin:'0px 0px -4% 0px'});
  els.forEach(function(e,i){e.style.transitionDelay=(i%4)*70+'ms';io.observe(e);});
  setTimeout(function(){els.forEach(function(e){e.classList.add('nx-in');});},4000);
}

/* Klaviatura va ekran o'quvchi: onclick bor, lekin tugma bo'lmagan elementlarni (kartalar, mavzular, test variantlari) fokuslanadigan qilish */
function a11y(){
  var sel='.role-card,.acc-head,.ec-film,.ec-case,.ec-gloss,.q-opt';
  function mark(e){if(e.getAttribute('tabindex')===null){e.setAttribute('tabindex','0');e.setAttribute('role','button');}}
  function prep(root){$$(sel,root).forEach(mark);}
  prep(D);
  if(window.MutationObserver){
    var mo=new MutationObserver(function(ms){ms.forEach(function(m){Array.prototype.forEach.call(m.addedNodes,function(n){
      if(n.nodeType===1){if(n.matches&&n.matches(sel))mark(n);prep(n);}});});});
    $$('[id$="-q"]').forEach(function(c){mo.observe(c,{childList:true,subtree:true});});
  }
  D.addEventListener('keydown',function(e){
    var t=e.target;
    if((e.key==='Enter'||e.key===' ')&&t&&t.matches&&t.matches(sel)){e.preventDefault();t.click();}
  });
  var ta=window.toggleAcc;
  if(typeof ta==='function'&&!ta.__nx){
    window.toggleAcc=function(h){var r=ta.apply(this,arguments);
      try{var it=h&&h.closest?h.closest('.acc-item'):null;if(it)h.setAttribute('aria-expanded',it.classList.contains('open')?'true':'false');}catch(e){}return r;};
    window.toggleAcc.__nx=1;
  }
  $$('.acc-head').forEach(function(h){h.setAttribute('aria-expanded','false');});
}

function hookLang(){
  if(typeof window.setLang==='function'&&!window.setLang.__nx){
    var o=window.setLang;
    window.setLang=function(){var r=o.apply(this,arguments);try{applyLang();}catch(e){}return r;};
    window.setLang.__nx=1;
  }
}

function init(){
  try{
    build();hookLang();applyLang();countUp();reveal();a11y();
    window.addEventListener('storage',updateDash);
    window.addEventListener('focus',updateDash);
    setInterval(updateDash,3000);
  }catch(e){if(window.console)console.warn('[neon]',e);}
}
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',init);else init();
})();



/* ── ANTIDOPING AUDIO PLAYER (13 MP3 LESSONS, LAZY LOAD) ── */
(function(){
  'use strict';
  const lessons = [
    {"id":1,"file":"antidoping_audio_01.mp3","duration":178.207347},
    {"id":2,"file":"antidoping_audio_02.mp3","duration":209.998367},
    {"id":3,"file":"antidoping_audio_03.mp3","duration":191.947755},
    {"id":4,"file":"antidoping_audio_04.mp3","duration":184.555102},
    {"id":5,"file":"antidoping_audio_05.mp3","duration":154.618776},
    {"id":6,"file":"antidoping_audio_06.mp3","duration":142.28898},
    {"id":7,"file":"antidoping_audio_07.mp3","duration":166.426122},
    {"id":8,"file":"antidoping_audio_08.mp3","duration":222.61551},
    {"id":9,"file":"antidoping_audio_09.mp3","duration":168.907755},
    {"id":10,"file":"antidoping_audio_10.mp3","duration":129.227755},
    {"id":11,"file":"antidoping_audio_11.mp3","duration":163.395918},
    {"id":12,"file":"antidoping_audio_12.mp3","duration":181.890612},
    {"id":13,"file":"antidoping_audio_13.mp3","duration":224.626939}
  ];
  const audio = document.getElementById('antidopingAudio');
  const list  = document.getElementById('audioLessonList');
  if (!audio || !list) return;
  const $ = id => document.getElementById(id);
  let current = 0, loadedSrc = '', termsFont = 12;
  try {
    const savedRate = parseFloat(localStorage.getItem('audio_rate') || '1');
    if (savedRate >= 0.75 && savedRate <= 2 && $('audioRate')) {
      $('audioRate').value = String(savedRate);
      audio.playbackRate = savedRate;
    }
  } catch(e){}

  const fmt = s => {
    if (!Number.isFinite(s)) return '00:00';
    s = Math.max(0, Math.floor(s));
    return String(Math.floor(s/60)).padStart(2,'0') + ':' + String(s%60).padStart(2,'0');
  };
  const isRu = () => window.CUR_LANG === 'ru';
  const trackTitle = x => (isRu() ? 'Аудиоурок ' : 'Audio dars ') + String(x.id).padStart(2,'0');
  const TERMS = {
    uz: [
      'WADA — Jahon antidoping agentligi',
      'ADRV — antidoping qoidabuzarligi',
      'TUE — terapevtik foydalanish ruxsati',
      'Doping-nazorat — namuna olish jarayoni',
      'AAF — salbiy tahliliy natija',
      'Whereabouts — sportchining joylashuv ma’lumoti',
      'Prohibited List — taqiqlangan ro‘yxat',
      'Strict Liability — qat’iy javobgarlik tamoyili'
    ],
    ru: [
      'WADA — Всемирное антидопинговое агентство',
      'ADRV — нарушение антидопинговых правил',
      'ТИ (TUE) — терапевтическое использование',
      'Допинг-контроль — процедура отбора проб',
      'AAF — неблагоприятный результат анализа',
      'Whereabouts — информация о местонахождении',
      'Prohibited List — Запрещённый список WADA',
      'Strict Liability — принцип строгой ответственности'
    ]
  };

  function showErr(msg){
    const err = $('audioError');
    if (!err) return;
    err.textContent = msg || '';
    err.style.display = msg ? 'block' : 'none';
  }
  function renderList() {
    list.innerHTML = '';
    lessons.forEach((x, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'audio-item' + (i === current ? ' active' : '');
      b.setAttribute('aria-current', i === current ? 'true' : 'false');
      b.innerHTML = '<span class="num">' + String(i+1).padStart(2,'0') + '</span><span class="info"><strong>' +
        trackTitle(x) + '</strong><small>' + fmt(x.duration) + ' · ' + (isRu() ? 'Аудиозанятие' : 'Audio mashg‘ulot') +
        '</small></span><span aria-hidden="true">▶</span>';
      b.addEventListener('click', () => load(i, true));
      list.appendChild(b);
    });
  }
  function updateList() {
    Array.prototype.forEach.call(list.children, (b, i) => {
      b.classList.toggle('active', i === current);
      b.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }
  function updateLabels() {
    const ru = isRu();
    $('audioNowTitle').textContent = trackTitle(lessons[current]);
    $('audioNowSub').textContent = ru ? 'Аудиозанятие по антидопингу' : 'Antidoping bo‘yicha audio mashg‘ulot';
    if (audio.paused) $('audioPlay').textContent = ru ? '▶ Слушать' : '▶ Tinglash';
    else $('audioPlay').textContent = ru ? 'Ⅱ Пауза' : 'Ⅱ Pauza';
    $('audioStop').textContent = ru ? '■ Стоп' : '■ Stop';
    const panel = $('audioTermsPanel');
    $('audioTextToggle').textContent = panel.hidden
      ? (ru ? '＋ Показать ключевые термины' : '＋ Mavzuga oid atamalarni ko‘rsatish')
      : (ru ? '− Скрыть термины' : '− Atamalarni yashirish');
    if ($('audioTermsTitle')) $('audioTermsTitle').textContent = ru ? 'Основные антидопинговые термины' : 'Antidoping bo‘yicha asosiy atamalar';
    const tc = $('audioTermsList');
    if (tc) {
      tc.innerHTML = TERMS[ru ? 'ru' : 'uz'].map(t => '<span class="audio-term">' + escapeHTML(t) + '</span>').join('');
    }
    const sel = $('audioRate');
    if (sel && sel.options[1]) sel.options[1].textContent = ru ? '1x — обычный' : '1x — odatiy';
  }
  function applyTermsFont(sz) {
    termsFont = Math.max(11, Math.min(20, sz));
    const panel = $('audioTermsPanel');
    if (!panel) return;
    panel.querySelectorAll('.audio-term').forEach(el => { el.style.fontSize = termsFont + 'px'; });
    const note = $('audioTermsNote');
    if (note) note.style.fontSize = Math.max(11, termsFont - 1) + 'px';
  }
  function load(i, autoplay) {
    current = (i + lessons.length) % lessons.length;
    const targetSrc = 'audio/' + lessons[current].file;
    showErr('');
    audio.pause();
    if (loadedSrc !== targetSrc) {
      audio.src = targetSrc;
      loadedSrc = targetSrc;
      if (autoplay) audio.load();
    }
    audio.playbackRate = Number($('audioRate') ? $('audioRate').value : 1) || 1;
    $('audioSeek').value = 0;
    $('audioCurrent').textContent = '00:00';
    $('audioDuration').textContent = fmt(lessons[current].duration);
    updateList();
    updateLabels();
    if (autoplay) audio.play().catch(() => {});
  }

  $('audioPlay').addEventListener('click', () => {
    showErr('');
    if (audio.paused) {
      const targetSrc = 'audio/' + lessons[current].file;
      if (loadedSrc !== targetSrc) { audio.src = targetSrc; loadedSrc = targetSrc; }
      audio.playbackRate = Number($('audioRate') ? $('audioRate').value : 1) || 1;
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  });
  $('audioStop').addEventListener('click', () => { audio.pause(); audio.currentTime = 0; $('audioSeek').value = 0; $('audioCurrent').textContent = '00:00'; updateLabels(); });
  $('audioBack').addEventListener('click', () => load(current - 1, true));
  $('audioNext').addEventListener('click', () => load(current + 1, true));
  $('audioRate').addEventListener('change', e => {
    const rate = Number(e.target.value) || 1;
    audio.playbackRate = rate;
    try { localStorage.setItem('audio_rate', String(rate)); } catch(err){}
  });
  audio.addEventListener('play', updateLabels);
  audio.addEventListener('pause', updateLabels);
  audio.addEventListener('error', () => {
    showErr(isRu() ? '⚠️ Не удалось загрузить аудиофайл. Проверьте подключение и попробуйте снова.' : '⚠️ Audio faylni yuklashda xatolik. Internetni tekshirib qayta urinib ko‘ring.');
    updateLabels();
  });
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      $('audioSeek').value = Math.round(audio.currentTime / audio.duration * 1000);
      $('audioCurrent').textContent = fmt(audio.currentTime);
    }
  });
  audio.addEventListener('loadedmetadata', () => { if (audio.duration) $('audioDuration').textContent = fmt(audio.duration); });
  audio.addEventListener('ended', () => {
    if (current < lessons.length - 1) load(current + 1, true);
    else $('audioPlay').textContent = isRu() ? '▶ Слушать снова' : '▶ Qayta tinglash';
  });
  $('audioSeek').addEventListener('input', e => { if (audio.duration) audio.currentTime = Number(e.target.value) / 1000 * audio.duration; });
  $('audioTextToggle').addEventListener('click', () => {
    const panel = $('audioTermsPanel'), show = panel.hidden;
    panel.hidden = !show;
    updateLabels();
    applyTermsFont(termsFont);
    $('audioTextToggle').setAttribute('aria-expanded', String(show));
  });
  if ($('audioTermsDown')) $('audioTermsDown').addEventListener('click', () => applyTermsFont(termsFont - 1));
  if ($('audioTermsUp')) $('audioTermsUp').addEventListener('click', () => applyTermsFont(termsFont + 1));

  window.refreshAudioLang = function(){ renderList(); updateLabels(); applyTermsFont(termsFont); };
  renderList();
  $('audioDuration').textContent = fmt(lessons[0].duration);
  updateLabels();
})();
