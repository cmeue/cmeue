import React from "react";
import ConversationCard from "../ConversationCard/ConversationCard";

class ConversationCardList extends React.Component {
    constructor() {
        super();
        // temp data TODO: remove it when adding redux.
        const convList = [
            {
                name: "Pikachu Pokemon",
                timestamp: "10:30 AM",
                lastMessage: "lorem ipsom doler sit amert asld yogert. Oh good to see you.",
                img: "http://placekitten.com/101/101",
            }, {
                name: "Raichu Digimon",
                timestamp: "Yesterday",
                lastMessage: "lorem ipsom doler sit amert asld yogert.",
                img: "http://placekitten.com/100/100",
            }, {
                name: "Rajat Patwa",
                timestamp: "20 Oct",
                lastMessage: "lorem ipsom doler sit amert asld yogert.",
                img: "http://placekitten.com/109/102",
            }, {
                name: "Atul Sharma",
                timestamp: "12 July",
                lastMessage: "lorem ipsom doler sit amert asld yogert.",
                img: "http://placekitten.com/200/200",
            }
        ];
        this.list = [];
        convList.forEach((item, i) => {
            let element = <ConversationCard key={i} convInstance={item} />;
            this.list.push(element);
        });
    }

    render() {
        return (
            <div>
                {this.list}
            </div>
        );
    }
}

export default ConversationCardList;
