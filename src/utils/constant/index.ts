// export const STORAGE_KEY_TOKEN = 'TOKEN';
// export const STORAGE_KEY_APP_THEME = 'APP_THEME';
// export const KANA_FULL_HALF_MAP = {
//   ガ: 'ｶﾞ',
//   ギ: 'ｷﾞ',
//   グ: 'ｸﾞ',
//   ゲ: 'ｹﾞ',
//   ゴ: 'ｺﾞ',
//   ザ: 'ｻﾞ',
//   ジ: 'ｼﾞ',
//   ズ: 'ｽﾞ',
//   ゼ: 'ｾﾞ',
//   ゾ: 'ｿﾞ',
//   ダ: 'ﾀﾞ',
//   ヂ: 'ﾁﾞ',
//   ヅ: 'ﾂﾞ',
//   デ: 'ﾃﾞ',
//   ド: 'ﾄﾞ',
//   バ: 'ﾊﾞ',
//   ビ: 'ﾋﾞ',
//   ブ: 'ﾌﾞ',
//   ベ: 'ﾍﾞ',
//   ボ: 'ﾎﾞ',
//   パ: 'ﾊﾟ',
//   ピ: 'ﾋﾟ',
//   プ: 'ﾌﾟ',
//   ペ: 'ﾍﾟ',
//   ポ: 'ﾎﾟ',
//   ヴ: 'ｳﾞ',
//   ヷ: 'ﾜﾞ',
//   ヺ: 'ｦﾞ',
//   ア: 'ｱ',
//   イ: 'ｲ',
//   ウ: 'ｳ',
//   エ: 'ｴ',
//   オ: 'ｵ',
//   カ: 'ｶ',
//   キ: 'ｷ',
//   ク: 'ｸ',
//   ケ: 'ｹ',
//   コ: 'ｺ',
//   サ: 'ｻ',
//   シ: 'ｼ',
//   ス: 'ｽ',
//   セ: 'ｾ',
//   ソ: 'ｿ',
//   タ: 'ﾀ',
//   チ: 'ﾁ',
//   ツ: 'ﾂ',
//   テ: 'ﾃ',
//   ト: 'ﾄ',
//   ナ: 'ﾅ',
//   ニ: 'ﾆ',
//   ヌ: 'ﾇ',
//   ネ: 'ﾈ',
//   ノ: 'ﾉ',
//   ハ: 'ﾊ',
//   ヒ: 'ﾋ',
//   フ: 'ﾌ',
//   ヘ: 'ﾍ',
//   ホ: 'ﾎ',
//   マ: 'ﾏ',
//   ミ: 'ﾐ',
//   ム: 'ﾑ',
//   メ: 'ﾒ',
//   モ: 'ﾓ',
//   ヤ: 'ﾔ',
//   ユ: 'ﾕ',
//   ヨ: 'ﾖ',
//   ラ: 'ﾗ',
//   リ: 'ﾘ',
//   ル: 'ﾙ',
//   レ: 'ﾚ',
//   ロ: 'ﾛ',
//   ワ: 'ﾜ',
//   ヲ: 'ｦ',
//   ン: 'ﾝ',
//   ァ: 'ｧ',
//   ィ: 'ｨ',
//   ゥ: 'ｩ',
//   ェ: 'ｪ',
//   ォ: 'ｫ',
//   ッ: 'ｯ',
//   ャ: 'ｬ',
//   ュ: 'ｭ',
//   ョ: 'ｮ',
//   '。': '｡',
//   '、': '､',
//   ー: 'ｰ',
//   '「': '｢',
//   '」': '｣',
//   '・': '･',
//   '１': '1',
//   '２': '2',
//   '３': '3',
//   '４': '4',
//   '５': '5',
//   '６': '6',
//   '７': '7',
//   '８': '8',
//   '９': '9',
//   '０': '0',
// } as Record<string, string>;

export const logBoxIgnore = [
  "Module RNCColorPicker requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.",
];

export const CREATE_MODE = 'create';

export const alertInitialState = [
  {
    id: '0',
    name: 'Khi bắt đầu',
    value: 0,
    type: 'minute',
    default: true,
  },
  {
    id: '1',
    name: 'Trước 15 phút',
    value: 15,
    type: 'minute',
  },
  {
    id: '2',
    name: 'Trước 30 phút',
    value: 30,
    type: 'minute',
  },
  {
    id: '3',
    name: 'Trước 60 phút',
    value: 60,
    type: 'minute',
  },
];

export const dataCarousel = [
  'https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/05/19/13/28/bird-8004544_1280.jpg',
];
