# Interest Explorer Mobile App

A React Native mobile application for discovering and exploring interests, built with Expo.

## 🚀 Features

- **Bilingual Support**: English and Arabic with RTL layout support
- **Dark/Light Theme**: Automatic theme switching with user preference
- **Offline Support**: Works offline with cached content
- **Native Navigation**: Bottom tab navigation with custom sidebar
- **Interest-based Feed**: Personalized content based on user interests
- **Search Functionality**: Find people, posts, and topics
- **Messaging System**: Real-time messaging interface
- **Profile Management**: Complete user profile with interests
- **Content Creation**: Create posts with text, images, and videos

## 📱 Building APK

### Prerequisites

1. Install Node.js (v16 or later)
2. Install Expo CLI: `npm install -g @expo/cli`
3. Install EAS CLI: `npm install -g @expo/eas-cli`
4. Create an Expo account at [expo.dev](https://expo.dev)

### Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd interest-explorer-mobile
```

2. Install dependencies
```bash
npm install
```

3. Login to Expo
```bash
eas login
```

4. Initialize EAS build
```bash
eas build:configure
```

### Building APK

#### Option 1: Development Build (for testing)
```bash
eas build --platform android --profile development
```

#### Option 2: Preview Build (APK for distribution)
```bash
eas build --platform android --profile preview
```

#### Option 3: Production Build (AAB for Play Store)
```bash
eas build --platform android --profile production
```

### Local Development

1. Start the development server
```bash
npm start
```

2. Run on Android emulator/device
```bash
npm run android
```

3. Run on iOS simulator (macOS only)
```bash
npm run ios
```

## 🔧 Configuration

### App Configuration (`app.json`)

- **Package Name**: `com.interestexplorer.mobile`
- **Version**: 1.0.0
- **Orientation**: Portrait
- **Required Permissions**:
  - Internet access
  - Camera access
  - Storage access
  - Network state

### Build Profiles (`eas.json`)

- **Development**: For internal testing with dev client
- **Preview**: Generates APK for distribution outside Play Store
- **Production**: Generates AAB for Play Store submission

## 📦 APK Distribution

After building, you can:

1. **Download APK**: From the Expo dashboard or build logs
2. **Install on Android**: Transfer APK file to device and install
3. **Distribute**: Share APK file for testing or sideloading

### Installation Instructions for Users

1. Download the APK file
2. Enable "Install from Unknown Sources" in Android settings
3. Open the APK file and follow installation prompts
4. Launch "Interest Explorer" app

## 🛠 Development

### Project Structure

```
/
├── App.tsx                 # Main app entry point
├── components/            # Reusable components
│   ├── screens/          # Screen components
│   ├── ThemeContext.tsx  # Theme management
│   └── ...
├── assets/               # Images, icons, fonts
├── app.json             # Expo configuration
├── eas.json             # EAS build configuration
└── package.json         # Dependencies
```

### Key Dependencies

- **React Native**: Mobile framework
- **Expo**: Development platform and tools
- **React Navigation**: Navigation library
- **AsyncStorage**: Local data persistence
- **NetInfo**: Network connectivity
- **Vector Icons**: Icon library
- **React Native Paper**: UI components

### Adding Features

1. Create new screen in `components/screens/`
2. Add navigation route in `MainApp.tsx`
3. Update theme colors in `ThemeContext.tsx`
4. Add new dependencies in `package.json`

## 📱 Testing

### On Physical Device
1. Install Expo Go app from Play Store
2. Scan QR code from `npm start`
3. App will load in Expo Go

### On Emulator
1. Start Android emulator
2. Run `npm run android`
3. App will install automatically

## 🚢 Publishing

### Google Play Store
1. Build production AAB: `eas build --platform android --profile production`
2. Upload to Google Play Console
3. Fill out store listing information
4. Submit for review

### Direct Distribution
1. Build preview APK: `eas build --platform android --profile preview`
2. Download APK from Expo dashboard
3. Distribute APK file directly

## 🔒 Security

- App uses secure AsyncStorage for local data
- Network requests use HTTPS
- No sensitive data stored locally
- Proper permission handling for camera/storage

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes and test
4. Submit pull request

## 📞 Support

For issues and questions:
- Create GitHub issue
- Contact development team
- Check Expo documentation

---

**Note**: This app requires Android 6.0+ (API level 23) for optimal performance.
```