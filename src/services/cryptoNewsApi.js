import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    // 'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
    // 'X-RapidAPI-Key': '38610119eamsh2c23e1954c65ab3p18d735jsn8be969672a1b'
    'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com',
    'X-RapidAPI-Key': '38610119eamsh2c23e1954c65ab3p18d735jsn8be969672a1b'
}
// 
// const baseUrl = 'https://crypto-news-live3.p.rapidapi.com/news' ;
const baseUrl = 'https://crypto-pulse.p.rapidapi.com/news';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
            query: ({ newsCategory, count }) => createRequest('/')
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;