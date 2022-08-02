import { useEffect, useState } from "react";


/* REACT-BOOTSTRAP */
import { Row, Col, Form, Button } from "react-bootstrap";

/* COMPONENTS */
import Loader from "../components/Loader";
import Message from "../components/Message";

/* REACT - REDUX */
import { useSelector, useDispatch } from 'react-redux';

/* ACTION CREATORS */
import { listCoupons, applyCoupons } from "../actions/couponActions";






function CouponScreen() {
    const dispatch = useDispatch();


    /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
    const list_Products = useSelector(state => state.list_Products);
    const { total, loading, error } = list_Products;

    const list_Coupons = useSelector(state => state.list_Coupons);
    const { coupons } = list_Coupons;

    const apply_Coupons = useSelector(state => state.apply_Coupons);
    const { validar } = apply_Coupons;



    /* FIRING OFF THE ACTION CREATORS USING DISPATCH */
    useEffect(() => {
        dispatch(listCoupons());
    }, [dispatch]);


    const [coupon, setCoupon] = useState();

    function calc(e) {
        e.preventDefault();

        let obj = coupons.find(o => o.coupon === coupon);

        if (coupon == obj.coupon) {
            dispatch(applyCoupons(coupon));
            console.log("validouc")
        } else {
            console.log("invalidouc")
        }

    }




    const [code, setCode] = useState('');
    const couponHandler = (e) => {
        //dispatch(calcularDesconto());
        e.preventDefault();


        if (code === '10') {
            //calculate percentage of discount from total price
            const discount = total * 10 / 100;
            const newTotal = total - discount;
            document.getElementById('total').innerHTML = newTotal;
            console.log(newTotal)
            dispatch(applyCoupons(newTotal));
        }

        if (code === '50') {
            //calculate percentage of discount from total price

            const discount = total * 50 / 100;
            const newTotal = total - discount;
            document.getElementById('total').innerHTML = newTotal;
            dispatch(applyCoupons(newTotal));
            console.log(newTotal)
        }







        //calculate coupon multiplier

        // if (code) {
        // const x = coupon.map((item) => {
        //     const obj = { "coupon": item.coupon, "value": item.value };
        //     return obj;
        // });



        //var coupon_value = document.getElementById('code').value;

        //console.log("coupon: ", x);
        //console.log("code_value: ", code);
        //let u = x.find((c) => c.coupon === code)

        // if (u) {
        //     //const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
        //     //calculate percentage of discount from total price
        //     // const discount = total * u.value / 100;
        //     // const newTotal = total - discount;
        //     // document.getElementById('total').innerHTML = newTotal;

        //     alert('Coupon applied!');
        // } else {
        //     alert('Coupon ERROR!');
        // }
        // }
    }
    return (
        <div>



            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col>
                        TOTAL : <p id="total">{total}</p>

                        <Form.Label htmlFor="coupon">Coupon</Form.Label>
                        <Form.Control
                            type="text"
                            id="coupon"
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <Button variant="primary" onClick={couponHandler}
                        >Primary</Button>{' '}
                        {coupons.map((item) => {
                            return (
                                <div>
                                    <p>{item.coupon} - DESCONTO %  {item.value}</p>

                                </div>
                            )
                        }
                        )}
                    </Col>
                </Row>
            )}
        </div>


    );
}

export default CouponScreen;