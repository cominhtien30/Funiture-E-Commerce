import React from 'react'
// import { useDispatch } from 'react-redux'
import api from '../../../utils/api'
import authService from '../../../utils/AuthService'
import './style.scss'

export default function reactPayPal({
    totalMoney,
    checkout,
    cart,
    handleSuccess,
}) {
    const orders = () => {
        cart.forEach((element) => {
            delete element.description
            delete element.pictures
            delete element.price
            delete element.color
            delete element.nameProduct
        })
        return cart
    }

    // const dispatch = useDispatch()
    const totalPrice = parseFloat(totalMoney / 20000)

    const paypalRef = React.useRef()
    React.useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: 'CAPTURE',
                        purchase_units: [
                            {
                                description: 'Thanh Toan Funiture',
                                amount: {
                                    currency_code: 'USD',
                                    value: totalPrice,
                                },
                            },
                        ],
                    })
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture()
                    console.log(order)
                    console.log(
                        {
                            totalMoney,
                            ...checkout,
                            orders: orders(),
                        },
                        'hahahah',
                    )
                    api.post(
                        'bill/new-bill',
                        { totalMoney, ...checkout, orders: orders() },
                        authService.headerToken(),
                    )
                        .then(() => handleSuccess(true))
                        .catch((error) => console.log(error, 'error'))
                },
                onError: (err) => {
                    //   setError(err),
                    console.error(err)
                },
            })
            .render(paypalRef.current)
    }, [])
    return (
        <>
            <div ref={paypalRef}></div>
        </>
    )
}
