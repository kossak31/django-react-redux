import { useEffect, useState } from "react";


/* REACT-BOOTSTRAP */
import { Row, Col, Form, Button } from "react-bootstrap";

/* COMPONENTS */
import Loader from "../components/Loader";
import Message from "../components/Message";

/* REACT - REDUX */
import { useSelector, useDispatch } from 'react-redux';

/* ACTION CREATORS */
import { calculateTotal } from "../actions/productActions";
import { listCoupons, applyCoupons } from "../actions/couponActions";






function CouponScreen() {
    const dispatch = useDispatch();


    /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
    const list_Products = useSelector(state => state.list_Products);
    const { total, loading, error } = list_Products;

    const list_Coupons = useSelector(state => state.list_Coupons);
    const { coupons } = list_Coupons;

    const calculate_Total = useSelector(state => state.calculate_Total);
    const { subtotal } = calculate_Total;

    const apply_Coupons = useSelector(state => state.apply_Coupons);
    const { active_coupons } = apply_Coupons;



    /* FIRING OFF THE ACTION CREATORS USING DISPATCH */
    useEffect(() => {
        dispatch(listCoupons());
        dispatch(calculateTotal(total));
        setAlgo(total);
    }, [dispatch]);



    const [code, setCode] = useState('');
    const [algo, setAlgo] = useState(total);


    const couponHandler = (e) => {
        e.preventDefault();


        let obj = coupons.find(o => o.coupon === code);

        if (obj) { // if the coupon is valid

            dispatch(applyCoupons(obj.coupon));



            let arr = []
            if (arr.length >= 0) {
                for (let i = 0; i < active_coupons.length; i++) {

                    let x = coupons.find(o => o.coupon === active_coupons[i]);

                    arr.push({
                        coupon: active_coupons[i],
                        value: x.value
                    })
                    console.log(arr)
                }
            }


            let first_coupon = []

            for (let i = 0; i < arr.length; i++) {

                //usar primeiro elemento do array, posicao 0
                const firstElement = arr.find(element => element != undefined);

                //calcular multiplos coupon %
                var discount = total * firstElement.value / 100;
                var calc1 = total - discount
                first_coupon.push(calc1)



                if (first_coupon.length <= 1) { //um coupon
                    var newTotal = calc1
                    document.getElementById('total').innerHTML = parseFloat(newTotal).toFixed(2);
                    dispatch(calculateTotal(newTotal));

                } else if (first_coupon.length > 1) { // outro coupon

                    var result = calc1 * arr[i].value / 100;
                    var newTotal = calc1 - result
                    document.getElementById('total').innerHTML = parseFloat(newTotal).toFixed(2);
                    console.log("negativo")

                    dispatch(calculateTotal(newTotal));

                }
                setCode('');
                console.log(newTotal)

            }


            //document.getElementById('total').innerHTML = parseFloat(newTotal).toFixed(2);

            //somatorio
            //const sum = arr.reduce((total, item) => total + Number(item.value), 0);
            //console.log(sum)

            console.log("validou")

        } else {
            console.log("copao invalido")
        }


    }//couponHandler



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
                            value={code}
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
