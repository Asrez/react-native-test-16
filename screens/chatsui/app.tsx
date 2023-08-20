import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  HStack,
  NativeBaseProvider,
  Badge,
} from 'native-base';
import SplashScreen from 'react-native-splash-screen';

const chatarray = [
  {
    id: 0,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 10,
    isOnline: true,
    time: '05 Feb',
  },
  {
    id: 1,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 12,
    isOnline: false,
    time: '06 Jan',
  },
  {
    id: 2,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 24,
    isOnline: true,
    time: '08 Mar',
  },
  {
    id: 3,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 90,
    isOnline: false,
    time: '10 Jul',
  },
  {
    id: 4,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 112,
    isOnline: true,
    time: '12 Jun',
  },
  {
    id: 5,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 40,
    isOnline: false,
    time: '16 Jan',
  },
  {
    id: 6,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 10,
    isOnline: true,
    time: '20 Mar',
  },
  {
    id: 7,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 20,
    isOnline: false,
    time: '21 Jul',
  },
  {
    id: 8,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 25,
    isOnline: true,
    time: '23 Jul',
  },
  {
    id: 9,
    title: 'Milad Tahanian',
    text: 'متن تست متن تست متن تست متن تست',
    badge: 30,
    isOnline: false,
    time: '25 Jul',
  },
];

function OneChat(item) {
  return (
    <>
      <Box margin={2}>
        <HStack>
          <Avatar size={'lg'} bg="cyan.500">
            MT
            {item.item.isOnline ? (
              <Avatar.Badge bg="green.500" />
            ) : (
              <Avatar.Badge bg="red.500" />
            )}
          </Avatar>
          <Box>
            <HStack style={{justifyContent: 'space-between',width:"82%"}}>
              <Text
                style={{
                  margin: 3,
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                {item.item.title}
              </Text>
              <Text
                style={{
                  margin: 3,
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '200',
                  color:"#515151"
                }}>
                {item.item.time}
              </Text>
            </HStack>
            <HStack style={{justifyContent: 'space-between',width:"80%"}}>
                          <Text
              style={{
                marginTop: 7.5,
                fontSize: 14,
                fontWeight: '400',
                marginLeft: 10,
              }}>
              {item.item.text}
            </Text>
            <Badge // bg="red.400"
              colorScheme="danger"
              rounded="full"
              mb={-2}
              mr={-2}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              _text={{
                fontSize: 12,
              }}>
              {item.item.badge}
            </Badge>
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Divider />
    </>
  );
}

const ChatUI = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 1500);
  return (
    <NativeBaseProvider>
      <FlatList
        data={chatarray}
        renderItem={item => {
          return <OneChat item={item.item} />;
        }}
        keyExtractor={item => item.id}
      />
    </NativeBaseProvider>
  );
};

export default ChatUI;
