import users from "./users.json";
export const fetchFreelancers = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    });
  });
};
