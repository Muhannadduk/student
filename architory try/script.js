// 1. كود السلايدر (الصفحة الرئيسية)
const nextBtn = document.getElementById('prev'); // تبديل بسيط للأزرار حسب اتجاه التصميم
const prevBtn = document.getElementById('next');
const groups = document.querySelectorAll('.cards');
let currentIndex = 0;

if (nextBtn && prevBtn && groups.length > 0) {
    function updateSlider(index) {
        groups.forEach((group, i) => group.classList.toggle('active', i === index));
    }
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % groups.length;
        updateSlider(currentIndex);
    });
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + groups.length) % groups.length;
        updateSlider(currentIndex);
    });
}

// 2. قاعدة البيانات الكاملة لجميع الكروت
const linksData = {
    pngs: [
        { name: "NONSCANDINAVIA", url: "https://www.nonscandinavia.com/silhouettes", img: "images/res-nonscandinavia.jpg" },
        { name: "FREEPIK", url: "https://www.freepik.com/", img: "images/res-freepik.jpg" },
        { name: "HICLIPART", url: "https://www.hiclipart.com/search?clipart=architecture", img: "images/res-hiclipart.jpg" },
        { name: "SKALGUBBAR", url: "https://skalgubbar.se/", img: "images/res-skalgubbar.jpg" },
        { name: "MRCUTOUT SKIES", url: "https://www.mrcutout.com/skies", img: "images/res-mrcutout.jpg" },
        { name: "CUTOUT PEOPLE", url: "https://www.cutoutpeople.com/", img: "images/res-cutoutpeople.jpg" },
        { name: "POST DIGITAL ARCH", url: "https://postdigitalarchitecture.com/", img: "images/res-postdigital.jpg" },
        { name: "PNGTREE", url: "https://pngtree.com/", img: "images/res-pngtree.jpg" },
        { name: "MEYE.DK", url: "https://meye.dk/", img: "images/res-meye.jpg" }
    ],
    vectors: [
        { name: "FLATICON", url: "https://www.flaticon.com/search?word=human&weight=bold&type=uicon", img: "images/res-flaticon.jpg" },
        { name: "NONSCANDINAVIA CUTS", url: "https://www.nonscandinavia.com/cutouts", img: "images/res-non-cutouts.jpg" },
        { name: "STUDIO ALTERNATIVI", url: "https://studioalternativi.com/collections/free", img: "images/res-alternativi.jpg" },
        { name: "POST DIGITAL VEC", url: "https://postdigitalarchitecture.com/", img: "images/res-postdigital-vec.jpg" },
        { name: "VECTEEZY", url: "https://www.vecteezy.com/", img: "images/res-vecteezy.jpg" },
        { name: "TOFFU", url: "https://toffu.co/", img: "images/res-toffu.jpg" },
        { name: "FREE ILLUSTRATIONS", url: "https://freeillustrations.xyz/#", img: "images/res-free-ill.jpg" }
    ],
    textures: [
        { name: "ARCHITEXTURES", url: "https://architextures.org/", img: "images/res-architextures.jpg" },
        { name: "UNSPLASH TEXTURES", url: "https://unsplash.com/s/photos/texture", img: "images/res-un-texture.jpg" },
        { name: "TEXTURES.COM", url: "https://www.textures.com/", img: "images/res-textures-com.jpg" },
        { name: "POLY HAVEN", url: "https://polyhaven.com/", img: "images/res-polyhaven.jpg" },
        { name: "TEXTURE CAN", url: "https://www.texturecan.com/tag/Architecture/", img: "images/res-texturecan.jpg" },
        { name: "SKETCHUP TEXTURE", url: "https://www.sketchuptextureclub.com/", img: "images/res-sketchup.jpg" },
        { name: "TEXTURE HUB", url: "https://texturehub.co.uk/", img: "images/res-texturehub.jpg" },
        { name: "PEXELS TEXTURES", url: "https://www.pexels.com/search/texture/", img: "images/res-pex-texture.jpg" },
        { name: "PATTERNS & HATCH", url: "https://postdigitalarchitecture.com/collections/patterns", img: "images/res-patterns.jpg" }
    ],
    books: [
        { name: "OPERATIVE DESIGN", url: "https://issuu.com/bis_publishers/docs/operativedesign", img: "images/res-operative.jpg" },
        { name: "NIGEL CROSS", url: "https://www.scribd.com/document/656035467/Nigel-Cross", img: "images/res-nigel.jpg" },
        { name: "E-BOOKSHELF", url: "https://download.e-bookshelf.de/download/0003/4980/75/L-G-0003498075-0006650809.pdf", img: "images/res-ebookshelf.jpg" },
        { name: "ARCH: FORM & SPACE", url: "https://archive.org/details/FrancisD.K.ChingArchitectureFormSpaceAndOrder3rdEdition", img: "images/res-ching.jpg" },
        { name: "SITE LESS PDF", url: "https://pdfcoffee.com/site-less-pdf-free.html", img: "images/res-siteless.jpg" },
        { name: "07 SKETCHES", url: "https://07sketches.teachable.com/", img: "images/res-07sketches.jpg" }
    ],
    analysis: [
        { name: "OPEN STREET MAP", url: "https://www.openstreetmap.org/", img: "images/res-osm.jpg" },
        { name: "CADMAPPER", url: "https://cadmapper.com/", img: "images/res-cadmapper.jpg" },
        { name: "AINO WORLD", url: "https://beta.aino.world/home", img: "images/res-aino.jpg" },
        { name: "SUN PATH 3D", url: "https://andrewmarsh.com/apps/staging/sunpath3d.html", img: "images/res-sun3d.jpg" },
        { name: "SUN PATH 2D", url: "https://drajmarsh.bitbucket.io/sunpath2d.html", img: "images/res-sun2d.jpg" },
        { name: "CONTOUR CREATOR", url: "https://contourmapcreator.urgr8.ch/", img: "images/res-contour.jpg" },
        { name: "CITY 3D", url: "https://pudding.cool/2018/10/city_3d/", img: "images/res-city3d.jpg" },
        { name: "WINDFINDER", url: "https://www.windfinder.com/", img: "images/res-windfinder.jpg" },
        { name: "SNAZZY MAPS", url: "https://snazzymaps.com/", img: "images/res-snazzy.jpg" },
        { name: "MAPBOX", url: "https://www.mapbox.com/", img: "images/res-mapbox.jpg" }
    ],
    pinterest: [
        { name: "BOARD 1", url: "https://pin.it/4TB099Us3", img: "images/res-pin1.jpg" },
        { name: "BOARD 2", url: "https://pin.it/2vnUk11ww", img: "images/res-pin2.jpg" },
        { name: "BOARD 3", url: "https://pin.it/5AADooaYb", img: "images/res-pin3.jpg" },
        { name: "BOARD 4", url: "https://pin.it/3DEM7bXtl", img: "images/res-pin4.jpg" },
        { name: "BOARD 5", url: "https://pin.it/19P6ZAuo9", img: "images/res-pin5.jpg" },
        { name: "BOARD 6", url: "https://pin.it/1ff9avbcw", img: "images/res-pin6.jpg" }
    ],
    inspiration: [
        { name: "BIG ARCHITECTS", url: "https://big.dk/", img: "images/res-big.jpg" },
        { name: "LEARN UPSTAIRS", url: "https://www.youtube.com/@LearnUpstairs", img: "images/res-upstairs.jpg" },
        { name: "SHOW IT BETTER", url: "https://www.youtube.com/@ShowItBetter", img: "images/res-showit.jpg" },
        { name: "ARCH CANDY", url: "https://www.instagram.com/architecture_candy/", img: "images/res-candy.jpg" },
        { name: "ABHINAV", url: "https://www.instagram.com/abhinavbwj/", img: "images/res-abhinav.jpg" }
    ],
    tools: [
        { name: "QUICKLOOK", url: "https://apps.microsoft.com/detail/XP89DCGQ3K6VLD", img: "images/res-quicklook.jpg" },
        { name: "EVERYTHING SEARCH", url: "https://www.voidtools.com/downloads/", img: "images/res-everything.jpg" },
        { name: "I LOVE IMG", url: "https://www.iloveimg.com/", img: "images/res-iloveimg.jpg" },
        { name: "I LOVE PDF", url: "https://www.ilovepdf.com/", img: "images/res-ilovepdf.jpg" },
        { name: "CONVERTIO", url: "https://convertio.co/", img: "images/res-convertio.jpg" }
    ]
};

// 3. كود بناء صفحة الأقسام
const container = document.getElementById('links-container');
const titleElem = document.getElementById('category-title');

if (container && titleElem) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    if (type && linksData[type]) {
        titleElem.innerText = type.replace(/([A-Z])/g, ' $1').trim().toUpperCase() + " RESOURCES";
        container.innerHTML = ""; 
        linksData[type].forEach(item => {
            container.innerHTML += `
                <a href="${item.url}" target="_blank" class="res-card">
                    <img src="${item.img}" class="res-img" onerror="this.src='https://via.placeholder.com/300x170?text=Image+Missing'">
                    <div class="res-info">
                        <h3>${item.name}</h3>
                        <i class="fas fa-external-link-alt"></i>
                    </div>
                </a>
            `;
        });
    }
}
// ================= كود صفحة المنظور المتفجر =================
if (document.querySelector('.main-screen-frame')) {
    let currentFloor = 1;

    const floorData = {
        1: { title: "GYMNASE AIMÉE LALLEMENT", desc: "مدخل القاعة والمناطق الخدمية الأساسية مع الملاعب الجانبية." },
        2: { title: "TRAINING ZONE", desc: "منطقة التدريبات المكثفة والمعدات الرياضية المتطورة." },
        3: { title: "COMPETITION COURT", desc: "الساحة الرئيسية للمنافسات والبطولات الرسمية." },
        4: { title: "SPECTATOR STANDS", desc: "منطقة الجمهور بإطلالة كاملة على الساحة الرئيسية." },
        5: { title: "SKY LOUNGE", desc: "منطقة الاستراحة العلوية مع إطلالة بانورامية على المنشأة." }
    };

    function switchFloor(floorID, btn) {
        if (floorID === currentFloor && !btn.id && floorID !== 1) return; // استثناء الطابق الأول من القاعدة السابقة
        // ... بقية الكود ... 

        const layers = document.querySelectorAll('.floor-layer');
        const buttons = document.querySelectorAll('.grid-btn');
        const isGoingUp = floorID > currentFloor; 

        // تحديث الأزرار
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // تحديث النصوص
        document.getElementById('current-lvl-num').innerText = "0" + floorID;
        document.getElementById('floor-title').innerText = floorData[floorID].title;
        document.getElementById('floor-desc').innerText = floorData[floorID].desc;

        // تحديث حركة الصور
        layers.forEach((layer, index) => {
            const id = index + 1;
            layer.classList.remove('active', 'is-below', 'is-above', 'jump-in');

            if (id === floorID) {
                layer.classList.add('active');
                if (isGoingUp) {
                    layer.classList.add('jump-in');
                }
            } else if (id < floorID) {
                layer.classList.add('is-below');
            } else {
                layer.classList.add('is-above');
            }
        });

        currentFloor = floorID; 
    };
}