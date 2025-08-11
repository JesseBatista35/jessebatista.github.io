from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Servir arquivos estáticos
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
def home():
    return """
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Minha App no Docker</title>
        <link rel="stylesheet" href="/static/style.css">
    </head>
    <body>
        <h1>🚀 Aplicação no Docker</h1>
        <p>Agora com HTML + CSS + JavaScript 🎨</p>
        <button onclick="mostrarMensagem()">Clique aqui</button>

        <p id="mensagem"></p>

        <script src="/static/script.js"></script>
    </body>
    </html>
    """
