import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import CarouselComponent from './Carousel';
import CategoryList from './CategoryList';
import SalesEvent from './SalesEvent';
import { useCustomTheme } from '../../resources/theme';
import Suggest from './Suggest';

export default function Dashboard() {
  const { colors } = useCustomTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.surface }]}>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <CarouselComponent />
        <CategoryList />
        <SalesEvent />
        <Suggest />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
