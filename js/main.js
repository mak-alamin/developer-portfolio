let menu_cross = document.querySelector("header i.fa.fa-times");
let menu_bars = document.querySelector(".home i.fa.fa-bars");
let header = document.querySelector("header");

if (window.innerWidth < 768) {
  header.classList.add("mobile");

  menu_bars.addEventListener("click", function (e) {
    header.classList.remove("hide");
    header.classList.add("show");
  });

  menu_cross.addEventListener("click", function (e) {
    header.style.display = "block";
    header.classList.remove("show");
    header.classList.add("hide");
  });
}

// Typing animation
let my_titles = [
  "Full Stack Web Developer",
  "UI/UX Graphics Designer",
  "MERN Stack Web Developer",
  "PHP, Laravel & WordPress Expert",
];

my_titles.forEach(function (title, index) {
  let title_index = index;

  setInterval(function () {
    if (title_index == my_titles.length) {
      title_index = 0;
    }

    document.querySelector(".typewriter span").innerHTML =
      my_titles[title_index];

    title_index++;
  }, 5000);
});

// Three JS

let camera, scene, renderer;
let mesh;

init();

function init() {
  camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
  camera.position.z = 400;

  scene = new THREE.Scene();

  const loader = new THREE.TextureLoader();

  const geometry = new THREE.BoxGeometry(250, 250, 250);

  loader.load(
    "https://github.com/mak-alamin/developer-portfolio/blob/main/images/mak-alamin-web-developer.png",
    function (texture) {
      //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

      const material = new THREE.MeshBasicMaterial({ map: texture });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(300, 300);
      document.getElementById("rotating_cube").appendChild(renderer.domElement);
      window.addEventListener("resize", onWindowResize);

      animate(mesh);
    },
    // onProgress callback currently not supported
    undefined,

    // onError callback
    function (err) {
      console.error("An error happened.");
    }
  );
}

function onWindowResize() {
  camera.aspect = 1;
  camera.updateProjectionMatrix();

  renderer.setSize(300, 300);
}

function animate(mesh) {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}
