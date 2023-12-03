import { faker } from "@faker-js/faker";

export const generateVideos = () => {
  return [...Array(20)].map(() => ({
    _id: faker.string.uuid(),
    views: faker.number.int({ min: 1, max: 1000000 }),
    thumbnail: faker.image.url(),
    title: faker.lorem.words({ min: 2, max: 10 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
    },
  }));
};

export const generateRecommended = () => {
  return [...Array(15)].map(() => ({
    _id: faker.string.uuid(),
    views: faker.number.int({ min: 1, max: 1000000 }),
    thumbnail: faker.image.url(),
    title: faker.lorem.words({ min: 2, max: 10 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
    },
  }));
};

export const generateComments = () => {
  return [...Array(15)].map(() => ({
    _id: faker.string.uuid(),
    likes: faker.number.int({ min: 1, max: 1000 }),
    comment: faker.lorem.words({ min: 2, max: 30 }),
    creator: {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePic: faker.image.url(),
    },
  }));
};
