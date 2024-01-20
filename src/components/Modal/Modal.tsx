import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Modal.styles';
import IPeople from 'src/types/people';

interface ItemDetailsModalProps {
  isVisible: boolean;
  item: IPeople | null;
  onClose: () => void;
}

export const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({
  isVisible,
  item,
  onClose,
}) => {
  const keys = [
    {key: 'Name: ', value: item?.name},
    {key: 'Height: ', value: item?.height},
    {key: 'Hair Color: ', value: item?.hair_color},
    {key: 'Mass: ', value: item?.mass},
    {key: 'Skin Color: ', value: item?.skin_color},
    {key: 'Eye Color: ', value: item?.eye_color},
    {key: 'Birth Year: ', value: item?.birth_year},
    {key: 'Gender: ', value: item?.gender},
  ];
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.view}>
          {keys.map((elem, index) => {
            return (
              <Text style={styles.item} key={index}>
                {elem.key}
                <Text style={styles.itemDetail}>{elem.value}</Text>
              </Text>
            );
          })}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
