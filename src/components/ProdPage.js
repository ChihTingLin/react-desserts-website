import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import ProdList from "./ProdList";
import Modal from "./Modal";
import ProdDetail from "./ProdDetail"
import ShoppingCart from "./ShoppingCart"

import prodMap from "../static/prod-data.json"
import carouselData from '../static/carousel-data.json'
import categoryData from '../static/category-data.json'

class ProdPage extends React.Component {
  constructor() {
    super();
    this.state = {
      carousel: {
        activeIdx: 0
      },
      category: {
        activeIdx: 0
      },
      prodList: {
        activeIdx: null
      },
      shoppingCart: [

      ],
      modalOpen: false,
      qtyCounter: 0
    };
  }

  onCarouselDotClick(idx) {
    this.setState({
      carousel: { activeIdx: idx }
    });
  }

  onCategoryClick(idx) {
    this.setState({
      category: { activeIdx: idx }
    });
  }

  onProdClick(idx) {
    this.setState({
      prodList: { activeIdx: idx },
      modalOpen: true
    })
  }

  onCounterClick(value) {
    let qty = this.state.qtyCounter
    if (value < 0 && this.state.qtyCounter === 0) return
    this.setState({ qtyCounter: qty += value })
  }

  onAddToCartClick(prod) {
    let cart = [...this.state.shoppingCart]
    cart.push(prod)
    this.setState({ shoppingCart: cart })
    this.onCloseProdDetail()
  }

  resetQtyCounter() {
    this.setState({qtyCounter: 0})
  }

  onCloseProdDetail() {
    this.setState({modalOpen: false})
    this.resetQtyCounter()
  }

  renderProdDetail() {
    const cat = categoryData[this.state.category.activeIdx].name || categoryData[0].name
    const activeProd = this.state.prodList.activeIdx || 0
    const data = prodMap[cat][activeProd]
    return <ProdDetail {...data} onCounterClick={(value) => this.onCounterClick(value)} counter={this.state.qtyCounter} onAddToCartClick={(prod) => this.onAddToCartClick(prod)}/>
  }

  render() {
    return (
      <div>
        <Carousel
          images={carouselData}
          image={carouselData[this.state.carousel.activeIdx]}
          length={carouselData.length}
          active={this.state.carousel.activeIdx}
          onDotClick={idx => this.onCarouselDotClick(idx)}
        />
        <div className="ProdPage-slogan">
          手工製作，傳遞幸福的甜點
        </div>
        <Category
          list={categoryData}
          activeIdx={this.state.category.activeIdx}
          onCategoryClick={idx => this.onCategoryClick(idx)}
        />
        <h2 dangerouslySetInnerHTML={{ __html: categoryData[this.state.category.activeIdx].title }} />
        <ProdList
          data={prodMap[categoryData[this.state.category.activeIdx].name]}
          activeIdx={this.state.prodList.activeIdx}
          onProdClick={(idx) => this.onProdClick(idx)}
        />
        <Modal openModal={this.state.modalOpen} closeModal={this.onCloseProdDetail}>
          {this.state.prodList !== null && this.renderProdDetail()}
        </Modal>
        <ShoppingCart/>
      </div>
    );
  }
}

export default ProdPage;
