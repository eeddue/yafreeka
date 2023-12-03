import { faker } from "@faker-js/faker";

export const generateVideos = () => {
  return [...Array(20)].map(() => ({
    _id: faker.string.uuid(),
    views: faker.number.int({ min: 1, max: 1000000 }),
    thumbnail: faker.image.url(),
    title: faker.lorem.words({ min: 2, max: 15 }),
    likes: faker.number.int({ min: 0, max: 100000 }),
    saves: faker.number.int({ min: 0, max: 10000 }),
    createdAt : faker.date.past({ years: 2 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
      followers : faker.number.int({ min: 1, max: 1000000 }),
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
    createdAt : faker.date.past({ years: 2 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
      followers : faker.number.int({ min: 1, max: 1000000 }),
    },
  }));
};

export const generateComments = () => {
  return [...Array(15)].map(() => ({
    _id: faker.string.uuid(),
    likes: faker.number.int({ min: 1, max: 1000 }),
    replies: faker.number.int({ min: 1, max: 700 }),
    comment: faker.lorem.words({ min: 2, max: 30 }),
    createdAt : faker.date.past({ years: 1 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
    },
  }));
};
