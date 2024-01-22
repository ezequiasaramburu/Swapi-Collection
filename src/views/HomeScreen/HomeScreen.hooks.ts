import {useState} from 'react';
import {useFetchPeople} from 'src/api/apiProvider';
import IPeople from 'src/types/people';

export const useHomeScreen = () => {
  const {data, error, isLoading} = useFetchPeople();
  const [selectedItem, setSelectedItem] = useState<IPeople | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (item: IPeople) => {
    setIsModalOpen(!isModalOpen);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedItem(null);
  };

  return {
    data,
    isLoading,
    error,
    selectedItem,
    isModalOpen,
    openModal,
    closeModal,
  };
};
