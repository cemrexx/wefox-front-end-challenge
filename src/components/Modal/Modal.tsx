import React, { useEffect  } from "react";
import useModalVisible from "../../hooks/useModalVisible";


import './styles.css';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  show: boolean;
  title: string;
}

const Modal = (props:ModalProps) => {
  const { children, onClose, show, title } = props;

  const { ref, modalVisible, setModalVisible } = useModalVisible(false);

  useEffect(() => {
    if(show){
      setModalVisible(true);
    }else{
      setModalVisible(false);
    }
  }, [setModalVisible, show]);

  return (
 
      <div  ref={ref} className={`modal ${modalVisible ? 'show' : ''}` } onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
         
        </div>
      </div>

  );
};

export default Modal;
