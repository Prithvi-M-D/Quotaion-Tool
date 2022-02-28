import * as yup from 'yup';
export const vendorSchema=yup.object().shape({
    name:yup.string().required(),
    address:yup.string().required(),
    number:yup.string().min(8).max(10).required(),
    email:yup.string().email().required(),
})