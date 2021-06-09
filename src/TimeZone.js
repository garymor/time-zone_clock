import React,{Component} from "react"
const url = "http://worldtimeapi.org/api/timezone";

class TimeZone extends Component{
  constructor(props) {
    super(props)

    this.state = { 
      isFulfild : 0,
      data : [],
      timeZone:''
    }
    this.onHandleChange =  this.onHandleChange.bind(this);
  }

  componentDidMount() {
    fetch(url).then(response => response.json())
    .then(jsonData => {
                        this.setState({
                          isFulfild:1,
                          data:jsonData})
                           })
  }

  onHandleChange(e){
    this.props.onTimeZoneChange(e.target.value)
  }

  
  
  render(){
    const {isFulfild,data} = this.state;
    return (
      <div>  
        <select onChange={this.onHandleChange}>
    { isFulfild ? 
       Object.values(data).map(e => <option value={e}>{e}</option>)
       
       : "loading"}
       </select>
    </div>    
    )
  }

}









export default TimeZone