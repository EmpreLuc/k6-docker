@echo off
REM Limpiar el sistema Docker
echo Limpiando el sistema Docker...
docker system prune -af

REM Detener y eliminar contenedores huérfanos, volúmenes y redes no utilizados
echo Deteniendo y eliminando contenedores huérfanos...
docker-compose down --volumes --remove-orphans

REM Levantar los contenedores con la opción --build
echo Levantando los contenedores...
docker-compose up --build

echo Proceso completado.
pause
