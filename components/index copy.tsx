import { useRef } from 'react';
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

const SLIDES = [
  {
    image: require('../assets/images/onboarding/hero-1.jpg'),
    title: 'Walk through homes in true AR using just 6 photos',
  },
  {
    image: require('../assets/images/onboarding/hero-2.jpg'),
    title: 'Place virtual furniture and see what fits',
  },
  {
    image: require('../assets/images/onboarding/hero-3.jpg'),
    title: 'Verified listings, real prices, zero fake photos',
  },
];

export default function Index() {
  const scrollRef = useRef<ScrollView>(null);

  // Width of the card
  const cardWidth = width - 48;

  // Image height based on screen width
  const imageHeight = cardWidth * 0.97;

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: '#F7F9FC',
      }}
    >

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 82,
          paddingBottom: 40,
        }}
      >

        {/* ================================================= */}
        {/*                    HEADER                         */}
        {/* ================================================= */}

        <View
          style={{
            width: '100%',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}
        >

          <Text
            style={{
              color: '#03224D',
              fontSize: 48,
              lineHeight: 56,
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: 18,
            }}
          >
            Welcome Home
          </Text>

          <Text
            style={{
              color: '#44474F',
              fontSize: 18,
              lineHeight: 28,
              fontWeight: '500',
              textAlign: 'center',
              maxWidth: 560,
            }}
          >
            Discover your future residence with our
            advanced AR property engine.
          </Text>

        </View>


        {/* ================================================= */}
        {/*                    CAROUSEL                       */}
        {/* ================================================= */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          snapToInterval={cardWidth + 16}
          decelerationRate="fast"
          contentContainerStyle={{
            paddingHorizontal: 24,
            gap: 16,
          }}
          style={{
            width: '100%',
            marginTop: 100,
          }}
        >

          {SLIDES.map((slide, index) => (

            <View
              key={index}
              style={{
                width: cardWidth,
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

              {/* ================================================= */}
              {/*                     IMAGE                         */}
              {/* ================================================= */}

              <View
                style={{
                  width: '100%',
                  height: imageHeight,
                  backgroundColor: '#FFFFFF',
                }}
              >

                <Image
                  source={slide.image}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="cover"
                />

              </View>


              {/* ================================================= */}
              {/*                     TEXT                          */}
              {/* ================================================= */}

              <View
                style={{
                  minHeight: 150,
                  paddingHorizontal: 32,
                  paddingVertical: 28,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                }}
              >

                <Text
                  style={{
                    color: '#03224D',
                    fontSize: 24,
                    lineHeight: 32,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {slide.title}
                </Text>

              </View>

            </View>

          ))}

        </ScrollView>


        {/* ================================================= */}
        {/*                 GET STARTED                       */}
        {/* ================================================= */}

        <View
          style={{
            width: '100%',
            paddingHorizontal: 34,
            marginTop: 176,
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
                height: 110,
                backgroundColor: '#03224D',
                borderRadius: 60,

                alignItems: 'center',
                justifyContent: 'center',

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
                  fontSize: 28,
                  fontWeight: '500',
                }}
              >
                Get Started
              </Text>

            </TouchableOpacity>

          </Link>


          {/* ================================================= */}
          {/*                     LOGIN                         */}
          {/* ================================================= */}

          <Link
            href="/(auth)/login"
            asChild
          >

            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 30,
              }}
            >

              <Text
                style={{
                  color: '#44474F',
                  fontSize: 20,
                  lineHeight: 28,
                  fontWeight: '400',
                  textAlign: 'center',
                }}
              >
                Already have an account?{' '}

                <Text
                  style={{
                    color: '#03224D',
                    fontWeight: '700',
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