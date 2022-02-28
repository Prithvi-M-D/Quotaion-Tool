import { configureStore } from '@reduxjs/toolkit';

import vendorSlice from './vendor';
import clientSlice from './client';

const store = configureStore({
  reducer: { vendor: vendorSlice.reducer , client: clientSlice.reducer, }
});

export default store;