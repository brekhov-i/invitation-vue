import { hashPassword, generateHashForPassword } from '../config/access'

// Утилита для генерации хеша из пароля с помощью bcrypt
// Используйте эту функцию для получения правильного хеша для конфигурации
export async function generateHashFromPassword(password: string): Promise<string> {
  return await hashPassword(password)
}

// Функция для генерации хеша в консоли браузера
// Вызовите эту функцию в консоли браузера для получения хеша
export function generateHashInConsole(password: string) {
  console.log('Генерация bcrypt хеша для пароля:', password)
  
  generateHashForPassword(password).then(() => {
    console.log('Хеш пароля сгенерирован и выведен в консоль')
  }).catch(error => {
    console.error('Ошибка при генерации хеша:', error)
  })
}

// Функция для быстрой генерации хеша (без вывода в консоль)
export async function quickHashGeneration(password: string): Promise<string> {
  return await hashPassword(password)
} 