export const HTTP_RESULT_MESSAGES = {
  user: {
    failure: {
      not_loged: 'Necesitas iniciar sesion',
      not_found: 'No se encontro el usuario',
      token_expired: 'Token expirado',
    },
    success: {},
  },
  common: {
    failure: {
      general_error: 'Error del servidor',
    },
  },
  auth: {
    success: {
      user_created: 'El usuario fue creado',
      user_loged_in: 'Bienvenido',
    },
    failure: {
      duplicated_inputs: 'Elemento duplicados:',
      user_not_created:
        'No se pudo crear el usuario, por favor intentalo denuevo mas tarde',
      user_not_loged_in:
        'No se iniciar secion, por favor intentalo denuevo mas tarde',
      bad_password: 'Contraseña incorrecta',
      user_not_found: 'No se encontro el usuario',
      expired_session: 'Tu sesion ha expirado',
      need_login: 'Debes iniciar sesion para realizar esta accion',
    },
  },
};
