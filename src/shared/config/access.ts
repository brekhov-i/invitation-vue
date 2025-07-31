import bcrypt from 'bcryptjs'

// Конфигурация доступа к сайту
export const ACCESS_CONFIG = {
  // Секретный пароль для доступа к сайту (будет хешироваться)
  // Измените этот пароль на любой другой для защиты
  SECRET_PASSWORD: 'invitation2025',
  
  // Хеш пароля (bcrypt от SECRET_PASSWORD)
  // Этот хеш генерируется автоматически из SECRET_PASSWORD
  // Для пароля "invitation2025" хеш: $2b$12$QoEkPp9drm0XrJEO7U1EA.AZYsV487qpdde5YYQTmRMoj4iKbdHN.
  SECRET_HASH: '$2b$12$QoEkPp9drm0XrJEO7U1EA.AZYsV487qpdde5YYQTmRMoj4iKbdHN.',
  
  // Сообщения для пользователя
  MESSAGES: {
    ACCESS_DENIED: 'Доступ запрещен',
    ACCESS_DENIED_DESCRIPTION: 'Для просмотра содержимого используйте правильную ссылку'
  }
}

// Функция для хеширования пароля с помощью bcrypt
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12 // Количество раундов соли (рекомендуется 10-12)
  return await bcrypt.hash(password, saltRounds)
}

// Функция для проверки пароля
export async function verifyPassword(inputPassword: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(inputPassword, hashedPassword)
}

// Функция для генерации хеша в консоли браузера
export async function generateHashForPassword(password: string): Promise<string> {
  const hash = await hashPassword(password)
  console.log('Пароль:', password)
  console.log('Bcrypt хеш:', hash)
  console.log('Скопируйте этот хеш в ACCESS_CONFIG.SECRET_HASH')
  return hash
} 