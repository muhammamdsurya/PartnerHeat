
        /* ==========================================================================
       PartnerHeat Landing Page (Demo)
       Vanilla JS: katalog produk, filter kategori, modal detail, WhatsApp link,
       smooth scroll, scrollspy, scroll reveal.
       ========================================================================== */

        const WA_NUMBER = '6281220000729'; // +62 812-2060-9071
        const WA_DISPLAY = '0812 2000 0729';

        const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
        const orderText = (name) =>
            `Halo PartnerHeat, saya tertarik dengan produk *${name}*. Mohon informasi ketersediaan, spesifikasi, dan penawaran harganya. Terima kasih.`;

        /* ── Foto produk (aset nyata) ──────────────────────────────────────────── */
        const ART = {
            tubular: 'img/tubular_u.png',
            cartridge: 'img/cartridge_heater.png',
            band: 'img/band_heater.png',
            bandCeramic: 'img/band_ceramic.png',
            immersion: 'img/immersion.jpeg',
            finned: 'img/finnet.png',
            coil: 'img/coil_heater.jpeg',
            spiral: 'img/coil.png',
            infrared: 'img/infrared.png',
            silicone: 'img/silicone_rubber.png',
            castin: 'img/castin_heater.jpeg',
            thermocouple: 'img/thermocouple.jpeg',
            tcCable: 'img/kabel_thermocouple.jpeg',
            controller: 'img/thermo_digital.png'
        };

        const escAttr = (s) => String(s).replace(/[&<>"']/g, (c) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[c]);

        /* Panggung foto: latar gradien + halo hangat, foto produk berlatar transparan. */
        const productMedia = (p, { eager = false, alt = '' } = {}) => `
    <div class="product-stage">
      <img src="${ART[p.art]}" alt="${escAttr(alt)}" class="product-photo"
           loading="${eager ? 'eager' : 'lazy'}" decoding="async">
    </div>`;

        /* ── Data produk (contoh untuk demo) ───────────────────────────────────── */
        const CATEGORIES = [{
                id: 'all',
                label: 'Semua Produk'
            },
            {
                id: 'tubular',
                label: 'Tubular'
            },
            {
                id: 'cartridge',
                label: 'Cartridge'
            },
            {
                id: 'band',
                label: 'Band'
            },
            {
                id: 'immersion',
                label: 'Immersion'
            },
            {
                id: 'coil',
                label: 'Coil / Spiral'
            },
            {
                id: 'infrared',
                label: 'Infrared'
            },
            {
                id: 'flexible',
                label: 'Fleksibel'
            },
            {
                id: 'castin',
                label: 'Cast-in'
            },
            {
                id: 'sensor',
                label: 'Sensor & Kontrol'
            }
        ];

        const PRODUCTS = [{
                id: 'tubular-u',
                name: 'Tubular Heater Tipe U',
                cat: 'tubular',
                catLabel: 'Tubular',
                art: 'tubular',
                short: 'Elemen pemanas serbaguna untuk oven, tangki, dan mesin proses.',
                desc: 'Elemen pemanas tubular berbentuk U dengan selubung logam dan isolasi magnesium oksida padat. Bentuk dan panjang tabung dapat dibengkokkan mengikuti ruang pemasangan pada mesin. Cocok untuk pemanasan udara maupun cairan pada aplikasi industri umum.',
                specs: [
                    ['Diameter tabung', '6 mm / 8 mm / 8,5 mm / 11 mm'],
                    ['Material selubung', 'Stainless steel 304 / 316, Incoloy 800'],
                    ['Tegangan kerja', '220 V / 380 V (1 fasa & 3 fasa)'],
                    ['Rentang daya', '300 W – 6.000 W per elemen'],
                    ['Suhu kerja maks.', '± 750 °C (tergantung material)'],
                    ['Bentuk', 'U, W, spiral, custom sesuai gambar']
                ]
            },
            {
                id: 'cartridge',
                name: 'Cartridge Heater',
                cat: 'cartridge',
                catLabel: 'Cartridge',
                art: 'cartridge',
                short: 'Pemanas silinder padat untuk cetakan (mold) dan die presisi.',
                desc: 'Cartridge heater berbentuk batang silinder dengan kepadatan daya tinggi, dirancang untuk dimasukkan ke dalam lubang bor pada blok logam. Umum digunakan pada mold plastik, hot runner, sealing bar, dan die packaging yang membutuhkan panas cepat dan merata.',
                specs: [
                    ['Diameter', '6 mm – 20 mm (toleransi ketat)'],
                    ['Panjang', '30 mm – 1.000 mm'],
                    ['Watt density', 'hingga ± 25 W/cm²'],
                    ['Material selubung', 'Stainless steel 304 / Incoloy'],
                    ['Tipe kabel', 'Fiberglass, silicone, atau armored steel'],
                    ['Opsi', 'Dilengkapi thermocouple tipe J / K']
                ]
            },
            {
                id: 'band-mica',
                name: 'Band Heater Mica',
                cat: 'band',
                catLabel: 'Band',
                art: 'band',
                short: 'Pemanas melingkar untuk barrel mesin injection & extruder.',
                desc: 'Band heater dengan isolasi mika dan selubung stainless steel, dipasang melingkari barrel atau nozzle mesin plastik. Sistem penjepit (clamp) memastikan kontak permukaan rapat sehingga perpindahan panas berlangsung efisien dan merata.',
                specs: [
                    ['Diameter dalam', '30 mm – 500 mm (custom)'],
                    ['Lebar', '20 mm – 200 mm'],
                    ['Rentang daya', '200 W – 5.000 W'],
                    ['Suhu kerja maks.', '± 350 °C'],
                    ['Sistem penguncian', 'Barrel clamp / baut / strap'],
                    ['Terminal', 'Screw terminal, kabel keluar, atau plug']
                ]
            },
            {
                id: 'band-ceramic',
                name: 'Ceramic Band Heater',
                cat: 'band',
                catLabel: 'Band',
                art: 'bandCeramic',
                short: 'Band heater keramik untuk suhu kerja tinggi & hemat energi.',
                desc: 'Menggunakan manik keramik sebagai isolator dengan kawat pemanas yang dijalin di dalamnya, sehingga mampu bekerja pada suhu lebih tinggi dibanding tipe mika. Lapisan insulasi luar membantu mengurangi kehilangan panas ke lingkungan sekitar mesin.',
                specs: [
                    ['Diameter dalam', '60 mm – 600 mm'],
                    ['Suhu kerja maks.', '± 600 °C'],
                    ['Rentang daya', '500 W – 12.000 W'],
                    ['Insulasi', 'Keramik + selimut serat keramik'],
                    ['Konstruksi', 'Tipe engsel (hinged) atau bersambungan'],
                    ['Keunggulan', 'Radiasi panas lebih dalam, susut panas rendah']
                ]
            },
            {
                id: 'immersion',
                name: 'Immersion Heater Screw Plug',
                cat: 'immersion',
                catLabel: 'Immersion',
                art: 'immersion',
                short: 'Pemanas celup untuk tangki air, oli, dan larutan proses.',
                desc: 'Elemen pemanas celup dengan sambungan ulir (screw plug) yang dipasang langsung pada dinding atau tutup tangki. Tersedia dalam beberapa konfigurasi tabung untuk menyesuaikan volume dan jenis cairan yang dipanaskan, termasuk oli dan larutan kimia ringan.',
                specs: [
                    ['Ukuran ulir', '1" / 1¼" / 1½" / 2" BSP – NPT'],
                    ['Material tabung', 'Stainless steel 304 / 316, Titanium'],
                    ['Rentang daya', '1.000 W – 18.000 W'],
                    ['Jumlah tabung', '2, 3, 6, atau 9 tabung'],
                    ['Media', 'Air, oli, larutan proses'],
                    ['Opsi', 'Thermostat & pelindung suhu berlebih']
                ]
            },
            {
                id: 'finned',
                name: 'Finned Strip / Air Duct Heater',
                cat: 'tubular',
                catLabel: 'Tubular',
                art: 'finned',
                short: 'Pemanas bersirip untuk oven, ruang pengering, dan ducting.',
                desc: 'Elemen tubular yang dilengkapi sirip (fin) untuk memperluas permukaan pindah panas ke udara. Banyak digunakan pada oven industri, ruang pengering, drying chamber, serta sistem pemanas udara pada ducting HVAC industri.',
                specs: [
                    ['Konstruksi', 'Tabung + fin stainless / galvanis'],
                    ['Panjang efektif', '300 mm – 2.000 mm'],
                    ['Rentang daya', '500 W – 9.000 W'],
                    ['Suhu udara maks.', '± 450 °C'],
                    ['Pemasangan', 'Flange, bracket, atau sisip ducting'],
                    ['Aplikasi', 'Oven, dryer, air heater, HVAC industri']
                ]
            },
            {
                id: 'coil',
                name: 'Coil / Spiral Heater',
                cat: 'coil',
                catLabel: 'Coil / Spiral',
                art: 'coil',
                short: 'Elemen kumparan untuk nozzle hot runner dan pemanas lokal.',
                desc: 'Elemen pemanas berbentuk kumparan yang dililitkan pada nozzle atau permukaan silinder berdiameter kecil. Penampang yang ramping membuatnya cocok untuk ruang pemasangan sempit dengan kebutuhan panas terpusat dan responsif.',
                specs: [
                    ['Penampang', '2,2×4,2 mm / 2,5×4,5 mm'],
                    ['Panjang kumparan', 'Sesuai diameter nozzle'],
                    ['Rentang daya', '150 W – 1.500 W'],
                    ['Suhu kerja maks.', '± 750 °C'],
                    ['Opsi sensor', 'Thermocouple tipe J / K terintegrasi'],
                    ['Aplikasi', 'Hot runner, nozzle, pemanas titik']
                ]
            },
            {
                id: 'pancake',
                name: 'Pancake / Hot Plate Heater',
                cat: 'tubular',
                catLabel: 'Tubular',
                art: 'spiral',
                short: 'Elemen spiral datar untuk pemanas pelat dan kompor listrik.',
                desc: 'Elemen tubular yang dibentuk menjadi spiral pipih (pancake) sehingga panas tersebar merata pada satu bidang datar. Dilengkapi bracket penahan agar jarak antar lilitan tetap terjaga. Banyak dipakai sebagai pemanas pelat, kompor listrik industri, serta pemanas dasar tangki dan wadah proses.',
                specs: [
                    ['Diameter spiral', '100 mm – 300 mm (custom)'],
                    ['Diameter tabung', '6,5 mm / 8 mm'],
                    ['Material selubung', 'Stainless steel 304, baja hitam'],
                    ['Rentang daya', '500 W – 3.000 W'],
                    ['Suhu kerja maks.', '± 600 °C'],
                    ['Pemasangan', 'Bracket pelat + baut terminal']
                ]
            },
            {
                id: 'infrared-ceramic',
                name: 'Infrared Ceramic Heater',
                cat: 'infrared',
                catLabel: 'Infrared',
                art: 'infrared',
                short: 'Pemanas radiasi inframerah untuk pengeringan & pemanasan permukaan.',
                desc: 'Panel pemanas keramik yang memancarkan gelombang inframerah untuk memanaskan objek secara langsung tanpa harus memanaskan udara di sekitarnya. Umum dipakai pada oven pengering cat, thermoforming, shrink tunnel, serta lini pengeringan permukaan yang menuntut pemanasan cepat dan terarah.',
                specs: [
                    ['Dimensi panel', '122 × 60 mm / 245 × 60 mm (standar)'],
                    ['Rentang daya', '150 W – 1.000 W per panel'],
                    ['Panjang gelombang', 'Menengah, ± 2 – 10 µm'],
                    ['Suhu permukaan', '± 300 °C – 700 °C'],
                    ['Reflektor', 'Opsi housing aluminium reflektif'],
                    ['Opsi', 'Thermocouple tipe K terintegrasi']
                ]
            },
            {
                id: 'silicone',
                name: 'Silicone Rubber Flexible Heater',
                cat: 'flexible',
                catLabel: 'Fleksibel',
                art: 'silicone',
                short: 'Pemanas lembaran fleksibel untuk permukaan melengkung.',
                desc: 'Pemanas tipis berbahan silicone rubber yang dapat mengikuti bentuk permukaan drum, pipa, atau panel. Ringan, cepat panas, dan dapat dipasang dengan perekat maupun klem. Cocok untuk pemanasan drum oli, pencegahan pengembunan, dan pemanas panel.',
                specs: [
                    ['Ketebalan', '1,5 mm – 3 mm'],
                    ['Ukuran', 'Custom sesuai bidang pemasangan'],
                    ['Watt density', 'hingga ± 3 W/cm²'],
                    ['Suhu kerja maks.', '± 230 °C'],
                    ['Pemasangan', 'Perekat 3M, klem, atau velcro'],
                    ['Opsi', 'Dilengkapi thermostat / kontroler suhu']
                ]
            },
            {
                id: 'castin',
                name: 'Cast-in Heater',
                cat: 'castin',
                catLabel: 'Cast-in',
                art: 'castin',
                short: 'Pemanas cor aluminium untuk pelat, ring, dan blok mesin.',
                desc: 'Elemen pemanas tubular yang dicor di dalam badan aluminium atau kuningan sehingga menyatu dengan bentuk komponen mesin. Konstruksi masif ini membuat panas tersebar merata ke seluruh permukaan dan tahan terhadap getaran maupun beban mekanis. Tersedia dalam bentuk pelat, cakram, ring, dan blok sesuai gambar kerja.',
                specs: [
                    ['Bentuk', 'Pelat, cakram, ring, blok (custom)'],
                    ['Material cor', 'Aluminium, kuningan, perunggu'],
                    ['Rentang daya', '500 W – 15.000 W'],
                    ['Suhu kerja maks.', '± 400 °C (aluminium)'],
                    ['Terminal', 'Baut terminal, kabel silikon, atau armored'],
                    ['Opsi', 'Alur pendingin & thermocouple terintegrasi']
                ]
            },
            {
                id: 'thermocouple',
                name: 'Thermocouple Sensor Suhu',
                cat: 'sensor',
                catLabel: 'Sensor & Kontrol',
                art: 'thermocouple',
                short: 'Sensor suhu tipe J / K dengan connection head industri.',
                desc: 'Sensor suhu thermocouple dengan probe stainless steel dan kepala sambungan (connection head) berbahan aluminium die-cast. Digunakan untuk memantau suhu pada oven, tangki, barrel mesin plastik, dan saluran udara panas. Panjang probe serta jenis sambungan proses dapat disesuaikan dengan titik pengukuran di lapangan.',
                specs: [
                    ['Tipe', 'J, K, T, dan RTD PT100'],
                    ['Diameter probe', '3 mm / 4,8 mm / 6 mm / 8 mm'],
                    ['Panjang probe', '50 mm – 1.500 mm (custom)'],
                    ['Rentang ukur', '0 °C – 1.200 °C (tergantung tipe)'],
                    ['Sambungan proses', 'Ulir 1/2" BSP – NPT, flange, bayonet'],
                    ['Kepala sambungan', 'Die-cast aluminium, IP65']
                ]
            },
            {
                id: 'tc-cable',
                name: 'Kabel Thermocouple & Compensating',
                cat: 'sensor',
                catLabel: 'Sensor & Kontrol',
                art: 'tcCable',
                short: 'Kabel kompensasi tahan panas untuk jalur sensor suhu.',
                desc: 'Kabel penghubung antara sensor suhu dan kontroler dengan bahan konduktor yang sesuai tipe thermocouple, sehingga pembacaan suhu tetap akurat sepanjang jalur kabel. Tersedia dengan isolasi fiberglass, silikon, PVC, maupun pelindung anyaman stainless steel untuk area bersuhu tinggi.',
                specs: [
                    ['Tipe', 'JX, KX, TX (compensating & extension)'],
                    ['Isolasi', 'Fiberglass, silikon, PVC, PTFE'],
                    ['Pelindung', 'Anyaman stainless steel / tanpa pelindung'],
                    ['Ukuran konduktor', '0,5 mm² – 1,5 mm² (2 × core)'],
                    ['Suhu kerja maks.', '± 400 °C (fiberglass)'],
                    ['Kemasan', 'Roll, dipotong sesuai kebutuhan']
                ]
            },
            {
                id: 'controller',
                name: 'Digital Temperature Controller',
                cat: 'sensor',
                catLabel: 'Sensor & Kontrol',
                art: 'controller',
                short: 'Kontroler suhu digital PID untuk panel mesin produksi.',
                desc: 'Kontroler suhu digital dengan pengaturan PID untuk menjaga suhu kerja tetap stabil pada mesin produksi. Dipasang pada panel dan dipadukan dengan sensor thermocouple serta kontaktor atau SSR sebagai penggerak elemen pemanas. Tersedia beberapa ukuran panel cut-out mengikuti ruang panel yang ada.',
                specs: [
                    ['Ukuran panel', '48×48, 72×72, 96×96, 48×96 mm'],
                    ['Input sensor', 'Thermocouple J / K / T, RTD PT100'],
                    ['Mode kontrol', 'PID, ON/OFF, auto-tuning'],
                    ['Output', 'Relay, SSR driver, 4–20 mA'],
                    ['Tegangan suplai', '110 V – 240 V AC'],
                    ['Opsi', 'Alarm suhu & komunikasi RS-485']
                ]
            }
        ];

        /* img = foto kartu, z = zoom, zo = titik fokus crop (lihat .cred-photo) */
        const CREDIBILITY = [{
                t: 'Konsultasi Teknis',
                d: 'Rekomendasi spesifikasi berdasarkan mesin, media, dan kondisi kerja aktual di lapangan.',
                i: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
                img: 'img/konsultasi.png',
                alt: 'Dua teknisi meninjau data mesin dan kondisi kerja di lantai produksi',
                z: 1.12,
                zo: '36% 50%'
            },
            {
                t: 'Produksi Custom',
                d: 'Bentuk, panjang, daya, dan material dibuat mengikuti gambar teknis yang Anda kirimkan.',
                i: '<path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6"/><path d="m14.7 6.3 3-3 3 3-3 3z"/>',
                img: 'img/custom.png',
                alt: 'Teknisi mencocokkan elemen pemanas bersirip dengan gambar teknis',
                z: 1.75,
                zo: 'left center'
            },
            {
                t: 'Uji Fungsi 100%',
                d: 'Setiap unit melewati pengujian kontinuitas dan tahanan isolasi sebelum dikemas.',
                i: '<path d="M9 11l2.5 2.5L16 8"/><path d="M12 3l7.5 3.5v5c0 4.6-3.2 8.8-7.5 10-4.3-1.2-7.5-5.4-7.5-10v-5z"/>',
                img: 'img/uji.png',
                alt: 'Operator menguji unit di meja pengujian sebelum produk dikemas',
                z: 1.14,
                zo: '44% 52%'
            },
            {
                t: 'Dukungan Purna Jual',
                d: 'Pendampingan pemasangan dan penggantian berkala untuk kebutuhan maintenance rutin.',
                i: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
                img: 'img/dukungan.png',
                alt: 'Teknisi melakukan perawatan panel kelistrikan mesin di lokasi pelanggan',
                z: 1.14,
                zo: '42% 50%'
            }
        ];

        const PROCESS = [{
                n: '01',
                t: 'Konsultasi & Gambar Teknis',
                d: 'Pengumpulan data mesin, media, daya, dan dimensi. Hasilnya berupa gambar kerja yang disetujui bersama.',
                i: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15h6M9 11h3"/>'
            },
            {
                n: '02',
                t: 'Pemilihan Material',
                d: 'Penentuan selubung, kawat pemanas, isolator, dan terminal sesuai suhu serta media kerja.',
                i: '<path d="M12 2 2 7l10 5 10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>'
            },
            {
                n: '03',
                t: 'Perakitan & Pembentukan',
                d: 'Pengisian isolasi, penekanan (swaging), pembengkokan bentuk, dan pemasangan terminal.',
                i: '<path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6"/><path d="m14.7 6.3 3-3 3 3-3 3z"/>'
            },
            {
                n: '04',
                t: 'Pengujian & QC',
                d: 'Uji tahanan, kontinuitas, isolasi, dan kebocoran arus. Unit yang tidak lolos tidak dikirim.',
                i: '<path d="M9 11l2.5 2.5L16 8"/><circle cx="12" cy="12" r="9"/>'
            },
            {
                n: '05',
                t: 'Pengemasan & Pengiriman',
                d: 'Pelabelan spesifikasi, pengemasan aman, dan pengaturan pengiriman ke lokasi pabrik.',
                i: '<path d="M16 16h3l2-5-4-4h-1"/><path d="M3 6h13v10H3z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>'
            }
        ];

        const ADVANTAGES = [{
                t: 'Material Terpilih',
                d: 'Selubung stainless steel dan Incoloy dengan isolasi magnesium oksida padat untuk umur pakai lebih panjang.',
                i: '<path d="M12 3l7.5 3.5v5c0 4.6-3.2 8.8-7.5 10-4.3-1.2-7.5-5.4-7.5-10v-5z"/><path d="M9 12l2 2 4-4"/>'
            },
            {
                t: 'Bisa Custom Penuh',
                d: 'Bentuk, panjang, daya, tegangan, hingga jenis terminal dibuat mengikuti kebutuhan mesin Anda.',
                i: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'
            },
            {
                t: 'Harga Kompetitif',
                d: 'Produksi lokal memangkas biaya impor dan waktu tunggu, dengan mutu yang tetap terjaga.',
                i: '<path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
            },
            {
                t: 'Waktu Pengerjaan Terukur',
                d: 'Estimasi waktu produksi disampaikan di awal, termasuk untuk kebutuhan penggantian mendesak.',
                i: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
            },
            {
                t: 'Garansi Produk',
                d: 'Jaminan penggantian atas cacat produksi sesuai ketentuan yang disepakati saat pemesanan.',
                i: '<path d="M12 3l7.5 3.5v5c0 4.6-3.2 8.8-7.5 10-4.3-1.2-7.5-5.4-7.5-10v-5z"/>'
            },
            {
                t: 'Pemesanan Cepat via WhatsApp',
                d: 'Tanpa formulir berlapis kirim spesifikasi lewat WhatsApp dan langsung ditindaklanjuti tim kami.',
                i: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
            }
        ];

        /* ── Helper ikon ───────────────────────────────────────────────────────── */
        const icon = (paths, size = 22) =>
            `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

        /* ── Render: logo klien (placeholder) ──────────────────────────────────── */
        (function renderLogos() {
            const track = document.getElementById('logo-track');
            const items = ['VinGold Heat', 'PT. Indopower', 'PT. Mekar Jaya', 'CV. Sinar Abadi', 'PT. Prima Teknik',
                'CV. Lestari Mandiri', 'PT. Surya Kencana', 'CV. Mitra Sejahtera'
            ];
            const tile = (label) => `
    <div class="shrink-0 w-[190px] h-[86px] rounded-2xl border border-white/10 bg-white/[.03] grid place-items-center px-4">
      <span class="font-display text-[12.5px] font-semibold tracking-[.14em] uppercase text-silver-dim/65 text-center">${label}</span>
    </div>`;
            track.innerHTML = [...items, ...items].map(tile).join('');
        })();

        /* ── Render: kartu kredibilitas ────────────────────────────────────────── */
        (function renderCredibility() {
            document.getElementById('credibility-grid').innerHTML = CREDIBILITY.map(c => `
    <div class="reveal card card-hover rounded-2xl overflow-hidden">
      <div class="relative aspect-[16/9] overflow-hidden bg-navy-900">
        <img src="${c.img}" alt="${escAttr(c.alt)}" class="cred-photo"
             style="--z:${c.z};--zo:${c.zo}" loading="lazy" decoding="async">
        <span class="cred-scrim" aria-hidden="true"></span>
      </div>
      <div class="px-5 pb-5">
        <span class="cred-badge">${icon(c.i)}</span>
        <h3 class="font-display text-[17px] font-bold text-silver mb-2">${c.t}</h3>
        <p class="text-[14.5px] leading-relaxed text-silver-dim">${c.d}</p>
      </div>
    </div>`).join('');
        })();

        /* ── Render: filter + grid produk ──────────────────────────────────────── */
        (function renderProducts() {
            const filters = document.getElementById('filters');
            filters.innerHTML = CATEGORIES.map((c, i) =>
                `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${i===0}">${c.label}</button>`
            ).join('');

            const grid = document.getElementById('product-grid');
            grid.innerHTML = PRODUCTS.map(p => `
    <article class="reveal product-card card card-hover rounded-2xl overflow-hidden flex flex-col" data-cat="${p.cat}">
      <button type="button" class="text-left cursor-pointer group" data-open="${p.id}" aria-label="Lihat detail ${p.name}">
        <div class="relative aspect-[4/3] overflow-hidden bg-navy-900/60">
          ${productMedia(p)}
          <span class="absolute top-3 left-3 rounded-full bg-navy-900/80 border border-gold/30 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[.12em] text-gold-light">${p.catLabel}</span>
          <span class="absolute inset-0 grid place-items-center bg-navy-900/60 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
            <span class="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 font-display text-[13px] font-semibold text-navy-900">
              ${icon('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',15)} Lihat Detail
            </span>
          </span>
        </div>
        <div class="p-5 pb-3">
          <h3 class="font-display text-[18px] font-bold text-silver leading-snug mb-2 group-hover:text-gold-light transition-colors">${p.name}</h3>
          <p class="text-[14px] leading-relaxed text-silver-dim">${p.short}</p>
        </div>
      </button>
      <div class="mt-auto px-5 pb-5 pt-2 flex gap-2">
        <button type="button" data-open="${p.id}" class="btn btn-ghost flex-1 !min-h-[44px] !px-4 text-[13.5px]">Detail</button>
        <a href="${waLink(orderText(p.name))}" target="_blank" rel="noopener" class="btn btn-wa flex-1 !min-h-[44px] !px-4 text-[13.5px]" aria-label="Order ${p.name} via WhatsApp">
          ${icon('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',15)} Order
        </a>
      </div>
    </article>`).join('');

            /* Filter kategori */
            const cards = [...grid.querySelectorAll('.product-card')];
            const empty = document.getElementById('empty-state');

            filters.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-cat]');
                if (!btn) return;
                filters.querySelectorAll('[data-cat]').forEach(b => b.setAttribute('aria-pressed', String(b ===
                    btn)));
                const cat = btn.dataset.cat;
                let shown = 0;
                cards.forEach(card => {
                    const ok = cat === 'all' || card.dataset.cat === cat;
                    card.hidden = !ok;
                    if (ok) shown++;
                });
                empty.hidden = shown > 0;
            });
        })();

        /* ── Render: proses produksi ───────────────────────────────────────────── */
        (function renderProcess() {
            document.getElementById('process-list').innerHTML = PROCESS.map((s, i) => `
    <li class="reveal relative">
      <div class="card card-hover rounded-2xl p-6 h-full">
        <div class="flex items-center justify-between mb-5">
          <span class="grid place-items-center w-12 h-12 rounded-xl bg-heat/10 border border-heat/30 text-heat-light">${icon(s.i)}</span>
          <span class="font-display text-[26px] font-extrabold text-white/[.08] leading-none">${s.n}</span>
        </div>
        <h3 class="font-display text-[16.5px] font-bold text-silver mb-2 leading-snug">${s.t}</h3>
        <p class="text-[14px] leading-relaxed text-silver-dim">${s.d}</p>
      </div>
      ${i < PROCESS.length - 1 ? `<span class="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gold/30" aria-hidden="true"></span>` : ''}
    </li>`).join('');
        })();

        /* ── Render: keunggulan ────────────────────────────────────────────────── */
        (function renderAdvantages() {
            document.getElementById('advantages-grid').innerHTML = ADVANTAGES.map(a => `
    <div class="reveal card card-hover rounded-2xl p-7">
      <span class="grid place-items-center w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 text-gold-light mb-5">${icon(a.i)}</span>
      <h3 class="font-display text-[18px] font-bold text-silver mb-2.5">${a.t}</h3>
      <p class="text-[14.5px] leading-relaxed text-silver-dim">${a.d}</p>
    </div>`).join('');
        })();

        /* ── Modal detail produk ───────────────────────────────────────────────── */
        (function modal() {
            const el = document.getElementById('modal');
            const media = document.getElementById('modal-media');
            const elCat = document.getElementById('modal-cat');
            const elTitle = document.getElementById('modal-title');
            const elDesc = document.getElementById('modal-desc');
            const elSpecs = document.getElementById('modal-specs');
            const elWa = document.getElementById('modal-wa');
            let lastFocus = null;

            const FOCUSABLE =
                'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

            function open(id) {
                const p = PRODUCTS.find(x => x.id === id);
                if (!p) return;

                media.innerHTML = productMedia(p, {
                    eager: true,
                    alt: `Foto produk ${p.name}`
                });
                elCat.textContent = p.catLabel;
                elTitle.textContent = p.name;
                elDesc.textContent = p.desc;
                elSpecs.innerHTML = p.specs.map(([k, v]) => `
      <div class="flex flex-col sm:flex-row sm:gap-4 py-2.5 border-b border-white/[.07]">
        <dt class="text-[13.5px] text-silver-dim sm:w-[42%] shrink-0">${k}</dt>
        <dd class="text-[14px] text-silver font-medium">${v}</dd>
      </div>`).join('');
                elWa.href = waLink(orderText(p.name));
                elWa.setAttribute('aria-label', `Order ${p.name} via WhatsApp`);

                lastFocus = document.activeElement;
                el.hidden = false;
                document.body.style.overflow = 'hidden';
                requestAnimationFrame(() => el.classList.remove('modal-closed'));
                setTimeout(() => el.querySelector('button[data-close]')?.focus(), 60);
            }

            function close() {
                el.classList.add('modal-closed');
                document.body.style.overflow = '';
                setTimeout(() => {
                    el.hidden = true;
                    lastFocus?.focus();
                }, 220);
            }

            document.addEventListener('click', (e) => {
                const opener = e.target.closest('[data-open]');
                if (opener) {
                    e.preventDefault();
                    open(opener.dataset.open);
                    return;
                }
                if (e.target.closest('[data-close]')) close();
            });

            document.addEventListener('keydown', (e) => {
                if (el.hidden) return;
                if (e.key === 'Escape') {
                    close();
                    return;
                }
                if (e.key !== 'Tab') return;
                const items = [...el.querySelectorAll(FOCUSABLE)].filter(n => n.getClientRects().length > 0);
                if (!items.length) return;
                const first = items[0],
                    last = items[items.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            });
        })();

        /* ── Tautan WhatsApp umum ──────────────────────────────────────────────── */
        document.querySelectorAll('.wa-link').forEach(a => {
            const text = a.dataset.waText ||
                `Halo PartnerHeat, saya ingin bertanya mengenai produk elemen pemanas industri.`;
            a.href = waLink(text);
        });
        document.getElementById('wa-mobile').href = waLink(
            'Halo PartnerHeat, saya ingin bertanya mengenai produk elemen pemanas industri.');

        /* ── Header: scrolled state + mobile nav ───────────────────────────────── */
        (function header() {
            const hdr = document.getElementById('site-header');
            const btn = document.getElementById('menu-btn');
            const nav = document.getElementById('mobile-nav');

            const fab = document.getElementById('fab');
            const onScroll = () => {
                hdr.classList.toggle('scrolled', window.scrollY > 24);
                fab.classList.toggle('show', window.scrollY > window.innerHeight * 0.7);
            };
            onScroll();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });

            btn.addEventListener('click', () => {
                const open = nav.classList.toggle('hidden') === false;
                btn.setAttribute('aria-expanded', String(open));
                btn.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
            });

            nav.addEventListener('click', (e) => {
                if (e.target.closest('a')) {
                    nav.classList.add('hidden');
                    btn.setAttribute('aria-expanded', 'false');
                }
            });
        })();

        /* ── Scrollspy navigasi ────────────────────────────────────────────────── */
        (function scrollspy() {
            const links = [...document.querySelectorAll('.nav-link')];
            const map = new Map(links.map(l => [l.getAttribute('href').slice(1), l]));
            const sections = [...map.keys()].map(id => document.getElementById(id)).filter(Boolean);

            const io = new IntersectionObserver((entries) => {
                entries.forEach(en => {
                    if (!en.isIntersecting) return;
                    links.forEach(l => l.classList.remove('active'));
                    map.get(en.target.id)?.classList.add('active');
                });
            }, {
                rootMargin: '-45% 0px -50% 0px',
                threshold: 0
            });

            sections.forEach(s => io.observe(s));
        })();

        /* ── Scroll reveal (dengan penghormatan reduced motion) ────────────────── */
        (function reveal() {
            const nodes = document.querySelectorAll('.reveal');
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                nodes.forEach(n => n.classList.add('in'));
                return;
            }
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach((en, i) => {
                    if (!en.isIntersecting) return;
                    setTimeout(() => en.target.classList.add('in'), Math.min(i * 60, 300));
                    obs.unobserve(en.target);
                });
            }, {
                rootMargin: '0px 0px -8% 0px',
                threshold: .08
            });
            nodes.forEach(n => io.observe(n));
        })();

        /* ── Tahun berjalan ────────────────────────────────────────────────────── */
        document.getElementById('year').textContent = new Date().getFullYear();