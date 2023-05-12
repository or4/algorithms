import {Config} from '@jest/types'

process.env.TZ = 'UTC'

const config: Config.InitialOptions = {
  testRegex: 'src/.*\\.test\\.tsx?$',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@client(.*)$': '<rootDir>/src/app/client$1',
    '^@common(.*)$': '<rootDir>/src/common$1',
    '^@api$': '<rootDir>/src/app/api$1',
    '^@extensions(.*)$': '<rootDir>/src/app/extensions$1',
    'yougile-model': '<rootDir>/src/yougile-model',
    'yougile-lang': '<rootDir>/src/yougile-lang',
    'yougile-util': '<rootDir>/src/yougile-util',
    '^@components(.*)$': '<rootDir>/src/app/components$1',
    '^@containers(.*)$': '<rootDir>/src/app/containers$1',
    '^@store(.*)$': '<rootDir>/src/app/store$1'
  },
  modulePathIgnorePatterns: ['server'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  clearMocks: true,
  resetMocks: false
}
export default config
