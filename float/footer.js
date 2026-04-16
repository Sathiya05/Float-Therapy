document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-white text-black w-full border-t border-gray-100">

  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>
        <h1 class="text-2xl font-bold text-black">
          <a href="index.html">STATIC<span class="text-[#38BDF8]">LABS</span></a>
        </h1>
        <p class="text-gray-500 text-sm leading-relaxed mt-2">
          We specialize in sensory deprivation, neurological recovery, and 
          advanced floatation therapy designed to optimize human performance 
          and mental clarity.
        </p>

        <div class="flex gap-4 mt-4 text-lg">
          <a href="#" class="hover:text-[#38BDF8] transition text-gray-400"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#38BDF8] transition text-gray-400"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#38BDF8] transition text-gray-400"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-black">
          Our Modalities
        </h3>
        <ul class="space-y-2 text-gray-500 text-sm">
          <li><a href="#" class="hover:text-[#38BDF8] transition">Floatation Therapy</a></li>
          <li><a href="#" class="hover:text-[#38BDF8] transition">Sensory Deprivation</a></li>
          <li><a href="#" class="hover:text-[#38BDF8] transition">Magnesium Soaks</a></li>
          <li><a href="#" class="hover:text-[#38BDF8] transition">Zero-G Recovery</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-black">
          Quick Links
        </h3>
        <ul class="space-y-2 text-gray-500 text-sm">
          <li><a href="about.html" class="hover:text-[#38BDF8] transition">About</a></li>
          <li><a href="benefits.html" class="hover:text-[#38BDF8] transition">Benefits</a></li>
          <li><a href="packages.html" class="hover:text-[#38BDF8] transition">Packages</a></li>
          <li><a href="services.html" class="hover:text-[#38BDF8] transition">Services</a></li>
          <li><a href="contact.html" class="hover:text-[#38BDF8] transition">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-black">
          Contact Us
        </h3>

        <ul class="space-y-3 text-gray-500 text-sm">
          <li class="flex items-start gap-2">
            <i class="bi bi-geo-alt-fill text-[#38BDF8]"></i>
            <span>Industrial District, London, UK</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-telephone-fill text-[#38BDF8]"></i>
            <span>+44 20 7946 0123</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-envelope-fill text-[#38BDF8]"></i>
            <span>admin@staticlabs.io</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="border-t border-gray-100 py-6 text-center text-gray-400 text-xs px-4">
    © ${new Date().getFullYear()} STATIC LABS. All Rights Reserved.
  </div>

</footer>
`;
});