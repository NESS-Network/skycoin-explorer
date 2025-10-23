/**
 * Data for building the navigation menu. Used by the header and the footer.
 *
 * Each item could be a link to a section of the Skycoin website or a submenu.
 * The properties of the items are:
 * name: Name to show in the menu.
 * href: The URL the item opens (ignored if the item is a submenu).
 * active: If the item corresponds to the page that is currenly being shown (the explorer).
 * target: Value for the taget property of the <a> tag, if the item is not a submenu.
 * menu: if the item is a submenu, an array with more items.
 * open: if the item is a submenu, indicates if the submenu is open (must be set to false).
 */
export default [
  {
    name: 'Blog',
    href: 'https://ness-main-dev.medium.com',
    active: false,
    target: '_blank',
    open: false,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NESS-Network',
    active: false,
    target: '_blank',
    open: false,
  },
  {
    name: 'Wallets',
    open: false,
    active: false,
    menu: [
      {
        name: 'Desktop wallet',
        href: 'https://privateness-network.gitbook.io/privateness-network/how-to-open-a-desktop-wallet',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Mobile wallet',
        href: 'https://privateness.network/wp-content/uploads/2022/06/PrivateNess-wallet.apk',
        active: false,
        target: '_blank',
        open: false,
      },
    ],
  },
  {
    name: 'Trade',
    open: false,
    active: false,
    menu: [
      {
        name: 'NESS coins',
        href: 'https://ex.xbts.io/market/BTS_XBTSX.NESS',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Coin-hours',
        href: 'https://ex.xbts.io/market/BTS_XBTSX.NCH',
        active: false,
        target: '_blank',
        open: false,
      },
    ],
  },
  {
    name: 'Social',
    open: false,
    active: false,
    menu: [
      {
        name: 'Telegram Announcement Channel',
        href: 'https://t.me/privateness',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Telegram Discussion Group',
        href: 'https://t.me/s/privateness',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Telegram Trading Channel',
        href: 'https://t.me/NESStrading',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/PrivatenessN',
        active: false,
        target: '_blank',
        open: false,
      },
    ],
  },
  {
    name: 'Links',
    open: false,
    active: false,
    menu: [
      {
        name: 'Faucet',
        href: 'https:/faucet.ness.cx',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Exchange',
        href: 'https://exchange.ness.cx',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Emercoin NVS',
        href: 'https://nvs.ness.cx',
        active: false,
        target: '_blank',
        open: false,
      },
    ],
  },

];
