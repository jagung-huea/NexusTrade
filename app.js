/**
 * NexusTrade - Main Application Logic
 * UniPin-Style Top-Up & Gaming Escrow Platform
 */

// 1. GAME DATA STORE
const GAMES_DATA = {
  mlbb: {
    id: 'mlbb',
    name: 'Mobile Legends: Bang Bang',
    publisher: 'Moonton',
    category: 'mobile',
    icon: 'img/mlbb_icon.png',
    banner: 'img/mlbb_banner.png',
    idPlaceholder: 'Masukkan User ID (Contoh: 12345678)',
    zonePlaceholder: 'Zone ID (Contoh: 2026)',
    hasZone: true,
    packages: [
      { id: 'mlbb_pass', name: 'Weekly Diamond Pass', price: 28500, hot: true },
      { id: 'mlbb_86', name: '86 Diamonds (78+8 Bonus)', price: 21500 },
      { id: 'mlbb_172', name: '172 Diamonds (156+16 Bonus)', price: 42000 },
      { id: 'mlbb_257', name: '257 Diamonds (234+23 Bonus)', price: 62500, hot: true },
      { id: 'mlbb_706', name: '706 Diamonds (625+81 Bonus)', price: 168000 },
      { id: 'mlbb_2195', name: '2195 Diamonds (1860+335 Bonus)', price: 495000 },
      { id: 'mlbb_twilight', name: 'Twilight Pass', price: 145000 }
    ]
  },
  ff: {
    id: 'ff',
    name: 'Free Fire',
    publisher: 'Garena',
    category: 'mobile',
    icon: 'img/ff_icon.jpg',
    banner: 'img/ff_banner.png',
    idPlaceholder: 'Masukkan Player ID (Contoh: 987654321)',
    hasZone: false,
    packages: [
      { id: 'ff_70', name: '70 Diamonds', price: 9500 },
      { id: 'ff_140', name: '140 Diamonds', price: 19000, hot: true },
      { id: 'ff_355', name: '355 Diamonds', price: 47500 },
      { id: 'ff_720', name: '720 Diamonds', price: 95000, hot: true },
      { id: 'ff_1450', name: '1450 Diamonds', price: 190000 },
      { id: 'ff_member', name: 'Membership Mingguan FF', price: 29000 },
      { id: 'ff_shells', name: '100 Garena Shells', price: 33000 }
    ]
  },
  pubg: {
    id: 'pubg',
    name: 'PUBG Mobile',
    publisher: 'Level Infinite',
    category: 'mobile',
    icon: 'img/pubg_icon.jpg',
    banner: 'img/pubg_banner.png',
    idPlaceholder: 'Masukkan Character ID (Contoh: 5123456789)',
    hasZone: false,
    packages: [
      { id: 'pubg_60', name: '60 Unknown Cash (UC)', price: 14500 },
      { id: 'pubg_325', name: '300 + 25 UC', price: 72000, hot: true },
      { id: 'pubg_660', name: '600 + 60 UC (Royale Pass)', price: 144000, hot: true },
      { id: 'pubg_1800', name: '1500 + 300 UC', price: 360000 },
      { id: 'pubg_3850', name: '3000 + 850 UC', price: 720000 }
    ]
  },
  hok: {
    id: 'hok',
    name: 'Honor of Kings',
    publisher: 'Level Infinite',
    category: 'mobile',
    icon: 'img/hok_icon.png',
    banner: 'img/mlbb_banner.png',
    idPlaceholder: 'Masukkan Player ID Honor of Kings',
    hasZone: false,
    packages: [
      { id: 'hok_80', name: '80 Tokens', price: 14000 },
      { id: 'hok_240', name: '240 + 17 Tokens', price: 42000, hot: true },
      { id: 'hok_400', name: '400 + 32 Tokens', price: 70000 },
      { id: 'hok_800', name: '800 + 85 Tokens', price: 140000, hot: true },
      { id: 'hok_weekly', name: 'Weekly Card Plus HOK', price: 28000 }
    ]
  },
  roblox: {
    id: 'roblox',
    name: 'Roblox (Robux & Gift Card)',
    publisher: 'Roblox Corporation',
    category: 'pc',
    icon: 'img/roblox_icon.png',
    banner: 'img/roblox_banner.png',
    idPlaceholder: 'Masukkan Roblox Username (Bukan Display Name)',
    hasZone: false,
    packages: [
      { id: 'rbx_80', name: '80 Robux Instant', price: 15500 },
      { id: 'rbx_400', name: '400 Robux Fast', price: 74000, hot: true },
      { id: 'rbx_800', name: '800 Robux', price: 145000, hot: true },
      { id: 'rbx_1700', name: '1700 Robux', price: 295000 },
      { id: 'rbx_gift_100k', name: 'Roblox Gift Card IDR 100K', price: 100000 }
    ]
  },
  genshin: {
    id: 'genshin',
    name: 'Genshin Impact',
    publisher: 'HoYoverse',
    category: 'mobile',
    icon: 'img/genshin_icon.png',
    banner: 'img/hsr_banner.png',
    idPlaceholder: 'Masukkan UID Genshin Impact',
    zonePlaceholder: 'Pilih Server (Asia / America / Europe / TW)',
    hasZone: true,
    packages: [
      { id: 'gi_welkin', name: 'Blessing of the Welkin Moon', price: 74000, hot: true },
      { id: 'gi_60', name: '60 Genesis Crystals', price: 14500 },
      { id: 'gi_300', name: '300 + 30 Genesis Crystals', price: 72500 },
      { id: 'gi_980', name: '980 + 110 Genesis Crystals', price: 228000, hot: true },
      { id: 'gi_1980', name: '1980 + 260 Genesis Crystals', price: 460000 },
      { id: 'gi_3280', name: '3280 + 600 Genesis Crystals', price: 755000 }
    ]
  },
  coc: {
    id: 'coc',
    name: 'Clash of Clans',
    publisher: 'Supercell',
    category: 'mobile',
    icon: 'img/coc_icon.png',
    banner: 'img/pubg_banner.png',
    idPlaceholder: 'Masukkan Player Tag (Contoh: #8Y8R9...)',
    hasZone: false,
    packages: [
      { id: 'coc_goldpass', name: 'Gold Pass Musim Ini', price: 99000, hot: true },
      { id: 'coc_80', name: '80 Gems', price: 15000 },
      { id: 'coc_500', name: '500 Gems', price: 75000 },
      { id: 'coc_1200', name: '1200 Gems', price: 149000, hot: true },
      { id: 'coc_2500', name: '2500 Gems', price: 299000 }
    ]
  },
  fcmobile: {
    id: 'fcmobile',
    name: 'EA SPORTS FC Mobile',
    publisher: 'Electronic Arts',
    category: 'mobile',
    icon: 'img/fcmobile_icon.png',
    banner: 'img/efootball_banner.jpg',
    idPlaceholder: 'Masukkan UID Akun FC Mobile',
    hasZone: false,
    packages: [
      { id: 'fc_100', name: '100 FC Points', price: 15000 },
      { id: 'fc_500', name: '500 FC Points', price: 75000 },
      { id: 'fc_1050', name: '1050 FC Points', price: 148000, hot: true },
      { id: 'fc_2200', name: '2200 FC Points', price: 299000 },
      { id: 'fc_silver', name: 'Silver Pass FC Mobile', price: 79000, hot: true }
    ]
  },
  hsr: {
    id: 'hsr',
    name: 'Honkai: Star Rail',
    publisher: 'HoYoverse',
    category: 'mobile',
    icon: 'img/hsr_icon.png',
    banner: 'img/hsr_banner.png',
    idPlaceholder: 'Masukkan UID Honkai Star Rail',
    zonePlaceholder: 'Pilih Server (Asia / America / Europe)',
    hasZone: true,
    packages: [
      { id: 'hsr_pass', name: 'Express Supply Pass', price: 74000, hot: true },
      { id: 'hsr_60', name: '60 Oneiric Shards', price: 14500 },
      { id: 'hsr_300', name: '300 + 30 Oneiric Shards', price: 72500 },
      { id: 'hsr_980', name: '980 + 110 Oneiric Shards', price: 228000 }
    ]
  },
  valorant: {
    id: 'valorant',
    name: 'Valorant Points',
    publisher: 'Riot Games',
    category: 'pc',
    icon: 'img/valorant_icon.png',
    banner: 'img/hsr_banner.png',
    idPlaceholder: 'Masukkan Riot ID + Tagline (Contoh: Nexus#IDN)',
    hasZone: false,
    packages: [
      { id: 'val_475', name: '475 Points', price: 52000 },
      { id: 'val_1000', name: '1000 Points', price: 105000, hot: true },
      { id: 'val_2050', name: '2050 Points', price: 210000, hot: true },
      { id: 'val_3650', name: '3650 Points', price: 365000 }
    ]
  },
  steam: {
    id: 'steam',
    name: 'Steam Wallet IDR',
    publisher: 'Valve Corp',
    category: 'voucher',
    icon: 'img/steam_icon.png',
    banner: 'img/roblox_banner.png',
    idPlaceholder: 'Masukkan Email Akun Steam / No. WA untuk kode',
    hasZone: false,
    packages: [
      { id: 'stm_12k', name: 'Voucher IDR 12.000', price: 13500 },
      { id: 'stm_45k', name: 'Voucher IDR 45.000', price: 49000 },
      { id: 'stm_90k', name: 'Voucher IDR 90.000', price: 96500, hot: true },
      { id: 'stm_250k', name: 'Voucher IDR 250.000', price: 265000 }
    ]
  },
  googleplay: {
    id: 'googleplay',
    name: 'Kode Voucher Google Play',
    publisher: 'Google INC',
    category: 'voucher',
    icon: 'img/googleplay_icon.jpg',
    banner: 'img/efootball_banner.jpg',
    idPlaceholder: 'Masukkan No. WhatsApp Pengiriman Kode',
    hasZone: false,
    packages: [
      { id: 'gp_20k', name: 'Kode IDR 20.000', price: 20500 },
      { id: 'gp_50k', name: 'Kode IDR 50.000', price: 50900, hot: true },
      { id: 'gp_100k', name: 'Kode IDR 100.000', price: 101000, hot: true },
      { id: 'gp_250k', name: 'Kode IDR 250.000', price: 252000 }
    ]
  },
  pcgp: {
    id: 'pcgp',
    name: 'PC Game Pass',
    publisher: 'Microsoft Xbox',
    category: 'voucher',
    icon: 'img/pcgp_icon.png',
    banner: 'img/roblox_banner.png',
    idPlaceholder: 'Masukkan Email Microsoft / No. WA',
    hasZone: false,
    packages: [
      { id: 'pcgp_1m', name: '1 Bulan PC Game Pass Softpin', price: 64900, hot: true },
      { id: 'pcgp_3m', name: '3 Bulan PC Game Pass Softpin', price: 189000 }
    ]
  },
  psn: {
    id: 'psn',
    name: 'PlayStation Store Gift Card',
    publisher: 'Sony Interactive',
    category: 'voucher',
    icon: 'img/psn_icon.png',
    banner: 'img/pubg_banner.png',
    idPlaceholder: 'Masukkan Email PSN / No. WA Pengiriman Kode',
    hasZone: false,
    packages: [
      { id: 'psn_100k', name: 'PSN Card IDR 100.000', price: 104500 },
      { id: 'psn_400k', name: 'PSN Card IDR 400.000', price: 415000, hot: true }
    ]
  },
  minecraft: {
    id: 'minecraft',
    name: 'Minecraft (Microsoft)',
    publisher: 'Mojang Studios',
    category: 'pc',
    icon: 'img/minecraft_icon.jpeg',
    banner: 'img/roblox_banner.png',
    idPlaceholder: 'Masukkan Akun Microsoft / Email Minecraft',
    hasZone: false,
    packages: [
      { id: 'mc_coins_320', name: '320 Minecoins', price: 34000 },
      { id: 'mc_coins_1020', name: '1020 Minecoins', price: 99000, hot: true },
      { id: 'mc_java_bedrock', name: 'Minecraft Deluxe Key PC', price: 385000 }
    ]
  },
  pointblank: {
    id: 'pointblank',
    name: 'Point Blank (PB Cash)',
    publisher: 'Zepetto',
    category: 'pc',
    icon: 'img/pointblank_icon.jpg',
    banner: 'img/pubg_banner.png',
    idPlaceholder: 'Masukkan User ID Zepetto Point Blank',
    hasZone: false,
    packages: [
      { id: 'pb_1200', name: '1200 PB Cash', price: 11000 },
      { id: 'pb_6000', name: '6000 PB Cash', price: 54000, hot: true },
      { id: 'pb_12000', name: '12000 PB Cash', price: 106000 }
    ]
  }
};

// 2. ESCROW VERIFIED ACCOUNTS DATA (From Business Plan)
const ESCROW_ACCOUNTS = [
  {
    id: 'acc_mlbb_01',
    game: 'Mobile Legends',
    title: 'Mythic Immortal • 350+ Skins • All KOF, Exorcist & Collector',
    thumb: 'img/mlbb_banner.png',
    price: 1850000,
    seller: 'VerifiedSeller_08',
    specs: ['All Hero Max', 'Emblem All Lv 60', 'First Email Bersih', 'No Deadlink'],
    inspectionStatus: 'Inspeksi Deep-Check Sukses (100% Aman)',
    garansi: 'Anti-Hackback 6 Bulan'
  },
  {
    id: 'acc_genshin_02',
    game: 'Genshin Impact',
    title: 'AR 59 End-Game • C6 Furina + C2 Raiden + Signature Weapon',
    thumb: 'img/hsr_banner.png',
    price: 2450000,
    seller: 'Teikoku_Store',
    specs: ['18 Character B5', 'Well Built Artifact', 'Akun Pribadi Tangan 1', 'Email Rebind Siap'],
    inspectionStatus: 'Riwayat Top Up Invoice Lengkap & Legal',
    garansi: 'Anti-Hackback Selamanya'
  },
  {
    id: 'acc_ff_03',
    game: 'Free Fire',
    title: 'Akun Old Season 2 • Bundle Sakti Hip Hop • Elite Pass Rampage',
    thumb: 'img/ff_banner.png',
    price: 850000,
    seller: 'GarenaKing_ID',
    specs: ['Old Badge S2-S15', 'Senjata Incubator Max', 'Login Google Siap Pindah', 'No Minus'],
    inspectionStatus: 'Inspeksi Akun Manual Selesai',
    garansi: 'Anti-Hackback Garansi Escrow'
  },
  {
    id: 'acc_val_04',
    game: 'Valorant PC',
    title: 'Rank Immortal 2 • Reaver, Prime, Kuronami & Champions Vandal',
    thumb: 'img/pubg_banner.png',
    price: 1650000,
    seller: 'AimGod_Jakarta',
    specs: ['Level 180', 'VP Sisa 1.200', 'Email Asli Disertakan', 'Server Asia Pasifik'],
    inspectionStatus: 'Verifikasi KTP Penjual Tervalidasi',
    garansi: 'Anti-Hackback Garansi Escrow'
  }
];

// Helper: Format Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
}

// 3. APPLICATION STATE
let currentSelectedGame = null;
let currentSelectedPackage = null;
let currentSelectedPayment = 'qris';
let currentCategoryFilter = 'all';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initArtcraftRuler();
  initFixedNavigationAndScrollSpy();
  initMobileMenuDrawer();
  initHeroParallaxHover();
  initSearchAutocomplete();
  initCategoryFilters();
  initFeatureTabs();
  initFaqAccordion();
  initCheckoutModal();
  initEscrowModals();
  initTransactionCheckModal();
});

// ============================================================
// ARTCRAFT RULER SCROLLBAR & KINETIC LABELS ENGINE
// ============================================================
function initArtcraftRuler() {
  const rulerTrack = document.getElementById('rulerTrack');
  const ticksWrap = document.getElementById('rulerTicksWrap');
  const thumbMarker = document.getElementById('rulerThumbMarker');
  const percentTag = document.getElementById('rulerPercentTag');
  const viewportBracket = document.getElementById('rulerViewportBracket');

  if (!rulerTrack || !ticksWrap || !thumbMarker) return;

  // 1. Generate Ticks (0% to 100%)
  const totalTicks = 100;
  let ticksHTML = '';
  for (let i = 0; i <= totalTicks; i++) {
    const isMajor = (i % 5 === 0);
    ticksHTML += `
      <div class="ruler-tick ${isMajor ? 'major' : 'minor'}" data-percent="${i}">
        ${isMajor ? `<span class="ruler-tick-num">${i}</span>` : ''}
      </div>
    `;
  }
  ticksWrap.innerHTML = ticksHTML;

  const tickElements = Array.from(ticksWrap.querySelectorAll('.ruler-tick'));

  // 2. Physics & State Interpolation
  let zoom = 0.0;           // 0.0 = idle wide centimeter marks, 1.0 = hovered fine millimeter marks
  let targetZoom = 0.0;
  let isDraggingRuler = false;
  let mouseRelativeY = -9999;
  let isNearRuler = false;
  let lastTime = performance.now();

  let trackRect = rulerTrack.getBoundingClientRect();
  function refreshTrackRect() {
    trackRect = rulerTrack.getBoundingClientRect();
  }
  window.addEventListener('resize', refreshTrackRect, { passive: true });

  // 3. 60FPS / 120FPS GPU Animation Loop
  function tick(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    // Smooth exponential lerp (matches ArtCraft's buttery responsiveness)
    const lerpSpeed = isDraggingRuler ? 24 : 14;
    const factor = 1 - Math.exp(-lerpSpeed * dt);
    zoom += (targetZoom - zoom) * factor;

    if (Math.abs(targetZoom - zoom) < 0.0005) {
      zoom = targetZoom;
    }

    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = Math.max(docHeight - winHeight, 1);
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    const trackHeight = trackRect.height || (winHeight - 100);

    // Update Thumb Marker Position & Percentage
    const thumbY = progress * trackHeight;
    thumbMarker.style.transform = `translate3d(0, ${thumbY.toFixed(2)}px, 0)`;

    if (percentTag) {
      const pctInt = Math.round(progress * 100);
      percentTag.textContent = `${pctInt < 10 ? '0' : ''}${pctInt}%`;
    }

    // Update Viewport Coverage Bracket
    if (viewportBracket) {
      const bracketHeight = Math.max((winHeight / docHeight) * trackHeight, 14);
      const bracketY = progress * (trackHeight - bracketHeight);
      viewportBracket.style.transform = `translate3d(0, ${bracketY.toFixed(2)}px, 0)`;
      viewportBracket.style.height = `${bracketHeight.toFixed(2)}px`;
    }

    // Dynamic Interpolation for all 101 ticks:
    // In unzoomed mode (zoom = 0): ticks are spaced widely across document height (centimeter marks).
    // In zoomed mode (zoom = 1): ticks compress evenly along the track (millimeter marks).
    const isProximityActive = (zoom > 0.05 && isNearRuler);

    for (let i = 0; i <= totalTicks; i++) {
      const el = tickElements[i];
      const isMajor = (i % 5 === 0);
      const pct = i / 100;

      // Coordinate in zoomed track space
      const zoomedY = pct * trackHeight;

      // Coordinate in unzoomed document space (scrolling with content)
      const unzoomedY = (pct * maxScroll) - scrollTop;

      // Current interpolated position
      const currentY = (1 - zoom) * unzoomedY + zoom * zoomedY;

      // Opacity calculation & edge feathering
      let baseOpacity = 0;
      if (currentY >= -15 && currentY <= trackHeight + 15) {
        if (isMajor) {
          let edgeFade = 1;
          if (currentY < 30) edgeFade = Math.max(0, currentY / 30);
          else if (currentY > trackHeight - 30) edgeFade = Math.max(0, (trackHeight - currentY) / 30);
          baseOpacity = 0.85 * edgeFade;
        } else {
          // Minor millimeter ticks smoothly fade in as zoom increases
          let edgeFade = 1;
          if (currentY < 15) edgeFade = Math.max(0, currentY / 15);
          else if (currentY > trackHeight - 15) edgeFade = Math.max(0, (trackHeight - currentY) / 15);
          baseOpacity = 0.35 * zoom * edgeFade;
        }
      }

      // Proximity Hover Wave (Dynamic fish-eye curve around cursor)
      let scaleX = 1;
      let finalOpacity = baseOpacity;

      if (isProximityActive && baseOpacity > 0.01) {
        const dist = Math.abs(currentY - mouseRelativeY);
        const radius = 70; // Wave radius in pixels
        if (dist < radius) {
          const wave = Math.cos((dist / radius) * (Math.PI / 2));
          scaleX = 1 + wave * 1.8;
          finalOpacity = Math.min(1, baseOpacity + wave * 0.45);
          el.classList.add('active-near');
        } else {
          el.classList.remove('active-near');
        }
      } else {
        el.classList.remove('active-near');
      }

      el.style.transform = `translate3d(0, ${currentY.toFixed(2)}px, 0) scaleX(${scaleX.toFixed(3)})`;
      el.style.opacity = finalOpacity.toFixed(3);
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  // 4. Mouse and Interaction Listeners
  function handlePointerMove(clientX, clientY) {
    const isDesktop = window.innerWidth > 768;
    const distFromRight = window.innerWidth - clientX;
    isNearRuler = distFromRight <= 100;
    mouseRelativeY = clientY - trackRect.top;

    if (isDraggingRuler) {
      targetZoom = 1.0;
      scrollToTrackY(clientY);
    } else if (isDesktop && (isNearRuler || distFromRight <= 70)) {
      targetZoom = 1.0;
    } else {
      targetZoom = 0.0;
    }
  }

  window.addEventListener('mousemove', (e) => {
    handlePointerMove(e.clientX, e.clientY);
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    if (!isDraggingRuler) {
      targetZoom = 0.0;
      isNearRuler = false;
      mouseRelativeY = -9999;
    }
  });

  function scrollToTrackY(clientY) {
    refreshTrackRect();
    const offsetY = Math.min(Math.max(clientY - trackRect.top, 0), trackRect.height);
    const ratio = trackRect.height > 0 ? offsetY / trackRect.height : 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: ratio * maxScroll,
      behavior: isDraggingRuler ? 'auto' : 'smooth'
    });
  }

  rulerTrack.addEventListener('mousedown', (e) => {
    isDraggingRuler = true;
    targetZoom = 1.0;
    scrollToTrackY(e.clientY);
  });

  window.addEventListener('mouseup', () => {
    if (isDraggingRuler) {
      isDraggingRuler = false;
      if (!isNearRuler) {
        targetZoom = 0.0;
      }
    }
  });

  // Touch scrubbing on mobile without screen obstruction
  rulerTrack.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      isDraggingRuler = true;
      targetZoom = 1.0;
      scrollToTrackY(e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDraggingRuler && e.touches && e.touches[0]) {
      scrollToTrackY(e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDraggingRuler = false;
    targetZoom = 0.0;
  });
}

// ============================================================
// MOBILE NAVIGATION DRAWER & SEARCH
// ============================================================
function initMobileMenuDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileMenuDrawer');
  const navLinks = document.querySelectorAll('#mobileNavList .mobile-nav-link');
  const searchInput = document.getElementById('mobileSearchInput');
  const searchDropdown = document.getElementById('mobileSearchDropdown');
  const checkTxBtn = document.getElementById('mobileCheckTxBtn');

  if (!toggleBtn || !drawer) return;

  function toggleDrawer(open) {
    const isOpen = (typeof open === 'boolean') ? open : !drawer.classList.contains('active');
    if (isOpen) {
      drawer.classList.add('active');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    } else {
      drawer.classList.remove('active');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('active') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleDrawer(false);
    }
  });

  // Mobile navigation links click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target') || link.getAttribute('href').replace('#', '');
      toggleDrawer(false);

      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navHeight = 65;
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Mobile check transaction button
  if (checkTxBtn) {
    checkTxBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDrawer(false);
      if (typeof window.openCheckModal === 'function') {
        window.openCheckModal();
      }
    });
  }

  // Mobile search input
  if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchDropdown.classList.remove('active');
        searchDropdown.innerHTML = '';
        return;
      }

      const results = GAMES_DATA.filter(g =>
        g.title.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q) ||
        g.developer.toLowerCase().includes(q)
      );

      if (results.length === 0) {
        searchDropdown.innerHTML = '<div style="padding:12px; font-size:12px; color:#888;">Game atau produk tidak ditemukan.</div>';
        searchDropdown.classList.add('active');
        return;
      }

      searchDropdown.innerHTML = results.map(g => `
        <div class="search-item" data-id="${g.id}" style="display:flex; align-items:center; gap:10px; padding:10px 12px; border-bottom:1px solid #222; cursor:pointer;">
          <img src="${g.image}" alt="${g.title}" style="width:36px; height:36px; object-fit:cover; border:1px solid #333;">
          <div style="flex:1;">
            <div style="color:#fff; font-weight:700; font-size:12px;">${g.title}</div>
            <div style="color:#e65c00; font-size:11px;">Mulai ${formatRupiah(g.packages[0].price)}</div>
          </div>
          <span style="color:#888; font-size:12px;">↗</span>
        </div>
      `).join('');
      searchDropdown.classList.add('active');

      searchDropdown.querySelectorAll('.search-item').forEach(item => {
        item.addEventListener('click', () => {
          const gameId = item.dataset.id;
          toggleDrawer(false);
          searchInput.value = '';
          searchDropdown.classList.remove('active');

          if (typeof window.openCheckoutModal === 'function') {
            window.openCheckoutModal(gameId);
          }
        });
      });
    });
  }
}

// ============================================================
// FIXED NAVIGATION BAR, BACK-TO-TOP & SCROLLSPY
// ============================================================
function initFixedNavigationAndScrollSpy() {
  const menuLinks = document.querySelectorAll('#topNavMenu .menu-item');
  const brandLogo = document.querySelector('.brand-editorial');
  const backToTopBtn = document.getElementById('backToTopNavBtn');

  const sections = [
    { id: 'top', linkTarget: 'top' },
    { id: 'promo', linkTarget: 'promo' },
    { id: 'populer', linkTarget: 'populer' },
    { id: 'katalog', linkTarget: 'katalog' },
    { id: 'escrow', linkTarget: 'escrow' },
    { id: 'faq', linkTarget: 'faq' }
  ];

  // Smooth scroll click handler
  function smoothScrollTo(targetId) {
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navHeight = 75;
      const top = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      smoothScrollTo(targetId);
    });
  });

  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollTo('top');
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollTo('top');
    });
  }

  // ScrollSpy function to highlight active tab
  function updateScrollSpy() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const navHeight = 90;

    // Toggle Back to Top button emphasis
    if (backToTopBtn) {
      if (scrollPos > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0.7';
      }
    }

    let activeSectionId = 'top';
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop - navHeight - 30;
        if (scrollPos >= top) {
          activeSectionId = sec.id;
          break;
        }
      }
    }

    // Update main nav active class
    menuLinks.forEach(link => {
      const target = link.dataset.target;
      if (target === activeSectionId || (target === 'katalog' && activeSectionId === 'katalog')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  updateScrollSpy();
}

// ============================================================
// HERO 3D PARALLAX & TILT ON CURSOR
// ============================================================
function initHeroParallaxHover() {
  const hero = document.getElementById('top');
  const heroCore = document.getElementById('heroContentCore');

  if (!hero || !heroCore) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    heroCore.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    heroCore.style.transition = 'transform 0.08s ease-out';
  });

  hero.addEventListener('mouseleave', () => {
    heroCore.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    heroCore.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });
}

// ============================================================
// REAL-TIME SEARCH AUTOCOMPLETE
// ============================================================
function initSearchAutocomplete() {
  const searchInput = document.getElementById('globalSearchInput');
  const searchDropdown = document.getElementById('searchDropdown');

  if (!searchInput || !searchDropdown) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchDropdown.classList.remove('active');
      searchDropdown.innerHTML = '';
      return;
    }

    const matched = Object.values(GAMES_DATA).filter(g =>
      g.name.toLowerCase().includes(query) ||
      g.publisher.toLowerCase().includes(query) ||
      g.id.toLowerCase().includes(query)
    );

    if (matched.length === 0) {
      searchDropdown.innerHTML = `
        <div style="padding: 1rem; text-align: center; color: #94a3b8; font-size: 0.8rem;">
          Tidak ada game atau voucher dengan kata kunci "<strong>${escapeHtml(query)}</strong>"
        </div>
      `;
    } else {
      searchDropdown.innerHTML = matched.map(g => `
        <div class="search-item" onclick="openTopUpModal('${g.id}')">
          <img src="${g.icon}" alt="${escapeHtml(g.name)}" onerror="this.src='img/mlbb_icon.png'">
          <div class="search-item-info">
            <h4>${escapeHtml(g.name)}</h4>
            <span>${escapeHtml(g.publisher)} • Mulai ${formatRupiah(g.packages[0].price)}</span>
          </div>
        </div>
      `).join('');
    }

    searchDropdown.classList.add('active');
  });

  // Close when clicked outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove('active');
    }
  });
}

// ============================================================
// CATEGORY FILTER TABS
// ============================================================
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const productCards = document.querySelectorAll('.product-box');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      currentCategoryFilter = filter;

      productCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================================
// KEUNGGULAN NEXUSTRADE (Interactive Image 3 Tab Switcher)
// ============================================================
const FEATURE_DETAILS = {
  instant: {
    title: 'Isi Ulang Instan (< 30 Detik)',
    desc: 'Semua sistem voucher dan diamond di NexusTrade terhubung secara langsung (direct-API) dengan server resmi pengembang game. Setelah pembayaran terkonfirmasi, item game langsung masuk otomatis ke akun dalam hitungan detik tanpa perlu menunggu antrean manual.',
    bullets: [
      'Proses 100% otomatis 24 jam nonstop',
      'Notifikasi sukses langsung via WhatsApp & Email',
      'Garansi saldo kembali jika terjadi gangguan server'
    ],
    icon: `<svg width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
  },
  escrow: {
    title: 'Escrow & Rekber Paling Aman (100% Anti Scam)',
    desc: 'Layanan Rekening Bersama (Escrow) resmi NexusTrade menahan dana pembeli hingga seluruh proses pemindahan email dan kata sandi akun selesai secara tervalidasi. Uang pembeli aman, dan penjual dijamin menerima pembayaran tepat waktu.',
    bullets: [
      'Dana tertahan di sistem escrow terenkripsi',
      'Verifikasi identitas (KYC) ketat bagi semua penjual',
      'Garansi anti-hackback dan jaminan uang kembali 100%'
    ],
    icon: `<svg width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
  },
  games: {
    title: 'Banyak Permainan Populer Terlengkap',
    desc: 'NexusTrade menyediakan katalog produk digital terlengkap untuk Mobile Legends, Free Fire, PUBG Mobile, Genshin Impact, Roblox, Steam, hingga voucher streaming favorit seperti Vidio dan Twitch.',
    bullets: [
      'Lebih dari 100+ judul game mobile, PC, dan konsol',
      'Pilihan nominal terlengkap dari harga Rp 1.500',
      'Stok akun ready-stock terkurasi setiap hari'
    ],
    icon: `<svg width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>`
  },
  value: {
    title: 'Kredit Game Bernilai & Harga Termurah',
    desc: 'Kami menawarkan harga paling bersaing di Indonesia dengan komisi admin terendah, diskon flash sale berkala, serta program cashback NexusPoints pada setiap transaksi pembelian.',
    bullets: [
      'Harga transparan tanpa biaya tersembunyi',
      'Cashback NexusPoints bisa ditukar diamond gratis',
      'Diskon spesial member & promo harian'
    ],
    icon: `<svg width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  rewards: {
    title: 'Inspeksi Akun & Rekaman Video Bukti',
    desc: 'Setiap akun yang diperdagangkan melalui layanan Rekber NexusTrade diperiksa langsung ke dalam game oleh tim teknis kami (Deep-Check). Seluruh proses pergantian data email dan kata sandi direkam (screen recording) sebagai bukti sah tak terbantahkan.',
    bullets: [
      'Pengecekan keaslian item, skin, dan riwayat top up legal',
      'Pembersihan deadlink pihak ketiga (Facebook/VK/Game Center)',
      'Video dokumentasi lengkap diserahkan ke pembeli'
    ],
    icon: `<svg width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`
  },
  payments: {
    title: 'Metode Pembayaran Lengkap & Bebas Ribet',
    desc: 'Mendukung QRIS instan bebas admin untuk semua e-wallet (DANA, GoPay, OVO, ShopeePay), Transfer Virtual Account seluruh Bank Nasional (BCA, Mandiri, BRI, BNI), serta minimarket Alfamart dan Indomaret.',
    bullets: [
      'QRIS Instant Scan untuk semua bank & e-wallet',
      'Virtual Account terverifikasi otomatis dalam 5 detik',
      'Tersedia pembayaran gerai Alfamart di seluruh Indonesia'
    ],
    icon: `<svg width="44" height="44" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>`
  }
};

function initFeatureTabs() {
  const tabBtns = document.querySelectorAll('.feature-editorial-btn');
  const displayTitle = document.getElementById('featureDisplayTitle');
  const displayDesc = document.getElementById('featureDisplayDesc');
  const displayBullets = document.getElementById('featureDisplayBullets');

  if (!tabBtns.length || !displayTitle) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const featureKey = btn.dataset.feature;
      const data = FEATURE_DETAILS[featureKey];
      if (data) {
        displayTitle.textContent = data.title.toUpperCase();
        displayDesc.textContent = data.desc;
        if (displayBullets) {
          displayBullets.innerHTML = data.bullets.map(b => `
            <li><span>[✓]</span> ${escapeHtml(b)}</li>
          `).join('');
        }
      }
    });
  });
}

// ============================================================
// FAQ ACCORDION LOGIC
// ============================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-card-box');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-q-btn');
    if (!questionBtn) return;
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        const icon = i.querySelector('.faq-icon-cross');
        if (icon) icon.textContent = '+';
      });
      if (!isActive) {
        item.classList.add('active');
        const icon = item.querySelector('.faq-icon-cross');
        if (icon) icon.textContent = '−';
      }
    });
  });
}

// ============================================================
// CHECKOUT MODAL & TOP UP FLOW
// ============================================================
function initCheckoutModal() {
  const modalBackdrop = document.getElementById('topupModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const submitBtn = document.getElementById('submitOrderBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeTopUpModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeTopUpModal();
    });
  }

  // Handle Payment Selection
  const paymentItems = document.querySelectorAll('.payment-item');
  paymentItems.forEach(item => {
    item.addEventListener('click', () => {
      paymentItems.forEach(p => p.classList.remove('selected'));
      item.classList.add('selected');
      currentSelectedPayment = item.dataset.payment;
      updateCheckoutTotal();
    });
  });

  // Handle Submit Order
  if (submitBtn) {
    submitBtn.addEventListener('click', handleProcessOrder);
  }
}

// Open Top Up Modal for Selected Game
window.openTopUpModal = function (gameId) {
  const game = GAMES_DATA[gameId] || GAMES_DATA['mlbb'];
  currentSelectedGame = game;
  currentSelectedPackage = game.packages[0];

  const modalBackdrop = document.getElementById('topupModal');
  const modalTitle = document.getElementById('modalGameTitle');
  const modalPublisher = document.getElementById('modalGamePublisher');
  const modalThumb = document.getElementById('modalGameThumb');
  const idInput = document.getElementById('userIdInput');
  const idLabel = document.getElementById('userIdLabel');
  const zoneWrap = document.getElementById('zoneInputWrap');
  const packagesContainer = document.getElementById('modalPackagesList');

  // Fill Header Info
  modalTitle.textContent = game.name;
  modalPublisher.textContent = game.publisher;
  modalThumb.src = game.icon;

  // Configure ID inputs
  idInput.placeholder = game.idPlaceholder;
  if (game.hasZone) {
    zoneWrap.style.display = 'block';
  } else {
    zoneWrap.style.display = 'none';
  }

  // Render Packages
  packagesContainer.innerHTML = game.packages.map((pkg, i) => `
    <div class="package-item ${i === 0 ? 'selected' : ''}" onclick="selectPackage('${pkg.id}')">
      <div class="package-name">${escapeHtml(pkg.name)}</div>
      <div class="package-price">${formatRupiah(pkg.price)}</div>
      ${pkg.hot ? '<span class="card-badge-top" style="font-size:0.55rem; padding:1px 4px;">HOT</span>' : ''}
    </div>
  `).join('');

  updateCheckoutTotal();
  modalBackdrop.classList.add('active');
};

window.closeTopUpModal = function () {
  const modalBackdrop = document.getElementById('topupModal');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
};

window.selectPackage = function (packageId) {
  if (!currentSelectedGame) return;
  const pkg = currentSelectedGame.packages.find(p => p.id === packageId);
  if (!pkg) return;

  currentSelectedPackage = pkg;

  // Update selected class
  const items = document.querySelectorAll('.package-item');
  items.forEach(el => {
    if (el.textContent.includes(pkg.name)) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });

  updateCheckoutTotal();
};

function updateCheckoutTotal() {
  const totalDisplay = document.getElementById('checkoutTotalPrice');
  if (!totalDisplay || !currentSelectedPackage) return;
  totalDisplay.textContent = formatRupiah(currentSelectedPackage.price);
}

function handleProcessOrder() {
  const userId = document.getElementById('userIdInput').value.trim();
  const zoneId = document.getElementById('zoneIdInput').value.trim();
  const phone = document.getElementById('userPhoneInput').value.trim();

  if (!userId) {
    alert('Harap masukkan User ID game Anda terlebih dahulu!');
    document.getElementById('userIdInput').focus();
    return;
  }

  if (currentSelectedGame.hasZone && !zoneId) {
    alert('Harap masukkan Zone ID / Server game Anda!');
    document.getElementById('zoneIdInput').focus();
    return;
  }

  // Generate simulated invoice
  const invoiceId = 'NXT-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });

  closeTopUpModal();
  showReceiptModal({
    invoiceId,
    game: currentSelectedGame.name,
    item: currentSelectedPackage.name,
    target: currentSelectedGame.hasZone ? `${userId} (${zoneId})` : userId,
    payment: currentSelectedPayment.toUpperCase(),
    total: formatRupiah(currentSelectedPackage.price),
    time: now,
    phone: phone || '-'
  });
}

function showReceiptModal(data) {
  const receiptModal = document.getElementById('receiptModal');
  const receiptDetails = document.getElementById('receiptDetails');

  receiptDetails.innerHTML = `
    <div class="receipt-box">
      <div class="receipt-success-icon">✓</div>
      <small style="color:#777; letter-spacing:1px;">01 / TRANSAKSI BERHASIL</small>
      <h3 style="font-family:var(--font-heading); font-size:24px; font-weight:800; margin:4px 0 2px 0; color:#080808;">FAKTUR RESMI NEXUSTRADE</h3>
      <p style="color:#2b9348; font-size:12px; font-weight:bold; letter-spacing:0.5px;">STATUS: PROSES DIRECT-API SUKSES</p>
      
      <div class="receipt-rows">
        <div class="receipt-row">
          <span>NO. INVOICE:</span>
          <span style="font-family:monospace; font-weight:bold;">${data.invoiceId}</span>
        </div>
        <div class="receipt-row">
          <span>PRODUK GAME:</span>
          <span>${data.game}</span>
        </div>
        <div class="receipt-row">
          <span>PAKET / ITEM:</span>
          <span>${data.item}</span>
        </div>
        <div class="receipt-row">
          <span>TARGET ID:</span>
          <span>${data.target}</span>
        </div>
        <div class="receipt-row">
          <span>METODE BAYAR:</span>
          <span>${data.payment}</span>
        </div>
        <div class="receipt-row">
          <span>WAKTU ORDER:</span>
          <span>${data.time}</span>
        </div>
        <div class="receipt-row" style="border-top:1px solid #151515; padding-top:8px; margin-top:4px;">
          <span style="color:#080808; font-weight:800;">TOTAL PEMBAYARAN:</span>
          <span style="color:#e65c00; font-family:var(--font-heading); font-size:20px; font-weight:800;">${data.total}</span>
        </div>
      </div>

      <div style="background:#ededeb; border:1px solid #686868; padding:10px 14px; font-size:12px; color:#333; text-align:left; margin-bottom:16px;">
        ⚡ Item game Anda sedang disuntikkan secara otomatis via Direct-API server resmi. Dokumentasi tersimpan di database.
      </div>

      <div style="display:flex; justify-content:center;">
        <button class="btn-submit-order" onclick="closeReceiptModal()" style="width:100%; padding:10px 0;">SELESAI & TUTUP ↗</button>
      </div>
    </div>
  `;

  receiptModal.classList.add('active');
}

window.closeReceiptModal = function () {
  const modal = document.getElementById('receiptModal');
  if (modal) modal.classList.remove('active');
};

// ============================================================
// ESCROW / JUAL BELI AKUN MODALS
// ============================================================
function initEscrowModals() {
  const escrowModal = document.getElementById('escrowModal');
  const closeBtn = document.getElementById('closeEscrowModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeEscrowModal);
}

window.openEscrowDetail = function (accountId) {
  const acc = ESCROW_ACCOUNTS.find(a => a.id === accountId) || ESCROW_ACCOUNTS[0];
  const modal = document.getElementById('escrowModal');
  const content = document.getElementById('escrowModalContent');

  content.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div style="display:flex; gap:14px; align-items:center; background:#ffffff; padding:14px; border:1px solid #d5d5d5;">
        <img src="${acc.thumb}" style="width:80px; height:80px; object-fit:cover; border:1px solid #080808;">
        <div>
          <small style="font-size:10px; color:#555; letter-spacing:1px; text-transform:uppercase;">${acc.game} • ESCROW VERIFIED</small>
          <h3 style="font-family:var(--font-heading); color:#080808; font-size:20px; font-weight:800; line-height:1.1; margin:4px 0;">${acc.title}</h3>
          <span style="font-family:var(--font-heading); font-size:22px; font-weight:800; color:#e65c00;">${formatRupiah(acc.price)}</span>
        </div>
      </div>

      <div>
        <small style="display:block; font-size:11px; letter-spacing:1px; text-transform:uppercase; font-weight:bold; color:#555; margin-bottom:8px;">SPESIFIKASI & HASIL DEEP-CHECK:</small>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:13px; color:#151515;">
          ${acc.specs.map(s => `
            <div style="background:#ffffff; padding:8px 12px; border:1px solid #d5d5d5; display:flex; align-items:center; gap:8px;">
              <span style="color:#2b9348; font-weight:bold;">[✓]</span> ${escapeHtml(s)}
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background:#ededeb; border:1px solid #686868; padding:14px;">
        <h4 style="font-family:var(--font-heading); color:#080808; font-size:15px; font-weight:800; margin-bottom:6px; letter-spacing:0.5px;">
          STANDAR OPERASIONAL ESCROW NEXUSTRADE:
        </h4>
        <ol style="font-size:12px; color:#333; padding-left:18px; line-height:1.6;">
          <li>Pembeli mentransfer dana ke Rekening Bersama resmi NexusTrade.</li>
          <li>Admin Teknisi login ke akun untuk verifikasi fisik & inspeksi (Deep-Check).</li>
          <li>Data email & password dipindahkan 100% ke tangan pembeli.</li>
          <li>Pembeli konfirmasi akun aman, dana dicairkan ke penjual.</li>
        </ol>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; padding-top:4px;">
        <span style="font-size:12px; color:#555;">Penjual: <strong style="color:#080808;">${acc.seller}</strong> (KYC Verified)</span>
        <button class="btn-submit-order" onclick="requestEscrowBuy('${acc.id}')" style="padding:10px 20px; font-size:13px;">LANJUT REKBER WA ↗</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
};

window.closeEscrowModal = function () {
  const modal = document.getElementById('escrowModal');
  if (modal) modal.classList.remove('active');
};

window.requestEscrowBuy = function (accountId) {
  const acc = ESCROW_ACCOUNTS.find(a => a.id === accountId);
  const text = encodeURIComponent(`Halo Admin NexusTrade, saya berminat membeli akun via Rekber Escrow: ${acc ? acc.title : 'Akun Game'} seharga ${acc ? formatRupiah(acc.price) : ''}`);
  window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
};

// ============================================================
// CEK TRANSAKSI TRACKER MODAL
// ============================================================
function initTransactionCheckModal() {
  const checkBtn = document.getElementById('checkTransactionNavBtn');
  if (checkBtn) {
    checkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCheckModal();
    });
  }
}

window.openCheckModal = function () {
  const input = prompt('Masukkan Nomor Invoice NexusTrade Anda (Contoh: NXT-849102):');
  if (!input) return;

  alert(`[Status Transaksi: ${input}]\n\nStatus: SELESAI & BERHASIL DIKIRIM\nWaktu: ${new Date().toLocaleDateString('id-ID')}\nGaransi: Aktif 100% Escrow Protected`);
};

// Utility to sanitize HTML
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
