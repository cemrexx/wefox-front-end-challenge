import { useState, useRef, useEffect } from 'react';

function useModalVisible(initialIsVisible: boolean) {
  const [modalVisible, setModalVisible] = useState(initialIsVisible);
  const ref = useRef<any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
        setModalVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, modalVisible, setModalVisible };
}

export default useModalVisible;
