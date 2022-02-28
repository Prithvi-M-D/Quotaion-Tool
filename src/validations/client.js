import * as yup from 'yup';
export const clientSchema=yup.object().shape({
    cname:yup.string().required(),
    caddress:yup.string().required(),
    cphone:yup.string().min(8).max(10).required(),
})

export const weddingSchema=yup.object().shape({
    venue:yup.string().required(),
    reception:yup.date(),
    muhurta:yup.date(),
    Mehendi:yup.date(),
})