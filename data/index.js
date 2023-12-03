import { faker } from "@faker-js/faker";

export const generateVideos = () => {
  return [...Array(20)].map(() => ({
    _id: faker.string.uuid(),
    views: faker.number.int({ min: 1, max: 1000000 }),
    thumbnail: faker.image.url(),
    title: faker.lorem.words({ min: 2, max: 15 }),
    likes: faker.number.int({ min: 0, max: 100000 }),
    saves: faker.number.int({ min: 0, max: 10000 }),
    createdAt: faker.date.past({ years: 2 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
      followers: faker.number.int({ min: 1, max: 1000000 }),
    },
  }));
};

export const generateRecommended = () => {
  return [...Array(15)].map(() => ({
    _id: faker.string.uuid(),
    views: faker.number.int({ min: 1, max: 1000000 }),
    thumbnail: faker.image.url(),
    title: faker.lorem.words({ min: 2, max: 10 }),
    likes: faker.number.int({ min: 0, max: 100000 }),
    saves: faker.number.int({ min: 0, max: 10000 }),
    createdAt: faker.date.past({ years: 2 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
      followers: faker.number.int({ min: 1, max: 1000000 }),
    },
  }));
};

export const generateComments = () => {
  return [...Array(15)].map(() => ({
    _id: faker.string.uuid(),
    likes: faker.number.int({ min: 1, max: 1000 }),
    replies: faker.number.int({ min: 1, max: 700 }),
    comment: faker.lorem.words({ min: 2, max: 30 }),
    createdAt: faker.date.past({ years: 1 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
    },
  }));
};

const quicks = [
  "https://player.vimeo.com/progressive_redirect/playback/887175804/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=9c7be0b205ba38d79873e302553b52bd6a6b654d43d04de168deee1dc1a0231d",
  "https://player.vimeo.com/progressive_redirect/playback/885759790/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=067187255a5ea7345189fcce2d3f494404792dc045760622d6862d476d71b849",
  "https://player.vimeo.com/progressive_redirect/playback/872928941/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=9aa71cbd7821253f9b01700af7cf80006c569bbecc7432780ccaa5dfc68e21d7",
  "https://player.vimeo.com/progressive_redirect/playback/889410041/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=4c182d0cdd3c0a7d401daa9639c4b8b37dd97cbcabb9de80ec177beb0215c95d",
  "https://player.vimeo.com/progressive_redirect/playback/757542369/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=803618b03a2df40fc8db6594b5415c2eac51ac62d451b716571d3a382df9e9a6",
  "https://player.vimeo.com/progressive_redirect/playback/883053105/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=49247d9af71081812e170e9d98ed5a4e9d7ede0b6dd18c4f095e6641bf68aa6c",
  "https://player.vimeo.com/progressive_redirect/playback/885772564/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=fc6ea3a7f9681bf11238781076228a211db7e895224dc9cad046d4c2079de871",
  "https://player.vimeo.com/progressive_redirect/playback/877361444/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=bfdc68779924c920af62db10ba48cf9e8d8e78c3c65c78c49e5e117f36593c77",
  "https://player.vimeo.com/progressive_redirect/playback/886108046/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=93a4c3b4f5bdd4469fef73759096fc1e2c21b693e9d2ec6335b72fd306f61009",
  "https://player.vimeo.com/progressive_redirect/playback/884699127/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=b93166a381450a9faa73f34d3dcfede15a2afb55e306230b16824cd2451f3042",
];

export const generateQuicks = () => {
  return [...Array(10)].map((_, index) => ({
    _id: faker.string.uuid(),
    title: faker.lorem.words({ min: 2, max: 10 }),
    likes: faker.number.int({ min: 1, max: 100000 }),
    comments: faker.number.int({ min: 1, max: 10000 }),
    video: quicks[index],
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
      followers: faker.number.int({ min: 1, max: 1000000 }),
    },
  }));
};
