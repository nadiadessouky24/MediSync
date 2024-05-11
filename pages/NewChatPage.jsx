import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { getSpecialities } from "../api/specialities";
import { colors } from "../constants";
import { getDoctorsBySpeciality } from "../api/doctor";
import { addChat } from "../api/chats";
import { useNavigation } from "@react-navigation/native";

export default function NewChatPage() {
  const [selected, setSelected] = React.useState("");

  const [specialities, setSpecialities] = React.useState([]);
  const [doctors, setDoctors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    setLoading(true);
    getSpecialities()
      .then((res) => {
        console.log(res);
        setSpecialities(res.map((r) => ({ key: r.id, value: r.name })));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selected) {
      setLoading(true);
      getDoctorsBySpeciality(selected)
        .then((res) => {
          console.log(res);
          setDoctors(res);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [selected]);

  if (loading)
    return (
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={colors.primary} />
      </View>
    );

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        // alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={specialities}
          save="value"
          boxStyles={{ width: "100%" }}
          dropdownItemStyles={{ width: "100%" }}
          dropdownStyles={{ width: "100%" }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <FlatList
          style={{ marginTop: 10, width: "100%", paddingHorizontal: 30 }}
          data={doctors}
          renderItem={({ item }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottomColor: colors.lightGray,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                width: "100%",
                marginTop: 5,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 45,
                  marginRight: 10,
                }}
              />
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: colors.black,
                  }}
                >
                  {item.name}
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    color: colors.black,
                  }}
                >
                  {item.speciality}
                </Text>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    width: "100%",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primary,
                      borderRadius: 5,
                    }}
                    onPress={() => {
                      addChat({
                        name: item.name,
                      }).then((chat) => {
                        navigation.navigate("Chat", {
                          id: chat.id,
                          name:"Dr. Sam Smith"
                        });
                      });
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        padding: 5,
                      }}
                    >
                      Start Chat
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text
              style={{
                fontSize: 20,
                color: colors.black,
                textAlign: "center",
              }}
            >
              No doctors found. Select a speciality to see doctors.
            </Text>
          }
        />
      </View>
    </View>
  );
}
