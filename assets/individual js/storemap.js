let store = [
  {
    "main": "台北",
    "image": "./assets/images/locate1.jpeg",
    "title": "台北中山旗艦店",
    "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "phone": "(02)000-1234",
    "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time": "10:00-21:00",
    "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "adress": "台北市中山區南京東路25巷1號",
    "Latlng": { lat: 25.053353610972465, lng: 121.52022086853057 }
  },
  {
    "main": "台北",
    "image": "./assets/images/locate2.jpeg",
    "title": "台北館前店",
    "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "phone": "(02)0020-1234",
    "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time": "10:00-21:00",
    "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "adress": "台北市忠孝西路22號3F-134櫃",
    "Latlng": { lat: 25.045554071866537, lng: 121.5141257961811 }
  },
  {
    "main": "台中",
    "image": "./assets/images/locate3.jpeg",
    "title": "台中中港店",
    "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "phone": "(02)0020-1234",
    "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time": "10:00-21:00",
    "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "adress": "台中市中港路中友百貨12F",
    "Latlng": { lat: 24.165335293579, lng: 120.64024258350335 }
  },
  {
    "main": "台中",
    "image": "./assets/images/locate4.jpeg",
    "title": "台中綠色誠品",
    "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "phone": "(02)0020-1234",
    "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time": "10:00-21:00",
    "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "adress": "台中市綠色誠品B2F-87櫃",
    "Latlng": { lat: 24.15358381919933, lng: 120.6647199137999 }
  },
  {
    "main": "高雄",
    "image": "./assets/images/locate5.jpeg",
    "title": "高雄美麗新百貨店",
    "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "phone": "(02)0220-1534",
    "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time": "10:00-21:00",
    "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "adress": "高雄市前鎮區小港路34號17F",
    "Latlng": { lat: 22.598636428440162, lng: 120.30589375065139 }
  },
]
const mapChooseInputJs = document.querySelector('.mapChooseInput-Js')
const storemapCard = document.querySelector('.storemapCard')

let map;
function initMap() {
  // The location of Uluru
  const Zhongshan = { lat: 25.053353610972465, lng: 121.52022086853057 }
  const stores = [
    [{ lat: 25.053353610972465, lng: 121.52022086853057 }, "台北中山旗艦店"],
    [{ lat: 25.045554071866537, lng: 121.5141257961811 }, "台北館前店"],
    [{ lat: 24.165335293579, lng: 120.64024258350335 }, "台中中港店"],
    [{ lat: 24.15358381919933, lng: 120.6647199137999 }, "台中綠色誠品"],
    [{ lat: 22.598636428440162, lng: 120.30589375065139 }, "高雄美麗新百貨店"],
  ];
  map = new google.maps.Map(document.getElementById("map"), {
    center: Zhongshan,
    zoom: 16,
  });
  stores.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      optimized: false,
    });
    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent("Location found.");
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
    marker.addListener("click", () => {
      map.setZoom(18);
      map.setCenter(marker.getPosition());
    });
  })
}
// listening to select input
mapChooseInputJs.addEventListener('change', function onInputSelevtChange(e) {
  store.forEach(obj => {
    let rawHTML = ''
    console.log(e.target.value === obj.title)
    if (e.target.value === obj.title) {
      rawHTML = ` <div class="storemapCard__innerbox">
      <img src="${obj.image}" alt="${obj.title}">
    </div>
    <ul class="storemapCard__content">
      <div class="storemapCard__title">${obj.title}</div>
      <li class="storemapCard__content__item">
        <img src="./assets/images/icon-phone-black.svg" alt="phone icon">
        電話：${obj.phone}
      </li>
      <li class="storemapCard__content__item">
        <img src="./assets/images/icon-clock-black.svg" alt="phone icon" alt="clock icon">
        營業時間：${obj.time}
      </li>
      <li class="storemapCard__content__item">
        <img src="./assets/images/icon-map.svg" alt="position icon">
        地址：${obj.adress}
      </li>
    </ul>
    `
      storemapCard.innerHTML = rawHTML
      const location = new google.maps.LatLng(obj.Latlng.lat, obj.Latlng.lng)
      // console.log()
      map.setCenter(location)
      map.setZoom(16)
    }
  })
})

// mycode
// GeoJSON, describing the locations and names of some cities.

// let store = [
//   {
//     'main': '台北',
//     'local': 'https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate1.jpeg?raw=true',
//     'title': '台北中山旗艦店',
//     'icontel': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg',
//     'tel': '(02)000-1234',
//     'icontime': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg',
//     'time': '10:00-21:00',
//     'iconlocal': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg',
//     'map': '台北市中山區南京東路25巷1號',
//     'googleMap': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.431631258119!2d121.51804661744387!3d25.05335559999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9695740a337%3A0xb857e46ca66c04b0!2sGALERIE%20Bistro!5e0!3m2!1szh-TW!2stw!4v1627916149900!5m2!1szh-TW!2stw'
//   },
//   {
//     'main': '台北',
//     'local': 'https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate2.jpg?raw=true',
//     'title': '台北館前店',
//     'icontel': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg',
//     'tel': '(02)0020-1234',
//     'icontime': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg',
//     'time': '10:00-21:00',
//     'iconlocal': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg',
//     'map': '台北市忠孝西路22號3F-134櫃',
//     'googleMap': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.598891649463!2d121.51052631405288!3d25.04768284389893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90d157cb2e5%3A0x44dd2618a77aa86e!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5b-g5a2d6KW_6Lev5LiA5q61MjAzLTIy6JmfM2Y!5e0!3m2!1szh-TW!2stw!4v1627916473990!5m2!1szh-TW!2stw'
//   },
//   {
//     'main': '台中',
//     'local': 'https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate3.jpg?raw=true',
//     'title': '台中中港店',
//     'icontel': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg',
//     'tel': '(02)0020-1234',
//     'icontime': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg',
//     'time': '10:00-21:00',
//     'iconlocal': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg',
//     'map': '台中市中港路中友百貨12F',
//     'googleMap': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29124.450000170084!2d120.66727353955078!3d24.152217300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d66226c3efd%3A0xae87356e4c82082f!2z5Lit5Y-L55m-6LKo!5e0!3m2!1szh-TW!2stw!4v1627916559640!5m2!1szh-TW!2stw'
//   },
//   {
//     'main': '台中',
//     'local': 'https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate4.jpg?raw=true',
//     'title': '台中綠色誠品',
//     'icontel': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg',
//     'tel': '(02)0020-1234',
//     'icontime': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg',
//     'time': '10:00-21:00',
//     'iconlocal': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg',
//     'map': '台中市綠色誠品B2F-87櫃',
//     'googleMap': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116498.6318670205!2d120.5939646582031!3d24.151304900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9dd9fe0011%3A0x6f9d8ebd38727566!2z5Yuk576OIOiqoOWTgee2oOWckumBkw!5e0!3m2!1szh-TW!2stw!4v1627916625751!5m2!1szh-TW!2stw'
//   },
//   {
//     'main': '高雄',
//     'local': 'https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate5.jpg?raw=true',
//     'title': '高雄美麗新百貨店',
//     'icontel': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg',
//     'tel': '(02)0220-1534',
//     'icontime': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg',
//     'time': '10:00-21:00',
//     'iconlocal': 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg',
//     'map': '高雄市前鎮區小港路34號17F',
//     'googleMap': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.35663728877!2d120.34292731399725!3d22.565760938910664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1cd5164fa771%3A0x67d203a709dc1ee0!2zODEy6auY6ZuE5biC5bCP5riv5Y2A5bCP5riv6LevMzTomZ8xN2Y!5e0!3m2!1szh-TW!2stw!4v1627916669668!5m2!1szh-TW!2stw'
//   },
// ]

