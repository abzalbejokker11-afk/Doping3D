// Doping.uz — Unified Phonetic WADA 2026 Drug Search Engine (UZ / RU)
(function(){
'use strict';
var D=document;
function $(s,r){return (r||D).querySelector(s);}
function esc(s){return typeof window.escapeHTML==='function'?window.escapeHTML(s):String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function isRu(){return window.CUR_LANG==='ru';}
/* ═══ 1. BAZA KENGAYTMASI (uzoq yillik WADA qoidalari; 2026 ro'yxati bilan tasdiqlash tavsiya etiladi) ═══ */
var STE="Og'iz orqali, vena yoki mushak ichiga yoki to'g'ri ichak orqali qabul qilinsa musobaqa davrida taqiqlangan. Teriga surtma, ko'z/quloq tomchilari va ingalyatsiya odatda ruxsat etiladi — lekin har safar shifokor va UzNADO bilan aniqlang.";
var NSA="NSAID (ibuprofen, diklofenak) — shifokor bilan kelishgan holda.";
var DIU="S5 Diuretik (Siydik haydovchi)";
function X(name,alias,status,cls,cat,tue,risk,note,alt){return {name:name,alias:alias,status:status,cls:cls,cat:cat,tue:tue,risk:risk,note:note,alt:alt||'',ext:1};}
var EXT=[
X("Efedrin",["ephedrine","efedrin","ephedra","efedra","ma huang","mahuang","эфедрин","эфедра"],"Musobaqada taqiqlangan (>10 mkg/ml)","dr-caution","S6 Stimulyator","Tibbiy zaruratda TUE ko'rib chiqiladi","Yuqori","Ba'zi shamollash va burun dorilarida hamda 'yog' yoqish' BADlarida uchraydi. Efedra (ma huang) o'simlik ekstrakti ham shu hisobda.","Paratsetamol, C vitamini, burunni sho'r eritma bilan yuvish."),
X("Prednizolon / Prednizon",["prednisolone","prednisone","prednizolon","prednizon","prednizalon","prednisalon","преднизолон","преднизон"],"Musobaqada tabletka/inyeksiya TAQIQLANGAN","dr-prohibited","S9 Glyukokortikoid","Tibbiy ko'rsatmada TUE shart","Yuqori",STE,NSA),
X("Metilprednizolon (Medrol)",["methylprednisolone","metilprednizolon","metipred","medrol","solu-medrol","depo-medrol","метилпреднизолон","метипред","медрол"],"Musobaqada tabletka/inyeksiya TAQIQLANGAN","dr-prohibited","S9 Glyukokortikoid","Tibbiy ko'rsatmada TUE shart","Yuqori",STE,NSA),
X("Gidrokortizon",["hydrocortisone","gidrokortizon","kortef","гидрокортизон"],"Musobaqada tabletka/inyeksiya TAQIQLANGAN","dr-prohibited","S9 Glyukokortikoid","Tibbiy ko'rsatmada TUE shart","Yuqori",STE,NSA),
X("Terbutalin",["terbutaline","terbutalin","bricanyl","brikanil","тербуталин","бриканил"],"Har doim taqiqlangan (TUE shart)","dr-tue","S3 Beta-2 Agonist","HA — astma uchun TUE shart","Yuqori","Faqat ayrim ingalyatsion preparatlar (salbutamol, formoterol, salmeterol) belgilangan chegara dozada ruxsat. Terbutalin ular qatorida emas.","Ruxsat etilgan ingalyatsiya (masalan salbutamol) — shifokor dozasi bo'yicha."),
X("Formoterol",["formoterol","foradil","symbicort","simbikort","foster","формотерол","форадил","симбикорт","фостер"],"Ingalyatsiya dozasi bo'yicha ruxsat (≤54 mkg/24 soat)","dr-tue","S3 Beta-2 Agonist","Chegaradan oshsa yoki boshqa yo'l bilan qabul qilinsa TUE shart","O'rta","Ba'zi astma ingalyatorlarida (budesonid yoki beklometazon bilan kombinatsiyada) bo'ladi. Faqat ingalyatsiya orqali va belgilangan dozadan oshmasa ruxsat.","Shifokor tayinlagan ingalyator dozasi."),
X("Salmeterol",["salmeterol","serevent","seretide","салметерол","серевент","серетид"],"Ingalyatsiya dozasi bo'yicha ruxsat (≤200 mkg/24 soat)","dr-tue","S3 Beta-2 Agonist","Chegaradan oshsa yoki boshqa yo'l bilan qabul qilinsa TUE shart","O'rta","Astma ingalyatorlarida (masalan flutikazon bilan kombinatsiyada) bo'ladi. Faqat ingalyatsiya orqali va belgilangan dozadan oshmasa ruxsat.","Shifokor tayinlagan ingalyator dozasi."),
X("Ibutamoren (MK-677)",["ibutamoren","mk677","mk-677","mk 677","nutrobal","ибутаморен"],"Har doim taqiqlangan","dr-prohibited","S2 O'sish gormoni sekretagoglari","Yo'q","Oliy (4 yil)","Sport zalida 'o'sish gormonini ko'tarish' uchun sotiladigan tadqiqot moddasi. O'sish gormoni sekretagogi sifatida taqiqlangan; qand diabeti xavfini oshiradi.","Mashq, uyqu va ovqatlanish rejasi."),
X("Xlortalidon",["chlortalidone","chlorthalidone","xlortalidon","hlortalidon","hygroton","gigroton","хлорталидон","гигротон"],"Har doim taqiqlangan","dr-prohibited",DIU,"Tibbiy zaruratda TUE ko'rib chiqiladi","Oliy (4 yilgacha)","Qon bosimi dorilarida uchraydi. Siydik haydovchi sifatida vaznni tushirish va boshqa moddalarni yashirish uchun suiiste'mol qilinadi.","Ruxsat etilgan qon bosimi dorisi bilan almashtirish — faqat shifokor bilan."),
X("Bumetanid",["bumetanide","bumetanid","буметанид"],"Har doim taqiqlangan","dr-prohibited",DIU,"Tibbiy zaruratda TUE ko'rib chiqiladi","Oliy (4 yilgacha)","Kuchli halqali diuretik (furosemid bilan bir guruh). Har doim taqiqlangan.","Shifokor bilan muqobil davo."),
X("Triamteren / Amilorid",["triamterene","triamteren","amiloride","amilorid","триамтерен","амилорид"],"Har doim taqiqlangan","dr-prohibited",DIU,"Tibbiy zaruratda TUE ko'rib chiqiladi","Oliy (4 yilgacha)","Kaliy saqlovchi siydik haydovchilar. Ba'zan boshqa dorilar bilan kombinatsiyada (masalan gidroxlorotiazid) uchraydi.","Shifokor bilan muqobil davo."),
X("Atsetazolamid",["acetazolamide","atsetazolamid","asetazolamid","diacarb","diakarb","diamox","ацетазоламид","диакарб","диамокс"],"Har doim taqiqlangan","dr-prohibited",DIU,"Tibbiy zaruratda TUE ko'rib chiqiladi","Oliy (4 yilgacha)","Tog' (balandlik) kasalligi va glaukomada ham ishlatiladi — sportchi uchun baribir taqiqlangan: siydik haydovchi va boshqa moddalarni yashiruvchi (maskirovka) vosita.","Shifokor bilan TUE yoki muqobil davo rejasi."),
X("Indapamid",["indapamide","indapamid","arifon","ravel","индапамид","арифон","равел"],"Har doim taqiqlangan","dr-prohibited",DIU,"Tibbiy zaruratda TUE ko'rib chiqiladi","Oliy (4 yilgacha)","Qon bosimi dorilarida (masalan Arifon, Ravel) uchraydi. Gipertoniya uchun dori qabul qilsangiz, tarkibini shifokor bilan tekshiring.","Ruxsat etilgan qon bosimi dorisi bilan almashtirish — faqat shifokor bilan."),
X("Anastrozol",["anastrozole","anastrozol","arimidex","анастрозол","аримидекс"],"Har doim taqiqlangan","dr-prohibited","S4 Gormon antagonisti va modulyatori","Tibbiy zaruratda TUE ko'rib chiqiladi","Oliy (4 yil)","Aromataza inhibitori. Anabolik steroid sikllaridan keyin estrogenni bostirish uchun suiiste'mol qilinadi.","Faqat shifokor nazoratida."),
X("Letrozol",["letrozole","letrozol","femara","летрозол","фемара"],"Har doim taqiqlangan","dr-prohibited","S4 Gormon antagonisti va modulyatori","Tibbiy zaruratda TUE ko'rib chiqiladi","Oliy (4 yil)","Aromataza inhibitori. Anabolik steroid sikllaridan keyin estrogenni bostirish uchun suiiste'mol qilinadi.","Faqat shifokor nazoratida."),
X("Modafinil",["modafinil","provigil","modalert","модафинил","провигил"],"Musobaqada taqiqlangan","dr-prohibited","S6 Stimulyator","Tibbiy zaruratda (masalan narkolepsiya) TUE shart","Yuqori","Uyg'oq turish va diqqatni oshirish uchun ishlatiladigan stimulyator. Musobaqa davrida taqiqlangan.","Uyqu gigienasi, kofeinni me'yorida iste'mol qilish."),
X("Metilfenidat",["methylphenidate","metilfenidat","ritalin","concerta","метилфенидат","риталин"],"Musobaqada taqiqlangan","dr-prohibited","S6 Stimulyator","Tibbiy zaruratda (masalan DEHB) TUE shart","Yuqori","Diqqat yetishmasligi dorilarida bo'ladi. Musobaqa davrida taqiqlangan.","Shifokor bilan TUE masalasi."),
X("Beta-blokatorlar (Anaprilin, Egilok, Konkor)",["propranolol","anaprilin","atenolol","metoprolol","egilok","bisoprolol","concor","konkor","carvedilol","karvedilol","beta blocker","betablokator","пропранолол","анаприлин","атенолол","метопролол","эгилок","бисопролол","конкор","карведилол"],"Ayrim sport turlarida taqiqlangan","dr-caution","P1 Beta-blokator (ayrim sport turlari)","Ayrim sport turlarida TUE kerak","Sportga bog'liq","Qon bosimi va yurak dorilari. Ko'pchilik sport turlarida ruxsat, lekin o'q otish, kamondan otish, bilyard, golf, dart, ayrim chang'i va suv osti sportlarida taqiqlangan. Sport turingiz bo'yicha federatsiya/UzNADO bilan aniqlang.","Sport turingizga mos muqobilni shifokor bilan tanlang."),
X("Kannabis (marixuana, gashish, THC)",["cannabis","marijuana","marixuana","marihuana","gashish","hashish","thc","ganja","anasha","nasha","конопля","марихуана","гашиш","анаша","план"],"Musobaqada taqiqlangan","dr-prohibited","S8 Kannabinoidlar","Tibbiy zaruratda TUE ko'rib chiqiladi","Yuqori","THC (marixuana, gashish) musobaqa davrida taqiqlangan. Kannabidiol (CBD) ruxsat etilgan, lekin CBD mahsulotlarida THC aralashmasi bo'lishi mumkin — bu xavfli.","Meditatsiya, uyqu gigienasi, shifokor tayinlagan dorilar."),
X("Narkotik analgetiklar (Morfin, Fentanil, Metadon, Oksikodon)",["morphine","morfin","fentanyl","fentanil","methadone","metadon","oxycodone","oksikodon","buprenorphine","buprenorfin","heroin","geroin","опиоид","морфин","фентанил","метадон","оксикодон","героин"],"Musobaqada taqiqlangan","dr-prohibited","S7 Narkotiklar","Tibbiy zaruratda TUE shart","Yuqori (2-4 yil)","Kuchli opioid og'riq qoldiruvchilar musobaqa davrida taqiqlangan.","Paratsetamol, Ibuprofen — shifokor bilan."),
X("Trenbolon",["trenbolone","trenbolon","tren","parabolan","тренболон"],"Har doim taqiqlangan","dr-prohibited","S1 Anabolik steroid","Yo'q","Oliy (4 yil)","Kuchli anabolik steroid. Yurak, jigar va ruhiyatga jiddiy zarar yetkazadi.","Mashq va ovqatlanish rejasi, kreatin (ruxsat etilgan)."),
X("Boldenon",["boldenone","boldenon","equipoise","болденон"],"Har doim taqiqlangan","dr-prohibited","S1 Anabolik steroid","Yo'q","Oliy (4 yil)","Anabolik steroid. Ko'pincha veterinar preparat sifatida uchraydi.","Mashq va ovqatlanish rejasi."),
X("DHEA (Prasteron)",["dhea","dehydroepiandrosterone","prasterone","prasteron","дегидроэпиандростерон","дгэа"],"Har doim taqiqlangan","dr-prohibited","S1 Anabolik agent","Yo'q","Oliy (4 yil)","Ba'zi 'gormonal' BADlarda sotiladi. Organizmda testosteronga aylanadi.","Faqat sertifikatlangan, tarkibi tekshirilgan qo'shimchalar."),
X("hCG (xorionik gonadotropin)",["hcg","chorionic gonadotropin","horiogonin","pregnil","pregnyl","хгч","хорионический гонадотропин","хориогонин"],"Erkaklarda har doim taqiqlangan","dr-prohibited","S2 Peptid gormonlar","Tibbiy zaruratda TUE ko'rib chiqiladi","Oliy (4 yil)","Erkaklarda tabiiy testosteron ishlab chiqarishni rag'batlantiradi; steroid sikllaridan keyin ishlatiladi.","Faqat shifokor nazoratida."),
X("Kardarin (GW1516) / SR9009",["cardarine","kardarin","gw1516","gw501516","gw-1516","stenabolic","sr9009","sr-9009","кардарин","стенаболик"],"Har doim taqiqlangan","dr-prohibited","S4 Metabolik modulyator","Yo'q","Oliy (4 yil)","Sport zalida 'chidamlilik' uchun sotiladigan tadqiqot kimyoviy moddasi. Taqiqlangan va sog'liq uchun xavfli (saraton xavfi o'rganilgan).","Aerob mashqlar rejasi, to'g'ri ovqatlanish."),
X("SARMlar (Ligandrol, Andarin, RAD-140)",["ligandrol","lgd4033","lgd-4033","andarine","andarin","rad140","rad-140","radarine","testolone","sarms","sarm lar","лигандрол","андарин"],"Har doim taqiqlangan","dr-prohibited","S1 Anabolik agent (SARM)","Yo'q","Oliy (4 yil)","Selektiv androgen reseptor modulyatorlari. Ko'pincha 'tadqiqot uchun' deb sotiladi va BADlarda yashirin uchraydi.","Mashq va ovqatlanish rejasi."),
X("BPC-157",["bpc157","bpc-157","bpc 157","body protection compound"],"Har doim taqiqlangan","dr-prohibited","S0 Tasdiqlanmagan moddalar","Yo'q","Oliy (4 yil)","Jarohatni tezroq tiklash uchun sotiladigan peptid. Tibbiyotda tasdiqlanmagan modda sifatida taqiqlangan.","Fizioterapiya, tiklanish rejasi."),
X("Higenamin (BAD tarkibida)",["higenamine","higenamin","norcoclaurine","хигенамин"],"Har doim taqiqlangan","dr-prohibited","S3 Beta-2 Agonist","Yo'q","Yuqori","Pre-workout va 'yog' yoqish' BADlarida ko'p uchraydi — ba'zan 'nandina' yoki 'lotus' ekstrakti deb yashiriladi.","Tarkibi to'liq ochiq, sertifikatlangan mahsulotlar."),
X("Diklofenak",["diclofenac","diklofenak","voltaren","ortofen","диклофенак","вольтарен","ортофен"],"✅ RUXSAT ETILGAN","dr-allowed","Analgetik (NSAID)","Yo'q","Past","WADA ro'yxatida yo'q. Oshqozon va yurak-qon tomir yon ta'siri bor — shifokor maslahati bilan va me'yorida qabul qiling.","Ibuprofen."),
X("Ketorolak (Ketanov)",["ketorolac","ketorolak","ketanov","ketorol","кеторолак","кетанов","кеторол"],"✅ RUXSAT ETILGAN","dr-allowed","Analgetik (NSAID)","Yo'q","Past","WADA ro'yxatida yo'q. Kuchli og'riq qoldiruvchi, yon ta'siri ko'p — qisqa muddat va shifokor maslahati bilan.","Paratsetamol, Ibuprofen."),
X("Analgin (Metamizol)",["metamizole","metamizol","analgin","analgine","анальгин","метамизол"],"✅ RUXSAT ETILGAN","dr-allowed","Analgetik-antipiretik","Yo'q","Past","WADA ro'yxatida yo'q. Ba'zi mamlakatlarda qon kasalliklari xavfi tufayli cheklangan — shifokor bilan maslahatlashing.","Paratsetamol."),
X("Omeprazol",["omeprazole","omeprazol","omez","омепразол","омез"],"✅ RUXSAT ETILGAN","dr-allowed","Oshqozon kislotasi dorisi","Yo'q","Past","WADA ro'yxatida yo'q.",""),
X("Antigistaminlar (Loratadin, Tsetirizin, Suprastin)",["loratadine","loratadin","claritin","cetirizine","tsetirizin","setirizin","zodak","zyrtec","suprastin","chloropyramine","лоратадин","кларитин","цетиризин","зодак","супрастин"],"✅ RUXSAT ETILGAN","dr-allowed","Allergiya dorisi","Yo'q","Past","Oddiy antigistaminlar taqiqlanmagan. Diqqat: 'D' shaklidagi kombinatsiyalangan allergiya dorilari tarkibida psevdoefedrin bo'lishi mumkin — qadoqni tekshiring.",""),
X("Antibiotiklar (Amoksitsillin, Azitromitsin, Seftriakson)",["amoxicillin","amoksitsillin","amoksisilin","azithromycin","azitromitsin","azitromisin","ceftriaxone","seftriakson","antibiotik","antibiotic","амоксициллин","азитромицин","цефтриаксон","антибиотик"],"✅ RUXSAT ETILGAN","dr-allowed","Antibiotik","Yo'q","Past","Antibiotiklarning o'zi taqiqlanmagan. Lekin vena ichiga katta hajmli infuziya (100 ml dan ortiq / 12 soat) alohida qoida bo'yicha taqiqlangan bo'lishi mumkin.",""),
X("Vitaminlar (C, D, B12, Magniy)",["vitamin c","vitamin d","vitamin b12","vitamin","vitaminlar","magniy","magnesium","витамин","магний"],"✅ RUXSAT ETILGAN","dr-allowed","Vitamin / mineral","Yo'q","Past","Vitaminlar taqiqlanmagan. Lekin 'kompleks' BADlarda yashirin moddalar bo'lishi mumkin — faqat sertifikatlangan mahsulotlarni tanlang.",""),
X("Kapelnitsa (vena ichiga infuziya)",["kapelnitsa","kapelnica","infuziya","infusion","iv drip","drip","tomir ichiga","venaga","капельница","инфузия","укол в вену"],"100 ml dan ortiq bo'lsa TAQIQLANGAN","dr-caution","M2 Kimyoviy va fizik manipulyatsiya","Shoshilinch/klinik holatda istisno bor","Yuqori","12 soat ichida 100 ml dan ortiq vena ichiga infuziya yoki in'ektsiya taqiqlangan (kasalxonaga yotqizish, shoshilinch yordam yoki klinik tekshiruv bundan mustasno). Kapelnitsa qo'ydirishdan oldin shifokor va UzNADO bilan maslahatlashing.","Og'iz orqali suyuqlik va elektrolitlar (shifokor bilan).")
];
var have={};drugDB.forEach(function(d){have[String(d.name).toLowerCase()]=1;});
EXT.forEach(function(d){if(!have[d.name.toLowerCase()])drugDB.push(d);});
var XA={
 'Ibuprofen':['nurofen','brufen','ibuprofin','ибупрофен','нурофен','бруфен'],
 'Aspirin':['acetylsalicylic acid','atsetilsalitsil kislota','аспирин','ацетилсалициловая кислота'],
 'Kofein':['coffee','qahva','кофе'],
 'Paratsetamol':['asetaminofen','парацетамол']
};
drugDB.forEach(function(d){var a=XA[d.name];if(!a)return;d.alias=d.alias||[];a.forEach(function(x){if(d.alias.indexOf(x)<0)d.alias.push(x);});});

/* ═══ 2. NORMALIZATSIYA / FONETIKA ═══ */
var C2L={'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'j','з':'z','и':'i','й':'i','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'h','ц':'s','ч':'ch','ш':'sh','щ':'sh','ъ':'','ы':'i','ь':'','э':'e','ю':'yu','я':'ya','ў':'o','қ':'k','ғ':'g','ҳ':'h'};
function flat(s){ // kichik harf + kirill→lotin + apostroflarsiz, bo'shliqlar saqlanadi
  s=String(s==null?'':s).toLowerCase().replace(/[ʻʼ’‘`´']/g,'');
  var r='';for(var i=0;i<s.length;i++){var c=s.charAt(i);r+=(C2L[c]!==undefined?C2L[c]:c);}
  return r.replace(/[^a-z0-9]+/g,' ').trim();
}
function core(raw){
  return raw.replace(/ph/g,'f').replace(/ck/g,'k').replace(/q/g,'k').replace(/w/g,'v').replace(/x/g,'ks').replace(/th/g,'t')
    .replace(/c(?=[eiy])/g,'s').replace(/c/g,'k').replace(/y/g,'i').replace(/ts/g,'s').replace(/(.)\1+/g,'$1');
}
var SK={d:'t',b:'p',g:'k',z:'s',v:'f'};
function skel(c){return c.replace(/[aeiou]/g,'').replace(/[dbgzv]/g,function(m){return SK[m];});}
function mk(raw){var c=core(raw);return {raw:raw,core:c,skel:skel(c)};}

/* vaznli Damerau–Levenshtein: o'xshash harflar arzon almashadi (d↔t, a↔o, i↔e ...) */
var VW='aeiou';
function isV(c){return VW.indexOf(c)>=0;}
var SC={dt:.3,bp:.35,gk:.3,ck:.3,cs:.4,sz:.3,fv:.3,hk:.5,hs:.6,jz:.3,mn:.6};
function subc(a,b){if(a===b)return 0;var av=isV(a),bv=isV(b);if(av&&bv)return .4;if(av!==bv)return 1;var k=a<b?a+b:b+a;return SC[k]!==undefined?SC[k]:1;}
function insc(c){return isV(c)?.55:1;}
function wdl(a,b){
  var n=a.length,m=b.length,i,j;if(!n)return m;if(!m)return n;
  var d=[];for(i=0;i<=n;i++){d.push(new Array(m+1));d[i][0]=i?d[i-1][0]+insc(a.charAt(i-1)):0;}
  for(j=1;j<=m;j++)d[0][j]=d[0][j-1]+insc(b.charAt(j-1));
  for(i=1;i<=n;i++)for(j=1;j<=m;j++){
    var ca=a.charAt(i-1),cb=b.charAt(j-1);
    var v=Math.min(d[i-1][j]+insc(ca),d[i][j-1]+insc(cb),d[i-1][j-1]+subc(ca,cb));
    if(i>1&&j>1&&ca===b.charAt(j-2)&&a.charAt(i-2)===cb)v=Math.min(v,d[i-2][j-2]+.7);
    d[i][j]=v;
  }
  return d[n][m];
}
function simPair(c,k){
  if(c.raw===k.raw)return 1;
  if(c.core===k.core)return .985;
  var cl=c.core.length,kl=k.core.length,best=0;
  if(cl>=4&&kl>=4&&c.skel===k.skel&&c.skel.length>=3&&Math.abs(cl-kl)<=3&&c.core.charAt(0)===k.core.charAt(0))best=.93;
  if(cl>=3&&cl<kl&&k.core.indexOf(c.core)===0)best=Math.max(best,.78+.15*cl/kl);
  if(kl>=4&&cl>kl&&c.core.indexOf(k.core)===0)best=Math.max(best,.9);
  if(cl>=5&&kl>cl&&k.core.indexOf(c.core)>0)best=Math.max(best,.8);
  if(cl>=4&&kl>=4&&Math.abs(cl-kl)<=Math.max(3,.4*Math.max(cl,kl))){
    var s=1-wdl(c.core,k.core)/Math.max(cl,kl);
    if(c.core.charAt(0)!==k.core.charAt(0))s-=.05;
    best=Math.max(best,s);
  }
  return best;
}

/* ═══ 3. INDEKS (bir marta quriladi) ═══ */
var KEYS=[];
function keyOf(label,txt){var r=flat(txt).replace(/ /g,'');return r?{label:label,k:mk(r)}:null;}
function buildIndex(){
  KEYS=drugDB.map(function(d){
    var ks=[],nm=String(d.name),m=/^(.*?)\s*\((.*?)\)\s*$/.exec(nm);
    var main=m?m[1]:nm,alt=m?m[2]:'';
    main.split('/').forEach(function(p){var k=keyOf(p.trim(),p);if(k)ks.push(k);});
    if(alt){var k2=keyOf(alt,alt);if(k2)ks.push(k2);}
    (d.alias||[]).forEach(function(a){var k=keyOf(a,a);if(k)ks.push(k);});
    return ks;
  });
}
buildIndex();

var STOP={tabletka:1,tabletkasi:1,tabletkalari:1,tab:1,kapsula:1,kapsulasi:1,kaps:1,sirop:1,ampula:1,inhaler:1,ingalyator:1,sprey:1,spray:1,krem:1,malham:1,tomchi:1,shamcha:1,mg:1,mkg:1,mcg:1,ml:1,iu:1,dona:1,marta:1,kuniga:1,dori:1,dorisi:1,preparat:1,haqida:1,tarkibi:1,ichsam:1,ichsa:1,boladimi:1,bormi:1,mumkinmi:1,ruxsatmi:1,taqiqlanganmi:1,doping:1,qabul:1,qilsam:1,nima:1,bu:1,va:1,i:1,and:1,tablet:1,capsule:1,таблетка:1,таблетки:1,капсулы:1,сироп:1,спрей:1,мазь:1,ампулы:1,капли:1,укол:1,можно:1,нельзя:1,принимать:1,пить:1,препарат:1,лекарство:1,допинг:1,ли:1};
var UNITNUM=/^\d+(mg|mkg|mcg|ml|iu|gr|g|mm|ta|dona)?$/;
function candsOf(q){
  var toks=flat(q).split(' ').filter(Boolean).slice(0,8);
  var lists=[];
  var a=toks.filter(function(t){return !/^\d+(mg|mkg|mcg|ml|iu|gr|g|mm|ta|dona)$/.test(t)&&!STOP[t];});
  var b=a.filter(function(t){return !UNITNUM.test(t);});
  if(!a.length)a=toks;if(!b.length)b=a;
  lists.push(a);if(b.join()!==a.join())lists.push(b);
  var seen={},out=[];
  function add(s){if(s&&s.length>=2&&!seen[s]){seen[s]=1;out.push(mk(s));}}
  lists.forEach(function(L){
    add(L.join(''));
    L.forEach(function(t){add(t);});
    for(var i=0;i<L.length-1;i++)add(L[i]+L[i+1]);
    for(var j=0;j<L.length-2;j++)add(L[j]+L[j+1]+L[j+2]);
  });
  return out;
}

/* ═══ 4. QIDIRUV ═══ */
var SEV={'dr-prohibited':5,'dr-tue':4,'dr-caution':3,'dr-monitoring':2,'dr-allowed':1};
function sev(d){return SEV[d.cls]||3;}
function search(q){
  var cands=candsOf(q),out=[],i,j,k;
  if(!cands.length)return {tier:'C',matches:[],near:[]};
  for(i=0;i<drugDB.length;i++){
    var best=0,by='',ks=KEYS[i];
    for(j=0;j<cands.length;j++)for(k=0;k<ks.length;k++){
      var s=simPair(cands[j],ks[k].k);
      if(s>best){best=s;by=ks[k].label;}
    }
    if(best>=.6)out.push({drug:drugDB[i],score:best,by:by});
  }
  out.sort(function(a,b){return b.score-a.score||sev(b.drug)-sev(a.drug);});
  var top=out[0]?out[0].score:0,tier=top>=.9?'A':top>=.74?'B':'C';
  var amb=false;
  if(out[1]&&out[1].drug!==out[0].drug&&out[1].score>=top-.05&&top<.97){amb=true;if(tier==='A')tier='B';}
  return {tier:tier,matches:out.filter(function(m){return m.score>=.74;}).slice(0,4),near:out.slice(0,5),amb:amb,top:top,
          typo:!!out[0]&&!cands.some(function(c){return c.raw===flat(out[0].by).replace(/ /g,'');})};
}

/* Savol (simptom) bo'yicha ogohlantirishlar */
var INTENTS=[
 {k:["shamollash","tumov","gripp","grip","yo'tal","burun bitish","isitma","harorat","простуда","грипп","насморк","кашель","температура"],
  t:{uz:"Shamollash dorilarining ko'pida psevdoefedrin yoki efedrin bo'ladi (musobaqada taqiqlangan). Faqat paratsetamol/ibuprofen aniq ruxsat. Kombinatsiyalangan 'issiq choy' va tumov dorilarida har bir faol moddani alohida tekshiring.",ru:"Во многих комбинированных средствах от простуды есть псевдоэфедрин или эфедрин (запрещены в соревновании). Однозначно разрешены только парацетамол/ибупрофен. Проверяйте каждое действующее вещество отдельно."},
  d:["Psevdoefedrin","Efedrin","Paratsetamol","Ibuprofen"]},
 {k:["astma","bronx","nafas qisish","nafas yetishmasligi","ingalyator","астма","бронх","одышка","ингалятор"],
  t:{uz:"Astmada faqat ayrim ingalyatsion preparatlar (salbutamol, formoterol, salmeterol) belgilangan chegara dozada ruxsat. Tabletka/inyeksiya shakllari va boshqa beta-2 agonistlar taqiqlangan (TUE kerak).",ru:"При астме разрешены только некоторые ингаляционные препараты (сальбутамол, формотерол, сальметерол) в пределах доз. Таблетки/инъекции и другие бета-2 агонисты запрещены (нужно ТИ)."},
  d:["Salbutamol","Formoterol","Salmeterol","Terbutalin"]},
 {k:["siydik haydov","suv haydash","vazn tashlash","vazn","ozish","quritish","shish","отеки","мочегонн","похуден","сушка"],
  t:{uz:"Siydik haydovchi dorilar har doim taqiqlangan — ular vazn tashlash va boshqa moddalarni yashirish uchun ishlatiladi. 'Vaznni tez tushirish' dorilaridan ehtiyot bo'ling.",ru:"Мочегонные запрещены всегда — их используют для сброса веса и маскировки. Остерегайтесь средств «быстрого похудения»."},
  d:["Furosemid","Torasemid","Spironolakton","Gidroxlorotiazid","Atsetazolamid","Indapamid"]},
 {k:["mushak","massa","anabolik","kuch oshirish","мышц","масса","анаболик"],
  t:{uz:"Mushak va kuch uchun 'tez natija' va'da qiladigan mahsulotlar ko'pincha yashirin steroid/SARM saqlaydi. Tarkibi noma'lum mahsulotni qabul qilmang.",ru:"Продукты с обещанием «быстрого результата» часто содержат скрытые стероиды/SARM. Не принимайте продукты с неизвестным составом."},
  d:["Testosteron","Nandrolon","Stanozolol","Ostarin (SARM)"]},
 {k:["yog' yoq","yog yoq","fat burner","jiroj","жиросжиг","сжигатель"],
  t:{uz:"'Yog' yoqish' va pre-workout BADlari ko'pincha yashirin stimulyator, klenbuterol yoki higenamin saqlaydi. Faqat tarkibi to'liq ochiq, sertifikatlangan mahsulotlarni tanlang.",ru:"Жиросжигатели и пред-тренировочные добавки часто содержат скрытые стимуляторы, кленбутерол или хигенамин. Выбирайте только сертифицированные продукты с открытым составом."},
  d:["Klenbuterol","Sibutramin","DMAA (Geranamin)","Efedrin","Higenamin (BAD tarkibida)"]},
 {k:["charchoq","energiya","quvvat","yurak quvvat","усталость","энергия"],
  t:{uz:"Quvvat va 'yurak uchun' dorilar orasida meldoniy va trimetazidin taqiqlangan. Kofein taqiqlanmagan, lekin me'yorida.",ru:"Среди «энергетических» и «сердечных» средств мельдоний и триметазидин запрещены. Кофеин не запрещён, но в меру."},
  d:["Meldoniy (Mildronat)","Trimetazidin","Kofein"]},
 {k:["ogriq","og'riq","bo'g'im","jarohat","боль","травма","сустав"],
  t:{uz:"Og'riq qoldiruvchilarda: paratsetamol, ibuprofen, diklofenak ruxsat; tramadol musobaqada taqiqlangan; kortikosteroid in'ektsiya/tabletkalar musobaqada cheklangan.",ru:"Среди обезболивающих: парацетамол, ибупрофен, диклофенак разрешены; трамадол запрещён в соревновании; кортикостероиды (инъекции/таблетки) ограничены."},
  d:["Paratsetamol","Ibuprofen","Diklofenak","Tramadol","Prednizolon / Prednizon"]}
];
INTENTS.forEach(function(it){it.kf=it.k.map(function(x){return flat(x);});});
function intentOf(q){var f=' '+flat(q)+' ';for(var i=0;i<INTENTS.length;i++)for(var j=0;j<INTENTS[i].kf.length;j++){if(INTENTS[i].kf[j]&&f.indexOf(INTENTS[i].kf[j])>=0)return INTENTS[i];}return null;}
function byName(n){for(var i=0;i<drugDB.length;i++)if(drugDB[i].name===n)return drugDB[i];return null;}

/* INN qo'shimchalari bo'yicha EHTIMOLIY ogohlantirish (hech qachon "ruxsat" demaydi) */
var STEMS=[
 [/olol$/,{uz:"«-olol» — beta-blokator (P1): o'q otish, kamondan otish va boshqa ayrim sport turlarida taqiqlangan.",ru:"«-олол» — бета-блокатор (P1): запрещён в стрельбе, стрельбе из лука и некоторых других видах."}],
 [/terol$/,{uz:"«-terol» — beta-2 agonist (S3): ruxsat etilgan ingalyatsiya chegarasidan tashqarida taqiqlangan.",ru:"«-терол» — бета-2 агонист (S3): вне разрешённых ингаляционных доз запрещён."}],
 [/(semid|semide|tanid|tanide|tiazid|thiazide|lakton|lactone|erenon|erenone|tizid)$/,{uz:"Siydik haydovchi (diuretik) tuzilmasi (S5): har doim taqiqlangan bo'lishi ehtimoli yuqori.",ru:"Структура мочегонного (S5): высока вероятность запрета во все время."}],
 [/(bol|drol)$/,{uz:"Anabolik steroid tuzilmasi (S1): har doim taqiqlangan.",ru:"Структура анаболического стероида (S1): запрещён всегда."}],
 [/(olon|olone)$/,{uz:"Steroid tuzilma («-olon»): anabolik (S1) yoki glyukokortikoid (S9) bo'lishi mumkin — ikkalasi ham taqiqlangan yoki cheklangan.",ru:"Стероидная структура («-олон»): анаболик (S1) или глюкокортикоид (S9) — оба запрещены или ограничены."}],
 [/(solon|solone|sone|metazon)$/,{uz:"Glyukokortikoid tuzilmasi (S9): og'iz/in'ektsiya shakllari musobaqada taqiqlangan.",ru:"Структура глюкокортикоида (S9): пероральные/инъекционные формы запрещены в соревновании."}],
 [/(fedrin|ephedrine)$/,{uz:"Efedrin guruhi stimulyatori (S6): musobaqada chegaradan oshsa taqiqlangan.",ru:"Стимулятор группы эфедрина (S6): в соревновании выше порога запрещён."}],
 [/(fetamin|fetamine|amfetamin)$/,{uz:"Amfetamin guruhi stimulyatori (S6): musobaqada taqiqlangan.",ru:"Стимулятор группы амфетамина (S6): запрещён в соревновании."}],
 [/(poetin|poietin)$/,{uz:"EPO turidagi modda (S2): har doim taqiqlangan.",ru:"Вещество типа ЭПО (S2): запрещено всегда."}],
 [/(tropin)$/,{uz:"O'sish gormoni / gonadotropin turi (S2): taqiqlangan bo'lishi ehtimoli yuqori.",ru:"Тип гормона роста / гонадотропина (S2): высока вероятность запрета."}],
 [/(relin)$/,{uz:"GHRH/GnRH peptid turi (S2): taqiqlangan bo'lishi ehtimoli yuqori.",ru:"Пептид типа GHRH/GnRH (S2): высока вероятность запрета."}],
 [/arine$/,{uz:"«-arin» (SARM/metabolik modulyator): odatda S1/S4 — taqiqlangan.",ru:"«-арин» (SARM/метаболический модулятор): обычно S1/S4 — запрещён."}],
 [/(trozol|trozole)$/,{uz:"Aromataza inhibitori (S4): har doim taqiqlangan.",ru:"Ингибитор ароматазы (S4): запрещён всегда."}],
 [/(oxifen|oxifene|oksifen|mifen|mifene)$/,{uz:"Estrogen modulyatori (S4): har doim taqiqlangan bo'lishi ehtimoli yuqori.",ru:"Модулятор эстрогена (S4): высока вероятность запрета."}]
];
function stemHints(q){
  var out=[],seen={};
  flat(q).split(' ').forEach(function(w){
    if(w.length<6)return;
    STEMS.forEach(function(s){if(s[0].test(w)&&!seen[s[1].uz]){seen[s[1].uz]=1;out.push(s[1]);}});
  });
  return out.slice(0,2);
}

/* ═══ 5. MATNLAR ═══ */
var TX={
 uz:{red:"TAQIQLANGAN",blue:"TUE / CHEKLOV BILAN",amber:"NAZORATDA (taqiqlanmagan)",orange:"EHTIYOT — SHARTLI",green:"RUXSAT ETILGAN",
  wada:"WADA toifasi",hol:"Holat",tue:"TUE talabi",risk:"Xavf darajasi",note:"Muhim eslatma",alt:"Xavfsiz muqobil",todo:"Nima qilish kerak",
  you:"Siz yozdingiz",found:"Tizim aniqladi",conf:"Aniqlik",syn:"Sinonimlar / savdo nomlari",
  confirm:"Eng yaqin moslik topildi — shu dorimi? Qadoqdagi xalqaro nomni (INN) tekshirib tasdiqlang.",
  amb:"Bir nechta yaqin nom bor — quyidagilarning hammasini ko'rib chiqing:",others:"Yana yaqin nomlar",
  nfT:"bazada topilmadi",nfWarn:"«Topilmadi» — bu «ruxsat etilgan» degani EMAS. Shubha bo'lsa qabul qilmang.",
  didyou:"Aytmoqchimisiz?",stem:"Tuzilma bo'yicha ehtimoliy ogohlantirish",
  src:"Manba: mahalliy WADA 2026 bazasi. Yakuniy javobgarlik sportchida (Strict Liability). Shubhada — qabul qilmang va tasdiqlang.",
  official:"Rasmiy manbalar",wl:"📜 WADA ro'yxati",gd:"🔎 Global DRO",un:"🇺🇿 UzNADO",
  sumT:"Natija xulosasi",sP:"taqiqlangan",sC:"shartli/cheklangan",sA:"ruxsat/nazorat",sN:"topilmadi",
  adv:"Savol bo'yicha eslatma",rel:"Tegishli dorilar",recent:"🕘 Oxirgi qidiruvlar",
  actR:["Qabul qilmang.","Shifokor tayinlagan bo'lsa — davolovchi shifokor va UzNADO bilan TUE masalasini OLDINDAN hal qiling.","Qadoq va retseptni saqlab qo'ying."],
  actB:["Faqat belgilangan shakl, doza va yo'l bilan qabul qilinadi.","TUE kerak bo'lsa, ariza oldindan topshiriladi.","Shifokor bilan aniq reja tuzing."],
  actO:["Ruxsat musobaqa vaqti, sport turi va dozaga bog'liq — shifokor/UzNADO bilan aniqlang.","Kombinatsiyalangan preparat bo'lsa, tarkibidagi har bir moddani alohida tekshiring."],
  actA:["Taqiqlanmagan, lekin WADA kuzatuvida.","Me'yorida qabul qiling, tarkibni o'qing."],
  actG:["Dori o'zi taqiqlanmagan. Kombinatsiyalangan preparatda har bir faol modda alohida tekshiriladi.","Qo'shimcha (BAD) bo'lsa, Informed Sport / NSF Certified for Sport kabi sertifikatli mahsulot xavfni kamaytiradi (100% kafolat emas)."],
  ph:"Dori nomini yozing…",ms:"ms",in:"moddada"},
 ru:{red:"ЗАПРЕЩЕНО",blue:"ТИ / С ОГРАНИЧЕНИЯМИ",amber:"МОНИТОРИНГ (не запрещено)",orange:"ОСТОРОЖНО — УСЛОВНО",green:"РАЗРЕШЕНО",
  wada:"Категория WADA",hol:"Статус",tue:"Требование ТИ",risk:"Уровень риска",note:"Важное примечание",alt:"Безопасная альтернатива",todo:"Что делать",
  you:"Вы ввели",found:"Система определила",conf:"Точность",syn:"Синонимы / торговые названия",
  confirm:"Найдено ближайшее совпадение — это тот препарат? Подтвердите по международному названию (МНН) на упаковке.",
  amb:"Есть несколько близких названий — посмотрите все:",others:"Другие близкие названия",
  nfT:"не найдено в базе",nfWarn:"«Не найдено» НЕ значит «разрешено». При сомнении не принимайте.",
  didyou:"Вы имели в виду?",stem:"Предположение по структуре названия",
  src:"Источник: локальная база WADA 2026. Ответственность — на спортсмене (Strict Liability). При сомнении — не принимайте и уточните.",
  official:"Официальные источники",wl:"📜 Список WADA",gd:"🔎 Global DRO",un:"🇺🇿 UzNADO",
  sumT:"Итог проверки",sP:"запрещено",sC:"условно/ограничено",sA:"разрешено/мониторинг",sN:"не найдено",
  adv:"Напоминание по запросу",rel:"Связанные препараты",recent:"🕘 Недавние запросы",
  actR:["Не принимайте.","Если назначил врач — заранее решите вопрос ТИ с лечащим врачом и UzNADO.","Сохраните упаковку и рецепт."],
  actB:["Только в указанной форме, дозе и способе введения.","Если нужен ТИ — заявка подаётся заранее.","Составьте чёткий план с врачом."],
  actO:["Разрешение зависит от времени соревнования, вида спорта и дозы — уточните у врача/UzNADO.","Для комбинированных препаратов проверяйте каждое вещество отдельно."],
  actA:["Не запрещено, но под наблюдением WADA.","Принимайте умеренно, читайте состав."],
  actG:["Сам препарат не запрещён. В комбинированных препаратах каждое действующее вещество проверяется отдельно.","Для добавок сертифицированные продукты (Informed Sport / NSF Certified for Sport) снижают риск (не 100%)."],
  ph:"Введите название препарата…",ms:"мс",in:"веществ в базе"}
};
function T(){return TX[isRu()?'ru':'uz'];}
function kindOf(d){return {'dr-prohibited':'red','dr-tue':'blue','dr-monitoring':'amber','dr-caution':'orange','dr-allowed':'green'}[d.cls]||'orange';}
var ICON={red:'🚫',blue:'📝',amber:'👁',orange:'⚠️',green:'✅'};
function acts(kind){var t=T();return {red:t.actR,blue:t.actB,orange:t.actO,amber:t.actA,green:t.actG}[kind];}
function pct(s){return Math.round(Math.min(.99,s)*100);}


/* ═══ BILINGUAL DRUG TRANSLATOR (UZ -> RU) ═══ */
var RU_DRUG_DATA = {
  "Testosteron": {name:"Тестостерон",cat:"S1 Анаболический стероид",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года дисквалификации)",note:"Мужской половой гормон. Применяется для искусственного роста мышечной массы и силы. 100% запрещён WADA. ТИ не выдаётся.",alt:"Естественный баланс белка, полноценное восстановление и сон (22:00–06:00)."},
  "Nandrolon": {name:"Нандролон",cat:"S1 Анаболический стероид",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Классический анаболический стероид. Метаболиты (19-норандростерон) выявляются в организме до 18 месяцев. Строго запрещён.",alt:"Разрешённый креатин моногидрат."},
  "Stanozolol": {name:"Станозолол",cat:"S1 Анаболический стероид",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Сильный анаболитик. Выраженная токсичность для печени, пересушивает связки и повышает риск травм. Запрещён.",alt:"Изолят сывороточного белка, коллаген, хондроитин/глюкозамин."},
  "Metandienon": {name:"Метандиенон",cat:"S1 Анаболический стероид",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Таблетки «метан». Резко повышает печёночные ферменты и риск аденомы печени. Категорически запрещён.",alt:"Незаменимые аминокислоты (EAA), качественное питание."},
  "Oksandrolon": {name:"Оксандролон",cat:"S1 Анаболический стероид",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Пероральный стероид. Нарушает гормональный фон и фертильность. Всегда запрещён.",alt:"Сывороточный протеин (Whey), витаминно-минеральные комплексы."},
  "Klenbuterol": {name:"Кленбутерол",cat:"S1 Анаболическое средство",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Анаболический и жиросжигающий эффект. Повышает риск гипертрофии сердца и инфаркта. Может попадать через мясо (осторожно!).",alt:"Кардионагрузки, грамотный дефицит калорий, L-карнитин."},
  "Ostarin (SARM)": {name:"Остарин (SARM)",cat:"S1 Модуляторы SARM",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Селективный модулятор андрогеновых рецепторов. Часто скрыт в БАДах. Не принимайте добавки без независимой сертификации!",alt:"Протеин и креатин с сертификатом Informed Sport или NSF."},
  "Eritropoetin (EPO)": {name:"Эритропоэтин (ЭПО)",cat:"S2 Пептидные гормоны",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (от 4 лет до пожизненного)",note:"Сгущает кровь, повышая риск тромбозов, инсульта и внезапной остановки сердца. Строго запрещён.",alt:"Высокогорные сборы (гипоксия), контроль ферритина и B12."},
  "Somatropin (hGH)": {name:"Соматропин (ГР / hGH)",cat:"S2 Факторы роста",status:"Всегда запрещён",tue:"ТИ только при тяжёлой патологии гипофиза",risk:"Высокий (4 года)",note:"Гормон роста. Вызывает акромегалию, деформацию костей, рост внутренних органов и диабет. Запрещён.",alt:"Глубокий сон (естественная секреция СТГ), аргинин и орнитин."},
  "Insulin": {name:"Инсулин",cat:"S2 Пептиды",status:"Требуется ТИ (только при диабете)",tue:"ДА — обязательно ТИ при диабете 1 или 2 типа",risk:"Высокий без диабета (4 года)",note:"У здорового спортсмена вызывает тяжёлую гипогликемическую кому и смерть. Без ТИ запрещён.",alt:"Естественный гликемический баланс углеводов и белков."},
  "Meldoniy (Mildronat)": {name:"Мельдоний (Милдронат)",cat:"S4 Гормональные и метаболические модуляторы",status:"Всегда запрещён",tue:"Нет (в спорте не выдаётся)",risk:"Высокий (2–4 года)",note:"В списке WADA (S4.4) с 2016 года. Блокирует биосинтез карнитина, сохраняется в организме месяцами. ТИ почти не выдаётся.",alt:"L-карнитин (разрешён), Коэнзим Q10, Магне B6, Аспаркам."},
  "Trimetazidin": {name:"Триметазидин",cat:"S4 Метаболический модулятор",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Меняет энергетический обмен миокарда. Запрещён во все время (S4).",alt:"Инозин (Рибоксин — разрешён), препараты калия и магния."},
  "Klomifen": {name:"Кломифен",cat:"S4 Антиэстроген",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Антиэстроген (ПКТ). Запрещён WADA как гормональный модулятор во все время.",alt:"Витамин D3, цинк и естественное восстановление."},
  "Tamoksifen": {name:"Тамоксифен",cat:"S4 Антиэстроген",status:"Всегда запрещён",tue:"ТИ только в онкологии",risk:"Высокий (4 года)",note:"Блокатор эстрогеновых рецепторов. Запрещён во все время.",alt:"Не применяется в здоровом спорте."},
  "Furosemid": {name:"Фуросемид (Лазикс)",cat:"S5 Диуретик (мочегонное)",status:"Всегда запрещён",tue:"Нет (в спорте ТИ не даётся)",risk:"Высокий (до 4 лет дисквалификации)",note:"Мощный петлевой диуретик. Используется для сгонки веса и маскировки допинга. Запрещён во все время!",alt:"Естественное регулирование водно-солевого баланса с врачом."},
  "Torasemid": {name:"Торасемид",cat:"S5 Диуретик",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Более мощный диуретик, чем фуросемид. Запрещённое маскирующее средство.",alt:"Естественный контроль водного баланса."},
  "Spironolakton": {name:"Спиронолактон (Верошпирон)",cat:"S5 Диуретик",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Калийсберегающий диуретик — тем не менее полностью запрещён в классе S5.",alt:"Магне B6, коррекция питания с врачом."},
  "Gidroxlorotiazid": {name:"Гидрохлоротиазид",cat:"S5 Диуретик",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Часто входит в состав комбинированных лекарств от давления! Проверяйте состав каждой таблетки.",alt:"Разрешённые кардиологические препараты под контролем врача."},
  "Kokain": {name:"Кокаин",cat:"S6 Стимулятор / Наркотическое средство",status:"Всегда запрещён / Запрещён в соревновании (особая категория)",tue:"Нет",risk:"Высокий + уголовная ответственность",note:"Тяжёлое наркотическое средство. Строго запрещено спортивными и государственными правилами.",alt:"Только здоровый режим."},
  "Amfetamin": {name:"Амфетамин",cat:"S6 Стимулятор",status:"Запрещён в соревновании",tue:"Нет",risk:"Высокий (4 года)",note:"Искусственно подавляет усталость, провоцирует острые сердечно-сосудистые нарушения. Запрещён.",alt:"Креатин, витамины группы B, полноценный сон."},
  "Sibutramin": {name:"Сибутрамин",cat:"S6 Стимулятор",status:"Запрещён в соревновании",tue:"Нет",risk:"Высокий (4 года)",note:"Часто скрывается в капсулах и «чаях» для похудения!",alt:"Сбалансированный рацион питания."},
  "DMAA (Geranamin)": {name:"ДМАА (Геранамин)",cat:"S6 Стимулятор",status:"Запрещён в соревновании",tue:"Нет",risk:"Высокий (4 года)",note:"Встречается в предтренировочных комплексах. Резко повышает давление.",alt:"Цитрат магния, умеренный кофеин, изотоники."},
  "Psevdoefedrin": {name:"Псевдоэфедрин",cat:"S6 Стимулятор",status:"Запрещён в соревновании (>150 мкг/мл)",tue:"Нет",risk:"Высокий",note:"Содержится во многих противопростудных порошках («Терафлю», «Тайлол Хот» и др.). Отменить минимум за 24–48 часов до старта!",alt:"Парацетамол, витамин C, тёплое питьё."},
  "Kofein": {name:"Кофеин",cat:"Программа мониторинга WADA",status:"МОНИТОРИНГ (Разрешён)",tue:"Нет",risk:"Низкий (в меру безопасен)",note:"Кофеин НЕ запрещён WADA (пороговый лимит в моче отменён с 2004 года), наблюдается в Программе мониторинга. Обычный кофе/чай безопасны; энергетики не рекомендуются из-за риска скрытых стимуляторов.",alt:"Зелёный чай, натуральный зерновой кофе."},
  "Salbutamol": {name:"Сальбутамол (ингалятор)",cat:"S3 Бета-2 агонист",status:"Разрешён в ингаляции до 1600 мкг/24 ч (не более 600 мкг/8 ч)",tue:"До лимита ТИ не нужно; свыше — обязательно ТИ",risk:"Средний",note:"Разрешён только ингаляционно в пределах суточного лимита WADA. Инъекции и таблетки ПОЛНОСТЬЮ ЗАПРЕЩЕНЫ!",alt:"Согласованная с врачом доза ингалятора."},
  "Tramadol": {name:"Трамадол",cat:"S7 Наркотический анальгетик",status:"ЗАПРЕЩЁН в соревновании с 2024 года",tue:"Требуется ТИ по медпоказаниям",risk:"Высокий (2–4 года)",note:"С 1 января 2024 года трамадол запрещён в соревновательный период! Оставьте достаточный период выведения до старта.",alt:"Парацетамол, Ибупрофен, местные НПВС."},
  "Deksametazon": {name:"Дексаметазон",cat:"S9 Глюкокортикоид",status:"Запрещён в соревновании (орально/инъекции)",tue:"Требуется ТИ при медпоказаниях",risk:"Высокий",note:"Таблетки, инъекции (в/в, в/м) и ректально запрещены в соревновании. Наружные мази, капли и ингаляции обычно допустимы — уточняйте у врача.",alt:"НПВС (Ибупрофен, Диклофенак)."},
  "Paratsetamol": {name:"Парацетамол",cat:"Анальгетик-антипиретик",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Безопасно (до 3–4 г/сут)",note:"Самое безопасное жаропонижающее и обезболивающее для спортсменов. Разрешено и на соревнованиях.",alt:"Ибупрофен."},
  "Ibuprofen": {name:"Ибупрофен",cat:"НПВС (противовоспалительное)",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Безопасно",note:"Разрешён при болях в мышцах и суставах. Принимать после еды.",alt:"Парацетамол."},
  "Aspirin": {name:"Аспирин",cat:"НПВС / Антиагрегант",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Безопасно",note:"Полностью разрешён на тренировках и соревнованиях.",alt:"Парацетамол."},
  "Kreatin Monogidrat": {name:"Креатин моногидрат",cat:"Спортивная добавка",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Безопасно",note:"Самая изученная спортивная добавка. Выбирайте бренды с сертификатом Informed Sport / NSF.",alt:"Мясо, рыба."},
  "Zardob Oqsili (Whey Protein)": {name:"Сывороточный протеин (Whey)",cat:"Спортивное питание",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Безопасно (при сертификации)",note:"Белок для восстановления. Используйте только сертифицированные бренды (Informed Sport / NSF / Cologne List).",alt:"Яйца, говядина, творог."},
  "L-Karnitin": {name:"L-Карнитин",cat:"Метаболическое средство",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Безопасно",note:"Легальная и безопасная альтернатива мельдонию!",alt:"Говядина, молочные продукты."},
  "Omega-3": {name:"Омега-3 (рыбий жир)",cat:"Полезные жирные кислоты",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Безопасно",note:"Полностью разрешено для поддержки сердца и суставов.",alt:"Жирная рыба, льняное масло."},
  "Efedrin": {name:"Эфедрин",cat:"S6 Стимулятор",status:"Запрещён в соревновании (>10 мкг/мл)",tue:"ТИ по медпоказаниям",risk:"Высокий",note:"Встречается в каплях от насморка и жиросжигателях (экстракт эфедры / Ma Huang).",alt:"Парацетамол, витамин C, солевой раствор для носа."},
  "Prednizolon / Prednizon": {name:"Преднизолон / Преднизон",cat:"S9 Глюкокортикоид",status:"Запрещён в соревновании (таблетки/инъекции)",tue:"Требуется ТИ при медпоказаниях",risk:"Высокий",note:"Запрещён в соревновании системно (орально, в/в, в/м, ректально). Мази и капли обычно допустимы — уточните у врача и UzNADO.",alt:"НПВС (ибупрофен, диклофенак) по согласованию с врачом."},
  "Metilprednizolon (Medrol)": {name:"Метилпреднизолон (Медрол)",cat:"S9 Глюкокортикоид",status:"Запрещён в соревновании (таблетки/инъекции)",tue:"Требуется ТИ при медпоказаниям",risk:"Высокий",note:"Запрещён в соревновании системно (орально, в/в, в/м, ректально). Уточняйте путь введения и период выведения.",alt:"НПВС (ибупрофен, диклофенак)."},
  "Gidrokortizon": {name:"Гидрокортизон",cat:"S9 Глюкокортикоид",status:"Запрещён в соревновании (таблетки/инъекции)",tue:"Требуется ТИ при медпоказаниях",risk:"Высокий",note:"Системный приём запрещён в соревновании. Наружные кремы и мази обычно допустимы — проверьте с врачом.",alt:"НПВС по назначению врача."},
  "Terbutalin": {name:"Тербуталин",cat:"S3 Бета-2 агонист",status:"Всегда запрещён (требуется ТИ)",tue:"ДА — обязательно ТИ при астме",risk:"Высокий",note:"В отличие от сальбутамола, формальдегид/ингаляция тербуталина не имеет исключения по дозе без ТИ.",alt:"Разрешённый ингалятор (например, сальбутамол) по назначению врача."},
  "Formoterol": {name:"Формотерол",cat:"S3 Бета-2 агонист",status:"Разрешён в ингаляции до 54 мкг/24 ч",tue:"При превышении лимита или другом пути введения — ТИ",risk:"Средний",note:"Входит в состав некоторых ингаляторов (Симбикорт, Фостер). Разрешён только ингаляционно в пределах лимита.",alt:"Доза ингалятора строго по назначению врача."},
  "Salmeterol": {name:"Салметерол",cat:"S3 Бета-2 агонист",status:"Разрешён в ингаляции до 200 мкг/24 ч",tue:"При превышении лимита или другом пути введения — ТИ",risk:"Средний",note:"Входит в состав ингаляторов от астмы (Серетид). Только ингаляционно в рамках суточной дозы.",alt:"Доза ингалятора строго по назначению врача."},
  "Ibutamoren (MK-677)": {name:"Ибутаморен (MK-677)",cat:"S2 Секретагог гормона роста",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Исследовательское вещество для повышения гормона роста. Запрещено и повышает риск диабета.",alt:"Режим тренировок, сна и питания."},
  "Xlortalidon": {name:"Хлорталидон",cat:"S5 Диуретик (мочегонное)",status:"Всегда запрещён",tue:"ТИ рассматривается по медпоказаниям",risk:"Высокий (до 4 лет)",note:"Встречается в препаратах от давления. Запрещён как маскирующее средство.",alt:"Разрешённый препарат от давления под контролем врача."},
  "Bumetanid": {name:"Буметанид",cat:"S5 Диуретик (мочегонное)",status:"Всегда запрещён",tue:"ТИ рассматривается по медпоказаниям",risk:"Высокий (до 4 лет)",note:"Мощный петлевой диуретик. Всегда запрещён.",alt:"Альтернативное лечение с врачом."},
  "Triamteren / Amilorid": {name:"Триамтерен / Амилорид",cat:"S5 Диуретик (мочегонное)",status:"Всегда запрещён",tue:"ТИ рассматривается по медпоказаниям",risk:"Высокий (до 4 лет)",note:"Калийсберегающие диуретики, нередко в комбинированных лекарствах от гипертонии.",alt:"Альтернативное лечение с врачом."},
  "Atsetazolamid": {name:"Ацетазоламид (Диакарб)",cat:"S5 Диуретик (мочегонное)",status:"Всегда запрещён",tue:"ТИ рассматривается по медпоказаниям",risk:"Высокий (до 4 лет)",note:"Применяется при горной болезни и глаукоме — в спорте всё равно запрещён без ТИ.",alt:"План ТИ или альтернатива с врачом."},
  "Indapamid": {name:"Индапамид",cat:"S5 Диуретик (мочегонное)",status:"Всегда запрещён",tue:"ТИ рассматривается по медпоказаниям",risk:"Высокий (до 4 лет)",note:"Встречается в лекарствах от давления (Арифон, Равел). Проверяйте состав с врачом.",alt:"Разрешённый препарат от давления."},
  "Anastrozol": {name:"Анастрозол",cat:"S4 Гормональный антагонист и модулятор",status:"Всегда запрещён",tue:"ТИ только по медпоказаниям",risk:"Высокий (4 года)",note:"Ингибитор ароматазы. Запрещён во все время.",alt:"Только под медицинским контролем."},
  "Letrozol": {name:"Летрозол",cat:"S4 Гормональный антагонист и модулятор",status:"Всегда запрещён",tue:"ТИ только по медпоказаниям",risk:"Высокий (4 года)",note:"Ингибитор ароматазы. Запрещён во все время.",alt:"Только под медицинским контролем."},
  "Modafinil": {name:"Модафинил",cat:"S6 Стимулятор",status:"Запрещён в соревновании",tue:"ТИ при нарколепсии",risk:"Высокий",note:"Стимулятор бодрствования. Запрещён в соревновательный период.",alt:"Гигиена сна, умеренный кофеин."},
  "Metilfenidat": {name:"Метилфенидат (Риталин)",cat:"S6 Стимулятор",status:"Запрещён в соревновании",tue:"ТИ при СДВГ",risk:"Высокий",note:"Препарат при СДВГ. В соревновании требуется ТИ.",alt:"Консультация врача для оформления ТИ."},
  "Beta-blokatorlar (Anaprilin, Egilok, Konkor)": {name:"Бета-блокаторы (Анаприлин, Эгилок, Конкор)",cat:"P1 Бета-блокаторы (отдельные виды спорта)",status:"Запрещены в отдельных видах спорта",tue:"Требуется ТИ в профильных видах",risk:"Зависит от вида спорта",note:"Запрещены в стрельбе, стрельбе из лука, автоспорте, бильярде, гольфе, дартсе и некоторых других видах. Уточните правила вашей федерации.",alt:"Подбор безопасного аналога с врачом."},
  "Kannabis (marixuana, gashish, THC)": {name:"Каннабис (ТГК / марихуана)",cat:"S8 Каннабиноиды",status:"Запрещён в соревновании",tue:"ТИ по медпоказаниям",risk:"Высокий",note:"ТГК запрещён в соревновании. Чистый КБД (CBD) формально допустим, но многие продукты содержат следы ТГК.",alt:"Немедикаментозное восстановление, сон, врач."},
  "Narkotik analgetiklar (Morfin, Fentanil, Metadon, Oksikodon)": {name:"Наркотические анальгетики (Морфин, Фентанил, Метадон)",cat:"S7 Наркотики",status:"Запрещены в соревновании",tue:"Требуется ТИ",risk:"Высокий (2–4 года)",note:"Сильные опиоидные анальгетики запрещены в соревновательный период.",alt:"Парацетамол, Ибупрофен по назначению врача."},
  "Trenbolon": {name:"Тренболон",cat:"S1 Анаболический стероид",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Мощный анаболический стероид, крайне токсичен для сердца, печени и психики.",alt:"Тренировки, питание, разрешённый креатин."},
  "Boldenon": {name:"Болденон",cat:"S1 Анаболический стероид",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Анаболический стероид (часто ветеринарного происхождения). Строго запрещён.",alt:"Грамотный режим тренировок и питания."},
  "DHEA (Prasteron)": {name:"ДГЭА (Прастерон)",cat:"S1 Анаболический агент",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Превращается в организме в тестостерон; встречается в некоторых БАД.",alt:"Только сертифицированные добавки с чистым составом."},
  "hCG (xorionik gonadotropin)": {name:"ХГЧ (хорионический гонадотропин)",cat:"S2 Пептидные гормоны",status:"Всегда запрещён у мужчин",tue:"ТИ только по медпоказаниям",risk:"Высокий (4 года)",note:"Стимулирует выработку тестостерона у мужчин. Запрещён во все время.",alt:"Только по медпоказаниям у врача."},
  "Kardarin (GW1516) / SR9009": {name:"Кардарин (GW1516) / SR9009",cat:"S4 Метаболический модулятор",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Исследовательское химическое соединение. Строго запрещено WADA и опасно для здоровья.",alt:"Аэробная подготовка и рациональное питание."},
  "SARMlar (Ligandrol, Andarin, RAD-140)": {name:"SARM (Лигандрол, Андарин, RAD-140)",cat:"S1 Анаболический агент (SARM)",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Селективные модуляторы андрогеновых рецепторов. Часто скрываются в БАД.",alt:"Тренировки и сертифицированное питание."},
  "BPC-157": {name:"BPC-157",cat:"S0 Неутверждённые субстанции",status:"Всегда запрещён",tue:"Нет",risk:"Высокий (4 года)",note:"Неодобренный пептид для восстановления. Запрещён WADA по классу S0.",alt:"Физиотерапия и реабилитация."},
  "Higenamin (BAD tarkibida)": {name:"Хигенамин (в составе БАД)",cat:"S3 Бета-2 агонист",status:"Всегда запрещён",tue:"Нет",risk:"Высокий",note:"Часто встречается в жиросжигателях — иногда под названием экстракта нандины или лотоса.",alt:"Проверенные продукты с открытым составом."},
  "Diklofenak": {name:"Диклофенак",cat:"Анальгетик (НПВС)",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Низкий",note:"Не входит в список WADA. Учитывайте побочные эффекты на ЖКТ и сердце — принимайте по назначению врача.",alt:"Ибупрофен."},
  "Ketorolak (Ketanov)": {name:"Кеторолак (Кетанов)",cat:"Анальгетик (НПВС)",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Низкий",note:"Не запрещён WADA. Сильное обезболивающее — принимать коротким курсом по совету врача.",alt:"Парацетамол, Ибупрофен."},
  "Analgin (Metamizol)": {name:"Анальгин (Метамизол)",cat:"Анальгетик-антипиретик",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Низкий",note:"Не входит в список WADA. Принимайте по рекомендации врача.",alt:"Парацетамол."},
  "Omeprazol": {name:"Омепразол (Омез)",cat:"Препарат для желудка (ИПП)",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Низкий",note:"Не входит в список WADA.",alt:""},
  "Antigistaminlar (Loratadin, Tsetirizin, Suprastin)": {name:"Антигистаминные (Лоратадин, Цетиризин, Супрастин)",cat:"Препарат от аллергии",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Низкий",note:"Обычные антигистаминные разрешены. Внимание: формы с пометкой «D» могут содержать псевдоэфедрин — проверяйте состав!",alt:""},
  "Antibiotiklar (Amoksitsillin, Azitromitsin, Seftriakson)": {name:"Антибиотики (Амоксициллин, Азитромицин, Цефтриаксон)",cat:"Антибиотик",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Низкий",note:"Сами антибиотики не запрещены. Однако внутривенные вливания свыше 100 мл за 12 часов могут нарушать правило M2!",alt:""},
  "Vitaminlar (C, D, B12, Magniy)": {name:"Витамины (C, D, B12, Магний)",cat:"Витамины / минералы",status:"✅ РАЗРЕШЕНО",tue:"Нет",risk:"Низкий",note:"Витамины не запрещены, но комплексные БАД могут содержать скрытые примеси — выбирайте сертифицированные марки.",alt:""},
  "Kapelnitsa (vena ichiga infuziya)": {name:"Капельница (внутривенная инфузия)",cat:"M2 Химическая и физическая манипуляция",status:"ЗАПРЕЩЕНО свыше 100 мл / 12 ч",tue:"Исключение в стационаре и при экстренной помощи",risk:"Высокий",note:"Внутривенные инфузии свыше 100 мл за 12 часов запрещены (кроме стационара, операции или клинической диагностики). Перед капельницей советуйтесь с врачом и UzNADO.",alt:"Пероральные жидкости и электролиты по назначению врача."}
};

function dField(d, key){
  if(isRu()){
    var ru = RU_DRUG_DATA[d.name];
    if(ru && ru[key] !== undefined) return ru[key];
  }
  return d[key] || '';
}

/* ═══ 6. RENDER ═══ */
function card(m,q,opts){
  opts=opts||{};var d=m.drug,t=T(),kind=kindOf(d),ac=acts(kind);
  var al=(d.alias||[]).filter(function(a){return isRu() ? /[а-яё]/i.test(a) : !/[а-яё]/i.test(a);}).slice(0,6).join(', '); if(!al && d.alias) al=d.alias.slice(0,5).join(', ');
  var fix=(m.score<.985&&!opts.noFix)?'<div class="nxr-fix"><span>'+t.you+': <b>«'+esc(q)+'»</b></span><i>→</i><span>'+t.found+': <b>'+esc(dField(d,'name'))+'</b></span></div>':'';
  var conf=opts.conf?'<div class="nxr-conf" title="'+t.conf+'">'+t.conf+'<b>'+pct(m.score)+'%</b></div>':'';
  var det=
   '<div class="nxr-grid">'+
    '<div><small>'+t.wada+'</small><b>'+esc(dField(d,'cat')||'—')+'</b></div>'+
    '<div><small>'+t.hol+'</small><b>'+esc(dField(d,'status')||'—')+'</b></div>'+
    '<div><small>'+t.tue+'</small><b>'+esc(dField(d,'tue')||'—')+'</b></div>'+
    '<div><small>'+t.risk+'</small><b class="nxr-rk">'+esc(dField(d,'risk')||'—')+'</b></div>'+
   '</div>'+
   (dField(d,'note')?'<div class="nxr-note"><span>📋</span><div><small>'+t.note+'</small>'+esc(dField(d,'note'))+'</div></div>':'')+
   (dField(d,'alt')?'<div class="nxr-alt"><span>🌿</span><div><small>'+t.alt+'</small>'+esc(dField(d,'alt'))+'</div></div>':'')+
   '<div class="nxr-act"><small>'+t.todo+'</small><ul>'+ac.map(function(a){return '<li>'+esc(a)+'</li>';}).join('')+'</ul></div>';
  var head='<div class="nxr-top"><div class="nxr-ico">'+ICON[kind]+'</div><div class="nxr-ttl"><div class="nxr-st">'+t[kind]+'</div><div class="nxr-nm">'+esc(dField(d,'name'))+'</div>'+(al?'<div class="nxr-al">'+t.syn+': '+esc(al)+'</div>':'')+'</div>'+conf+'</div>';
  if(opts.compact){
    return '<details class="nxr nxr-'+kind+'"'+(kind==='red'?' open':'')+'><summary>'+head+'</summary>'+fix+det+'</details>';
  }
  return '<div class="nxr nxr-'+kind+'">'+head+fix+det+'</div>';
}
function chips(list){
  return list.map(function(m){return '<button type="button" class="nxr-chip nxr-c-'+kindOf(m.drug)+'" data-q="'+esc(dField(m.drug,'name'))+'">'+ICON[kindOf(m.drug)]+' '+esc(dField(m.drug,'name'))+'</button>';}).join('');
}
function officialLinks(){
  var t=T();
  return '<div class="nxr-links"><small>'+t.official+'</small><a href="https://www.wada-ama.org/en/prohibited-list" target="_blank" rel="noopener noreferrer">'+t.wl+'</a><a href="https://www.globaldro.com/" target="_blank" rel="noopener noreferrer">'+t.gd+'</a><a href="https://talim-uznada.uz/landing" target="_blank" rel="noopener noreferrer">'+t.un+'</a></div>';
}
function intentBox(it){
  var t=T(),rel=(it.d||[]).map(byName).filter(Boolean).map(function(d){return {drug:d};});
  return '<div class="nxr-adv"><div class="nxr-adv-h">💡 '+t.adv+'</div><p>'+esc(it.t[isRu()?'ru':'uz'])+'</p>'+(rel.length?'<small>'+t.rel+'</small><div class="nxr-chips">'+chips(rel)+'</div>':'')+'</div>';
}
function notFound(q,r,it){
  var t=T(),sh=stemHints(q),near=(r.near||[]).filter(function(m){return m.score>=.72;}).slice(0,4);
  return '<div class="nxr nxr-nf"><div class="nxr-top"><div class="nxr-ico">🔍</div><div class="nxr-ttl"><div class="nxr-st">'+t.sN.toUpperCase()+'</div><div class="nxr-nm">«'+esc(q)+'» '+t.nfT+'</div></div></div>'+
   '<div class="nxr-warnbox">⚠️ '+t.nfWarn+'</div>'+
   (sh.length?'<div class="nxr-stem"><small>'+t.stem+'</small>'+sh.map(function(s){return '<p>🧬 '+esc(s[isRu()?'ru':'uz'])+'</p>';}).join('')+'</div>':'')+
   (near.length?'<div class="nxr-near"><small>'+t.didyou+'</small><div class="nxr-chips">'+chips(near)+'</div></div>':'')+
   officialLinks()+'</div>';
}
function one(q,compact){
  var r=search(q),it=intentOf(q),t=T(),h='',kinds=null,len=flat(q).replace(/ /g,'').length;
  if(r.tier==='B'&&len<=4){
    var pn=r.near.filter(function(m){return m.score>=.7;}).slice(0,6);
    return {html:'<div class="nxr-confirm">✍️ '+t.didyou+'</div><div class="nxr-chips">'+chips(pn)+'</div>',kind:'nf',top:null};
  }
  if(it&&r.tier==='C'){
    return {html:intentBox(it)+officialLinks(),kind:'orange',top:null};
  }
  if(r.tier==='A'){
    h+=card(r.matches[0],q,{compact:compact,conf:true});
    var rest=r.matches.slice(1).filter(function(m){return m.drug!==r.matches[0].drug&&m.score>=.8;});
    if(rest.length)h+='<div class="nxr-others"><small>'+t.others+'</small><div class="nxr-chips">'+chips(rest)+'</div></div>';
    kinds=kindOf(r.matches[0].drug);
  }else if(r.tier==='B'){
    h+='<div class="nxr-confirm">🤔 '+(r.amb?t.amb:t.confirm)+'</div>';
    var show=r.amb?r.matches.slice(0,2):r.matches.slice(0,1);
    show.forEach(function(m){h+=card(m,q,{compact:compact,conf:true});});
    var more=r.matches.slice(show.length);
    if(more.length)h+='<div class="nxr-others"><small>'+t.others+'</small><div class="nxr-chips">'+chips(more)+'</div></div>';
    kinds=kindOf(show.reduce(function(a,b){return sev(b.drug)>sev(a.drug)?b:a;}).drug);
  }else{
    h+=notFound(q,r,it);kinds='nf';
  }
  if(it&&r.tier!=='A')h=intentBox(it)+h;
  return {html:h,kind:kinds,top:(r.tier!=='C'&&r.matches[0])?r.matches[0].drug.name:null};
}
function splitQ(q){
  return q.split(/[,;+\n\/]+|\s(?:va|и|and|&)\s/i).map(function(s){return s.trim();}).filter(Boolean).slice(0,6);
}
function run(q){
  var t0=(window.performance&&performance.now)?performance.now():Date.now(),t=T();
  var parts=splitQ(q);if(!parts.length)return {html:'',nf:false,tops:[]};
  var multi=parts.length>1,res=parts.map(function(p){return {q:p,o:one(p,multi)};});
  var html='<div class="nxr-wrap">';
  if(multi){
    var c={red:0,mix:0,ok:0,nf:0};
    res.forEach(function(x){var k=x.o.kind;if(k==='red')c.red++;else if(k==='blue'||k==='orange')c.mix++;else if(k==='green'||k==='amber')c.ok++;else c.nf++;});
    html+='<div class="nxr-sum"><b>'+t.sumT+'</b><span class="s-red">🚫 '+c.red+' '+t.sP+'</span><span class="s-mix">⚠️ '+c.mix+' '+t.sC+'</span><span class="s-ok">✅ '+c.ok+' '+t.sA+'</span><span class="s-nf">🔍 '+c.nf+' '+t.sN+'</span></div>';
    res.forEach(function(x){html+='<div class="nxr-part"><div class="nxr-q">«'+esc(x.q)+'»</div>'+x.o.html+'</div>';});
  }else html+=res[0].o.html;
  var ms=((window.performance&&performance.now)?performance.now():Date.now())-t0;
  html+='<div class="nxr-foot"><span>⚡ '+(ms<1?'<1':ms.toFixed(1))+' '+t.ms+' · '+drugDB.length+' '+t.in+'</span><span>'+esc(t.src)+'</span></div></div>';
  return {html:html,nf:res.every(function(x){return x.o.kind==='nf';}),tops:res.map(function(x){return x.o.top;}).filter(Boolean)};
}

/* ═══ 7. AUTOCOMPLETE + OXIRGI QIDIRUVLAR ═══ */
function suggest(q){
  q=q.trim();if(flat(q).replace(/ /g,'').length<2)return [];
  var r=search(q),seen={},out=[];
  r.near.forEach(function(m){if(m.score>=.66&&!seen[m.drug.name]){seen[m.drug.name]=1;out.push(m);}});
  return out.slice(0,6);
}
var sugBox=null,sugIdx=-1,sugList=[];
function ensureSug(){
  var f=$('.nx-ai-field');if(!f)return null;
  if(!sugBox){sugBox=D.createElement('div');sugBox.id='nx-sug';sugBox.setAttribute('role','listbox');f.appendChild(sugBox);}
  return sugBox;
}
function hideSug(){if(sugBox){sugBox.style.display='none';sugBox.innerHTML='';}sugIdx=-1;sugList=[];}
function showSug(q){
  var b=ensureSug();if(!b)return;
  sugList=suggest(q);sugIdx=-1;
  if(!sugList.length){hideSug();return;}
  b.innerHTML=sugList.map(function(m,i){var k=kindOf(m.drug);
    return '<div class="nx-sg" role="option" data-i="'+i+'"><i class="d-'+k+'"></i><b>'+esc(dField(m.drug,'name'))+'</b><small>'+esc(dField(m.drug,'cat')||'')+'</small></div>';}).join('');
  b.style.display='block';
}
function pickSug(i){
  var m=sugList[i];if(!m)return;var inp=$('#ai-drug-input');inp.value=m.drug.name;hideSug();window.aiCheckDrug();
}
function setActive(n){
  var items=sugBox?sugBox.querySelectorAll('.nx-sg'):[];
  for(var i=0;i<items.length;i++)items[i].classList.toggle('on',i===n);
  sugIdx=n;
}
var REC_KEY='nx_recent';
function getRecent(){try{return JSON.parse(localStorage.getItem(REC_KEY)||'[]')||[];}catch(e){return [];}}
function remember(names){
  if(!names||!names.length)return;
  var r=getRecent();names.forEach(function(n){r=r.filter(function(x){return x!==n;});r.unshift(n);});
  try{localStorage.setItem(REC_KEY,JSON.stringify(r.slice(0,6)));}catch(e){}
  paintRecent();
}
function paintRecent(){
  var box=$('#nx-recent');if(!box)return;
  var r=getRecent();
  box.innerHTML=r.length?('<small>'+T().recent+'</small>'+r.map(function(n){return '<button type="button" class="nxr-chip" data-q="'+esc(n)+'">'+esc(n)+'</button>';}).join('')):'';
}

/* ═══ 8. ULASH (eski funksiyalar o'rniga) ═══ */
window.aiCheckDrug=function(){
  var inp=$('#ai-drug-input'),res=$('#ai-result');if(!inp||!res)return;
  var q=inp.value.trim();hideSug();
  if(!q){res.innerHTML='';return;}
  var o=run(q);res.innerHTML=o.html;remember(o.tops);
};
var lt=null;
window.aiLiveSuggest=function(){
  var inp=$('#ai-drug-input');if(!inp)return;var v=inp.value;
  showSug(v);clearTimeout(lt);
  if(v.trim().length>=4)lt=setTimeout(function(){var q=inp.value.trim();if(q.length>=4){hideSug();var o=run(q);$('#ai-result').innerHTML=o.html;}},450);
  else if(!v.trim())$('#ai-result').innerHTML='';
};
window.checkDrug=function(){
  var inp=$('#drug-input'),rc=$('#drug-results'),nf=$('#drug-nf');if(!inp||!rc)return;
  var q=inp.value.trim();
  if(!q){rc.innerHTML='';if(nf)nf.classList.remove('show');return;}
  var o=run(q);rc.innerHTML=o.html;if(nf)nf.classList.remove('show');
};
window.smartAIDrugSearch=function(q){var r=search(q);return r.matches.map(function(m){return {drug:m.drug,score:m.score,matchedBy:m.by,isTypo:m.score<.985};});};

function init(){
  var inp=$('#ai-drug-input');
  if(inp){
    inp.removeAttribute('oninput');inp.removeAttribute('onkeydown');
    inp.setAttribute('autocomplete','off');inp.setAttribute('spellcheck','false');
    inp.addEventListener('input',window.aiLiveSuggest);
    inp.addEventListener('keydown',function(e){
      var open=sugBox&&sugBox.style.display==='block'&&sugList.length;
      if(e.key==='ArrowDown'&&open){e.preventDefault();setActive((sugIdx+1)%sugList.length);}
      else if(e.key==='ArrowUp'&&open){e.preventDefault();setActive((sugIdx-1+sugList.length)%sugList.length);}
      else if(e.key==='Escape'){hideSug();}
      else if(e.key==='Enter'){e.preventDefault();clearTimeout(lt);if(open&&sugIdx>=0)pickSug(sugIdx);else window.aiCheckDrug();}
    });
    inp.addEventListener('focus',function(){if(inp.value.trim())showSug(inp.value);});
    var rc=D.createElement('div');rc.id='nx-recent';rc.className='nx-recent';
    var ql=$('#ai-quick-list');if(ql&&ql.parentNode)ql.parentNode.insertBefore(rc,ql);paintRecent();
  }
  var di=$('#drug-input');if(di){di.removeAttribute('oninput');di.addEventListener('input',window.checkDrug);}
  D.addEventListener('mousedown',function(e){
    var s=e.target.closest&&e.target.closest('.nx-sg');
    if(s){e.preventDefault();pickSug(+s.getAttribute('data-i'));return;}
    if(!(e.target.closest&&e.target.closest('.nx-ai-field')))hideSug();
  });
  D.addEventListener('click',function(e){
    var c=e.target.closest&&e.target.closest('.nxr-chip');if(!c)return;
    var q=c.getAttribute('data-q');if(!q)return;
    var inDb=c.closest&&c.closest('#drug-results');
    if(inDb&&$('#drug-input')){$('#drug-input').value=q;window.checkDrug();}
    else{var i2=$('#ai-drug-input');if(i2){i2.value=q;window.aiCheckDrug();}}
  });
}
window.NXSearch={search:search,run:run,suggest:suggest,flat:flat,size:function(){return drugDB.length;},version:'2.0'};
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',init);else init();

window.NXSearch.refreshLang = function(){ try{ paintRecent(); var ai=$('#ai-drug-input'), ar=$('#ai-result'); if(ai&&ai.value.trim()&&ar&&ar.innerHTML) window.aiCheckDrug(); var di=$('#drug-input'), dr=$('#drug-results'); if(di&&di.value.trim()&&dr&&dr.innerHTML) window.checkDrug(); }catch(e){} };
})();

/* ═══ QUICK DRUG CHIPS & CHECKER TABS ═══ */
(function(){
  var AI_QUICK = ['Meldoniy','Furosemid','Klenbuterol','Salbutamol','Deksametazon','Tramadol','Paratsetamol','Ibuprofen','Kofein','Testosteron','EPO','Ostarine'];
  var aqDiv = document.getElementById('ai-quick-list');
  var AQ_COLORS = [
    'linear-gradient(135deg,#f59e0b,#f97316)',
    'linear-gradient(135deg,#ec4899,#f43f5e)',
    'linear-gradient(135deg,#22c55e,#10b981)',
    'linear-gradient(135deg,#3b82f6,#06b6d4)',
    'linear-gradient(135deg,#a855f7,#8b5cf6)',
    'linear-gradient(135deg,#eab308,#facc15)'
  ];
  if (aqDiv && !aqDiv.children.length) {
    AI_QUICK.forEach(function(n, i) {
      var s = document.createElement('button');
      s.type = 'button';
      s.textContent = n;
      s.style.cssText = 'background:'+AQ_COLORS[i%6]+';border:none;border-radius:20px;padding:6px 14px;font-size:12px;font-weight:800;cursor:pointer;color:#fff;transition:.2s;box-shadow:0 3px 10px rgba(0,0,0,.3);text-shadow:0 1px 2px rgba(0,0,0,.25)';
      s.onclick = function() {
        var inp = document.getElementById('ai-drug-input');
        if (inp) { inp.value = n; if (typeof window.aiCheckDrug === 'function') window.aiCheckDrug(); }
      };
      aqDiv.appendChild(s);
    });
  }
  var quickList = ['Paracetamol','Ibuprofen','Salbutamol (inhaler)','Kofein','Testosteron','EPO','Furosemid','Deksametazon (oral/IV)','Melatonin','Vitamin D','Creatine','Ostarine','Amfetamin','CBD','Psevdoefedrin'];
  var qdiv = document.getElementById('quick-drugs-list');
  if (qdiv && !qdiv.children.length) {
    quickList.forEach(function(n) {
      var s = document.createElement('button');
      s.type = 'button';
      s.className = 'quick-drug';
      s.textContent = n;
      s.onclick = function() {
        var inp = document.getElementById('drug-input');
        if (inp) { inp.value = n; if (typeof window.checkDrug === 'function') window.checkDrug(); }
      };
      qdiv.appendChild(s);
    });
  }
})();

window.switchChecker = function(tab) {
  var ai = document.getElementById('checker-ai'), db = document.getElementById('checker-db');
  var tai = document.getElementById('tab-ai'), tdb = document.getElementById('tab-db');
  if (!ai || !db || !tai || !tdb) return;
  ai.style.display = tab === 'ai' ? 'block' : 'none';
  db.style.display = tab === 'db' ? 'block' : 'none';
  tai.style.color = tab === 'ai' ? '#f0c040' : '#8faac8';
  tai.style.borderBottomColor = tab === 'ai' ? '#f0c040' : 'transparent';
  tai.style.fontWeight = tab === 'ai' ? '700' : '600';
  tdb.style.color = tab === 'db' ? '#f0c040' : '#8faac8';
  tdb.style.borderBottomColor = tab === 'db' ? '#f0c040' : 'transparent';
  tdb.style.fontWeight = tab === 'db' ? '700' : '600';
};
