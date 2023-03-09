type VerifyUserFn = (user: User, receivedValue: User) => boolean;
type User = { username: string; password: string };
type UserId = (id: number) => boolean;

const verifyUser: VerifyUserFn = (user, receivedValue) => {
  return user.username === receivedValue.username && user.password === receivedValue.password;
};

const verifyUserId: UserId = (id) => {
  return !!id;
};

const bdUser: User = { username: "José", password: "123456789" };
const receivedUser = { id: 23, username: "José", password: "123456789" };
const isUserLoggedIn = verifyUser(bdUser, receivedUser);
const hasUserId = verifyUserId(receivedUser.id);

console.log(isUserLoggedIn, hasUserId);
