const data = {
    html: {
        detail: 'HTML adalah singkatan dari Hypertext Markup Language. HTML adalah bahasa markup standar yang digunakan untuk membuat halaman website dan aplikasi web. Bahasa ini diciptakan oleh Tim Berners-Lee, seorang ahli fisika di lembaga penelitian CERN yang berlokasi di Swiss. HTML bukanlah bahasa pemrograman karena tidak bisa memberikan fungsi yang dinamis. Bahasa ini digunakan untuk menyusun bagian paragraf, heading, maupun link pada halaman web',
        from: 'Saya mendapatkan pengetahuan ini karena saya penasaran dengan bahasa pemrograman, karena itu HTML adalah langkah pertama saya untuk belajar bahasa pemrograman, banyak yang merekomendasikan membuat fondasi dengan HTML.'
    },
    css: {
        detail: 'CSS adalah singkatan dari cascading style sheets, bahasa tampilan website yang berguna untuk mengelola elemen website seperti font, warna background, hingga layout. Di dunia web development, CSS digunakan bersama dengan HTML atau XML yang merupakan bahasa markup.',
        from: 'CSS saya dapatkan setelah selesai belajar HTML, saya mempelajarinya karena tampilan website saya yang tidak terlihat bagus dan hanya menyampaikan informasi tetapi tidak dengan kenyamanan client.'
    },
    js: {
        detail: 'JavaScript adalah bahasa skrip pemrograman yang digunakan untuk membuat konten halaman web dinamis. Bahasa ini memungkinkan pengembang web untuk menciptakan interaksi yang lebih dinamis pada halaman web, aplikasi, server, atau game. . JavaScript biasanya digunakan bersama dengan HTML dan CSS untuk menyusun struktur dan desain halaman web, mengatur tampilan, dan menambah interaksi pada halaman ',
        from: 'Setelah selesai belajar CSS seperti ada yang kurang jika tidak ada Javascript, maka saya memutuskan untuk belajar bahasa pemrograman Javascript (disini saya pertama kali belajar bahasa pemrograman), lalu dilanjutkan ke sisi backend menggunakan NodeJS.'
    },
    ethicalHacking: {
        detail: 'Ethical hacking adalah kegiatan di mana seorang yang ahli di bidang keamanan siber melakukan simulasi serangan terhadap sistem komputer, jaringan, atau aplikasi dengan tujuan untuk menemukan celah keamanan. Pada intinya, ethical hacker bekerja atas izin pemilik sistem dan tujuannya untuk membantu memperkuat keamanan, bukan untuk merusak atau mencuri data. Ethical hacker membantu perusahaan menemukan celah keamanan sebelum bisa dieksploitasi oleh pihak yang tidak bertanggung jawab.',
        from: 'Setelah mendapatkan hasil yang sudah saya pelajari sebelumnya yaitu fullstack web developer, saya mempelajari ethical hacking guna mencari masalah yang ada di dalam sistem web yang saya kerjakan sehingga kebocoran data sangat minim.'
    },
    php: {
        detail: 'PHP adalah singkatan dari Hypertext Preprocessor, yakni sebuah bahasa scripting yang dibuat oleh Rasmus Lerdorf pada tahun 1994 untuk membuat halaman, website, aplikasi web, dan Graphical User Interface (GUI). Bahasa ini bersifat open-source sehingga siapa pun dapat menggunakannya secara gratis. PHP sebagian besar dipakai oleh web developer untuk mengembangkan situs web. Sebanyak 76,7% website dan 43% website berbasis WordPress di seluruh dunia tercatat menggunakan bahasa scripting server-side (sisi server) ini.',
        from: 'PHP ini saya pelajari ketika saya mengetahui rata-rata yang saya temukan yang menggunakan bahasa pemrograman ini adalah 6.7% di seluruh dunia, dan saya mempelajari bahasa pemrograman ini karena saya ingin mempelajari bahasa pemrograman yang lebih kompleks.'
    },
    mysql: {
        detail: 'MySQL adalah perangkat lunak manajemen basis data relasional yang menggunakan bahasa SQL. Sistem ini didesain agar data dapat diakses, diatur, dan dimanipulasi secara efisien. MySQL berfungsi untuk memastikan data tersimpan secara akurat dan dapat diambil kapan saja. Saat ini, MySQL merupakan salah satu pilihan database populer untuk berbagai tujuan seperti membuat dan mengelola database, penyimpanan data, mengelola transaksi e-commerce, pencatatan data, dan yang paling populer adalah sebagai database untuk website.',
        from: 'Database ini saya pelajari sebagai pendamping ketika mempelajari bahasa pemrograman PHP, sekaligus mendapatkan pengetahuan cara menutup bug berjenis SQL Injection.'
    },
    mongodb: {
        detail: 'MongoDB adalah database NoSQL berbasis dokumen yang dibangun untuk pengembangan aplikasi modern dan keperluan cloud computing. MongoDB tidak menggunakan tabel dan baris seperti database relasional, melainkan menggunakan collection dan document. Document terdiri dari pasangan nilai kunci yang disimpan dalam format JSON (JavaScript Object Notation). MongoDB adalah database terdistribusi dengan dynamic schema yang dapat menyimpan berbagai variasi data.',
        from: 'MongoDB saya pelajari ketika saya mempelajari NodeJS sebagai penyimpanan data berbasis dockument.'
    },
    wiring: {
        detail: 'Wiring adalah proses menghubungkan perangkat elektronik dengan menggunakan kabel yang ada di dalam rumah atau bangunan. Dalam dunia elektronik, wiring sangat penting karena merupakan langkah awal dalam membangun sistem elektronik yang terintegrasi. Dalam proses wiring, kabel digunakan untuk mengalirkan listrik dari sumber ke perangkat elektronik yang akan digunakan.',
        from: 'Mendapatkan ilmu Wiring karena saya memutuskan untuk mengikuti pelatihan kerja di BBPVP Serang. disana saya mempelajari bagaimana untuk merakit panel control mulai dari 1 phase dan 3 phase, akhirnya saya menemukan persamaan dengan bahasa pemrograman yaitu mempunyai kondisi dan logic.'
    },
    plc: {
        detail: 'PLC adalah perangkat kontrol solid-state atau pengontrol industri terkomputerisasi yang melakukan logika diskrit atau berurutan di lingkungan pabrik atau otomatisasi. Jika Sahabat memahami definisi ini sepenuhnya atau tidak, jangan khawatir. Dalam materi ini, Kelas PLC akan membantu menjelaskan masing-masing istilah yang disebutkan pada definisi tersebut. Pada dasarnya PLC adalah gabungan antara software dan hardware. Bertindak sebagai otak pada mesin atau sistem untuk mengontrol sistem otomasi.',
        from: 'PLC saya dapatkan juga di BBPVP Serang, disini apa yang saya pelajari sebelumnya mempermudah saya untuk memahami bagaimana PLC Berinteraksi dengan komponen lainnya. '
    }
}
const html = document.getElementById('html');
const css = document.getElementById('css');
const javascript = document.getElementById('javascript');
const ethicalHacking = document.getElementById('ethicalHacking');
const php = document.getElementById('php');
const mysql = document.getElementById('mysql');
const mongodb = document.getElementById('mongodb');
const wiring = document.getElementById('wiring');
const plc = document.getElementById('plc');
const whatis = document.getElementById('whatis');
const get = document.getElementById('get');


whatis.append(data.html.detail)
get.append(data.html.from)
html.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
html.style.borderRadius = '10px';

addEventListener('click', (e) => {
    if(e.target.id == 'html'){
        whatis.innerHTML = data.html.detail;
        get.innerHTML = data.html.from;
        html.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
        css.style.backgroundColor = '';
        javascript.style.backgroundColor = '';
        ethicalHacking.style.backgroundColor = '';
        php.style.backgroundColor = '';
        mysql.style.backgroundColor = '';
        mongodb.style.backgroundColor = '';
        wiring.style.backgroundColor = '';
        plc.style.backgroundColor = '';
    }
    if(e.target.id == 'css'){
        whatis.innerHTML = data.css.detail;
        get.innerHTML = data.css.from;
        html.style.backgroundColor = '';
        css.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
        javascript.style.backgroundColor = '';
        ethicalHacking.style.backgroundColor = '';
        php.style.backgroundColor = '';
        mysql.style.backgroundColor = '';
        mongodb.style.backgroundColor = '';
        wiring.style.backgroundColor = '';
        plc.style.backgroundColor = '';
    }
    if(e.target.id == 'javascript'){
        whatis.innerHTML = data.js.detail;
        get.innerHTML = data.js.from;
        html.style.backgroundColor = '';
        css.style.backgroundColor = '';
        javascript.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
        ethicalHacking.style.backgroundColor = '';
        php.style.backgroundColor = '';
        mysql.style.backgroundColor = '';
        mongodb.style.backgroundColor = '';
        wiring.style.backgroundColor = '';
        plc.style.backgroundColor = '';
    }
    if(e.target.id == 'php'){
        whatis.innerHTML = data.php.detail;
        get.innerHTML = data.php.from;
        html.style.backgroundColor = '';
        css.style.backgroundColor = '';
        javascript.style.backgroundColor = '';
        ethicalHacking.style.backgroundColor = '';
        php.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
        mysql.style.backgroundColor = '';
        mongodb.style.backgroundColor = '';
        wiring.style.backgroundColor = '';
        plc.style.backgroundColor = '';
    }
    if(e.target.id == 'mysql'){
        whatis.innerHTML = data.mysql.detail;
        get.innerHTML = data.mysql.from;
        html.style.backgroundColor = '';
        css.style.backgroundColor = '';
        javascript.style.backgroundColor = '';
        ethicalHacking.style.backgroundColor = '';
        php.style.backgroundColor = '';
        mysql.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
        mongodb.style.backgroundColor = '';
        wiring.style.backgroundColor = '';
        plc.style.backgroundColor = '';
    }
    if(e.target.id == 'mongodb'){
        whatis.innerHTML = data.mongodb.detail;
        get.innerHTML = data.mongodb.from;
        html.style.backgroundColor = '';
        css.style.backgroundColor = '';
        javascript.style.backgroundColor = '';
        ethicalHacking.style.backgroundColor = '';
        php.style.backgroundColor = '';
        mysql.style.backgroundColor = '';
        mongodb.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
        wiring.style.backgroundColor = '';
        plc.style.backgroundColor = '';
    }
    if(e.target.id == 'wiring'){
        whatis.innerHTML = data.wiring.detail;
        get.innerHTML = data.wiring.from;
        html.style.backgroundColor = '';
        css.style.backgroundColor = '';
        javascript.style.backgroundColor = '';
        ethicalHacking.style.backgroundColor = '';
        php.style.backgroundColor = '';
        mysql.style.backgroundColor = '';
        mongodb.style.backgroundColor = '';
        wiring.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
        plc.style.backgroundColor = '';
    }
    if(e.target.id == 'plc'){
        whatis.innerHTML = data.plc.detail;
        get.innerHTML = data.plc.from;
        html.style.backgroundColor = '';
        css.style.backgroundColor = '';
        javascript.style.backgroundColor = '';
        ethicalHacking.style.backgroundColor = '';
        php.style.backgroundColor = '';
        mysql.style.backgroundColor = '';
        mongodb.style.backgroundColor = '';
        wiring.style.backgroundColor = '';
        plc.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
    }
    if(e.target.id == 'ethicalHacking'){
        whatis.innerHTML = data.ethicalHacking.detail;
        get.innerHTML = data.ethicalHacking.from;
        html.style.backgroundColor = '';
        css.style.backgroundColor = '';
        javascript.style.backgroundColor = '';
        ethicalHacking.style.backgroundColor = 'rgba(54, 54, 54, 0.3)';
        php.style.backgroundColor = '';
        mysql.style.backgroundColor = '';
        mongodb.style.backgroundColor = '';
        wiring.style.backgroundColor = '';
        plc.style.backgroundColor = '';
    } 
})

const contentSkill = document.getElementById('content-skill');
const contentProject = document.getElementById('content-project');
const contentCertificate = document.getElementById('content-certificate');
const skill = document.getElementById('skill');
const project = document.getElementById('project');
const certificate = document.getElementById('certificate');

contentProject.style.display = 'none'
contentCertificate.style.display = 'none'
skill.style.backgroundColor = 'rgba(54, 54, 54, 0.2)';
project.style.backgroundColor = '';
certificate.style.backgroundColor = '';

addEventListener('click', e => {
    if(e.target.id == 'skill'){
        contentProject.style.display = 'none';
        contentSkill.style.display = 'flex';
        contentCertificate.style.display = 'none';
        skill.style.backgroundColor = 'rgba(54, 54, 54, 0.2)';
        project.style.backgroundColor = '';
        certificate.style.backgroundColor = '';
    }
    if(e.target.id == 'project'){
        contentProject.style.display = 'flex';
        contentSkill.style.display = 'none';
        contentCertificate.style.display = 'none';
        skill.style.backgroundColor = '';
        project.style.backgroundColor = 'rgba(54, 54, 54, 0.2)';
        certificate.style.backgroundColor = '';
    }
    if(e.target.id == 'certificate'){
        contentCertificate.style.display = 'flex';
        contentProject.style.display = 'none';
        contentSkill.style.display = 'none';
        skill.style.backgroundColor = '';
        project.style.backgroundColor = '';
        certificate.style.backgroundColor = 'rgba(54, 54, 54, 0.2)';
    }
})


const medusaBackdoor = document.getElementById('medusa-backdoor');

medusaBackdoor.addEventListener('click', e => {
    window.open('file:///C:/Users/Medusa/Desktop/MedusaCore/portofolio/src/medusarevshell.png', '_blank')
})