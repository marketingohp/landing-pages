"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ar" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.interior": "Interior",
    "nav.location": "Location",
    "nav.amenities": "Amenities",
    "nav.contact": "Contact",
    "nav.developer": "The Developer",

    // Hero Keywords
    "hero.energy": "Energy",
    "hero.refinement": "Refinement",
    "hero.lightness": "Lightness",
    "hero.tagline": "Between Sea and Sky",

    // Registration Form
    "form.register": "Register Your Interest",
    "form.phone": "Phone Number",
    "form.source": "How did you hear about us?",
    "form.unitType": "Unit Type",
    "form.bedrooms": "Number of bedrooms",
    "form.budget": "Budget",
    "form.submit": "Submit",
    "form.apartment": "Apartment",
    "form.townhouse": "Townhouse",
    "form.duplex": "Duplex Penthouse",

    // Main Hero
    "main.title": "Between Sea and Sky",
    "main.subtitle": "Waterfront living, autographed by Sea and Sky.",
    "main.description":
      "Set at the meeting point of sea and sky, Seamont draws on the element's timeless rhythms to create a perfect sense of balance. With Saadiyat's cultural district as the backdrop, sea and sky as the frame, and world class luxury as texture, this is waterfront living, elevated.",
    "main.location": "Location",
    "main.locationValue": "Shams Reem Island",
    "main.handover": "Handover",
    "main.handoverValue": "Q4 2028",
    "main.units": "Units",
    "main.unitsValue1": "1 to 3 Bedroom Apartments",
    "main.unitsValue2": "4 Bedroom Duplexes and Townhouses",
    "main.marriott": "Part of Marriott's Autograph Collection",
    "main.enquire": "Enquire Now",
    "main.brochure": "Download Brochure",

    // Features
    "features.title":
      "A space for enlightenment — where sea, sky, and self align.",
    "features.sea": "Sea",
    "features.seaDesc": "The endless blue ahead.",
    "features.sky": "Sky",
    "features.skyDesc": "The eternal shades above.",
    "features.discover": "Discover More",
    "features.wonder": "Where every window opens to wonder.",
    "features.autograph": "Autograph Collection.",
    "features.hotel": "Hotel Style Living, at Home.",
    "features.hotelDesc":
      "As an Autograph Collection Residence, every unit at Seamont includes Marriott Bonvoy Membership. This is a promise of luxurious, prestigious and personalized amenities and facilities such as concierge services, valet parking, a la carte services and so much more.",
    "features.register": "Register Now",

    // Location
    "location.title": "Driving Distances.",
    "location.subtitle": "Everything to discover between sea and sky.",
    "location.description":
      "Centrally located in the heart of Abu Dhabi, with close proximity to Downtown Abu Dhabi, Maryah Island, and Saadiyat Island – all within minutes.",

    // Amenities
    "amenities.title": "Every detail is a gesture of care and quiet grace.",
    "amenities.learn": "Learn More",

    // Developer
    "developer.title": "A Natural Fusion of Dreams and Design",
    "developer.description":
      "Seamont emerges as a visionary collaboration between Royal Development Holding and SAAS, poised to reshape the real estate landscape by blending innovation with integrity. This partnership combines Royal Development Holding's legacy of trust, excellence, and lifestyle-driven projects with SAAS's commitment to empathetic design and distinguished, spacious properties.",

    // Footer
    "footer.tagline": "Waterfront living, autographed by Sea and Sky.",
    "footer.contact": "Contact",
    "footer.phone": "800 219",
    "footer.address": "Shams Reem Island, Abu Dhabi",
    "footer.quickLinks": "Quick Links",
    "footer.copyright": "Copyright © 2025 Seamont",
    "footer.privacy": "Privacy Policy",
    "footer.disclaimer":
      'Seamont, Autograph Collection Residences, Reem Island, Abu Dhabi are not owned, developed, or sold by Marriott International, Inc. or its affiliates ("Marriott"). Royal Development Holding uses the Autograph Collection marks under a license from Marriott, which has not confirmed the accuracy of any of the statements or representations made here in.',

    // Royal Atlantis Page
    "royal.nav.home": "HOME",
    "royal.nav.location": "LOCATION",
    "royal.nav.amenities": "AMENITIES",
    "royal.nav.gallery": "GALLERY",
    "royal.nav.contact": "CONTACT US",
    "royal.nav.enquire": "ENQUIRE NOW",
    "royal.tagline": "Masdar City",
    "royal.hero.title": "Refinement",
    "royal.hero.subtitle": "THE NEW ART OF LIVING",
    "royal.hero.scroll": "SCROLL",
    "royal.form.propertyType": "PROPERTY TYPE",
    "royal.form.bedrooms": "BEDROOMS",
    "royal.form.bathrooms": "BATHROOMS",
    "royal.form.priceRange": "PRICE RANGE",
    "royal.form.area": "AREA (SQFT)",
    "royal.form.status": "STATUS",
    "royal.form.view": "VIEW",
    "royal.form.amenities": "AMENITIES",
    "royal.form.features": "FEATURES",
    "royal.form.location": "LOCATION",
    "royal.form.search": "SEARCH",
    "royal.form.select": "Select",
    "royal.waterfront.title": "St Regis The Residences",
    "royal.waterfront.title2": "Abu Dhabi’s New Defining Symbol",
    "royal.waterfront.desc1":
      "An architectural marvel rising from the water’s edge, where urban elegance meets organic beauty. Step into a world where century-old heritage meets Abu Dhabi’s modern skyline. These branded residences offer more than just a home; they offer an unprecedented standard of excellence, where every detail is purified with luxury refinement and quiet elegance.",
    "royal.waterfront.desc2": "Abu Dhabi’s New Defining Symbol",
    "royal.waterfront.explore": "EXPLORE RESIDENCES",
    "royal.waterfront.brochure": " REGISTER YOUR INTEREST",
    "royal.enlightenment.title": "The Pulse of the Capital",
    "royal.enlightenment.title2": "The Peace of the Island",
    "royal.enlightenment.desc":
      "Experience a seamless blend of urban activity and waterfront serenity in Abu Dhabi's new defining symbol.",
    "royal.enlightenment.desc2":
      " Every amenity is positioned to enhance daily life, encouraging relaxation, mindfulness, and meaningful connections within a secure and elegant environment. ",

    "royal.enlightenment.viewGallery": "VIEW GALLERY",
    "royal.window.title": "A New Standard of Waterfront Living",
    "royal.hotel.title": "One Residence",
    "royal.hotel.desc":
      "Wake up to inspiring views. Live close to the city’s top destinations. Experience a lifestyle that’s refined, relaxed, and always connected.",
    "royal.hotel.explore": "Register Your Interest",
    "royal.discover.title": "At the Center of Everything",
    "royal.discover.desc":
      "Positioned at Al Maryah Island, the dynamic economic and cultural heartbeat of the capital. Live at the doorstep of global excellence. With ADGM Square and the Cleveland Clinic nearby, and the Louvre and Guggenheim just a short drive away.",
    "royal.discover.masterplan": "VIEW MASTERPLAN",
    "royal.care.title": "The Art of Living Well",
    "royal.care.desc":
      "A curated sanctuary where every moment is elevated by design.",
    "royal.care.viewAll": "DISCOVER MORE",
    "royal.dreams.title":
      "LET THE BAY SLOW YOU DOWN. LET THE CITY LIFT YOU UP.",
    "royal.dreams.desc":
      "At ONE Residence, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island, this modern address offers premium interiors, AI-smart home technology, and exclusive waterfront tranquility",
    "royal.footer.enquire": "ENQUIRE NOW",
    "royal.footer.contact": "CONTACT US",
    "royal.footer.download": "DOWNLOAD BROCHURE",
    "royal.footer.privacy": "PRIVACY POLICY",
    "royal.footer.terms": "TERMS & CONDITIONS",
    "royal.thankYou.title": "Thank you for contacting us!",
    "royal.thankYou.message":
      "Your registration has been sent successfully. We appreciate you reaching out to us.",
    "royal.thankYou.backHome": "BACK TO HOME",
    "royal.thankYou.contactUs": "CONTACT US",
    "royal.footer.sitemap": "SITEMAP",
  },
  ar: {
    // Navigation
    "nav.about": "نبذة",
    "nav.interior": "التصميم الداخلي",
    "nav.location": "الموقع",
    "nav.amenities": "المرافق",
    "nav.contact": "اتصل بنا",
    "nav.developer": "المطور",

    // Hero Keywords
    "hero.energy": "الطاقة",
    "hero.refinement": "الأناقة",
    "hero.lightness": "الخفة",
    "hero.tagline": "بين البحر والسماء",

    // Registration Form
    "form.register": "سجل اهتمامك",
    "form.phone": "رقم الهاتف",
    "form.source": "كيف سمعت عنا؟",
    "form.unitType": "نوع الوحدة",
    "form.bedrooms": "عدد غرف النوم",
    "form.budget": "الميزانية",
    "form.submit": "إرسال",
    "form.apartment": "شقة",
    "form.townhouse": "تاونهوس",
    "form.duplex": "بنتهاوس دوبلكس",

    // Main Hero
    "main.title": "بين البحر والسماء",
    "main.subtitle": "عيش على الواجهة البحرية، موقّع من البحر والسماء.",
    "main.description":
      "يقع سيمونت عند نقطة التقاء البحر والسماء، مستمداً إيقاعاته الخالدة من العناصر لخلق إحساس مثالي بالتوازن. مع الحي الثقافي في السعديات كخلفية، والبحر والسماء كإطار، والرفاهية العالمية كنسيج، هذا هو العيش على الواجهة البحرية، مرتفعاً.",
    "main.location": "الموقع",
    "main.locationValue": "شمس جزيرة الريم",
    "main.handover": "التسليم",
    "main.handoverValue": "الربع الرابع 2028",
    "main.units": "الوحدات",
    "main.unitsValue1": "شقق من 1 إلى 3 غرف نوم",
    "main.unitsValue2": "دوبلكس وتاونهاوس من 4 غرف نوم",
    "main.marriott": "جزء من مجموعة أوتوجراف التابعة لمارriott",
    "main.enquire": "استفسر الآن",
    "main.brochure": "تحميل الكتيب",

    // Features
    "features.title": "مساحة للتنوير — حيث تتوافق البحر والسماء والذات.",
    "features.sea": "البحر",
    "features.seaDesc": "الأزرق اللامتناهي أمامنا.",
    "features.sky": "السماء",
    "features.skyDesc": "الظلال الأبدية أعلاه.",
    "features.discover": "اكتشف المزيد",
    "features.wonder": "حيث تفتح كل نافذة على العجائب.",
    "features.autograph": "مجموعة أوتوجراف.",
    "features.hotel": "عيش بأسلوب الفندق، في المنزل.",
    "features.hotelDesc":
      "كإقامة من مجموعة أوتوجراف، تتضمن كل وحدة في سيمونت عضوية Marriott Bonvoy. هذا وعد بمرافق وخدمات فاخرة ومميزة ومخصصة مثل خدمات الكونسيرج، موقف السيارات، خدمات à la carte وأكثر من ذلك بكثير.",
    "features.register": "سجل الآن",

    // Location
    "location.title": "مسافات القيادة.",
    "location.subtitle": "كل شيء لاكتشافه بين البحر والسماء.",
    "location.description":
      "يقع في قلب أبوظبي، على مقربة من وسط أبوظبي، جزيرة مارياه، وجزيرة السعديات — كلها على بعد دقائق.",

    // Amenities
    "amenities.title": "كل تفصيلة هي لفتة من الرعاية والنعمة الهادئة.",
    "amenities.learn": "اعرف المزيد",

    // Developer
    "developer.title": "اندماج طبيعي للأحلام والتصميم",
    "developer.description":
      "يظهر سيمونت كتعاون رؤيوي بين رويال ديفيلوبمنت هولدينج وSAAS، مستعداً لإعادة تشكيل مشهد العقارات من خلال مزج الابتكار مع النزاهة. يجمع هذا الشراكة إرث رويال ديفيلوبمنت هولدينج من الثقة والتميز والمشاريع الموجهة نحو نمط الحياة مع التزام SAAS بالتصميم المتعاطف والخصائص المميزة والواسعة.",

    // Footer
    "footer.tagline": "عيش على الواجهة البحرية، موقّع من البحر والسماء.",
    "footer.contact": "اتصل بنا",
    "footer.phone": "800 219",
    "footer.address": "شمس جزيرة الريم، أبوظبي",
    "footer.quickLinks": "روابط سريعة",
    "footer.copyright": "حقوق النشر © 2025 سيمونت",
    "footer.privacy": "سياسة الخصوصية",
    "footer.disclaimer":
      'سيمونت، إقامات مجموعة أوتوجراف، جزيرة الريم، أبوظبي ليست مملوكة أو مطورة أو مباعة من قبل Marriott International, Inc. أو شركاتها التابعة ("Marriott"). تستخدم رويال ديفيلوبمنت هولدينج علامات مجموعة أوتوجراف بموجب ترخيص من Marriott، والتي لم تؤكد دقة أي من البيانات أو التمثيلات الواردة هنا.',

    // Royal Atlantis Page
    "royal.nav.home": "الرئيسية",
    "royal.nav.location": "الموقع",
    "royal.nav.amenities": "المرافق",
    "royal.nav.gallery": "المعرض",
    "royal.nav.contact": "اتصل بنا",
    "royal.nav.enquire": "استفسر الآن",
    "royal.tagline": "إقامة رويال أتلانتس",
    "royal.hero.title": "الأناقة",
    "royal.hero.subtitle": "فن العيش الجديد",
    "royal.hero.scroll": "انتقل",
    "royal.form.propertyType": "نوع العقار",
    "royal.form.bedrooms": "غرف النوم",
    "royal.form.bathrooms": "الحمامات",
    "royal.form.priceRange": "نطاق السعر",
    "royal.form.area": "المساحة (قدم مربع)",
    "royal.form.status": "الحالة",
    "royal.form.view": "الإطلالة",
    "royal.form.amenities": "المرافق",
    "royal.form.features": "المميزات",
    "royal.form.location": "الموقع",
    "royal.form.search": "بحث",
    "royal.form.select": "اختر",
    "royal.waterfront.title":
      "عيش على الواجهة البحرية، موقّع من البحر والسماء.",
    "royal.waterfront.desc1":
      "يقع سيمونت عند نقطة التقاء البحر والسماء، مستمداً إيقاعاته الخالدة من العناصر لخلق إحساس مثالي بالتوازن.",
    "royal.waterfront.desc2":
      "مع الحي الثقافي في السعديات كخلفية، والبحر والسماء كإطار، والرفاهية العالمية كنسيج، هذا هو العيش على الواجهة البحرية، مرتفعاً.",
    "royal.waterfront.explore": "استكشف الوحدات",
    "royal.waterfront.brochure": "تحميل الكتيب",
    "royal.enlightenment.title":
      "مساحة للتنوير — حيث تتوافق البحر والسماء والذات.",
    "royal.enlightenment.viewGallery": "عرض المعرض",
    "royal.window.title": "حيث تفتح كل نافذة على العجائب.",
    "royal.hotel.title": "عيش بأسلوب الفندق، في المنزل.",
    "royal.hotel.desc":
      "كإقامة من مجموعة أوتوجراف، تتضمن كل وحدة في سيمونت عضوية Marriott Bonvoy. هذا وعد بمرافق وخدمات فاخرة ومميزة ومخصصة مثل خدمات الكونسيرج، موقف السيارات، خدمات à la carte وأكثر من ذلك بكثير.",
    "royal.hotel.explore": "استكشف المرافق",
    "royal.discover.title": "كل شيء لاكتشافه بين البحر والسماء.",
    "royal.discover.desc":
      "يقع في قلب أبوظبي، على مقربة من وسط أبوظبي، جزيرة مارياه، وجزيرة السعديات — كلها على بعد دقائق.",
    "royal.discover.masterplan": "عرض المخطط الرئيسي",
    "royal.care.title": "كل تفصيلة هي لفتة من الرعاية والنعمة الهادئة.",
    "royal.care.viewAll": "عرض جميع المرافق",
    "royal.dreams.title": "اندماج طبيعي للأحلام والتصميم",
    "royal.dreams.desc":
      "يظهر سيمونت كتعاون رؤيوي بين رويال ديفيلوبمنت هولدينج وSAAS، مستعداً لإعادة تشكيل مشهد العقارات من خلال مزج الابتكار مع النزاهة.",
    "royal.footer.enquire": "استفسر الآن",
    "royal.footer.contact": "اتصل بنا",
    "royal.footer.download": "تحميل الكتيب",
    "royal.footer.privacy": "سياسة الخصوصية",
    "royal.footer.terms": "الشروط والأحكام",
    "royal.footer.sitemap": "خريطة الموقع",
    "royal.thankYou.title": "شكراً لتواصلك معنا!",
    "royal.thankYou.message": "تم إرسال تسجيلك بنجاح. نحن نقدر تواصلك معنا.",
    "royal.thankYou.backHome": "العودة للصفحة الرئيسية",
    "royal.thankYou.contactUs": "اتصل بنا",
  },
  ru: {
    // Navigation
    "nav.about": "О нас",
    "nav.interior": "Интерьер",
    "nav.location": "Расположение",
    "nav.amenities": "Удобства",
    "nav.contact": "Контакты",
    "nav.developer": "Застройщик",

    // Hero Keywords
    "hero.energy": "Энергия",
    "hero.refinement": "Утонченность",
    "hero.lightness": "Легкость",
    "hero.tagline": "Между морем и небом",

    // Registration Form
    "form.register": "Зарегистрируйте свой интерес",
    "form.phone": "Номер телефона",
    "form.source": "Как вы узнали о нас?",
    "form.unitType": "Тип квартиры",
    "form.bedrooms": "Количество спален",
    "form.budget": "Бюджет",
    "form.submit": "Отправить",
    "form.apartment": "Квартира",
    "form.townhouse": "Таунхаус",
    "form.duplex": "Дуплекс Пентхаус",

    // Main Hero
    "main.title": "Между морем и небом",
    "main.subtitle": "Жизнь на набережной, подписанная морем и небом.",
    "main.description":
      "Расположенный в точке встречи моря и неба, Seamont черпает вдохновение в вечных ритмах элементов, создавая идеальное чувство баланса. С культурным районом Саадият в качестве фона, морем и небом в качестве рамки и мировой роскошью в качестве текстуры, это жизнь на набережной, возвышенная.",
    "main.location": "Расположение",
    "main.locationValue": "Остров Шамс Рим",
    "main.handover": "Сдача",
    "main.handoverValue": "Q4 2028",
    "main.units": "Квартиры",
    "main.unitsValue1": "Квартиры с 1-3 спальнями",
    "main.unitsValue2": "Дуплексы и таунхаусы с 4 спальнями",
    "main.marriott": "Часть коллекции Autograph Collection от Marriott",
    "main.enquire": "Узнать больше",
    "main.brochure": "Скачать брошюру",

    // Features
    "features.title":
      "Пространство для просветления — где море, небо и я выравниваются.",
    "features.sea": "Море",
    "features.seaDesc": "Бесконечная синева впереди.",
    "features.sky": "Небо",
    "features.skyDesc": "Вечные оттенки выше.",
    "features.discover": "Узнать больше",
    "features.wonder": "Где каждое окно открывается к чуду.",
    "features.autograph": "Коллекция Autograph.",
    "features.hotel": "Гостиничный стиль жизни, дома.",
    "features.hotelDesc":
      "Как резиденция коллекции Autograph, каждая квартира в Seamont включает членство в Marriott Bonvoy. Это обещание роскошных, престижных и персонализированных удобств и услуг, таких как консьерж-сервис, парковка, услуги à la carte и многое другое.",
    "features.register": "Зарегистрироваться",

    // Location
    "location.title": "Расстояния в пути.",
    "location.subtitle": "Все, что можно открыть между морем и небом.",
    "location.description":
      "Центрально расположен в сердце Абу-Даби, в непосредственной близости от центра Абу-Даби, острова Мариях и острова Саадият — все в нескольких минутах.",

    // Amenities
    "amenities.title": "Каждая деталь — это жест заботы и тихой грации.",
    "amenities.learn": "Узнать больше",

    // Developer
    "developer.title": "Естественное слияние мечты и дизайна",
    "developer.description":
      "Seamont появляется как дальновидное сотрудничество между Royal Development Holding и SAAS, готовое изменить ландшафт недвижимости, сочетая инновации с честностью. Это партнерство объединяет наследие Royal Development Holding доверия, совершенства и проектов, ориентированных на образ жизни, с приверженностью SAAS эмпатичному дизайну и отличительным, просторным свойствам.",

    // Footer
    "footer.tagline": "Жизнь на набережной, подписанная морем и небом.",
    "footer.contact": "Контакты",
    "footer.phone": "800 219",
    "footer.address": "Остров Шамс Рим, Абу-Даби",
    "footer.quickLinks": "Быстрые ссылки",
    "footer.copyright": "Авторские права © 2025 Seamont",
    "footer.privacy": "Политика конфиденциальности",
    "footer.disclaimer":
      'Seamont, резиденции коллекции Autograph, остров Рим, Абу-Даби не принадлежат, не разрабатываются и не продаются Marriott International, Inc. или ее аффилированными лицами ("Marriott"). Royal Development Holding использует знаки коллекции Autograph по лицензии от Marriott, которая не подтвердила точность каких-либо заявлений или представлений, сделанных здесь.',

    // Royal Atlantis Page
    "royal.nav.home": "ГЛАВНАЯ",
    "royal.nav.location": "РАСПОЛОЖЕНИЕ",
    "royal.nav.amenities": "УДОБСТВА",
    "royal.nav.gallery": "ГАЛЕРЕЯ",
    "royal.nav.contact": "СВЯЗАТЬСЯ С НАМИ",
    "royal.nav.enquire": "УЗНАТЬ БОЛЬШЕ",
    "royal.tagline": "РЕЗИДЕНЦИЯ ROYAL ATLANTIS",
    "royal.hero.title": "Утонченность",
    "royal.hero.subtitle": "НОВОЕ ИСКУССТВО ЖИЗНИ",
    "royal.hero.scroll": "ПРОКРУТИТЬ",
    "royal.form.propertyType": "ТИП НЕДВИЖИМОСТИ",
    "royal.form.bedrooms": "СПАЛЬНИ",
    "royal.form.bathrooms": "ВАННЫЕ",
    "royal.form.priceRange": "ЦЕНОВОЙ ДИАПАЗОН",
    "royal.form.area": "ПЛОЩАДЬ (КВ. ФУТ)",
    "royal.form.status": "СТАТУС",
    "royal.form.view": "ВИД",
    "royal.form.amenities": "УДОБСТВА",
    "royal.form.features": "ОСОБЕННОСТИ",
    "royal.form.location": "РАСПОЛОЖЕНИЕ",
    "royal.form.search": "ПОИСК",
    "royal.form.select": "Выбрать",
    "royal.waterfront.title": "ЖИЗНЬ НА НАБЕРЕЖНОЙ, ПОДПИСАННАЯ МОРЕМ И НЕБОМ.",
    "royal.waterfront.desc1":
      "Расположенный в точке встречи моря и неба, Seamont черпает вдохновение в вечных ритмах элементов, создавая идеальное чувство баланса.",
    "royal.waterfront.desc2":
      "С культурным районом Саадият в качестве фона, морем и небом в качестве рамки и мировой роскошью в качестве текстуры, это жизнь на набережной, возвышенная.",
    "royal.waterfront.explore": "ИССЛЕДОВАТЬ КВАРТИРЫ",
    "royal.waterfront.brochure": "СКАЧАТЬ БРОШЮРУ",
    "royal.enlightenment.title":
      "ПРОСТРАНСТВО ДЛЯ ПРОСВЕТЛЕНИЯ — ГДЕ МОРЕ, НЕБО И Я ВЫРАВНИВАЮТСЯ.",
    "royal.enlightenment.viewGallery": "ПОСМОТРЕТЬ ГАЛЕРЕЮ",
    "royal.window.title": "ГДЕ КАЖДОЕ ОКНО ОТКРЫВАЕТСЯ К ЧУДУ.",
    "royal.hotel.title": "ГОСТИНИЧНЫЙ СТИЛЬ ЖИЗНИ, ДОМА.",
    "royal.hotel.desc":
      "Как резиденция коллекции Autograph, каждая квартира в Seamont включает членство в Marriott Bonvoy. Это обещание роскошных, престижных и персонализированных удобств и услуг, таких как консьерж-сервис, парковка, услуги à la carte и многое другое.",
    "royal.hotel.explore": "ИССЛЕДОВАТЬ УДОБСТВА",
    "royal.discover.title": "ВСЕ, ЧТО МОЖНО ОТКРЫТЬ МЕЖДУ МОРЕМ И НЕБОМ.",
    "royal.discover.desc":
      "Центрально расположен в сердце Абу-Даби, в непосредственной близости от центра Абу-Даби, острова Мариях и острова Саадият — все в нескольких минутах.",
    "royal.discover.masterplan": "ПОСМОТРЕТЬ ГЕНПЛАН",
    "royal.care.title": "КАЖДАЯ ДЕТАЛЬ — ЭТО ЖЕСТ ЗАБОТЫ И ТИХОЙ ГРАЦИИ.",
    "royal.care.viewAll": "ПОСМОТРЕТЬ ВСЕ УДОБСТВА",
    "royal.dreams.title": "ЕСТЕСТВЕННОЕ СЛИЯНИЕ МЕЧТЫ И ДИЗАЙНА",
    "royal.dreams.desc":
      "Seamont появляется как дальновидное сотрудничество между Royal Development Holding и SAAS, готовое изменить ландшафт недвижимости, сочетая инновации с честностью. Это партнерство объединяет наследие Royal Development Holding доверия, совершенства и проектов, ориентированных на образ жизни, с приверженностью SAAS эмпатичному дизайну и отличительным, просторным свойствам.",
    "royal.footer.enquire": "УЗНАТЬ БОЛЬШЕ",
    "royal.footer.contact": "СВЯЗАТЬСЯ С НАМИ",
    "royal.footer.download": "СКАЧАТЬ БРОШЮРУ",
    "royal.footer.privacy": "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
    "royal.footer.terms": "УСЛОВИЯ И ПОЛОЖЕНИЯ",
    "royal.footer.sitemap": "КАРТА САЙТА",
    "royal.thankYou.title": "Спасибо, что связались с нами!",
    "royal.thankYou.message":
      "Ваша регистрация была успешно отправлена. Мы ценим, что вы обратились к нам.",
    "royal.thankYou.backHome": "ВЕРНУТЬСЯ НА ГЛАВНУЮ",
    "royal.thankYou.contactUs": "СВЯЗАТЬСЯ С НАМИ",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    if (
      savedLang &&
      (savedLang === "en" || savedLang === "ar" || savedLang === "ru")
    ) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted) {
      localStorage.setItem("language", lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    const langTranslations = translations[language] as Record<string, string>;
    return langTranslations[key] || key;
  };

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default values during SSR
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: string) => {
        const lang = "en" as Language;
        const langTranslations = translations[lang] as Record<string, string>;
        return langTranslations[key] || key;
      },
    };
  }
  return context;
}
