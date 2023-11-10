export type VideoProps = {
  _id: string;
  views: number;
  thumbnail: string;
  title: string;
  creator: IUser;
};

export type IUser = {
  name: string;
  email: string;
  subscribers: number;
  profilePic: string;
  _id: string;
};

export type IComment = {};
