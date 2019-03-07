import React from 'react'

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      loading: true,
      purchaseList: null
    }
  }

  componentDidMount() {
    if(this.state.purchaseList === null) {
      const data = JSON.parse(localStorage.getItem('PURCHASE_LIST'))
      this.setState({purchaseList: data, loading: false})
    }
  }

  render() {
    const { loading, purchaseList } = this.state
    return (<div className="CheckoutPage-wrapper">
      <div>流程</div>
      {this.state.step === 0 && (
        <div style={{marginTop:'100px'}}>
          <div>確認購物車</div>
          <div style={{backgroundColor: 'white', minWidth:'70%', minHeight:'300px', textAlign:'left'}}>
          { !loading ? (purchaseList.items.map((prod,idx) => (
            <div key={idx}>
              <div>{prod.name}</div>
              <div>{prod.qty}</div>
            </div>
          ))) : <div>loading...</div>}
          </div>
        </div>
      )}
    </div>)
  }
}

export default CheckoutPage