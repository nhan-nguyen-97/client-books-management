import { createBrowserHistory } from "history";

function RedirectTo(link) {
  const history = createBrowserHistory();

  return history.push(`${link}`);
}

export default RedirectTo;
