const QUERY_TIMESTAMPS = 'QueryTimestamps';
const REQUEST_COUNT = 'RequestCount';
const key = (k: string) => `${import.meta.env.NODE_ENV === 'production' ? 'production' : 'development'}${k}`;

interface BS {
  getQueryTimestamps: () => object;
  setQueryTimestamps: (k: { [key: number]: number }) => void;
  clearQueryTimestamps: () => void;
  getRequestCount: () => number;
  setRequestCount: (k: number) => void;
  clearRequestCount: () => void;
}

const BrowserStorage: BS = {
  // QUERY TIMESTAMPS
  getQueryTimestamps() {
    const qts = localStorage.getItem(key(QUERY_TIMESTAMPS));
    if (qts) {
      return JSON.parse(qts);
    }
    return {};
  },
  setQueryTimestamps(queryTimestamps: { [key: number]: number }) {
    localStorage.setItem(key(QUERY_TIMESTAMPS), JSON.stringify(queryTimestamps));
  },
  clearQueryTimestamps() {
    localStorage.removeItem(key(QUERY_TIMESTAMPS));
  },
  // REQUEST COUNT
  getRequestCount() {
    const rc = localStorage.getItem(key(REQUEST_COUNT))
    if (rc) {
      return parseInt(rc, 10);
    }
    return 0;
  },
  setRequestCount(requestCount: number) {
    localStorage.setItem(key(REQUEST_COUNT), requestCount.toString());
  },
  clearRequestCount() {
    localStorage.removeItem(key(REQUEST_COUNT));
  },
};

export default BrowserStorage;
