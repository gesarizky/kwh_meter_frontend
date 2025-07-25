/* eslint-disable prettier/prettier */
import axios from 'axios'

const QUALITY_SERVICE = import.meta.env.VITE_QUALITY_SERVICE
const UPLOADFILE = import.meta.env.VITE_UPLOAD
const PRODUCT = import.meta.env.VITE_PRODUCT
const PARTNER = import.meta.env.VITE_PARTNER
const INCOMING = import.meta.env.VITE_INCOMING
const TRACKEDITEMS = import.meta.env.VITE_TRACKEDITEMS
const AQL = import.meta.env.VITE_AQL
const WAREHOUSE = import.meta.env.VITE_WAREHOUSE

const BASE_SERVER = import.meta.env.VITE_SERVER

// export const backendQualityService = axios.create({
//   baseURL: `${BASE_SERVER}/v1/quality-service`,
// })

// export const backendUploadFile = axios.create({
//   baseURL: `${BASE_SERVER}/v1/upload-service`,
// })

export const backendProduct = axios.create({
  baseURL: `${BASE_SERVER}/v1/products`,
})

export const backendPartner = axios.create({
  baseURL: `${BASE_SERVER}/v1/partner`,
})

export const backendIncoming = axios.create({
  baseURL: `${BASE_SERVER}/v1/receiving-products`,
})

export const backendTrackedItems = axios.create({
  baseURL: `${BASE_SERVER}/v1/tracked-items`,
})

export const backendAql = axios.create({
  baseURL: `${BASE_SERVER}/v1/aql`,
})

export const backendWarehouse = axios.create({
  baseURL: `${BASE_SERVER}/v1/warehouses`,
})

export const backendQualityService = axios.create({
  baseURL: QUALITY_SERVICE,
})

export const backendUploadFile = axios.create({
  baseURL: UPLOADFILE,
})

// export const backendProduct = axios.create({
//   baseURL: PRODUCT,
// })

// export const backendPartner = axios.create({
//   baseURL: PARTNER,
// })

// export const backendIncoming = axios.create({
//   baseURL: INCOMING,
// })

// export const backendTrackedItems = axios.create({
//   baseURL: TRACKEDITEMS,
// })

// export const backendAql = axios.create({
//   baseURL: AQL,
// })

// export const backendWarehouse = axios.create({
//   baseURL: WAREHOUSE,
// })
