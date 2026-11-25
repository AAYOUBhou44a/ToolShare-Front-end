module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },

  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
}