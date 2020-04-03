import React from 'react';
import './App.css';
import pig from '../img/daisy.png'
import Form from './Form.js'
import Rank from './Rank.js'
import Header from './Header.js'
import Firebase from '../components/firebase.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { userData: [], text: '' };
    this.state = {
        test:1
 };
  
  }
  // getUserData = () => {
  //   // let ref = Firebase.database().ref();
  //   var today = new Date();
  //   var ref = Firebase.database().ref("market/" + composeHashKey(today) + "/");
  //   let array = [];
  //   ref.on('value', snapshot => {
  //     const dataset = snapshot.val();
  //     var keys = Object.keys(dataset);
  //     for (var i = 0; i < keys.length; i++) {
  //       var k = keys[i];
  //       array.push(dataset[k]);
  //     }
  //     array.sort(compareEntry); // this array is sorted from highest -> lowest, starting with 0
  //     console.log(array);
  //     this.setState({ userData: array });
  //     console.log("before: " + this.state.userData);
  //     console.log("after: " + this.state.userData[0].price);
  //   });
  // }


  componentDidMount() {
    // this.getUserData();
    // this.setState({
    //  test:10
    // }, console.log(this.state.test));
    this.setState({ test:3 }, () =>
    this.render()
  );
  console.log("outside callback" +this.state.test);
      
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `this.state.clickCounts(♻️ componentDidUpdate)`,
      this.state.test
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <img className="pig" src={pig} />
          <Header data={this.state.test} />
          <Form />
        </div>
        <div className="ranking">
          <span className="rank-title">Current price around the world</span>
          <Rank />
        </div>
      </div>
    );
  }
}
function compareEntry(a, b) {
  if (Number(a.price) > Number(b.price)) return -1;
  if (Number(b.price) > Number(a.price)) return 1;
  return 0;
}

function composeHashKey(date) {
  var fullDate = composeDateString(date);
  if (date.getHours() < 12) {
    return fullDate + "-0"; // morning price
  }
  return fullDate + "-1"; // afternoon price
}
function composeDateString(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}
export default App;
