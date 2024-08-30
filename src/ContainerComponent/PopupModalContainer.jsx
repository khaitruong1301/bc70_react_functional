import React from 'react'
import useRedux from '../CustomHooks/useRedux'

const PopupModalContainer = () => {
    const { state, dispatch } = useRedux();
    const {title,contentComponent,fnSubmitModal} = state.modalReducer;
    return (
        <div>
            <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                {title}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            {contentComponent}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={fnSubmitModal}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupModalContainer