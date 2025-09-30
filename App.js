import Comment from './Comment';
import ChatScreen from './ChatScreen';
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text, 
  KeyboardAvoidingView,
  Image,
} from "react-native";


export default function App() {
  return ( <KeyboardAvoidingView>
<ChatScreen />
<Comment />

</KeyboardAvoidingView>
)
}






