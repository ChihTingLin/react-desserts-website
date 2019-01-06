import React from "react";
import Carousel from "../Carousel/Carousel";
import Category from "../Category/Category";
import ProdList from "../ProdList/ProdList"

import "./ProdPage.css";
import prodMap from "../../static/prod-data.json"

class ProdPage extends React.Component {
  constructor() {
    super();
    this.state = {
      carousel: {
        images: [
          {
            title: "",
            src:
              "https://images.unsplash.com/photo-1527904324834-3bda86da6771?ixlib=rb-1.2.1&auto=format&fit=crop&w=1386&q=80"
          },
          {
            title: "",
            src:
              "https://images.unsplash.com/photo-1516919549054-e08258825f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          },
          {
            title: "",
            src:
              "https://images.unsplash.com/photo-1472452049192-db15def0be25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1562&q=80"
          },
          {
            title: "",
            src:
              "https://images.unsplash.com/photo-1530016910220-faf7fab2125c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=794&q=80"
          },
          {
            title: "",
            src:
              "https://images.unsplash.com/photo-1501747188-61c00b3d8ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          }
        ],
        activeIdx: 0
      },
      category: {
        list: [
          {
            name: "doughnuts",
            title: "甜甜圈<br/>Doughnuts",
            img:
              "https://images.unsplash.com/photo-1472452049192-db15def0be25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1562&q=80"
          },
          {
            name: "macaroons",
            title: "馬卡龍<br/>Macaroons",
            img:
              "https://images.unsplash.com/photo-1542293872-b3d9bcb6062f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          },
          {
            name: "cupCakes",
            title: "杯子蛋糕<br/>Cup Cakes",
            img:
              "https://images.unsplash.com/photo-1521309918586-feb7aa79a61b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
            name: "cookies",
            title: "餅乾<br/>Cookies",
            img:
              "https://images.unsplash.com/photo-1495085570317-992279e0c33d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          }
        ],
        activeIdx: 0
      }
    };
  }

  onCarouselDotClick(idx) {
    this.setState({
      carousel: { ...this.state.carousel, activeIdx: idx }
    });
  }

  onCategoryClick(idx) {
    this.setState({
      category: {
        ...this.state.category,
        activeIdx: idx
      }
    });
  }

  render() {
    const { activeIdx, list } = this.state.category;
    return (
      <div>
        <Carousel
          images={this.state.carousel.images}
          image={this.state.carousel.images[this.state.carousel.activeIdx]}
          length={this.state.carousel.images.length}
          active={this.state.carousel.activeIdx}
          onDotClick={idx => this.onCarouselDotClick(idx)}
        />
        <div className="ProdPage-slogan">
          手工製作，傳遞幸福的甜點
        </div>
        <Category
          list={this.state.category.list}
          activeIdx={this.state.category.activeIdx}
          onCategoryClick={idx => this.onCategoryClick(idx)}
        />
        <h2 dangerouslySetInnerHTML={{ __html: list[activeIdx].title }} />
        {/* {JSON.stringify(prodMap[list[activeIdx].name])} */}
        <ProdList data={prodMap[list[activeIdx].name]} />
      </div>
    );
  }
}

export default ProdPage;
