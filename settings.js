// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/budii.jpg", // Path ke favicon
  title: "Budii | Profile", // Judul halaman
  metaTitle: "Budii || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website Budii , Creator and Dev", // Deskripsi meta untuk SEO
  metaKeywords: "Budii, Budiii, profile Budii, siapa Budii?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "budii.jpg", // Path ke gambar profil
  name: "Budii", // Nama profil
  occupation: "Creator & Developer", // Pekerjaan atau jabatan
  links: [
    { title: "GitHub", url: "https://github.com/budii26", icon: "fa-github" }, // Tautan GitHub
    { title: "Instagram", url: "https://www.instagram.com/budz2610?igsh=MWV2bmQ1eGh0ZWtsag==", icon: "fa-instagram" }, // Tautan Instagram
    { title: "Group Bot", url: "https://chat.whatsapp.com/GyDDsh5yZg2IFdGxFzwUgd", icon: "fa-whatsapp" }, // Tautan Telegram
    { title: "Email", url: "mailto:brahmandani8@google.com", icon: "fa-envelope" }, // Tautan Email
    { title: "AM Prem", url: "https://wa.me/6285731207908?text=mas+mau+order+am+prem", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "YouTube", url: "https://youtube.com/@budz.xy.5449?si=3JPHR8TZu8ZfeauQ", icon: "fa-youtube" } // Tautan YouTube
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxes.appendChild(linkElement);
  }
});
 
