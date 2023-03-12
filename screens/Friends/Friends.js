import { useContext, useState } from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { useAuthState } from "react-firebase-hooks/auth"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import * as S from "./Friends.styled"
import * as C from "../../styled/PartsComponents.styled"
import { Tab, Text, TabView, Avatar, Input } from "@rneui/themed"
import { colors } from "../../styled/colors"
import { Card, Button, Icon } from "@rneui/themed"
import { Context } from "../../Context"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { SearchBar } from "@rneui/themed"
import { Ionicons } from "@expo/vector-icons"
import { PrimaryButton } from "../SignIn/SignIn.styled"

const Friends = () => {
  const { auth, firebase, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [index, setIndex] = useState(0)
  const insets = useSafeAreaInsets()
  const [value, setValue] = useState("")
  const [posts, loading] = useCollectionData(firestore.collection("posts").orderBy("created"))
  // console.log(posts)

  const sendPost = () => {
    console.log(value)
    if (value) {
      firestore.collection("posts").add({
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        text: value,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
      setValue("")
    }
  }

  const [search, setSearch] = useState("")

  const updateSearch = search => {
    setSearch(search)
  }

  return (
    <>
      <Tab
        style={{ paddingTop: insets.top, backgroundColor: "white" }}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: colors.primary,
          height: 3
        }}
      >
        <Tab.Item
          title="Posts"
          titleStyle={{ fontSize: 14, color: colors.primary }}
        />
        <Tab.Item
          title="Add post"
          titleStyle={{ fontSize: 14, color: colors.primary }}
        />
        <Tab.Item
          title="Favorite"
          titleStyle={{ fontSize: 14, color: colors.primary }}
        />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
      >
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>
            <View style={{ display: "flex" }}>
              <Input
                value={value}
                onChangeText={text => setValue(text)}
                placeholder="Text your post..."
              />
              <Button
                title="+"
                onPress={sendPost}
              />
            </View>
            {posts ? (
              posts.map(({ uid, displayName, photoUrl, text }) => {
                return (
                  <Card key={uid + photoUrl}>
                    <S.CardTitle>
                      <Avatar
                        size={32}
                        rounded
                        source={{
                          uri: photoUrl
                        }}
                      />
                      <C.Title style={{marginLeft: 8}}>{displayName}</C.Title>
                    </S.CardTitle>
                    <Card.Divider />
                    {/* <Card.Image
                      style={{ padding: 0 }}
                      source={{
                        uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg"
                      }}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>{text}</Text>
                  </Card>
                )
              })
            ) : (
              <Text>not posts, add post now!</Text>
            )}
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>

          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  )
}

export { Friends }
