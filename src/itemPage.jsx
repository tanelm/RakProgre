import React from "react";
import Header from "./Header.jsx";
import PropTypes from "prop-types";


class itemPage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {};
    }

    fetchItem = () => {
        fetch(`/api/items/${this.props.match.params.itemId}`)
        .then(res =>{
            return res.json();
        })
        .then(item =>{
            console.log("item ", item);
            this.setState( {
                ...item
            });
        })
        .catch(err =>{
            console.log("item page ", err);
        });
    }

    componentDidMount(){
        this.fetchItem();
    }

    render(){
        return(
            <>
            <Header/>
            <div className={"itemContainer"}>
                <img src={this.state.imgSrc}/>
                <div className={"item__title"}>{this.state.title}</div>
                <div className={"item__price"}>{this.state.price}</div>
            </div>
            </>   
        );
    }
}

itemPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default itemPage;