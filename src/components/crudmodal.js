// import React from 'react'
// import Modal from 'react-modal';

// const Crudmodal=(props)=>{

//     let subtitle;
//     const [modalIsOpen, setIsOpen] = React.useState(false);
  
//     function openModal() {
//       setIsOpen(true);
//     }
  
//     function afterOpenModal() {
//       subtitle.style.color = '#f00';
//     }
  
//     function closeModal() {
//       setIsOpen(false);
//     }

//   return (
//     <div>
//         <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         // style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         <button onClick={closeModal}>close</button>
//         <div>I am a modal</div>
//         <div>Name</div>
//         <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button>
//           <button>inside</button>
//           <button>the modal</button>
//         </form>
//       </Modal>
//     </div>
//     </div>
//   )
// }
// export default Crudmodal;
