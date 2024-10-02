import { ScrollView, View } from "react-native";
import AtandenceItem from "./AtandenceItem";

export default function AtandenceList() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AtandenceItem day="sabtu" date="25" />
      <AtandenceItem day="jumat" date="24" />
      <AtandenceItem day="kamis" date="23" />
      <AtandenceItem day="rabu" date="22" />
      <AtandenceItem day="selasa" date="21" />
      <AtandenceItem day="senin" date="20" />
    </ScrollView>
  );
}
