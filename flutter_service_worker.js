'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ad4f03ee918c3ebdde6b26a65d68b452",
".git/config": "e7961d090d6d25d888ea26aa3f292ac4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ad2cb573d17a44172370057dcd9f892f",
".git/index.lock": "60300e701d9b0183a32fb8335a458c9e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b1d14d491ad484941aaaf2629ac4d9b5",
".git/logs/refs/heads/main": "b1d14d491ad484941aaaf2629ac4d9b5",
".git/logs/refs/remotes/origin/main": "e7d4a616a96452da8f94e3e8399e127c",
".git/objects/01/3828040ff0c295d0c7679180d7051e57829c0e": "ed438f71f9ae0f50433facfc7e0355f5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/8f1df65cdf1d64e0a6dd1291a590487a5a90ce": "45785bea1268b489fedd3193a18ef025",
".git/objects/0a/e47528c7f04276e75478f22252f128d4595b15": "3532032decaee19ca8cdd506d49158bc",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/13/4e2dee2b7fcaa9adae8c57e190d2b044d0eb16": "d77a44dae3b0e3b4070f90e3329e518b",
".git/objects/1d/a3c5fe2d09ef067e6627cab7090230b7dde37b": "110244d44b2ffa253db0996e82c20fae",
".git/objects/1d/c2a3b43aaba701e7189a3d9eff5e1c23cd0ad5": "40c3b026ea303edae4c739c24e028160",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/402c3e1d5cb0f285dd993cade342eeba39338a": "3a1f895c15b050a3b0c1ff65844741dd",
".git/objects/2d/2d0367bd5acfcf4e46fd7cb18b055a912aece8": "f0149a4791fd7e538e2dd60a7a66820d",
".git/objects/33/b13627be316d71d42013c03db7068e5b06d53c": "d0a9e0cfc6496d38fafbcc14bdb3efdc",
".git/objects/36/7eed340391ee66a5dafe118dac821bb2600aca": "c0efc48cbfaac36898e4485c59e6ff98",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/42/14e86ffce49ea43ce874cf9c0ecd053f2babf6": "d17382f7062fe02e6c8ed76f49bae0ef",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/680c8fe74b36f2663d58a8c1a53a271404fd59": "f7bde90f4d8cec50e4d46e442e0a4092",
".git/objects/46/53b76c80383cbce2452ddbdab318ab3fdab83c": "dcbaad871d65cd2c4ff15449a97cad4f",
".git/objects/47/de6894d8bc1b2d99484129089baa78820da071": "5b7e1951ba61bffad5d7db9f950c8d12",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/810300cc8243dc1a5c958d88ffb3c6f5bdd8a6": "53e57c9b666d31164c5377e2413c762c",
".git/objects/49/7a0ee5fe2569596faab6b2e2f45aea9ce2645d": "db0fc5ff14ebec19196d90bc2e0b4406",
".git/objects/49/8415ac8fd9436bed537b2cb06632a1a93f142c": "efc719cc02247e386cf5fe24aa388c7c",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/4f/b61b801a3f5e47a7797742efc2d742546a2d7d": "9ae57fd9cf82211744cb6314c2b7a3ed",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/953461fbed68d1919d52651ffe53c377a97ac1": "5cc1574b53a06f62b66e90a034eef6d5",
".git/objects/5c/fe4753103774e0fe77e0befcab54e2e2934614": "35e9edc34dfe6a7f5692281dcb5a116f",
".git/objects/63/354cee9ba47ca3e5e14f35f0f66c89af38abb7": "5899c6400be78737483859503adb0f80",
".git/objects/69/8ba5355ad6cbb06cdc496df9b5c22e6f46d742": "0dcd8145122488d4e47ee89dfd5e2c77",
".git/objects/6a/be80e27594f0832b9d93f8fb602e6226117192": "3d69a52724c63aace999d739611b4aea",
".git/objects/6f/b539e8b6b2b946557b27ad4cd1a34245178299": "9d3aa8e5b15bec7b1f166f4a2cc8436c",
".git/objects/70/f5e6775a7ba2aefbe009408597a5127ade0dd2": "d6dabc138eed68e086b1c87a1cc6bd50",
".git/objects/73/42eb6cbd06e5459d0cc4db876cb878bac08757": "b6968775318df7c852412ec9a5752dac",
".git/objects/73/bdf656f3c46eb74b3c30be7eaf33a6667de6a7": "5bbc3094dbf792b2095ea268b5c63dd7",
".git/objects/78/7dcd3af290916a8c14b3fdc15d28d53976bc95": "76bc985b151410643bb5c84cfc1fbe2a",
".git/objects/81/3f84cfad09a829854f8e0e3b86e0e9f27a0aac": "8218d1c310de384adf6f6fa3ac49ec40",
".git/objects/84/6427962bbc19e78a55b0b0896a96e9e4040882": "bdbffb2f975c1f05a34ba9d6a721b38d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/1b0e15c045bb18de570f4f5cdfe7edde575330": "0368f3c4fafd8535af7ae2b347ef77a0",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/98/88eb03479b5b294b45e3f50cc63752b52df47b": "6368b5dd0c9296f8767bc6cde63dbf44",
".git/objects/98/ac45cc1c0a67779f51a86580693c8e98b5d4fd": "d293224ba0c44e6f2e7c5aec519ec1cc",
".git/objects/a0/c7711f2f16e7f8021ae443fbd250446279d664": "8a1a83144779c4fe9e5cf3e50f6365f6",
".git/objects/a9/3d2d2c0bb847c33dec89224df1da046c027277": "5c4af0d9bdcfe6f3379ba32448a4d736",
".git/objects/b1/3a3cde5aa92b71aec2c664d27c2b0f6771e163": "64f53d4cccbff3ac77ac50732d5d511b",
".git/objects/b1/fa336cd52b3d88269920d325505a70c95225d9": "31e12607fe516d781d998236dc6d21ba",
".git/objects/b5/ae17b7b40a7665ee58158c6fefaad4c18a61f0": "02568b9b256071f18d6538b332a0b184",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c8/be4e90de135dd964c61b664e84035b94277533": "743ac45c5f6b23d8b0788e2d17eb315a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/4ea5fa4bc385cc637f5f9c5e561c21db47c905": "e45b94aeb55736cef39d71a005f7e94b",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/8a8373067419c7fec89fc78ca44c0197e77ace": "51212de197954890ada69dd9061ae9e1",
".git/objects/e3/9d6f6a81700eaa72d949b69c64ee1869c08c9e": "2ff69c6113804cae3e77ca20a91c82c3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/aa5d4fc2f0ddfe09c73fe83e7e4395c2973010": "38693f922284200a3372fc4dbf076999",
".git/objects/f0/b37405eefc697d31d9b504ff9871f52db24bd0": "46417891b88089c8f06e24920fac15fc",
".git/objects/fb/2b6df1f379d65594b1dbb73e80053abf1df4aa": "bddaff0568eb9c0f8ce8b1f6fb4ecd9d",
".git/objects/fe/a1176153f6382b6d7c2579cd6a0a0041956ebd": "f5882fc08dd3702fc57799ffb2781136",
".git/refs/heads/main": "1995f6251f832cabb743ed22841ddb79",
".git/refs/remotes/origin/main": "1995f6251f832cabb743ed22841ddb79",
"assets/AssetManifest.bin": "266f6d7105d5b5c2724afb376119bcba",
"assets/AssetManifest.bin.json": "55f464cfa8e19885b65f74e6a3d87be8",
"assets/AssetManifest.json": "c398f99e95d24a42b05699d75add046d",
"assets/assets/background2.png": "a5ab6147fce461d19c1551f9fb638d8d",
"assets/assets/certificates/coursera%2520python%2520data%2520structure%2520certi-1.png": "4a592ef05b21669ae878895b05a5f98b",
"assets/assets/certificates/Data%2520Science%2520Certificate-1.png": "42d371efaea55fe289d8e1a81f97ba28",
"assets/assets/certificates/Getting%2520Started%2520with%2520Neural%2520Networks-1.png": "1a71812b6b043a8e692ba7757533957f",
"assets/assets/certificates/Machine%2520Learning%2520with%2520Python%2520Zero%2520to%2520GBMs-1.png": "5e904a3c95a96f18109752a125167111",
"assets/assets/certificates/Natural%2520Language%2520Processing-1.png": "02bc3b7ea3a1cdc982ea89582f50309d",
"assets/assets/certificates/Programming_For_Everybody_Coursera-1.png": "180a8ccae5ef3306efb1b9e80d865357",
"assets/assets/icons/github.png": "bb04d77a846e6beca811c4be1d8e3442",
"assets/assets/icons/instagram.png": "1888146de0e5e367d613ce554df437cc",
"assets/assets/icons/linkedin.png": "400c5e277dc5c9f776f035dfcc843de5",
"assets/assets/images/bachelorcollege.png": "9201b9786e148b758a84e94ff2f4e5c4",
"assets/assets/images/profile_pic.png": "a88a01d5624b1e1b842ba90b6305c57b",
"assets/assets/images/UB.png": "401c69cf3541c02c735c8238cbbe2698",
"assets/assets/projects/project1.png": "8d780ceb95673dfdbc6f0f9910b71fc2",
"assets/assets/projects/project2.png": "19b1e559d877ab25a826d441139d4ad2",
"assets/assets/projects/project3.png": "dc1c3b3e0f700240d48ec037f2fd33af",
"assets/assets/projects/project4.png": "8995d9a697c0db1c5ebbe3d610100b16",
"assets/assets/projects/project5.png": "8e90beac57f5f803dc97e965503fd94b",
"assets/assets/research1.png": "65cfd7701527b7808575e41737a7cec7",
"assets/assets/Resume_bhushan.pdf": "cedb299038a056de4715034045628b30",
"assets/FontManifest.json": "bac1c034ba1d3b978a241cf660c97e51",
"assets/fonts/MaterialIcons-Regular.otf": "7273816f1c25d4ad48b621daba51ceba",
"assets/fonts/SourceCodePro-Bold.ttf": "2ffe6059c12752d6c7c20cb5e8f78bea",
"assets/fonts/SourceCodePro-Regular.ttf": "d1f776b31a50ae68ace3819fdc58b065",
"assets/NOTICES": "686cb020f51e2dd79b87c80fc9d1d69b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c6ac53b3051aba3975cff5413027e02",
"/": "2c6ac53b3051aba3975cff5413027e02",
"main.dart.js": "5a91982c168a2fb585f9ccb5c43f766b",
"manifest.json": "7428f3e970bc27ce92c68a33b5aaa27c",
"version.json": "04a265a34776b80c11723f26a788a07c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
