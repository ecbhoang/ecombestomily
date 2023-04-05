import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function PreviewModal(props) {
  return (
    <Modal isOpen={true} contentLabel="Preview" style={customStyles}>
      <div>
        <img src={props.img ?? null} alt="" />
        <div>
          <button onClick={() => props.onClose(false)}>Close</button>
          <button>Add to card</button>
        </div>
      </div>
    </Modal>
  );
}

export default PreviewModal;
