Funcionalidade: Banner de Consentimento de Cookies

@engagesphere
Cenário: aceita as políticas de cookies
Dado que acesso o app EngageSphare sem nenhum cookie definido
E vejo o banner de consentimento de cookies
Quando clico no botão Aceitar
Então o banner de cookies é fechado
E o cookie cookieConsent é definido com o valor accepted

@engagesphere
Cenário: recusa as políticas de cookies
Dado que acesso o app EngageSphare sem nenhum cookie definido
E vejo o banner de consentimento de cookies
Quando clico no botão Recusar
Então o banner de cookies é fechado
E o cookie cookieConsent é definido com o valor declined
