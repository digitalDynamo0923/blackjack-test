export const apiService = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('There was an error fetching the URL');
      }
      const data = await response.json();
      return data as T;
    } catch (err) {
      throw new Error('There was an error fetching the URL');
    }
  },
};
