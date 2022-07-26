import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 1, categoryName: "Condiments" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* Props dediğinde CategoryList Component'ne erişmiş oluyorsun. */}
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
            // map fonksiyonu listenin eleman sayısını tek tek döner.
            // key eklme sebebim her elemanın kendine özgü bir Id almasını sağladım.
          ))}
        </ListGroup>
      </div>
    );
  }
}
