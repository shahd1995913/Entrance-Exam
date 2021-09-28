import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'


export class Updateform extends Component {
    render() {
        return (
            <Form onSubmit={e=>{this.props.updateForm(e)}}>
            <Form.Group className="mb-3">
              <Form.Label>Name </Form.Label>
            <input  value={this.props.name}  onChange={this.props.updateNameFun}/>
            </Form.Group>
          
            <Form.Group className="mb-3" >
              <Form.Label>Price</Form.Label>
              <input value={this.props.price}  onChange={this.props.updatePriceFun}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Image</Form.Label>
              <input value={this.props.image}  onChange={this.props.updateImageFun}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        )
    }
}

export default Updateform
