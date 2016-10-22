import React from "react";
import "./ConversationCardStyles.css";

class ConversationCard extends React.Component {
    render() {
        let conv = this.props.convInstance;
        return (
            <a href="" className="list-group-item conv-card">
                <div className="pull-left conv-card-pic">
                    <img src={conv.img} className="img-responsive conv-card-pic-img" alt={conv.name}/>
                </div>
                <span className="pull-right conv-card-sub-content">{conv.timestamp}</span>
                <div className="conv-card-info">
                    <h5 className="list-group-item-heading conv-card-header">{conv.name}</h5>
                    <p className="list-group-item-text conv-card-sub-content">
                        {conv.lastMessage}
                    </p>
                </div>
            </a>
        );
    }
}

export default ConversationCard;
