import pino from 'pino'

const logger = pino({ target: 'pino-pretty', options: { colorize: true } })

export default logger
