import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { ChevronDown,MapPin } from 'lucide-react-native';
import CompData from '../Data/CompData';

const comp = CompData();

const dropdownData = [...new Set(comp.map(t => t.state))]
  .sort()
  .map(city => ({ label: city, value: city }));

const DropDown = ({ value, setValue }) => {
  return (
    <View style={styles.container}>

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        search
        data={dropdownData}
        labelField="label"
        valueField="value"
        value={value}
        placeholder="Choose a City"
        searchPlaceholder="Search..."
        
        onChange={(item) => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
        <MapPin
            name="mapPin"
            size={14}
            color="#555"
            style={styles.iconLeft}
          />
        )}

        renderRightIcon={() => (
          <ChevronDown
            name="caretdown"
            size={14}
            color="#555"
            style={styles.iconRight}
          />
        )}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 18,
  },

  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 6,
  },

  dropdown: {
    height: 52,
    borderRadius: 10,
    borderWidth: 1.4,
    borderColor: '#8e8e8e',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },

  placeholderStyle: {
    fontSize: 15,
    color: '#999',
  },

  selectedTextStyle: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 15,
    color: '#333',
  },

  iconLeft: {
    marginRight: 10,
  },

  iconRight: {
    marginLeft: 10,
  },
});
