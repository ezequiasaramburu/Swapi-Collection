import {useState} from 'react';
import {useFetchPeople} from 'src/api/apiProvider';
import IPeople from 'src/types/people';

export const useHomeScreen = () => {
  const people = useFetchPeople();
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

  const handleRetry = () => {
    people.refetch();
  };

  return {
    people,
    selectedItem,
    isModalOpen,
    openModal,
    closeModal,
    handleRetry,
  };
};
