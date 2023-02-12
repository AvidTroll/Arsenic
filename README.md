# Arsenic - A Web Proxy 🌐🔒

> Welcome to Arsenic, your solution to anonymous and secure web browsing! Our proxy app uses nginx as a backend and supports a variety of sites.

💻 Recaptcha, Discord with actual login credentials (no QR code required), websocket sites, and sites with cookies all work seamlessly with Arsenic. However, some sites like YouTube's UI that depend on window.location and are minified may not work. You can still watch videos on YouTube by using the format https://proxysite.com/main/https://www.youtube.com/watch?v=vidid.

## Deployment 🚀

Before deploying Arsenic, you need to have the following:

1. Nginx
2. Certbot
3. Nodejs (for building Wombat)
4. A (sub)domain
5. A VPS

Assuming you have all of the above, follow these steps to deploy Arsenic:

* Install Docker
* Install docker-compose
* Clone the repository by running **git clone https://github.com/AvidTroll/Arsenic**
* **cd Arsenic** and edit **docker-compose.yml**
* To disable safe browsing, delete the line that says **SAFE_BROWSING**
* To change the port, edit **80:80** to **newport:80.** Note that changing **PORT=80** only changes the port inside the docker container and is only needed in weird environments  like Heroku.
* To bind the port locally, use **127.0.0.1:80:80** (do this if you're hosting multiple things and using a reverse proxy like nginx or caddy)
* If you are using a reverse proxy, set the **x-forwarded-for** header as Arsenic's rate limiter relies on this header when running in a container. For example, in nginx, * add **proxy_set_header X-Forwarded-For $remote_addr;**
* Start Arsenic by running sudo docker-compose up -d and stop it by running sudo docker-compose down
* To update Wombat to the latest version, run** git pull && sudo docker-compose up -d --build**

## License 📜
This project is licensed under the AGPL license. Wombat, which Arsenic uses, is also licensed under AGPL, so this project is required to be licensed under AGPL as well.

## Discord Server 💬
Join our Discord server, Cyx Network, for support and to provide suggestions. We are always looking for ways to improve and welcome any feedback you may have!
