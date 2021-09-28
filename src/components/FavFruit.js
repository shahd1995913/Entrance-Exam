import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Updateform from './Updateform';
import FavCard from './FavCard'
import { withAuth0 } from '@auth0/auth0-react';
class FavFruit extends React.Component {


  constructor(props) {

    super(props);
    this.state = {
      ArrayFav: [],
      showForm: false,
      showFroit: false,
      name: '',
      price: '',
      image: '',
      Index: 0,
      link: process.env.REACT_APP_PORT

    }
  }


  componentDidMount = async () => {
    const email = this.props.auth0.user.email;
    console.log(`${this.state.link}/getFavData?email=${email}`)
    let getdata = await axios.get(`${this.state.link}/getFavData?email=${email}`);

    this.setState({

      ArrayFav: getdata.data,
      showFroit: true
    })
  }



  showUpdate = (i) => {


    const chosen = this.state.ArrayFav[i];
    this.setState({
      showForm: true,
      name: chosen.name,
      image: chosen.image,
      Index: i



    })
  }




  deleteFruit = async (i) => {

    const id = this.state.ArrayFav[i]._id;
    const email = this.props.auth0.user.email;
    const removeData = await axios.delete(`${this.state.link}delete/${id}/${email}`, { id, email })
    this.setState({

      ArrayFav: removeData.data


    })




  }


  updateNameFun = (e => { this.setState({ name: e.target.value }) })
  updateImageFun = (e => { this.setState({ image: e.target.value }) })
  updatePriceFun = (e => { this.setState({ price: e.target.value }) })




  updateForm = async (e) => {

    e.preventDefault();
    const id = this.state.ArrayFav[this.state.Index]._id;
    const upDateFormFrout = {

      name: this.state.name,
      price: this.state.price,
      image: this.state.image,
      email: this.props.auth0.user.email
    }

    let up = await axios.put(`${this.state.link}/update/${id}`, upDateFormFrout)
    this.setState({
  ArrayFav:up.data,
      showForm: true


    })





  }





















render() {
  return (
    <>
      <h1>My Favorite Fruits</h1>
      {this.state.showForm && <Updateform

        name={this.state.name}
        price={this.state.price}
        image={this.state.image}
        updateNameFun={this.updateNameFun}
        updateImageFun={this.updateImageFun}
        updatePriceFun={this.updatePriceFun}
        updateForm={this.updateForm}
      />}

      {this.state.showFroit && this.state.ArrayFav.map((data, index) => {
        return (

          <FavCard
            data={data}
            index={index}
            deleteFruit={this.deleteFruit}
            showUpdate={this.showUpdate}
          />


        )
      })}



    
    </>
  )
}
}

export default withAuth0(FavFruit);
