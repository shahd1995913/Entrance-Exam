import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export class HomeFruitCard extends Component {
    render() {
        return (
            <div>
    <Card style={{ width: '18rem' }} key ={this.props.index}>
  
  <Card.Body>
    <Card.Title>{this.props.data.name}</Card.Title>
    <Card.Text>
    {this.props.data.price}
    </Card.Text>
    <Image  src={this.props.data.image}/>
    <Button variant="primary"  onClick={()=>{ this.props.deleteFruit(this.props.index) }}>Update</Button>
    <Button variant="primary"  onClick={()=>{ this.props.showUpdate(this.props.index) }}>Delete</Button>
  </Card.Body>
</Card>  
            </div>
        )
    }
}

export default HomeFruitCard