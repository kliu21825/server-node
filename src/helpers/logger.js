import pino from 'pino'

const logger = pino({ prettifier: { colorize: true } })

export default logger
