docker run -it --rm -p 4321:4321 --user $(id -u):$(id -g) -v "$(pwd):/home/app" -w /home/app node:alpine sh
