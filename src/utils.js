export const isDevelopment = () => {
  try {
    return process.env.NODE_ENV === 'development';
  } catch (e) {
    return false;
  }
};

export const parseResponse = (response) => response.json();
