const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "HappyHippyClub";
const description = "Welcome to Happy Hippy Club !";
// ipfs-car로 root CID 생성 후 여기에 세팅.
const baseUri = "ipfs://bafybeiddfvs7rjcrabdlq7e467nboj75db5clzp7pmpm2uvbo6zm76xizq";
//const baseUri = "ipfs://{rootCID}/{IPFS Folder}";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  { // 12개를 생성하는데,, 10개는 위에껄로, 2개는 아래껄로 생성. BodyGold가 2개만 생성됨.
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ear" },
      { name: "Eyes" },
      { name: "Mouth" }
    ],
  },
  {
    growEditionSizeTo: 12,
    layersOrder: [
      { name: "Background" },
      { name: "BodyGold" },
      { name: "Ear" },
      { name: "Eyes" },
      { name: "Mouth" }
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

// 자동으로 백그라운드 컬러 생성 
const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
