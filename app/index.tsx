import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Index() {
  // Keep the card responsive on different screen sizes
  const cardWidth = Math.min(width - 90, 360);

  

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F7F9FC',
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
           flexGrow: 1,
            alignItems: 'center',
           justifyContent: 'space-between',
           paddingTop: 40,
           paddingBottom: 30,
        }}
      >

        {/* ================= HEADER ================= */}

        
        <View  style={{
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: '#03224D',
              fontSize: width < 500 ? 22 : 28,
              lineHeight: width < 500 ? 30 : 36,
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            Welcome Home
          </Text>

          <Text
            style={{
              color: '#44474F',
              fontSize: width < 500 ? 12 : 14,
              lineHeight: 18,
              fontWeight: '400',
              textAlign: 'center',
              maxWidth: 520,
              marginTop: 10,
            }}
          >
            Discover your future residence with our
            {'\n'}
            advanced AR property engine.
          </Text>
        </View>


        {/* ================= IMAGE CARD ================= */}

        <View
          style={{
            width: cardWidth,
            marginTop: 5,

            backgroundColor: '#FFFFFF',

            borderRadius: 28,

            overflow: 'hidden',

            shadowColor: '#1F3864',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.08,
            shadowRadius: 24,

            elevation: 5,
          }}
        >

          {/* IMAGE */}

          <View
            style={{
              width: '100%',
              aspectRatio: 4 / 3,
            }}
          >
            <Image
              source={require('../assets/images/onboarding/hero-1.jpg')}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
            />
          </View>


          {/* ================= TEXT BELOW IMAGE ================= */}

          <View
            style={{
              minHeight: 70,

              paddingHorizontal: 20,
              paddingVertical: 10,

              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: '#FFFFFF',
            }}
          >
            <Text
              style={{
                color: '#03224D',
                fontSize: width < 500 ? 15 : 17,
                lineHeight: 22,
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Walk through homes in true AR using just 6 photos
            </Text>
          </View>

        </View>


        {/* ================= GET STARTED ================= */}

        <View
          style={{
            width: '100%',
            paddingHorizontal: 100,
            
          }}
        >
          <Link
            href="/role-select"
            asChild
          >
            <TouchableOpacity
              activeOpacity={0.85}
              style={{
                width: '100%',
                height: 38,

                backgroundColor: '#03224D',

                borderRadius: 60,

                justifyContent: 'center',
                alignItems: 'center',

                shadowColor: '#03224D',
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.18,
                shadowRadius: 16,

                elevation: 6,
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: width < 500 ? 15 : 18,
                  fontWeight: '500',
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>


          {/* ================= LOGIN ================= */}

          <Link
            href="/(auth)/login"
            asChild
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: '#44474F',
                  fontSize: width < 500 ? 14 : 16,
                  lineHeight: 22,
                  textAlign: 'center',
                }}
              >
                Already have an account?{' '}

                <Text
                  style={{
                    color: '#03224D',
                    fontWeight: '700',
                    fontSize: width < 500 ? 13 : 16,
                    lineHeight: 22,
                  }}
                >
                  Log in
                </Text>
              </Text>
            </TouchableOpacity>
          </Link>

        </View>

      </ScrollView>
    </View>
  );
}