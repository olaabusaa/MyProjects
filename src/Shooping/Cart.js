import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import Button from "react-bootstrap/Button";
import data from "./Data/data.json";

export default function Cart({id,name,price,imgUrl}){
    return(
        <div>
            <h1>Cart</h1>
                <Card className="h-100">
                    <CardImg src={imgUrl} variant="top"/>
                    <CardBody>
                        <CardTitle>
                            <span> {name}</span>
                            <br/>
                            <span>Price:{price}$</span>
                        </CardTitle>
                    </CardBody>
                </Card>

        </div>



    );
}