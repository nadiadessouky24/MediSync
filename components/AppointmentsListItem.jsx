import { View, TouchableOpacity, Text, Image, Button } from "react-native";

export default function AppointmentListItem({
  item: { id, name, description, image, onPress = () => {} },
}) {
  const item = {
    id: id,
    name: name,
    image: image,
    description,
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        paddingRight: 10,
        flexDirection: "row",
        paddingVertical: 15,
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        minHeight: 120,
        marginTop: 5,
      }}
    >
      {/* <TouchableOpacity
        // activeOpacity={0.5}
        style={{
          
        }}
        onPress={onPress}
      > */}
      <View
        style={{
          display: "flex",
          flex: 0.15,
          marginLeft:10,
          marginRight:60,

        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
          }}
        />
      </View>

      {/* Text view */}
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          //   width: "70%",
        }}
      >
        <Text
        style={{
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 5,
            
        }}
        >{item.name}</Text>
        <Text numberOfLines={2}
        style={{
            fontSize: 12,
            color: "grey",
            letterSpacing: 0.5,
            marginBottom: 5,
        }}
        >{item.description}</Text>
      </View>

      {/* Book Button view */}
      <View
        style={{
          display: "flex",
          flex: 0.3,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#2F80ED",
            padding: 5,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onPress}
        >
          <Text
            style={{
              color: "#fff",
              fontSize:14
            }}
          >
            Book
          </Text>
        </TouchableOpacity>
      </View>

      {/* </TouchableOpacity> */}
    </View>
  );
}
