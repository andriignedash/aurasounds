import affirmations from '../data/affirmations.json';

export const fetchAffirmations = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(affirmations), 500);
  });
};
