function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const fetchRetry = async (
  url: string,
  delay: number,
  tries: number
): Promise<any> => {
  console.log(`inside fetchRetry() : ${url} ${delay} ${tries}`);
  function onError(err: any) {
    const triesLeft = tries - 1;
    console.log(`inside orError() : ${url} ${delay} ${tries} ${triesLeft}`);
    if (!triesLeft) {
      throw err;
    }
    return wait(delay).then(() => fetchRetry(url, delay, triesLeft));
  }
  return window.fetch(url).catch(onError);
};
