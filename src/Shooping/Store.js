import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./Data/data.json";
import Additem from "./Additem";
export default function Store(){
    return(
        <div>
            <h1>Store</h1>
            <Row className="justify-content-center g-3 " md={2} xs={1} lg={3} >
                {data.map((item)=>(
                    <Col key={item.id}>
                        <Additem {...item}/>
                    </Col>

                ))}


            </Row>






        </div>

    );
}