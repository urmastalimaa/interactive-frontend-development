import {start as startAsyncBasicsExample}
  from './async_process_basics/AsyncProcessBasicsExample';
import {start as startAsyncMiddlewareExample}
  from './async_process_with_middleware/AsyncProcessMiddlewareExample.js';

if (document.location.search.match(/progress=async_process_basics/)) {
  startAsyncBasicsExample();
} else if (document.location.search.match(/progress=async_process_middleware/)) {
  startAsyncMiddlewareExample();
} else {
  startAsyncBasicsExample();
}
