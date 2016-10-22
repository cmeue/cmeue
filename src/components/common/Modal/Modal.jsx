import React from "react";
import Auth from "../Auth/Auth";
import "./ModalStyles.css";

class Modal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog custom-modal-dialog" role="document">
                    <div className="modal-content custom-modal-content">
                        <div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">Sign in / Sign up</h4>
                        </div>
                        <div className="modal-body">
                            <Auth />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
