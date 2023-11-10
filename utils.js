export const formatViews = (views) => {
  if (views < 1000) return views;
  if (views < 1000000) return parseFloat(views / 1000).toFixed(1) + "k";
  if (views >= 1000000) return parseFloat(views / 1000000).toFixed(1) + "m";
};
