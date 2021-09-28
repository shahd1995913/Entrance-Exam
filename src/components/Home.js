import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HomeFruitCard from './HomeFruitCard';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      ArrayFrout: [],
      showData: true,
      link: process.env.REACT_APP_PORT

    }
  }


  componentDidMount = async () => {

    let returndata = await axios.get(`${this.state.link}/Fruit`);
console.log(this.state.link)
    this.setState({

      ArrayFrout: returndata.data,
      showData: true
    })
  }


  AddToFav = async(index) => {
    index.email=this.props.auth0.user.email;
   await axios.post(`${this.state.link}/addToFav`,index)
    
    }





  render() {
    return (
      <>
        <h1>API Fruits</h1>



        {this.state.showData && this.state.ArrayFrout.map((data, index) => {
return(
<HomeFruitCard
data = { data }
  index ={ index }
  AddToFav = { this.AddToFav }

/>
  

)
          

        })}



      </>
    )
  }
}

export default withAuth0 (Home);
