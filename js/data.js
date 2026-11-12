// Doping.uz — Antidoping Ta'lim Portali Data & i18n Dictionaries

const wadaData=[
{cat:"S1",name:"Testosteron va anabolik steroidlar",ex:"Testosteron, Nandrolon, Stanozolol, Metandienon, Boldenon, Trenbolon, Oksandrolon, Turinabol",eff:"Oqsil sintezi oşiriş, muşak ösişi, kuç va bardoşlilik",risk:"Oliy"},
{cat:"S1",name:"SARM (Selektiv androgen reseptor modulyatori)",ex:"Ostarine (MK-2866), Ligandrol (LGD-4033), Andarine (S-4), Cardarine (GW501516)",eff:"Anabolik — BAD tarkibida yaşirin holda topiladi",risk:"Oliy"},
{cat:"S1",name:"Klenbuterol",ex:"Klenbuterol HCl — göşt orqali kirişi mumkin!",eff:"Anabolik + yoğ yoqiş. Mahalliy sertifikatsiz göşt xavfi katta",risk:"Oliy"},
{cat:"S2",name:"Eritropoetin (EPO) va qon gormonlari",ex:"EPO, Darbepoetin alfa, CERA, Hematid",eff:"Qon kislorod taşiş qobiliyatini oşiriş — çidamlilik uçun",risk:"Oliy"},
{cat:"S2",name:"Ösiş gormoni va insulinsimon omillar",ex:"Somatropin (hGH), IGF-1, MGF, Mecasermin",eff:"Muşak ösişi, tiklaniş tezlaştiriş, yoğ kuyiş",risk:"Oliy"},
{cat:"S2",name:"Insulin va insulin mimetics",ex:"Insulin (barça turlari) — faqat diabetiklarda TUE bilan",eff:"Oqsil sintezi oşiriş, glikogen töldiriş — xavfli",risk:"Oliy"},
{cat:"S3",name:"Beta-2 agonistlar (yuqori doza)",ex:"Salbutamol (>1600 mkg/kun), Salmeterol (>200 mkg/kun), Formoterol (>54 mkg/kun)",eff:"Bronxlarni kengaytiradi — inhaler TUE bilan ruxsat etilişi mumkin",risk:"Örta"},
{cat:"S4",name:"Gormon antagonistlari va modulyatorlar",ex:"Tamoksifen, Klomifen, Anastrozol, Letrozol, Fulvestrant",eff:"Estrogen kamaytiradi — testosteron effektini oşiriş uçun işlatiladi (maskirovka)",risk:"Oliy"},
{cat:"S5",name:"Diuretiklar va maskirovka vositalari",ex:"Furosemid, Gidroxlorotiazid, Spironolakton, Triamteren, Probenetsid, Epitestosteron",eff:"Siydik miqdorini oşiriş — taqiqlangan moddalarni suyultiriş uçun işlatiladi",risk:"Oliy"},
{cat:"S6",name:"Amfetamin va derivatlari",ex:"Amfetamin, Dekstroamfetamin, Metilfenidat, DMAA, Dimetilbutilamin",eff:"CNS stimulyatsiya, çarçoqni kamaytiriş, agressivlik oşiriş",risk:"Oliy"},
{cat:"S6",name:"Efedrin va psevdoefedrin",ex:"Efedrin (>10 mkg/ml), Psevdoefedrin (>150 mkg/ml) — sovuq va gripp dorilarda!",eff:"Stimulyator. Sovuqqa qarşi dorilarda yaşirin holda böladi — EHTIYOT",risk:"Oliy"},
{cat:"Monitoring",name:"Kofein (monitoring dasturi)",ex:"Kofe, çoy, kakao — WADA Monitoring dasturida kuzatiladi (taqiqlanmagan, siydik çegarasi 2004-yilda bekor qilingan)",eff:"CNS stimulyatsiya — me’yorida ruxsat etilgan; energetik içimliklarda yaşirin moddalar xavfi bor",risk:"Past"},
{cat:"S7",name:"Narkotik analgetiklar",ex:"Morfin, Metadon, Oksikodon, Hidromorfon, Buprenorfin, Kodein (yuqori dozada)",eff:"Oğriqni bartaraf etiş, ruhiy holat özgartiriş",risk:"Oliy"},
{cat:"S8",name:"Kannabinoidlar",ex:"THC, Marixuana (Cannabis), Gashish, Sintetik kannabinoidlar — CBD ruxsat etilgan (THCsiz)",eff:"Psixoaktiv, oğriq qoldiriş — siydikda 150 ng/ml dan yuqori taqiqlangan",risk:"Oliy"},
{cat:"S9",name:"Glyukokortikoidlar (sistemli)",ex:"Deksametazon (oral/IV/IM), Prednizolon (oral), Metilprednizolon (IV) — intra-artikulyar ruxsat!",eff:"Yalliğlanişni bartaraf etiş — sistemli yöl taqiqlangan, lokal ruxsat",risk:"Örta"},
{cat:"M1",name:"Qon va oksigen manipulyatsiyasi",ex:"Avtogemotransfuziya (öz qoni), allogenik qon quyiş, sun’iy O2 taşuvçilar (HBOC)",eff:"Qon kislorod siğimini sun’iy oşiriş — EPO muqobili",risk:"Oliy"},
{cat:"M2",name:"Kimyoviy va fizikaviy manipulyatsiya",ex:"Modda qöşiş, namuna almaştiriş, kateter, diuretik yordamida suyultiriş, donorlik",eff:"Test natijasini soxtalaştiriş",risk:"Oliy"},
{cat:"M3",name:"Gen va hujayralar dopingi",ex:"EPO geni, IGF-1 geni, miostatin blokeri, CRISPR asosida manipulyatsiya",eff:"Genetik darajada qobiliyatni özgartiriş — hali töliq aniqlanmaydi",risk:"Oliy"}
];


const drugDB = [
  // S1: Anaboliklar
  {name:"Testosteron", alias:["testosterone","androgel","omnadren","sustanon","тестостерон","сустанон"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yöq", risk:"Oliy (4 yil diskvalifikatsiya)", note:"Erkaklar jinsiy gormoni. Muşak massasi va kuçni sun’iy oşiriş uçun qöllaniladi. WADA tomonidan 100% taqiqlangan. TUE berilmaydi.", alt:"Tabiiy oqsil balansi, töğri tiklaniş va uyqu (22:00-06:00)."},
  {name:"Nandrolon", alias:["nandrolone","deca","deca-durabolin","retabolil","ретаболил","нандролон"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yöq", risk:"Oliy (4 yil)", note:"Klassik anabolik steroid. Organizmda metabolitlari (19-norandrosteron) 18 oygaça aniqlanadi. Qat’iyan taqiqlangan.", alt:"Tabiiy Kreatin monogidrat (WADA ruxsat etgan)."},
  {name:"Stanozolol", alias:["stanozolol","winstrol","stromba","stanazolol","станозолол","винстрол"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yöq", risk:"Oliy (4 yil)", note:"Kuçli anabolik modda. Jigarga öta toksik ta’sir qiladi, böğimlarni quritadi va jarohat xavfini oşiradi. Taqiqlangan.", alt:"Oqsil izolyati, kollagen va xondroitin/glyukozamin."},
  {name:"Metandienon", alias:["methandienone","dianabol","metan","метандростенолон","дианабол","метан"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yöq", risk:"Oliy (4 yil)", note:"Maşhur 'metan' tabletkalari. Jigar fermentlarini keskin oşiradi, jigar adenomasiga sabab böladi. Mutlaq taqiqlangan.", alt:"Tabiiy aminokislotalar (EAA), sifatli ovqatlaniş."},
  {name:"Oksandrolon", alias:["oxandrolone","anavar","oxandrin","оксандролон","анавар"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik steroid", tue:"Yöq", risk:"Oliy (4 yil)", note:"Oral anabolik steroid. Gormonal fonni izdan çiqaradi, bepuştlikka sabab böladi. Har doim taqiqlangan.", alt:"Zardob oqsili (Whey), vitamin-mineral komplekslar."},
  {name:"Klenbuterol", alias:["clenbuterol","clen","klen","кленбутерол","клен"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 Anabolik moddalar", tue:"Yöq", risk:"Oliy (4 yil)", note:"Anabolik va kuçli yoğ yoqiş ta’siriga ega. Yurak gipertrofiyasi va infarkt xavfini keskin oşiradi. Göşt orqali tuşişi mumkin (ehtiyot böling!).", alt:"Kardio maşğulotlar, töğri kaloriya defitsiti, L-karnitin."},
  {name:"Ostarin (SARM)", alias:["ostarine","mk-2866","enobosarm","sarm","остарин","сарм"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S1 SARM moddalari", tue:"Yöq", risk:"Oliy (4 yil)", note:"Selektiv androgen reseptor modulyatori. BAD va sport qöşimçalarida yaşirin tarzda eng köp uçraydi. Sertifikatsiz BAD içmang!", alt:"Informed-Sport yoki NSF sertifikatiga ega toza protein va kreatin."},
// S2: Peptidlar va EPO
  {name:"Eritropoetin (EPO)", alias:["epo","erythropoietin","eritropoetin","eprex","эпо","эритропоэтин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S2 Peptid gormonlar", tue:"Yöq", risk:"Oliy (4 yildan umrbod)", note:"Qon kislorod taşiş hajmini oşiradi. Qonni öta quyuqlaştiradi, tromboz, insult va tösatdan ölimga olib keladi. Qat’iyan man etilgan.", alt:"Baland toğ maşğulotlari (gipoksiya effekti), B12 vitamini, Ferritin nazorati."},
  {name:"Somatropin (hGH)", alias:["somatropin","hgh","growth hormone","jintropin","соматропин","гормон роста"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S2 Ösiş omillari", tue:"Faqat oğir gipofiz patologiyasida TUE", risk:"Oliy (4 yil)", note:"Inson ösiş gormoni. Akromegaliya, suyaklar deformatsiyasi, içki a’zolar kattalaşişi va diabet keltirib çiqaradi. Taqiqlangan.", alt:"Çuqur uyqu fazasi (somatotrop gormon tabiiy ajralişi), arginin va ornitin."},
  {name:"Insulin", alias:["insulin","insulina","aktrapid","humalog","инсулин"], status:"TUE kerak (faqat diabetiklar)", cls:"dr-tue", cat:"S2 Peptidlar", tue:"HA — 1 yoki 2-tur diabet uçun TUE şart", risk:"Diabetiksiz sportçiga Oliy (4 yil)", note:"Diabeti bölmagan sportçi qabul qilişi — öta xavfli gipoglikemik koma va ölimga sabab böladi. Sportda qat’iy taqiqlangan.", alt:"Uglevodlar va oqsillarning tabiiy glikemik balansi."},
// S4: Gormon va metabolik modulyatorlar
  {name:"Meldoniy (Mildronat)", alias:["meldoniy","meldonium","mildronat","mildronate","милдронат","мельдоний","мельдония","meldoni"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S4 Gormon va metabolizm modulyatori", tue:"Yöq (Sportda ruxsat berilmaydi)", risk:"Oliy (2-4 yil)", note:"2016-yildan buyon WADA Prohibited List (S4.4) da. Karnitin biosintezini bloklaydi. Organizmda bir neça oylab saqlanadi. TUE deyarli berilmaydi.", alt:"L-Karnitin (ruxsat etilgan), Koenzim Q10, Magne B6, Asparkam."},
  {name:"Trimetazidin", alias:["trimetazidine","preductal","preduktal","триметазидин","предуктал"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S4 Metabolik modulyator", tue:"Yöq", risk:"Oliy (4 yil)", note:"Yurak energetikasini özgartiruvçi modda (Kamila Valieva işi). WADA S4 röyxatida har doim taqiqlangan.", alt:"Riboksin (Inozin - ruxsat etilgan), kaliy va magniy preparatlari."},
  {name:"Klomifen", alias:["clomiphene","clomid","klomed","кломифен","кломид"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S4 Anti-estrogen", tue:"Yöq", risk:"Oliy (4 yil)", note:"Steroid kursidan keyin gormonlarni tiklaş uçun işlatiladi. WADA tomonidan maskirovka vositasi sifatida taqiqlangan.", alt:"Ruxsat etilgan tabiiy vitamin D3, rux (sink)."},
  {name:"Tamoksifen", alias:["tamoxifen","nolvadex","novaldex","тамоксифен","нольвадекс"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S4 Anti-estrogen", tue:"Faqat onkologiyada TUE", risk:"Oliy (4 yil)", note:"Estrogen blokatori. Erkaklarda ginekomastiyani oldini olişda noqonuniy işlatiladi. Taqiqlangan.", alt:"Jigar va gormonlar tabiiy detoksikatsiyasi."},
// S5: Diuretiklar (Furosemid)
  {name:"Furosemid", alias:["furosemid","furosemit","lasix","lazix","фуросемид","фуросемит","лазикс","lasiks","furasemid","furosimid"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S5 Diuretik (Siydik haydovçi)", tue:"Yöq (Sportda TUE berilmaydi)", risk:"Oliy (4 yilgaça diskvalifikatsiya)", note:"Kuçli halqali diuretik. Vaznni tez haydaş va siydikdan boşqa dopinglarni yuvib taşlaş (maskirovka) uçun işlatiladi. WADA qoidasi böyiça har doim taqiqlangan!", alt:"Na’matak damlamasi, tarvuz, brusnika, suv va tuz balansini tabiiy boşqariş."},
  {name:"Torasemid", alias:["torasemide","diuver","trigrim","торасемид","диувер"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S5 Diuretik", tue:"Yöq", risk:"Oliy (4 yil)", note:"Furosemiddan kuçliroq diuretik. Taqiqlangan maskirovka vositasi.", alt:"Tabiiy suyuqlik balansi."},
  {name:"Spironolakton", alias:["spironolactone","veroshpiron","спиронолактон","верошпирон"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S5 Diuretik", tue:"Yöq", risk:"Oliy (4 yil)", note:"Kaliy tejovçi diuretik bölsa-da, S5 toifasida mutlaq taqiqlangan.", alt:"Magne B6, qora smorodina damlamasi."},
  {name:"Gidroxlorotiazid", alias:["hydrochlorothiazide","hypothiazid","гипотиазид","гидрохлортиазид"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S5 Diuretik", tue:"Yöq", risk:"Oliy (4 yil)", note:"Kombinatsiyalangan qon bosimi dorilari tarkibida köp uçraydi! Ehtiyot böling.", alt:"Şifokor nazoratida ruxsat etilgan kardiologik dorilar."},
// S6: Stimulyatorlar
  {name:"Kokain", alias:["cocaine","coke","кокаин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S6 Narkotik stimulyator", tue:"Yöq", risk:"Oliy + jinoiy javobgarlik", note:"Markaziy asab tizimini falajlovçi kuçli giyohvandlik moddasi. WADA tomonidan qat’iy taqiqlangan.", alt:"Faqat soğlom sport rejimi."},
  {name:"Amfetamin", alias:["amphetamine","speed","амфетамин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S6 Kuçli stimulyator", tue:"Yöq", risk:"Oliy (4 yil)", note:"Çarçoq hissini sun’iy öldiradi. Yurak xurujiga olib keladi. Taqiqlangan.", alt:"Kreatin, tabiiy B guruhi vitaminlari."},
  {name:"Sibutramin", alias:["sibutramine","reduksin","сибутрамин","редуксин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S6 Stimulyator", tue:"Yöq", risk:"Oliy (4 yil)", note:"Ozdiruvçi kapsulalar va 'çoy’lar tarkibida yaşirin tarzda eng köp topiladigan xavfli modda!", alt:"Tabiiy töğri ovqatlaniş ratsioni."},
  {name:"DMAA (Geranamin)", alias:["dmaa","geranamine","metilgeksanamin","геранамин"], status:"Har doim taqiqlangan", cls:"dr-prohibited", cat:"S6 Stimulyator", tue:"Yöq", risk:"Oliy (4 yil)", note:"Predtren (Pre-workout) qöşimçalarida köp uçraydi. Qon bosimini xavfli darajaga kötaradi.", alt:"Sitrat magniy, kofein (me’yorda), izotonik."},
  {name:"Psevdoefedrin", alias:["pseudoephedrine","sudafed","taylol hot","grippxot","псевдоэфедрин","тайлол хот","гриппхот"], status:"Musobaqada taqiqlangan (>150 mkg/ml)", cls:"dr-caution", cat:"S6 Stimulyator", tue:"Yöq", risk:"Yuqori", note:"Sovuqqa qarşi 'çoy' va tabletkalarda böladi. Musobaqadan 24 soat oldin töxtatiş şart!", alt:"Paratsetamol, C vitamini, limonli iliq suv."},
  {name:"Kofein", alias:["caffeine","coffein","kofein","кофеин","coffee","qahva","кофе"], status:"Monitoring dasturida (Ruxsat etilgan)", cls:"dr-monitoring", cat:"WADA Monitoring dasturi", tue:"Yöq", risk:"Past (me’yorida xavfsiz)", note:"Kofein WADA Taqiqlangan röyxatida emas (2004-yildan beri siydikdagi çegara me’yori bekor qilingan), faqat Monitoring dasturida kuzatiladi. Oddiy qahva va çoy xavfsiz; energetik içimliklar esa yaşirin stimulyator xavfi tufayli tavsiya etilmaydi.", alt:"Yaşil çoy, tabiiy donli qahva."},
// S3: Beta-2 Agonistlar
  {name:"Salbutamol", alias:["salbutamol","ventolin","sultanol","сальбутамол","вентолин"], status:"Ingalyatsiya dozasi böyiça ruxsat", cls:"dr-tue", cat:"S3 Beta-2 Agonist", tue:"≤1600 mkg/24 soat bölsa TUE şart emas; oşsa TUE lozim", risk:"Örta", note:"Astmada inhaler orqali kuniga maksimal 1600 mkg gaça ruxsat etilgan. Inyeksiya yoki tabletka şakli esa BUTUNLAY TAQIQLANGAN!", alt:"Inhalatsiya böyiça şifokor dozasi."},
// S7: Narkotiklar
  {name:"Tramadol", alias:["tramadol","tramal","трамадол","трамал"], status:"2024-yildan MUSOBAQADA TAQIQLANGAN", cls:"dr-prohibited", cat:"S7 Narkotik analgetik", tue:"Tibbiy zaruratda TUE şart", risk:"Yuqori (2-4 yil)", note:"2024-yil 1-yanvardan kuçli oğriq qoldiruvçi Tramadol musobaqa davrida qat’iy taqiqlandi!", alt:"Paratsetamol, Ibuprofen, Ketorolak (lokal)."},
// S9: Glyukokortikoidlar
  {name:"Deksametazon", alias:["dexamethasone","deksametazon","dexazon","дексаметазон","дексазон","deksamitazon"], status:"Musobaqada inyeksiya/oral TAQIQLANGAN", cls:"dr-prohibited", cat:"S9 Glyukokortikoid", tue:"Tibbiy körsatmada TUE şart", risk:"Yuqori", note:"Oral (tabletka) va IV/IM inyeksiya musobaqa davrida taqiqlangan. Lekin böğin içiga lokal yuboriş va malhamlar ruxsat etiladi.", alt:"NSAID (Ibuprofen, Diklofenak)."},
// Ruxsat etilganlar
  {name:"Paratsetamol", alias:["paracetamol","acetaminophen","tylenol","panadol","efferalgan","парацетамол","панадол","paratsetamol","parasetamol"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"Analgetik-antipiretik", tue:"Yöq", risk:"Xavfsiz (Kuniga max 3-4g)", note:"Isitma va oğriqda sportçilar uçun eng xavfsiz dori. Musobaqa davrida ham ruxsat etilgan.", alt:"Ibuprofen."},
  {name:"Ibuprofen", alias:["ibuprofen","nurofen","ibufen","advil","ибупрофен","нурофен"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"NSAID (Yalliğlanişga qarşi)", tue:"Yöq", risk:"Xavfsiz", note:"Böğim va muşak oğriqlarida ruxsat etilgan. Oşqozonni asraş uçun ovqatdan söng içiladi.", alt:"Paratsetamol."},
  {name:"Aspirin", alias:["aspirin","acetylsalicylic","atsitilsalitsil","аспирин"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"NSAID / Antiagregant", tue:"Yöq", risk:"Xavfsiz", note:"Musobaqa va maşğulot davrida töliq ruxsat etilgan.", alt:"Paratsetamol."},
  {name:"Kreatin Monogidrat", alias:["creatine","creapure","kreatin","креатин"], status:"✅ RUXSAT ETILGAN (100% Halol)", cls:"dr-allowed", cat:"Sport qöşimçasi", tue:"Yöq", risk:"Xavfsiz", note:"Eng köp ilmiy isbotlangan sport qöşimçasi. Portlovçi kuç va ATF tiklanişini ta’minlaydi. Informed-Sport sertifikatli brendlarni tanlang.", alt:"Göşt, baliq."},
  {name:"Zardob Oqsili (Whey Protein)", alias:["protein","whey","izolyat","протеин","изолят"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"Sport ozuqasi", tue:"Yöq", risk:"Xavfsiz (Sertifikat bilan)", note:"Muşaklarni tiklaş uçun oqsil. Faqat tekşirilgan xalqaro sertifikatli brendlar (Optimum Nutrition, MyProtein va h.k.) tavsiya etiladi.", alt:"Tuxum, mol göşti, tvorog."},
  {name:"L-Karnitin", alias:["l-carnitine","carnitine","karnitin","карнитин","элькарнитин"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"Metabolik vosita", tue:"Yöq", risk:"Xavfsiz", note:"Meldoniy örniga eng toza, qonuniy va xavfsiz tabiiy energiya manbai!", alt:"Mol göşti, sut mahsulotlari."},
  {name:"Omega-3", alias:["omega-3","fiş oil","baliq yogi","омега-3","рыбий жир"], status:"✅ RUXSAT ETILGAN", cls:"dr-allowed", cat:"Foydali yoğ kislotalari", tue:"Yöq", risk:"Xavfsiz", note:"Yurak, qon tomirlar va böğimlar uçun töliq ruxsat etilgan.", alt:"Yoğli baliq, ziğir yoği."}
];


const glossData=[
{term:"AAF",en:"Adverse Analytical Finding",def:"Doping-kontrol namunasida taqiqlangan modda yoki uning metaboliti aniqlanişi. ADRV boşlaş uçun asos. Sportçi 10 kun içida B-namuna söraş huquqiga ega."},
{term:"ABP",en:"Athlete Biological Passport",def:"Sportçi qon körsatkiçlarini vaqt ötişi bilan kuzatiş orqali EPO va qon dopingini bilvosita aniqlaş tizimi. Moddaning özi izlanmaydi — biologik özgarişlar kuzatiladi."},
{term:"ADAMS",en:"Anti-Doping Admin & Management System",def:"WADA tomonidan yaratilgan global onlayn boşqaruv tizimi. Whereabouts kiritiş, test natijalari, TUE arizalari, sportçi profili va sertifikatlar boşqariladi."},
{term:"ADEL",en:"Anti-Doping Education & Learning",def:"WADA ning bepul onlayn ta’lim platformasi. 20+ til, 50+ kurs. RTP sportçilari uçun asosiy kurs majburiy. adel.wada-ama.org"},
{term:"ADRV",en:"Anti-Doping Rule Violation",def:"Antidoping qoidasini buziş. WADA Kodeksida 11 turi bor: taqiqlangan modda (2.1), usul (2.2), namuna berişdan boş tortiş (2.3), Whereabouts buzilişi (2.4), nazoratga tösqinlik (2.5), taqiqlangan modda saqlaş (2.6), noqonuniy muomala (2.7), beriş yoki uriniş (2.8), şerikçilik (2.9), taqiqlangan şaxs bilan hamkorlik (2.10), xabar beruvçiga bosim/ta’qib (2.11)."},
{term:"ATF",en:"Atypical Finding",def:"Şubhali modda — laboratoriya tomonidan töliq tasdiqlanmagan, lekin tekşiruv davom etadigan natija. 10 kun içida yakuniy qaror. AAF ga aylanişi yoki yöq qilinişi mumkin."},
{term:"CAS",en:"Court of Arbitration for Sport",def:"Sport nizomlarini körib çiqadigan xalqaro arbitraj sudi. Lausanneda (Şveysariya). TUE rad, jazo muddati, oqlaniş böyiça apellyatsiya instansiyasi."},
{term:"DCO",en:"Doping Control Officer",def:"Doping-kontrolni ötkazadigan rasmiy şaxs. Vakolatnoma va ID körsatadi, sportçini tuşuntiradi, namuna oladi, hujjatlaştiradi. DCO ga qarşi turiş = ADRV 2.3."},
{term:"EPO",en:"Erythropoietin",def:"Qon qizil jismçalarini işlab çiqarişni oşiradigan gormon. Doping sifatida işlatilsa — kislorod taşişni oşiradi. Tromboz, insult, tösatdan ölim xavfi. S2 kategoriya."},
{term:"Filing Failure",en:"Filing Failure",def:"Whereabouts ma’lumotlarini çorak oxirigaça töliq kiritmaslik. 12 oyda 3 ta (missed test bilan birgalikda) = 2 yilgaça diskvalifikatsiya."},
{term:"hGH",en:"Human Growth Hormone",def:"Inson ösiş gormoni. Muşak ösişi, tiklaniş tezlaştiriş, yoğ kuyişda işlatiladi. S2 kategoriya — butunlay taqiqlangan."},
{term:"ISE",en:"International Standard for Education",def:"Antidoping ta’lim uçun WADA xalqaro standarti (2021 yangilanma — ISE 3.0). 5 komponent: maqsad guruhlar, mazmun, format, baholaş, sertifikatlaş."},
{term:"ISTI",en:"International Standard for Testing",def:"Doping-nazorat rejalaştiriş va amalga oşiriş uçun xalqaro standart. Kim, qaçon, qayerda va qanday test ötkazişni belgilaydi."},
{term:"ISL",en:"International Standard for Laboratories",def:"WADA akkreditatsiya laboratoriyalari uçun standart. Sifat boşqaruvi, metodologiya, konfidensialllik. Hozirda ~34 akkreditatsiyalangan laboratoriya."},
{term:"Missed Test",en:"Missed Test",def:"DCO körsatilgan joyda sportçi bölmasligi. 14 kun içida dalil bilan javob beriş kerak. 12 oyda 3 ta = 2 yil."},
{term:"No Fault",en:"No Fault or Negligence",def:"Sportçi uçun töliq oqlaniş — faqat sabotaj yoki uçinçi şaxs hiylasi isbotlanganda. Juda kamdan-kam qöllaniladi."},
{term:"No Significant Fault",en:"No Significant Fault",def:"ADRVda jazo kamaytiriş uçun dalil. Sportçi özini töğri tutgan, lekin taşqi omil sababli qoidabuzarlik yuzaga kelgan — masalan, sertifikatlangan mahsulot kontaminatsiyasi."},
{term:"Play True",en:"Play True",def:"WADA toza sport kampaniyasi. Har yili aprel oyida WADA e’lon qiladigan kunda — Play True Day (#PlayTrue). Doping oldini oliş, halollik va hurmatni tarğib qiluvçi global harakat."},
{term:"Prohibited List",en:"Prohibited List",def:"WADA tomonidan har yil 1-yanvar yangilanadigan taqiqlangan moddalar va usullar röyxati. S1-S9 (moddalar), M1-M3 (usullar), P (maxsus sport) kategoriyalarga bölinadi."},
{term:"RTP",en:"Registered Testing Pool",def:"Whereabouts kiritişi majburiy bölgan sportçilar röyxati. WADA, xalqaro federatsiyalar va milliy antidoping agentliklari tomonidan tuziladi. Özbekistonda ~200+ sportçi."},
{term:"Safe Harbor",en:"Safe Harbor (Whistleblower)",def:"WADA whistleblower himoya siyosati — ma’lumot beruvçiga noma’lumlik, huquqiy va moliyaviy himoya. Anonim murojaat: intel@wada-ama.org"},
{term:"SARM",en:"Selective Androgen Receptor Modulator",def:"Anabolik ta’sir körsatuvçi, lekin klassik steroid emas bölgan modda guruhi. BAD tarkibida yaşirin holda topiladi. S1 — butunlay taqiqlangan."},
{term:"Strict Liability",en:"Strict Liability",def:"WADA Kodeksining asosiy prinsipi: sportçi organizmidagi har qanday taqiqlangan modda uçun şaxsan javobgar. 'Bilmadim', 'şifokor berdi', 'sabotaj böldi' — oqlaniş uçun yetarli emas."},
{term:"TDP",en:"Test Distribution Plan",def:"Doping nazorat rejasi — kim, qaçon, qayerda test ötkazilişi belgilanadi. WADA, IF va milliy agentliklar tomonidan yillik tasdiqlanadi."},
{term:"TUE",en:"Therapeutic Use Exemption",def:"Taqiqlangan moddani tibbiy körsatma böyiça qonuniy qabul qiliş ruxsatnomasi. Astma (salbutamol), diabet (insulin) uçun. Musobaqadan 30 kun oldin ariza, 21 kun içida qaror."},
{term:"TUEC",en:"TUE Committee",def:"TUE arizalarini körib çiqadigan, 3 nafar mustaqil şifokordan iborat qömita. Tasdiqlaş, rad etiş yoki qöşimça ma’lumot söraş huquqi bor."},
{term:"USADA",en:"US Anti-Doping Agency",def:"AQŞ Milliy Antidoping Agentligi. Lance Armstrong ni 2012-yilda umrbod diskvalifitsiya qilgan va 7 Tour de France ğalasini bekor qildirgan agentlik."},
{term:"WADA",en:"World Anti-Doping Agency",def:"Jahon Antidoping Agentligi. 1999-yil taşkil etilgan. Boş qarorgoh — Monreal (Kanada). Kodeks, Prohibited List, standartlar, ADEL, laboratoriya akkreditatsiyasi — barçasi WADA tomonidan."},
{term:"Whereabouts",en:"Whereabouts Information",def:"RTP sportçisi tomonidan ADAMS ga kiritiladigan kunlik 60 daqiqalik aniq vaqt va joy. DCO şu vaqtda kutilmagan test ötkazişi mumkin."},
{term:"Whereabouts Failure",en:"Whereabouts Failure",def:"Missed test yoki filing failure. 12 oyda 3 ta = ADRV 2.4 = 2 yilgaça diskvalifikatsiya. ADAMSni kundalik tekşiriş — eng oson himoya."},
{term:"UzNADO",en:"Uzbekistan National Anti-Doping Organization",def:"Özbekiston Milliy Antidoping Taşkiloti. 2005-yil taşkil etilgan. Rasmiy ta’lim platformasi: talim-uznada.uz. Yilik 25,000+ test ötkazadi."},
];

const quizData = {
rahbar:[
{q:"WADA Kodeks böyiça taşkilot antidoping faoliyati uçun kim javobgar?",opts:["Faqat koordinator","Faqat şifokor","Rahbar va koordinator birgalikda","Faqat sportçi"],a:2},
{q:"Antidoping siyosati qaysi hujjatlar asosida tuziladi?",opts:["Faqat WADA Kodeks","Faqat Özbekiston qonuni","WADA Kodeks + ÖzRQ 2019 'Antidopingga qarşi' qonun","Faqat milliy standartlar"],a:2},
{q:"Antidoping byudjeti taşkilot umumiy byudjetining neça foizi bölişi tavsiya etiladi?",opts:["1-3%","5-7%","10-15%","25-30%"],a:2},
{q:"Sertifikatsiz BADlarda taqiqlangan modda izlari qança nisbatda topilgan?",opts:["1-2%","5-10%","12-25%","50% dan ortiq"],a:2},
{q:"Oşpaz sertifikati qanday bölimlarda bölişi şart?",opts:["Faqat pazandaçilik","Pazandaçilik + gigiena","Pazandaçilik + antidoping + sanitariya-gigiena","Faqat antidoping"],a:2},
{q:"Klenbuterol qayerdan tuşişi mumkin?",opts:["Faqat dori orqali","Faqat BAD orqali","Sertifikatsiz göşt orqali","Faqat inyeksiya orqali"],a:2},
{q:"DCO kelganda birinçi navbatda nima qilinadi?",opts:["Sportçini yaşiriş","DCO ning vakolatnomasini tekşiriş","Suğurta idorasiga qönğiroq qiliş","Test berişni rad etiş"],a:1},
{q:"Antidoping hujjatlari arxivda qança yil saqlanadi?",opts:["1 yil","2 yil","3 yil","5 yil"],a:3},
{q:"Safarda ovqat ta’minoti böyiça asosiy qoida qaysi?",opts:["Mahalliy bozordan xarid qiliş mumkin","Restoranlarda ovqatlaniş eng xavfsiz","Öz ovqat yukini olib boriş va sertifikatlangan manbalar","Qoida yöq, har qanday joy mumkin"],a:2},
{q:"Energetik içimliklar sport taşkilotlarida qanday qabul qilinadi?",opts:["Kofein miqdori kam bölsa ruxsat","Faqat musobaqada taqiqlangan","Butunlay taqiqlangan","Şifokor ruxsati bilan ruxsat"],a:2},
{q:"Kofein WADA 2026 Röyxatida qaysi maqomda turadi?",opts:["Har doim taqiqlangan (S1)","Faqat musobaqada taqiqlangan (S6)","Ruxsat etilgan — WADA Monitoring dasturida kuzatiladi","Faqat TUE bilan ruxsat etiladi"],a:2},
{q:"Antidoping koordinatori qança vaqtda malakasini yangilaşi kerak?",opts:["5 yilda bir","3 yilda bir","2 yilda bir","Yangilaş şart emas"],a:2},
{q:"Mahalliy bozordan göşt oliş musobaqada nima sababli xavfli?",opts:["Narxi qimmat","Klenbuterol bor bölişi mumkin","Şunday qabul qilingan","Heç qanday xavf yöq"],a:1},
{q:"'No Significant Fault' da jazo qanday özgaradi?",opts:["Töliq oqlaniş","Jazo 2 baravar oşadi","Jazo kamaytirilişi mumkin, lekin yöq qilinmaydi","Jazo özgarmaydi"],a:2},
{q:"WADA Kodeks 20.3-modda nimani belgilaydi?",opts:["Sportçi mas’uliyati","Taşkilot/federatsiya rahbari mas’uliyati","TUE protsedurasi","Whereabouts qoidalari"],a:1},
{q:"Yangi xodim qança vaqt içida antidoping kursi olişi kerak?",opts:["6 oy içida","Istalgan vaqtda","30 kun içida","1 yil içida"],a:2},
{q:"Taşkilot doping holati uçun tölaydigan xarajat profilaktikaga nisbatan qança bölişi mumkin?",opts:["Bir xil","2 barobar","5 barobar","10-50 barobar"],a:3},
{q:"Favqulodda harakat rejasi qança ssenariy uçun tayyorlanişi kerak?",opts:["1 ta (faqat AAF uçun)","2 ta (AAF va TUE rad)","3 ta (DCO kelişi, AAF, TUE rad)","5 ta"],a:2},
{q:"TUE muddati tugaşiga qaçon yangilaş arizasi berilişi kerak?",opts:["7 kun oldin","30 kun oldin","60 kun oldin","3 oy oldin"],a:1},
{q:"Doping holati röy bersa taşkilotga qanday oqibat bölişi mumkin?",opts:["Faqat sportçi jazolanadi","Jarima va obrö yöqotiş","10K-100K USD jarima + obrö yöqotiş + sponsor bekor","Heç qanday oqibat yöq"],a:2}
],
murabbiy:[
{q:"WADA Kodeks 21.2-modda murabbiyga nima vazifani yuklaydi?",opts:["Faqat maşğulot rejasi","Sportçini antidoping ta’lim va yönaltiriş","Faqat plyus natijaga erişiş","Heç qanday antidoping vazifa yöq"],a:1},
{q:"Murabbiy sportçiga taqiqlangan modda tavsiya qilsa qanday jazo kutadi?",opts:["Ogohlantiriladi","1 yil çetlaştiriş","4 yildan umrbod taqiq (ADRV 2.8)","Heç qanday jazo yöq"],a:2},
{q:"ADAMS tizimida murabbiy qanday röyxatda bölişi kerak?",opts:["Röyxat şart emas","'Support Personnel' sifatida","'Athlete' sifatida","'Official' sifatida"],a:1},
{q:"Murabbiy sertifikatini qança vaqtda yangilaş kerak?",opts:["Har yili","2 yilda bir","5 yilda bir","Yangilaş şart emas"],a:1},
{q:"Sportçi uçun protein kunlik ehtiyoji qança?",opts:["0.5-0.8 g/kg","1.0-1.2 g/kg","1.6-2.2 g/kg","3.0-4.0 g/kg"],a:2},
{q:"Intensiv maşğulot kunida uglevod ehtiyoji qança?",opts:["1-2 g/kg","3-4 g/kg","6-10 g/kg","15-20 g/kg"],a:2},
{q:"Yoşlar bilan işlaşda antidoping mavzusini qaçon kötariş kerak?",opts:["Faqat musobaqa oldida","Har hafta maşğulot boşida eslatiş","Faqat bitta maxsus dars ötiş","Ular söragandagina"],a:1},
{q:"DCO kelganda murabbiyning birinçi vazifasi nima?",opts:["DCO bilan munozara qiliş","Sportçiga xabar beriş va yonida böliş, koordinatorni çaqiriş","Sportçini test berişdan saqlaş","Test keçiktirişni söraş"],a:1},
{q:"Sertifikatlangan BAD tanlaşda qaysi muhrdorlar işonçli?",opts:["Istalgan 'natural' yozuvli","Faqat Rossiya brendlari","Informed Sport, NSF, Cologne List","Dorixonadan sotib olingan har qanday"],a:2},
{q:"Retroaktiv TUE qaçon va qança vaqt içida topşirilişi kerak?",opts:["Faqat rejalaştirilgan holatda","Favqulodda holat, 30 kun içida","Favqulodda holat, 7 kun içida","Musobaqa tugaganidan keyin 1 oy"],a:2},
{q:"'Periodizatsiya' tuşunçasi nimani anglatadi?",opts:["Faqat haftasiga yuk rejasi","Davriy yuk va tiklaniş bilan tabiiy adaptatsiya","Doping yordamida yuk oşiriş","Faqat bayram davrida dam oliş"],a:1},
{q:"DCO kelganda murabbiy sportçiga nima demasligi kerak?",opts:["Koordinatorni çaqiring","Vakolatnomani tekşiring","Test bermang yoki keçiktiring","Xotirjam böling"],a:2},
{q:"Energetik içimliklar maşğulot davomida nima uçun xavfli?",opts:["Tarkibi köp qimmat","Yaşirin stimulyator va kontaminatsiya xavfi","Faqat kaloriyasi köp","Heç qanday xavf yöq"],a:1},
{q:"Mahalliy restoranda ovqatlaniş musobaqada nima sababli taqiqlangan?",opts:["Narxi qimmat","Sifati yaxşi emas","Kontaminatsiya va klenbuterol xavfi","Faqat marosimlarda mumkin"],a:2},
{q:"'Biologik pasport' (ABP) nima maqsadda işlatiladi?",opts:["Sportçi tarixini saqlaş","EPO va qon dopingini bilvosita aniqlaş","Ovqatlaniş hisobini yuritiş","Whereabouts kuzatiş"],a:1},
{q:"Murabbiy antidoping sertifikatini qaysi platformalarda olişi mumkin?",opts:["Faqat sportedu.uz da","Faqat WADA saytida","ADEL yoki UzNADO platformasi","Faqat xususiy kurslarda"],a:2},
{q:"Musobaqa kuni murabbiy sportçiga qanday içimlik tavsiya qilişi kerak?",opts:["Istalgan suv va içimlik","Energetik va izoton içimliklar","Faqat sertifikatlangan mineral suv","Qahva va çoy"],a:2},
{q:"Murabbiy DCO ning vakolatnomasini körişda nima qaraydi?",opts:["Faqat ismini","Rasmiy ID va vakolatnoma hujjatini","Faqat sanani","Heç narsani tekşirmaydi"],a:1},
{q:"Doping taklif qiluvçi noma’lum şaxs bilan murojaat bölsa murabbiy nima qiladi?",opts:["Quloq soladi va körib çiqadi","Koordinator va UzNADO ga darhol xabar beradi","Özi qaror qiladi","Sportçiga aytadi va unuttiradi"],a:1},
{q:"WADA qaysi yil taşkil etilgan?",opts:["1995","1999","2003","2008"],a:1}
],
metodist:[
{q:"WADA Taqiqlangan Röyxati qaçon yangilanadi?",opts:["Har çorakda","Har 6 oyda","Har yil 1-yanvar","Har 2 yilda"],a:2},
{q:"Metodist yangi Taqiqlangan Röyxatni olingandan keyin qança vaqtda barça xodimlarga tarqatişi kerak?",opts:["1 oy içida","15 kun içida","1 hafta içida","24 soat içida"],a:1},
{q:"WADA Kodeksida neçta asosiy bob bor?",opts:["10","15","20","25"],a:3},
{q:"ADAMS tizimida qaysi ma’lumotlar boşqariladi?",opts:["Faqat test natijalari","Whereabouts, test, TUE va sportçi profili","Faqat TUE arizalari","Faqat moliyaviy hisobotlar"],a:1},
{q:"TUE arizasini TUEC qança vaqt içida körib çiqadi?",opts:["3 kun","7 kun","21 kun","60 kun"],a:2},
{q:"Retroaktiv TUE favqulodda holatda qança vaqt içida topşirilişi kerak?",opts:["24 soat","7 kun","30 kun","3 oy"],a:1},
{q:"AAF (Adverse Analytical Finding) xabari kelganda metodist qança vaqt içida B-namuna söraşi mumkin?",opts:["3 kun","10 kun","30 kun","60 kun"],a:1},
{q:"Whereabouts ma’lumotlari çorak qaçon yangilanişi kerak?",opts:["Çorak örtasida","Çorak boşida","Çorak oxirigaça","Istalgan vaqtda"],a:2},
{q:"3 ta missed test 12 oy içida qanday qoidabuzarlik hisoblanadi?",opts:["ADRV 2.1","ADRV 2.3","ADRV 2.4","ADRV 2.8"],a:2},
{q:"UzNADO ga hisobot qança vaqtda bir marta topşiriladi?",opts:["Hafta içida","Oyda bir marta","Çorakda bir marta","Yilda bir marta"],a:2},
{q:"ISE 3.0 standarti nimani tartibga soladi?",opts:["Test rejalaştiriş","Laboratoriya akkreditatsiyasi","Antidoping ta’lim standarti","TUE protsedurasi"],a:2},
{q:"WADA ISL standarti nimaga oid?",opts:["Test rejalaştiriş","Laboratoriya akkreditatsiyasi","Ta’lim standartlari","Whereabouts tizimi"],a:1},
{q:"TUE rad etilsa metodist qança vaqt içida apellyatsiya qilişi mumkin?",opts:["7 kun","14 kun","21 kun","60 kun"],a:2},
{q:"Antidoping modulini muvaffaqiyatli özlaştiriş uçun minimal neça foiz töğri javob talab etiladi?",opts:["60%","70%","75%","90%"],a:2},
{q:"ADKT-25 nima?",opts:["Antidoping dori röyxati","Antidoping bilim testi (25 savol)","ADAMS tizim kodi","Taqiqlangan röyxat kodi"],a:1},
{q:"DMS-12 nima?",opts:["Dori klassifikatsiya tizimi","Dinamik motivatsiya şkalasi (12 savol)","WADA standart kodi","Test protokoli"],a:1},
{q:"ADAMS da 'RTP' abbreviaturasi nimani anglatadi?",opts:["Test natijalari platformasi","Röyxatga olingan testlanadigan guruh (Registered Testing Pool)","WADA protokol tizimi","Taqiqlangan röyxat platformasi"],a:1},
{q:"Metodist öz malakasini qaysi platformalarda oşirişi mumkin?",opts:["Faqat sportedu.uz","Faqat WADA saytida","ADEL yoki talim-uznada.uz","Faqat xususiy kurslarda"],a:2},
{q:"Sport taşkilotida antidoping arxiv qança yil saqlanişi şart?",opts:["1 yil","2 yil","3 yil","5 yil"],a:3},
{q:"WADA Kodeks 2.4-modda nimani tartibga soladi?",opts:["Taqiqlangan modda (AAF)","Boş tortiş (Refusal)","Whereabouts failure","Gen doping"],a:2}
],
sportchi:[
{q:"'Strict Liability' prinsipi sportçi uçun nimani anglatadi?",opts:["Faqat qasddan qabul qiliş uçun javobgar","Faqat musobaqada qabul qiliş uçun javobgar","Organizmidagi har qanday taqiqlangan modda uçun şaxsan javobgar","Şifokor körsatmasi bölsa javob bermas"],a:2},
{q:"Whereabouts qoidasiga köra RTP sportçisi ADAMS ga kunlik qança ma’lumot kiritadi?",opts:["24 soatlik jadval","60 daqiqalik vaqt va aniq joy","Faqat maşğulot joyi","Faqat yaşaş manzili"],a:1},
{q:"12 oy içida neçta missed test ADRV hisoblanadi?",opts:["1 ta","2 ta","3 ta","5 ta"],a:2},
{q:"TUE arizasini musobaqadan qança vaqt oldin topşiriş kerak?",opts:["7 kun oldin","14 kun oldin","30 kun oldin","60 kun oldin"],a:2},
{q:"DCO kelganda sportçi birinçi navbatda nima qilişi kerak?",opts:["Boş tortiş","DCO ning vakolatnomasini va ID sini tekşiriş","Yuguriş","Öylab köraman deyiş"],a:1},
{q:"Namuna berişdan boş tortiş qanday oqibatga olib keladi?",opts:["Ogohlantiriladi","6 oy","2 yil","4 yilgaça diskvalifikatsiya (ADRV 2.3)"],a:3},
{q:"BAD (biologik qöşimça) işlatmaslik tavsiya etiladi çunki:",opts:["Narxi qimmat","Tarkibi nazorat qilinmagan, kontaminatsiya xavfi bor","Şifokor ruxsatini oliş qiyin","Hamma BAD taqiqlangan"],a:1},
{q:"WADA sertifikatlangan BAD marka röyxatiga qaysi kiradi?",opts:["Rossiya brendlari","Informed Sport, NSF, Cologne List","'Natural' yozuvli har qanday","Dorixona brendlari"],a:1},
{q:"Taqiqlangan röyxatda yöq dori qaysi holatlarda xavfli bölişi mumkin?",opts:["Heç qaçon xavfli emas","Sertifikatsiz BAD tarkibida yaşirin taqiqlangan modda bölsa","Faqat köp miqdorda qabul qilinganda","Şifokor ruxsatisiz içilganda"],a:1},
{q:"Kofein WADA da qanday statusda?",opts:["Butunlay taqiqlangan","Musobaqada taqiqlangan (S6)","Ruxsat etilgan — Monitoring dasturida (siydik çegarasi bekor qilingan)","Faqat TUE bilan ruxsat etiladi"],a:2},
{q:"Energetik içimliklar sportçilarga nima uçun taqiqlangan?",opts:["Faqat qand miqdori köp","Tarkibida yaşirin stimulyatorlar va kontaminatsiya xavfi bor","Narxi qimmat","Kuçli ta’mi bor"],a:1},
{q:"Göşt orqali qaysi taqiqlangan modda kirişi mumkin?",opts:["Testosteron","Klenbuterol","EPO","Amfetamin"],a:1},
{q:"Taqiqlangan röyxatda modda bor-yöqligini tekşiriş uçun qaysi saytga kiriş kerak?",opts:["google.com","talim-uznada.uz","wada-ama.org/en/prohibited-list","sportedu.uz"],a:2},
{q:"Şifokor retsepti bölsa dori qabul qiliş xavfsizmi?",opts:["Ha, retsept bölsa har doim xavfsiz","Yöq — faol moddani Taqiqlangan röyxatda tekşiriş şart","Ha, agar mahalliy şifokor yozsa","Faqat musobaqadan taşqarida ruxsat"],a:1},
{q:"ADEL platformasida sportçi nima olişi mumkin?",opts:["Faqat ma’lumot","Bepul online ta’lim va sertifikat","Faqat pul evaziga kurs","Test natijalari"],a:1},
{q:"Deksametazon qaysi şaklda qabul qiliş ruxsat etilgan?",opts:["Oral (tabletkalar)","IV (tomir orqali)","Intra-artikulyar (böğin içiga inyeksiya)","Barça şaklda ruxsat"],a:2},
{q:"TUE yöq holda taqiqlangan modda qabul qilsangiz nima böladi?",opts:["Birinçi galda ogohlantirilasiz","AAF yoki ADRV hisoblanadi","Faqat musobaqada tekşiriladi","Heç narsa bölmaydi"],a:1},
{q:"'Play True Day' qaçon nişonlanadi?",opts:["Har yili yanvar oyida","Har yili aprel oyida (WADA e’lon qilgan kunda)","Har yili may oyida","Har yili oktyabr oyida"],a:1},
{q:"CBD (kannabidiol) yoği işlatiş xavfsizmi?",opts:["Ha, butunlay xavfsiz","Yöq, WADA da taqiqlangan","THCsiz sifatli CBD ruxsat, lekin köpçilik mahsulotda THC izlari bor","Faqat musobaqadan taşqarida ruxsat"],a:2},
{q:"3 ta Whereabouts failure qanday oqibat beradi?",opts:["Ogohlantirilasiz","6 oy diskvalifikatsiya","2 yilgaça diskvalifikatsiya","10 yilgaça diskvalifikatsiya"],a:2}
]};


const scenarios=[
  {
    id:'dco',
    icon:'👮',
    title:'DCO keldi!',
    desc:'Musobaqadan keyin doping nazorat xodimi sizni töxtatdi.',
    color:'#dc2626',
    bg:'#fef2f2',
    choices:[
      {text:'Vakolatnomasini körib, metodistni çaqiraman',correct:true,result:'✅ TöĞRI! DCO ning ID va vakolatnomasini tekşiriş — birinçi qadam. Metodist kelganda tinç turib namuna berasiz. Bu protsedura Kodeks 2.3 böyiça töğri.'},
      {text:'Hozir dam olişim kerak, ertaga kelsin',correct:false,result:'❌ XATO! Boş tortiş = ADRV 2.3 = 4 yilgaça diskvalifikatsiya. "Dam olaman" — qonuniy sabab emas.'},
      {text:'Boş tortaman va ketib qolaman',correct:false,result:'❌ JUDA XAVFLI! Bu Kodeks 2.3 böyiça eng oğir qoidabuzarlik — 4 yilgaça ban. DCO bilan heç qaçon munozara qilmang.'}
    ]
  },
  {
    id:'bad',
    icon:'💊',
    title:'Döst BAD taklif qildi',
    desc:'Musobaqa oldida döstingiz "100% tabiiy, xavfsiz" protein qöşimçasini taklif qildi.',
    color:'#d97706',
    bg:'#fffbeb',
    choices:[
      {text:'Rahmat, lekin sertifikatini körsatsin, keyin koordinatorga sörayman',correct:true,result:'✅ TÖĞRI! Har qanday qöşimçani olişdan oldin: Informed Sport/NSF sertifikati + koordinator tasdiqi. "Tabiiy" sözi kafolat emas.'},
      {text:'"Tabiiy" deydi, içib köraman',correct:false,result:'❌ XATO! Sertifikatsiz BADlarning 12-25% da taqiqlangan modda izlari topilgan. "Tabiiy" yozuvi heç narsani kafolatlamaydi.'},
      {text:'Musobaqadan keyin içaman',correct:false,result:'⚠️ NOTÖĞRI! Taqiqlangan moddalar musobaqadan taşqarida ham taqiqlangan (M1, S1, S2 va boşqalar). Musobaqadan keyingisi ham xavfli.'}
    ]
  },
  {
    id:'gripp',
    icon:'🤧',
    title:'Musobaqa oldida kasal böldingiz',
    desc:'Musobaqadan 2 kun oldin gripp belgilari. Şifokor siz bilmagan dori yozdi.',
    color:'#2563eb',
    bg:'#eff6ff',
    choices:[
      {text:'Dorining faol moddasini WADA röyxatida tekşiraman, keyin içaman',correct:true,result:'✅ TÖĞRI! Har qanday dorida: (1) faol moddalarni aniqlaş, (2) WADA Prohibited List da tekşiriş, (3) taqiqlangan bölsa — muqobil söraş yoki TUE. Retsept — himoya emas!'},
      {text:'Şifokor yozdi, işonçli, içaman',correct:false,result:'❌ XATO! Köp sovuq dorilarda psevdoefedrin bor — bu S6 stimulyator. "Şifokor yozdi" — WADA uçun bahona emas. Strict Liability amal qiladi.'},
      {text:'Heç narsa içmay musobaqaga boraman',correct:true,result:'✅ YAXŞI! Agar xavfsiz dori topa olmasangiz — kasallik bilan musobaqaga boriş xavfli bölsa ham, dozasiz ketiş xavfsizroq. Koordinator bilan maslahatlaşing.'}
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

⏰ <b>Bugun ADAMS ni yangilaş vaqti!</b>

📋 Nima qiliş kerak:
1. ADAMS ga kiring: adams.wada-ama.org
2. Ertalab soat 06:00—07:00 → joyingizni kiriting
3. Çorak (3 oylik) ma’lumotni tekşiring
4. Joy özgarsa — DARHOL yangilang

⚠️ Eslatma: 12 oyda 3 ta missed test = 2 yil!

🌐 doping.uz | sportedu.uz | UzNADO`
  },
  tue:{
    emoji:'💊',
    title:'TUE MUDDAT ESLATMASI',
    text:`💊 <b>TUE MUDDAT ESLATMASI</b>
━━━━━━━━━━━━━━━━━━━━
Assalomu alaykum, {ism}!

⚠️ <b>TUE muddatingiz yaqinlaşmoqda!</b>

📋 Nima qiliş kerak:
1. ADAMS da TUE holatini tekşiring
2. Muddati tugaşiga 30+ kun qolganida yangilaş arizasini bering
3. Şifokordan yangi tibbiy hujjatlar oling
4. TUEC javobini 21 kun içida kuting

⚠️ TUE siz taqiqlangan dori içiş = AAF!

📞 UzNADO: talim-uznada.uz`
  },
  seminar:{
    emoji:'🎓',
    title:'SEMINAR ESLATMASI',
    text:`🎓 <b>TA’LIM SEMINARI ESLATMASI</b>
━━━━━━━━━━━━━━━━━━━━
Assalomu alaykum, {ism}!

📅 <b>Yaqinlaşayotgan ta’lim tadbirlari:</b>

✅ ADEL platformasida yangi kurslar: adel.wada-ama.org
✅ UzNADO ta’lim: talim-uznada.uz
✅ Institut yangiliklari: sportedu.uz

💡 Yillik malaka yangilaniş — majburiy!

🌐 Antidoping Ta’lim Portali | doping.uz`
  },
  test:{
    emoji:'📝',
    title:'TEST ESLATMASI',
    text:`📝 <b>YILLIK MALAKA TESTI ESLATMASI</b>
━━━━━━━━━━━━━━━━━━━━
Assalomu alaykum, {ism}!

🔔 <b>Antidoping bilim testini yangilaş vaqti keldi!</b>

📋 Nima qiliş kerak:
1. https://doping.uz portaliga kiring
2. Öz toifangizni tanlang (rahbar/murabbiy/metodist/sportçi)
3. 20 savollik testni toping
4. 75%+ → Özlaştirildi tasdiqnomasi + Telegramga yuboriladi

⚠️ Yangilanmagan bilim — xatolar keltirib çiqaradi!

🌐 Antidoping Ta’lim Portali | doping.uz`
  }
};


try { window.CUR_LANG = localStorage.getItem('site_lang') || 'uz'; } catch(e) { window.CUR_LANG = 'uz'; }

const STR = {
uz:{
  savol:'Savol',
  res_pass:'✅ Tabriklaymiz! Test muvaffaqiyatli özlaştirildi! Quyida tasdiqlovçi hujjatni yuklab oling.',
  res_mid:"👍 Yaxşi natija, lekin 75% kerak. Mavzularni takrorlab, qayta urinib köring.",
  res_low:"📚 Köproq öqib, qayta sinab köring.",
  unanswered:"{n} ta savolga javob bermagansiz. Baribir natijani körmoqçimisiz?",
  err_name:'❗ Ism va Familiya kiritiş majburiy!',
  cert_ready:'🏆 75% dan yuqori — Fan muvaffaqiyatli özlaştirildi! Hujjatni yuklab oling.',
  cert_field_date:"Berilgan sana:",
  cert_field_id:"Qayd ID:",
  cert_dl:'⬇️ PNG yuklab oliş',
  cert_sending:'⏳ @antidopi kanaliga yuborilmoqda...',
  cert_ch_btn:'📢 Kanalga yuboriş',
  cert_ch_sending:'⏳ Yuborilmoqda...',
  cert_ch_done:'✅ Kanalga yuborildi',
  cert_ch_retry:'🔄 Qayta yuboriş',
  cert_ch_ok:'✅ @antidopi kanaliga yuborildi!',
  cert_ch_fail:"⚠️ Yuborilmadi — bot @antidopi kanalida admin bölişi kerak",
  cert_ch_nocfg:'⚠️ Telegram sozlanmagan (BOT_TOKEN yoki Worker URL kerak)',
  cert_ch_net:"⚠️ Internet xatosi — tasdiqnomani yuklab oling",
  tg_e_chat:"⚠️ Kanal topilmadi — kanal username’i notöğri yoki kanal maxfiy (public bölişi kerak)",
  tg_e_rights:'⚠️ Botga kanalda "Post messages" (xabar yuboriş) huquqi berilmagan',
  tg_e_kicked:"⚠️ Bot kanalga qöşilmagan yoki çiqarib yuborilgan",
  tg_e_token:"⚠️ Bot token notöğri — @BotFather dan qayta tekşiring",
  tg_e_other:'⚠️ Telegram xatosi',
  tg_e_cors:"⚠️ Brauzer sörovni tösdi — Adblock/kengaytmalarni öçirib, boşqa brauzerda sinab köring",
  tg_e_blocked:"⚠️ api.telegram.org oçilmayapti — provayder bloklagan bölişi mumkin. VPN yoqib sinab köring yoki Cloudflare Worker usulini işlating (SOZLAŞ-YORIQNOMA.md)",
  tg_e_wcode:"⚠️ Worker oçilyapti, lekin içida kerakli kod YÖQ — Cloudflare’da workeringizni oçing → Edit code → cloudflare-worker.js dagi kodni töliq joylaştiring → Deploy",
  tg_e_wpost:"⚠️ Worker işlayapti, lekin yuboriş amalga oşmadi — sahifani yangilab (Ctrl+F5) qayta urining",
  tg_e_wblocked:"⚠️ Worker manziliga ulanib bölmadi — internetni tekşiring yoki provayder workers.dev ni bloklagan (VPN bilan sinang)",
  retry:'🔄 Qayta sinaş',
  not_taken:'Topşirilmagan',
  cert_got:'✅ Özlaştirildi'
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
"PhD Ta’lim Portali · 2026":"Образовательный портал PhD · 2026",
"Modullar":"Модули","🤖 AI Dori":"🤖 ИИ Лекарства","📊 Dashboard":"📊 Дашборд","🎯 Trening":"🎯 Тренинг","Toza Sport":"Чистый спорт",
"📚 Modullar":"📚 Модули","🔍 Dorilar":"🔍 Лекарства","🎯 Toza Sport":"🎯 Чистый спорт","🔗 Resurslar":"🔗 Ресурсы",
"🎓 PhD Ilmiy Tadqiqot Loyihasi · sportedu.uz":"🎓 Научно-исследовательский проект PhD · sportedu.uz",
"Tuzuvçi · PhD tadqiqotçisi · sportedu.uz":"Автор · исследователь PhD · sportedu.uz",
"Sport tizimidagi rahbarlar, murabbiylar, metodistlar va sportçilar uçun WADA hamda UzNADO xalqaro standartlariga asoslangan ilmiy-metodologik ta’lim tizimi.":"Научно-методическая система обучения для руководителей, тренеров, методистов и спортсменов, основанная на международных стандартах WADA и UzNADO.",
"Auditoriya":"Аудитории","Mavzu":"Тем","Test savol":"Тест-вопросов","WADA kategoriya":"Категорий WADA","Dorilar bazasi":"База лекарств","Luğat atama":"Терминов",
"Rahbarlar":"Руководители","Murabbiylar":"Тренеры","Metodistlar":"Методисты","Sportçilar":"Спортсмены",
"Öquv Modullar":"Учебные модули","Öz toifangizni tanlang":"Выберите свою категорию",
"Har bir modul şu toifa uçun maxsus işlab çiqilgan. Har bir modulda 16 ta mavzu, amaliy checklist va 20 ta test savoli mavjud.":"Каждый модуль разработан специально для своей категории. В каждом модуле 16 тем, практический чек-лист и 20 тестовых вопросов.",
"Antidoping siyosati, taşkiliy tuzilma, ovqatlaniş nazorati, safar checklist, byudjet va hujjatlar.":"Антидопинговая политика, оргструктура, контроль питания, чек-лист поездок, бюджет и документы.",
"Maşğulot rejalaştiriş, ovqatlaniş nazorati, sportçi salomatligi, TUE va şaxsiy javobgarlik.":"Планирование тренировок, контроль питания, здоровье спортсмена, TUE и личная ответственность.",
"WADA hujjatlari, ADAMS tizimi, SMS-tahlil, federatsiyalar koordinatsiyasi, TUE va hisobotlar.":"Документы WADA, система ADAMS, SMS-анализ, координация федераций, TUE и отчёты.",
"Toza sport, BAD xavfi, TUE, Whereabouts, şaxsiy javobgarlik va doping-kontrol protsedurasi.":"Чистый спорт, риски БАД, TUE, Whereabouts, личная ответственность и процедура допинг-контроля.",
"📋 16 mavzu":"📋 16 тем","🏅 16 mavzu":"🏅 16 тем","📄 16 mavzu":"📄 16 тем","✅ Checklist":"✅ Чек-лист","📝 20 test":"📝 20 тестов","✅ Kunlik reja":"✅ Дневной план",
"Hujjatli Filmlar":"Документальные фильмы","Oskar sovrindori va dunyo miqyosida e’tirof etilgan filmlar — pedagogik tahlil bilan.":"Оскароносные и всемирно признанные фильмы — с педагогическим анализом.",
"Klinik Holatlar":"Клинические случаи","Haqiqiy doping voqealari asosida örganiş — xato va töğri yöl, WADA qoidalari.":"Обучение на реальных допинг-случаях — ошибки и верный путь, правила WADA.",
"Antidoping Luğat":"Антидопинговый словарь","WADA atamalarining özbekça izohli luğati — 35+ atama, qidiruv va alifbo filtri.":"Толковый словарь терминов WADA — 35+ терминов, поиск и алфавитный фильтр.",
"🎥 5 film":"🎥 5 фильмов","🏆 Оскар":"🏆 Оскар","📖 Tahlil":"📖 Анализ","📋 12 holat":"📋 12 случаев","❌→✅ Tahlil":"❌→✅ Анализ","📜 WADA qoida":"📜 Правила WADA","🔤 35+ atama":"🔤 35+ терминов","🔍 Qidiruv":"🔍 Поиск","📌 Harflar":"📌 Алфавит",
"WADA Ma’lumotlar Bazasi":"База данных WADA","Taqiqlangan Moddalar Röyxati (2026)":"Список запрещённых веществ (2026)",
"Barça kategoriyalar":"Все категории","Modda nomi":"Название вещества","Misollar":"Примеры","Ta’siri":"Действие","Xavf darajasi":"Уровень риска",
"Özbekistonda birinçi":"Впервые в Узбекистане","AI Dori Tekşirgiç":"ИИ-проверка лекарств",
"Istalgan dori, qöşimça yoki mahsulot nomini yozing — AI Dori Tekşirgiç WADA 2026 qoidalari asosida javob beradi":"Введите название любого лекарства, добавки или продукта — ИИ-проверка ответит по правилам WADA 2026",
"🤖 AI Tekşirgiç":"🤖 ИИ-проверка","📋 Tezkor Qidiruv":"📋 Быстрый поиск","🤖 AI Tekşir":"🤖 Проверить","🔍 Qidiriş":"🔍 Поиск",
"Topilmadi — AI Tekşirgiçdan foydalaning":"Не найдено — воспользуйтесь ИИ-проверкой",
"Mening Progress Dashboard":"Мой дашборд прогресса","Test natijalarim, özlaştiriş tasdiqnomalari, reyting":"Мои результаты, подтверждения освоения, рейтинг",
"📊 Şaxsiy Natijalar":"📊 Личные результаты","Test topşirgan bölsangiz — natijalaringiz şu yerda saqlanadi":"Если вы сдавали тест — результаты сохраняются здесь",
"📈 Modul Natijalari":"📈 Результаты модулей","🏆 Özlaştirilgan modullar":"🏆 Освоенные модули","🏅 Top Natijalar":"🏅 Лучшие результаты",
"Hali heç qanday test topşirilmagan.":"Пока ни один тест не сдан.","Yuqoridagi modullardan birini tanlang.":"Выберите один из модулей выше.",
"75% dan yuqori natijada Özlaştirildi tasdiqnomasi beriladi":"Подтверждение освоения выдаётся при результате выше 75%",
"Test topşiring va reytingda körining!":"Сдайте тест и попадите в рейтинг!",
"🎯 Interaktiv Trening":"🎯 Интерактивный тренинг","Real Hayot Ssenarilari":"Сценарии из реальной жизни",
"Haqiqiy vaziyatda nima qilardingiz? Tanlang va oqibatini köring":"Что бы вы сделали в реальной ситуации? Выберите и увидите последствия",
"🎯 Toza Sport Tarğiboti":"🎯 Пропаганда чистого спорта","Dopingga Qarşi Kuraşiş va Öqitiş":"Борьба с допингом и обучение",
"Xalqaro tajribalar, öqitiş metodikasi, tarğibot va amaliy dasturlar":"Международный опыт, методика обучения, пропаганда и практические программы",
"Dunyo antidoping agentliklari":"Антидопинговых агентств мира","Yillik testlar (Özbekiston)":"Тестов в год (Узбекистан)","Play True kuni":"День Play True","2024 toza natija foizi":"Чистых результатов (2024)",
"Halollik":"Честность","Sun’iy yordamsiz, raqibga hurmat.":"Без искусственной помощи, уважение к сопернику.",
"Salomatlik":"Здоровье","Tanangiz — asosiy kapital. Doping uni buzadi.":"Ваше тело — главный капитал. Допинг его разрушает.",
"Javobgarlik":"Ответственность","Strict Liability — organizmingizda topilgan har qanday modda uçun şaxsan javobgarsiz.":"Strict Liability — вы лично отвечаете за любое вещество, найденное в организме.",
"❓ Köp Beriladigan Savollar":"❓ Часто задаваемые вопросы","Antidoping böyiça FAQ":"FAQ по антидопингу",
"14 ta savol-javob — bosib oçing":"14 вопросов и ответов — нажмите, чтобы открыть",
"Rasmiy Resurslar":"Официальные ресурсы","WADA, UzNADO, Institut va boşqa rasmiy platformalar":"WADA, UzNADO, институт и другие официальные платформы",
"© 2026 · Antidoping Kompetensiyasi Ta’lim Portali · PhD Ilmiy Tadqiqot · sportedu.uz":"© 2026 · Образовательный портал антидопинговой компетентности · Научное исследование PhD · sportedu.uz",
"📝 Rahbarlar testi — 20 savol":"📝 Тест для руководителей — 20 вопросов",
"📝 Murabbiylar testi — 20 savol":"📝 Тест для тренеров — 20 вопросов",
"📝 Metodistlar testi — 20 savol":"📝 Тест для методистов — 20 вопросов",
"📝 Sportçilar testi — 20 savol":"📝 Тест для спортсменов — 20 вопросов",
"@antidopi kanaliga obuna böling":"Подпишитесь на канал @antidopi",
"Test natijangiz va Özlaştirildi tasdiqnomangiz şu kanalga yuboriladi.":"Результат теста и подтверждение освоения отправляются в этот канал.",
"📢 Kanalga ötiş →":"📢 Перейти в канал →",
"Ma’lumotlaringizni kiriting":"Введите ваши данные",
"🚀 Testni boşlaş":"🚀 Начать тест","✅ Natijani köriş":"✅ Показать результат","🔄 Qayta boşlaş":"🔄 Начать заново",
"Rahbarlar uçun modul":"Модуль для руководителей","Taşkil etiş, nazorat, byudjet, siyosat":"Организация, контроль, бюджет, политика",
"Murabbiylar uçun modul":"Модуль для тренеров","Maşğulot, ovqat, salomatlik, javobgarlik":"Тренировки, питание, здоровье, ответственность",
"Metodistlar uçun modul":"Модуль для методистов","WADA hujjatlari, ADAMS, SMS, federatsiyalar":"Документы WADA, ADAMS, SMS, федерации",
"Sportçilar uçun modul":"Модуль для спортсменов","Toza sport, BAD, TUE, javobgarlik, doping-kontrol":"Чистый спорт, БАД, TUE, ответственность, допинг-контроль",
"📚 Mavzular":"📚 Темы","✅ Oylik checklist":"✅ Месячный чек-лист","📝 Test (20)":"📝 Тест (20)",
"Oskar sovrindori va e’tirof etilgan filmlar — pedagogik tahlil":"Оскароносные и признанные фильмы — педагогический анализ",
"Klinik Holatlar (Case Studies)":"Клинические случаи (Case Studies)","Haqiqiy doping voqealari asosida — xato va töğri yöl":"На основе реальных допинг-случаев — ошибки и верный путь",
"Antidoping Luğati":"Антидопинговый словарь","WADA atamalarining özbekça izohli luğati — 35+ atama":"Толковый словарь терминов WADA — 35+ терминов"
,"🧪 WADA":"🧪 WADA","🏅 Toza Sport":"🏅 Чистый спорт","❓ FAQ":"❓ FAQ"

,"🎓 PhD Ilmiy Tadqiqot Loyihasi · doping.uz · sportedu.uz":"🎓 Научно-исследовательский проект PhD · doping.uz · sportedu.uz"
,"Muallif · Jismoniy tarbiya va sport böyiça mutaxassislarni qayta tayyorlaş va malakasini oşiriş instituti · PhD tadqiqotçi":"Автор · Институт переподготовки и повышения квалификации специалистов по ФКиС · PhD-исследователь"
,"Saydaliyev Muhammad Sodiq Möminjon öğli":"Сайдалиев Мухаммад Содик Муминжон угли"
,"Jismoniy tarbiya va sport böyiça mutaxassislarni qayta tayyorlaş va malakasini oşiriş instituti (PhD tadqiqotçi Saydaliyev M.S.) tomonidan sportçilar, murabbiylar va mutaxassislarning malakasini oşiriş hamda bilmasdan dopingga tuşib qolişning oldini oliş maqsadida yaratilgan milliy antidoping ta’lim portali.":"Национальный антидопинговый образовательный портал, созданный Институтом переподготовки и повышения квалификации специалистов по физической культуре и спорту (PhD-исследователь Сайдалиев М.С.) для повышения квалификации и профилактики непреднамеренного допинга."
,"Antidoping audio darslari":"Антидопинговые аудиоуроки"
,"Sportçilar va tinglovçilar uçun 13 ta audio dars. Tinglang, töliq matnini öqing va Word shaklida yuklab oling.":"13 аудиоуроков для спортсменов и слушателей. Слушайте, читайте полный текст и скачивайте в Word."
,"🎙 13 ta audio":"🎙 13 аудио"
,"📄 Word matn":"📄 Текст Word"
,"13 ta audio maşğulot · tinglaş va mustaqil örganiş":"13 аудиозанятий · прослушивание и самообучение"
,"Tinglaş uçun darsni tanlang":"Выберите урок для прослушивания"
,"Tinglaş tezligi":"Скорость воспроизведения"
,"Natijalarni yuklab oliş (CSV)":"Скачать результаты (CSV)"
,"📥 Natijalarni yuklab oliş (CSV)":"📥 Скачать результаты (CSV)"
,"© 2026 · Doping.uz — Antidoping Ta’lim Portali · Muallif: Saydaliyev Muhammad Sodiq Möminjon öğli (Malaka oşiriş instituti, PhD tadqiqotçi)":"© 2026 · Doping.uz — Антидопинговый портал · Автор: Сайдалиев М.С. (Институт повышения квалификации, PhD-исследователь)"
,"Sportçilar va murabbiylar malakasini oşiriş, dopingga tuşib qolişining oldini oliş böyiça milliy ta’lim tizimi":"Национальная система обучения спортсменов и тренеров по профилактике допинга"

};

const HTML_SWAP_LIST = [
[".hero h1","Антидопинговая <em>Образовательная</em> Платформа"],
[".hero-lead-text","Для честного спорта, чистой конкуренции и здорового поколения — 4 целевые аудитории, 64 темы и национальная система подтверждения освоения."],
["#wada-sec .section-sub","Введите название вещества или отфильтруйте по категории. <strong>Версия:</strong> WADA Prohibited List 2026 (в силе с 01.01.2026). S1, S2, S4, S5, M1-M3 — запрещены всегда; S3, S6, S7, S8, S9 — только <strong>в соревновательный период</strong>."],
["#rahbar-reg div[style*='border-radius:8px']","✅ Если наберёте более 75%, ваше подтверждение освоения (O‘zlashtirildi) будет автоматически отправлено в канал <b>@antidopi</b>."],
["#murabbiy-reg div[style*='border-radius:8px']","✅ Если наберёте более 75%, ваше подтверждение освоения (O‘zlashtirildi) будет автоматически отправлено в канал <b>@antidopi</b>."],
["#metodist-reg div[style*='border-radius:8px']","✅ Если наберёте более 75%, ваше подтверждение освоения (O‘zlashtirildi) будет автоматически отправлено в канал <b>@antidopi</b>."],
["#sportchi-reg div[style*='border-radius:8px']","✅ Если наберёте более 75%, ваше подтверждение освоения (Özlaştirildi) будет автоматически отправлено в канал <b>@antidopi</b>."]
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
