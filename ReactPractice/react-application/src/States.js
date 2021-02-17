import React from "react";  

class States extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            ourColor: "red"
        }
    }

    // static getDerivedStateFromProps(props,state){
    //     return { ourColor: props.favouriteColor};
    // }

    componentDidMount(){
        setInterval(() => {
            this.setState({ourColor: "Yellow"});
        }, 2000);
    }

    render(){   
        return(
            <h1>my Favourite Color is: {this.state.ourColor}</h1>
        )
    }

}

export default States;