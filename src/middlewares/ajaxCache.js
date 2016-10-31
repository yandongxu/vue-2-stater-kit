import cache from '../utils/cache';

// NOTE: only cache `GET` method, cached by url
function ajaxCache (request, next) {
  if (request.method !== 'GET') return next();

  // full url
  const fullUrl = request.getUrl();

  // cache hit
  if (cache.has(fullUrl)) {
    const body = cache.get(fullUrl);
    return next(request.respondWith(body, {
      status: 200,
      statusText: 'OK'
    }));
  }

  // cache miss
  next((response) => {
    cache.set(fullUrl, response.body);
  });
}

export default ajaxCache;
