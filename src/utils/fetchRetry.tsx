function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const fetchRetry = async (
  url: string,
  delay: number,
  tries: number
): Promise<any> => {
  let ok = false;
  do {
    try {
      const response = await wait(500).then(() => fetch(url));
      if (!response.ok) {
        ok = false;
      } else {
        ok = true;
        return Promise.resolve(response);
      }
    } catch {
      ok = false;
    }
    tries = tries - 1;
    if (tries === 0) {
      return Promise.reject(`Failed`);
    }
  } while (!ok);
};
