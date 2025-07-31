import DeveloperBio from './DeveloperBio'

function DisplayBio(props) {
  return (
      props.developers.map((dev) => <DeveloperBio developer={dev} key={dev.id} />)
    )
}

export default DisplayBio

// export class DisplayBio extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          developers: [
//             new Developer(1, "Jai Haresh", "C++", 2024),
//             new Developer(2, 'Siya Vinod', 'Scratch', 2021)
//          ]
//       }
//     }
    
//   render() {
    // return (
    //   this.state.developers.map((dev) => <DeveloperBio developer={dev} key={dev.id} />)
    // )
//   }
// }

// export default DisplayBio