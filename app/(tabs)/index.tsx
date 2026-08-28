import '@/global.css'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-background'>
      <Text className='text-xl font-bold text-success'>
        Welcome to Nativewind!
      </Text>
      <Link
        href='/Onboarding'
        className='mt-4 rounded bg-primary text-white p-4'
      >
        Onboarding
      </Link>
      <Link
        href='/(auth)/SignIn'
        className='mt-4 rounded bg-primary text-white p-4'
      >
        Login
      </Link>
      <Link
        href='/(auth)/SignUp'
        className='mt-4 rounded bg-primary text-white p-4'
      >
        Sign up
      </Link>
      <Link href='/subscriptions/Spotify'>Spotify Subscription</Link>
      <Link
        href={{
          pathname: '/subscriptions/[id]',
          params: { id: 'claude' },
        }}
      >
        Claude Max Subscription
      </Link>
    </View>
  )
}
