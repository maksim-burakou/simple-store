import { useCallback, useEffect, useRef, useState } from 'react'

const CHAT_STORAGE_KEY = '@store/chat'
const BOT_ANSWER_DELAY = 1000 // 1 second
const DEFAULT_CHAT_HISTORY = [
  {
    id: 1,
    message: `Hi! I'm Cado, manager specializing in avocado 🥑. How can I help you?`,
  },
]

const getDefaultChatHistory = () => {
  const history = localStorage.getItem(CHAT_STORAGE_KEY)

  return history ? JSON.parse(history) : DEFAULT_CHAT_HISTORY
}

export const useChat = () => {
  const [chatHistory, setChatHistory] = useState(getDefaultChatHistory)
  const listRef = useRef()

  useEffect(() => {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatHistory))

    if (listRef.current) {
      const { scrollHeight } = listRef.current
      listRef.current.scroll({ top: scrollHeight, behavior: 'smooth' })
    }
  }, [chatHistory])

  const onSubmitMessage = useCallback((message = '') => {
    if (message) {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { id: Date.now(), message, isUser: true },
      ])

      const formattedMessage = message.toLowerCase()
      if (
        formattedMessage.includes('find') ||
        formattedMessage.includes('how') ||
        formattedMessage.includes('what')
      ) {
        setTimeout(() => {
          setChatHistory((prevChatHistory) => [
            ...prevChatHistory,
            {
              id: Date.now(),
              message: 'All information you can find in the FAQ page.',
            },
          ])
        }, BOT_ANSWER_DELAY)
      }
    }
  }, [])

  return { chatHistory, onSubmitMessage, listRef }
}
