#!/bin/bash

# Script para iniciar el entorno de desarrollo del Planner
# Ejecuta: ./start-dev.sh

echo "🚀 Iniciando entorno de desarrollo..."
echo ""

cd /Users/jaranoga/Documents/Juan/Cripto/novaix-site

# Matar procesos anteriores en el puerto
lsof -ti:8787 | xargs kill -9 2>/dev/null

# 1. Iniciar servidor (API + archivos estáticos)
echo "📡 Iniciando servidor en puerto 8787..."
node server.js &
SERVER_PID=$!

sleep 2

# 2. Iniciar ngrok para HTTPS
echo "🌐 Iniciando ngrok para HTTPS..."
echo ""
echo "📱 Copia la URL https://xxxxx.ngrok-free.app/planner.html y ábrela en tu móvil"
echo ""
ngrok http 8787

# Cuando ngrok se cierre, matar el servidor
echo ""
echo "Cerrando servidor..."
kill $SERVER_PID 2>/dev/null
echo "✅ Listo"
