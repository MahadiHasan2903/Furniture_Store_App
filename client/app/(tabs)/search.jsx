import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import styles from "@/styles/Search/search.style";
import { COLORS, SIZES } from "@/constants/index";
import { BASE_URL } from "@/config/constants";
import SearchTile from "@/components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/search-product/${searchKey}`
      );

      setSearchResult(response.data.searchResult);
    } catch (error) {
      console.log("Error while fetching:", error);
    } finally {
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            placeholder="What are you looking for?"
            onChangeText={setSearchKey}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Feather
              name="search"
              color={COLORS.offWhite}
              size={SIZES.xLarge}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("@/assets/images/search.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          style={{ marginHorizontal: 12 }}
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
