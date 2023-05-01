export const getDateSlug = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let slug = '';
  slug += ('00' + day).slice(-2) + '.';
  slug += ('00' + month).slice(-2) + '.';
  slug += year + ' r.';

  return slug;
};
