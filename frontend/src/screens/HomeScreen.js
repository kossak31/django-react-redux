import { useEffect } from "react";


/* REACT-BOOTSTRAP */
import { Row, Col } from "react-bootstrap";

/* COMPONENTS */
import Loader from "../components/Loader";
import Message from "../components/Message";

/* REACT - REDUX */
import { useSelector, useDispatch } from 'react-redux';

/* ACTION CREATORS */
import { listBlogPosts } from '../actions/blogActions';
import { listProducts } from '../actions/productActions';


function HomeScreen() {
  const dispatch = useDispatch();


  /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
  const list_Products = useSelector(state => state.list_Products);
  const { products, loading, error } = list_Products;




  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */
  useEffect(() => {
    //dispatch(listBlogPosts());
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>

      <div>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <Col>
              {products.map((post, index) => {
                return (
                  <li key={index}>
                    {post.name} /
                    {post.price}
                  </li>


                );
              })}


            </Col>
          </Row>
        )}
      </div>

    </div>
  );
}

export default HomeScreen;