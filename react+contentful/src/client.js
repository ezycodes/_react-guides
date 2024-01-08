import * as contentful from 'contentful';


export const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API,
  environment: import.meta.env.VITE_CONTENTFUL_ENV,
})

