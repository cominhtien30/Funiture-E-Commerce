import * as Yup from 'yup'
export const validationLogin = Yup.object({
    email: Yup.string('Enter your email')
        .min(4, 'Account should be of minimum 4 characters length')
        // .email('Enter a valid email')
        .required('Email is required'),
    password: Yup.string('Enter your password')
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
})
export const validationRegister = Yup.object({
    fullname: Yup.string('Enter your fullname')
        .min(3, 'Name should be of minimum 3 characters length')
        .required('fullname is required'),
    account: Yup.string('Enter your email')
        .min(4, 'Account should be of minimum 4 characters length')
        .required('Account is required'),
    email: Yup.string('Enter your email')
        .required('Account is required')
        .email('Enter a valid email'),
    password: Yup.string('Enter your password')
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password is required'),
})
export const validationUpdateUser = Yup.object({
    email: Yup.string('Enter your email')
        .required('Account is required')
        .email('Enter a valid email'),
})
export const validationAddCategory = Yup.object({
    name: Yup.string('Enter your name category')
        .required('name is required')
        .min(5, 'Name should be of minimum 5 characters length'),
    image: Yup.string('Enter your name category').required(
        'image is required',
    ),
})
export const validationUpdateCategory = Yup.object({
    name: Yup.string('Enter your name category')
        .required('name is required')
        .min(5, 'Name should be of minimum 5 characters length'),
})
export const validationAddProduct = Yup.object({
    nameProduct: Yup.string('Enter your nameProduct')
        .required('nameProduct is required')
        .min(5, 'Name should be of minimum 5 characters length')
        .max(100, 'Name should be of maximum 100 characters length'),
    description: Yup.string('Enter your name description')
        .required('description is required')
        .min(
            10,
            'description should be of minimum 10 characters length',
        ),
    image: Yup.string('Enter your  image').required(
        'image is required',
    ),
    colorProductsID: Yup.string(
        'Enter your name colorProductsID',
    ).required('color is required'),

    price: Yup.number()
        .min(9999, 'price should be of minimum 5 characters length')
        .max(
            10000000000000000000,
            'price should be of maximum 20  characters length',
        )
        .required('price is required')
        .typeError('you must specify a number'),
    quantityProducts: Yup.number()
        .max(
            10000000000000000000,
            'quantityProducts should be of maximum 20  characters length',
        )
        .required('quantityProducts is required')
        .typeError('you must specify a number'),
    productFlowTypeID: Yup.number()
        .required('productFlowTypeID is required')
        .typeError('you must specify a number'),
})
export const validationUpdateProduct = Yup.object({
    nameProduct: Yup.string('Enter your nameProduct')
        .required('nameProduct is required')
        .min(5, 'Name should be of minimum 5 characters length')
        .max(100, 'Name should be of maximum 100 characters length'),
    colorProductsID: Yup.string('Enter your name category').required(
        'color is required',
    ),
    description: Yup.string('Enter your  description')
        .required('description is required')
        .min(
            10,
            'description should be of minimum 10 characters length',
        ),
    price: Yup.number()
        .min(9999, 'price should be of minimum 5 characters length')
        .max(
            10000000000000000000,
            'price should be of maximum 20  characters length',
        )
        .required('price is required')
        .typeError('you must specify a number'),
    quantityProducts: Yup.number()
        .max(
            10000000000000000000,
            'quantityProducts should be of maximum 20  characters length',
        )
        .required('quantityProducts is required')
        .typeError('you must specify a number'),
    productFlowTypeID: Yup.number()
        .required('productFlowTypeID is required')
        .typeError('you must specify a number'),
})
export const validationCheckout = Yup.object({
    zipcode: Yup.string('Enter your zipcode ')
        .required('zipcode is required')
        .min(5, 'zipcode should be of minimum 5 characters length'),
    addresss: Yup.string('Enter your addresss ')
        .required('addresss is required')
        .min(
            10,
            'addresss should be of minimum 10 characters length',
        ),
    numberPhone: Yup.string('Enter your numberPhone ')
        .required('numberPhone is required')
        .min(
            11,
            'numberPhone should be of minimum 11 characters length',
        ),
})
export function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}
