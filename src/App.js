import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

// let fonksiyonuyla category List metodunu çağırıyoruz.
// Props : Bir componenten diğerine taşınan data.
// State : Component içinde bulunan kendine has data.
export default class App extends Component {

  state={currentCategory: ""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
