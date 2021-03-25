import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

import { CartContext } from "../Contexts/Cart";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "93b223e0-a04e-4925-a54a-3a0665a36b2b",
          name: "Pork - Kidney",
          description:
            "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec",
          imgURL: "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
        },
        {
          id: "82ac64bc-6ecf-44d7-af90-8c2e8d435503",
          name: "Soup - Cream Of Broccoli",
          description:
            "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in",
          imgURL: "http://dummyimage.com/103x100.png/cc0000/ffffff",
        },
        {
          id: "bbdc0a08-b4ae-4d4d-97e6-59b73085b701",
          name: "Lid - High Heat, Super Clear",
          description:
            "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
          imgURL: "http://dummyimage.com/189x100.png/dddddd/000000",
        },
        {
          id: "4e40cf6d-94a9-450f-bd93-cd6922a9fb47",
          name: "Chicken - Leg, Fresh",
          description:
            "vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
          imgURL: "http://dummyimage.com/227x100.png/dddddd/000000",
        },
        {
          id: "c5822f31-9574-4de6-a042-14aa9ffcb829",
          name: "Jameson Irish Whiskey",
          description:
            "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
          imgURL: "http://dummyimage.com/178x100.png/dddddd/000000",
        },
        {
          id: "adb843a6-233d-4a8c-a82e-b39b3030008d",
          name: "Capicola - Hot",
          description:
            "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
          imgURL: "http://dummyimage.com/195x100.png/ff4444/ffffff",
        },
        {
          id: "ba0aea7e-6ae1-4a2f-9eda-9262d88ec822",
          name: "V8 Splash Strawberry Kiwi",
          description:
            "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
          imgURL: "http://dummyimage.com/132x100.png/dddddd/000000",
        },
        {
          id: "40bf992d-343b-4ded-b88c-fe62a730c1b3",
          name: "Bread - Corn Muffaletta",
          description:
            "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
          imgURL: "http://dummyimage.com/186x100.png/ff4444/ffffff",
        },
        {
          id: "b93aecad-d49b-462b-bf01-2f0be1396afb",
          name: "Ice Cream - Life Savers",
          description:
            "tortor duis mattis egestas metus aenean fermentum donec ut mauris",
          imgURL: "http://dummyimage.com/176x100.png/ff4444/ffffff",
        },
        {
          id: "d89b9a44-36a8-483d-9558-ad5a89a0fff5",
          name: "Glass Clear 8 Oz",
          description:
            "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at",
          imgURL: "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
        },
        {
          id: "01adaf37-61e9-4f59-ad8a-1a40dfbcfb34",
          name: "Mangoes",
          description:
            "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
          imgURL: "http://dummyimage.com/201x100.png/5fa2dd/ffffff",
        },
        {
          id: "4c24f5e1-f966-4b06-9a87-98a08eeee7c3",
          name: "Tray - 16in Rnd Blk",
          description:
            "ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non",
          imgURL: "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
        },
        {
          id: "892cb5f4-ea55-4ed8-9b31-b1c4308a2674",
          name: "Garlic - Elephant",
          description:
            "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum",
          imgURL: "http://dummyimage.com/160x100.png/dddddd/000000",
        },
        {
          id: "b86a5a62-86c8-4228-88b3-dc9b58c37d74",
          name: "Soup - Campbells, Beef Barley",
          description:
            "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
          imgURL: "http://dummyimage.com/185x100.png/dddddd/000000",
        },
        {
          id: "9cf41e9a-46c1-4b93-843c-c84e1c0fa721",
          name: "Chips Potato All Dressed - 43g",
          description:
            "quam a odio in hac habitasse platea dictumst maecenas ut",
          imgURL: "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
        },
        {
          id: "5436157e-4a4a-461d-b6bd-abf27231600e",
          name: "Veal - Insides Provini",
          description:
            "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",
          imgURL: "http://dummyimage.com/237x100.png/ff4444/ffffff",
        },
        {
          id: "fbde1bcd-2ba4-4ee0-9e65-0b506114e4c4",
          name: "Wine - White, Pinot Grigio",
          description:
            "donec quis orci eget orci vehicula condimentum curabitur in libero",
          imgURL: "http://dummyimage.com/232x100.png/5fa2dd/ffffff",
        },
        {
          id: "dfc6fac2-0eba-4c74-a03f-a0fe86ad237e",
          name: "Soup - Campbells, Chix Gumbo",
          description:
            "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
          imgURL: "http://dummyimage.com/206x100.png/dddddd/000000",
        },
        {
          id: "84098645-c2a8-4e4d-a346-3192be507e3e",
          name: "Arrowroot",
          description:
            "dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
          imgURL: "http://dummyimage.com/100x100.png/dddddd/000000",
        },
        {
          id: "895abf36-45f3-4721-994e-39c861e150e3",
          name: "Salmon - Atlantic, Skin On",
          description:
            "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
          imgURL: "http://dummyimage.com/154x100.png/cc0000/ffffff",
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <div>
          <h2>Products</h2>
        </div>
        <Row>
          {products.map((product) => (
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={product.imgURL}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{product.title}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({addToCart}) => <Button onClick={addToCart}>Add to cart</Button>}
            
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
