import React, { useState } from "react";
import { ScrollView,Text, View ,TextInput, Button, StyleSheet, Image,  TouchableOpacity } from "react-native";
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Index() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ogrenciId, setOgrenciId] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Lütfen görüşeceğiniz kişiyi seçiniz");
  const [message, setMessage] = useState("Randevu Sebebinizi Yazınız");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
 
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://logowik.com/content/uploads/images/tc-istanbul-universitesi9793.jpg",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1286780771177562112/CvpXSNuN_400x400.jpg",
          }}
        />
      </View>
      <Text>Adınız Soyadınız</Text>
      <TextInput
        style={styles.input}
        placeholder="Adınız Soyadınız"
        onChangeText={(text) => setName(text)}
      />
<Text> E-posta adresiniz</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta adresiniz"
        onChangeText={(text) => setEmail(text)}
      />
       <Text>Öğrenci Numaranız</Text>
      <TextInput
        style={styles.input}
        placeholder="Öğrenci Numaranız"
        onChangeText={(text) => setOgrenciId(text)}
      />
<Text>Görüşeceğiniz kişiyi seçiniz</Text>
      <Picker
        selectedValue ={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      style={styles.input}
      >
        <Picker.Item label="Doç.Dr.Zeki Özen" value="Zeki Özen" />
        <Picker.Item label="Doç.Dr.Elif Kartal" value="Elif Kartal" />
        <Picker.Item label="Doç.Dr.Emre Akadal" value="Emre Akadal" />
        <Picker.Item label="Prof.Dr.Rasim Özcan" value="Rasim Özcan" />
        <Picker.Item label="Doç.Dr.Gökhan Övenç" value="Gökhan Övenç" />
        <Picker.Item label="Dr.Waqar Badshah" value="Waqar Badshah" />
</Picker> <Text>Seçilen : {selectedValue}</Text>
      

<TextInput
        style={styles.input}
        multiline = {true}
        numberOfLines = {10000} 
        placeholder="Randevu Sebebinizi Yazınız"
        onChangeText={(text) => setMessage(text)}
      />

<Text style={{ marginTop: 20 }}>Randevu Tarihi</Text>
        
          <Text>{date.toLocaleDateString()}</Text>
          <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShow(true)}
        ></TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}

        <Text style ={{ fontWeight: "bold" }}> İstanbul Üniversitesi İktisat Fakültesi Yönetim Bilişim Sistemleri Bolumü </Text>
        
      <Button title="Kaydet" onPress={() => alert("Randevu talebiniz kaydedilmiştir.")} />
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20, // space between images and input fields
  },
  dateButton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dateText: {
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 10, // space between images
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});