export const info = (text: string) => {
  console.log('\x1b[34m', `[next-custom-server] ${text}`);
};

export const error = (message: string) => {
  console.log('\x1b[31m', `[next-custom-server] ${message}`);
};
