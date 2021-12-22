module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'XCkvU0R8o9BWYDQrulPJG5K4AyJUMn3I'),
    },
  },
});
