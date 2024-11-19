import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import Button from "react-bootstrap/Button";
 import data from "./Data/data.json";
import Cart from "./Cart";
import Col from "react-bootstrap/Col";



export default function Additem ({id,name,price,imgUrl})
{
    function AddtoCart(product){


    }

    return(
        <div>
            <Card className="h-100">
                <CardImg src={imgUrl} variant="top"/>
                <CardBody>
                    <CardTitle>
                        <span> {name}</span>
                        <br/>
                        <span>Price:{price}$</span>
                    </CardTitle>
                    <button > Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
                </CardBody>
            </Card>
        </div>

    );



}