export default ({ store, redirect, route }) => {
  return new Promise(resolve => {
    const isLoginPage = route.path.includes("/login");
    const loggedIn = store.getters["auth/loggedIn"];

    console.log('logged in?: ', loggedIn)

    if (loggedIn) return isLoginPage ? redirect("/") : resolve();

    if (route.path.includes("/login")) return resolve();

    redirect("/login");
  });
};
