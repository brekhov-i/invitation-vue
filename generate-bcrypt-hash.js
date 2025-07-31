import bcrypt from 'bcryptjs';

// Функция для хеширования пароля с помощью bcrypt
async function hashPassword(password) {
  const saltRounds = 12; // Количество раундов соли (рекомендуется 10-12)
  return await bcrypt.hash(password, saltRounds);
}

// Генерируем хеш для пароля "invitation2025"
async function generateHash() {
  const password = 'invitation2025';
  
  try {
    const hash = await hashPassword(password);
    
    console.log('Пароль:', password);
    console.log('Bcrypt хеш:', hash);
    console.log('');
    console.log('Скопируйте этот хеш в ACCESS_CONFIG.SECRET_HASH');
    console.log('');
    console.log('Длина хеша:', hash.length, 'символов');
    
    // Проверяем, что хеш работает правильно
    const isValid = await bcrypt.compare(password, hash);
    console.log('Проверка хеша:', isValid ? '✅ Успешно' : '❌ Ошибка');
    
  } catch (error) {
    console.error('Ошибка при генерации хеша:', error);
  }
}

generateHash(); 