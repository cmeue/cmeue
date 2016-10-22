import React from "react";
import ConversationCardList from "../../components/chatsPage/ConversationCardList/ConversationCardList";
import "./ChatsPageStyles.css";

class ChatsPage extends React.Component {
    render() {
        return (
            <div>
                <ConversationCardList />
            </div>
        );
    }
}

export default ChatsPage;
