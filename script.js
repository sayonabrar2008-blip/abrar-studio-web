const STUDIO_WHATSAPP = "8801924272624";

const packagesCatalog = [
  {
    id: "starter",
    tabLabel: {
      en: "Starter Page ($25 / ৳2,500)",
      es: "Inicial ($25 / ৳2,500)",
      fr: "Essentiel ($25 / ৳2,500)",
      ar: "أساسية ($25 / ৳2,500)"
    },
    badge: { en: "Beginner Friendly", es: "Ideal para Empezar", fr: "Debutant", ar: "مناسبة للبداية" },
    price: "$25 (৳2,500)",
    delivery: { en: "2–3 days", es: "2–3 dias", fr: "2–3 jours", ar: "2–3 أيام" },
    title: {
      en: "Single-Page Website & Order Form",
      es: "Web de Una Pagina y Formulario",
      fr: "Page Unique et Formulaire",
      ar: "موقع صفحة واحدة ونموذج طلب"
    },
    desc: {
      en: "Clean mobile-friendly page with hero banner, service highlights, and order form.",
      es: "Pagina adaptable a moviles con portada, servicios y formulario de pedido.",
      fr: "Page responsive avec banniere, services et formulaire de commande.",
      ar: "صفحة متجاوبة مع الجوال بواجهة رئيسية وأقسام خدمات ونموذج طلب."
    },
    features: {
      en: ["Responsive layout & clean spacing", "Order brief with required WhatsApp field", "Basic setup & preview check"],
      es: ["Diseno adaptable y limpio", "Formulario con WhatsApp obligatorio", "Revision visual inicial"],
      fr: ["Mise en page responsive soignee", "Formulaire avec WhatsApp requis", "Apercu et ajustements de base"],
      ar: ["تنسيق متجاوب ومسافات نظيفة", "نموذج طلب مع واتساب إلزامي", "معاينة وضبط أساسي"]
    }
  },
  {
    id: "business",
    tabLabel: {
      en: "Business & Multi-Lang ($55 / ৳5,500)",
      es: "Negocio ($55 / ৳5,500)",
      fr: "Business ($55 / ৳5,500)",
      ar: "أعمال ولغات ($55 / ৳5,500)"
    },
    badge: { en: "Most Popular", es: "Mas Popular", fr: "Populaire", ar: "الأكثر طلباً" },
    price: "$55 (৳5,500)",
    delivery: { en: "4–5 days", es: "4–5 dias", fr: "4–5 jours", ar: "4–5 أيام" },
    title: {
      en: "Multi-Language Order & Status Site",
      es: "Web Multiidioma y Seguimiento",
      fr: "Site Multilingue et Suivi",
      ar: "موقع متعدد اللغات ومتابعة الطلب"
    },
    desc: {
      en: "Includes language switcher (with RTL support), package tabs, and client order status view.",
      es: "Incluye selector de idioma (con RTL), pestanas de paquetes y vista de estado.",
      fr: "Inclut selecteur de langue (avec RTL), onglets d'offres et suivi de commande.",
      ar: "يشمل مبدل اللغات (مع دعم RTL) وتبويبات الباقات وعرض حالة الطلب."
    },
    features: {
      en: ["Language switcher + RTL support", "Tabbed packages & client profile view", "3-stage order status tracking"],
      es: ["Selector de idioma + soporte RTL", "Pestanas y perfil de pedidos", "Seguimiento en 3 etapas"],
      fr: ["Selecteur de langue + support RTL", "Onglets d'offres et profil client", "Suivi en 3 etapes"],
      ar: ["مبدل اللغات + دعم RTL", "تبويبات الباقات وعرض ملف العميل", "تتبع الطلب عبر 3 مراحل"]
    }
  },
  {
    id: "custom",
    tabLabel: {
      en: "Custom & Fixes ($20 / ৳2,000)",
      es: "Ajustes ($20 / ৳2,000)",
      fr: "Ajustements ($20 / ৳2,000)",
      ar: "تعديلات ($20 / ৳2,000)"
    },
    badge: { en: "Flexible Scope", es: "A Medida", fr: "Sur Mesure", ar: "مرن" },
    price: "$20 (৳2,000)",
    delivery: { en: "1–3 days", es: "1–3 dias", fr: "1–3 jours", ar: "1–3 أيام" },
    title: {
      en: "Custom Requirements & Page Fixes",
      es: "Requisitos Propios y Correcciones",
      fr: "Besoins Specifiques et Corrections",
      ar: "متطلبات خاصة وإصلاحات"
    },
    desc: {
      en: "Share what you want—color tweaks, section updates, layout cleanup, or custom requests.",
      es: "Indica lo que deseas: cambios de color, nuevas secciones, limpieza o ajustes.",
      fr: "Precisez vos besoins : couleurs, sections, nettoyage de mise en page ou corrections.",
      ar: "اكتب ما تريد: تعديل ألوان أو أقسام أو تنسيق أو إصلاحات."
    },
    features: {
      en: ["Custom requirement notes", "Color, spacing & mobile fixes", "Fast turnaround on small tasks"],
      es: ["Notas personalizadas del cliente", "Ajustes de color, espacio y movil", "Entrega rapida en tareas cortas"],
      fr: ["Notes de besoin personnalisees", "Corrections couleurs, espaces et mobile", "Execution rapide sur petites taches"],
      ar: ["ملاحظات متطلبات مخصصة", "ضبط الألوان والمسافات والجوال", "إنجاز سريع للمهام الصغيرة"]
    }
  }
];

const uiText = {
  en: {
    dir: "ltr",
    brandName: "Abrar Studio",
    portalBtn: "Client Login & Status",
    tag: "Beginner-Friendly Web Craft",
    heroTitle: "Clean Websites, Clear Pricing & Live Order Tracking",
    heroSubtitle: "Pick a starter package or send custom requirements—with WhatsApp required and clear order progress stages.",
    heroBtn: "Packages & Order",
    trackBtn: "Check Order Status",
    workspaceTitle: "Packages & Services",
    workspaceSub: "Switch tabs to inspect pricing and scope—built to grow as new skills are added.",
    chooseBtn: "Select This Package",
    formTitle: "Place an Order",
    formSubtitle: "WhatsApp number is required so we can confirm project details quickly.",
    labelName: "Your Name",
    labelWhatsapp: "WhatsApp Number (Required)",
    labelClientEmail: "Your Email (Optional)",
    labelPackage: "Select Package",
    labelRequirements: "What Do You Want? (Your Requirements)",
    submitBtn: "Submit Order & Send to WhatsApp",
    contactCardTitle: "Direct Contact & Socials",
    contactCardSub: "Reach out directly for quick project discussion.",
    phoneLabel: "Phone / WhatsApp",
    socialLabel: "Social Profiles",
    portalBadge: "Client Profile & Progress",
    portalTitle: "Client Login & Order Status",
    portalSub: "Log in with your name or WhatsApp number to view your profile orders and 3-stage progress.",
    loginBtn: "Login to Profile",
    logoutBtn: "Logout",
    footerBio: "Starter websites, clear pricing & step-by-step progress.",
    footerCopy: "© 2026 Abrar Studio. All rights reserved.",
    stages: { not_started: "1. Not Started", in_progress: "2. In Progress", completed: "3. Completed" },
    savedMsg: "Order #{id} prepared for {name}! WhatsApp is opening to send your order details directly to Abrar Studio.",
    noOrdersMsg: "No orders found for this profile yet. Submit an order above to see it here."
  },
  es: {
    dir: "ltr", brandName: "Abrar Studio", portalBtn: "Acceso Cliente y Estado",
    tag: "Desarrollo Web Paso a Paso", heroTitle: "Webs Limpias, Precios Claros y Seguimiento",
    heroSubtitle: "Elige un paquete o envia tus requisitos—con WhatsApp obligatorio y 3 etapas de avance.",
    heroBtn: "Paquetes y Pedido", trackBtn: "Ver Estado del Pedido", workspaceTitle: "Paquetes y Servicios",
    workspaceSub: "Cambia de pestana para ver precios y alcance—listo para sumar nuevas habilidades.",
    chooseBtn: "Elegir Este Paquete", formTitle: "Hacer un Pedido",
    formSubtitle: "El numero de WhatsApp es obligatorio para confirmar detalles rapido.",
    labelName: "Tu Nombre", labelWhatsapp: "Numero de WhatsApp (Obligatorio)", labelClientEmail: "Tu Correo (Opcional)",
    labelPackage: "Seleccionar Paquete", labelRequirements: "Que Quieres? (Tus Requisitos)",
    submitBtn: "Enviar Pedido por WhatsApp", contactCardTitle: "Contacto Directo y Redes",
    contactCardSub: "Escribenos directamente para hablar de tu proyecto.", phoneLabel: "Telefono / WhatsApp",
    socialLabel: "Redes Sociales", portalBadge: "Perfil del Cliente y Avance",
    portalTitle: "Acceso Cliente y Estado del Pedido",
    portalSub: "Inicia sesion con tu nombre o WhatsApp para ver tus pedidos y las 3 etapas.",
    loginBtn: "Entrar al Perfil", logoutBtn: "Salir", footerBio: "Webs iniciales, precios claros y seguimiento por etapas.",
    footerCopy: "© 2026 Abrar Studio. Todos los derechos reservados.",
    stages: { not_started: "1. No Iniciado", in_progress: "2. En Proceso", completed: "3. Completado" },
    savedMsg: "Pedido #{id} listo para {name}. Se abrira WhatsApp para enviar los detalles a Abrar Studio.",
    noOrdersMsg: "Aun no hay pedidos en este perfil. Envia un pedido arriba para verlo aqui."
  },
  fr: {
    dir: "ltr", brandName: "Abrar Studio", portalBtn: "Connexion Client et Suivi",
    tag: "Creation Web Accessible", heroTitle: "Sites Clairs, Tarifs Visibles et Suivi de Commande",
    heroSubtitle: "Choisissez une offre ou envoyez vos besoins—avec WhatsApp obligatoire et 3 etapes.",
    heroBtn: "Offres et Commande", trackBtn: "Voir le Suivi", workspaceTitle: "Offres et Services",
    workspaceSub: "Changez d'onglet pour voir les tarifs—concu pour evoluer avec de nouvelles competences.",
    chooseBtn: "Choisir Cette Offre", formTitle: "Passer Commande",
    formSubtitle: "Le numero WhatsApp est obligatoire pour confirmer rapidement.",
    labelName: "Votre Nom", labelWhatsapp: "Numero WhatsApp (Obligatoire)", labelClientEmail: "Votre E-mail (Facultatif)",
    labelPackage: "Choisir l'Offre", labelRequirements: "Que Souhaitez-Vous ? (Vos Besoins)",
    submitBtn: "Envoyer sur WhatsApp", contactCardTitle: "Contact Direct et Reseaux",
    contactCardSub: "Contactez-nous directement pour discuter de votre projet.", phoneLabel: "Telephone / WhatsApp",
    socialLabel: "Reseaux Sociaux", portalBadge: "Profil Client et Avancement",
    portalTitle: "Connexion Client et Etat de Commande",
    portalSub: "Connectez-vous avec votre nom ou WhatsApp pour voir vos commandes et les 3 etapes.",
    loginBtn: "Acceder au Profil", logoutBtn: "Deconnexion", footerBio: "Sites d'initiation, tarifs clairs et suivi etape par etape.",
    footerCopy: "© 2026 Abrar Studio. Tous droits reserves.",
    stages: { not_started: "1. Non Commence", in_progress: "2. En Cours", completed: "3. Termine" },
    savedMsg: "Commande #{id} prete pour {name}. WhatsApp s'ouvre pour envoyer les details a Abrar Studio.",
    noOrdersMsg: "Aucune commande pour ce profil pour l'instant. Envoyez une commande ci-dessus."
  },
  ar: {
    dir: "rtl", brandName: "Abrar Studio", portalBtn: "دخول العميل والحالة",
    tag: "تصميم ويب واضح وميسّر", heroTitle: "مواقع نظيفة وأسعار واضحة ومتابعة للطلب",
    heroSubtitle: "اختر باقة أو أرسل متطلباتك—مع رقم واتساب إلزامي و3 مراحل لتقدم العمل.",
    heroBtn: "الباقات والطلب", trackBtn: "متابعة حالة الطلب", workspaceTitle: "الباقات والخدمات",
    workspaceSub: "بدّل بين التبويبات لمعرفة السعر والتفاصيل—وقابل لإضافة خدمات جديدة لاحقاً.",
    chooseBtn: "اختيار هذه الباقة", formTitle: "إرسال طلب",
    formSubtitle: "رقم واتساب مطلوب لتأكيد تفاصيل المشروع بسرعة.",
    labelName: "الاسم", labelWhatsapp: "رقم واتساب (مطلوب)", labelClientEmail: "بريدك الإلكتروني (اختياري)",
    labelPackage: "اختر الباقة", labelRequirements: "ماذا تريد؟ (متطلباتك)",
    submitBtn: "إرسال الطلب عبر واتساب", contactCardTitle: "تواصل مباشر وحسابات التواصل",
    contactCardSub: "تواصل مباشرة لمناقشة مشروعك بسرعة.", phoneLabel: "الهاتف / واتساب", socialLabel: "حسابات التواصل",
    portalBadge: "ملف العميل وتقدم العمل", portalTitle: "دخول العميل وحالة الطلب",
    portalSub: "سجّل الدخول بالاسم أو رقم واتساب لعرض طلباتك ومراحل الإنجاز الثلاث.",
    loginBtn: "دخول إلى الملف", logoutBtn: "خروج", footerBio: "مواقع عملية وأسعار واضحة ومتابعة خطوة بخطوة.",
    footerCopy: "© 2026 Abrar Studio. جميع الحقوق محفوظة.",
    stages: { not_started: "1. لم يبدأ بعد", in_progress: "2. قيد التنفيذ", completed: "3. مكتمل" },
    savedMsg: "تم تجهيز الطلب #{id} باسم {name}. سيفتح واتساب لإرسال التفاصيل مباشرة إلى Abrar Studio.",
    noOrdersMsg: "لا توجد طلبات لهذا الملف حالياً. أرسل طلباً بالأعلى ليظهر هنا."
  }
};

let ordersStore = [];
let activeSession = null;
let currentLang = "en";
let activeTabId = packagesCatalog[0].id;

const tabsBar = document.getElementById("tabsBar");
const tabPanels = document.getElementById("tabPanels");
const packageChoice = document.getElementById("packageChoice");
const langSelect = document.getElementById("langSelect");
const orderForm = document.getElementById("orderForm");
const statusMsg = document.getElementById("statusMsg");
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const loggedUserBadge = document.getElementById("loggedUserBadge");
const clientOrdersArea = document.getElementById("clientOrdersArea");
const openPortalBtn = document.getElementById("openPortalBtn");

function buildShareableStatusUrl(ord) {
  const baseUrl = window.location.href.split("?")[0].split("#")[0];
  const params = new URLSearchParams({
    id: String(ord.id), name: ord.clientName, wp: ord.whatsapp,
    pkg: ord.packageName, req: ord.requirements, stage: ord.stage
  });
  return baseUrl + "?" + params.toString() + "#clientPortal";
}

function loadOrderFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const nameParam = params.get("name");
  const wpParam = params.get("wp");
  if (!nameParam || !wpParam) return;

  const idParam = Number(params.get("id")) || 101;
  const pkgParam = params.get("pkg") || packagesCatalog[0].tabLabel.en;
  const reqParam = params.get("req") || "Website project order";
  const stageParam = params.get("stage") || "not_started";
  const existing = ordersStore.find((o) => o.id === idParam);

  if (existing) existing.stage = stageParam;
  else ordersStore.push({ id: idParam, clientName: nameParam, whatsapp: wpParam, packageName: pkgParam, requirements: reqParam, stage: stageParam });

  activeSession = { name: nameParam, whatsapp: wpParam };
  document.getElementById("loginName").value = nameParam;
  document.getElementById("loginWhatsapp").value = wpParam;
}

function renderPackages() {
  tabsBar.innerHTML = "";
  tabPanels.innerHTML = "";
  packageChoice.innerHTML = "";

  packagesCatalog.forEach((pkg) => {
    const tabBtn = document.createElement("button");
    tabBtn.type = "button";
    tabBtn.className = "tab-btn" + (pkg.id === activeTabId ? " active" : "");
    tabBtn.textContent = pkg.tabLabel[currentLang] || pkg.tabLabel.en;
    tabBtn.addEventListener("click", () => { activeTabId = pkg.id; renderPackages(); });
    tabsBar.appendChild(tabBtn);

    const panel = document.createElement("div");
    panel.className = "tab-panel" + (pkg.id === activeTabId ? " active" : "");
    const feats = (pkg.features[currentLang] || pkg.features.en).map((item) => "<li>" + item + "</li>").join("");

    panel.innerHTML =
      '<div class="panel-grid">' +
        "<div>" +
          '<span class="pill">' + (pkg.badge[currentLang] || pkg.badge.en) + "</span>" +
          '<div class="price-tag">' + pkg.price + " <span>• " + (pkg.delivery[currentLang] || pkg.delivery.en) + "</span></div>" +
          "<h3>" + (pkg.title[currentLang] || pkg.title.en) + "</h3>" +
          '<p class="panel-desc">' + (pkg.desc[currentLang] || pkg.desc.en) + "</p>" +
          '<ul class="feature-list">' + feats + "</ul>" +
        "</div>" +
        '<div class="panel-cta-card">' +
          '<p class="cta-note">' + uiText[currentLang].chooseBtn + "</p>" +
          '<button type="button" class="btn btn-gold full-btn pick-this-pkg" data-select="' + pkg.tabLabel.en + '">' +
            uiText[currentLang].chooseBtn +
          "</button>" +
        "</div>" +
      "</div>";
    tabPanels.appendChild(panel);

    const opt = document.createElement("option");
    opt.value = pkg.tabLabel.en;
    opt.textContent = pkg.tabLabel[currentLang] || pkg.tabLabel.en;
    packageChoice.appendChild(opt);
  });

  document.querySelectorAll(".pick-this-pkg").forEach((btn) => {
    btn.addEventListener("click", () => {
      packageChoice.value = btn.getAttribute("data-select");
      document.getElementById("orderFormBox").scrollIntoView({ behavior: "smooth" });
      document.getElementById("requirements").focus();
    });
  });
}

function applyLanguage(lang) {
  currentLang = uiText[lang] ? lang : "en";
  const dict = uiText[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = dict.dir;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  renderPackages();
  renderClientOrders();
}

function renderClientOrders() {
  const dict = uiText[currentLang];
  if (!activeSession) {
    loggedUserBadge.hidden = true;
    logoutBtn.hidden = true;
    clientOrdersArea.innerHTML = '<p class="form-sub">' + dict.portalSub + "</p>";
    return;
  }

  loggedUserBadge.hidden = false;
  logoutBtn.hidden = false;
  loggedUserBadge.textContent = activeSession.name + " • " + activeSession.whatsapp;

  const matchingOrders = ordersStore.filter((item) =>
    item.whatsapp.trim() === activeSession.whatsapp.trim() ||
    item.clientName.trim().toLowerCase() === activeSession.name.trim().toLowerCase()
  );

  if (matchingOrders.length === 0) {
    clientOrdersArea.innerHTML = '<p class="form-sub">' + dict.noOrdersMsg + "</p>";
    return;
  }

  const stageOrder = ["not_started", "in_progress", "completed"];
  clientOrdersArea.innerHTML = matchingOrders.map((ord) => {
    const currentIdx = stageOrder.indexOf(ord.stage);
    const stagesHtml = stageOrder.map((stKey, idx) =>
      '<div class="stage-pill ' + (idx <= currentIdx ? "done" : "") + '">' + dict.stages[stKey] + "</div>"
    ).join("");
    const shareUrl = buildShareableStatusUrl(ord);

    return '<div class="order-item">' +
      '<div class="order-item-top"><strong>Order #' + ord.id + " — " + ord.packageName + "</strong><span>" + dict.stages[ord.stage] + "</span></div>" +
      '<p class="order-req">' + ord.requirements + "</p>" +
      '<div class="stages-row">' + stagesHtml + "</div>" +
      '<div class="demo-stage-control"><span>Stage Update:</span>' +
        '<select data-order-id="' + ord.id + '" class="stage-select">' +
          '<option value="not_started"' + (ord.stage === "not_started" ? " selected" : "") + ">" + dict.stages.not_started + "</option>" +
          '<option value="in_progress"' + (ord.stage === "in_progress" ? " selected" : "") + ">" + dict.stages.in_progress + "</option>" +
          '<option value="completed"' + (ord.stage === "completed" ? " selected" : "") + ">" + dict.stages.completed + "</option>" +
        "</select>" +
        '<button type="button" class="btn-mini copy-status-link" data-url="' + shareUrl + '">Copy Client Status Link</button>' +
      "</div></div>";
  }).join("");

  document.querySelectorAll(".stage-select").forEach((sel) => {
    sel.addEventListener("change", (e) => {
      const id = Number(e.target.getAttribute("data-order-id"));
      const targetOrder = ordersStore.find((o) => o.id === id);
      if (targetOrder) { targetOrder.stage = e.target.value; renderClientOrders(); }
    });
  });

  document.querySelectorAll(".copy-status-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const link = btn.getAttribute("data-url");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(link).then(() => {
          btn.textContent = "Link Copied! Send on WhatsApp";
          setTimeout(() => { btn.textContent = "Copy Client Status Link"; }, 2500);
        });
      } else window.prompt("Copy this link and send to client on WhatsApp:", link);
    });
  });
}

langSelect.addEventListener("change", (e) => {
  applyLanguage(e.target.value);
  statusMsg.hidden = true;
});

openPortalBtn.addEventListener("click", () => {
  document.getElementById("clientPortal").scrollIntoView({ behavior: "smooth" });
  document.getElementById("loginName").focus();
});

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dict = uiText[currentLang];
  const nameVal = document.getElementById("name").value.trim();
  const wpVal = document.getElementById("whatsapp").value.trim();
  const emailVal = document.getElementById("emailOptional").value.trim();
  const pkgVal = packageChoice.value;
  const reqVal = document.getElementById("requirements").value.trim();

  const newId = ordersStore.length ? ordersStore[ordersStore.length - 1].id + 1 : 101;
  const newOrder = { id: newId, clientName: nameVal, whatsapp: wpVal, packageName: pkgVal, requirements: reqVal, stage: "not_started" };
  ordersStore.push(newOrder);
  activeSession = { name: nameVal, whatsapp: wpVal };
  document.getElementById("loginName").value = nameVal;
  document.getElementById("loginWhatsapp").value = wpVal;

  const statusLink = buildShareableStatusUrl(newOrder);
  const wpMessage =
    "New Website Order - Abrar Studio\n" +
    "Order ID: #" + newId + "\n" +
    "Name: " + nameVal + "\n" +
    "Client WhatsApp: " + wpVal + "\n" +
    (emailVal ? "Email: " + emailVal + "\n" : "") +
    "Package: " + pkgVal + "\n" +
    "Requirements: " + reqVal + "\n" +
    "Client Portal Link: " + statusLink;
  const waUrl = "https://wa.me/" + STUDIO_WHATSAPP + "?text=" + encodeURIComponent(wpMessage);

  statusMsg.innerHTML = dict.savedMsg.replace("{id}", newId).replace("{name}", nameVal).replace("{wp}", wpVal).replace("{pkg}", pkgVal) +
    ' <br><a href="' + waUrl + '" target="_blank" rel="noopener noreferrer" style="font-weight:700;color:#065f46;text-decoration:underline;">Open WhatsApp Now</a>';
  statusMsg.hidden = false;

  renderClientOrders();
  window.open(waUrl, "_blank", "noopener,noreferrer");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  activeSession = {
    name: document.getElementById("loginName").value.trim(),
    whatsapp: document.getElementById("loginWhatsapp").value.trim()
  };
  renderClientOrders();
});

logoutBtn.addEventListener("click", () => {
  activeSession = null;
  loginForm.reset();
  renderClientOrders();
});

loadOrderFromUrl();
applyLanguage("en");