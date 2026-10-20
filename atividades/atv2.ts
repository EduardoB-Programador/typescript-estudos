type StatusPedido = "Concluido" | "Em processamento" | "Enviado" | "Extraviado"

type HTTPStatusCode = 404 | 403 | 401 | 400 | 301 | 201 | 200 | 500

type AllStatus = StatusPedido | HTTPStatusCode

const pedido: StatusPedido = "Enviado"
const code: HTTPStatusCode = 500

const status1: AllStatus = 400