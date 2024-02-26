import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import usersData from './users.json';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Kiểm tra thông tin đăng nhập
    const user = usersData.find(user => user.id === username && user.password === password);
    if (user) {
      Alert.alert('Đăng nhập thành công!');
    } else {
      Alert.alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
    }
  };

  const handleRegister = () => {
    // Kiểm tra xem id đã tồn tại chưa
    const existingUser = usersData.find(user => user.id === username);
    if (existingUser) {
      Alert.alert('Tên đăng nhập đã tồn tại. Vui lòng chọn tên đăng nhập khác và và liên hệ với admin qua 0962784293.');
      return;
    }

    // Thêm tài khoản mới vào mảng
    usersData.push({ id: username, password });
    // Cập nhật file users.json với thông tin mới
    // Chú ý: Trong ứng dụng thực tế, bạn cần sử dụng một hệ thống lưu trữ dữ liệu như database thay vì lưu trực tiếp vào file
    // Ở đây, chúng ta chỉ mô phỏng việc ghi vào file để minh họa
    // Đảm bảo cài đặt quyền truy cập vào file cho ứng dụng của bạn nếu cần thiết
    // Ví dụ: AsyncStorage trong React Native hoặc các thư viện tương tự
    // Chúng ta không thể ghi trực tiếp vào file trong môi trường Expo
    Alert.alert('Đăng ký thành công!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên đăng nhập:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Text style={styles.label}>Mật khẩu:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
      <Button title="Đăng ký" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default LoginPage;
