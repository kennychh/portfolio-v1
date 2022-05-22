'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83ff70d809e852d99432945664e50be7",
".git/config": "d47401d657e24b0063d1dc38313cbfce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b9fd7f73306ac0e52c9c210f813b8873",
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
".git/index": "1027e37560339001e9980eb3b8afe86f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "26fafb27d6a61e19bcdaf36f30caa68e",
".git/logs/refs/heads/main": "b3d901cb38ad280d60fad996fa57871a",
".git/logs/refs/remotes/origin/main": "6f5b92b40658d93b3fa03b6824a12788",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/8bbc87076d1528e4c3bdec081d5da0082eb580": "02e87bb8ee00e8ec308161e131df78bf",
".git/objects/01/0d2877362c5f8b736e787679133f0a96b6c176": "1e7e1351fddaa046272d93bcdf6510d9",
".git/objects/01/4e4ec605139a1f68a69220714ff56c76c7ff3b": "e8397ba9379498c6882cfe60c85561f9",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/5481da04cab55a74c3fe697ded5706f02fe273": "f55d831b13862aa0a164643685b3651c",
".git/objects/02/d876db60708ed8382cb83ebefd7d8feae9350e": "3821a15fa09c31b82fd92a8c700b312a",
".git/objects/05/cb963a669acce54c218a634e995099ebf37764": "56d42b726cc90cac771c344487fe4af3",
".git/objects/07/3918b3e5c696cf9944a7700bc8a124798d8585": "acecfd07b4086b8a9cec5786fcd7de95",
".git/objects/07/4af1685aa6c1c6de4e1398d5897b4b93efbe13": "1769a4826d37504145bf1fe3706f9c11",
".git/objects/09/b25ad804bed7d905c483c0fb614c3f116ecf98": "3d9bb69dc581570406b0e55ca5323dd2",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/124d71a736e94570e1b22f2bb0fd8fb2d54f72": "6d8d644a3a78d39ca3bdccb70737f748",
".git/objects/0f/7ba27ad63d42b34aa3e60ce78398659a304506": "74e6d116f27bb613a52b25266f293fa5",
".git/objects/13/d56e54e3c40df2e18a9840137cfd137449111e": "57bf1fa186ccb9c9bd3b085d8dc42201",
".git/objects/1b/0935684012cc7a3af7af1d390381f28a6893b2": "032e7dd422105524d1f7789ab9ca6775",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/76d829fa0e5f05d925f92a2314c776df2df4d3": "2a3d9b1cded1157e2aa3a0425345b52b",
".git/objects/27/07f98c73aee878d32c72d5f2563d00437b3ccc": "87152f3d4dcd3216b6995c7953b37a1a",
".git/objects/28/d78a686af300910a30a66e34b9bb373e3f55aa": "cb5139af3c434791e1c15d7c8a1e37e3",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/4b2e5fd5b006c958e727eb4285ba7168fe07cc": "d7cdbd6eb85d443e4fc609300ad0fd1e",
".git/objects/3d/3d5639706669c8dbb267c544acb6d96511d7ec": "871725af6b3ba0678d23e48451cdf1d4",
".git/objects/3d/e204abe2206a7d184e868538c9a1512c189f6c": "79780bc416f978eaf9ba68eed430b96d",
".git/objects/42/b529a2794d72cd0c85e9f44461f83ddfc1588d": "5727f85a6044cefa32b0341160ec88f8",
".git/objects/42/f77ee92e7c11dcff40ee82819b07f3d72a399d": "3ebdc894ba4e9eaa603dba512f806092",
".git/objects/48/3a520ef444eeff9943261c9b5eb64074d55c91": "7ca24fa7af90396d261add37eaf6e2ac",
".git/objects/48/e304b51d5ab932c050acfc80c1445e1c034743": "b51637cf74a8e0cb048bda223482fa65",
".git/objects/4b/9737df9d9a49f2110b1fd99e20d5c72b2d2dd4": "d22ef0ec63d477481541bdac54ec3577",
".git/objects/4c/ba216b98ad26d554f135deb23479fd5f22bdd7": "7e73cf17713dd5306ea8b9d60d0841db",
".git/objects/4c/cc611872f860b49feda1f2b22aaa21a7e105b5": "15f40b8e0d6f3aafa71f9892c5916c44",
".git/objects/4d/fe58ad7c648463966c78aa9dca44dd70b6ebc5": "8b2eccb1017b20b7cb97f7ae6a4569fc",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/38d2f8554299488a502d930cf6cd46a9340af7": "d54a5292dda761cafb76d0ea9641c366",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/78b9c6a7f8d3fc89d3ef12ff9150515535fdf6": "8811887effd9ab3854721a680803255d",
".git/objects/5e/50eb712ed05a293b76931b6aa1a7e38f6b86d0": "26e68153dba897be3ec35cd3168e1254",
".git/objects/63/b4f7396529ff1faef561f511c62c0666cdd59f": "71e926984775b0dfd8a8dd64c083a9d9",
".git/objects/67/abf4950e432a8caabe0829bf91ba4c57e90476": "a4c291b647df257435d6a7e65b3bb14f",
".git/objects/69/c743e9e72078c1be55cb222feeacb78ef3af72": "41ec011e4c6d8afa3438dc3d30e5b5bb",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6f/2a201b636f102195e9cf9de89487b32f86894e": "a7b557efe0ea10d89b03118603e20c56",
".git/objects/70/9a9c0f3ebb67eab844c010a00f1b2e4cc100cf": "9927d3ef8280034889cd3a4f8add2559",
".git/objects/71/191ca27042f21b99a7ca7e0a96c245f2dec6a8": "609b068692dd1e441b3ad7f5d41c6440",
".git/objects/74/6bacde1354cb58b811851a27566359b3b718f2": "b4c148ddb9b307f421c899b2ad5db592",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/fcbd238bb387d8a8933ffbba31d74c977c40ba": "eb36cd6f1518b024fd6ea51d9f671542",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/11bb66f26c0268f58cb4435679178346a652c8": "25e5491d5c9641f566d5d8bbe1bdf86e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/33ea7ead958fb054fa80d32b1ddc1f95f0a88d": "9d08c6141e5080c75c8f1c62f024614c",
".git/objects/7c/9caae0ff4f9ddce5c409ea5d5fc747f4d84f74": "5967c70ff6bc9c7ca7060e2ad19031bc",
".git/objects/80/513d3d57fa275992e34f364065a32c1297c8de": "c080079e34013b17919329024012d7e1",
".git/objects/80/886abf8b95ca7936933eea1b3b0ff1404051e7": "49fe0ea378ee90ee64dfc93ac05a049f",
".git/objects/82/56334b5a2bcf82d0becd0ca3e467b88da450cc": "b4494a78caca5d4d2deea6c62a71c06c",
".git/objects/86/5363008828c28a65084f1a908d432bec4cc571": "25a51327d1f1eb713e75db20e95953c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e03670e4a7d0020c6c822843e3bc2318809215": "ccf94c92326688523e0f582467c15b91",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/2c295103f74af9d538788e4464ad6b6715464b": "4380b40723518d58be92f3d16a613532",
".git/objects/8f/d6a6204013edf91222d4825da00f0264613636": "ce97db0762274e9eefeecf161bb543a3",
".git/objects/92/d6fc7d11d9a96faa625e57cd8e24ba31a854b5": "ecf128cca855de3ee5edd8d25eab22f6",
".git/objects/93/4b8361259980cbcd0cba4f64d55fbf05dd9672": "77b17d9771a2338363c7a686a3c039fe",
".git/objects/95/ce0e64b7e844df77a216be220bf748e81405a1": "110629047f579c8b26ae25c0d98278cd",
".git/objects/9a/07a6f10b26d34ba68a2eba61d5c115b1623823": "fd95ca8a441629a9c514990921b31fe2",
".git/objects/9a/a8ff0600fc80ff818d7910110330404e16181d": "592b2b5789620e0d3cf87c3690819836",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/d55c7fe90520a1d5a2947285be594abaa571d0": "bc7f4f1f0de1b434843f243d9dad17cb",
".git/objects/b0/74852e0ebec8074c8f0654d69200d376f3297f": "c8d3953a3049d5516ef205900f39c74c",
".git/objects/b1/3073b41ff44a72640b00d5df98862295427eae": "9aa212f0b3f976a33e8ac9b54ea59bc5",
".git/objects/b6/0a92a0911a9f7a299c97c3245bad4c75410000": "e0b455347f9afaa6953f6fdb5adace3e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/03ff4cc091e0e846d43477e2738a89038bd9fc": "0b2651464c1f012d74d51cd7701931d1",
".git/objects/d1/96b5bea95d13b5bd679d641d1d61c98370c215": "9935b899cf32a1d6b4766b2749f072db",
".git/objects/d3/8f31f2affba8b81fe566db879a322e9c250389": "b93dee50bd735ae03831ae2775b45ed8",
".git/objects/d4/24b4400616e58fa0dbe4ffff64138a0af6e053": "f1219eb48cb6a8d71a8967309cda8b50",
".git/objects/d4/e110347900fd7e43caadf166b5fde49fd2b8a9": "3078d2d47416f5342bffac5e279d31e6",
".git/objects/d5/501192409f87c2035b4d9ffb198679bb5fc1d5": "24a1c0971a00c12af31893f3342cbfa5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c4e28073bd37f11512afd7a38c09ca485fb6d4": "4210ec21edc21a15346e37c698d2b427",
".git/objects/db/587b33f60fe69ae924c937a5890eaca5983465": "b05a72a4f4a1f4e415cdb36d8b0dbb66",
".git/objects/db/942f3de4302d75ec9d46a7d6397d283a44f3e7": "25d6819b7398bfdb5ab9ad9d48f9ed4f",
".git/objects/db/b9c866d2e3f97dc22ce9ed0df21541bf90b4c2": "ad6724a1bbcbdecac6b8e025b05dbdb8",
".git/objects/dd/357e767248a8c6332e10912c4b7456f1091c77": "862968843c6e34ed50c3ca0f724b621f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/df/be8b6beb094f95c7b2f75d224a66b1a157f864": "4e994c0d7f106b7d65e67c193d90cac4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/cfed22a00dcb9e6ad0b9b4f8708de9c454df60": "ea26421d53ce860ea5e3fd98ea6c8fe4",
".git/objects/ef/dbc2ec9840768fadef1ddea10c1a62b8e1d5b8": "388c85149effb8a458dfb8a4dbd1238e",
".git/objects/f0/2808d5c04d74c1b3001f719f0984b7a3e11863": "95de1e595edec4420a33c0cc3e45a434",
".git/objects/f3/595fe0bd582143a5da7e28bed25097571820bb": "00d0676ebb2d03ad23336f77987f2dbf",
".git/objects/f3/9a462309142599b296993e8cb67283101aea98": "2e5b521b20272d5bbd8c21624b483259",
".git/objects/f5/602904a7f145391f2ef72bd655a1b0aca8ce3d": "b27e76be54b851604513520836408707",
".git/objects/f7/bf973e7ca268c9b81e247e05143d394a285590": "051f40e8cf05c24102f993200a9fd003",
".git/objects/f7/fb042713bb971cccc8f9a5621ec52b5ca0a012": "e31bb20c57c171fcc8dd97fd580ffac2",
".git/objects/f9/29a6168ef27eb2033c272c1ad7bd35ea6e0450": "b331136d3467f744442378789ece76aa",
".git/objects/fb/1cc2be89f01aa20b936f381c97cc42f0726726": "df1893fd0f8695247d1349a1f4268cfc",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/ca90827a05ae7f1fb970e7bfdd58122a8c7181": "3fbcc99ffb9871272407422915fcb58c",
".git/ORIG_HEAD": "8290e01b0abe371bce076b0e7ee83e39",
".git/refs/heads/main": "51cbaf50e2d48b35396fb99067fb4c9b",
".git/refs/remotes/origin/main": "51cbaf50e2d48b35396fb99067fb4c9b",
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
"assets/NOTICES": "ae4b513bc5c210eb984fb0e64dbb8659",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9414461d89c4b6f0f8bb60890c34269c",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "45c0f10464910b505eae303c44c4198a",
"favicon.png": "2db3e3b29d09335e32bc93b025bac810",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9dc502b14d7b427a169e33e63fb81d42",
"/": "9dc502b14d7b427a169e33e63fb81d42",
"main.dart.js": "c43e15c38218b2d401dd98747f057a09",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
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
