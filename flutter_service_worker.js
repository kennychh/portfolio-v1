'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4572e024970d0996befc2d2bdf92d73b",
".git/config": "d47401d657e24b0063d1dc38313cbfce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f24ad29cc684abb09ae26b96d5d47d56",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7da95911689b7ef181b98c2e9ec879f0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45481441a4af5391044b4257b773b8e9",
".git/logs/refs/heads/main": "94d77526524dae7ae1e5c59241f154ad",
".git/logs/refs/remotes/origin/main": "613bfcb51acdfb8fabbe90889f193e78",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/8bbc87076d1528e4c3bdec081d5da0082eb580": "02e87bb8ee00e8ec308161e131df78bf",
".git/objects/01/0d2877362c5f8b736e787679133f0a96b6c176": "1e7e1351fddaa046272d93bcdf6510d9",
".git/objects/01/4e4ec605139a1f68a69220714ff56c76c7ff3b": "e8397ba9379498c6882cfe60c85561f9",
".git/objects/01/5fb6e3317bfb6d25a7d41100bdf6e192b7739d": "11e2e25535bd5c7cc5cd3cf6c7834811",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/5481da04cab55a74c3fe697ded5706f02fe273": "f55d831b13862aa0a164643685b3651c",
".git/objects/02/d876db60708ed8382cb83ebefd7d8feae9350e": "3821a15fa09c31b82fd92a8c700b312a",
".git/objects/05/2ca86b3402bce789464b5d0cccaa014ab916ca": "e6a0cdcf9c4ef74c2de1722f7cbf18b7",
".git/objects/05/87ffe6b5fe22992dddb0915bfe4e6da6df13e5": "23e7ad4ab48569266cd117050aa95887",
".git/objects/05/cb963a669acce54c218a634e995099ebf37764": "56d42b726cc90cac771c344487fe4af3",
".git/objects/05/dcf67f97be6a8a6e07a82a00fcd2f4d93e2e0c": "399e442d8a4e59a02988eb12a5f70c53",
".git/objects/07/3918b3e5c696cf9944a7700bc8a124798d8585": "acecfd07b4086b8a9cec5786fcd7de95",
".git/objects/07/4af1685aa6c1c6de4e1398d5897b4b93efbe13": "1769a4826d37504145bf1fe3706f9c11",
".git/objects/07/cabea613199ab0dbae58414649cf409dbe5940": "70417c417c87793c031053a8d41ace7f",
".git/objects/09/b25ad804bed7d905c483c0fb614c3f116ecf98": "3d9bb69dc581570406b0e55ca5323dd2",
".git/objects/0a/5e9e852e0231653580bb573a483a48dd85ccbf": "ebb5076af8f0ea0adadb0714f6752ff7",
".git/objects/0a/8497e1bb30e9b3ea2066b9576543878dff1780": "05b788097399814f113446dad73e72f2",
".git/objects/0b/dbf8e12638d589a199d17c2e686415d8649561": "1171fe6a991bfd1de65c0339c3ef260f",
".git/objects/0c/b86ee21bd02b35a4963cd1022281dcca48ea65": "aad9b54fc70045834cbccb1f41513693",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/124d71a736e94570e1b22f2bb0fd8fb2d54f72": "6d8d644a3a78d39ca3bdccb70737f748",
".git/objects/0e/cb9f73847d3813603fd8cca771f3c0eb556446": "aa530909ba73beb1145e98f5c34028c6",
".git/objects/0f/7ba27ad63d42b34aa3e60ce78398659a304506": "74e6d116f27bb613a52b25266f293fa5",
".git/objects/11/38d865431f4825a29bc2810bf824b26837bdbb": "be440794413a1f3ef61097280761bd61",
".git/objects/13/d56e54e3c40df2e18a9840137cfd137449111e": "57bf1fa186ccb9c9bd3b085d8dc42201",
".git/objects/14/5c439f16fb1dba290c70dfd572765397132022": "87c37e8f1d70fd54f679089c9794b93f",
".git/objects/14/adf2dfb1b65881540e4e2bd34e68ddf05f861e": "ce1ab187fdb82f764e7cd0130ae21c2e",
".git/objects/15/40172f98d993612da2b12a367b06edc6292b7a": "dfbf149f1efa449b4e27a0506ef395df",
".git/objects/18/00c53499ce1d653c829b8b107e508fe9a5ba45": "5e4728807197ff305d9f6b2c042d2c6b",
".git/objects/19/810a7d62f826acc666a2f8b223b597aaea03f5": "4bbd56b55ab7ad90a6c101b300349f4e",
".git/objects/1b/0935684012cc7a3af7af1d390381f28a6893b2": "032e7dd422105524d1f7789ab9ca6775",
".git/objects/1b/1b46a2501c01df2f6e1ff751bd706ac9f0daeb": "11010ed90f28be2f7ca00de89ff0c3dd",
".git/objects/1b/343ff4d4417e8a030b6b72c5111a251f9dc32a": "59ed8582feb734a393ca062844bb890e",
".git/objects/1c/3e9a1822fc8492bb7559c2c90527f22e8ae30e": "de420fa99eaf9ac89923688dd0420f36",
".git/objects/1c/e0c0a6dd1778edf2f25d1cfc6ad3d5ed21da0b": "35dcb998587dc821cf839695101e14c7",
".git/objects/1c/fea1cd63d8055099483b021df69997fec7f354": "a27b73970a2ce5486db6ac860972e7a0",
".git/objects/1e/96f0330b5089983e1b92e319c19baf07046ba8": "16f1e87aa7ba3ea38d0ed67afad3532c",
".git/objects/1e/cbccf7a32f7c009372a6b1e1c2a5985fa72195": "a6766541279da3be8f13242f5bd83667",
".git/objects/20/21cf88d89cec47a07b5cc9f194646e8806265c": "758f8257fecae5400853b66902e80e4e",
".git/objects/20/2f2ea67931245ff60aefa21804cc6c9cc5e6f4": "47f736cc05212ee3a68bb78d97a8ce0c",
".git/objects/20/785ed7f58264ee8cafee5a824eb1f0311ff45c": "5f50e91b1d6e5091591e099c27308133",
".git/objects/21/2421914b34c4b2a23d4d6e4c43410b0ecff495": "fcb6c52d61f6e05d2a41a633760dc96e",
".git/objects/21/b7c576497f84fffb0b24c1d320c49da560f4ae": "7b78ee7fcb7a9e7f495b6540805e8dc0",
".git/objects/23/04eb8b9c07d37afdc7b8954641e8d56a75b51c": "e995c69536a2a440a5f8cbe05da0eaec",
".git/objects/23/178cbdd40fa9721f6fc5b3e4b7233e451088a0": "2d61424d2d5ae663684edf4636448003",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/b1f1683ae545a5b58f9e86b69d039793b49b23": "b1401d00bc1312af476be80fe9b92723",
".git/objects/25/76d829fa0e5f05d925f92a2314c776df2df4d3": "2a3d9b1cded1157e2aa3a0425345b52b",
".git/objects/25/c65acbf4b79b1804e24d52dfee3d8a7f0a174a": "96b26241541c28ccd3c9a3c231f3b2b7",
".git/objects/27/07f98c73aee878d32c72d5f2563d00437b3ccc": "87152f3d4dcd3216b6995c7953b37a1a",
".git/objects/28/d78a686af300910a30a66e34b9bb373e3f55aa": "cb5139af3c434791e1c15d7c8a1e37e3",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/4b2e5fd5b006c958e727eb4285ba7168fe07cc": "d7cdbd6eb85d443e4fc609300ad0fd1e",
".git/objects/2f/4d4d4cc32a33ab915d15c0b69add8efa3850a1": "dbd97fbf88b3beda06f44435536a17a1",
".git/objects/2f/af2fb9aa52cd950967926fa344bdfede226422": "035fe4f74d4e9a654b6ca45383289408",
".git/objects/31/54dfbe2be8595c7a13df87bc35599162d5e283": "81e56fc88696494ebedb5aa126dedd2b",
".git/objects/36/4c45a5e4c663ca09df9b8dc25f1ec27dd66885": "980da8d55bbc7308e821a332bc7fabd5",
".git/objects/38/0288eaf33b1b4820dfd57c4da0971ec71e109c": "e1ad4c3a910c44b602719d5320e7a8c5",
".git/objects/38/c8a28c66b24995f0b20920a174300a05241ee5": "e9cb541509e3520d675339dd0119a58f",
".git/objects/3b/3816385dd0e83173bca86c9a35b3d402eb224d": "2ff61dc4f2a58daa94bebdbb5427604c",
".git/objects/3d/3d5639706669c8dbb267c544acb6d96511d7ec": "871725af6b3ba0678d23e48451cdf1d4",
".git/objects/3d/756585c7828e4e61b776c1e2ce61a5e6968265": "bfbe4e1d9f8b64cd3945cc81cd774888",
".git/objects/3d/e204abe2206a7d184e868538c9a1512c189f6c": "79780bc416f978eaf9ba68eed430b96d",
".git/objects/40/c917d9ff5eeada25779c4d7bc8b28c94818a09": "b554fc808a274329ddaff491379c768d",
".git/objects/42/b529a2794d72cd0c85e9f44461f83ddfc1588d": "5727f85a6044cefa32b0341160ec88f8",
".git/objects/42/f77ee92e7c11dcff40ee82819b07f3d72a399d": "3ebdc894ba4e9eaa603dba512f806092",
".git/objects/44/e192fe29a9c326ebb6bd4326727209c6a1030e": "f033e3951223a3f37171e9b0f2e29f07",
".git/objects/46/48b2ec17b8aa2cca19b667ed0bfb7601f41953": "3da205833fed6bcaa71259f303d06b47",
".git/objects/46/a6491a48c5c5a793bfd6cbaed3c52d5b270de7": "ed2a44f4fb74d41ad063c2453db5ac27",
".git/objects/46/b4ce74a074522fc14ba40e5ae93f10a69f41cb": "745262e9036735a314d24c3f05ea96ee",
".git/objects/48/3a520ef444eeff9943261c9b5eb64074d55c91": "7ca24fa7af90396d261add37eaf6e2ac",
".git/objects/48/e304b51d5ab932c050acfc80c1445e1c034743": "b51637cf74a8e0cb048bda223482fa65",
".git/objects/49/e1cb1d9296f7db06251f60bbc2b0a4efb8489d": "bfc47cc8012cc84010e500f75f80f938",
".git/objects/4a/1b10f8ddb1b5d04474044ffcba988260f6127d": "3c98948f52c6edfbd05f6ed8bc3b0c8a",
".git/objects/4a/3673cefb4e9fe36d551f4698e0b2fd0d5dd90f": "d991615df50d36a1088a9f03121b15e5",
".git/objects/4a/824d1b5977f826ed50d13b3787189584b9e0c0": "068acfacef449dc982af4241c0ecd247",
".git/objects/4b/9737df9d9a49f2110b1fd99e20d5c72b2d2dd4": "d22ef0ec63d477481541bdac54ec3577",
".git/objects/4c/ba216b98ad26d554f135deb23479fd5f22bdd7": "7e73cf17713dd5306ea8b9d60d0841db",
".git/objects/4c/cc611872f860b49feda1f2b22aaa21a7e105b5": "15f40b8e0d6f3aafa71f9892c5916c44",
".git/objects/4d/541b26cee945e3df7f78401ff0dc824d808ca8": "b4ae30008d0a5e438da0e1bc493126ec",
".git/objects/4d/fe58ad7c648463966c78aa9dca44dd70b6ebc5": "8b2eccb1017b20b7cb97f7ae6a4569fc",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/38d2f8554299488a502d930cf6cd46a9340af7": "d54a5292dda761cafb76d0ea9641c366",
".git/objects/4f/88126491a5d2f205e8ca8d2d2576c6489b640c": "2d68682ac08de63fcc7c94f5a572fc27",
".git/objects/50/e05669e1fe79938c3a6e9e49a3add23e83249a": "0b4b7c5b138bb38b72a377650f2fab59",
".git/objects/51/3fdbba232da485907e71a189e5e4fab282cadb": "dec734491ffa4293629ad752bcf5f529",
".git/objects/52/5fa8b65f8f98573b5d6915fc1fb33ac6986002": "504541524d5b6be4d0254e6841332319",
".git/objects/54/93fdcd5b675e334d14721f9e3d41ccd718adb9": "30d856f3abf7da3d3c9244e93a6c6021",
".git/objects/56/39644988524e7cb4def1692a058005c40b319c": "eea83279c94816dbaa288422702fa115",
".git/objects/56/58f3a0d70c7e10f3fcbcb2ca7b9564e5f76cc6": "cb1d07c45a04e626060360ac6227cef7",
".git/objects/57/4e0f9002aa0923365883d4b05ee8b1a7a01b8a": "a8750389e2b75700cbc521cb312d193e",
".git/objects/57/f7217f0d63fdc92984d1d3223a87a1d671ee27": "1d1ae6f7ed76311e570e1744dc5b7454",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/c57c599b97f6c0b2a775cab3733fc38b2be376": "527887ff0edb430752b79f609becce3e",
".git/objects/5b/900157426b3e6256c12b8ad644af4f194af5d7": "144223c3c4f99093ffec250cfd05b9f2",
".git/objects/5b/ab434c6696549ea86a51a8725ed87c636f9405": "1f48fe0b8e919618708888c1f2150c5f",
".git/objects/5d/78b9c6a7f8d3fc89d3ef12ff9150515535fdf6": "8811887effd9ab3854721a680803255d",
".git/objects/5e/50eb712ed05a293b76931b6aa1a7e38f6b86d0": "26e68153dba897be3ec35cd3168e1254",
".git/objects/60/af46577483a32d9db5bbaf4a19c78795be4e7b": "8bdf061fba61b420a9dea3cb39c8d8d6",
".git/objects/60/ce13ca7038e8890a30cb45d23507f722b1e4e1": "f73d1a1b0798524ed2a9aa543dbf9156",
".git/objects/62/1622bebabe7d9957559a6609955b0ccdc2a3b9": "c4e3c6e222899ee58afced56f3e02984",
".git/objects/62/7fd43de2f76d6368b3aa2f490c0f29ec61c8eb": "5718ed68e0a320c058d6e3e79b8fa969",
".git/objects/62/865f6bea592171818dfe60332f419a3e1323c4": "0128d4ee6d73e8256942dfa0620c3606",
".git/objects/62/b3d095ee864fac111e50fb325ad4192b15933a": "4199a092fb1841159d3549481a948f7c",
".git/objects/63/1daadd49795380230239e48cdb1c8fb4bdbce5": "94a93444963a48d11942aba2552927a9",
".git/objects/63/b4f7396529ff1faef561f511c62c0666cdd59f": "71e926984775b0dfd8a8dd64c083a9d9",
".git/objects/65/04b7ca45ca570bb92cf02837c434f7b9e55ebc": "8cab76980cfceef8aefd5925f61d5895",
".git/objects/65/85847ccacc7051642840d38d40385da676ac0c": "08694c4988cad83940e7873f36da49cf",
".git/objects/65/ba58e122e23858a343b5f7140247bb2a0108c8": "942feacaeb170945add10be182167492",
".git/objects/66/3871a0a4fe22503cbcd3b41b0493ff6f3c75b6": "b7ee7670ee0f3cc928a42decf70e6c98",
".git/objects/66/4e093a1bfd38d4a77b0b242e68ec61d998e5de": "807934223347a4930b8e6ee699631277",
".git/objects/67/5e7556339ae584076a6fa4190c6b714fd53018": "9b0477526632ba3ce2d11db563e94c47",
".git/objects/67/abf4950e432a8caabe0829bf91ba4c57e90476": "a4c291b647df257435d6a7e65b3bb14f",
".git/objects/68/0b0d7c9e73610e72c83486fa4ca5a292c8621a": "0c33e73d9706c67c7872bebf4b860476",
".git/objects/69/c743e9e72078c1be55cb222feeacb78ef3af72": "41ec011e4c6d8afa3438dc3d30e5b5bb",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/8d9ca1d09927e2ec593e863419dd9da083ce4a": "812978758355586acc4d9dd258e5b7ec",
".git/objects/6c/a85e69b78e3ddcc4807338b556fb45f2193a25": "cc2cd946c52719d7481ae8cf9c92f12e",
".git/objects/6f/2a201b636f102195e9cf9de89487b32f86894e": "a7b557efe0ea10d89b03118603e20c56",
".git/objects/70/9a9c0f3ebb67eab844c010a00f1b2e4cc100cf": "9927d3ef8280034889cd3a4f8add2559",
".git/objects/71/191ca27042f21b99a7ca7e0a96c245f2dec6a8": "609b068692dd1e441b3ad7f5d41c6440",
".git/objects/71/8258698f1db4cc98a1042d7523c30d6eca83b6": "e5400bb42fd45495f66ea974c40f1b52",
".git/objects/74/6bacde1354cb58b811851a27566359b3b718f2": "b4c148ddb9b307f421c899b2ad5db592",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/fcbd238bb387d8a8933ffbba31d74c977c40ba": "eb36cd6f1518b024fd6ea51d9f671542",
".git/objects/76/1285b3b0817f45b020cb377fade5fb0082ac2d": "bcde60b3da4bb01e5df8c8a40598993b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/11bb66f26c0268f58cb4435679178346a652c8": "25e5491d5c9641f566d5d8bbe1bdf86e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/33ea7ead958fb054fa80d32b1ddc1f95f0a88d": "9d08c6141e5080c75c8f1c62f024614c",
".git/objects/7c/9caae0ff4f9ddce5c409ea5d5fc747f4d84f74": "5967c70ff6bc9c7ca7060e2ad19031bc",
".git/objects/7d/1802886456ec1be64a469c19a223d97b6d31e4": "c71e493d1905b3f34fb70af007ad8f8b",
".git/objects/7d/a5094b46255a3337f2b0ff7d8d16e04626ff52": "60db75088c073ee8100b677ed9d68cf2",
".git/objects/7f/d27bdec292b9d77b075e8b1dcd7042219807d6": "517b7f8c4df2b632edd51a49584345d2",
".git/objects/80/513d3d57fa275992e34f364065a32c1297c8de": "c080079e34013b17919329024012d7e1",
".git/objects/80/6f6cdf02f9e977a02f33c9879638e84c543de1": "4dd9c15213bea02a0ca0c454dbee538a",
".git/objects/80/886abf8b95ca7936933eea1b3b0ff1404051e7": "49fe0ea378ee90ee64dfc93ac05a049f",
".git/objects/80/95f323528cc994f6b82f2f176157493d1ada4b": "348047c9bfef3d794da8168729c49f68",
".git/objects/82/239015915f5e5c44fc82be791ae79a7bdb461a": "10fcdc7cf7c05948d6ca9d38778f265b",
".git/objects/82/56334b5a2bcf82d0becd0ca3e467b88da450cc": "b4494a78caca5d4d2deea6c62a71c06c",
".git/objects/85/63b15f43082959de5d62a00ffc58e86b5d0f0c": "0b114c83ab046f40f71839e18b275b99",
".git/objects/86/5363008828c28a65084f1a908d432bec4cc571": "25a51327d1f1eb713e75db20e95953c5",
".git/objects/86/8c83414936bcd8796cad3d51ff0abb9edfe09e": "2e3fcfc165a52a73348979239db9dbd6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e03670e4a7d0020c6c822843e3bc2318809215": "ccf94c92326688523e0f582467c15b91",
".git/objects/89/c8da611c736f676da64d4bf2fb95deaca7f058": "c14a957a842cdc26096dc1770b23fa1f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/8b/d86865faadb6390e8891d628300baeb6d00798": "4708d11f0bb7ce6faf4e360697cb6b75",
".git/objects/8c/0559ac0b2af366558931b12a9ef4c9daaa1931": "70eb3020edf4b9804da223ffa502b1b4",
".git/objects/8c/2f41b2ef190e642bda3fa6b4ac6134609c5a47": "e28f5e8a9f8bc5d055fa11fecd1f7ab5",
".git/objects/8c/b602b2b18af2505e8efcc4ad72e9ec1315a851": "400a512ccd834168d865d0cbe7c474d4",
".git/objects/8c/d38a97a4151229395473e2477c417ae5c4a599": "93bdaa18688fe81bd8d11bf7c5b2d1a9",
".git/objects/8d/94936bbd9e6a8ed7bb2ec764a25e9c423131b1": "d4c4ef90b7ca6ea8c7a879e3fc0da168",
".git/objects/8f/2c295103f74af9d538788e4464ad6b6715464b": "4380b40723518d58be92f3d16a613532",
".git/objects/8f/d6a6204013edf91222d4825da00f0264613636": "ce97db0762274e9eefeecf161bb543a3",
".git/objects/92/d2cea8b37be6f50a21ab8199acaa0094bb9278": "b6e87906e53cb1effac99a4f2c4494ba",
".git/objects/92/d6fc7d11d9a96faa625e57cd8e24ba31a854b5": "ecf128cca855de3ee5edd8d25eab22f6",
".git/objects/93/4b8361259980cbcd0cba4f64d55fbf05dd9672": "77b17d9771a2338363c7a686a3c039fe",
".git/objects/95/ce0e64b7e844df77a216be220bf748e81405a1": "110629047f579c8b26ae25c0d98278cd",
".git/objects/96/3c6f46d420a91291058ffdc701a117f1c0af11": "d3afd906d6b20fd9f70c9c9d4ebaf509",
".git/objects/9a/07a6f10b26d34ba68a2eba61d5c115b1623823": "fd95ca8a441629a9c514990921b31fe2",
".git/objects/9a/a8ff0600fc80ff818d7910110330404e16181d": "592b2b5789620e0d3cf87c3690819836",
".git/objects/9b/5bfdeebfb7fe9d74ca978bcfc970dcae52b18b": "a7be17d46289b00d4adbca5d45226353",
".git/objects/9c/10acb6797c90ce76717f96fd340af49ea17fba": "9252c953f3506988c7a1c80caec9d9e4",
".git/objects/9c/ead38b425307774bb1ccd90bf1cfa310084979": "87530a999c902c46830116e500de3db2",
".git/objects/9d/7047653ead215bdbee585d60ea80dcee9ef59b": "1ce3d14fd5c0b0e441055a67fdf045fa",
".git/objects/9e/59d5a36269100c7c43e39999e7f386d3ce36f8": "724005353e8facc73986aac184871bcd",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7f2f4842f82d7d1b7a146ac256c0f022040e0d": "6fa140033b5d5535dee7cce597f2ff12",
".git/objects/a3/0cbaad69b0034460434ed2a01979c747700a6f": "c9e26a72452951717fbf5a1134974da0",
".git/objects/a3/26c7a3b0f0f820509a89ae986e11ae84c05110": "acedfaeac25af120363b744aa36e9cb1",
".git/objects/a5/24409ccaa41604c44324f244a62c9895bedd5f": "7a48a050af289c68e75097953ac1a489",
".git/objects/a5/bc07cfe5a4d3e30a65f74df4a1248caa1f7ca5": "555ec51a2d2c112fe55da696a3dca2d1",
".git/objects/a6/a1a649c1cc65e27c9d0812be951d0cd5540a30": "937f6d633e053d3aba659d7e2728d2fb",
".git/objects/a6/c9c5aee752369a27a3293479a43fdb1a7c6a99": "490eefbb841717e6e718dcba1139d254",
".git/objects/a7/d149bfe5617c0e81a4fcbc59ad289c0a10c91c": "36b2b8012731908bf1c6667a2c6e41ad",
".git/objects/a8/87d8fc5cad91774baafba573774f489374d817": "e376c6c68ca4e71a0cbeabca24f625b2",
".git/objects/aa/c4ac78109a191c7e8c39f5c23e854d3853e9b4": "3f8d551f7122b4bc4a42cce222e76e3e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/59d513dd76b120173be1ffb0657298e463fdbe": "5148c5b3476407ec86e19c44170d11e2",
".git/objects/ab/966e6914d69a3193262ac187b3ae633e5aafcc": "61b4c10e6344cc1b931374f7bc51ba2f",
".git/objects/ab/d55c7fe90520a1d5a2947285be594abaa571d0": "bc7f4f1f0de1b434843f243d9dad17cb",
".git/objects/b0/74852e0ebec8074c8f0654d69200d376f3297f": "c8d3953a3049d5516ef205900f39c74c",
".git/objects/b1/3073b41ff44a72640b00d5df98862295427eae": "9aa212f0b3f976a33e8ac9b54ea59bc5",
".git/objects/b1/8f5ee98c14c7587da5bb019adfecd4d755ac45": "b1125df6c98234c1fe80965d92076abd",
".git/objects/b2/986b9911121ec56750dd35a09377f90880140c": "31724f0ce21c400e9b7310d794b42507",
".git/objects/b4/9690e628227490f7632318a3b0ec82eaff43f8": "6be90bcf8b658795ce6ad9f7e5ab36b2",
".git/objects/b6/0a92a0911a9f7a299c97c3245bad4c75410000": "e0b455347f9afaa6953f6fdb5adace3e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0ead05b6efd9260e1b44954d55230a2cd5375d": "4c24a38561c4162f2d7f978397a71122",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/429ade0748d4e409a54512bb1082401a3475cf": "74bdd3d8997c995c385a0e55bee02c2a",
".git/objects/bc/578fdbbb9bfb2699e594e24466f560a9853f45": "88ff8a33e4e59a3509268d68dfe79b82",
".git/objects/be/0f3958b8421ea83fbfc22c2a56f060191559f8": "a783bfc69c20f51455e3938e6ab31628",
".git/objects/bf/e1ec26d5736a3f0b0f1c909c5800fcb2d43824": "226afcc403d48add9993833a9b4e97d1",
".git/objects/c0/944d40efd6badc9acd6a4af992b6b4ec94477a": "e183b8a1d5280f542567da0e3d25380e",
".git/objects/c2/4aefb9a7beac6181b218dfd4fc6051909a436a": "fbbc5f39ea515e4a613e67c7d758c548",
".git/objects/c5/9552f36e1c79d116c4140c09056bc2efb53648": "53a0ab655fbbc8b6583192e798ae3ed5",
".git/objects/c6/fcddbe7d9513dd1744b7840c02ff7c335437b7": "96ede3f2f52ddaa4699b14f8e9e55ac6",
".git/objects/c9/e951adda4f471a0159dfd95fd5c93a219a120c": "9e91e4f25fe8bb25996ebe41752dfe25",
".git/objects/cb/cfad58fe0a7892306e5a34350f773884bed662": "ee62f9e948a0896238098f135ef55e8e",
".git/objects/cb/e624b1a625e871af5207c578e36540de0c9336": "111248f6882b11c7eac8c6a9fe090901",
".git/objects/cd/03ff4cc091e0e846d43477e2738a89038bd9fc": "0b2651464c1f012d74d51cd7701931d1",
".git/objects/cd/0eec1546c52d9eb246f11ddd60793d6b092445": "f2675bad113459902d0d8d65a8ba2474",
".git/objects/ce/014a5b635ad9a3e5da01e3d92a0fa31a618b5c": "c8a8f741f60f614d724e151e698a15a6",
".git/objects/ce/14e0e844a3c82e869b039b14f1f20d44c85fdd": "0eaccfcb2ed02a217f1057f922de981f",
".git/objects/d0/9c6b419722e1612133528ba47dd505e7b39fe9": "25b06ba64b6ea56f9d9b0ca73a002d8d",
".git/objects/d1/4be81454926dbdd084a8af88a98f87231a8e06": "5f2938f289c4d6797aad8e584a71bb6b",
".git/objects/d1/96b5bea95d13b5bd679d641d1d61c98370c215": "9935b899cf32a1d6b4766b2749f072db",
".git/objects/d2/3db3421bf37d664289f9614f9a33082cc2d922": "4a97d55e031cb41df9aa925d61a94047",
".git/objects/d2/9029b9b1679c1443bee78d21badf72e83d6f8e": "3a0f49141849383174b208f44228f862",
".git/objects/d2/f59242d0c70713d670c9e2e15486fc18a5eb19": "6bc8511a103578105091b28c0936a6c7",
".git/objects/d3/8f31f2affba8b81fe566db879a322e9c250389": "b93dee50bd735ae03831ae2775b45ed8",
".git/objects/d4/24b4400616e58fa0dbe4ffff64138a0af6e053": "f1219eb48cb6a8d71a8967309cda8b50",
".git/objects/d4/e110347900fd7e43caadf166b5fde49fd2b8a9": "3078d2d47416f5342bffac5e279d31e6",
".git/objects/d5/501192409f87c2035b4d9ffb198679bb5fc1d5": "24a1c0971a00c12af31893f3342cbfa5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c4e28073bd37f11512afd7a38c09ca485fb6d4": "4210ec21edc21a15346e37c698d2b427",
".git/objects/d8/0bc236fe2254795c156c57f3f64fc5fc5c1a23": "9a8eed73d63a7ce5fb35a4f815b299c9",
".git/objects/d8/160e948223c173129ac4bdec1b9d2807768e95": "47585bda7edeb3eaf08a36210465d67a",
".git/objects/d8/d7810059e139cb1374011911f5f6b6b3b4b7ef": "0c294a0abbbc619818a4ef164c6297c1",
".git/objects/da/da4081beefa206665846632d8d01b59a05472b": "0634dc55cfdaa3d4d14ae63bd4df193d",
".git/objects/db/587b33f60fe69ae924c937a5890eaca5983465": "b05a72a4f4a1f4e415cdb36d8b0dbb66",
".git/objects/db/942f3de4302d75ec9d46a7d6397d283a44f3e7": "25d6819b7398bfdb5ab9ad9d48f9ed4f",
".git/objects/db/b9c866d2e3f97dc22ce9ed0df21541bf90b4c2": "ad6724a1bbcbdecac6b8e025b05dbdb8",
".git/objects/dd/357e767248a8c6332e10912c4b7456f1091c77": "862968843c6e34ed50c3ca0f724b621f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/df/7ad1d56d1d317c18dff70aec4eba36bdb6884e": "f857a0580a05176875fc447f544535db",
".git/objects/df/be27c778f7932591f431e4a23bd76455e0d1cd": "0aec2bdb3dad75192792febfefbf44c0",
".git/objects/df/be8b6beb094f95c7b2f75d224a66b1a157f864": "4e994c0d7f106b7d65e67c193d90cac4",
".git/objects/e0/2cab41ecdc910afed1abcebd07e19b935c1b6c": "e17d5e57caf8cb0b6de30ef5f3ad732f",
".git/objects/e0/f84ed86cad5434bae303850156e1bdb6d02e24": "6c0d7d990836dc16115b47d6392d5840",
".git/objects/e1/1057dacf94405bda61d74d84aae78cf57a376a": "06e6c46d3e2cbdf13989394761d8c437",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/429e15b46f94e09bd430a709ff80b51c734807": "20edb5bd2a981514140a1ddb715f7ff8",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/467576190b2e1f4c14a8c070eef40f1ca8dede": "8c60c3fb86174d36fb1af96177b5cc57",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/cfed22a00dcb9e6ad0b9b4f8708de9c454df60": "ea26421d53ce860ea5e3fd98ea6c8fe4",
".git/objects/ee/20ef482f1b268cf8111706e1caf23cc98babd7": "4e616daa97f7b0af9e77ec48f7e23765",
".git/objects/ef/d8a952e3e9c634968258fb622ea6a83c476290": "d45afcd127d02d8fa272c4144b1e5c41",
".git/objects/ef/dbc2ec9840768fadef1ddea10c1a62b8e1d5b8": "388c85149effb8a458dfb8a4dbd1238e",
".git/objects/f0/2808d5c04d74c1b3001f719f0984b7a3e11863": "95de1e595edec4420a33c0cc3e45a434",
".git/objects/f0/fde8addbc743eb720d041c01dff76931f61724": "e67c30c41ed2cdf71ddf0c3a269cf465",
".git/objects/f2/0dcddae550eb4c77c3de5e2d39d6810020c6f9": "bc3a9d3cf077305819c14e8c4101a1b3",
".git/objects/f3/595fe0bd582143a5da7e28bed25097571820bb": "00d0676ebb2d03ad23336f77987f2dbf",
".git/objects/f3/9a462309142599b296993e8cb67283101aea98": "2e5b521b20272d5bbd8c21624b483259",
".git/objects/f4/a0e5fda70fb914b30ab5404d24eb6bc9e7bb5d": "8dda42afd4db226234cdec8bf61765b2",
".git/objects/f5/602904a7f145391f2ef72bd655a1b0aca8ce3d": "b27e76be54b851604513520836408707",
".git/objects/f7/bf973e7ca268c9b81e247e05143d394a285590": "051f40e8cf05c24102f993200a9fd003",
".git/objects/f7/fb042713bb971cccc8f9a5621ec52b5ca0a012": "e31bb20c57c171fcc8dd97fd580ffac2",
".git/objects/f9/29a6168ef27eb2033c272c1ad7bd35ea6e0450": "b331136d3467f744442378789ece76aa",
".git/objects/fb/1cc2be89f01aa20b936f381c97cc42f0726726": "df1893fd0f8695247d1349a1f4268cfc",
".git/objects/fb/d695aa2cd55bd48dbf118bfce78bb135ffc3f7": "68e866c33033a78147a6f9d1f01976bf",
".git/objects/fd/df867517ed81675b07de90f73ef8afd224babd": "2fa6e746ee3e740e5e84ab244e41d588",
".git/objects/fe/0c406712b6b39d72b1c203b2a9b828157020d8": "d81008f97e59a6239c6bcfa87530fd50",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/ca90827a05ae7f1fb970e7bfdd58122a8c7181": "3fbcc99ffb9871272407422915fcb58c",
".git/objects/ff/617d4f27568a06b92d69ef458c184b2ef1fcbf": "2288a1630c3575cf14d24a17169d937a",
".git/ORIG_HEAD": "2bd0e52a32f9230f9452e5ec643bcea3",
".git/refs/heads/main": "a1ac981b30ff2e94f7f98e57f0b2b6be",
".git/refs/remotes/origin/main": "a1ac981b30ff2e94f7f98e57f0b2b6be",
"404.dart.js": "09573a8f211743e679f06137e2356e89",
"404.html": "6e2c19d1a577b0c3d7fcde12adaaa8cd",
"assets/AssetManifest.json": "6b9da719603d1530e0ca1b409a64996e",
"assets/assets/blue_gradient.png": "e2823fc7ab1173ebad27c4b1e50149ff",
"assets/assets/green_gradient.png": "591f0cf6d66520d83d21f24f18a0152b",
"assets/assets/hellofresh.jpg": "855f2f67595edbe49ba0f60987439da3",
"assets/assets/memoji.png": "d78ef41142e919e5218f8a8a0fb3ee9f",
"assets/assets/orange_gradient.png": "38821c079148b7e7d40b38a667d22bea",
"assets/assets/pink_gradient.png": "3ec049d766cbf9d494dcd880d4ebd34b",
"assets/assets/purple_gradient.png": "19a1f528ebbf8f3fac3b26ce3b323ca0",
"assets/assets/resume.pdf": "7bb3475e68266ed9bde707fabc779fd2",
"assets/assets/weather.png": "a8dfea5031bee74c4941529d21526f8e",
"assets/assets/weather_js.png": "ef572183050f59cdbf738146c4fdfa5c",
"assets/FontManifest.json": "3e57a18a1d6c4bb401969a7bad19e9a6",
"assets/fonts/AppIcons.ttf": "2f5b83d3aa6276dfeba057173e9e93c0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/NOTICES": "33937003e72b59ce3b227e56eae6363c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9414461d89c4b6f0f8bb60890c34269c",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "45c0f10464910b505eae303c44c4198a",
"favicon.png": "2db3e3b29d09335e32bc93b025bac810",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/favicon-1024.png": "e692474a10617cb9e3cca67fffeaadde",
"icons/favicon-192.png": "d4e66b90cd4b9cc53c3b713c33774c06",
"icons/favicon-512.png": "f527c74d71a4965210799adf31d0d81a",
"icons/favicon.png": "2db3e3b29d09335e32bc93b025bac810",
"index.html": "7a80bd022a1739dbb04c4c770f7bbc17",
"/": "7a80bd022a1739dbb04c4c770f7bbc17",
"main.dart.js": "d8e2f575beee6ccdfdfbe36adad7e852",
"manifest.json": "c3ac7f7801b2f0cb5d03d78b322a58fb",
"README.md": "9a3549f1bc06dbdb49c2306900528508",
"resume.pdf": "7bb3475e68266ed9bde707fabc779fd2",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
