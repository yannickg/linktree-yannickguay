# Linktree Website Deployment Guide

This guide explains how to deploy your Linktree website using Docker.

## Prerequisites

- Docker and Docker Compose installed on your server
- A server with at least 1GB RAM and 1 CPU core
- Basic knowledge of Docker and terminal commands

## Deployment Steps

### 1. Clone the Repository

```bash
git clone https://github.com/yannickg/linktree-yannickguay.git
cd linktree-yannickguay
```

### 2. Build and Start the Docker Container

```bash
docker-compose up -d
```

This command will:
- Build the Docker image using the Dockerfile
- Start the container in detached mode (-d)
- Map port 3000 on your host to port 3000 in the container

### 3. Verify the Deployment

Your website should now be running at `http://YOUR_SERVER_IP:3000`

### 4. Setting Up a Domain (Optional)

To use a custom domain with your Linktree website, you'll need to:

1. Configure your domain's DNS settings to point to your server
2. Set up a reverse proxy (like Nginx or Traefik) to handle HTTPS and route traffic to your Docker container

#### Example Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5. Managing the Container

- **View logs**: `docker-compose logs -f`
- **Stop the container**: `docker-compose down`
- **Restart the container**: `docker-compose restart`
- **Update after code changes**:
  ```bash
  git pull
  docker-compose up -d --build
  ```

## Troubleshooting

- **Website not accessible**: Check if the container is running with `docker-compose ps`
- **Container exits immediately**: View logs with `docker-compose logs` to identify the issue
- **Changes not reflecting**: Make sure you rebuilt the image with `docker-compose up -d --build`

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Nginx Documentation](https://nginx.org/en/docs/) 