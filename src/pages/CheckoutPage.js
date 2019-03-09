import React from 'react'

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stepList: ['確認購物車', '付款與運送', '確認訂單'],
      activeStep: 0,
      loading: true,
      purchaseList: null
    }
  }

  componentDidMount() {
    if (this.state.purchaseList === null) {
      const data = JSON.parse(localStorage.getItem('PURCHASE_LIST'))
      this.setState({ purchaseList: data, loading: false })
    }
  }

  onClickNextStep = () => {
    this.setState({ activeStep: this.state.activeStep + 1 })
  }

  onClickPrevStep = () => {
    this.setState({ activeStep: this.state.activeStep - 1 })
  }

  render() {
    const { loading, purchaseList, stepList, activeStep } = this.state
    return (
      <div className="CheckoutPage-wrapper">
        <div className="CheckoutPage-stepWrapper">
          {this.state.stepList.map((step, idx) =>
            (
              <div key={idx} className={idx === activeStep ? "CheckoutPage-step CheckoutPage-active" : "CheckoutPage-step"} />
            )
          )}
        </div>
        <div>
          <div style={{ fontSize: '20px', marginBottom: '20px' }}>{stepList[activeStep]}</div>
          <div className="CheckoutPage-detailWrapper">
            {activeStep === 0 && !loading ? (
              <div>
                {purchaseList.items.map((prod, idx) => (
                  <div key={idx} className="CheckoutPage-itemRow">
                    <div>{prod.name}</div>
                    <div>{prod.qty}</div>
                    <button className="btn-s">刪除</button>
                  </div>
                ))}
                <div style={{ width: '200px', margin: '0 0 0 auto', padding: '20px 0', textAlign: 'left' }}>
                  <div>{`共 ${purchaseList.items.length} 項`}</div>
                  <div>{`金額小計 ${purchaseList.totalPrice} 元`}</div>
                </div>
              </div>) : <div>loading...</div>}
            {activeStep === 1 && <div>付款與運送</div>}
          </div>
          {this.state.activeStep === 0 && <button className="btn-l btn-gray">繼續購物</button>}
          {this.state.activeStep > 0 && <button className="btn-l" onClick={this.onClickPrevStep}>前一步</button>}
          <button className="btn-l" onClick={this.onClickNextStep}>下一步</button>
        </div>
      </div>
    )
  }
}

export default CheckoutPage