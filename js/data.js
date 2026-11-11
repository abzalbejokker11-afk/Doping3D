// Doping.uz — Antidoping Ta'lim Portali Data & i18n Dictionaries

const wadaData=[
{cat:"S1",name:"Testosteron va anabolik steroidlar",ex:"Testosteron, Nandrolon, Stanozolol, Metandienon, Boldenon, Trenbolon, Oksandrolon, Turinabol",eff:"Oqsil sintezi oshirish, mushak o'sishi, kuch va bardoshlilik",risk:"Oliy"},
{cat:"S1",name:"SARM (Selektiv androgen reseptor modulyatori)",ex:"Ostarine (MK-2866), Ligandrol (LGD-4033), Andarine (S-4), Cardarine (GW501516)",eff:"Anabolik — BAD tarkibida yashirin holda topiladi",risk:"Oliy"},
{cat:"S1",name:"Klenbuterol",ex:"Klenbuterol HCl — go'sht orqali kirishi mumkin!",eff:"Anabolik + yog' yoqish. Mahalliy sertifikatsiz go'sht xavfi katta",risk:"Oliy"},
{cat:"S2",name:"Eritropoetin (EPO) va qon gormonlari",ex:"EPO, Darbepoetin alfa, CERA, Hematid",eff:"Qon kislorod tashish qobiliyatini oshirish — chidamlilik uchun",risk:"Oliy"},
{cat:"S2",name:"O'sish gormoni va insulinsimon omillar",ex:"Somatropin (hGH), IGF-1, MGF, Mecasermin",eff:"Mushak o'sishi, tiklanish tezlashtirish, yog' kuyish",risk:"Oliy"},
{cat:"S2",name:"Insulin va insulin mimetics",ex:"Insulin (barcha turlari) — faqat diabetiklarda TUE bilan",eff:"Oqsil sintezi oshirish, glikogen to'ldirish — xavfli",risk:"Oliy"},
{cat:"S3",name:"Beta-2 agonistlar (yuqori doza)",ex:"Salbutamol (>1600 mkg/kun), Salmeterol (>200 mkg/kun), Formoterol (>54 mkg/kun)",eff:"Bronxlarni kengaytiradi — inhaler TUE bilan ruxsat etilishi mumkin",risk:"O'rta"},
{cat:"S4",name:"Gormon antagonistlari va modulyatorlar",ex:"Tamoksifen, Klomifen, Anastrozol, Letrozol, Fulvestrant",eff:"Estrogen kamaytiradi — testosteron effektini oshirish uchun ishlatiladi (maskirovka)",risk:"Oliy"},
{cat:"S5",name:"Diuretiklar va maskirovka vositalari",ex:"Furosemid, Gidroxlorotiazid, Spironolakton, Triamteren, Probenetsid, Epitestosteron",eff:"Siydik miqdorini oshirish — taqiqlangan moddalarni suyultirish uchun ishlatiladi",risk:"Oliy"},
{cat:"S6",name:"Amfetamin va derivatlari",ex:"Amfetamin, Dekstroamfetamin, Metilfenidat, DMAA, Dimetilbutilamin",eff:"CNS stimulyatsiya, charchoqni kamaytirish, agressivlik oshirish",risk:"Oliy"},
{cat:"S6",name:"Efedrin va psevdoefedrin",ex:"Efedrin (>10 mkg/ml), Psevdoefedrin (>150 mkg/ml) — sovuq va gripp dorilarda!",eff:"Stimulyator. Sovuqqa qarshi dorilarda yashirin holda bo'ladi — EHTIYOT",risk:"Oliy"},
{cat:"Monitoring",name:"Kofein (monitoring dasturi)",ex:"Kofe, choy, kakao — WADA Monitoring dasturida kuzatiladi (taqiqlanmagan, siydik chegarasi 2004-yilda bekor qilingan)",eff:"CNS stimulyatsiya — me'yorida ruxsat etilgan; energetik ichimliklarda yashirin moddalar xavfi bor",risk:"Past"},
{cat:"S7",name:"Narkotik analgetiklar",ex:"Morfin, Metadon, Oksikodon, Hidromorfon, Buprenorfin, Kodein (yuqori dozada)",eff:"Og'riqni bartaraf etish, ruhiy holat o'zgartirish",risk:"Oliy"},
{cat:"S8",name:"Kannabinoidlar",ex:"THC, Marixuana (Cannabis), Gashish, Sintetik kannabinoidlar — CBD ruxsat etilgan (THCsiz)",eff:"Psixoaktiv, og'riq qoldirish — siydikda 150 ng/ml dan yuqori taqiqlangan",risk:"Oliy"},
{cat:"S9",name:"Glyukokortikoidlar (sistemli)",ex:"Deksametazon (oral/IV/IM), Prednizolon (oral), Metilprednizolon (IV) — intra-artikulyar ruxsat!",eff:"Yallig'lanishni bartaraf etish — sistemli yo'l taqiqlangan, lokal ruxsat",risk:"O'rta"},
{cat:"M1",name:"Qon va oksigen manipulyatsiyasi",ex:"Avtogemotransfuziya (o'z qoni), allogenik qon quyish, sun'iy O2 tashuvchilar (HBOC)",eff:"Qon kislorod sig'imini sun'iy oshirish — EPO muqobili",risk:"Oliy"},
{cat:"M2",name:"Kimyoviy va fizikaviy manipulyatsiya",ex:"Modda qo'shish, namuna almashtirish, kateter, diuretik yordamida suyultirish, donorlik",eff:"Test natijasini soxtalashtirish",risk:"Oliy"},
{cat:"M3",name:"Gen va hujayralar dopingi",ex:"EPO geni, IGF-1 geni, miostatin blokeri, CRISPR asosida manipulyatsiya",eff:"Genetik darajada qobiliyatni o'zgartirish — hali to'liq aniqlanmaydi",risk:"Oliy"}
];


const drugDB = [
  // S1: Anaboliklar
  {name:"Testosteron", alias:["testosterone","androgel","omnadren","sustanon","тестостерон","сустанон"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yo'q", risk:"Oliy (4 yil diskvalifikatsiya)", note:"Erkaklar jinsiy gormoni. Mushak massasi va kuchni sun'iy oshirish uchun qo'llaniladi. WADA tomonidan 100% taqiqlangan. TUE berilmaydi.", alt:"Tabiiy oqsil balansi, to'g'ri tiklanish va uyqu (22:00-06:00)."},
  {name:"Nandrolon", alias:["nandrolone","deca","deca-durabolin","retabolil","ретаболил","нандролон"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Klassik anabolik steroid. Organizmda metabolitlari (19-norandrosteron) 18 oygacha aniqlanadi. Qat'iyan taqiqlangan.", alt:"Tabiiy Kreatin monogidrat (WADA ruxsat etgan)."},
  {name:"Stanozolol", alias:["stanozolol","winstrol","stromba","stanazolol","станозолол","винстрол"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Kuchli anabolik modda. Jigarga o'ta toksik ta'sir qiladi, bo'g'imlarni quritadi va jarohat xavfini oshiradi. Taqiqlangan.", alt:"Oqsil izolyati, kollagen va xondroitin/glyukozamin."},
  {name:"Metandienon", alias:["methandienone","dianabol","metan","метандростенолон","дианабол","метан"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Mashhur 'metan' tabletkalari. Jigar fermentlarini keskin oshiradi, jigar adenomasiga sabab bo'ladi. Mutlaq taqiqlangan.", alt:"Tabiiy aminokislotalar (EAA), sifatli ovqatlanish."},
  {name:"Oksandrolon", alias:["oxandrolone","anavar","oxandrin","оксандролон","анавар"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Oral anabolik steroid. Gormonal fonni izdan chiqaradi, bepushtlikka sabab bo'ladi. Har doim taqiqlangan.", alt:"Zardob oqsili (Whey), vitamin-mineral komplekslar."},
  {name:"Klenbuterol", alias:["clenbuterol","clen","klen","кленбутерол","клен"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik moddalar", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Anabolik va kuchli yog' yoqish ta'siriga ega. Yurak gipertrofiyasi va infarkt xavfini keskin oshiradi. Go'sht orqali tushishi mumkin (ehtiyot bo'ling!).", alt:"Kardio mashg'ulotlar, to'g'ri kaloriya defitsiti, L-karnitin."},
  {name:"Ostarin (SARM)", alias:["ostarine","mk-2866","enobosarm","sarm","остарин","сарм"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 SARM moddalari", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Selektiv androgen reseptor modulyatori. BAD va sport qo'shimchalarida yashirin tarzda eng ko'p uchraydi. Sertifikatsiz BAD ichmang!", alt:"Informed-Sport yoki NSF sertifikatiga ega toza protein va kreatin."},
// S2: Peptidlar va EPO
  {name:"Eritropoetin (EPO)", alias:["epo","erythropoietin","eritropoetin","eprex","эпо","эритропоэтин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S2 Peptid gormonlar", tue:"Yo'q", risk:"Oliy (4 yildan umrbod)", note:"Qon kislorod tashish hajmini oshiradi. Qonni o'ta quyuqlashtiradi, tromboz, insult va to'satdan o'limga olib keladi. Qat'iyan man etilgan.", alt:"Baland tog' mashg'ulotlari (gipoksiya effekti), B12 vitamini, Ferritin nazorati."},
  {name:"Somatropin (hGH)", alias:["somatropin","hgh","growth hormone","jintropin","соматропин","гормон роста"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S2 O'sish omillari", tue:"Faqat og'ir gipofiz patologiyasida TUE", risk:"Oliy (4 yil)", note:"Inson o'sish gormoni. Akromegaliya, suyaklar deformatsiyasi, ichki a'zolar kattalashishi va diabet keltirib chiqaradi. Taqiqlangan.", alt:"Chuqur uyqu fazasi (somatotrop gormon tabiiy ajralishi), arginin va ornitin."},
  {name:"Insulin", alias:["insulin","insulina","aktrapid","humalog","инсулин"], status:"TUE kerak (faqat diabetiklar)", cls:"dr-tue", cat:"S2 Peptidlar", tue:"HA — 1 yoki 2-tur diabet uchun TUE shart", risk:"Diabetiksiz sportchiga Oliy (4 yil)", note:"Diabeti bo'lmagan sportchi qabul qilishi — o'ta xavfli gipoglikemik koma va o'limga sabab bo'ladi. Sportda qat'iy taqiqlangan.", alt:"Uglevodlar va oqsillarning tabiiy glikemik balansi."},
// S4: Gormon va metabolik modulyatorlar
  {name:"Meldoniy (Mildronat)", alias:["meldoniy","meldonium","mildronat","mildronate","милдронат","мельдоний","мельдония","meldoni"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S4 Gormon va metabolizm modulyatori", tue:"Yo'q (Sportda ruxsat berilmaydi)", risk:"Oliy (2-4 yil)", note:"2016-yildan buyon WADA Prohibited List (S4.4) da. Karnitin biosintezini bloklaydi. Organizmda bir necha oylab saqlanadi. TUE deyarli berilmaydi.", alt:"L-Karnitin (ruxsat etilgan), Koenzim Q10, Magne B6, Asparkam."},
  {name:"Trimetazidin", alias:["trimetazidine","preductal","preduktal","триметазидин","предуктал"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S4 Metabolik modulyator", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Yurak energetikasini o'zgartiruvchi modda (Kamila Valieva ishi). WADA S4 ro'yxatida har doim taqiqlangan.", alt:"Riboksin (Inozin - ruxsat etilgan), kaliy va magniy preparatlari."},
  {name:"Klomifen", alias:["clomiphene","clomid","klomed","кломифен","кломид"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S4 Anti-estrogen", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Steroid kursidan keyin gormonlarni tiklash uchun ishlatiladi. WADA tomonidan maskirovka vositasi sifatida taqiqlangan.", alt:"Ruxsat etilgan tabiiy vitamin D3, rux (sink)."},
  {name:"Tamoksifen", alias:["tamoxifen","nolvadex","novaldex","тамоксифен","нольвадекс"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S4 Anti-estrogen", tue:"Faqat onkologiyada TUE", risk:"Oliy (4 yil)", note:"Estrogen blokatori. Erkaklarda ginekomastiyani oldini olishda noqonuniy ishlatiladi. Taqiqlangan.", alt:"Jigar va gormonlar tabiiy detoksikatsiyasi."},
// S5: Diuretiklar (Furosemid)
  {name:"Furosemid", alias:["furosemid","furosemit","lasix","lazix","фуросемид","фуросемит","лазикс","lasiks","furasemid","furosimid"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S5 Diuretik (Siydik haydovchi)", tue:"Yo'q (Sportda TUE berilmaydi)", risk:"Oliy (4 yilgacha diskvalifikatsiya)", note:"Kuchli halqali diuretik. Vaznni tez haydash va siydikdan boshqa dopinglarni yuvib tashlash (maskirovka) uchun ishlatiladi. WADA qoidasi bo'yicha har doim taqiqlangan!", alt:"Na'matak damlamasi, tarvuz, brusnika, suv va tuz balansini tabiiy boshqarish."},
  {name:"Torasemid", alias:["torasemide","diuver","trigrim","торасемид","диувер"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S5 Diuretik", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Furosemiddan kuchliroq diuretik. Taqiqlangan maskirovka vositasi.", alt:"Tabiiy suyuqlik balansi."},
  {name:"Spironolakton", alias:["spironolactone","veroshpiron","спиронолактон","верошпирон"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S5 Diuretik", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Kaliy tejovchi diuretik bo'lsa-da, S5 toifasida mutlaq taqiqlangan.", alt:"Magne B6, qora smorodina damlamasi."},
  {name:"Gidroxlorotiazid", alias:["hydrochlorothiazide","hypothiazid","гипотиазид","гидрохлортиазид"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S5 Diuretik", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Kombinatsiyalangan qon bosimi dorilari tarkibida ko'p uchraydi! Ehtiyot bo'ling.", alt:"Shifokor nazoratida ruxsat etilgan kardiologik dorilar."},
// S6: Stimulyatorlar
  {name:"Kokain", alias:["cocaine","coke","кокаин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S6 Narkotik stimulyator", tue:"Yo'q", risk:"Oliy + jinoiy javobgarlik", note:"Markaziy asab tizimini falajlovchi kuchli giyohvandlik moddasi. WADA tomonidan qat'iy taqiqlangan.", alt:"Faqat sog'lom sport rejimi."},
  {name:"Amfetamin", alias:["amphetamine","speed","амфетамин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S6 Kuchli stimulyator", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Charchoq hissini sun'iy o'ldiradi. Yurak xurujiga olib keladi. Taqiqlangan.", alt:"Kreatin, tabiiy B guruhi vitaminlari."},
  {name:"Sibutramin", alias:["sibutramine","reduksin","сибутрамин","редуксин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S6 Stimulyator", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Ozdiruvchi kapsulalar va 'choy'lar tarkibida yashirin tarzda eng ko'p topiladigan xavfli modda!", alt:"Tabiiy to'g'ri ovqatlanish ratsioni."},
  {name:"DMAA (Geranamin)", alias:["dmaa","geranamine","metilgeksanamin","геранамин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S6 Stimulyator", tue:"Yo'q", risk:"Oliy (4 yil)", note:"Predtren (Pre-workout) qo'shimchalarida ko'p uchraydi. Qon bosimini xavfli darajaga ko'taradi.", alt:"Sitrat magniy, kofein (me'yorda), izotonik."},
  {name:"Psevdoefedrin", alias:["pseudoephedrine","sudafed","taylol hot","grippxot","псевдоэфедрин","тайлол хот","гриппхот"], status:"Musobaqada taqiqlangan (>150 mkg/ml)", cls:"dr-caution", cat:"S6 Stimulyator", tue:"Yo'q", risk:"Yuqori", note:"Sovuqqa qarshi 'choy' va tabletkalarda bo'ladi. Musobaqadan 24 soat oldin to'xtatish shart!", alt:"Paratsetamol, C vitamini, limonli iliq suv."},
  {name:"Kofein", alias:["caffeine","coffein","kofein","кофеин","coffee","qahva","кофе"], status:"Monitoring dasturida (Ruxsat etilgan)", cls:"dr-monitoring", cat:"WADA Monitoring dasturi", tue:"Yo'q", risk:"Past (me'yorida xavfsiz)", note:"Kofein WADA Taqiqlangan ro'yxatida emas (2004-yildan beri siydikdagi chegara me'yori bekor qilingan), faqat Monitoring dasturida kuzatiladi. Oddiy qahva va choy xavfsiz; energetik ichimliklar esa yashirin stimulyator xavfi tufayli tavsiya etilmaydi.", alt:"Yashil choy, tabiiy donli qahva."},
// S3: Beta-2 Agonistlar
  {name:"Salbutamol", alias:["salbutamol","ventolin","sultanol","сальбутамол","вентолин"], status:"Ingalyatsiya dozasi bo'yicha ruxsat", cls:"dr-tue", cat:"S3 Beta-2 Agonist", tue:"≤1600 mkg/24 soat bo'lsa TUE shart emas; oshsa TUE lozim", risk:"O'rta", note:"Astmada inhaler orqali kuniga maksimal 1600 mkg gacha ruxsat etilgan. Inyeksiya yoki tabletka shakli esa BUTUNLAY TAQIQLANGAN!", alt:"Inhalatsiya bo'yicha shifokor dozasi."},
// S7: Narkotiklar
  {name:"Tramadol", alias:["tramadol","tramal","трамадол","трамал"], status:"2024-yildan MUSOBAQADA TAQIQLANGAN", cls:"dr-prohibited", cat:"S7 Narkotik analgetik", tue:"Tibbiy zaruratda TUE shart", risk:"Yuqori (2-4 yil)", note:"2024-yil 1-yanvardan kuchli og'riq qoldiruvchi Tramadol musobaqa davrida qat'iy taqiqlandi!", alt:"Paratsetamol, Ibuprofen, Ketorolak (lokal)."},
// S9: Glyukokortikoidlar
  {name:"Deksametazon", alias:["dexamethasone","deksametazon","dexazon","дексаметазон","дексазон","deksamitazon"], status:"Musobaqada inyeksiya/oral TAQIQLANGAN", cls:"dr-prohibited", cat:"S9 Glyukokortikoid", tue:"Tibbiy ko'rsatmada TUE shart", risk:"Yuqori", note:"Oral (tabletka) va IV/IM inyeksiya musobaqa davrida taqiqlangan. Lekin bo'g'in ichiga lokal yuborish va malhamlar ruxsat etiladi.", alt:"NSAID (Ibuprofen, Diklofenak)."},
// Ruxsat etilganlar
  {name:"Paratsetamol", alias:["paracetamol","acetaminophen","tylenol","panadol","efferalgan","парацетамол","панадол","paratsetamol","parasetamol"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"Analgetik-antipiretik", tue:"Yo'q", risk:"Xavfsiz (Kuniga max 3-4g)", note:"Isitma va og'riqda sportchilar uchun eng xavfsiz dori. Musobaqa davrida ham ruxsat etilgan.", alt:"Ibuprofen."},
  {name:"Ibuprofen", alias:["ibuprofen","nurofen","ibufen","advil","ибупрофен","нурофен"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"NSAID (Yallig'lanishga qarshi)", tue:"Yo'q", risk:"Xavfsiz", note:"Bo'g'im va mushak og'riqlarida ruxsat etilgan. Oshqozonni asrash uchun ovqatdan so'ng ichiladi.", alt:"Paratsetamol."},
  {name:"Aspirin", alias:["aspirin","acetylsalicylic","atsitilsalitsil","аспирин"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"NSAID / Antiagregant", tue:"Yo'q", risk:"Xavfsiz", note:"Musobaqa va mashg'ulot davrida to'liq ruxsat etilgan.", alt:"Paratsetamol."},
  {name:"Kreatin Monogidrat", alias:["creatine","creapure","kreatin","креатин"], status:"✅ RUXSAT ETILGAN (100% Halol)", cls:"dr-allowed", cat:"Sport qo'shimchasi", tue:"Yo'q", risk:"Xavfsiz", note:"Eng ko'p ilmiy isbotlangan sport qo'shimchasi. Portlovchi kuch va ATF tiklanishini ta'minlaydi. Informed-Sport sertifikatli brendlarni tanlang.", alt:"Go'sht, baliq."},
  {name:"Zardob Oqsili (Whey Protein)", alias:["protein","whey","izolyat","протеин","изолят"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"Sport ozuqasi", tue:"Yo'q", risk:"Xavfsiz (Sertifikat bilan)", note:"Mushaklarni tiklash uchun oqsil. Faqat tekshirilgan xalqaro sertifikatli brendlar (Optimum Nutrition, MyProtein va h.k.) tavsiya etiladi.", alt:"Tuxum, mol go'shti, tvorog."},
  {name:"L-Karnitin", alias:["l-carnitine","carnitine","karnitin","карнитин","элькарнитин"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"Metabolik vosita", tue:"Yo'q", risk:"Xavfsiz", note:"Meldoniy o'rniga eng toza, qonuniy va xavfsiz tabiiy energiya manbai!", alt:"Mol go'shti, sut mahsulotlari."},
  {name:"Omega-3", alias:["omega-3","fish oil","baliq yogi","омега-3","рыбий жир"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"Foydali yog' kislotalari", tue:"Yo'q", risk:"Xavfsiz", note:"Yurak, qon tomirlar va bo'g'imlar uchun to'liq ruxsat etilgan.", alt:"Yog'li baliq, zig'ir yog'i."}
];


const glossData=[
{term:"AAF",en:"Adverse Analytical Finding",def:"Doping-kontrol namunasida taqiqlangan modda yoki uning metaboliti aniqlanishi. ADRV boshlash uchun asos. Sportchi 10 kun ichida B-namuna so'rash huquqiga ega."},
{term:"ABP",en:"Athlete Biological Passport",def:"Sportchi qon ko'rsatkichlarini vaqt o'tishi bilan kuzatish orqali EPO va qon dopingini bilvosita aniqlash tizimi. Moddaning o'zi izlanmaydi — biologik o'zgarishlar kuzatiladi."},
{term:"ADAMS",en:"Anti-Doping Admin & Management System",def:"WADA tomonidan yaratilgan global onlayn boshqaruv tizimi. Whereabouts kiritish, test natijalari, TUE arizalari, sportchi profili va sertifikatlar boshqariladi."},
{term:"ADEL",en:"Anti-Doping Education & Learning",def:"WADA ning bepul onlayn ta'lim platformasi. 20+ til, 50+ kurs. RTP sportchilari uchun asosiy kurs majburiy. adel.wada-ama.org"},
{term:"ADRV",en:"Anti-Doping Rule Violation",def:"Antidoping qoidasini buzish. WADA Kodeksida 11 turi bor: taqiqlangan modda (2.1), usul (2.2), namuna berishdan bosh tortish (2.3), Whereabouts buzilishi (2.4), nazoratga to'sqinlik (2.5), taqiqlangan modda saqlash (2.6), noqonuniy muomala (2.7), berish yoki urinish (2.8), sherikchilik (2.9), taqiqlangan shaxs bilan hamkorlik (2.10), xabar beruvchiga bosim/ta'qib (2.11)."},
{term:"ATF",en:"Atypical Finding",def:"Shubhali modda — laboratoriya tomonidan to'liq tasdiqlanmagan, lekin tekshiruv davom etadigan natija. 10 kun ichida yakuniy qaror. AAF ga aylanishi yoki yo'q qilinishi mumkin."},
{term:"CAS",en:"Court of Arbitration for Sport",def:"Sport nizomlarini ko'rib chiqadigan xalqaro arbitraj sudi. Lausanneda (Shveysariya). TUE rad, jazo muddati, oqlanish bo'yicha apellyatsiya instansiyasi."},
{term:"DCO",en:"Doping Control Officer",def:"Doping-kontrolni o'tkazadigan rasmiy shaxs. Vakolatnoma va ID ko'rsatadi, sportchini tushuntiradi, namuna oladi, hujjatlashtiradi. DCO ga qarshi turish = ADRV 2.3."},
{term:"EPO",en:"Erythropoietin",def:"Qon qizil jismchalarini ishlab chiqarishni oshiradigan gormon. Doping sifatida ishlatilsa — kislorod tashishni oshiradi. Tromboz, insult, to'satdan o'lim xavfi. S2 kategoriya."},
{term:"Filing Failure",en:"Filing Failure",def:"Whereabouts ma'lumotlarini chorak oxirigacha to'liq kiritmaslik. 12 oyda 3 ta (missed test bilan birgalikda) = 2 yilgacha diskvalifikatsiya."},
{term:"hGH",en:"Human Growth Hormone",def:"Inson o'sish gormoni. Mushak o'sishi, tiklanish tezlashtirish, yog' kuyishda ishlatiladi. S2 kategoriya — butunlay taqiqlangan."},
{term:"ISE",en:"International Standard for Education",def:"Antidoping ta'lim uchun WADA xalqaro standarti (2021 yangilanma — ISE 3.0). 5 komponent: maqsad guruhlar, mazmun, format, baholash, sertifikatlash."},
{term:"ISTI",en:"International Standard for Testing",def:"Doping-nazorat rejalashtirish va amalga oshirish uchun xalqaro standart. Kim, qachon, qayerda va qanday test o'tkazishni belgilaydi."},
{term:"ISL",en:"International Standard for Laboratories",def:"WADA akkreditatsiya laboratoriyalari uchun standart. Sifat boshqaruvi, metodologiya, konfidensialllik. Hozirda ~34 akkreditatsiyalangan laboratoriya."},
{term:"Missed Test",en:"Missed Test",def:"DCO ko'rsatilgan joyda sportchi bo'lmasligi. 14 kun ichida dalil bilan javob berish kerak. 12 oyda 3 ta = 2 yil."},
{term:"No Fault",en:"No Fault or Negligence",def:"Sportchi uchun to'liq oqlanish — faqat sabotaj yoki uchinchi shaxs hiylasi isbotlanganda. Juda kamdan-kam qo'llaniladi."},
{term:"No Significant Fault",en:"No Significant Fault",def:"ADRVda jazo kamaytirish uchun dalil. Sportchi o'zini to'g'ri tutgan, lekin tashqi omil sababli qoidabuzarlik yuzaga kelgan — masalan, sertifikatlangan mahsulot kontaminatsiyasi."},
{term:"Play True",en:"Play True",def:"WADA toza sport kampaniyasi. Har yili aprel oyida WADA e'lon qiladigan kunda — Play True Day (#PlayTrue). Doping oldini olish, halollik va hurmatni targ'ib qiluvchi global harakat."},
{term:"Prohibited List",en:"Prohibited List",def:"WADA tomonidan har yil 1-yanvar yangilanadigan taqiqlangan moddalar va usullar ro'yxati. S1-S9 (moddalar), M1-M3 (usullar), P (maxsus sport) kategoriyalarga bo'linadi."},
{term:"RTP",en:"Registered Testing Pool",def:"Whereabouts kiritishi majburiy bo'lgan sportchilar ro'yxati. WADA, xalqaro federatsiyalar va milliy antidoping agentliklari tomonidan tuziladi. O'zbekistonda ~200+ sportchi."},
{term:"Safe Harbor",en:"Safe Harbor (Whistleblower)",def:"WADA whistleblower himoya siyosati — ma'lumot beruvchiga noma'lumlik, huquqiy va moliyaviy himoya. Anonim murojaat: intel@wada-ama.org"},
{term:"SARM",en:"Selective Androgen Receptor Modulator",def:"Anabolik ta'sir ko'rsatuvchi, lekin klassik steroid emas bo'lgan modda guruhi. BAD tarkibida yashirin holda topiladi. S1 — butunlay taqiqlangan."},
{term:"Strict Liability",en:"Strict Liability",def:"WADA Kodeksining asosiy prinsipi: sportchi organizmidagi har qanday taqiqlangan modda uchun shaxsan javobgar. 'Bilmadim', 'shifokor berdi', 'sabotaj bo'ldi' — oqlanish uchun yetarli emas."},
{term:"TDP",en:"Test Distribution Plan",def:"Doping nazorat rejasi — kim, qachon, qayerda test o'tkazilishi belgilanadi. WADA, IF va milliy agentliklar tomonidan yillik tasdiqlanadi."},
{term:"TUE",en:"Therapeutic Use Exemption",def:"Taqiqlangan moddani tibbiy ko'rsatma bo'yicha qonuniy qabul qilish ruxsatnomasi. Astma (salbutamol), diabet (insulin) uchun. Musobaqadan 30 kun oldin ariza, 21 kun ichida qaror."},
{term:"TUEC",en:"TUE Committee",def:"TUE arizalarini ko'rib chiqadigan, 3 nafar mustaqil shifokordan iborat qo'mita. Tasdiqlash, rad etish yoki qo'shimcha ma'lumot so'rash huquqi bor."},
{term:"USADA",en:"US Anti-Doping Agency",def:"AQSh Milliy Antidoping Agentligi. Lance Armstrong ni 2012-yilda umrbod diskvalifitsiya qilgan va 7 Tour de France g'alasini bekor qildirgan agentlik."},
{term:"WADA",en:"World Anti-Doping Agency",def:"Jahon Antidoping Agentligi. 1999-yil tashkil etilgan. Bosh qarorgoh — Monreal (Kanada). Kodeks, Prohibited List, standartlar, ADEL, laboratoriya akkreditatsiyasi — barchasi WADA tomonidan."},
{term:"Whereabouts",en:"Whereabouts Information",def:"RTP sportchisi tomonidan ADAMS ga kiritiladigan kunlik 60 daqiqalik aniq vaqt va joy. DCO shu vaqtda kutilmagan test o'tkazishi mumkin."},
{term:"Whereabouts Failure",en:"Whereabouts Failure",def:"Missed test yoki filing failure. 12 oyda 3 ta = ADRV 2.4 = 2 yilgacha diskvalifikatsiya. ADAMSni kundalik tekshirish — eng oson himoya."},
{term:"UzNADO",en:"Uzbekistan National Anti-Doping Organization",def:"O'zbekiston Milliy Antidoping Tashkiloti. 2005-yil tashkil etilgan. Rasmiy ta'lim platformasi: talim-uznada.uz. Yilik 25,000+ test o'tkazadi."},
];

const quizData = {
rahbar:[
{q:"WADA Kodeks bo'yicha tashkilot antidoping faoliyati uchun kim javobgar?",opts:["Faqat koordinator","Faqat shifokor","Rahbar va koordinator birgalikda","Faqat sportchi"],a:2},
{q:"Antidoping siyosati qaysi hujjatlar asosida tuziladi?",opts:["Faqat WADA Kodeks","Faqat O'zbekiston qonuni","WADA Kodeks + O'zRQ 2019 'Antidopingga qarshi' qonun","Faqat milliy standartlar"],a:2},
{q:"Antidoping byudjeti tashkilot umumiy byudjetining necha foizi bo'lishi tavsiya etiladi?",opts:["1-3%","5-7%","10-15%","25-30%"],a:2},
{q:"Sertifikatsiz BADlarda taqiqlangan modda izlari qancha nisbatda topilgan?",opts:["1-2%","5-10%","12-25%","50% dan ortiq"],a:2},
{q:"Oshpaz sertifikati qanday bo'limlarda bo'lishi shart?",opts:["Faqat pazandachilik","Pazandachilik + gigiena","Pazandachilik + antidoping + sanitariya-gigiena","Faqat antidoping"],a:2},
{q:"Klenbuterol qayerdan tushishi mumkin?",opts:["Faqat dori orqali","Faqat BAD orqali","Sertifikatsiz go'sht orqali","Faqat inyeksiya orqali"],a:2},
{q:"DCO kelganda birinchi navbatda nima qilinadi?",opts:["Sportchini yashirish","DCO ning vakolatnomasini tekshirish","Sug'urta idorasiga qo'ng'iroq qilish","Test berishni rad etish"],a:1},
{q:"Antidoping hujjatlari arxivda qancha yil saqlanadi?",opts:["1 yil","2 yil","3 yil","5 yil"],a:3},
{q:"Safarda ovqat ta'minoti bo'yicha asosiy qoida qaysi?",opts:["Mahalliy bozordan xarid qilish mumkin","Restoranlarda ovqatlanish eng xavfsiz","O'z ovqat yukini olib borish va sertifikatlangan manbalar","Qoida yo'q, har qanday joy mumkin"],a:2},
{q:"Energetik ichimliklar sport tashkilotlarida qanday qabul qilinadi?",opts:["Kofein miqdori kam bo'lsa ruxsat","Faqat musobaqada taqiqlangan","Butunlay taqiqlangan","Shifokor ruxsati bilan ruxsat"],a:2},
{q:"Kofein WADA 2026 Ro'yxatida qaysi maqomda turadi?",opts:["Har doim taqiqlangan (S1)","Faqat musobaqada taqiqlangan (S6)","Ruxsat etilgan — WADA Monitoring dasturida kuzatiladi","Faqat TUE bilan ruxsat etiladi"],a:2},
{q:"Antidoping koordinatori qancha vaqtda malakasini yangilashi kerak?",opts:["5 yilda bir","3 yilda bir","2 yilda bir","Yangilash shart emas"],a:2},
{q:"Mahalliy bozordan go'sht olish musobaqada nima sababli xavfli?",opts:["Narxi qimmat","Klenbuterol bor bo'lishi mumkin","Shunday qabul qilingan","Hech qanday xavf yo'q"],a:1},
{q:"'No Significant Fault' da jazo qanday o'zgaradi?",opts:["To'liq oqlanish","Jazo 2 baravar oshadi","Jazo kamaytirilishi mumkin, lekin yo'q qilinmaydi","Jazo o'zgarmaydi"],a:2},
{q:"WADA Kodeks 20.3-modda nimani belgilaydi?",opts:["Sportchi mas'uliyati","Tashkilot/federatsiya rahbari mas'uliyati","TUE protsedurasi","Whereabouts qoidalari"],a:1},
{q:"Yangi xodim qancha vaqt ichida antidoping kursi olishi kerak?",opts:["6 oy ichida","Istalgan vaqtda","30 kun ichida","1 yil ichida"],a:2},
{q:"Tashkilot doping holati uchun to'laydigan xarajat profilaktikaga nisbatan qancha bo'lishi mumkin?",opts:["Bir xil","2 barobar","5 barobar","10-50 barobar"],a:3},
{q:"Favqulodda harakat rejasi qancha ssenariy uchun tayyorlanishi kerak?",opts:["1 ta (faqat AAF uchun)","2 ta (AAF va TUE rad)","3 ta (DCO kelishi, AAF, TUE rad)","5 ta"],a:2},
{q:"TUE muddati tugashiga qachon yangilash arizasi berilishi kerak?",opts:["7 kun oldin","30 kun oldin","60 kun oldin","3 oy oldin"],a:1},
{q:"Doping holati ro'y bersa tashkilotga qanday oqibat bo'lishi mumkin?",opts:["Faqat sportchi jazolanadi","Jarima va obro' yo'qotish","10K-100K USD jarima + obro' yo'qotish + sponsor bekor","Hech qanday oqibat yo'q"],a:2}
],
murabbiy:[
{q:"WADA Kodeks 21.2-modda murabbiyga nima vazifani yuklaydi?",opts:["Faqat mashg'ulot rejasi","Sportchini antidoping ta'lim va yo'naltirish","Faqat plyus natijaga erishish","Hech qanday antidoping vazifa yo'q"],a:1},
{q:"Murabbiy sportchiga taqiqlangan modda tavsiya qilsa qanday jazo kutadi?",opts:["Ogohlantiriladi","1 yil chetlashtirish","4 yildan umrbod taqiq (ADRV 2.8)","Hech qanday jazo yo'q"],a:2},
{q:"ADAMS tizimida murabbiy qanday ro'yxatda bo'lishi kerak?",opts:["Ro'yxat shart emas","'Support Personnel' sifatida","'Athlete' sifatida","'Official' sifatida"],a:1},
{q:"Murabbiy sertifikatini qancha vaqtda yangilash kerak?",opts:["Har yili","2 yilda bir","5 yilda bir","Yangilash shart emas"],a:1},
{q:"Sportchi uchun protein kunlik ehtiyoji qancha?",opts:["0.5-0.8 g/kg","1.0-1.2 g/kg","1.6-2.2 g/kg","3.0-4.0 g/kg"],a:2},
{q:"Intensiv mashg'ulot kunida uglevod ehtiyoji qancha?",opts:["1-2 g/kg","3-4 g/kg","6-10 g/kg","15-20 g/kg"],a:2},
{q:"Yoshlar bilan ishlashda antidoping mavzusini qachon ko'tarish kerak?",opts:["Faqat musobaqa oldida","Har hafta mashg'ulot boshida eslatish","Faqat bitta maxsus dars o'tish","Ular so'ragandagina"],a:1},
{q:"DCO kelganda murabbiyning birinchi vazifasi nima?",opts:["DCO bilan munozara qilish","Sportchiga xabar berish va yonida bo'lish, koordinatorni chaqirish","Sportchini test berishdan saqlash","Test kechiktirishni so'rash"],a:1},
{q:"Sertifikatlangan BAD tanlashda qaysi muhrdorlar ishonchli?",opts:["Istalgan 'natural' yozuvli","Faqat Rossiya brendlari","Informed Sport, NSF, Cologne List","Dorixonadan sotib olingan har qanday"],a:2},
{q:"Retroaktiv TUE qachon va qancha vaqt ichida topshirilishi kerak?",opts:["Faqat rejalashtirilgan holatda","Favqulodda holat, 30 kun ichida","Favqulodda holat, 7 kun ichida","Musobaqa tugaganidan keyin 1 oy"],a:2},
{q:"'Periodizatsiya' tushunchasi nimani anglatadi?",opts:["Faqat haftasiga yuk rejasi","Davriy yuk va tiklanish bilan tabiiy adaptatsiya","Doping yordamida yuk oshirish","Faqat bayram davrida dam olish"],a:1},
{q:"DCO kelganda murabbiy sportchiga nima demasligi kerak?",opts:["Koordinatorni chaqiring","Vakolatnomani tekshiring","Test bermang yoki kechiktiring","Xotirjam bo'ling"],a:2},
{q:"Energetik ichimliklar mashg'ulot davomida nima uchun xavfli?",opts:["Tarkibi ko'p qimmat","Yashirin stimulyator va kontaminatsiya xavfi","Faqat kaloriyasi ko'p","Hech qanday xavf yo'q"],a:1},
{q:"Mahalliy restoranda ovqatlanish musobaqada nima sababli taqiqlangan?",opts:["Narxi qimmat","Sifati yaxshi emas","Kontaminatsiya va klenbuterol xavfi","Faqat marosimlarda mumkin"],a:2},
{q:"'Biologik pasport' (ABP) nima maqsadda ishlatiladi?",opts:["Sportchi tarixini saqlash","EPO va qon dopingini bilvosita aniqlash","Ovqatlanish hisobini yuritish","Whereabouts kuzatish"],a:1},
{q:"Murabbiy antidoping sertifikatini qaysi platformalarda olishi mumkin?",opts:["Faqat sportedu.uz da","Faqat WADA saytida","ADEL yoki UzNADO platformasi","Faqat xususiy kurslarda"],a:2},
{q:"Musobaqa kuni murabbiy sportchiga qanday ichimlik tavsiya qilishi kerak?",opts:["Istalgan suv va ichimlik","Energetik va izoton ichimliklar","Faqat sertifikatlangan mineral suv","Qahva va choy"],a:2},
{q:"Murabbiy DCO ning vakolatnomasini ko'rishda nima qaraydi?",opts:["Faqat ismini","Rasmiy ID va vakolatnoma hujjatini","Faqat sanani","Hech narsani tekshirmaydi"],a:1},
{q:"Doping taklif qiluvchi noma'lum shaxs bilan murojaat bo'lsa murabbiy nima qiladi?",opts:["Quloq soladi va ko'rib chiqadi","Koordinator va UzNADO ga darhol xabar beradi","O'zi qaror qiladi","Sportchiga aytadi va unuttiradi"],a:1},
{q:"WADA qaysi yil tashkil etilgan?",opts:["1995","1999","2003","2008"],a:1}
],
metodist:[
{q:"WADA Taqiqlangan Ro'yxati qachon yangilanadi?",opts:["Har chorakda","Har 6 oyda","Har yil 1-yanvar","Har 2 yilda"],a:2},
{q:"Metodist yangi Taqiqlangan Ro'yxatni olingandan keyin qancha vaqtda barcha xodimlarga tarqatishi kerak?",opts:["1 oy ichida","15 kun ichida","1 hafta ichida","24 soat ichida"],a:1},
{q:"WADA Kodeksida nechta asosiy bob bor?",opts:["10","15","20","25"],a:3},
{q:"ADAMS tizimida qaysi ma'lumotlar boshqariladi?",opts:["Faqat test natijalari","Whereabouts, test, TUE va sportchi profili","Faqat TUE arizalari","Faqat moliyaviy hisobotlar"],a:1},
{q:"TUE arizasini TUEC qancha vaqt ichida ko'rib chiqadi?",opts:["3 kun","7 kun","21 kun","60 kun"],a:2},
{q:"Retroaktiv TUE favqulodda holatda qancha vaqt ichida topshirilishi kerak?",opts:["24 soat","7 kun","30 kun","3 oy"],a:1},
{q:"AAF (Adverse Analytical Finding) xabari kelganda metodist qancha vaqt ichida B-namuna so'rashi mumkin?",opts:["3 kun","10 kun","30 kun","60 kun"],a:1},
{q:"Whereabouts ma'lumotlari chorak qachon yangilanishi kerak?",opts:["Chorak o'rtasida","Chorak boshida","Chorak oxirigacha","Istalgan vaqtda"],a:2},
{q:"3 ta missed test 12 oy ichida qanday qoidabuzarlik hisoblanadi?",opts:["ADRV 2.1","ADRV 2.3","ADRV 2.4","ADRV 2.8"],a:2},
{q:"UzNADO ga hisobot qancha vaqtda bir marta topshiriladi?",opts:["Hafta ichida","Oyda bir marta","Chorakda bir marta","Yilda bir marta"],a:2},
{q:"ISE 3.0 standarti nimani tartibga soladi?",opts:["Test rejalashtirish","Laboratoriya akkreditatsiyasi","Antidoping ta'lim standarti","TUE protsedurasi"],a:2},
{q:"WADA ISL standarti nimaga oid?",opts:["Test rejalashtirish","Laboratoriya akkreditatsiyasi","Ta'lim standartlari","Whereabouts tizimi"],a:1},
{q:"TUE rad etilsa metodist qancha vaqt ichida apellyatsiya qilishi mumkin?",opts:["7 kun","14 kun","21 kun","60 kun"],a:2},
{q:"Antidoping modulini muvaffaqiyatli o'zlashtirish uchun minimal necha foiz to'g'ri javob talab etiladi?",opts:["60%","70%","75%","90%"],a:2},
{q:"ADKT-25 nima?",opts:["Antidoping dori ro'yxati","Antidoping bilim testi (25 savol)","ADAMS tizim kodi","Taqiqlangan ro'yxat kodi"],a:1},
{q:"DMS-12 nima?",opts:["Dori klassifikatsiya tizimi","Dinamik motivatsiya shkalasi (12 savol)","WADA standart kodi","Test protokoli"],a:1},
{q:"ADAMS da 'RTP' abbreviaturasi nimani anglatadi?",opts:["Test natijalari platformasi","Ro'yxatga olingan testlanadigan guruh (Registered Testing Pool)","WADA protokol tizimi","Taqiqlangan ro'yxat platformasi"],a:1},
{q:"Metodist o'z malakasini qaysi platformalarda oshirishi mumkin?",opts:["Faqat sportedu.uz","Faqat WADA saytida","ADEL yoki talim-uznada.uz","Faqat xususiy kurslarda"],a:2},
{q:"Sport tashkilotida antidoping arxiv qancha yil saqlanishi shart?",opts:["1 yil","2 yil","3 yil","5 yil"],a:3},
{q:"WADA Kodeks 2.4-modda nimani tartibga soladi?",opts:["Taqiqlangan modda (AAF)","Bosh tortish (Refusal)","Whereabouts failure","Gen doping"],a:2}
],
sportchi:[
{q:"'Strict Liability' prinsipi sportchi uchun nimani anglatadi?",opts:["Faqat qasddan qabul qilish uchun javobgar","Faqat musobaqada qabul qilish uchun javobgar","Organizmidagi har qanday taqiqlangan modda uchun shaxsan javobgar","Shifokor ko'rsatmasi bo'lsa javob bermas"],a:2},
{q:"Whereabouts qoidasiga ko'ra RTP sportchisi ADAMS ga kunlik qancha ma'lumot kiritadi?",opts:["24 soatlik jadval","60 daqiqalik vaqt va aniq joy","Faqat mashg'ulot joyi","Faqat yashash manzili"],a:1},
{q:"12 oy ichida nechta missed test ADRV hisoblanadi?",opts:["1 ta","2 ta","3 ta","5 ta"],a:2},
{q:"TUE arizasini musobaqadan qancha vaqt oldin topshirish kerak?",opts:["7 kun oldin","14 kun oldin","30 kun oldin","60 kun oldin"],a:2},
{q:"DCO kelganda sportchi birinchi navbatda nima qilishi kerak?",opts:["Bosh tortish","DCO ning vakolatnomasini va ID sini tekshirish","Yugurish","O'ylab ko'raman deyish"],a:1},
{q:"Namuna berishdan bosh tortish qanday oqibatga olib keladi?",opts:["Ogohlantiriladi","6 oy","2 yil","4 yilgacha diskvalifikatsiya (ADRV 2.3)"],a:3},
{q:"BAD (biologik qo'shimcha) ishlatmaslik tavsiya etiladi chunki:",opts:["Narxi qimmat","Tarkibi nazorat qilinmagan, kontaminatsiya xavfi bor","Shifokor ruxsatini olish qiyin","Hamma BAD taqiqlangan"],a:1},
{q:"WADA sertifikatlangan BAD marka ro'yxatiga qaysi kiradi?",opts:["Rossiya brendlari","Informed Sport, NSF, Cologne List","'Natural' yozuvli har qanday","Dorixona brendlari"],a:1},
{q:"Taqiqlangan ro'yxatda yo'q dori qaysi holatlarda xavfli bo'lishi mumkin?",opts:["Hech qachon xavfli emas","Sertifikatsiz BAD tarkibida yashirin taqiqlangan modda bo'lsa","Faqat ko'p miqdorda qabul qilinganda","Shifokor ruxsatisiz ichilganda"],a:1},
{q:"Kofein WADA da qanday statusda?",opts:["Butunlay taqiqlangan","Musobaqada taqiqlangan (S6)","Ruxsat etilgan — Monitoring dasturida (siydik chegarasi bekor qilingan)","Faqat TUE bilan ruxsat etiladi"],a:2},
{q:"Energetik ichimliklar sportchilarga nima uchun taqiqlangan?",opts:["Faqat qand miqdori ko'p","Tarkibida yashirin stimulyatorlar va kontaminatsiya xavfi bor","Narxi qimmat","Kuchli ta'mi bor"],a:1},
{q:"Go'sht orqali qaysi taqiqlangan modda kirishi mumkin?",opts:["Testosteron","Klenbuterol","EPO","Amfetamin"],a:1},
{q:"Taqiqlangan ro'yxatda modda bor-yo'qligini tekshirish uchun qaysi saytga kirish kerak?",opts:["google.com","talim-uznada.uz","wada-ama.org/en/prohibited-list","sportedu.uz"],a:2},
{q:"Shifokor retsepti bo'lsa dori qabul qilish xavfsizmi?",opts:["Ha, retsept bo'lsa har doim xavfsiz","Yo'q — faol moddani Taqiqlangan ro'yxatda tekshirish shart","Ha, agar mahalliy shifokor yozsa","Faqat musobaqadan tashqarida ruxsat"],a:1},
{q:"ADEL platformasida sportchi nima olishi mumkin?",opts:["Faqat ma'lumot","Bepul online ta'lim va sertifikat","Faqat pul evaziga kurs","Test natijalari"],a:1},
{q:"Deksametazon qaysi shaklda qabul qilish ruxsat etilgan?",opts:["Oral (tabletkalar)","IV (tomir orqali)","Intra-artikulyar (bo'g'in ichiga inyeksiya)","Barcha shaklda ruxsat"],a:2},
{q:"TUE yo'q holda taqiqlangan modda qabul qilsangiz nima bo'ladi?",opts:["Birinchi galda ogohlantirilasiz","AAF yoki ADRV hisoblanadi","Faqat musobaqada tekshiriladi","Hech narsa bo'lmaydi"],a:1},
{q:"'Play True Day' qachon nishonlanadi?",opts:["Har yili yanvar oyida","Har yili aprel oyida (WADA e'lon qilgan kunda)","Har yili may oyida","Har yili oktyabr oyida"],a:1},
{q:"CBD (kannabidiol) yog'i ishlatish xavfsizmi?",opts:["Ha, butunlay xavfsiz","Yo'q, WADA da taqiqlangan","THCsiz sifatli CBD ruxsat, lekin ko'pchilik mahsulotda THC izlari bor","Faqat musobaqadan tashqarida ruxsat"],a:2},
{q:"3 ta Whereabouts failure qanday oqibat beradi?",opts:["Ogohlantirilasiz","6 oy diskvalifikatsiya","2 yilgacha diskvalifikatsiya","10 yilgacha diskvalifikatsiya"],a:2}
]};


const scenarios=[
  {
    id:'dco',
    icon:'👮',
    title:'DCO keldi!',
    desc:'Musobaqadan keyin doping nazorat xodimi sizni to\'xtatdi.',
    color:'#dc2626',
    bg:'#fef2f2',
    choices:[
      {text:'Vakolatnomasini ko\'rib, metodistni chaqiraman',correct:true,result:'✅ To\'G\'RI! DCO ning ID va vakolatnomasini tekshirish — birinchi qadam. Metodist kelganda tinch turib namuna berasiz. Bu protsedura Kodeks 2.3 bo\'yicha to\'g\'ri.'},
      {text:'Hozir dam olishim kerak, ertaga kelsin',correct:false,result:'❌ XATO! Bosh tortish = ADRV 2.3 = 4 yilgacha diskvalifikatsiya. "Dam olaman" — qonuniy sabab emas.'},
      {text:'Bosh tortaman va ketib qolaman',correct:false,result:'❌ JUDA XAVFLI! Bu Kodeks 2.3 bo\'yicha eng og\'ir qoidabuzarlik — 4 yilgacha ban. DCO bilan hech qachon munozara qilmang.'}
    ]
  },
  {
    id:'bad',
    icon:'💊',
    title:'Do\'st BAD taklif qildi',
    desc:'Musobaqa oldida do\'stingiz "100% tabiiy, xavfsiz" protein qo\'shimchasini taklif qildi.',
    color:'#d97706',
    bg:'#fffbeb',
    choices:[
      {text:'Rahmat, lekin sertifikatini ko\'rsatsin, keyin koordinatorga so\'rayman',correct:true,result:'✅ TO\'G\'RI! Har qanday qo\'shimchani olishdan oldin: Informed Sport/NSF sertifikati + koordinator tasdiqi. "Tabiiy" so\'zi kafolat emas.'},
      {text:'"Tabiiy" deydi, ichib ko\'raman',correct:false,result:'❌ XATO! Sertifikatsiz BADlarning 12-25% da taqiqlangan modda izlari topilgan. "Tabiiy" yozuvi hech narsani kafolatlamaydi.'},
      {text:'Musobaqadan keyin ichaman',correct:false,result:'⚠️ NOTO\'G\'RI! Taqiqlangan moddalar musobaqadan tashqarida ham taqiqlangan (M1, S1, S2 va boshqalar). Musobaqadan keyingisi ham xavfli.'}
    ]
  },
  {
    id:'gripp',
    icon:'🤧',
    title:'Musobaqa oldida kasal bo\'ldingiz',
    desc:'Musobaqadan 2 kun oldin gripp belgilari. Shifokor siz bilmagan dori yozdi.',
    color:'#2563eb',
    bg:'#eff6ff',
    choices:[
      {text:'Dorining faol moddasini WADA ro\'yxatida tekshiraman, keyin ichaman',correct:true,result:'✅ TO\'G\'RI! Har qanday dorida: (1) faol moddalarni aniqlash, (2) WADA Prohibited List da tekshirish, (3) taqiqlangan bo\'lsa — muqobil so\'rash yoki TUE. Retsept — himoya emas!'},
      {text:'Shifokor yozdi, ishonchli, ichaman',correct:false,result:'❌ XATO! Ko\'p sovuq dorilarda psevdoefedrin bor — bu S6 stimulyator. "Shifokor yozdi" — WADA uchun bahona emas. Strict Liability amal qiladi.'},
      {text:'Hech narsa ichmay musobaqaga boraman',correct:true,result:'✅ YAXSHI! Agar xavfsiz dori topa olmasangiz — kasallik bilan musobaqaga borish xavfli bo\'lsa ham, dozasiz ketish xavfsizroq. Koordinator bilan maslahatlashing.'}
    ]
  }
];


const remindMessages={
  whereabouts:{
    emoji:'📍',
    title:'WHEREABOUTS ESLATMASI',
    text:`📍 <b>WHEREABOUTS ESLATMASI</b>
━━━━━━━━━━━━━━━━━━━━
Assalomu alaykum, {ism}! 

⏰ <b>Bugun ADAMS ni yangilash vaqti!</b>

📋 Nima qilish kerak:
1. ADAMS ga kiring: adams.wada-ama.org
2. Ertalab soat 06:00—07:00 → joyingizni kiriting
3. Chorak (3 oylik) ma'lumotni tekshiring
4. Joy o'zgarsa — DARHOL yangilang

⚠️ Eslatma: 12 oyda 3 ta missed test = 2 yil!

🌐 doping.uz | sportedu.uz | UzNADO`
  },
  tue:{
    emoji:'💊',
    title:'TUE MUDDAT ESLATMASI',
    text:`💊 <b>TUE MUDDAT ESLATMASI</b>
━━━━━━━━━━━━━━━━━━━━
Assalomu alaykum, {ism}!

⚠️ <b>TUE muddatingiz yaqinlashmoqda!</b>

📋 Nima qilish kerak:
1. ADAMS da TUE holatini tekshiring
2. Muddati tugashiga 30+ kun qolganida yangilash arizasini bering
3. Shifokordan yangi tibbiy hujjatlar oling
4. TUEC javobini 21 kun ichida kuting

⚠️ TUE siz taqiqlangan dori ichish = AAF!

📞 UzNADO: talim-uznada.uz`
  },
  seminar:{
    emoji:'🎓',
    title:'SEMINAR ESLATMASI',
    text:`🎓 <b>TA'LIM SEMINARI ESLATMASI</b>
━━━━━━━━━━━━━━━━━━━━
Assalomu alaykum, {ism}!

📅 <b>Yaqinlashayotgan ta'lim tadbirlari:</b>

✅ ADEL platformasida yangi kurslar: adel.wada-ama.org
✅ UzNADO ta'lim: talim-uznada.uz
✅ Institut yangiliklari: sportedu.uz

💡 Yillik malaka yangilanish — majburiy!

🌐 Antidoping Ta'lim Portali | doping.uz`
  },
  test:{
    emoji:'📝',
    title:'TEST ESLATMASI',
    text:`📝 <b>YILLIK MALAKA TESTI ESLATMASI</b>
━━━━━━━━━━━━━━━━━━━━
Assalomu alaykum, {ism}!

🔔 <b>Antidoping bilim testini yangilash vaqti keldi!</b>

📋 Nima qilish kerak:
1. https://doping.uz portaliga kiring
2. O'z toifangizni tanlang (rahbar/murabbiy/metodist/sportchi)
3. 20 savollik testni toping
4. 75%+ → O‘zlashtirildi tasdiqnomasi + Telegramga yuboriladi

⚠️ Yangilanmagan bilim — xatolar keltirib chiqaradi!

🌐 Antidoping Ta'lim Portali | doping.uz`
  }
};


try { window.CUR_LANG = localStorage.getItem('site_lang') || 'uz'; } catch(e) { window.CUR_LANG = 'uz'; }

const STR = {
uz:{
  savol:'Savol',
  res_pass:'✅ Tabriklaymiz! Test muvaffaqiyatli o‘zlashtirildi! Quyida tasdiqlovchi hujjatni yuklab oling.',
  res_mid:"👍 Yaxshi natija, lekin 75% kerak. Mavzularni takrorlab, qayta urinib ko'ring.",
  res_low:"📚 Ko'proq o'qib, qayta sinab ko'ring.",
  unanswered:"{n} ta savolga javob bermagansiz. Baribir natijani ko'rmoqchimisiz?",
  err_name:'❗ Ism va Familiya kiritish majburiy!',
  cert_ready:'🏆 75% dan yuqori — Fan muvaffaqiyatli o‘zlashtirildi! Hujjatni yuklab oling.',
  cert_field_date:"Berilgan sana:",
  cert_field_id:"Qayd ID:",
  cert_dl:'⬇️ PNG yuklab olish',
  cert_sending:'⏳ @antidopi kanaliga yuborilmoqda...',
  cert_ch_btn:'📢 Kanalga yuborish',
  cert_ch_sending:'⏳ Yuborilmoqda...',
  cert_ch_done:'✅ Kanalga yuborildi',
  cert_ch_retry:'🔄 Qayta yuborish',
  cert_ch_ok:'✅ @antidopi kanaliga yuborildi!',
  cert_ch_fail:"⚠️ Yuborilmadi — bot @antidopi kanalida admin bo'lishi kerak",
  cert_ch_nocfg:'⚠️ Telegram sozlanmagan (BOT_TOKEN yoki Worker URL kerak)',
  cert_ch_net:"⚠️ Internet xatosi — tasdiqnomani yuklab oling",
  tg_e_chat:"⚠️ Kanal topilmadi — kanal username'i noto'g'ri yoki kanal maxfiy (public bo'lishi kerak)",
  tg_e_rights:'⚠️ Botga kanalda "Post messages" (xabar yuborish) huquqi berilmagan',
  tg_e_kicked:"⚠️ Bot kanalga qo'shilmagan yoki chiqarib yuborilgan",
  tg_e_token:"⚠️ Bot token noto'g'ri — @BotFather dan qayta tekshiring",
  tg_e_other:'⚠️ Telegram xatosi',
  tg_e_cors:"⚠️ Brauzer so'rovni to'sdi — Adblock/kengaytmalarni o'chirib, boshqa brauzerda sinab ko'ring",
  tg_e_blocked:"⚠️ api.telegram.org ochilmayapti — provayder bloklagan bo'lishi mumkin. VPN yoqib sinab ko'ring yoki Cloudflare Worker usulini ishlating (SOZLASH-YORIQNOMA.md)",
  tg_e_wcode:"⚠️ Worker ochilyapti, lekin ichida kerakli kod YO'Q — Cloudflare'da workeringizni oching → Edit code → cloudflare-worker.js dagi kodni to'liq joylashtiring → Deploy",
  tg_e_wpost:"⚠️ Worker ishlayapti, lekin yuborish amalga oshmadi — sahifani yangilab (Ctrl+F5) qayta urining",
  tg_e_wblocked:"⚠️ Worker manziliga ulanib bo'lmadi — internetni tekshiring yoki provayder workers.dev ni bloklagan (VPN bilan sinang)",
  retry:'🔄 Qayta sinash',
  not_taken:'Topshirilmagan',
  cert_got:'✅ O‘zlashtirildi'
},
ru:{
  savol:'Вопрос',
  res_pass:'✅ Поздравляем! Тест успешно освоен! Скачайте подтверждающий документ ниже.',
  res_mid:'👍 Хороший результат, но нужно 75%. Повторите темы и попробуйте снова.',
  res_low:'📚 Изучите материалы и попробуйте ещё раз.',
  unanswered:'Вы не ответили на {n} вопрос(ов). Всё равно показать результат?',
  err_name:'❗ Имя и фамилия обязательны!',
  cert_ready:'🏆 Более 75% — Тест успешно освоен! Скачайте документ.',
  cert_field_date:"Дата выдачи:",
  cert_field_id:"ID подтверждения:",
  cert_dl:'⬇️ Скачать PNG',
  cert_sending:'⏳ Отправляется в канал @antidopi...',
  cert_ch_btn:'📢 Отправить в канал',
  cert_ch_sending:'⏳ Отправляется...',
  cert_ch_done:'✅ Отправлено в канал',
  cert_ch_retry:'🔄 Отправить снова',
  cert_ch_ok:'✅ Отправлено в канал @antidopi!',
  cert_ch_fail:'⚠️ Не отправлено — бот должен быть админом канала @antidopi',
  cert_ch_nocfg:'⚠️ Telegram не настроен (нужен BOT_TOKEN или Worker URL)',
  cert_ch_net:'⚠️ Ошибка сети — скачайте документ об освоении',
  tg_e_chat:'⚠️ Канал не найден — неверный username канала или канал приватный (нужен публичный)',
  tg_e_rights:'⚠️ У бота нет права «Post messages» в канале',
  tg_e_kicked:'⚠️ Бот не добавлен в канал или удалён из него',
  tg_e_token:'⚠️ Неверный токен бота — проверьте в @BotFather',
  tg_e_other:'⚠️ Ошибка Telegram',
  tg_e_cors:'⚠️ Браузер заблокировал запрос — отключите Adblock/расширения, попробуйте другой браузер',
  tg_e_blocked:'⚠️ api.telegram.org недоступен — возможно, заблокирован провайдером. Попробуйте VPN или метод Cloudflare Worker (SOZLASH-YORIQNOMA.md)',
  tg_e_wcode:'⚠️ Worker открывается, но в нём НЕТ нужного кода — откройте воркер в Cloudflare → Edit code → вставьте код из cloudflare-worker.js → Deploy',
  tg_e_wpost:'⚠️ Worker работает, но отправка не удалась — обновите страницу (Ctrl+F5) и попробуйте снова',
  tg_e_wblocked:'⚠️ Адрес воркера недоступен — проверьте интернет, либо провайдер блокирует workers.dev (попробуйте VPN)',
  retry:'🔄 Попробовать снова',
  not_taken:'Не сдан',
  cert_got:'✅ Освоено'
}};

function tr(k){ return (STR[window.CUR_LANG]&&STR[window.CUR_LANG][k]) || STR.uz[k] || k; }


const RU_DICT = {
"ANTIDOPING KOMPETENSIYASI":"АНТИДОПИНГОВАЯ КОМПЕТЕНТНОСТЬ",
"PhD Ta'lim Portali · 2026":"Образовательный портал PhD · 2026",
"Modullar":"Модули","🤖 AI Dori":"🤖 ИИ Лекарства","📊 Dashboard":"📊 Дашборд","🎯 Trening":"🎯 Тренинг","Toza Sport":"Чистый спорт",
"📚 Modullar":"📚 Модули","🔍 Dorilar":"🔍 Лекарства","🎯 Toza Sport":"🎯 Чистый спорт","🔗 Resurslar":"🔗 Ресурсы",
"🎓 PhD Ilmiy Tadqiqot Loyihasi · sportedu.uz":"🎓 Научно-исследовательский проект PhD · sportedu.uz",
"Tuzuvchi · PhD tadqiqotchisi · sportedu.uz":"Автор · исследователь PhD · sportedu.uz",
"Sport tizimidagi rahbarlar, murabbiylar, metodistlar va sportchilar uchun WADA hamda UzNADO xalqaro standartlariga asoslangan ilmiy-metodologik ta'lim tizimi.":"Научно-методическая система обучения для руководителей, тренеров, методистов и спортсменов, основанная на международных стандартах WADA и UzNADO.",
"Auditoriya":"Аудитории","Mavzu":"Тем","Test savol":"Тест-вопросов","WADA kategoriya":"Категорий WADA","Dorilar bazasi":"База лекарств","Lug'at atama":"Терминов",
"Rahbarlar":"Руководители","Murabbiylar":"Тренеры","Metodistlar":"Методисты","Sportchilar":"Спортсмены",
"O'quv Modullar":"Учебные модули","O'z toifangizni tanlang":"Выберите свою категорию",
"Har bir modul shu toifa uchun maxsus ishlab chiqilgan. Har bir modulda 16 ta mavzu, amaliy checklist va 20 ta test savoli mavjud.":"Каждый модуль разработан специально для своей категории. В каждом модуле 16 тем, практический чек-лист и 20 тестовых вопросов.",
"Antidoping siyosati, tashkiliy tuzilma, ovqatlanish nazorati, safar checklist, byudjet va hujjatlar.":"Антидопинговая политика, оргструктура, контроль питания, чек-лист поездок, бюджет и документы.",
"Mashg'ulot rejalashtirish, ovqatlanish nazorati, sportchi salomatligi, TUE va shaxsiy javobgarlik.":"Планирование тренировок, контроль питания, здоровье спортсмена, TUE и личная ответственность.",
"WADA hujjatlari, ADAMS tizimi, SMS-tahlil, federatsiyalar koordinatsiyasi, TUE va hisobotlar.":"Документы WADA, система ADAMS, SMS-анализ, координация федераций, TUE и отчёты.",
"Toza sport, BAD xavfi, TUE, Whereabouts, shaxsiy javobgarlik va doping-kontrol protsedurasi.":"Чистый спорт, риски БАД, TUE, Whereabouts, личная ответственность и процедура допинг-контроля.",
"📋 16 mavzu":"📋 16 тем","🏅 16 mavzu":"🏅 16 тем","📄 16 mavzu":"📄 16 тем","✅ Checklist":"✅ Чек-лист","📝 20 test":"📝 20 тестов","✅ Kunlik reja":"✅ Дневной план",
"Hujjatli Filmlar":"Документальные фильмы","Oskar sovrindori va dunyo miqyosida e'tirof etilgan filmlar — pedagogik tahlil bilan.":"Оскароносные и всемирно признанные фильмы — с педагогическим анализом.",
"Klinik Holatlar":"Клинические случаи","Haqiqiy doping voqealari asosida o'rganish — xato va to'g'ri yo'l, WADA qoidalari.":"Обучение на реальных допинг-случаях — ошибки и верный путь, правила WADA.",
"Antidoping Lug'at":"Антидопинговый словарь","WADA atamalarining o'zbekcha izohli lug'ati — 35+ atama, qidiruv va alifbo filtri.":"Толковый словарь терминов WADA — 35+ терминов, поиск и алфавитный фильтр.",
"🎥 5 film":"🎥 5 фильмов","🏆 Оскар":"🏆 Оскар","📖 Tahlil":"📖 Анализ","📋 12 holat":"📋 12 случаев","❌→✅ Tahlil":"❌→✅ Анализ","📜 WADA qoida":"📜 Правила WADA","🔤 35+ atama":"🔤 35+ терминов","🔍 Qidiruv":"🔍 Поиск","📌 Harflar":"📌 Алфавит",
"WADA Ma'lumotlar Bazasi":"База данных WADA","Taqiqlangan Moddalar Ro'yxati (2026)":"Список запрещённых веществ (2026)",
"Barcha kategoriyalar":"Все категории","Modda nomi":"Название вещества","Misollar":"Примеры","Ta'siri":"Действие","Xavf darajasi":"Уровень риска",
"O'zbekistonda birinchi":"Впервые в Узбекистане","AI Dori Tekshirgich":"ИИ-проверка лекарств",
"Istalgan dori, qo'shimcha yoki mahsulot nomini yozing — AI Dori Tekshirgich WADA 2026 qoidalari asosida javob beradi":"Введите название любого лекарства, добавки или продукта — ИИ-проверка ответит по правилам WADA 2026",
"🤖 AI Tekshirgich":"🤖 ИИ-проверка","📋 Tezkor Qidiruv":"📋 Быстрый поиск","🤖 AI Tekshir":"🤖 Проверить","🔍 Qidirish":"🔍 Поиск",
"Topilmadi — AI Tekshirgichdan foydalaning":"Не найдено — воспользуйтесь ИИ-проверкой",
"Mening Progress Dashboard":"Мой дашборд прогресса","Test natijalarim, o‘zlashtirish tasdiqnomalari, reyting":"Мои результаты, подтверждения освоения, рейтинг",
"📊 Shaxsiy Natijalar":"📊 Личные результаты","Test topshirgan bo'lsangiz — natijalaringiz shu yerda saqlanadi":"Если вы сдавали тест — результаты сохраняются здесь",
"📈 Modul Natijalari":"📈 Результаты модулей","🏆 O‘zlashtirilgan modullar":"🏆 Освоенные модули","🏅 Top Natijalar":"🏅 Лучшие результаты",
"Hali hech qanday test topshirilmagan.":"Пока ни один тест не сдан.","Yuqoridagi modullardan birini tanlang.":"Выберите один из модулей выше.",
"75% dan yuqori natijada O‘zlashtirildi tasdiqnomasi beriladi":"Подтверждение освоения выдаётся при результате выше 75%",
"Test topshiring va reytingda ko'rining!":"Сдайте тест и попадите в рейтинг!",
"🎯 Interaktiv Trening":"🎯 Интерактивный тренинг","Real Hayot Ssenarilari":"Сценарии из реальной жизни",
"Haqiqiy vaziyatda nima qilardingiz? Tanlang va oqibatini ko'ring":"Что бы вы сделали в реальной ситуации? Выберите и увидите последствия",
"🎯 Toza Sport Targ'iboti":"🎯 Пропаганда чистого спорта","Dopingga Qarshi Kurashish va O'qitish":"Борьба с допингом и обучение",
"Xalqaro tajribalar, o'qitish metodikasi, targ'ibot va amaliy dasturlar":"Международный опыт, методика обучения, пропаганда и практические программы",
"Dunyo antidoping agentliklari":"Антидопинговых агентств мира","Yillik testlar (O'zbekiston)":"Тестов в год (Узбекистан)","Play True kuni":"День Play True","2024 toza natija foizi":"Чистых результатов (2024)",
"Halollik":"Честность","Sun'iy yordamsiz, raqibga hurmat.":"Без искусственной помощи, уважение к сопернику.",
"Salomatlik":"Здоровье","Tanangiz — asosiy kapital. Doping uni buzadi.":"Ваше тело — главный капитал. Допинг его разрушает.",
"Javobgarlik":"Ответственность","Strict Liability — organizmingizda topilgan har qanday modda uchun shaxsan javobgarsiz.":"Strict Liability — вы лично отвечаете за любое вещество, найденное в организме.",
"❓ Ko'p Beriladigan Savollar":"❓ Часто задаваемые вопросы","Antidoping bo'yicha FAQ":"FAQ по антидопингу",
"14 ta savol-javob — bosib oching":"14 вопросов и ответов — нажмите, чтобы открыть",
"Rasmiy Resurslar":"Официальные ресурсы","WADA, UzNADO, Institut va boshqa rasmiy platformalar":"WADA, UzNADO, институт и другие официальные платформы",
"© 2026 · Antidoping Kompetensiyasi Ta'lim Portali · PhD Ilmiy Tadqiqot · sportedu.uz":"© 2026 · Образовательный портал антидопинговой компетентности · Научное исследование PhD · sportedu.uz",
"📝 Rahbarlar testi — 20 savol":"📝 Тест для руководителей — 20 вопросов",
"📝 Murabbiylar testi — 20 savol":"📝 Тест для тренеров — 20 вопросов",
"📝 Metodistlar testi — 20 savol":"📝 Тест для методистов — 20 вопросов",
"📝 Sportchilar testi — 20 savol":"📝 Тест для спортсменов — 20 вопросов",
"@antidopi kanaliga obuna bo'ling":"Подпишитесь на канал @antidopi",
"Test natijangiz va O‘zlashtirildi tasdiqnomangiz shu kanalga yuboriladi.":"Результат теста и подтверждение освоения отправляются в этот канал.",
"📢 Kanalga o'tish →":"📢 Перейти в канал →",
"Ma'lumotlaringizni kiriting":"Введите ваши данные",
"🚀 Testni boshlash":"🚀 Начать тест","✅ Natijani ko'rish":"✅ Показать результат","🔄 Qayta boshlash":"🔄 Начать заново",
"Rahbarlar uchun modul":"Модуль для руководителей","Tashkil etish, nazorat, byudjet, siyosat":"Организация, контроль, бюджет, политика",
"Murabbiylar uchun modul":"Модуль для тренеров","Mashg'ulot, ovqat, salomatlik, javobgarlik":"Тренировки, питание, здоровье, ответственность",
"Metodistlar uchun modul":"Модуль для методистов","WADA hujjatlari, ADAMS, SMS, federatsiyalar":"Документы WADA, ADAMS, SMS, федерации",
"Sportchilar uchun modul":"Модуль для спортсменов","Toza sport, BAD, TUE, javobgarlik, doping-kontrol":"Чистый спорт, БАД, TUE, ответственность, допинг-контроль",
"📚 Mavzular":"📚 Темы","✅ Oylik checklist":"✅ Месячный чек-лист","📝 Test (20)":"📝 Тест (20)",
"Oskar sovrindori va e'tirof etilgan filmlar — pedagogik tahlil":"Оскароносные и признанные фильмы — педагогический анализ",
"Klinik Holatlar (Case Studies)":"Клинические случаи (Case Studies)","Haqiqiy doping voqealari asosida — xato va to'g'ri yo'l":"На основе реальных допинг-случаев — ошибки и верный путь",
"Antidoping Lug'ati":"Антидопинговый словарь","WADA atamalarining o'zbekcha izohli lug'ati — 35+ atama":"Толковый словарь терминов WADA — 35+ терминов"

,"🎓 PhD Ilmiy Tadqiqot Loyihasi · doping.uz · sportedu.uz":"🎓 Научно-исследовательский проект PhD · doping.uz · sportedu.uz"
,"Muallif · Jismoniy tarbiya va sport bo‘yicha mutaxassislarni qayta tayyorlash va malakasini oshirish instituti · PhD tadqiqotchi":"Автор · Институт переподготовки и повышения квалификации специалистов по ФКиС · PhD-исследователь"
,"Saydaliyev Muhammad Sodiq Mo‘minjon o‘g‘li":"Сайдалиев Мухаммад Содик Муминжон угли"
,"Jismoniy tarbiya va sport bo‘yicha mutaxassislarni qayta tayyorlash va malakasini oshirish instituti (PhD tadqiqotchi Saydaliyev M.S.) tomonidan sportchilar, murabbiylar va mutaxassislarning malakasini oshirish hamda bilmasdan dopingga tushib qolishning oldini olish maqsadida yaratilgan milliy antidoping ta’lim portali.":"Национальный антидопинговый образовательный портал, созданный Институтом переподготовки и повышения квалификации специалистов по физической культуре и спорту (PhD-исследователь Сайдалиев М.С.) для повышения квалификации и профилактики непреднамеренного допинга."
,"Antidoping audio darslari":"Антидопинговые аудиоуроки"
,"Sportchilar va tinglovchilar uchun 13 ta audio mashg‘ulot. Tinglang, tezlikni sozlang va muhim atamalarni o‘rganing.":"13 аудиозанятий для спортсменов и специалистов. Слушайте, настраивайте скорость и изучайте ключевые термины."
,"🎙 13 ta audio":"🎙 13 аудио"
,"📖 Atamalar":"📖 Термины"
,"13 ta audio mashg‘ulot · tinglash va mustaqil o‘rganish":"13 аудиозанятий · прослушивание и самообучение"
,"Tinglash uchun darsni tanlang":"Выберите урок для прослушивания"
,"Tinglash tezligi":"Скорость воспроизведения"
,"Natijalarni yuklab olish (CSV)":"Скачать результаты (CSV)"
,"📥 Natijalarni yuklab olish (CSV)":"📥 Скачать результаты (CSV)"
,"© 2026 · Doping.uz — Antidoping Ta'lim Portali · Muallif: Saydaliyev Muhammad Sodiq Mo‘minjon o‘g‘li (Malaka oshirish instituti, PhD tadqiqotchi)":"© 2026 · Doping.uz — Антидопинговый портал · Автор: Сайдалиев М.С. (Институт повышения квалификации, PhD-исследователь)"
,"Sportchilar va murabbiylar malakasini oshirish, dopingga tushib qolishining oldini olish bo'yicha milliy ta'lim tizimi":"Национальная система обучения спортсменов и тренеров по профилактике допинга"

};

const HTML_SWAP_LIST = [
[".hero h1","Антидопинговая <em>Образовательная</em> Платформа"],
["#wada-sec .section-sub","Введите название вещества или отфильтруйте по категории. <strong>Версия:</strong> WADA Prohibited List 2026 (в силе с 01.01.2026). S1, S2, S4, S5, M1-M3 — запрещены всегда; S3, S6, S7, S8, S9 — только <strong>в соревновательный период</strong>."],
["#rahbar-reg div[style*='border-radius:8px']","✅ Если наберёте более 75%, ваше подтверждение освоения (O‘zlashtirildi) будет автоматически отправлено в канал <b>@antidopi</b>."],
["#murabbiy-reg div[style*='border-radius:8px']","✅ Если наберёте более 75%, ваше подтверждение освоения (O‘zlashtirildi) будет автоматически отправлено в канал <b>@antidopi</b>."],
["#metodist-reg div[style*='border-radius:8px']","✅ Если наберёте более 75%, ваше подтверждение освоения (O‘zlashtirildi) будет автоматически отправлено в канал <b>@antidopi</b>."],
["#sportchi-reg div[style*='border-radius:8px']","✅ Если наберёте более 75%, ваше подтверждение освоения (O‘zlashtirildi) будет автоматически отправлено в канал <b>@antidopi</b>."]
];


const PH_I18N = [
["wada-search","Поиск вещества..."],
["drug-input","Введите название лекарства..."],
["ai-drug-input","Например: Ибупрофен, Сальбутамол ингалятор, протеин, Витамин C..."],
["faq-search","Поиск вопроса..."],
["gloss-search","Поиск термина..."],
["rahbar-ism","Имя и фамилия (например: Алишер Каримов)"],
["rahbar-tashkilot","Организация / институт"],
["murabbiy-ism","Имя и фамилия"],
["murabbiy-tashkilot","Организация / вид спорта"],
["metodist-ism","Имя и фамилия"],
["metodist-tashkilot","Организация / федерация"],
["sportchi-ism","Имя и фамилия"],
["sportchi-tashkilot","Вид спорта / организация"]
];


window.scenariosRu=[
  {id:'dco',icon:'👮',title:'Пришёл DCO!',desc:'После соревнования вас остановил офицер допинг-контроля.',color:'#dc2626',bg:'#fef2f2',
   choices:[
    {text:'Проверю удостоверение и позову методиста',correct:true,result:'✅ ВЕРНО! Проверка ID и полномочий DCO — первый шаг. Когда придёт методист, спокойно сдаёте пробу. Это правильная процедура по ст. 2.3 Кодекса.'},
    {text:'Мне нужно отдохнуть, пусть придёт завтра',correct:false,result:'❌ ОШИБКА! Отказ = ADRV 2.3 = дисквалификация до 4 лет. «Хочу отдохнуть» — не является уважительной причиной.'},
    {text:'Откажусь и уйду',correct:false,result:'❌ ОЧЕНЬ ОПАСНО! Это одно из самых тяжких нарушений по ст. 2.3 Кодекса — бан до 4 лет. Никогда не спорьте с DCO.'}
   ]},
  {id:'bad',icon:'💊',title:'Друг предложил БАД',desc:'Перед соревнованием друг предложил «100% натуральную, безопасную» протеиновую добавку.',color:'#d97706',bg:'#fffbeb',
   choices:[
    {text:'Спасибо, но пусть покажет сертификат, потом спрошу координатора',correct:true,result:'✅ ВЕРНО! Перед приёмом любой добавки: сертификат Informed Sport/NSF + одобрение координатора. Слово «натуральный» — не гарантия.'},
    {text:'Говорит «натуральный» — попробую',correct:false,result:'❌ ОШИБКА! В 12-25% несертифицированных БАД найдены следы запрещённых веществ. Надпись «натуральный» ничего не гарантирует.'},
    {text:'Выпью после соревнования',correct:false,result:'⚠️ НЕВЕРНО! Запрещённые вещества запрещены и вне соревнований (M1, S1, S2 и др.). После соревнования тоже опасно.'}
   ]},
  {id:'gripp',icon:'🤧',title:'Заболели перед стартом',desc:'За 2 дня до соревнования признаки гриппа. Врач выписал незнакомое лекарство.',color:'#2563eb',bg:'#eff6ff',
   choices:[
    {text:'Проверю действующее вещество в списке WADA, потом приму',correct:true,result:'✅ ВЕРНО! Для любого лекарства: (1) определить действующие вещества, (2) проверить в Prohibited List WADA, (3) если запрещено — просить замену или TUE. Рецепт — не защита!'},
    {text:'Врач выписал — надёжно, приму',correct:false,result:'❌ ОШИБКА! Во многих лекарствах от простуды есть псевдоэфедрин — стимулятор S6. «Врач выписал» — не оправдание для WADA. Действует Strict Liability.'},
    {text:'Ничего не приму и поеду на соревнование',correct:true,result:'✅ ХОРОШО! Если не нашли безопасное лекарство — ехать без препаратов безопаснее. Посоветуйтесь с координатором.'}
   ]}
];


window.quizDataRu={
rahbar:[
{q:"Кто по Кодексу WADA отвечает за антидопинговую деятельность организации?",opts:["Только координатор","Только врач","Руководитель и координатор вместе","Только спортсмен"],a:2},
{q:"На основе каких документов составляется антидопинговая политика?",opts:["Только Кодекс WADA","Только закон Узбекистана","Кодекс WADA + закон РУз 2019 «О противодействии допингу»","Только национальные стандарты"],a:2},
{q:"Какой процент от общего бюджета организации рекомендуется на антидопинг?",opts:["1-3%","5-7%","10-15%","25-30%"],a:2},
{q:"В какой доле несертифицированных БАД найдены следы запрещённых веществ?",opts:["1-2%","5-10%","12-25%","Более 50%"],a:2},
{q:"Какие сертификаты обязательны для повара?",opts:["Только кулинария","Кулинария + гигиена","Кулинария + антидопинг + санитария-гигиена","Только антидопинг"],a:2},
{q:"Откуда может попасть кленбутерол?",opts:["Только через лекарства","Только через БАД","Через несертифицированное мясо","Только через инъекции"],a:2},
{q:"Что делается в первую очередь при приходе DCO?",opts:["Спрятать спортсмена","Проверить удостоверение DCO","Позвонить в страховую","Отказаться от теста"],a:1},
{q:"Сколько лет хранятся антидопинговые документы в архиве?",opts:["1 год","2 года","3 года","5 лет"],a:3},
{q:"Главное правило питания в поездках?",opts:["Можно покупать на местном рынке","Рестораны безопаснее всего","Везти свой запас еды и сертифицированные источники","Правил нет, можно всё"],a:2},
{q:"Как относятся к энергетикам в спортивных организациях?",opts:["Разрешены при малом кофеине","Запрещены только на соревнованиях","Полностью запрещены","Разрешены с разрешения врача"],a:2},
{q:"Какой статус имеет кофеин в Списке WADA 2026?",opts:["Всегда запрещён (S1)","Запрещён только на соревнованиях (S6)","Разрешён — наблюдается в Программе мониторинга WADA","Разрешён только по TUE"],a:2},
{q:"Как часто координатор обновляет квалификацию?",opts:["Раз в 5 лет","Раз в 3 года","Раз в 2 года","Не обязан"],a:2},
{q:"Почему опасно мясо с местного рынка на соревнованиях?",opts:["Дорого","Может содержать кленбутерол","Так принято","Никакой опасности"],a:1},
{q:"Как меняется санкция при «No Significant Fault»?",opts:["Полное оправдание","Наказание удваивается","Может быть снижено, но не отменено","Не меняется"],a:2},
{q:"Что определяет статья 20.3 Кодекса WADA?",opts:["Ответственность спортсмена","Ответственность руководителя организации/федерации","Процедуру TUE","Правила Whereabouts"],a:1},
{q:"За какой срок новый сотрудник должен пройти вводный антидопинговый курс?",opts:["За 6 месяцев","В любое время","За 30 дней","За 1 год"],a:2},
{q:"Во сколько раз затраты на допинг-случай могут превышать профилактику?",opts:["Одинаково","В 2 раза","В 5 раз","В 10-50 раз"],a:3},
{q:"На сколько сценариев готовится план экстренных действий?",opts:["1 (только AAF)","2 (AAF и отказ TUE)","3 (приход DCO, AAF, отказ TUE)","5"],a:2},
{q:"За какой срок до истечения TUE подаётся заявка на продление?",opts:["За 7 дней","За 30 дней","За 60 дней","За 3 месяца"],a:1},
{q:"Какие последствия допинг-случая для организации?",opts:["Наказывается только спортсмен","Штраф и потеря репутации","Штраф 10-100 тыс. USD + потеря репутации + отмена спонсоров","Никаких последствий"],a:2}
],
murabbiy:[
{q:"Что возлагает на тренера статья 21.2 Кодекса WADA?",opts:["Только план тренировок","Антидопинговое обучение и наставление спортсмена","Только высокие результаты","Никаких антидопинговых задач"],a:1},
{q:"Какое наказание грозит тренеру за рекомендацию запрещённого вещества?",opts:["Предупреждение","1 год отстранения","От 4 лет до пожизненного запрета (ADRV 2.8)","Никакого"],a:2},
{q:"В каком статусе тренер должен быть в ADAMS?",opts:["Регистрация не нужна","Как «Support Personnel»","Как «Athlete»","Как «Official»"],a:1},
{q:"Как часто тренер обновляет сертификат?",opts:["Ежегодно","Раз в 2 года","Раз в 5 лет","Не обязан"],a:1},
{q:"Суточная потребность спортсмена в белке?",opts:["0.5-0.8 г/кг","1.0-1.2 г/кг","1.6-2.2 г/кг","3.0-4.0 г/кг"],a:2},
{q:"Потребность в углеводах в день интенсивной тренировки?",opts:["1-2 г/кг","3-4 г/кг","6-10 г/кг","15-20 г/кг"],a:2},
{q:"Когда поднимать тему антидопинга с молодёжью?",opts:["Только перед соревнованием","Напоминать каждую неделю в начале тренировки","Один спецурок","Только если спросят"],a:1},
{q:"Первая задача тренера при приходе DCO?",opts:["Спорить с DCO","Сообщить спортсмену, быть рядом, вызвать координатора","Уберечь спортсмена от теста","Просить отложить тест"],a:1},
{q:"Какие знаки сертификации БАД надёжны?",opts:["Любая надпись «natural»","Только российские бренды","Informed Sport, NSF, Cologne List","Любые из аптеки"],a:2},
{q:"Когда и в какой срок подаётся ретроактивное TUE?",opts:["Только планово","Экстренный случай, 30 дней","Экстренный случай, 7 дней","Через месяц после соревнования"],a:2},
{q:"Что означает «периодизация»?",opts:["Только недельный план нагрузок","Естественная адаптация через циклы нагрузки и восстановления","Повышение нагрузки допингом","Отдых только в праздники"],a:1},
{q:"Чего тренер НЕ должен говорить спортсмену при приходе DCO?",opts:["Вызовите координатора","Проверьте удостоверение","Не сдавайте тест или отложите","Сохраняйте спокойствие"],a:2},
{q:"Почему энергетики опасны на тренировках?",opts:["Слишком дорогие","Скрытые стимуляторы и риск контаминации","Просто калорийные","Не опасны"],a:1},
{q:"Почему запрещено питание в местных ресторанах на соревнованиях?",opts:["Дорого","Невкусно","Риск контаминации и кленбутерола","Можно только на банкетах"],a:2},
{q:"Для чего используется биологический паспорт (ABP)?",opts:["Хранить историю спортсмена","Косвенно выявлять ЭПО и кровяной допинг","Вести учёт питания","Отслеживать Whereabouts"],a:1},
{q:"Где тренер может получить антидопинговый сертификат?",opts:["Только на sportedu.uz","Только на сайте WADA","Платформы ADEL или UzNADO","Только частные курсы"],a:2},
{q:"Какие напитки рекомендовать спортсмену в день соревнования?",opts:["Любую воду и напитки","Энергетики и изотоники","Только сертифицированную минеральную воду","Кофе и чай"],a:2},
{q:"Что проверяет тренер в удостоверении DCO?",opts:["Только имя","Официальный ID и документ о полномочиях","Только дату","Ничего"],a:1},
{q:"Что делает тренер, если незнакомец предлагает допинг?",opts:["Выслушает и подумает","Немедленно сообщит координатору и UzNADO","Решит сам","Скажет спортсмену и забудет"],a:1},
{q:"В каком году создана WADA?",opts:["1995","1999","2003","2008"],a:1}
],
metodist:[
{q:"Когда обновляется Запрещённый список WADA?",opts:["Ежеквартально","Каждые 6 месяцев","Каждый год 1 января","Раз в 2 года"],a:2},
{q:"За какой срок методист рассылает новый Запрещённый список сотрудникам?",opts:["За 1 месяц","За 15 дней","За 1 неделю","За 24 часа"],a:1},
{q:"Сколько основных глав в Кодексе WADA?",opts:["10","15","20","25"],a:3},
{q:"Какие данные управляются в системе ADAMS?",opts:["Только результаты тестов","Whereabouts, тесты, TUE и профиль спортсмена","Только заявки TUE","Только финансовые отчёты"],a:1},
{q:"За какой срок TUEC рассматривает заявку TUE?",opts:["3 дня","7 дней","21 день","60 дней"],a:2},
{q:"В какой срок подаётся ретроактивное TUE при экстренном случае?",opts:["24 часа","7 дней","30 дней","3 месяца"],a:1},
{q:"В какой срок после AAF можно запросить анализ B-пробы?",opts:["3 дня","10 дней","30 дней","60 дней"],a:1},
{q:"Когда должны обновляться данные Whereabouts?",opts:["В середине квартала","В начале квартала","До конца квартала","В любое время"],a:2},
{q:"Каким нарушением являются 3 пропущенных теста за 12 месяцев?",opts:["ADRV 2.1","ADRV 2.3","ADRV 2.4","ADRV 2.8"],a:2},
{q:"Как часто сдаётся отчёт в UzNADO?",opts:["Еженедельно","Ежемесячно","Ежеквартально","Ежегодно"],a:2},
{q:"Что регулирует стандарт ISE 3.0?",opts:["Планирование тестов","Аккредитацию лабораторий","Стандарт антидопингового образования","Процедуру TUE"],a:2},
{q:"К чему относится стандарт ISL WADA?",opts:["Планирование тестов","Аккредитация лабораторий","Стандарты образования","Система Whereabouts"],a:1},
{q:"В какой срок можно подать апелляцию при отказе TUE?",opts:["7 дней","14 дней","21 день","60 дней"],a:2},
{q:"Минимальный процент правильных ответов для подтверждения освоения модуля?",opts:["60%","70%","75%","90%"],a:2},
{q:"Что такое ADKT-25?",opts:["Список лекарств","Тест антидопинговых знаний (25 вопросов)","Код системы ADAMS","Код запрещённого списка"],a:1},
{q:"Что такое DMS-12?",opts:["Система классификации лекарств","Динамическая шкала мотивации (12 вопросов)","Код стандарта WADA","Протокол теста"],a:1},
{q:"Что означает «RTP» в ADAMS?",opts:["Платформа результатов","Зарегистрированный пул тестирования (Registered Testing Pool)","Система протоколов WADA","Платформа запрещённого списка"],a:1},
{q:"Где методист может повышать квалификацию?",opts:["Только sportedu.uz","Только сайт WADA","ADEL или talim-uznada.uz","Только частные курсы"],a:2},
{q:"Сколько лет хранится антидопинговый архив организации?",opts:["1 год","2 года","3 года","5 лет"],a:3},
{q:"Что регулирует статья 2.4 Кодекса WADA?",opts:["Запрещённое вещество (AAF)","Отказ (Refusal)","Whereabouts failure","Генный допинг"],a:2}
],
sportchi:[
{q:"Что означает принцип «Strict Liability» для спортсмена?",opts:["Отвечает только за умышленный приём","Отвечает только на соревнованиях","Лично отвечает за любое запрещённое вещество в организме","Не отвечает при назначении врача"],a:2},
{q:"Какие данные спортсмен RTP ежедневно вносит в ADAMS?",opts:["Расписание на 24 часа","60-минутное окно и точное место","Только место тренировки","Только адрес проживания"],a:1},
{q:"Сколько пропущенных тестов за 12 месяцев = ADRV?",opts:["1","2","3","5"],a:2},
{q:"За какой срок до соревнования подаётся заявка TUE?",opts:["За 7 дней","За 14 дней","За 30 дней","За 60 дней"],a:2},
{q:"Что спортсмен делает в первую очередь при приходе DCO?",opts:["Отказывается","Проверяет удостоверение и ID офицера","Убегает","Говорит «подумаю»"],a:1},
{q:"К чему приводит отказ от сдачи пробы?",opts:["Предупреждение","6 месяцев","2 года","Дисквалификация до 4 лет (ADRV 2.3)"],a:3},
{q:"Почему не рекомендуется употреблять БАД?",opts:["Дорого","Состав не контролируется, риск контаминации","Трудно получить разрешение врача","Все БАД запрещены"],a:1},
{q:"Какие сертификаты БАД признаются надёжными?",opts:["Российские бренды","Informed Sport, NSF, Cologne List","Любая надпись «Natural»","Аптечные бренды"],a:1},
{q:"Когда лекарство вне запрещённого списка может быть опасным?",opts:["Никогда","Если в несертифицированном БАД скрыто запрещённое вещество","Только при больших дозах","При приёме без разрешения врача"],a:1},
{q:"Каков статус кофеина в WADA?",opts:["Полностью запрещён","Запрещён на соревнованиях (S6)","Разрешён — в Программе мониторинга WADA (порог отменён)","Запрещён только в инъекциях"],a:2},
{q:"Почему энергетики запрещены спортсменам?",opts:["Много сахара","Скрытые стимуляторы и риск контаминации","Дорого","Слишком сильный вкус"],a:1},
{q:"Какое запрещённое вещество может попасть через мясо?",opts:["Тестостерон","Кленбутерол","ЭПО","Амфетамин"],a:1},
{q:"Где проверить, есть ли вещество в запрещённом списке?",opts:["google.com","talim-uznada.uz","wada-ama.org/en/prohibited-list","sportedu.uz"],a:2},
{q:"Безопасно ли принимать лекарство по рецепту врача?",opts:["Да, рецепт всегда защищает","Нет — нужно проверить действующее вещество в Запрещённом списке","Да, если выписал местный врач","Разрешено только вне соревнований"],a:1},
{q:"Что спортсмен получает на платформе ADEL?",opts:["Только информацию","Бесплатное онлайн-обучение и сертификат","Только платные курсы","Результаты тестов"],a:1},
{q:"В какой форме разрешён дексаметазон?",opts:["Перорально (таблетки)","Внутривенно","Внутрисуставная инъекция","Во всех формах"],a:2},
{q:"Что будет при приёме запрещённого вещества без TUE?",opts:["Сначала предупреждение","Считается AAF или ADRV","Проверяют только на соревнованиях","Ничего"],a:1},
{q:"Когда отмечается «Play True Day»?",opts:["Ежегодно в январе","Ежегодно в апреле (в день, объявленный WADA)","Ежегодно в мае","Ежегодно в октябре"],a:1},
{q:"Безопасно ли масло CBD (каннабидиол)?",opts:["Да, полностью","Нет, запрещено WADA","Качественный CBD без THC допустим, но во многих продуктах есть следы THC","Разрешено только вне соревнований"],a:2},
{q:"К чему приводят 3 нарушения Whereabouts?",opts:["Предупреждение","6 месяцев дисквалификации","До 2 лет дисквалификации","До 10 лет дисквалификации"],a:2}
]};
