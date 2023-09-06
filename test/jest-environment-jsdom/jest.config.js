/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@babel/runtime/helpers/interopRequireDefault$': require.resolve(
      '@babel/runtime/helpers/interopRequireDefault'
    )
  }
}

module.exports = config
