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
// Modal.setAppElement("#eb-personalization-form");
function PreviewModal(props) {
  return (
    <Modal isOpen={true} contentLabel="Preview" style={customStyles}>
      <img src={props.img ?? null} alt="" />
      <button onClick={() => props.onClose(false)}>Close</button>
      <button>Add to card</button>
    </Modal>
  );
}

export default PreviewModal;
