// ELEMENTUM — i18n system (ES / EN / FR / DE / JA)
// Usage: any element with data-i18n="path.to.key" gets its textContent replaced.
// Attributes: data-i18n-placeholder for placeholder text.

const ELEMENTUM_I18N = {

  es: {
    nav:{ home:"Inicio", samples:"Sounds", soundsets:"Elementum Lab", diy:"DIY KITs", about:"Acerca", community:"Community", coming_soon:"Coming Soon" },
    home:{
      eyebrow:"DIY SYNTHS & SAMPLE ELEMENTS",
      h1_line1:"MOLDEA TU", h1_span:"PROPIO", h1_line2:"SONIDO",
      sub:"ELEMENTUM diseña kits de sintetizadores DIY y sample packs grabados desde materiales reales — metal, agua, madera, cobre. Cada producto es un elemento en su tabla propia: crudo, funcional, tuyo.",
      cta_primary:"Explorar Elementos", cta_secondary:"Probar el Osciloscopio", scroll:"Novedades",
      releases_eyebrow:"Últimos Lanzamientos", view_more:"Ver Más",
      releases_eyebrow:"Últimos Lanzamientos",
      releases_title:"Sonido,",
      releases_title2:"recién salido del horno",
      view_more:"Ver Más"
    },
    samples:{
      eyebrow:"Catálogo", title_line1:"La Tabla de", title_line2:"Elementos",
      desc:"Ocho elementos, dos familias: kits DIY para construir tu instrumento, y sample packs grabados a partir de materia prima real. Cada tile lleva su número atómico real.",
      filter_all:"Todos", filter_kit:"Kits DIY", filter_pack:"Sample Packs",
      cat_kit:"Kit DIY", cat_pack:"Sample Pack", price_label:"Desde",
      gumroad_eyebrow:"Ultimos Lanzamientos",
      gumroad_title:"Más Sonido,",
      gumroad_title2:"Más Elementos",
      gumroad_note:"Cada tarjeta te lleva directo a su página de Gumroad.",
      tile1:{name:"Sine — Oscilador VCO", desc:"Bobinado a mano, BOM completo, sin SMD."},
      tile2:{name:"Forge — Filtro SVF", desc:"Resonancia hasta autooscilación total."},
      tile3:{name:"Circuit — Starter Eurorack", desc:"Todo para armar tu primer rack de 3 módulos."},
      tile4:{name:"Arc — Secuenciador 8-Step", desc:"CV/Gate, arma tú mismo el panel."},
      tile5:{name:"Hydra — Texturas de Agua", desc:"400 samples granulares grabados con hidrófono."},
      tile6:{name:"Carbon — Fundición de Drums", desc:"600 hits de seis drum machines vintage."},
      tile7:{name:"Oxide — Óxido & Metal", desc:"Grabaciones de campo con micrófono de contacto."},
      tile8:{name:"Nebula — Drones Ambientales", desc:"12GB de camas modulares en evolución constante."}
    },
    soundsets:{
      eyebrow:"Filosofía", title_line1:"Cuatro", title_line2:"Elementos",
      desc:"No hacemos cajas negras. Hacemos instrumentos que puedes abrir, entender y reparar. Estos son los principios que sueldan cada kit.",
      p1:{title:"Hecho para Durar", desc:"Cada kit sale con componentes through-hole y PCBs gruesas. Nada de piezas que se rompen al segundo intento de soldadura."},
      p2:{title:"Ingeniería, no Suposición", desc:"Cada esquema se prueba en banco antes de salir. Documentación real, medidas reales, sin atajos de fábrica."},
      p3:{title:"Señal Antes que Ruido", desc:"Priorizamos el sonido sobre la decoración. Un circuito limpio suena mejor que un panel bonito."},
      p4:{title:"Esquemas Abiertos", desc:"Todo diagrama, BOM y firmware es de código abierto. Tu instrumento, tus modificaciones, sin permisos."}
    },
    acerca:{
      eyebrow:"Acerca de ELEMENTUM", title_line1:"Elementos,", title_line2:"desde cero.",
      desc:"Somos un pequeño laboratorio dedicado a instrumentos que se pueden abrir, entender y reparar. Recibe aviso cuando lancemos un kit o sample pack nuevo, además de guías de construcción y descuentos para early builders.",
      email_placeholder:"tu@email.com", submit:"Suscribirme",
      note:"Sin spam. Un correo por lanzamiento, nada más.",
      success:"¡Gracias! Revisa tu correo para confirmar la suscripción."
    },
    footer:{
      brand_desc:"Kits DIY de sintetizadores y sample packs grabados desde materia prima real. Construido para quien quiere entender lo que suena.",
      col_catalog:"Catálogo", catalog_kits:"Kits DIY", catalog_packs:"Sample Packs", catalog_new:"Novedades",
      col_support:"Soporte", support_guides:"Guías de Construcción", support_bom:"Esquemas & BOM", support_forum:"Foro ELEMENTUM",
      col_connect:"Conecta", connect_instagram:"Instagram", connect_youtube:"YouTube", connect_contact:"Contacto",
      copyright:"© 2026 ELEMENTUM. Todos los derechos reservados.", terms:"Términos", privacy:"Privacidad"
    }
  },

  en: {
    nav:{ home:"Home", samples:"Sounds", soundsets:"Elementum Lab", diy:"DIY KITs", about:"About", community:"Community", coming_soon:"Coming Soon" },
    home:{
      eyebrow:"DIY SYNTHS & SAMPLE ELEMENTS",
      h1_line1:"SOLDER YOUR", h1_span:"OWN", h1_line2:"SOUND",
      sub:"ELEMENTUM designs DIY synthesizer kits and sample packs recorded from real materials — metal, water, wood, copper. Every product is an element on its own table: raw, functional, yours.",
      cta_primary:"Explore Elements", cta_secondary:"Try the Oscilloscope", scroll:"Latest",
      releases_eyebrow:"Latest Releases", view_more:"View More",
      releases_eyebrow:"Latest Releases",
      releases_title:"Sound,",
      releases_title2:"fresh out of the oven",
      view_more:"View More"
    },
    samples:{
      eyebrow:"Catalog", title_line1:"The Table of", title_line2:"Elements",
      desc:"Eight elements, two families: DIY kits to build your instrument, and sample packs recorded from real raw material. Every tile carries its real atomic number.",
      filter_all:"All", filter_kit:"DIY Kits", filter_pack:"Sample Packs",
      cat_kit:"DIY Kit", cat_pack:"Sample Pack", price_label:"From",
      gumroad_eyebrow:"Available on Gumroad",
      gumroad_title:"More Sound,",
      gumroad_title2:"More Elements",
      gumroad_note:"Every card takes you straight to its Gumroad page.",
      tile1:{name:"Sine — VCO Oscillator", desc:"Hand-wound, full BOM, no SMD."},
      tile2:{name:"Forge — SVF Filter", desc:"Resonance up to full self-oscillation."},
      tile3:{name:"Circuit — Eurorack Starter", desc:"Everything to build your first 3-module rack."},
      tile4:{name:"Arc — 8-Step Sequencer", desc:"CV/Gate, build the panel yourself."},
      tile5:{name:"Hydra — Water Textures", desc:"400 granular samples recorded with a hydrophone."},
      tile6:{name:"Carbon — Drum Foundry", desc:"600 hits from six vintage drum machines."},
      tile7:{name:"Oxide — Rust & Metal", desc:"Field recordings made with a contact mic."},
      tile8:{name:"Nebula — Ambient Drones", desc:"12GB of ever-evolving modular beds."}
    },
    soundsets:{
      eyebrow:"Philosophy", title_line1:"Four", title_line2:"Elements",
      desc:"We don't build black boxes. We build instruments you can open, understand, and repair. These are the principles that solder every kit together.",
      p1:{title:"Built to Last", desc:"Every kit ships with through-hole components and thick PCBs. No parts that break on your second soldering attempt."},
      p2:{title:"Engineering, Not Guesswork", desc:"Every schematic is bench-tested before it ships. Real documentation, real measurements, no factory shortcuts."},
      p3:{title:"Signal Before Noise", desc:"We prioritize sound over decoration. A clean circuit sounds better than a pretty panel."},
      p4:{title:"Open Schematics", desc:"Every diagram, BOM, and firmware is open source. Your instrument, your mods, no permissions needed."}
    },
    acerca:{
      eyebrow:"About ELEMENTUM", title_line1:"Elements,", title_line2:"from scratch.",
      desc:"We're a small lab dedicated to instruments you can open, understand, and repair. Get notified when we launch a new kit or sample pack, plus build guides and discounts for early builders.",
      email_placeholder:"you@email.com", submit:"Subscribe",
      note:"No spam. One email per launch, nothing more.",
      success:"Thanks! Check your inbox to confirm your subscription."
    },
    footer:{
      brand_desc:"DIY synthesizer kits and sample packs recorded from real raw material. Built for those who want to understand what they hear.",
      col_catalog:"Catalog", catalog_kits:"DIY Kits", catalog_packs:"Sample Packs", catalog_new:"New Arrivals",
      col_support:"Support", support_guides:"Build Guides", support_bom:"Schematics & BOM", support_forum:"ELEMENTUM Forum",
      col_connect:"Connect", connect_instagram:"Instagram", connect_youtube:"YouTube", connect_contact:"Contact",
      copyright:"© 2026 ELEMENTUM. All rights reserved.", terms:"Terms", privacy:"Privacy"
    }
  },

  fr: {
    nav:{ home:"Accueil", samples:"Sounds", soundsets:"Elementum Lab", diy:"DIY KITs", about:"À propos", community:"Community", coming_soon:"Coming Soon" },
    home:{
      eyebrow:"DIY SYNTHS & SAMPLE ELEMENTS",
      h1_line1:"SOUDE TON", h1_span:"PROPRE", h1_line2:"SON",
      sub:"ELEMENTUM conçoit des kits de synthétiseurs DIY et des sample packs enregistrés à partir de matériaux réels — métal, eau, bois, cuivre. Chaque produit est un élément de sa propre table : brut, fonctionnel, à toi.",
      cta_primary:"Explorer les Éléments", cta_secondary:"Essayer l'Oscilloscope", scroll:"Nouveautés",
      releases_eyebrow:"Dernières Sorties", view_more:"Voir Plus",
      releases_eyebrow:"Dernières Sorties",
      releases_title:"Du son,",
      releases_title2:"tout juste sorti du four",
      view_more:"Voir Plus"
    },
    samples:{
      eyebrow:"Catalogue", title_line1:"Le Tableau des", title_line2:"Éléments",
      desc:"Huit éléments, deux familles : des kits DIY pour construire ton instrument, et des sample packs enregistrés à partir de matière première réelle. Chaque case porte son vrai numéro atomique.",
      filter_all:"Tous", filter_kit:"Kits DIY", filter_pack:"Sample Packs",
      cat_kit:"Kit DIY", cat_pack:"Sample Pack", price_label:"Dès",
      gumroad_eyebrow:"Disponible sur Gumroad",
      gumroad_title:"Plus de Son,",
      gumroad_title2:"Plus d'Éléments",
      gumroad_note:"Chaque carte t'emmène directement vers sa page Gumroad.",
      tile1:{name:"Sine — Oscillateur VCO", desc:"Bobiné à la main, BOM complète, sans CMS."},
      tile2:{name:"Forge — Filtre SVF", desc:"Résonance jusqu'à l'auto-oscillation totale."},
      tile3:{name:"Circuit — Starter Eurorack", desc:"Tout pour monter ton premier rack de 3 modules."},
      tile4:{name:"Arc — Séquenceur 8 pas", desc:"CV/Gate, assemble toi-même le panneau."},
      tile5:{name:"Hydra — Textures d'Eau", desc:"400 samples granulaires enregistrés à l'hydrophone."},
      tile6:{name:"Carbon — Fonderie de Drums", desc:"600 hits issus de six boîtes à rythmes vintage."},
      tile7:{name:"Oxide — Rouille & Métal", desc:"Enregistrements de terrain au micro contact."},
      tile8:{name:"Nebula — Drones Ambiants", desc:"12 Go de nappes modulaires en évolution constante."}
    },
    soundsets:{
      eyebrow:"Philosophie", title_line1:"Quatre", title_line2:"Éléments",
      desc:"On ne fait pas de boîtes noires. On fait des instruments que tu peux ouvrir, comprendre et réparer. Voici les principes qui soudent chaque kit.",
      p1:{title:"Fait pour Durer", desc:"Chaque kit est livré avec des composants traversants et des PCB épais. Aucune pièce qui casse à la deuxième tentative de soudure."},
      p2:{title:"Ingénierie, pas Supposition", desc:"Chaque schéma est testé en atelier avant de partir. Documentation réelle, mesures réelles, aucun raccourci d'usine."},
      p3:{title:"Le Signal Avant le Bruit", desc:"On priorise le son plutôt que la décoration. Un circuit propre sonne mieux qu'un beau panneau."},
      p4:{title:"Schémas Ouverts", desc:"Chaque schéma, BOM et firmware est open source. Ton instrument, tes modifications, sans permission."}
    },
    acerca:{
      eyebrow:"À propos d'ELEMENTUM", title_line1:"Des éléments,", title_line2:"depuis zéro.",
      desc:"Nous sommes un petit laboratoire dédié aux instruments que tu peux ouvrir, comprendre et réparer. Sois averti(e) dès qu'on lance un nouveau kit ou sample pack, avec des guides de montage et des réductions pour les premiers builders.",
      email_placeholder:"toi@email.com", submit:"M'abonner",
      note:"Pas de spam. Un e-mail par lancement, rien de plus.",
      success:"Merci ! Vérifie ta boîte mail pour confirmer l'abonnement."
    },
    footer:{
      brand_desc:"Kits DIY de synthétiseurs et sample packs enregistrés à partir de matière première réelle. Conçu pour ceux qui veulent comprendre ce qu'ils entendent.",
      col_catalog:"Catalogue", catalog_kits:"Kits DIY", catalog_packs:"Sample Packs", catalog_new:"Nouveautés",
      col_support:"Support", support_guides:"Guides de Montage", support_bom:"Schémas & BOM", support_forum:"Forum ELEMENTUM",
      col_connect:"Suivre", connect_instagram:"Instagram", connect_youtube:"YouTube", connect_contact:"Contact",
      copyright:"© 2026 ELEMENTUM. Tous droits réservés.", terms:"Conditions", privacy:"Confidentialité"
    }
  },

  de: {
    nav:{ home:"Start", samples:"Sounds", soundsets:"Elementum Lab", diy:"DIY KITs", about:"Über uns", community:"Community", coming_soon:"Coming Soon" },
    home:{
      eyebrow:"DIY SYNTHS & SAMPLE ELEMENTS",
      h1_line1:"LÖTE DEINEN", h1_span:"EIGENEN", h1_line2:"SOUND",
      sub:"ELEMENTUM entwickelt DIY-Synthesizer-Kits und Sample-Packs, aufgenommen aus echten Materialien — Metall, Wasser, Holz, Kupfer. Jedes Produkt ist ein Element in seiner eigenen Tabelle: roh, funktional, deins.",
      cta_primary:"Elemente entdecken", cta_secondary:"Oszilloskop testen", scroll:"Neuheiten",
      releases_eyebrow:"Neueste Veröffentlichungen", view_more:"Mehr Sehen"
    },
    samples:{
      eyebrow:"Katalog", title_line1:"Das Periodensystem der", title_line2:"Elemente",
      desc:"Acht Elemente, zwei Familien: DIY-Kits zum Bau deines Instruments und Sample-Packs, aufgenommen aus echtem Rohmaterial. Jede Kachel trägt ihre echte Ordnungszahl.",
      filter_all:"Alle", filter_kit:"DIY-Kits", filter_pack:"Sample Packs",
      cat_kit:"DIY-Kit", cat_pack:"Sample Pack", price_label:"Ab",
      gumroad_eyebrow:"Erhältlich auf Gumroad",
      gumroad_title:"Mehr Sound,",
      gumroad_title2:"Mehr Elemente",
      gumroad_note:"Jede Karte führt dich direkt zur jeweiligen Gumroad-Seite.",
      tile1:{name:"Sine — VCO-Oszillator", desc:"Handgewickelt, vollständige Stückliste, keine SMD-Teile."},
      tile2:{name:"Forge — SVF-Filter", desc:"Resonanz bis zur vollständigen Selbstschwingung."},
      tile3:{name:"Circuit — Eurorack-Starter", desc:"Alles für dein erstes 3-Modul-Rack."},
      tile4:{name:"Arc — 8-Step-Sequencer", desc:"CV/Gate, das Panel baust du selbst zusammen."},
      tile5:{name:"Hydra — Wasser-Texturen", desc:"400 granulare Samples, aufgenommen mit einem Hydrofon."},
      tile6:{name:"Carbon — Drum-Foundry", desc:"600 Hits aus sechs Vintage-Drum-Machines."},
      tile7:{name:"Oxide — Rost & Metall", desc:"Feldaufnahmen mit Kontaktmikrofon."},
      tile8:{name:"Nebula — Ambient-Drones", desc:"12 GB stetig wachsende modulare Klangflächen."}
    },
    soundsets:{
      eyebrow:"Philosophie", title_line1:"Vier", title_line2:"Elemente",
      desc:"Wir bauen keine Blackboxes. Wir bauen Instrumente, die du öffnen, verstehen und reparieren kannst. Das sind die Prinzipien, die jedes Kit zusammenlöten.",
      p1:{title:"Gebaut für die Ewigkeit", desc:"Jedes Kit kommt mit bedrahteten Bauteilen und dicken Platinen. Keine Teile, die beim zweiten Lötversuch kaputtgehen."},
      p2:{title:"Technik, keine Vermutung", desc:"Jeder Schaltplan wird vor dem Versand am Prüfstand getestet. Echte Dokumentation, echte Messwerte, keine Werksabkürzungen."},
      p3:{title:"Signal vor Rauschen", desc:"Wir priorisieren den Klang über die Optik. Eine saubere Schaltung klingt besser als ein hübsches Panel."},
      p4:{title:"Offene Schaltpläne", desc:"Jeder Plan, jede Stückliste und Firmware ist Open Source. Dein Instrument, deine Änderungen, ohne Erlaubnis."}
    },
    acerca:{
      eyebrow:"Über ELEMENTUM", title_line1:"Elemente,", title_line2:"von Grund auf.",
      desc:"Wir sind ein kleines Labor für Instrumente, die man öffnen, verstehen und reparieren kann. Erfahre als Erstes, wenn wir ein neues Kit oder Sample-Pack starten, plus Bauanleitungen und Rabatte für frühe Builder.",
      email_placeholder:"du@email.com", submit:"Abonnieren",
      note:"Kein Spam. Eine E-Mail pro Launch, nicht mehr.",
      success:"Danke! Bestätige dein Abo über die E-Mail in deinem Postfach."
    },
    footer:{
      brand_desc:"DIY-Synthesizer-Kits und Sample-Packs, aufgenommen aus echtem Rohmaterial. Gebaut für alle, die verstehen wollen, was sie hören.",
      col_catalog:"Katalog", catalog_kits:"DIY-Kits", catalog_packs:"Sample Packs", catalog_new:"Neuheiten",
      col_support:"Support", support_guides:"Bauanleitungen", support_bom:"Schaltpläne & Stücklisten", support_forum:"ELEMENTUM-Forum",
      col_connect:"Verbinden", connect_instagram:"Instagram", connect_youtube:"YouTube", connect_contact:"Kontakt",
      copyright:"© 2026 ELEMENTUM. Alle Rechte vorbehalten.", terms:"AGB", privacy:"Datenschutz"
    }
  },

  ja: {
    nav:{ home:"ホーム", samples:"Sounds", soundsets:"Elementum Lab", diy:"DIY KITs", about:"概要", community:"コミュニティ", coming_soon:"Coming Soon" },
    home:{
      eyebrow:"DIY SYNTHS & SAMPLE ELEMENTS",
      h1_line1:"自分だけの", h1_span:"サウンドを", h1_line2:"組み立てろ",
      sub:"ELEMENTUMは、金属・水・木・銅など実際の素材から録音されたDIYシンセサイザーキットとサンプルパックを設計しています。すべての製品は独自の元素表の一部——生々しく、機能的で、あなただけのもの。",
      cta_primary:"エレメントを見る", cta_secondary:"オシロスコープを試す", scroll:"新着",
      releases_eyebrow:"最新リリース", view_more:"もっと見る"
    },
    samples:{
      eyebrow:"カタログ", title_line1:"エレメントの", title_line2:"周期表",
      desc:"8つのエレメント、2つのファミリー：楽器を自作するDIYキットと、実際の素材から録音されたサンプルパック。各タイルには実際の原子番号が付いています。",
      filter_all:"すべて", filter_kit:"DIYキット", filter_pack:"サンプルパック",
      cat_kit:"DIYキット", cat_pack:"サンプルパック", price_label:"から",
      gumroad_eyebrow:"Gumroadで購入可能",
      gumroad_title:"もっとサウンドを、",
      gumroad_title2:"もっとエレメントを",
      gumroad_note:"各カードから直接Gumroadのページに移動します。",
      tile1:{name:"Sine — VCOオシレーター", desc:"手巻き、完全なBOM付き、SMDなし。"},
      tile2:{name:"Forge — SVFフィルター", desc:"完全な自己発振までのレゾナンス。"},
      tile3:{name:"Circuit — ユーロラックスターター", desc:"最初の3モジュールラックを組むために必要なすべて。"},
      tile4:{name:"Arc — 8ステップシーケンサー", desc:"CV/Gate対応、パネルは自分で組み立てます。"},
      tile5:{name:"Hydra — 水のテクスチャー", desc:"ハイドロフォンで録音した400のグラニュラーサンプル。"},
      tile6:{name:"Carbon — ドラムファウンドリー", desc:"6台のヴィンテージドラムマシンから600ヒット。"},
      tile7:{name:"Oxide — 錆と金属", desc:"コンタクトマイクによるフィールドレコーディング。"},
      tile8:{name:"Nebula — アンビエントドローン", desc:"進化し続けるモジュラーベッド12GB。"}
    },
    soundsets:{
      eyebrow:"哲学", title_line1:"4つの", title_line2:"エレメント",
      desc:"私たちはブラックボックスを作りません。開けて、理解して、修理できる楽器を作ります。これが、すべてのキットを組み立てる原則です。",
      p1:{title:"長く使えるように", desc:"すべてのキットにはスルーホール部品と厚いPCBが付属します。2回目のはんだ付けで壊れる部品はありません。"},
      p2:{title:"推測ではなくエンジニアリング", desc:"すべての回路図は出荷前にベンチテストされます。実際のドキュメント、実際の測定値、工場の近道はありません。"},
      p3:{title:"ノイズよりシグナル", desc:"装飾より音を優先します。きれいなパネルよりクリーンな回路の方が良い音がします。"},
      p4:{title:"オープンな回路図", desc:"すべての図面、BOM、ファームウェアはオープンソースです。あなたの楽器、あなたの改造、許可は不要です。"}
    },
    acerca:{
      eyebrow:"ELEMENTUMについて", title_line1:"エレメントを、", title_line2:"ゼロから。",
      desc:"私たちは、開けて、理解して、修理できる楽器のための小さなラボです。新しいキットやサンプルパックを発売する際の通知、ビルドガイド、早期購入者向けの割引をお届けします。",
      email_placeholder:"you@email.com", submit:"登録する",
      note:"スパムはありません。発売ごとに1通のメールのみ。",
      success:"ありがとうございます！受信箱で登録を確認してください。"
    },
    footer:{
      brand_desc:"実際の素材から録音されたDIYシンセサイザーキットとサンプルパック。音の仕組みを理解したい人のために作られました。",
      col_catalog:"カタログ", catalog_kits:"DIYキット", catalog_packs:"サンプルパック", catalog_new:"新着",
      col_support:"サポート", support_guides:"ビルドガイド", support_bom:"回路図とBOM", support_forum:"ELEMENTUMフォーラム",
      col_connect:"つながる", connect_instagram:"Instagram", connect_youtube:"YouTube", connect_contact:"お問い合わせ",
      copyright:"© 2026 ELEMENTUM. All rights reserved.", terms:"利用規約", privacy:"プライバシー"
    }
  }
};

const ELEMENTUM_LANG_NAMES = { es:"ES", en:"EN", fr:"FR", de:"DE", ja:"JA" };

function elementumGetLang(){
  const saved = localStorage.getItem('elementum_lang');
  if(saved && ELEMENTUM_I18N[saved]) return saved;
  const nav = (navigator.language || 'es').slice(0,2).toLowerCase();
  return ELEMENTUM_I18N[nav] ? nav : 'es';
}

function elementumResolve(dict, path){
  return path.split('.').reduce((acc,k)=> (acc && acc[k]!==undefined) ? acc[k] : undefined, dict);
}

function elementumApplyLang(lang){
  if(!ELEMENTUM_I18N[lang]) lang = 'es';
  const dict = ELEMENTUM_I18N[lang];
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('elementum_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const val = elementumResolve(dict, el.getAttribute('data-i18n'));
    if(val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const val = elementumResolve(dict, el.getAttribute('data-i18n-placeholder'));
    if(val !== undefined) el.setAttribute('placeholder', val);
  });

  const langBtn = document.getElementById('langBtn');
  if(langBtn) langBtn.textContent = ELEMENTUM_LANG_NAMES[lang];
  document.querySelectorAll('.lang-menu button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  elementumApplyLang(elementumGetLang());

  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  if(langBtn && langMenu){
    langBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const open = langMenu.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', open);
      document.getElementById('communityMenu')?.classList.remove('open');
    });
    langMenu.querySelectorAll('button').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        elementumApplyLang(btn.dataset.lang);
        langMenu.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
