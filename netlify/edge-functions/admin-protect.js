// Edge Function per autenticazione Basic Auth della pagina admin
// Protegge la route /nomepaginacasuale-123 con username e password

const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'LaTuaPasswordMoltoSegreta';

export default async (req) => {
  const url = new URL(req.url);

  // Proteggi solo la rotta della pagina admin nascosta
  if (!url.pathname.startsWith('/nomepaginacasuale-123')) {
    return;
  }

  const authHeader = req.headers.get('authorization') || '';

  // Verifica se l'header Authorization contiene Basic Auth
  if (!authHeader.startsWith('Basic ')) {
    return new Response('Autenticazione richiesta', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Panel"',
      },
    });
  }

  // Decodifica il Base64 per ottenere username:password
  const base64Credentials = authHeader.split(' ')[1];
  let credentials;
  try {
    credentials = atob(base64Credentials);
  } catch (e) {
    return new Response('Credenziali non valide', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Panel"',
      },
    });
  }

  const [user, pass] = credentials.split(':');

  // Verifica username e password
  if (user !== ADMIN_USER || pass !== ADMIN_PASSWORD) {
    return new Response('Accesso negato', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Panel"',
      },
    });
  }

  // Credenziali corrette, lascia proseguire
  return;
};
