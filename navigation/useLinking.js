import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: '',
        initialRouteName: 'Home',
        screens: {
          Home: {
            initialRouteName: 'Items',
            screens: {
              Items: 'items',
              Search: 'search',
              ProfileStack: {
                screens: {
                  Profile: 'profile',
                  Faq: 'faq'
                }
              }
            }
          },
          ItemDetails: {
            path: 'item/:slug',
            parse: { slug: String }
          },
        }
      }
    }
  });
}
