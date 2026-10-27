const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const images = [
  // Banners
  { filename: 'hero_banner_1.jpg', url: 'https://cdn.unipin.com/images/banners/1792062865-1440x480px-%20-%202026-10-15T181238.446.jpg' },
  { filename: 'hero_banner_2.jpg', url: 'https://cdn.unipin.com/images/banners/1792487324-1440x480px-%20-%202026-10-20T160826.212.jpg' },
  { filename: 'hero_banner_3.jpg', url: 'https://cdn.unipin.com/images/banners/1793073236-1440x480px-%20-%202026-10-27T105256.820.jpg' },

  // Trust widgets
  { filename: 'fast_reload.png', url: 'https://cdn.unipin.com/images/trust-widget/fast-reload.png' },
  { filename: 'treasure.png', url: 'https://cdn.unipin.com/images/trust-widget/treasure.png' },
  { filename: 'trust.png', url: 'https://cdn.unipin.com/images/trust-widget/trust.png' },

  // Vertical Populer Cards
  { filename: 'mlbb_banner.png', url: 'https://cdn.unipin.com/images/vertical-image/1785826404-vertical-image-1747733122-vertical-image-BANNER-MLBB%20(1).png' },
  { filename: 'efootball_banner.jpg', url: 'https://cdn.unipin.com/images/vertical-image/1759236050-vertical-image-DR-233EC8%20DIGITAL%20SKIN%20EFOOTBALL.DI.ID.ID.UNIPAY.211%20w%20x%20402%20hPX.JUL25_R1_Messi.jpg' },
  { filename: 'pubg_banner.png', url: 'https://cdn.unipin.com/images/vertical-image/1749013939-vertical-image-BANNER-%20(7)%20(1).png' },
  { filename: 'hsr_banner.png', url: 'https://cdn.unipin.com/images/vertical-image/1752140625-vertical-image-BANNER-Honkai_%20Star%20Rail-%20MLBB.png' },
  { filename: 'roblox_banner.png', url: 'https://cdn.unipin.com/images/vertical-image/1762748267-vertical-image-BANNER-Roblox_optimized_200.png' },
  { filename: 'top_eleven_banner.png', url: 'https://cdn.unipin.com/images/vertical-image/1752140638-vertical-image-BANNER-TOP%20ELEVEN-%20MLBB.png' },
  { filename: 'viu_banner.png', url: 'https://cdn.unipin.com/images/vertical-image/1772093336-vertical-image-BANNER-%20VIU%20(1).png' },
  { filename: 'ff_banner.png', url: 'https://cdn.unipin.com/images/vertical-image/1748435642-vertical-image-BANNER-FF%20(2)%20(1).png' },

  // Logos for Vertical Cards
  { filename: 'mlbb_logo.png', url: 'https://cdn.unipin.com/images/product-logo/1792400738-logo-1747733122-logo-LOGO-MLBB.png' },
  { filename: 'efootball_logo.png', url: 'https://cdn.unipin.com/images/product-logo/1759236345-logo-77x24px_Icon%20EFOOTBALL.png' },
  { filename: 'pubg_logo.png', url: 'https://cdn.unipin.com/images/product-logo/1749013939-logo-LOGO-%20(6).png' },
  { filename: 'hsr_logo.png', url: 'https://cdn.unipin.com/images/product-logo/1752139893-logo-LOGO-%20308x84px.png' },
  { filename: 'roblox_logo.png', url: 'https://cdn.unipin.com/images/product-logo/1762748267-logo-308x84px_Logo%20Trending_ROBLOX.png' },
  { filename: 'top_eleven_logo.png', url: 'https://cdn.unipin.com/images/product-logo/1752043897-logo-LOGO-%20308x84px_TOP%20ELEVEN.png' },
  { filename: 'viu_logo.png', url: 'https://cdn.unipin.com/images/product-logo/1772093336-logo-LOGO-%20308x84px_VIU%20WHITE.png' },
  { filename: 'ff_logo.png', url: 'https://cdn.unipin.com/images/product-logo/1748435642-logo-LOGO-FF%20(1).png' },

  // Grid Icons
  { filename: 'mlbb_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1784702458-icon-1760002045-icon-MLBB%20200%20x%20200_11zon.png' },
  { filename: 'mlbb_pass.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1695278393-icon-1695180250-icon-Weekly%20Pass.png' },
  { filename: 'ff_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1748435642-logo-LOGO-FF%20(1).png' },
  { filename: 'pubg_icon.jpg', url: 'https://cdn.unipin.com/images/icon_product_pages/1592228250-icon-pubgm.jpg' },
  { filename: 'roblox_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1757435204-icon-Roblox%20corp_13_11zon.png' },
  { filename: 'genshin_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1790133476-icon-1789960139538_2026%20V7(4).png' },
  { filename: 'hsr_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1710829444-icon-Oversea%20Icon-1024_11zon.png' },
  { filename: 'valorant_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1757499571-icon-Valorant_16_11zon.png' },
  { filename: 'steam_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1757435751-icon-Steam%20Wallet_14_11zon.png' },
  { filename: 'googleplay_icon.jpg', url: 'https://cdn.unipin.com/images/icon_product_pages/1674203927-icon-googleplay.jpg' },
  { filename: 'minecraft_icon.jpeg', url: 'https://cdn.unipin.com/images/icon_product_pages/1742539455-icon-Minecraft%20Square_11zon.jpeg' },
  { filename: 'pcgp_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1785385939-icon-1732606924-icon-pcgp-logo(1)(1).png' },
  { filename: 'psn_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1774598008-icon-psn-icon%20(1).png' },
  { filename: 'top_eleven_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1757437122-icon-Top%20Eleven%20be%20Football%20Manager_15_11zon.png' },
  { filename: 'fm26_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1778840554-icon-FM26%20-%20LIGHT.png' },
  { filename: 'twitch_icon.jpg', url: 'https://cdn.unipin.com/images/icon_product_pages/1610330576-icon-twitch-200x200.jpg' },
  { filename: 'vidio_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1599529891-icon-Vidio.png' },
  { filename: 'amazon_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1706089231-icon-1580893385-icon-1580353827-icon-amazon%20(1).png' },
  { filename: 'lita_icon.png', url: 'https://cdn.unipin.com/images/icon_product_pages/1644907681-icon-200x200.png' },
  { filename: 'pointblank_icon.jpg', url: 'https://cdn.unipin.com/images/icon_product_pages/1571814027-icon-1559011491-icon-1557743544-icon-point_blank.jpg' },
  { filename: 'hok_icon.png', url: 'https://images.seeklogo.com/logo-png/63/1/honor-of-kings-logo-png_seeklogo-631764.png' },
  { filename: 'coc_icon.png', url: 'https://upload.wikimedia.org/wikipedia/sco/5/59/Clash_of_Clans_Logo.png' },
  { filename: 'fcmobile_icon.png', url: 'https://images.seeklogo.com/logo-png/51/1/ea-sports-fc-mobile-logo-png_seeklogo-519509.png' }
];

async function downloadAll() {
  console.log(`Starting download of ${images.length} images...`);
  for (const item of images) {
    const dest = path.join(imgDir, item.filename);
    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://www.unipin.com/'
        }
      });
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buffer);
        console.log(`[OK] ${item.filename} (${buffer.length} bytes)`);
      } else {
        console.error(`[FAIL] ${item.filename}: HTTP ${res.status}`);
      }
    } catch (err) {
      console.error(`[ERROR] ${item.filename}: ${err.message}`);
    }
  }
  console.log('Finished downloads.');
}

downloadAll();
