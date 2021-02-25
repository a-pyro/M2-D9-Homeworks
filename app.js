console.log('Hi there! 🔥');
const shit = '💩',
  fire = '🔥',
  rocket = '🚀',
  poudzo = '👍🏻';
// scoll navbar
const nav = document.querySelector('nav.navbar');
window.addEventListener('scroll', showNav);
function showNav() {
  console.log(pageYOffset);
  if (pageYOffset > 130) {
    if (nav.classList.contains('backdrop-blur')) return;
    nav.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      nav.classList.remove('bg-transparent');
      nav.classList.add('backdrop-blur');
      nav.style.transform = 'translateY(0)';
    }, 100);
  }

  if (pageYOffset === 0) {
    nav.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      nav.style.transform = 'translateY(0)';
      nav.classList.add('bg-transparent');
      nav.classList.remove('backdrop-blur');
    }, 100);
  }
}

const coversFetched = [
  'https://i.scdn.co/image/ab6775700000ee85822c8e43c2b458715575b1f2',
  'https://i.scdn.co/image/ab67616d00004851ce85d297fc24805972bd8df1',
  'https://i.scdn.co/image/ab67706c0000bebbc91e4c3c759916efdd7e7f83',
  'https://i.scdn.co/image/ab67706f00000002a76a4d7d1bc77ef3ac475bfe',
  'https://i.scdn.co/image/ab67616d0000b273d2a9744ce3913664175e9197',
  'https://i.scdn.co/image/4acaaeb0201432a0345e247c0942d42dd234e5cc',
  'https://i.scdn.co/image/8e48cb170fcb2608718f28e71075cee76ca24d05',
  'https://i.scdn.co/image/1d41762b9569ae5fc2cd145e157057985d02adc1',
  'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0bM2ze-default.jpg',
  'https://thisis-images.scdn.co/37i9dQZF1DZ06evO1vHx6D-default.jpg',
  'https://i.scdn.co/image/ab67706f0000000215d650f7d085c446423ea6d3',
  'https://i.scdn.co/image/ab67706f00000002e8c71cdea005591de57e3ee7',
  'https://i.scdn.co/image/ab67706f00000002929e39d3550da276515b31f2',
  'https://i.scdn.co/image/ab67706f0000000282894e9aedb86fd9f2f724db',
  'https://i.scdn.co/image/ab67706f000000022cdb0982697cc0ae43b1b5b6',
  'https://i.scdn.co/image/ab67706f00000002fcd71af8bfcaa6be838321aa',
  'https://i.scdn.co/image/ab67706f00000002370772191e128bdc97c9cc37',
  'https://daily-mix.scdn.co/covers/time-capsule/time-capsule-blue_DEFAULT-it.jpg',
  'https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat_DEFAULT-it.jpg',
  'https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind_DEFAULT-it.jpg',
  'https://i.scdn.co/image/ab67706f00000002feb66cd1f6632ecfa89b3e8c',
  'https://i.scdn.co/image/ab67706f000000020aedfa51a02afc69b9104efa',
  'https://i.scdn.co/image/ab67706f00000002726e165baf8b50270129a6d5',
  'https://i.scdn.co/image/ab67706f000000021593bd76299d0858f9c69fcf',
  'https://i.scdn.co/image/ab67706f0000000210a18dc21cab85e6d2e540a0',
  'https://i.scdn.co/image/ab67706f00000002bd97fede388b89a515c0a261',
  'https://i.scdn.co/image/ab67706f0000000274e332932155604ae4e59d89',
  'https://i.scdn.co/image/ab67706f000000028672e2b37d4a0376222a53f6',
  'https://i.scdn.co/image/ab67706f00000002519fc8771d90f496501a4da3',
  'https://i.scdn.co/image/ab67706f00000002a76a4d7d1bc77ef3ac475bfe',
  'https://i.scdn.co/image/ab67706f000000025ef83703c96f58d3d7409c8a',
  'https://i.scdn.co/image/ab67706f0000000249919fc4c56e03ad1ccdf761',
  'https://newjams-images.scdn.co/v3/discover-weekly/PmjXfVSJ9my0mAwL4_FK8LEiAsGMIGQYIYrf_HelcfODfS1_B5VrKIWUWZKFUfnNSdF2qX871x6S8GxmYAMCoQixVAqceqTifwcqSkTx-q8=/NTE6NTA6MjFUMTAtMzAtMQ==/default',
  'https://dailymix-images.scdn.co/v2/img/9da77602a6da8aadd6d7c22b958ce4f7b8c74a57/1/it/default',
  'https://dailymix-images.scdn.co/v2/img/e6728275ee23ebfa6f45084e3edb8a574ee17b50/2/it/default',
  'https://i.scdn.co/image/ab67706f0000000261b3e825821e8b57886e5327',
  'https://i.scdn.co/image/ab67706f000000022b6a4f0a0f453f9b52601dde',
  'https://i.scdn.co/image/ab67706f00000002b73b8219c4d4aa323c9747de',
  'https://i.scdn.co/image/ab67706f0000000249919fc4c56e03ad1ccdf761',
  'https://i.scdn.co/image/ab67706f000000029205ddd6990d57d56db91b81',
  'https://i.scdn.co/image/ab67706f000000024eb58a097da59ad442e26bf2',
  'https://i.scdn.co/image/ab67706f00000002370772191e128bdc97c9cc37',
  'https://i.scdn.co/image/ab67706f00000002c33421b8a5b93615103253ae',
  'https://i.scdn.co/image/ab67706f000000027c3ecbb1ee121582aed0d836',
  'https://i.scdn.co/image/ab67706f000000027a181d9fed936372672c40ca',
  'https://seeded-session-images.scdn.co/v1/img/artist/7dGJo4pcD2V6oG8kP0tJRR/it',
  'https://i.scdn.co/image/ab67616d0000b273b84b0516d901f95461bb5165',
  'https://i.scdn.co/image/ab67706f00000002d3384b53dacf17293efd7e19',
  'https://seeded-session-images.scdn.co/v1/img/artist/7oPftvlwr6VrsViSDV7fJY/it',
  'https://i.scdn.co/image/ab67616d0000b273db89b08034de626ebee6823d',
  'https://i.scdn.co/image/ab67706f00000002324739b678f2054b9263b8d2',
  'https://i.scdn.co/image/ab67706f00000002f9ff6e7d2fbff38e31b9cdf5',
  'https://i.scdn.co/image/ab67706f00000002c4a68e3ce6f50dc9e312e095',
  'https://i.scdn.co/image/ab67706f000000020080976877a9d3661aa62241',
  'https://i.scdn.co/image/ab67706f00000002519fc8771d90f496501a4da3',
  'https://i.scdn.co/image/ab67706f000000027691acebf96bbd1449d61cff',
  'https://i.scdn.co/image/ea1cea30bebc1034399595430e6725436f98f97e',
  'https://i.scdn.co/image/35b40cdb1763b0c53d0a40d96f888573a88084d6',
  'https://i.scdn.co/image/1d41762b9569ae5fc2cd145e157057985d02adc1',
  'https://i.scdn.co/image/ab67706f00000002d80282c954a249a668c4c5ce',
  'https://i.scdn.co/image/ab67706f0000000287972ceeccc8fea92cd21af5',
  'https://i.scdn.co/image/ab67706f00000002320f20022a9b6a6e55204a30',
  'https://i.scdn.co/image/ab67616d00004851ce85d297fc24805972bd8df1',
];

const genresShop = [
  'rock',
  'classical',
  'hip-hop',
  'techno',
  'pop',
  'country',
  'blues',
  'jazz',
  'dance',
];
const artistsShop = [...Array(30)].map((_, idx) => `Artist n°${idx + 1}`);
const trackListsShop = [...Array(14)].map((_, idx) => `Track n°${idx + 1}`);
const durationsShop = [...Array(14)].map(
  (_, idx) =>
    `${((idx + 1 * (Math.random() * (10000 - 5000)) + 5000) / 60).toFixed(2)}s`
);
const coversShop = coversFetched.slice(0, 30);

const player = {
  albums: [...Array(30)].map((element, idx) => ({
    cover: coversShop[idx],
    trackList: [...trackListsShop],
    durations: [...durationsShop],
    artist: artistsShop[idx],
    genre: genresShop[idx % genresShop.length],
    title: [...Array(14)].map((_, idx) => `Title-${idx + 1}`),
  })),
  makeFav() {
    this.favAlbums = this.albums.slice(0, 10);
  },
  makePopular() {
    this.mostPopular = this.albums.slice(20, this.albums.length);
  },
  addRecent() {
    this.recentlyAdded = this.albums.slice(10, 20);
  },
};

player.makeFav();
player.makePopular();
player.addRecent();

console.log(player);

const mainShowCase = document.querySelector('.main__showcase');

for (let i = 1; i <= 3; i++) {
  const html = `
    <section class='row__category'>
      <h5 class='font-weight-bold ml-2 row__heading-${i}'></h5>
      <div class='row flex-nowrap no-gutters' id="row${i}">
      </div>
    </section>
    `;
  mainShowCase.insertAdjacentHTML('beforeend', html);
}

const fillCol = (arr, rowID, headingNumber, heading) => {
  const rowDom = document.getElementById(rowID);
  arr.forEach((album, idx) => {
    const html = `
      <div class='col mr-2 mb-2 card__col'>
          <div class='card p-2 shadow album__card'>
            <div class='card__cover__wrapper'>
              <img src='${album.cover}' class='card-img-top album__cover w-100' alt='...' />
              <i class='fas fa-play-circle album__btn rounded-circle'></i>
            </div>
            <div class='card-body p-0 mt-2'>
              <h6 class='card-title album__artist'>${album.artist}</h6>
              <p class='card-text album__text'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
    `;

    rowDom.insertAdjacentHTML('beforeend', html);
    const rowHeading = document.querySelector(`.row__heading-${headingNumber}`);
    rowHeading.textContent = heading;
  });
};

fillCol(player.recentlyAdded, 'row1', 1, 'Recently Added');
fillCol(player.mostPopular, 'row2', 2, 'Most Popular');
fillCol(player.favAlbums, 'row3', 3, 'Favourites Albums');
// favAlbums
// mostPopular
// recentlyAdded

// player.favAlbums.forEach((album, idx) => {
//   const
// })

/*  */

{
  /* <section class='row__category'>
  <h5 class='font-weight-bold row__heading'></h5>
  <div class='row no-gutters'>
    <div class='col mr-2 mb-2 card__col'>
      <div class='card p-2 shadow album__card'>
        <div class='card__cover__wrapper'>
          <img src='' class='card-img-top album__cover w-100' alt='...' />
          <i class='fas fa-play-circle album__btn rounded-circle'></i>
        </div>
        <div class='card-body p-0 mt-2'>
          <h6 class='card-title album__artist'></h6>
          <p class='card-text album__text'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  </div>
</section>; */
}

//  EXERCISE 3 Foreach album in the favorite list, place the genre inside a badge
// <span class="badge badge-pill badge-primary">Primary</span>

coversDOM.forEach((albumCover) => {
  const badge = `<span class="badge badge-pill badge-primary album__genere"></span>`;
  albumCover.innerHTML += badge;
});
